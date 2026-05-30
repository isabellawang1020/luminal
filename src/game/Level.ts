import * as THREE from 'three';
import { Locale } from '@/core/Locale';
import { SceneManager } from '@/core/Scene';
import { ShadowMask } from '@/core/ShadowMask';
import { Button, type ButtonData } from '@/game/Button';
import { Companion, type CompanionData } from '@/game/Companion';
import { Gate, type GateData } from '@/game/Gate';
import { Platform, type PlatformData } from '@/game/Platform';
import { ShadowObject, type ShadowObjectData } from '@/game/ShadowObject';
import { Walker } from '@/game/Walker';
import { Wall, type WallData } from '@/game/Wall';
import { HUD } from '@/ui/HUD';
import { findNearestWalkable, findPath, hasLineOfSight, losSimplifyPath } from '@/utils/Pathfinding';
import type { GridCell } from '@/utils/GridMapper';
import { audioManager } from '@/audio/SfxManager';

export interface WalkerSheet {
  url: string;        // sprite sheet 路径
  frameCount: number; // 帧数
  frameW: number;     // 单帧宽（px）
  frameH: number;     // 单帧高（px）
  height?: number;    // 覆盖角色高度（世界单位）
  yOffset?: number;   // 覆盖 Y 轴偏移
  indicatorXOffset?: number; // 菱形指示器 X 偏移（用于姿势不对称的角色）
}

export interface LevelConfig {
  name: string;
  platforms: PlatformData[];
  gate: GateData;
  walkerStart: { x: number; y: number };
  objects: ShadowObjectData[];
  hintArea: { x: number; y: number; width: number; height: number };
  hintText?: string;
  /** 英文版初始引导文本（语言切换时生效） */
  hintTextEn?: string;
  walkerSheet?: WalkerSheet;  // 自定义角色序列帧
  /** 自定义光源方向（省略时使用默认值 (0, 0.3, -20)） */
  shadowDirection?: { x: number; y: number; z: number };
  /** 是否隐藏旋转面板（默认显示） */
  hideRotationPanel?: boolean;
  /** 引导模式：初始只允许上移 N 次，之后解锁全部操作 */
  tutorialUpSteps?: number;
  /**
   * 桥接判定时忽略的平台 ID 列表。
   * 用于排除"不参与桥接"的平台（例如 5-1 的 left-top 通过 hiddenPlatforms 与 left-bottom 连通，
   * 不应作为桥接 gap 的端点）。
   * 仅影响 getPlatformGaps() 计算，不影响其他平台逻辑（角色仍可在平台行走）。
   */
  bridgeIgnorePlatformIds?: string[];
  /** 引导模式：初始只允许顺时针旋转 N 次，移动四键置灰，之后解锁全部操作 */
  tutorialRotateSteps?: number;
  /** 初始锁定角色移动，影子连通后自动解锁 */
  lockWalkerUntilBridge?: boolean;
  /** 关闭所有引导（提示词、黄箭头、影子连通提示等），适用于第二章及以后 */
  noGuide?: boolean;
  /** 影子连通后的提示文字 */
  bridgeHintText?: string;
  /** 影子连通后提示文字（英文） */
  bridgeHintTextEn?: string;
  /** 角色选中后的提示文字 */
  walkerSelectedHintText?: string;
  /** 角色选中后提示文字（英文） */
  walkerSelectedHintTextEn?: string;
  /** 桥接判定容差（默认 0.05）。值越大，影子越容易判定为穿过平台顶 */
  bridgeTolerance?: number;
  /** 多桥模式：支持 N 个平台、N-1 个间隙，玩家可重复挪同一物体搭多段桥 */
  multiBridge?: boolean;
  /** multiBridge 模式下，角色到达"中转平台"时的提示词（默认有兜底文本） */
  transitHintText?: string;
  /** 中转平台提示（英文）。空字符串表示全程不切换提示词 */
  transitHintTextEn?: string;
  /** 关卡全程保留 hintText 不消失（桥连通/角色移动/通关时也不 hideHint） */
  persistentHint?: boolean;
  /** 墙被移除后的切换提示词（仅 5-1 用到） */
  wallRemovedHintText?: string;
  /** 墙移除后提示（英文） */
  wallRemovedHintTextEn?: string;
  /**
   * 自动按操作类型选中物体：
   * - 点击旋转按钮 → 自动选中第一个未 disableRotate 的物体
   * - 点击移动按钮 → 自动选中第一个未 disableMove 的物体
   * 用于"两个物体同时显示控制面板"的关卡（如 4-2）
   */
  autoSelectByAction?: boolean;
  /** 可选伴随者（如：宠物狗），在某段平台 idle 踱步，主角到达后跟随 */
  companion?: CompanionData;
  /** 可选触发按钮（角色碰触后激活），用于触发隐藏平台等机关 */
  button?: ButtonData;
  /** 多按钮：用于"两个机关同时绿色"等复杂触发条件；与 button 二选一 */
  buttons?: ButtonData[];
  /** 隐藏平台：初始不计入 walkableMask，由 button 激活后逐渐显示并加入 */
  hiddenPlatforms?: PlatformData[];
  /** 隐藏平台显示动画时长（秒，默认 1.0） */
  hiddenPlatformRevealDuration?: number;
  /** 墙障碍物（5-1 黑色墙） */
  walls?: WallData[];
  /** 触发墙移除的按钮 index（指向 buttons 数组的索引，触发后调用 wall.explode） */
  wallRemoveButtonIndex?: number;
  /** 触发"显示初始隐藏物体"的按钮 index：激活后所有 initiallyHidden 物体 setHidden(false) + 自动选中第一个 */
  revealObjectsButtonIndex?: number;
  /** 控制隐藏平台的按钮 index：continuous 模式，激活时显示、变橙时隐藏 */
  hiddenPlatformButtonIndex?: number;
  /**
   * 隐藏平台分组（多组互斥/独立显隐，由 toggle 模式的 lever 按钮驱动）。
   * 每组内部独立维护 progress / direction / committed，可以并行/异步推进。
   * 与单一 hiddenPlatforms 互补：可以同时使用，互不干扰。
   */
  hiddenPlatformGroups?: HiddenPlatformGroupConfig[];
  /** 通关要求：所有角色组（含 extraGroups）都到达门才算通关。默认任一到达即通关。 */
  requireAllWalkersAtGate?: boolean;
  /**
   * 允许"两组主角相遇后合并为一队"。开启后：
   * - 每帧检测两组主角距离 < 1.0 → 合并
   * - 合并后主组成为队首，其他角色按 partyOrder 跟随
   * - 玩家只能控制主组主角，其他自动跟随
   */
  allowPartyMerge?: boolean;
  /**
   * 合并触发条件（可选，默认 = 'wall-removed' 5-1 行为）：
   * - 'wall-removed'：墙全部移除 + 两组距离 < 1.0
   * - 'bridge-connected-same-platform'：影子连通 + 两组都在同一指定 Y 平台上（用 partyMergePlatformY 配置）
   */
  partyMergeCondition?: 'wall-removed' | 'bridge-connected-same-platform';
  /**
   * 当 partyMergeCondition='bridge-connected-same-platform' 时使用：
   * 两组角色必须都在 Y = partyMergePlatformY 附近（±0.5）的同一平台上才触发合并
   */
  partyMergePlatformY?: number;
  /**
   * 合并时是否让额外组主动跑向主组主角（而非等待两组距离 < 1.0）
   * true 时：触发条件满足 → extra 组直接 setPath 跑向主组主角 → 到达后 mergeParty
   */
  partyMergeChase?: boolean;
  /**
   * 影子连通后自动通关序列：所有角色被自动控制走向门 + 触发剧情回调（变身/淡出 etc）
   * 实现层：onBridgeConnected 回调里 main.ts 监听并启动序列
   */
  autoFinishOnBridge?: boolean;
  /** 关卡开始时就合并队伍（不再有"点击切换角色组"行为） */
  partyMergedFromStart?: boolean;
  /** 主组 walker 的移动速度（默认 4.0；6-1 等慢节奏剧情关可调小） */
  walkerSpeed?: number;
  /** extra 组 walker 的移动速度（默认 4.0） */
  extraWalkerSpeed?: number;
  /**
   * 合并后的队列顺序（每个角色的 ID 数组，按队伍前→后排列）。
   * 角色 ID：
   * - 'main-walker' = 主组主角
   * - 'main-companion' = 主组伴随者
   * - 'extra-walker-N' = extraGroups[N] 的主角
   * - 'extra-companion-N' = extraGroups[N] 的伴随者
   * 默认（如 5-1 需求）：女、男、猫、狗 = ['extra-walker-0', 'main-walker', 'extra-companion-0', 'main-companion']
   */
   partyOrder?: string[];
   /** 门是否初始隐藏（默认 false）。配合 buttons 使用：所有按钮同时激活时门出现 */
  gateInitialHidden?: boolean;
  /** 额外的角色组：除了 walkerStart/walkerSheet/companion 默认主角色组之外的角色 */
  extraCharacterGroups?: ExtraCharacterGroup[];
  /**
   * 静止时让额外角色组的 walker/companion 自动面向主组主角的 X 方向。
   * 仅在没有 path（即不在移动）且未合并队伍时生效。
   */
  extraGroupsFacePartyMain?: boolean;
}

/** 隐藏平台分组配置（用于多条互斥路径或多组独立机关） */
export interface HiddenPlatformGroupConfig {
  /** 这组包含的平台 */
  platforms: PlatformData[];
  /**
   * 触发条件 - 任选一种：
   * 1. lever 模式：指向某个 toggle 按钮，当按钮 state 等于 triggerLeverState 时展示
   * 2. button 模式：指向某个 once/continuous 按钮，按钮 isActivated 时展示
   */
  triggerLeverIndex?: number;
  triggerLeverState?: 'A' | 'B';
  triggerButtonIndex?: number;
  /** 初始是否展示（默认 false，按需要 commit）。注意：true 时会自动 commit、绕过动画 */
  initiallyRevealed?: boolean;
  /** 这组的渐变动画时长（秒，默认继承顶层 hiddenPlatformRevealDuration） */
  revealDuration?: number;
}

/** 额外角色组（一个主角 + 可选伴随者） */
export interface ExtraCharacterGroup {
  /** 主角色起始位置 */
  start: { x: number; y: number };
  /** 主角色序列帧（如 wife_sheet.png） */
  sheet: WalkerSheet;
  /** 主角初始朝向（默认 'right'） */
  initialFacing?: 'left' | 'right';
  /** 可选伴随者（如 cat） */
  companion?: CompanionData;
}

export class Level {
  public readonly rootGroup = new THREE.Group();
  // experiment/shadow-rotation: 光几乎水平，使物体/光源/平台三者高度尽量接近
  private shadowDirection: THREE.Vector3;
  private readonly shadowMask: ShadowMask;
  private readonly platforms: Platform[] = [];
  private readonly shadowObjects: ShadowObject[] = [];
  private readonly gate: Gate;
  private readonly walker: Walker;
  private readonly companion: Companion | null = null;
  /** 额外角色组：每个 { walker, companion } */
  private readonly extraGroups: Array<{ walker: Walker; companion: Companion | null }> = [];
  /** 当前选中的角色组索引：0=主角色组（walker/companion），1+=extraGroups[i-1] */
  private activeGroupIndex = 0;
  get currentGroupIndex(): number { return this.activeGroupIndex; }
  /** 队伍合并状态：true 时所有角色（含 extraGroups 主角与各组 companion）跟随主组主角 */
  private   partyMerged = false;
  passSfxPlayed = false;
  /** 合并队列偏移配置（队伍中每个角色相对主组主角的 X 偏移） */
  private partyOffsets: Array<{ getWalker: () => Walker | Companion | null; offset: number }> = [];
  /** 合并判定阈值（主角距离 < threshold 时合并） */
  private static readonly MERGE_THRESHOLD = 1.0;
  private readonly button: Button | null = null;
  /** 多按钮（gate 触发用） */
  private readonly buttons: Button[] = [];
  private readonly hiddenPlatforms: Platform[] = [];
  /** 多组隐藏平台（与 hiddenPlatforms 互补；每组独立 progress/direction/committed） */
  private readonly hiddenGroups: Array<{
    cfg: HiddenPlatformGroupConfig;
    platforms: Platform[];
    progress: number;
    direction: 'show' | 'hide';
    committed: boolean;
  }> = [];
  /** 墙障碍物（Wall 实例），影响 BFS + 影子可达性 */
  private readonly walls: Array<{
    x: number; y: number; width: number; height: number; removed: boolean;
  }> = [];
  private readonly wallInstances: Wall[] = [];
  /** 墙被移除时触发的回调 */
  public onWallRemoved?: () => void;
  /** 隐藏平台显示进度 0~1（按钮激活后从 0 渐变到 1） */
  private hiddenRevealProgress = 0;
  /** 'show' = 正向展开（出现），'hide' = 反向收缩（消失） */
  private hiddenRevealDirection: 'show' | 'hide' = 'show';
  /** 隐藏平台是否已"完全显示"并加入了 walkableMask */
  private hiddenPlatformsCommitted = false;
  private readonly hintMesh: THREE.Mesh;
  private selectedIndex = -1;
  private paused = false;
  private completed = false;
  private shadowDirty = true;
  private hintTimer = 0;
  private walkerFalling = false;
  public onWalkerFell?: () => void;
  public onRestart?: () => void;
  public onTutorialUnlock?: () => void;
  public onBridgeConnected?: () => void;
  public onWalkerSelected?: () => void;
  public onLevelComplete?: () => void;
  public onWalkerStartMove?: () => void;
  /** 角色走完一段路径时触发（不一定到达终点门）。参数为角色到达点的世界坐标 */
  public onWalkerArrived?: (position: THREE.Vector2) => void;
  private tutorialStepsLeft: number;
  private tutorialRotateStepsLeft: number;
  private walkerMoveLocked: boolean;
  private walkerSelected = false;
  // 语言切换用：记录当前正在显示的提示词（中英双文）
  private currentHint: { zh: string; en?: string } | null = null;

  constructor(
    private readonly sceneManager: SceneManager,
    private readonly hud: HUD,
    public readonly config: LevelConfig,
    private readonly onComplete?: () => void,
  ) {
    this.rootGroup.name = `${config.name}-root`;
    this.sceneManager.scene.add(this.rootGroup);
    this.shadowMask = new ShadowMask(sceneManager.renderer, sceneManager.wallBounds);

    this.tutorialStepsLeft = config.tutorialUpSteps ?? 0;
    this.tutorialRotateStepsLeft = config.tutorialRotateSteps ?? 0;
    this.walkerMoveLocked = config.lockWalkerUntilBridge ?? false;

    const sd = config.shadowDirection ?? { x: 0, y: 0.3, z: -20 };
    this.shadowDirection = new THREE.Vector3(sd.x, sd.y, sd.z).normalize();

    for (const platformData of config.platforms) {
      const platform = new Platform(platformData);
      this.platforms.push(platform);
      this.rootGroup.add(platform.mesh);
    }
    this.shadowMask.buildPlatformMask(this.platforms);

    this.gate = new Gate(config.gate);
    this.rootGroup.add(this.gate.group);

    for (const objectData of config.objects) {
      const shadowObject = new ShadowObject(objectData);
      // GLB 加载完成后刷新阴影，解决初始无影子问题
      shadowObject.onGlbReady = () => this.refreshShadows();
      this.shadowObjects.push(shadowObject);
      this.rootGroup.add(shadowObject.shadowVisualMesh, shadowObject.group);
      this.shadowMask.addObject(shadowObject);
      // 初始隐藏：在所有 mesh 都 add 后再设 hidden，避免被默认 visible=true 覆盖
      if (objectData.initiallyHidden) {
        shadowObject.setHidden(true);
      }
    }

    this.walker = new Walker(
      new THREE.Vector2(config.walkerStart.x, config.walkerStart.y),
      config.walkerSheet,
      config.walkerSpeed !== undefined ? { speed: config.walkerSpeed } : undefined,
    );
    this.rootGroup.add(this.walker.group);

    if (config.companion) {
      this.companion = new Companion(config.companion);
      this.rootGroup.add(this.companion.group);
      // 配置开启时就跟随主角
      if (config.companion.startInFollow) {
        this.startCompanionFollowing();
      }
    }

    // 额外角色组：每组一个 walker + 可选 companion，进入关卡即可玩家点击切换
    if (config.extraCharacterGroups) {
      for (const groupData of config.extraCharacterGroups) {
        const w = new Walker(
          new THREE.Vector2(groupData.start.x, groupData.start.y),
          groupData.sheet,
          {
            initialFacing: groupData.initialFacing ?? 'right',
            speed: config.extraWalkerSpeed,
          },
        );
        this.rootGroup.add(w.group);
        let c: Companion | null = null;
        if (groupData.companion) {
          c = new Companion(groupData.companion);

          this.rootGroup.add(c.group);
          if (groupData.companion.startInFollow) {
            c.startFollowing(() => ({
              pos: w.position,
              isWalking: w.isWalking(),
            }));
          }
        }
        this.extraGroups.push({ walker: w, companion: c });
      }
    }

    // 隐藏平台：创建但初始不可见、不加入 walkableMask；按钮触发后逐渐显示
    if (config.hiddenPlatforms) {
      for (const data of config.hiddenPlatforms) {
        const plat = new Platform({ ...data, opacity: 0.8, color: '#7e865b' });
        plat.mesh.visible = false;
        this.hiddenPlatforms.push(plat);
        this.rootGroup.add(plat.mesh);
      }
    }

    // 多组隐藏平台：每组独立 progress/direction/committed
    let anyInitiallyRevealed = false;
    if (config.hiddenPlatformGroups) {
      for (const groupCfg of config.hiddenPlatformGroups) {
        const platforms: Platform[] = [];
        for (const data of groupCfg.platforms) {
          const plat = new Platform({ ...data, opacity: 0.8, color: '#7e865b' });
          plat.mesh.visible = !!groupCfg.initiallyRevealed;
          if (!groupCfg.initiallyRevealed) plat.mesh.scale.x = 0;
          platforms.push(plat);
          this.rootGroup.add(plat.mesh);
        }
        const state = {
          cfg: groupCfg,
          platforms,
          progress: groupCfg.initiallyRevealed ? platforms.length + 1 : 0,
          // 初始 direction：可见组用 'show'（已 commit 后不再推进），不可见组用 'hide'（progress=0 静默）
          direction: (groupCfg.initiallyRevealed ? 'show' : 'hide') as 'show' | 'hide',
          committed: false,
        };
        this.hiddenGroups.push(state);
        // 若初始已展开，立即 commit
        if (groupCfg.initiallyRevealed) {
          state.committed = true;
          for (const p of platforms) this.platforms.push(p);
          anyInitiallyRevealed = true;
        }
      }
      // 至少有一组初始展开 → 重建 platformMask（构造函数早些行已经 build 过一次，但那时不含 hiddenGroups）
      if (anyInitiallyRevealed) {
        this.shadowMask.buildPlatformMask(this.platforms);
      }
    }

    // 触发按钮：角色碰触后激活，激活后触发隐藏平台显示
    if (config.button) {
      this.button = new Button(config.button);
      this.rootGroup.add(this.button.group);
      this.button.onActivated(() => {
        // 按钮激活后开始显示隐藏平台（各段在 update 里按顺序渐次显示）
        this.hiddenRevealProgress = 0;
        for (const plat of this.hiddenPlatforms) {
          plat.mesh.visible = true;
          plat.mesh.scale.x = 0; // 起始隐藏，update 里按顺序逐段显示
          // 锚点提前移到左边缘，避免第一帧闪一下
          plat.mesh.position.x = plat.data.x - plat.data.width / 2;
        }
      });
    }

    // 多按钮：用于"全部激活时才触发"的复杂条件（如 4-2 双机关开门）
    if (config.buttons) {
      for (const bData of config.buttons) {
        const btn = new Button(bData);
        this.rootGroup.add(btn.group);
        this.buttons.push(btn);
        // 每个按钮状态变化时检查整体：全部 activated 时让门出现 + 所有角色自动走向门
        const checkAllActivated = () => {
          if (this.buttons.every((b) => b.isActivated) && !this.gate.isVisible) {
            this.gate.setHidden(false);
            this.autoMoveAllWalkersToGate();
          }
        };
        btn.onActivated(checkAllActivated);
      }
    }

    // 门初始隐藏（用于"完成机关后才出现门"的玩法）
    if (config.gateInitialHidden) {
      this.gate.setHidden(true);
    }

    // 墙障碍物：影响 BFS + 影子覆盖
    if (config.walls) {
      for (const wd of config.walls) {
        const wall = new Wall(wd);
        this.wallInstances.push(wall);
        this.walls.push({ ...wd, removed: false });
        this.rootGroup.add(wall.mesh, wall.cracks);
      }
      // 把墙范围告知 ShadowMask（影响 walkableMask）
      // 给 BFS 用的墙 rect 在 X 方向外扩 0.4（左右各 0.2），避免角色中心点贴边时 sprite 重叠到墙里
      this.shadowMask.setWalls(this.getBfsWallRects());
    }

    // 关联按钮：墙移除按钮
    if (config.wallRemoveButtonIndex !== undefined) {
      const btnIdx = config.wallRemoveButtonIndex;
      const btn = this.buttons[btnIdx];
      if (btn && this.wallInstances.length > 0) {
        btn.onActivated(() => {
          // 墙状态置为 removed + 触发爆炸 + 刷新 ShadowMask
          for (let i = 0; i < this.wallInstances.length; i += 1) {
            const w = this.wallInstances[i];
            const wState = this.walls[i];
            if (wState && !wState.removed) {
              wState.removed = true;
              w.explode(() => {});
            }
          }
          this.shadowMask.setWalls(this.getBfsWallRects()); // 重算（所有墙都 removed → 空）
          this.refreshShadows(); // 重算桥接（影子原本被墙挡住的现在能用了）
          // 自动选中第一个物体（如蛋糕），让玩家立即可操作
          this.selectLeftmostObject();
          this.onWallRemoved?.();
        });
      }
    }

    // 关联按钮：显示初始隐藏的物体（机关激活 → 物体+影子显示并自动选中）
    if (config.revealObjectsButtonIndex !== undefined) {
      const btn = this.buttons[config.revealObjectsButtonIndex];
      if (btn) {
        btn.onActivated(() => {
          let firstRevealedIdx = -1;
          for (let i = 0; i < this.shadowObjects.length; i += 1) {
            const obj = this.shadowObjects[i];
            if (obj.data.initiallyHidden) {
              obj.setHidden(false);
              if (firstRevealedIdx === -1) firstRevealedIdx = i;
            }
          }
          if (firstRevealedIdx >= 0) {
            // 重算影子和桥接（之前隐藏时不参与 mask）
            this.refreshShadows();
            // 直接选中第一个被显示的物体（绕过 selectLeftmostObject 的"墙在时禁选"判断）
            this.setSelectedObject(firstRevealedIdx);
          }
        });
      }
    }

    // 多组隐藏平台 → 绑定 lever / button 触发器
    for (const grp of this.hiddenGroups) {
      // toggle 模式触发：state 与 triggerLeverState 一致时展示，否则隐藏
      if (grp.cfg.triggerLeverIndex !== undefined) {
        const lever = this.buttons[grp.cfg.triggerLeverIndex];
        if (lever) {
          lever.onToggle((state) => {
            const shouldReveal = state === (grp.cfg.triggerLeverState ?? 'A');
            this.startHiddenGroupTransition(grp, shouldReveal);
          });
          // 初始：lever 当前 state 是否匹配 → 决定是否要展开（initiallyRevealed 已处理初始可视，
          //       这里只在不一致时主动收起，避免 lever 初始 state=B 但 group 配 stateA 的错配）
          const initShouldReveal = lever.currentToggleState === (grp.cfg.triggerLeverState ?? 'A');
          if (!grp.cfg.initiallyRevealed && initShouldReveal) {
            this.startHiddenGroupTransition(grp, true);
          } else if (grp.cfg.initiallyRevealed && !initShouldReveal) {
            this.startHiddenGroupTransition(grp, false);
          }
        }
      } else if (grp.cfg.triggerButtonIndex !== undefined) {
        // 普通按钮模式：once/continuous 用 onActivated/onDeactivated
        const btn = this.buttons[grp.cfg.triggerButtonIndex];
        if (btn) {
          btn.onActivated(() => this.startHiddenGroupTransition(grp, true));
          btn.onDeactivated(() => this.startHiddenGroupTransition(grp, false));
        }
      }
    }

    // 关联按钮：隐藏平台开关（continuous 模式：激活时显示、变橙时隐藏）
    if (config.hiddenPlatformButtonIndex !== undefined && this.hiddenPlatforms.length > 0) {
      const btnIdx = config.hiddenPlatformButtonIndex;
      const btn = this.buttons[btnIdx];
      if (btn) {
        btn.onActivated(() => {
          this.hiddenPlatformsCommitted = false;
          this.hiddenRevealDirection = 'show';
          this.hiddenRevealProgress = 0;
          for (const plat of this.hiddenPlatforms) {
            plat.mesh.visible = true;
            plat.mesh.scale.x = 0;
            plat.mesh.position.x = plat.data.x - plat.data.width / 2;
          }
        });
        btn.onDeactivated(() => {
          // 机关变橙 → 反向播放隐藏动画
          // 立即把平台从 platformMask 移除（避免角色还能走）
          this.hiddenPlatformsCommitted = false;
          for (const plat of this.hiddenPlatforms) {
            const idx = this.platforms.indexOf(plat);
            if (idx >= 0) this.platforms.splice(idx, 1);
          }
          this.shadowMask.buildPlatformMask(this.platforms);
          this.checkBridgeConnected();
          // 启动反向动画：当前进度（满）→ 0
          this.hiddenRevealDirection = 'hide';
          const n = this.hiddenPlatforms.length;
          this.hiddenRevealProgress = n + 1; // 从满进度开始递减
        });
      }
    }

    this.hintMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(config.hintArea.width, config.hintArea.height),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#fff0ab'),
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    );
    this.hintMesh.position.set(config.hintArea.x, config.hintArea.y, 0.12);
    this.rootGroup.add(this.hintMesh);

    this.refreshShadows();
    // 若存在未移除的墙，进关不默认选中物体（玩家需先移除墙才能操作）
    const hasActiveWall = this.walls.some((w) => !w.removed);
    if (this.shadowObjects.length > 0 && !hasActiveWall) {
      const leftmostIndex = this.shadowObjects.reduce((bestIdx, obj, idx, arr) =>
        obj.group.position.x < arr[bestIdx].group.position.x ? idx : bestIdx, 0);
      this.setSelectedObject(leftmostIndex);
    }
    // 初始就合并队伍（6-1）：四角色作为一组
    if (config.partyMergedFromStart && config.allowPartyMerge && this.extraGroups.length > 0) {
      this.mergeParty();
    }
  }

  /** 角色移动是否被锁定（影子未连通前） */
  get isWalkerMoveLocked(): boolean {
    return this.walkerMoveLocked;
  }

  get isWalkerSelected(): boolean {
    return this.walkerSelected;
  }

  get walkerWorldPosition(): THREE.Vector2 {
    return this.activeWalker.position;
  }

  /** 暴露 companion 给外部使用（如 main.ts 在角色到达中转平台时触发 follow） */
  get companionInstance(): Companion | null {
    return this.companion;
  }

  /** 暴露主组 walker / companion 给外部（6-1 剧情用） */
  get mainWalker(): Walker { return this.walker; }
  get mainCompanion(): Companion | null { return this.companion; }
  /** 暴露 extra 组 walker / companion 给外部 */
  getExtraWalker(index: number): Walker | null {
    return this.extraGroups[index]?.walker ?? null;
  }
  getExtraCompanion(index: number): Companion | null {
    return this.extraGroups[index]?.companion ?? null;
  }
  /** 角色总数（含 extra） */
  get extraGroupCount(): number { return this.extraGroups.length; }

  /**
   * 记录当前正在显示的提示词（中英双文）。
   * 返回当前 Locale 下应显示的文本，便于外部传给 zoneOverlay。
   */
  setHintText(zh: string, en?: string): string {
    this.currentHint = { zh, en };
    return Locale.current === 'zh' ? zh : (en ?? zh);
  }

  /**
   * 语言切换时刷新当前提示词（返回翻译后的文本）。
   * 如果当前没有提示词正在显示，返回 null，调用方应跳过 zoneOverlay 更新。
   */
  refreshHintText(): string | null {
    if (!this.currentHint) return null;
    const { zh, en } = this.currentHint;
    return Locale.current === 'zh' ? zh : (en ?? zh);
  }

  /** 让所有角色自动走向门 + 触发 onAutoFinish 回调（6-1 剧情用） */
  triggerAutoFinish(): void {
    if ((this as any)._autoFinishTriggered) return;
    (this as any)._autoFinishTriggered = true;
    // 推迟一帧，让外部（main.ts bindLevelCallbacks）有时间注册 onAutoFinish 回调
    setTimeout(() => {
      this.autoMoveAllWalkersToGate();
      this.onAutoFinish?.();
    }, 0);
  }
  /** 自动通关触发回调（影子连通后） */
  public onAutoFinish?: () => void;

  /** 让 companion 进入跟随模式：跟随主角的位置 */
  startCompanionFollowing(): void {
    this.companion?.startFollowing(() => ({
      pos: this.walker.position,
      isWalking: this.walker.isWalking(),
    }));
  }

  get gateWorldPosition(): { x: number; y: number } {
    return { x: this.config.gate.x, y: this.config.gate.y };
  }

  /** 当前活跃的主角色（玩家正在控制的）：activeGroupIndex 决定选谁 */
  private get activeWalker(): Walker {
    if (this.activeGroupIndex === 0) return this.walker;
    return this.extraGroups[this.activeGroupIndex - 1]?.walker ?? this.walker;
  }

  /** 当前活跃组的伴随者 */
  private get activeCompanion(): Companion | null {
    if (this.activeGroupIndex === 0) return this.companion;
    return this.extraGroups[this.activeGroupIndex - 1]?.companion ?? null;
  }

  /** 所有 walker 列表（含主角色组） */
  private get allWalkers(): Walker[] {
    return [this.walker, ...this.extraGroups.map((g) => g.walker)];
  }

  /**
   * 根据点击的世界坐标，找最近的角色组并切换到它。
   * 返回是否切换成功（false 表示所有角色都太远）。
   */
  /**
   * 点击命中角色组的判定。
   * 返回命中的组索引（0=主组，1+=extraGroups），-1=未命中任何组。
   * 命中规则优先级：(1) 精确命中 → 该 walker 所在组；(2) 响应范围命中 → 该组。
   * 调用方根据返回值决定是否切换组。
   */
   getClickedGroupIndex(worldX: number, worldY: number): number {
    if (this.extraGroups.length === 0) return -1;
    const walkers = this.allWalkers;
    // (1) 精确命中：点击落在某个 walker 的判定框内
    let bestIdx = -1;
    let bestDist = Infinity;
    for (let i = 0; i < walkers.length; i += 1) {
      const p = walkers[i].position;
      const halfX = 1.0;
      const halfY = Math.max(0.9, walkers[i].height / 2 + 0.85);
      const dx = Math.abs(worldX - p.x);
      const dy = Math.abs(worldY - p.y);
      if (dx > halfX || dy > halfY) continue;
      const d = Math.hypot(dx, dy);
      if (d < bestDist) {
        bestDist = d;
        bestIdx = i;
      }
    }
    if (bestIdx >= 0) {
      // 已合并：任意命中 → 主组
      if (this.partyMerged) return 0;
      return bestIdx;
    }
    if (this.partyMerged) return -1;
    // (2) 响应范围命中：点击落在非当前组的组响应范围内
    for (let i = 0; i < walkers.length; i += 1) {
      if (i === this.activeGroupIndex) continue;
      const area = this.getGroupResponseArea(i);
      if (!area) continue;
      if (worldX >= area.minX && worldX <= area.maxX &&
          worldY >= area.minY && worldY <= area.maxY) {
        return i;
      }
    }
    return -1;
  }

  /** 切换到指定组（如果 hitIdx != 当前组则切换） */
  trySwitchGroupByClick(worldX: number, worldY: number): boolean {
    const hitIdx = this.getClickedGroupIndex(worldX, worldY);
    if (hitIdx < 0) return false;
    if (hitIdx !== this.activeGroupIndex) {
      this.switchToGroup(hitIdx);
    }
    return true;
  }

  /**
   * 计算指定角色组的响应范围：
   *   X 范围 = 组内所有成员（walker + companion）X 最小/最大值 + 1.0 buffer
   *   Y 范围 = 组内最高（height 最大）角色的 Y 范围
   */
  private getGroupResponseArea(
    groupIndex: number,
  ): { minX: number; maxX: number; minY: number; maxY: number } | null {
    const walker = this.allWalkers[groupIndex];
    if (!walker) return null;
    const comp = groupIndex === 0
      ? this.companion
      : this.extraGroups[groupIndex - 1]?.companion ?? null;
    const members: Array<{ x: number; y: number; height: number }> = [
      { x: walker.position.x, y: walker.position.y, height: walker.height },
    ];
    if (comp) {
      members.push({
        x: comp.walker.position.x,
        y: comp.walker.position.y,
        height: comp.walker.height,
      });
    }
    const BUFFER_X = 1.0;
    const minX = Math.min(...members.map((m) => m.x)) - BUFFER_X;
    const maxX = Math.max(...members.map((m) => m.x)) + BUFFER_X;
    const tallest = members.reduce(
      (a, b) => (a.height >= b.height ? a : b),
      members[0],
    );
    const halfY = Math.max(0.9, tallest.height / 2 + 0.85);
    return { minX, maxX, minY: tallest.y - halfY, maxY: tallest.y + halfY };
  }

  /** 切换到指定角色组（隐藏其他组指示器） */
  switchToGroup(groupIndex: number): void {
    if (groupIndex < 0 || groupIndex > this.extraGroups.length) return;
    this.activeGroupIndex = groupIndex;
    // 取消所有 walker 指示器，再显示当前
    for (const w of this.allWalkers) w.hideIndicator();
    if (this.walkerSelected) this.activeWalker.showIndicator();
  }

  /** 角色组数（含主组） */
  get groupCount(): number {
    return 1 + this.extraGroups.length;
  }

  selectWalker(): void {
    this.walkerSelected = true;
    // 取消物体选中
    this.shadowObjects.forEach((o) => o.setSelected(false));
    this.selectedIndex = -1;
    this.activeWalker.showIndicator();
    this.onWalkerSelected?.();
    audioManager.play('click', 0.8);
  }

  deselectWalker(): void {
    this.walkerSelected = false;
    for (const w of this.allWalkers) w.hideIndicator();
  }

  /** 最低平台的顶面 Y（世界坐标），用于判断点击是否在平台水平线以上 */
  get platformTopY(): number {
    return Math.min(...this.config.platforms.map((p) => p.y + p.height / 2));
  }

  get pickables(): THREE.Object3D[] {
    // 初始隐藏未 reveal 的物体，其 mesh.visible=false，Three.js raycaster 会自动跳过
    return this.shadowObjects.flatMap((object) => object.pickables);
  }

  get selectedObject(): ShadowObject | null {
    return this.selectedIndex >= 0 ? this.shadowObjects[this.selectedIndex] : null;
  }

  get selectedAnchor(): THREE.Vector3 | null {
    return this.selectedObject ? this.selectedObject.anchorWorldPosition : null;
  }

  setSelectedObject(index: number | null): void {
    this.shadowObjects.forEach((object) => object.setSelected(false));
    if (index === null || index < 0 || index >= this.shadowObjects.length) {
      this.selectedIndex = -1;
      return;
    }
    this.selectedIndex = index;
    this.shadowObjects[this.selectedIndex].setSelected(true);
    // 选中物品时取消角色选中
    this.deselectWalker();
  }

  selectLeftmostObject(): void {
    if (this.shadowObjects.length === 0) {
      return;
    }
    // 过滤：只考虑当前可见的物体（initiallyHidden 且未 reveal 的不参与）
    const visibleObjs = this.shadowObjects
      .map((obj, idx) => ({ obj, idx }))
      .filter(({ obj }) => obj.group.visible);
    if (visibleObjs.length === 0) return;
    // 墙未移除时仍禁止选中物体（除非该物体由机关显式 reveal 了——这种情况外部会直接 setSelectedObject 绕过本函数）
    const hasActiveWall = this.walls.some((w) => !w.removed);
    if (hasActiveWall) return;
    this.deselectWalker();
    const leftmost = visibleObjs.reduce((best, cur) =>
      cur.obj.group.position.x < best.obj.group.position.x ? cur : best, visibleObjs[0]);
    this.setSelectedObject(leftmost.idx);
  }

  /**
   * autoSelectByAction 关卡用：按操作类型自动选中物体。
   * 旋转操作 → 选第一个未 disableRotate 的；移动操作 → 选第一个未 disableMove 的。
   * 选中的物体若已为当前 selected，则无变化。
   */
  autoSelectForAction(action: 'rotate' | 'move'): void {
    if (!this.config.autoSelectByAction) return;
    const idx = this.shadowObjects.findIndex((o) =>
      action === 'rotate' ? !o.data.disableRotate : !o.data.disableMove,
    );
    if (idx >= 0 && idx !== this.selectedIndex) {
      this.setSelectedObject(idx);
    }
  }

  cycleSelection(): void {
    if (this.shadowObjects.length === 0) {
      return;
    }
    const nextIndex = this.selectedIndex < 0 ? 0 : (this.selectedIndex + 1) % this.shadowObjects.length;
    this.setSelectedObject(nextIndex);
  }

  selectObjectFromMesh(mesh: THREE.Object3D): void {
    const owner = mesh.userData.shadowObject as ShadowObject | undefined;
    if (!owner) {
      return;
    }
    const index = this.shadowObjects.indexOf(owner);
    if (index >= 0) {
      this.setSelectedObject(index);
      audioManager.play('click', 0.8);
    }
  }

  // 检测任一主角是否正在某个影子桥上（X 在任一间隙范围内）
  // 返回 [是否在桥上, 在桥上的 Walker（如果有）]
  private getWalkerOnShadow(): Walker | null {
    if (!this.bridgeConnected) return null;
    const gaps = this.getPlatformGaps();
    for (const w of this.allWalkers) {
      const wx = w.position.x;
      for (const g of gaps) {
        if (wx > g.leftX && wx < g.rightX) return w;
      }
    }
    return null;
  }

  // 若角色在影子上则触发掉落动画+重置，返回 true 表示已拦截
  private interceptIfWalkerOnShadow(): boolean {
    const onBridge = this.getWalkerOnShadow();
    if (onBridge && !this.walkerFalling) {
      this.walkerFalling = true;
      this.onWalkerFell?.();
      onBridge.fall(() => {
        this.walkerFalling = false;
        this.restart();
      });
      return true;
    }
    return false;
  }

  rotateSelected(deltaX: number, deltaY: number, deltaZ = 0): void {
    if (this.paused || this.completed || !this.selectedObject) return;
    if (this.interceptIfWalkerOnShadow()) return;
    this.selectedObject.rotate(deltaX, deltaY, deltaZ);
    this.refreshShadows();
    // 旋转引导模式：顺时针（deltaZ > 0）时递减计数，归零则解锁
    if (deltaZ > 0 && this.tutorialRotateStepsLeft > 0) {
      this.tutorialRotateStepsLeft -= 1;
      if (this.tutorialRotateStepsLeft === 0) {
        this.onTutorialUnlock?.();
      }
    }
  }

  setSelectedRail(value: number, direction?: 'left' | 'right'): void {
    if (this.paused || this.completed || !this.selectedObject) return;
    if (direction && !this.selectedObject.canMove(direction)) return;
    if (this.interceptIfWalkerOnShadow()) return;
    this.selectedObject.setRailT(value, direction);
    this.refreshShadows();
  }

  moveSelectedY(delta: number): void {
    if (this.paused || this.completed || !this.selectedObject) return;
    const direction = delta > 0 ? 'up' : 'down';
    if (!this.selectedObject.canMove(direction)) return;
    if (this.interceptIfWalkerOnShadow()) return;
    this.selectedObject.moveY(delta);
    this.refreshShadows();
    // 引导模式：上移时递减计数，归零则解锁
    if (direction === 'up' && this.tutorialStepsLeft > 0) {
      this.tutorialStepsLeft -= 1;
      if (this.tutorialStepsLeft === 0) {
        this.onTutorialUnlock?.();
      }
    }
  }

  resetSelectedObject(): void {
    if (this.selectedObject) {
      this.selectedObject.reset();
      this.refreshShadows();
    }
  }

  setSelectedInitialT(t: number): void {
    if (!this.selectedObject) return;
    this.selectedObject.setRailT(Math.max(0, Math.min(1, t)));
    this.refreshShadows();
  }

  setSelectedRotation(x: number, y: number, z: number): void {
    if (!this.selectedObject) return;
    this.selectedObject.group.rotation.set(x, y, z);
    this.refreshShadows();
  }

  setSelectedYOffset(offset: number): void {
    if (!this.selectedObject) return;
    this.selectedObject.setYOffset(offset);
    this.refreshShadows();
  }

  setSelectedModelScale(newScale: number): void {
    if (!this.selectedObject) return;
    this.selectedObject.setModelScale(newScale);
    this.refreshShadows();
  }

  setSelectedProjScale(newScale: number): void {
    if (!this.selectedObject) return;
    this.selectedObject.setProjScale(newScale);
    this.refreshShadows();
  }

  setShadowDirectionY(y: number): void {
    const sd = this.config.shadowDirection ?? { x: 0, y: 0.3, z: -20 };
    this.shadowDirection = new THREE.Vector3(sd.x, y, sd.z).normalize();
    // 同步回 config 供 getDebugInfo 读取
    if (this.config.shadowDirection) {
      this.config.shadowDirection.y = y;
    } else {
      (this.config as { shadowDirection?: { x: number; y: number; z: number } }).shadowDirection = { x: sd.x, y, z: sd.z };
    }
    this.refreshShadows();
  }

  getShadowDirectionRawY(): number {
    return this.config.shadowDirection?.y ?? 0.3;
  }

  finalizeAdjustment(): void {
    this.refreshShadows();
  }

  attemptMove(point: THREE.Vector3): boolean {
    if (this.paused || this.completed) {
      return false;
    }
    if (this.walkerMoveLocked) {
      return false;
    }

    // 点击在门范围内 → 强制目标为门中心 X，Y 保持角色当前 Y
    const activeW = this.activeWalker;
    const clickPoint2D = new THREE.Vector2(point.x, point.y);
    const effectivePoint = this.gate.isClickedOn(clickPoint2D)
      ? new THREE.Vector3(this.config.gate.x, activeW.position.y, point.z)
      : point;

    const snappedY = this.snapToNearestSurface(effectivePoint.x, effectivePoint.y);
    const snappedPoint = new THREE.Vector3(effectivePoint.x, snappedY, effectivePoint.z);

    const startCell = this.shadowMask.mapper.worldToCell(activeW.position.x, activeW.position.y);
    // 起始 cell 可能落在 shadow-top Y 的非 walkable cell 上，需 snap
    let validStartCell = startCell;
    if (startCell && this.shadowMask.mask[startCell.row * this.shadowMask.width + startCell.col] !== 1) {
      validStartCell = findNearestWalkable(
        this.shadowMask.mask,
        this.shadowMask.width,
        this.shadowMask.height,
        startCell,
        20,
      );
    }
    const targetCellRaw = this.shadowMask.mapper.worldToCell(snappedPoint.x, snappedPoint.y);
    if (!validStartCell) {
      // eslint-disable-next-line no-console
      console.log('[path-fail] startCell snap fail', activeW.position.x, activeW.position.y, startCell);
      this.hud.showToast(Locale.t('无法到达(start)', 'Cannot reach (start)'));
      return false;
    }
    if (!targetCellRaw) {
      this.hud.showToast(Locale.t('无法到达(target)', 'Cannot reach (target)'));
      return false;
    }

    const targetCell = findNearestWalkable(
      this.shadowMask.mask,
      this.shadowMask.width,
      this.shadowMask.height,
      targetCellRaw,
      10,
    );

    if (!targetCell) {
      this.hud.showToast(Locale.t('无法到达(nearest)', 'Cannot reach (nearest)'));
      return false;
    }

    // 优先尝试"同 row 或 LOS 直线"路径，避免 BFS 选爬阶梯路径
    let path: ReturnType<typeof findPath> = null;
    const mask = this.shadowMask.mask;
    const maskW = this.shadowMask.width;
    // (a) 起点和目标同 row（或差距很小）→ 用起点 row 试 LOS
    if (Math.abs(validStartCell.row - targetCell.row) <= 2) {
      const same: GridCell = { col: validStartCell.col, row: validStartCell.row };
      const endSame: GridCell = { col: targetCell.col, row: validStartCell.row };
      if (hasLineOfSight(mask, maskW, same, endSame)) {
        path = [same, endSame];
      }
    }
    // (b) 否则尝试两点直线 LOS（无视 row 差）
    if (!path && hasLineOfSight(mask, maskW, validStartCell, targetCell)) {
      path = [validStartCell, targetCell];
    }
    if (!path) {
      const rawPath2 = findPath(this.shadowMask.mask, this.shadowMask.width, this.shadowMask.height, validStartCell, targetCell);
      if (!rawPath2) {
        this.hud.showToast(Locale.t('无法到达', 'Cannot reach'));
        return false;
      }
      path = losSimplifyPath(rawPath2, this.shadowMask.mask, this.shadowMask.width);
    }

    // 多间隙支持：把所有平台对应的"顶面区段"和所有间隙都列出
    // 路径点的 Y 计算优先级：所在平台顶 → 所在间隙的影子顶（仅当该间隙已连通）
    // 使用动态平台列表，隐藏平台 commit 后也包含进去
    const platSpans = this.platforms.map((p) => ({
      leftX: p.data.x - p.data.width / 2,
      rightX: p.data.x + p.data.width / 2,
      topY: p.data.y + p.data.height / 2,
    }));
    const gaps = this.getPlatformGaps();
    // 预计算每个间隙是否已连通，路径生成时只对已连通的间隙走"影子顶"
    const gapBridged = gaps.map((g) => this.isGapBridged(g));

    // 辅助：查询 x 处影子上边缘 Y，没有影子则返回 null
    const shadowTopYAtX = (x: number): number | null => {
      for (const obj of this.shadowObjects) {
        const range = obj.getYRangeAtX(x);
        if (range !== null) return range.maxY;
      }
      return null;
    };

    // 把 cell 路径转为世界坐标，每个点的 Y 校正：
    // 多层平台/阶梯重叠时：找"X+Y 都包含 cell"的平台，snap 到该平台顶
    // 若同时落在多个平台 cell 里（重叠区），选 topY 最高的（让角色站在最高一层）
    const platSpansFull = this.platforms.map((p) => ({
      leftX: p.data.x - p.data.width / 2,
      rightX: p.data.x + p.data.width / 2,
      bottomY: p.data.y - p.data.height / 2,
      topY: p.data.y + p.data.height / 2,
    }));
    const rawPath = path.map((cell) => {
      const world = this.shadowMask.mapper.cellToWorld(cell);
      const pt = new THREE.Vector2(world.x, world.y);
      // 找出 X 和 Y 都覆盖此点的平台
      // Y 范围检查放宽：top 上界 + 一个 cell 高度 (≈ 0.05)，避免 cell 中心刚好在平台顶上方 0.02 时被踢出候选
      const CELL_Y_TOL = 0.06;
      const candidateSpans = platSpansFull.filter(
        (span) => pt.x >= span.leftX && pt.x <= span.rightX
              && pt.y >= span.bottomY - CELL_Y_TOL && pt.y <= span.topY + CELL_Y_TOL,
      );
      if (candidateSpans.length > 0) {
        // 多层重叠：选 topY 离 cell 真实 Y 最近的那个（角色站到最贴近自己 cell 的那层顶）
        let best = candidateSpans[0];
        let bestDist = Math.abs(best.topY - pt.y);
        for (let i = 1; i < candidateSpans.length; i += 1) {
          const d = Math.abs(candidateSpans[i].topY - pt.y);
          if (d < bestDist) {
            best = candidateSpans[i];
            bestDist = d;
          }
        }
        pt.y = best.topY;
        return pt;
      }
      // 否则：落在某已连通间隙内 → 走影子上边缘
      for (let gi = 0; gi < gaps.length; gi += 1) {
        if (!gapBridged[gi]) continue;
        const g = gaps[gi];
        if (pt.x > g.leftX && pt.x < g.rightX) {
          const sy = shadowTopYAtX(pt.x);
          if (sy !== null) pt.y = sy;
          return pt;
        }
      }
      return pt;
    });

    // 对每段路径：若该段跨越某个已连通间隙，在间隙内按 0.05 步长插入密集采样点
    // 注意按 cur→nxt 的方向排列点（避免插值后路径在 X 方向反复横跳）
    const SAMPLE_STEP = 0.05;
    const worldPath: THREE.Vector2[] = [];
    for (let i = 0; i < rawPath.length; i += 1) {
      const cur = rawPath[i];
      worldPath.push(cur);

      if (i < rawPath.length - 1) {
        const nxt = rawPath[i + 1];
        const segMinX = Math.min(cur.x, nxt.x);
        const segMaxX = Math.max(cur.x, nxt.x);
        const forward = nxt.x >= cur.x;

        // 在每个跨越的已连通间隙内沿影子上边缘密集采样
        // 跳过条件：segment 的 Y 范围与 gap 的 Y 范围不重叠（±0.6 容差）
        // 原因为避免下层 platform segment 的 X 偶然伸入上层 gap 的 X 范围时，
        // 把下层路径错误拉到上层桥的影子顶部。
        const segPoints: THREE.Vector2[] = [];
        for (let gi = 0; gi < gaps.length; gi += 1) {
          if (!gapBridged[gi]) continue;
          const g = gaps[gi];
          const gapYMin = Math.min(g.leftPlatTop, g.rightPlatTop);
          const gapYMax = Math.max(g.leftPlatTop, g.rightPlatTop);
          const segYMin = Math.min(cur.y, nxt.y);
          const segYMax = Math.max(cur.y, nxt.y);
          const Y_TOL = 0.6;
          if (segYMax < gapYMin - Y_TOL || segYMin > gapYMax + Y_TOL) continue;
          const overlapLeft  = Math.max(segMinX, g.leftX);
          const overlapRight = Math.min(segMaxX, g.rightX);
          if (overlapLeft < overlapRight) {
            // 1) 先按 0.05 步长沿影子上沿采样
            const raw: Array<{ x: number; y: number }> = [];
            let ix = overlapLeft + SAMPLE_STEP / 2;
            while (ix < overlapRight) {
              const sy = shadowTopYAtX(ix);
              if (sy !== null) raw.push({ x: ix, y: sy });
              ix += SAMPLE_STEP;
            }
            // 2) 5 点移动平均平滑 Y（避免影子边缘 Y 跳变导致锯齿）
            const W = 5;
            for (let k = 0; k < raw.length; k += 1) {
              const start = Math.max(0, k - Math.floor(W / 2));
              const end = Math.min(raw.length - 1, k + Math.floor(W / 2));
              let sum = 0;
              for (let m = start; m <= end; m += 1) sum += raw[m].y;
              const avg = sum / (end - start + 1);
              segPoints.push(new THREE.Vector2(raw[k].x, avg));
            }
          }
        }
        segPoints.sort((a, b) => forward ? a.x - b.x : b.x - a.x);
        worldPath.push(...segPoints);
      }
    }

    // 墙缓冲：避免角色贴墙时半身进墙
    const clippedPath = this.clipPathByWallBuffer(worldPath);
    if (this.partyMerged) {
      // 合并后：所有跟随者复制主角完整 path，一直走到门口附近。
      // 不再用 shortenPathEnd 缩短 path（否则会停在主角身后 offset 处，永远不到门）。
      for (const entry of this.partyOffsets) {
        const target = entry.getWalker();
        if (!target) continue;
        const wInst = target instanceof Walker ? target : (target as Companion).walker;
        wInst.setPath(clippedPath.map((p) => p.clone()));
      }
    } else {
      // 未合并：当前组的 companion 直接复制路径
      const companion = this.activeCompanion;
      if (companion) {
        companion.followPath(clippedPath.map((p) => p.clone()));
      }
    }
    activeW.setPath(clippedPath, () => {
      if (this.gate.isReached(activeW.position)) {
        this.tryCompleteLevel();
      } else {
        this.onWalkerArrived?.(activeW.position);
      }
    });
    this.onWalkerStartMove?.();
    return true;
  }

  /**
   * 按规则确定点击位置对应的"目标平台 topY"：
   * 规则 1：点击位置 (x, y) 落在某平台范围内 → 选该平台 topY
   * 规则 2：点击在两平台之间 → 用 X 覆盖的平台里、topY ≤ y 的最高那个（"点下方最近的平台"）
   *        若全部平台 topY > y（点击太低）→ 退回 X 覆盖平台中 topY 最低那个
   *
   * 用动态平台列表（含已 commit 的 hiddenPlatformGroups），让玩家能走到 path1 / path2 上。
   */
  private snapToNearestSurface(x: number, y: number): number {
    // 动态平台（含已 commit 的隐藏阶梯）
    const xCovered: Array<{ topY: number; bottomY: number; inside: boolean }> = [];
    for (const plat of this.platforms) {
      const d = plat.data;
      const left = d.x - d.width / 2;
      const right = d.x + d.width / 2;
      const top = d.y + d.height / 2;
      const bottom = d.y - d.height / 2;
      if (x >= left && x <= right) {
        xCovered.push({ topY: top, bottomY: bottom, inside: y >= bottom && y <= top });
      }
    }

    // 规则 1：点击在某平台范围内 → 选该平台 topY（多平台重叠时选 topY 最大）
    const insideMatches = xCovered.filter((p) => p.inside);
    if (insideMatches.length > 0) {
      let best = insideMatches[0].topY;
      for (const m of insideMatches) if (m.topY > best) best = m.topY;
      return best;
    }

    // 规则 2：点击在两平台之间 → topY ≤ y 的最高平台
    const belowOrEq = xCovered.filter((p) => p.topY <= y);
    if (belowOrEq.length > 0) {
      let best = belowOrEq[0].topY;
      for (const m of belowOrEq) if (m.topY > best) best = m.topY;
      return best;
    }

    // 规则 2 fallback：点击太低，所有 X 覆盖平台都在上方 → 退回最低那个平台 topY
    if (xCovered.length > 0) {
      let best = xCovered[0].topY;
      for (const m of xCovered) if (m.topY < best) best = m.topY;
      return best;
    }

    // 极端 fallback：X 不在任何平台范围 → 用 config.platforms 里 topY 最低的
    let best = Infinity;
    for (const plat of this.config.platforms) {
      const top = plat.y + plat.height / 2;
      if (top < best) best = top;
    }
    return best === Infinity ? y : best;
  }

  showHint(): void {
    this.hud.showHintMessage();
    this.hintTimer = 1.2;
  }

  togglePause(): void {
    if (this.completed) {
      this.restart();
      return;
    }

    if (!this.paused) {
      this.paused = true;
      this.hud.setPaused(true);
      return;
    }

    this.restart();
  }

  pause(): void {
    this.paused = true;
  }

  resume(): void {
    this.paused = false;
    this.hud.setPaused(false);
  }

  setVisible(visible: boolean): void {
    this.walker.group.visible = visible;
  }

  dispose(): void {
    this.sceneManager.scene.remove(this.rootGroup);
    for (const object of this.shadowObjects) {
      object.shadowMaskMesh.removeFromParent();
    }
  }

  restart(): void {
    this.completed = false;
    this.paused = false;
    this.walkerFalling = false;
    this.walkerMoveLocked = this.config.lockWalkerUntilBridge ?? false;
    this.walkerSelected = false;
    this.onRestart?.();
    this.hud.setPaused(false);
    this.hud.hideComplete();
    this.setVisible(true);
    for (const object of this.shadowObjects) {
      object.reset();
    }
    this.walker.setPosition(new THREE.Vector2(this.config.walkerStart.x, this.config.walkerStart.y));
    // 重置后恢复默认选中状态（最左侧物品），顺带同步 indicator
    this.selectLeftmostObject();
    this.refreshShadows();
  }

   update(deltaTime: number): void {
    if (!this.paused) {
      this.walker.update(deltaTime);
      this.companion?.update(deltaTime);
      // 更新额外角色组
      for (const g of this.extraGroups) {
        g.walker.update(deltaTime);
        g.companion?.update(deltaTime);
      }

      // 全局规则：partyMerged 时，跟随者若落后前一个角色太远就加速追赶
      if (this.partyMerged && this.partyOffsets.length > 0) {
        const BOOST_LOW = 1.5;
        const BOOST_HIGH = 3.0;
        let prevX = this.activeWalker.position.x;
        let prevY = this.activeWalker.position.y;
        this.activeWalker.speedBoost = 1;
        for (const entry of this.partyOffsets) {
          const target = entry.getWalker();
          if (!target) continue;
          const w = target instanceof Walker ? target : (target as Companion).walker;
          const d = Math.hypot(w.position.x - prevX, w.position.y - prevY);
          let boost = 1;
          if (d > BOOST_HIGH) boost = 3;
          else if (d > BOOST_LOW) boost = 2;
          w.speedBoost = boost;
          prevX = w.position.x;
          prevY = w.position.y;
        }
      }

    // 检测首个角色进入门 X 区域，播一次 pass 音效
    if (!this.passSfxPlayed && this.gate.isVisible) {
      const gateX = this.config.gate.x;
      const allWalkersList = this.allWalkers;
      for (const w of allWalkersList) {
        const dx = Math.abs(w.position.x - gateX);
        if (dx < 1.5) {
          this.passSfxPlayed = true;
          audioManager.play('pass');
          break;
        }
      }
    }

      this.gate.update(deltaTime, this.completed);
      this.button?.update(deltaTime);
      // 多按钮（gate 触发）
      for (const b of this.buttons) {
        b.update(deltaTime);
      }
      for (const object of this.shadowObjects) {
        object.update(deltaTime);
      }

      // 队伍合并检测：根据 partyMergeCondition 选择触发条件
      if (this.config.allowPartyMerge && !this.partyMerged && this.extraGroups.length > 0) {
        const cond = this.config.partyMergeCondition ?? 'wall-removed';
        let conditionMet = false;
        if (cond === 'wall-removed') {
          conditionMet = this.walls.length === 0 || this.walls.every((w) => w.removed);
        } else if (cond === 'bridge-connected-same-platform') {
          // 影子已连通 + 所有墙已移除 + 主组主角和所有 extra 组主角都在同一指定 Y 平台
          const targetY = this.config.partyMergePlatformY ?? 0;
          const yTol = 0.5;
          const main = this.walker.position;
          const mainOnPlatform = Math.abs(main.y - targetY) < yTol;
          const allExtraOnPlatform = this.extraGroups.every((g) =>
            Math.abs(g.walker.position.y - targetY) < yTol);
          const allWallsRemoved = this.walls.length === 0 || this.walls.every((w) => w.removed);
          conditionMet = this.bridgeConnected && allWallsRemoved && mainOnPlatform && allExtraOnPlatform;
        }

        if (conditionMet) {
          if (this.config.partyMergeChase) {
            // 让 extra 组主动跑向主组主角；到达后 mergeParty
            const main = this.walker.position;
            let allArrived = true;
            for (const g of this.extraGroups) {
              const d = Math.hypot(main.x - g.walker.position.x, main.y - g.walker.position.y);
              if (d < Level.MERGE_THRESHOLD) continue;
              allArrived = false;
              // 还没到 → 让该 extra walker 跑向主组主角（沿同 Y 直线，假设同平台）
              const targetX = main.x;
              // 用快速 BFS 路径（如果有阶梯就走阶梯）；先用简单"沿 X 直线"实现，要更稳可改 findPathForFollower
              g.walker.setPath([new THREE.Vector2(targetX, main.y)]);
              // 同时狗（companion）也跟主角直走
              if (g.companion) {
                g.companion.followPath([new THREE.Vector2(targetX - 0.5, main.y)]);
              }
            }
            if (allArrived) {
              this.mergeParty();
            }
          } else {
            // 旧行为：等两组距离 < 1.0 自动合并
            const main = this.walker.position;
            for (const g of this.extraGroups) {
              const d = Math.hypot(main.x - g.walker.position.x, main.y - g.walker.position.y);
              if (d < Level.MERGE_THRESHOLD) {
                this.mergeParty();
                break;
              }
            }
          }
        }
      }

      // 合并后：让队列里非主组主角的角色每帧跟随主角
      if (this.partyMerged) {
        this.updatePartyFollowing();
      }

      // 静止朝向主组：让 extraGroups 的 walker/companion 在不移动时面朝主组主角的 X 方向
      if (this.config.extraGroupsFacePartyMain && !this.partyMerged) {
        const mainX = this.walker.position.x;
        for (const g of this.extraGroups) {
          if (!g.walker.isWalking()) {
            const sign = Math.sign(mainX - g.walker.position.x);
            if (sign !== 0) g.walker.setFacing(sign);
          }
          if (g.companion && !g.companion.walker.isWalking()) {
            const sign = Math.sign(mainX - g.companion.walker.position.x);
            if (sign !== 0) g.companion.walker.setFacing(sign);
          }
        }
      }

      // 收集所有角色当前位置 + 引用，供按钮触发检测使用（toggle 模式需要 ref 区分角色）
      const allCharRefs: Array<{ x: number; y: number; ref: object }> = [];
      allCharRefs.push({ x: this.walker.position.x, y: this.walker.position.y, ref: this.walker });
      for (const g of this.extraGroups) {
        allCharRefs.push({ x: g.walker.position.x, y: g.walker.position.y, ref: g.walker });
      }

      // 按钮触发检测：每帧检查任一角色是否走到按钮范围内
      if (this.button && !this.button.isActivated) {
        for (const p of allCharRefs) {
          this.button.checkTrigger(p.x, p.y, p.ref);
        }
      }
      // 多按钮：每帧把所有角色位置都传一次（continuous 模式会累积"本帧是否有角色"）
      for (const b of this.buttons) {
        for (const p of allCharRefs) {
          b.checkTrigger(p.x, p.y, p.ref);
        }
      }

      // 隐藏平台显示/隐藏动画：双向播放
      // 'show': progress 0 → n+1，从左到右逐段出现，到达终点 commit 平台
      // 'hide': progress n+1 → 0，从右到左逐段消失（平台 mask 在 onDeactivated 时已立即移除）
      // 触发源：config.button（单按钮 show）或 buttons[hiddenPlatformButtonIndex]（多按钮，show/hide 双向）
      const n = this.hiddenPlatforms.length;
      const fullExtent = n + 1;
      const revealTrigger = this.button?.isActivated
        || (this.config.hiddenPlatformButtonIndex !== undefined &&
            this.buttons[this.config.hiddenPlatformButtonIndex]?.isActivated);
      // show 模式推进：trigger 激活 且 未 commit
      const showAdvancing = revealTrigger && this.hiddenRevealDirection === 'show'
        && !this.hiddenPlatformsCommitted
        && this.hiddenRevealProgress < fullExtent;
      // hide 模式推进：trigger 不再激活 且 progress > 0
      const hideAdvancing = !revealTrigger && this.hiddenRevealDirection === 'hide'
        && this.hiddenRevealProgress > 0
        && n > 0;

      if (showAdvancing || hideAdvancing) {
        const totalDur = this.config.hiddenPlatformRevealDuration ?? 1.0;
        const delta = (deltaTime / totalDur) * fullExtent;
        if (showAdvancing) {
          this.hiddenRevealProgress = Math.min(fullExtent, this.hiddenRevealProgress + delta);
        } else {
          this.hiddenRevealProgress = Math.max(0, this.hiddenRevealProgress - delta);
        }

        // 按 x 升序确定段顺序（show: 0..n-1；hide: 反向收缩用相同 order，靠 progress 递减自动反向）
        const sorted = [...this.hiddenPlatforms]
          .map((p, idx) => ({ plat: p, idx, sortKey: p.data.x }))
          .sort((a, b) => a.sortKey - b.sortKey);

        for (let order = 0; order < sorted.length; order += 1) {
          const plat = sorted[order].plat;
          const local = Math.max(0, Math.min(1, this.hiddenRevealProgress - order));
          plat.mesh.scale.x = local;
          const offset = (1 - local) * plat.data.width / 2;
          plat.mesh.position.x = plat.data.x - offset;
          // hide 完成（local=0）→ 隐藏 mesh
          if (hideAdvancing && local === 0) {
            plat.mesh.visible = false;
          }
        }

        if (showAdvancing && this.hiddenRevealProgress >= fullExtent) {
          this.commitHiddenPlatforms();
        }
      }

      // 多组隐藏平台：每组独立推进 progress
      for (const grp of this.hiddenGroups) {
        const gn = grp.platforms.length;
        const gFullExtent = gn + 1;
        const gShowAdvancing = grp.direction === 'show'
          && !grp.committed
          && grp.progress < gFullExtent;
        const gHideAdvancing = grp.direction === 'hide'
          && grp.progress > 0
          && gn > 0;

        if (gShowAdvancing || gHideAdvancing) {
          const totalDur = grp.cfg.revealDuration
            ?? this.config.hiddenPlatformRevealDuration
            ?? 1.0;
          const delta = (deltaTime / totalDur) * gFullExtent;
          if (gShowAdvancing) {
            grp.progress = Math.min(gFullExtent, grp.progress + delta);
          } else {
            grp.progress = Math.max(0, grp.progress - delta);
          }
          const sorted = [...grp.platforms]
            .map((p, idx) => ({ plat: p, idx, sortKey: p.data.x }))
            .sort((a, b) => a.sortKey - b.sortKey);
          for (let order = 0; order < sorted.length; order += 1) {
            const plat = sorted[order].plat;
            const local = Math.max(0, Math.min(1, grp.progress - order));
            plat.mesh.scale.x = local;
            const offset = (1 - local) * plat.data.width / 2;
            plat.mesh.position.x = plat.data.x - offset;
            if (gHideAdvancing && local === 0) {
              plat.mesh.visible = false;
            }
          }
          if (gShowAdvancing && grp.progress >= gFullExtent && !grp.committed) {
            grp.committed = true;
            for (const plat of grp.platforms) this.platforms.push(plat);
            this.shadowMask.buildPlatformMask(this.platforms);
            this.shadowMask.captureMask(); // 同步 walkableMask
            this.checkBridgeConnected();
          }
        }
      }
    }

    if (this.shadowDirty) {
      this.shadowMask.refreshVisual();
      this.shadowDirty = false;
    }

    if (this.hintTimer > 0) {
      this.hintTimer = Math.max(0, this.hintTimer - deltaTime);
    }

    const hintMaterial = this.hintMesh.material;
    if (hintMaterial instanceof THREE.MeshBasicMaterial) {
      hintMaterial.opacity = this.hintTimer > 0 ? 0.28 + Math.sin(performance.now() * 0.012) * 0.1 : 0;
    }
  }

  private refreshShadows(): void {
    for (const object of this.shadowObjects) {
      object.updateShadowProjection(this.shadowDirection, this.sceneManager.wallBounds.z);
    }
    this.shadowMask.captureMask();
    this.shadowDirty = false;
    this.checkBridgeConnected();
  }

  /** 计算所有"相邻平台对"之间的间隙信息（按 platforms 数组顺序） */
  private getPlatformGaps(): Array<{
    leftX: number; rightX: number; leftPlatTop: number; rightPlatTop: number;
  }> {
    // 按 Y 层分组（topY 接近的视为同层），每层独立算相邻间隙。
    // 避免"下方一条长平台吞掉上层平台之间的间隙判定"。
    // 容差 3.0：足以覆盖 2-1 这类斜坡桥（左右平台 topY 差 2.0），
    // 又小于 5-2 上下层差 4.0，避免误合并。
    const Y_LAYER_TOL = 3.0;
    // 排除关卡配置里指定不参与桥接判定的平台
    const ignoreSet = new Set(this.config.bridgeIgnorePlatformIds ?? []);
    const platsAll = this.platforms.map((p) => p.data).filter((p) => !ignoreSet.has(p.id));
    // 排序：按 topY 升序，使得相邻高度差的平台被正确分组
    // 比较排序后相邻平台的 topY 差值——避免"通过中间平台把高度差大的平台链式拉入同层"
    const sortedByTopY = [...platsAll].sort(
      (a, b) => (a.y + a.height / 2) - (b.y + b.height / 2),
    );
    const layers: Array<Array<typeof platsAll[number]>> = [];
    for (const p of sortedByTopY) {
      const top = p.y + p.height / 2;
      const lastLayer = layers[layers.length - 1];
      if (lastLayer) {
        const lastTop = lastLayer[lastLayer.length - 1].y + lastLayer[lastLayer.length - 1].height / 2;
        if (Math.abs(lastTop - top) < Y_LAYER_TOL) {
          lastLayer.push(p);
          continue;
        }
      }
      layers.push([p]);
    }
    const gaps: ReturnType<typeof this.getPlatformGaps> = [];
    for (const layer of layers) {
      // 1) 按 X 左边界排序
      const sorted = [...layer].sort((a, b) => (a.x - a.width / 2) - (b.x - b.width / 2));
      // 2) 合并 X 重叠 / 邻接的平台为"合并段"。topY 取段内最高（让角色站在最高一层）
      // 合并条件：X 重叠 + 高度接近（Y 差 < Y_LAYER_TOL）。
      // 避免不同高度的平台（如左下 7.425 vs 左上 10.425）仅因 X 范围重叠就被合并导致
      // gap 的 leftPlatTop 取到错误的高高度，让搭桥判定误判为未连通。
      type Seg = { leftX: number; rightX: number; topY: number };
      const segs: Seg[] = [];
      for (const p of sorted) {
        const pLeft = p.x - p.width / 2;
        const pRight = p.x + p.width / 2;
        const pTop = p.y + p.height / 2;
        const last = segs[segs.length - 1];
        if (
          last &&
          pLeft <= last.rightX + 0.01 &&
          Math.abs(last.topY - pTop) < Y_LAYER_TOL
        ) {
          // X 重叠/邻接 且 Y 接近 → 合并
          last.rightX = Math.max(last.rightX, pRight);
          last.topY = Math.max(last.topY, pTop);
        } else {
          segs.push({ leftX: pLeft, rightX: pRight, topY: pTop });
        }
      }
      // 3) 相邻 seg 之间算 gap
      for (let i = 0; i < segs.length - 1; i += 1) {
        const a = segs[i];
        const b = segs[i + 1];
        const gapWidth = b.leftX - a.rightX;
        if (gapWidth <= 0) continue;
        gaps.push({
          leftX:        a.rightX,
          rightX:       b.leftX,
          leftPlatTop:  a.topY,
          rightPlatTop: b.topY,
        });
      }
    }
    return gaps;
  }

  /** 判断单个间隙是否被影子完整覆盖（沿渐变参考线检查）
   *  @param onlyByObject 可选：仅考虑指定物体的影子（用于"哪个物体连通了哪个间隙"判定） */
  private isGapBridged(
    gap: { leftX: number; rightX: number; leftPlatTop: number; rightPlatTop: number },
    onlyByObject?: ShadowObject,
  ): boolean {
    const tolerance = this.config.bridgeTolerance ?? 0.05;
    const sampleCount = 20;
    const span = gap.rightX - gap.leftX;
    const candidates = onlyByObject ? [onlyByObject] : this.shadowObjects;
    const shouldLog = !onlyByObject && (() => {
      const w = window as any;
      if (w.__gapLogFrame === undefined) w.__gapLogFrame = 0;
      w.__gapLogFrame = (w.__gapLogFrame + 1) % 60;
      return w.__gapLogFrame === 0;
    })();
    if (shouldLog) {
      console.log(`[gap] leftX=${gap.leftX.toFixed(2)} rightX=${gap.rightX.toFixed(2)} leftTop=${gap.leftPlatTop.toFixed(3)} rightTop=${gap.rightPlatTop.toFixed(3)} tol=${tolerance}`);
    }
    let coveredSamples = 0;
    for (let i = 0; i < sampleCount; i += 1) {
      const x = gap.leftX + (i + 0.5) / sampleCount * span;
      const t = (x - gap.leftX) / span;
      const refY = gap.leftPlatTop + t * (gap.rightPlatTop - gap.leftPlatTop);
      if (this.isXBlockedByWall(x, refY)) continue;
      let sampleCovered = false;
      for (const obj of candidates) {
        const range = obj.getYRangeAtX(x);
        if (range === null) continue;
        // 覆盖判定（要求两侧都成立）：
        // (1) 影子上沿 maxY 必须达到平台顶（容差 tolerance）→ 影子能搭到平台
        // (2) 影子下沿 minY 不能高过平台顶过多（aboveLimit）→ 不允许整段影子悬在平台上方
        const aboveLimit = 0.6;
        if (range.maxY >= refY - tolerance && range.minY <= refY + aboveLimit) {
          sampleCovered = true;
          break;
        }
      }
      if (sampleCovered) coveredSamples += 1;
      else if (shouldLog) {
        const r = candidates[0]?.getYRangeAtX(x);
        console.log(`[miss] s${i} x=${x.toFixed(2)} refY=${refY.toFixed(2)} range=${r ? `[${r.minY.toFixed(2)},${r.maxY.toFixed(2)}]` : 'null'}`);
      }
    }
    if (shouldLog) console.log(`[result] ${coveredSamples}/${sampleCount}`);
    // 必须 100% 采样覆盖才算桥连通（任何一处缺口都意味着角色会掉下去）
    return coveredSamples >= sampleCount;
  }

  /** 判断一个物体是否"贡献"了某个连通的桥（即仅靠这个物体的影子就能覆盖某间隙） */
  /**
   * 检查指定 X 是否被墙挡住（墙未移除 + X 在墙范围内）。
   * 用于过滤影子覆盖：墙范围内的影子不算覆盖。
   */
  /**
   * Companion 跟随用的简易 BFS 路径：返回世界坐标序列（不含起点），失败时返回 null。
   * 与 attemptMove 用同样的 walkableMask + findPath / findNearestWalkable，但不做"平台顶 / 影子顶"的复杂 Y 修正，
   * 只做基本的 cell→world 转换 + simplify，足够避开墙。
   */
  findPathForFollower(from: THREE.Vector2, to: THREE.Vector2): THREE.Vector2[] | null {
    const mask = this.shadowMask.mask;
    const mapper = this.shadowMask.mapper;
    const startCellRaw = mapper.worldToCell(from.x, from.y);
    const targetCellRaw = mapper.worldToCell(to.x, to.y);
    if (!startCellRaw || !targetCellRaw) {
      // 最差兜底：单点路径 + clip
      return this.clipPathByWallBuffer([to.clone()]);
    }
    // 起点 snap：如果当前狗中心 cell 已被标墙（贴墙时可能），找最近 walkable cell 当起点
    // 否则 findPath 会立刻返回 null → 退化 DIRECT 穿墙
    const startCell = findNearestWalkable(
      mask, this.shadowMask.width, this.shadowMask.height, startCellRaw, 80,
    );
    // 终点 snap：目标 cell 可能在墙内，找最近外侧 walkable
    const targetCell = findNearestWalkable(
      mask, this.shadowMask.width, this.shadowMask.height, targetCellRaw, 80,
    );
    if (!startCell || !targetCell) {
      return this.clipPathByWallBuffer([to.clone()]);
    }
    const cellPath = findPath(mask, this.shadowMask.width, this.shadowMask.height, startCell, targetCell);
    if (!cellPath || cellPath.length === 0) {
      return this.clipPathByWallBuffer([to.clone()]);
    }

    // 准备平台范围用于 Y snap
    const platSpans = this.platforms.map((p) => ({
      leftX: p.data.x - p.data.width / 2,
      rightX: p.data.x + p.data.width / 2,
      bottomY: p.data.y - p.data.height / 2,
      topY: p.data.y + p.data.height / 2,
    }));
    // 准备已连通间隙
    const gaps = this.getPlatformGaps();
    const gapBridged = gaps.map((g) => this.isGapBridged(g));
    // 查询 x 处影子上沿 Y
    const shadowTopY = (x: number): number | null => {
      for (const obj of this.shadowObjects) {
        const range = obj.getYRangeAtX(x);
        if (range !== null) return range.maxY;
      }
      return null;
    };

    const worldPath: THREE.Vector2[] = [];
    for (let i = 1; i < cellPath.length; i += 1) {
      const c = cellPath[i];
      const w = mapper.cellToWorld(c);
      const pt = new THREE.Vector2(w.x, w.y);
      // 找出 X 覆盖此点的平台，topY 离 pt.y 最近者优先
      const candidates = platSpans.filter(
        (span) => pt.x >= span.leftX && pt.x <= span.rightX,
      );
      let snappedToPlat = false;
      if (candidates.length > 0) {
        let best = candidates[0];
        let bestDist = Math.abs(best.topY - pt.y);
        for (let k = 1; k < candidates.length; k += 1) {
          const d = Math.abs(candidates[k].topY - pt.y);
          if (d < bestDist) { best = candidates[k]; bestDist = d; }
        }
        if (bestDist < 0.5) {
          pt.y = best.topY;
          snappedToPlat = true;
        }
      }
      if (!snappedToPlat) {
        // 在连通间隙内：用影子上沿 Y（与女主路径保持一致的视觉），fallback 用参考线
        for (let gi = 0; gi < gaps.length; gi += 1) {
          if (!gapBridged[gi]) continue;
          const g = gaps[gi];
          if (pt.x >= g.leftX && pt.x <= g.rightX) {
            const sy = shadowTopY(pt.x);
            if (sy !== null) {
              pt.y = sy;
            } else {
              const t = (pt.x - g.leftX) / (g.rightX - g.leftX);
              pt.y = g.leftPlatTop + t * (g.rightPlatTop - g.leftPlatTop);
            }
            break;
          }
        }
      }
      worldPath.push(pt);
    }
    // 墙缓冲：把路径上进入墙缓冲区的点推到外侧，避免狗贴墙时半身进墙
    return this.clipPathByWallBuffer(worldPath);
  }

  /** BFS 用的墙 rect 列表：未移除的墙，且 X 方向外扩 BFS_WALL_PADDING（避免角色 sprite 贴边时半身进墙） */
  private static readonly BFS_WALL_PADDING_X = 0.4;
  /** 角色到墙边沿的安全缓冲距离（无论 BFS 找到什么路径，走到距墙这么近就停） */
  private static readonly WALL_SAFE_BUFFER = 0.6;

  /**
   * 截断路径：如果路径上有点进入墙的 X 安全缓冲区（墙 X 范围 ± WALL_SAFE_BUFFER），
   * 把该点 X 推到缓冲区外。Y 不变。
   * 注意：只考虑跟该点 Y 在墙 Y 范围内的墙（否则平台之上的点不应被墙横向拦截）。
   */
  /**
   * 判断 from / to 之间是否被某面墙横向隔开（两点在墙左右两侧 + 至少一点的 Y 在墙 Y 范围内）。
   * 隔开时返回 stopAtX = from 这一侧墙缓冲外沿，让狗停在那里、不绕远跟。
   */
  isPathBlockedByWall(from: THREE.Vector2, to: THREE.Vector2): { blocked: boolean; stopAtX: number } | null {
    if (this.walls.length === 0) return null;
    const buf = Level.WALL_SAFE_BUFFER;
    for (const w of this.walls) {
      if (w.removed) continue;
      const wallLeft = w.x - w.width / 2;
      const wallRight = w.x + w.width / 2;
      // from 和 to 必须分居墙左右两侧（其中一个 X 在墙左、另一个在墙右）
      const fromLeft = from.x < wallLeft;
      const fromRight = from.x > wallRight;
      const toLeft = to.x < wallLeft;
      const toRight = to.x > wallRight;
      const separated = (fromLeft && toRight) || (fromRight && toLeft)
        || (from.x >= wallLeft && from.x <= wallRight)  // from 已经在墙范围内（异常情况）
        || (to.x >= wallLeft && to.x <= wallRight);     // to 在墙范围内
      if (!separated) continue;
      // Y 是否在墙 Y 范围内（任一点）
      const inY = (y: number) => y >= w.y - w.height / 2 && y <= w.y + w.height / 2;
      if (!inY(from.y) && !inY(to.y)) continue;
      // 被墙隔开 → from 这侧墙缓冲外沿
      const stopAtX = (from.x < w.x) ? wallLeft - buf : wallRight + buf;
      return { blocked: true, stopAtX };
    }
    return null;
  }

  /** 从 path 末尾沿反方向砍掉 dropLen 单位，让跟随者停在主角身后 dropLen 处 */
  private shortenPathEnd(path: THREE.Vector2[], dropLen: number): THREE.Vector2[] {
    if (path.length <= 1 || dropLen <= 0) return path.map((p) => p.clone());
    let remain = dropLen;
    let i = path.length - 1;
    while (i > 0 && remain > 0) {
      const a = path[i - 1];
      const b = path[i];
      const segLen = Math.hypot(b.x - a.x, b.y - a.y);
      if (segLen >= remain) {
        const t = (segLen - remain) / segLen;
        const newEnd = new THREE.Vector2(
          a.x + t * (b.x - a.x),
          a.y + t * (b.y - a.y),
        );
        return [...path.slice(0, i).map((p) => p.clone()), newEnd];
      }
      remain -= segLen;
      i -= 1;
    }
    return [path[0].clone()];
  }

  private clipPathByWallBuffer(path: THREE.Vector2[]): THREE.Vector2[] {
    if (this.walls.length === 0) return path;
    const buf = Level.WALL_SAFE_BUFFER;
    return path.map((pt) => {
      let pushedX = pt.x;
      for (const w of this.walls) {
        if (w.removed) continue;
        // Y 必须在墙 Y 范围内才算被墙横向拦截
        if (pt.y < w.y - w.height / 2 || pt.y > w.y + w.height / 2) continue;
        const wallLeft = w.x - w.width / 2 - buf;
        const wallRight = w.x + w.width / 2 + buf;
        if (pushedX > wallLeft && pushedX < wallRight) {
          // 在缓冲区内：推到最近的外沿
          const distLeft = pushedX - wallLeft;
          const distRight = wallRight - pushedX;
          pushedX = distLeft < distRight ? wallLeft : wallRight;
        }
      }
      return new THREE.Vector2(pushedX, pt.y);
    });
  }
  private getBfsWallRects(): Array<{ x: number; y: number; width: number; height: number }> {
    return this.walls
      .filter((w) => !w.removed)
      .map((w) => ({
        x: w.x,
        y: w.y,
        width: w.width + Level.BFS_WALL_PADDING_X,
        height: w.height,
      }));
  }

  private isXBlockedByWall(x: number, refY: number): boolean {
    for (const w of this.walls) {
      if (w.removed) continue;
      if (x < w.x - w.width / 2 || x > w.x + w.width / 2) continue;
      // refY 也要在墙 Y 范围内才算挡住
      if (refY < w.y - w.height / 2 || refY > w.y + w.height / 2) continue;
      return true;
    }
    return false;
  }

  private isObjectConnected(obj: ShadowObject): boolean {
    const gaps = this.getPlatformGaps();
    return gaps.some((g) => this.isGapBridged(g, obj));
  }

  private checkBridgeConnected(): void {
    const gaps = this.getPlatformGaps();
    // 计算每个间隙的连通状态
    const connectedFlags = gaps.map((g) => this.isGapBridged(g));
    // 抽取已连通的间隙的 X/Y 范围（传给 fillBridgeGap 只填该 gap 所在层的 cell）
    // Y 范围：平台顶 ± 一段 buffer，确保 fillBridgeGap 在合理 row 范围填桥
    // Y_BUF 收窄：桥 fill 只覆盖 1 cell 宽（≈ 0.05 单位），避免 BFS 把上层桥 cell 当"穿越层"
    const Y_BUF = 0.05;
    const connectedGaps = gaps
      .filter((_, i) => connectedFlags[i])
      .map((g) => ({
        xMin: g.leftX, xMax: g.rightX,
        yMin: Math.min(g.leftPlatTop, g.rightPlatTop) - Y_BUF,
        yMax: Math.max(g.leftPlatTop, g.rightPlatTop) + Y_BUF,
      }));
    const anyConnected = connectedGaps.length > 0;
    this.setBridgeHighlight(anyConnected, connectedGaps);
  }

  private bridgeConnected = false;
  /** 公开：影子是否连通（供 main.ts tick 用） */
  get isBridgeConnected(): boolean { return this.bridgeConnected; }

  getDebugInfo(): Record<string, string> {
    const obj = this.selectedObject;
    const cam = this.sceneManager.camera;
    // 光源原始配置（未 normalize）
    const sd = this.config.shadowDirection ?? { x: 0, y: 0.3, z: -20 };
    const info: Record<string, string> = {
      'camera': `y=${cam.position.y.toFixed(2)} z=${cam.position.z.toFixed(2)}`,
      'light cfg y': `${sd.y.toFixed(3)} (z=${sd.z})`,
      'light dir': `(${this.shadowDirection.x.toFixed(3)}, ${this.shadowDirection.y.toFixed(3)}, ${this.shadowDirection.z.toFixed(3)})`,
      'bridge': this.bridgeConnected ? 'CONNECTED' : 'disconnected',
      'walker': `(${this.walker.position.x.toFixed(2)}, ${this.walker.position.y.toFixed(2)})`,
      'state': this.completed ? 'COMPLETE' : this.paused ? 'PAUSED' : 'PLAYING',
    };
    if (obj) {
      const p = obj.group.position;
      info['object y'] = `${p.y.toFixed(3)} (z=${p.z.toFixed(1)})`;
      info['object rot'] = `(${obj.group.rotation.x.toFixed(2)}, ${obj.group.rotation.y.toFixed(2)})`;
      info['rail T'] = obj.normalizedT.toFixed(3);
      // 影子高度 = 物体Y + lightY/lightZ * (wallZ - objectZ)
      const lightRatio = this.shadowDirection.y / this.shadowDirection.z;
      const shadowY = p.y + lightRatio * (this.sceneManager.wallBounds.z - p.z);
      info['shadow Y'] = `${shadowY.toFixed(3)}`;
      info['proj Y'] = `${obj.lastProjMinY.toFixed(3)} ~ ${obj.lastProjMaxY.toFixed(3)}`;
    }
    const platTop = this.config.platforms[0].y + this.config.platforms[0].height / 2;
    info['platform top'] = platTop.toFixed(3);
    if (obj) {
      const p = obj.group.position;
      const lightRatio = this.shadowDirection.y / this.shadowDirection.z;
      const shadowY = p.y + lightRatio * (this.sceneManager.wallBounds.z - p.z);
      info['shadow - plat'] = (shadowY - platTop).toFixed(3);
    }

    const mask = this.shadowMask.mask;
    const w = this.shadowMask.width;
    const h = this.shadowMask.height;
    let sMin = h, sMax = 0, pMin = h, pMax = 0;
    const pm = this.shadowMask.getPlatformMask();
    const sm = this.shadowMask.getShadowMask();
    for (let r = 0; r < h; r += 1) {
      for (let c = 0; c < w; c += 1) {
        if (pm[r * w + c] === 1) { pMin = Math.min(pMin, r); pMax = Math.max(pMax, r); }
        if (sm[r * w + c] === 1) { sMin = Math.min(sMin, r); sMax = Math.max(sMax, r); }
      }
    }
    let wShadMin = h, wShadMax = 0;
    for (let r = 0; r < h; r += 1) {
      for (let c = 0; c < w; c += 1) {
        if (mask[r * w + c] === 1 && pm[r * w + c] === 0) { wShadMin = Math.min(wShadMin, r); wShadMax = Math.max(wShadMax, r); }
      }
    }
    info['plat rows'] = `${pMin}-${pMax}`;
    info['shadow(raw)'] = `${sMin}-${sMax}`;
    info['shadow(walk)'] = `${wShadMin}-${wShadMax}`;
    info['gap'] = sMin > pMax ? `${sMin - pMax} rows gap` : sMax < pMin ? `${pMin - sMax} rows gap` : 'OVERLAP';
    info['expand'] = this.shadowMask.lastExpandInfo;
    info['walkable'] = `${Array.from(mask).filter(v => v === 1).length} cells`;

    return info;
  }

  /** 隐藏平台动画完成 → 把它们加入 platforms 数组、重建 platformMask */
  private commitHiddenPlatforms(): void {
    this.hiddenPlatformsCommitted = true;
    for (const plat of this.hiddenPlatforms) {
      this.platforms.push(plat);
    }
    // 重建 platformMask 让 BFS 寻路能用到新平台
    this.shadowMask.buildPlatformMask(this.platforms);
    // 同步 walkableMask = platform ∪ shadow
    this.shadowMask.captureMask();
    // 重新触发桥接判定（影子状态保持，仅 platformMask 更新）
    this.checkBridgeConnected();
  }

  /** 多组隐藏平台：启动 show / hide 过渡 */
  private startHiddenGroupTransition(
    grp: typeof this.hiddenGroups[number],
    shouldReveal: boolean,
  ): void {
    if (shouldReveal) {
      // show 方向：重置 mesh，让所有段从 scale=0 开始展开
      if (grp.committed) return; // 已经完整 commit，无需重启
      grp.direction = 'show';
      for (const plat of grp.platforms) {
        plat.mesh.visible = true;
        if (!Number.isFinite(plat.mesh.scale.x) || plat.mesh.scale.x === 0) {
          plat.mesh.scale.x = 0;
          plat.mesh.position.x = plat.data.x - plat.data.width / 2;
        }
      }
    } else {
      // hide 方向：立即从 platforms 数组移除（防止角色继续走），动画反向收缩
      if (grp.committed) {
        grp.committed = false;
        for (const plat of grp.platforms) {
          const idx = this.platforms.indexOf(plat);
          if (idx >= 0) this.platforms.splice(idx, 1);
        }
        this.shadowMask.buildPlatformMask(this.platforms);
        this.shadowMask.captureMask(); // 同步 walkableMask
        this.checkBridgeConnected();
        // 从满进度递减
        grp.progress = grp.platforms.length + 1;
      } else if (grp.progress > 0) {
        // 正在展开未完成，反向播即可
      }
      grp.direction = 'hide';
    }
  }

  /** 把两组角色合并为一队（5-1 玩法）。合并后只能控制主组主角，其他自动跟随 */
  private mergeParty(): void {
    if (this.partyMerged) return;
    this.partyMerged = true;
    // 停止所有 companion 的自动行为（避免与 partyFollowing 冲突导致闪烁）
    this.companion?.stopAutoBehavior();
    for (const g of this.extraGroups) {
      g.companion?.stopAutoBehavior();
    }
    // 清空所有非主角的 path（避免合并时还在执行旧的 setPath）
    for (const g of this.extraGroups) {
      g.walker.setPath([]);
    }
    // 默认 partyOrder：女(extra-walker-0) → 男(main-walker) → 猫(extra-companion-0) → 狗(main-companion)
    const order = this.config.partyOrder ?? ['extra-walker-0', 'main-walker', 'extra-companion-0', 'main-companion'];
    const resolve = (id: string): Walker | Companion | null => {
      if (id === 'main-walker') return this.walker;
      if (id === 'main-companion') return this.companion;
      const wm = id.match(/^extra-walker-(\d+)$/);
      if (wm) return this.extraGroups[parseInt(wm[1], 10)]?.walker ?? null;
      const cm = id.match(/^extra-companion-(\d+)$/);
      if (cm) return this.extraGroups[parseInt(cm[1], 10)]?.companion ?? null;
      return null;
    };
    const mainWalkerIdx = order.indexOf('main-walker');
    if (mainWalkerIdx < 0) {
      console.warn('[mergeParty] partyOrder 不含 main-walker，无法合并');
      return;
    }
    // 队列每个非主角的角色相对主角的偏移（队首-1, -2... 队尾+1, +2...）
    const SPACING = 1.0;
    this.partyOffsets = [];
    for (let i = 0; i < order.length; i += 1) {
      if (i === mainWalkerIdx) continue;
      const ref = resolve(order[i]);
      if (!ref) continue;
      const offset = (i - mainWalkerIdx) * SPACING;
      this.partyOffsets.push({ getWalker: () => ref, offset });
    }
    // 合并后所有角色朝向门
    const gateX = this.config.gate.x;
    const allWalkers: Walker[] = [this.walker];
    if (this.companion) allWalkers.push(this.companion.walker);
    for (const g of this.extraGroups) {
      allWalkers.push(g.walker);
      if (g.companion) allWalkers.push(g.companion.walker);
    }
    for (const w of allWalkers) {
      const sign = Math.sign(gateX - w.position.x);
      if (sign !== 0) w.setFacing(sign);
    }
  }

  /** 合并后每帧更新：所有非主角的位置紧跟主角 */
  private updatePartyFollowing(): void {
    // 合并后跟随者的 path 由 attemptMove 一次性下发（复制主角 path 并末尾砍 offset）
    // 此处不再每帧推动 — 防止跟随者直线插值穿越墙 / 凌空
  }

  /**
   * 让所有角色自动走向门（用于 4-2 双机关同时亮起后的自动通关）。
   * 每个 walker 沿 walkableMask 找路；第一个到达门的触发通关。
   */
  private autoMoveAllWalkersToGate(): void {
    const gateTarget = new THREE.Vector2(this.config.gate.x, this.config.gate.y);
    const platSpans = this.platforms.map((p) => ({
      leftX: p.data.x - p.data.width / 2,
      rightX: p.data.x + p.data.width / 2,
      topY: p.data.y + p.data.height / 2,
    }));
    const gaps = this.getPlatformGaps();
    const gapBridged = gaps.map((g) => this.isGapBridged(g));
    const shadowTopYAtX = (x: number): number | null => {
      for (const obj of this.shadowObjects) {
        const range = obj.getYRangeAtX(x);
        if (range !== null) return range.maxY;
      }
      return null;
    };

    const buildPath = (walker: Walker): THREE.Vector2[] | null => {
      const startCell = this.shadowMask.mapper.worldToCell(walker.position.x, walker.position.y);
      const gateCell  = this.shadowMask.mapper.worldToCell(gateTarget.x, gateTarget.y);
      if (!startCell || !gateCell) return null;
      // radius 加大到 80（约 2.5 单位）：门 Y 不在平台 cell 内时也能 snap 到平台顶 cell
      const targetCell = findNearestWalkable(
        this.shadowMask.mask, this.shadowMask.width, this.shadowMask.height, gateCell, 80,
      );
      if (!targetCell) return null;
      const path = findPath(
        this.shadowMask.mask, this.shadowMask.width, this.shadowMask.height, startCell, targetCell,
      );
      if (!path) return null;
      // 复用 attemptMove 的路径后处理逻辑（简化版）
      const rawPath = path.map((cell) => {
        const world = this.shadowMask.mapper.cellToWorld(cell);
        const pt = new THREE.Vector2(world.x, world.y);
        for (const span of platSpans) {
          if (pt.x >= span.leftX && pt.x <= span.rightX) {
            pt.y = span.topY;
            return pt;
          }
        }
        for (let gi = 0; gi < gaps.length; gi += 1) {
          if (!gapBridged[gi]) continue;
          const g = gaps[gi];
          if (pt.x > g.leftX && pt.x < g.rightX) {
            const sy = shadowTopYAtX(pt.x);
            if (sy !== null) pt.y = sy;
            return pt;
          }
        }
        return pt;
      });
      // 间隙内插密集采样（沿路径方向排序）
      const SAMPLE_STEP = 0.05;
      const out: THREE.Vector2[] = [];
      for (let i = 0; i < rawPath.length; i += 1) {
        const cur = rawPath[i];
        out.push(cur);
        if (i < rawPath.length - 1) {
          const nxt = rawPath[i + 1];
          const segMinX = Math.min(cur.x, nxt.x);
          const segMaxX = Math.max(cur.x, nxt.x);
          const forward = nxt.x >= cur.x;
          const segPoints: THREE.Vector2[] = [];
          for (let gi = 0; gi < gaps.length; gi += 1) {
            if (!gapBridged[gi]) continue;
            const g = gaps[gi];
            const overlapLeft  = Math.max(segMinX, g.leftX);
            const overlapRight = Math.min(segMaxX, g.rightX);
            if (overlapLeft < overlapRight) {
              let ix = overlapLeft + SAMPLE_STEP / 2;
              while (ix < overlapRight) {
                const sy = shadowTopYAtX(ix);
                if (sy !== null) segPoints.push(new THREE.Vector2(ix, sy));
                ix += SAMPLE_STEP;
              }
            }
          }
          segPoints.sort((a, b) => forward ? a.x - b.x : b.x - a.x);
          out.push(...segPoints);
        }
      }
      return out;
    };

    // 收集所有角色（含 companion 的 walker）
    const allChars: Walker[] = [this.walker];
    if (this.companion) allChars.push(this.companion.walker);
    for (const g of this.extraGroups) {
      allChars.push(g.walker);
      if (g.companion) allChars.push(g.companion.walker);
    }
    // 合并状态下停止 companion 自动行为，避免 path 冲突
    if (this.partyMerged) {
      this.companion?.stopAutoBehavior();
      for (const g of this.extraGroups) g.companion?.stopAutoBehavior();
    }
    for (const w of allChars) {
      const p = buildPath(w);
      if (!p) continue;
      w.setPath(p, () => {
        if (this.gate.isReached(w.position) && !this.completed) {
          this.tryCompleteLevel();
        }
      });
    }
    this.onWalkerStartMove?.();
  }

  private setBridgeHighlight(
    connected: boolean,
    connectedGapXRanges: Array<{ xMin: number; xMax: number; yMin: number; yMax: number }> = [],
  ): void {
    const wasConnected = this.bridgeConnected;
    this.bridgeConnected = connected;
    if (connected) {
      // 先清空再按已连通的间隙列重新填充（避免上次填的列残留）
      this.shadowMask.clearBridgeGap();
      this.shadowMask.fillBridgeGap(connectedGapXRanges);
      // 影子连通 → 解锁角色移动
      this.walkerMoveLocked = false;
      // 首次连通才触发回调
      if (!wasConnected) {
        // 播放连通音效
        audioManager.play('connected', 2.0);
        // 隐藏所有物体描边
        for (const obj of this.shadowObjects) obj.hideOutline();
        this.onBridgeConnected?.();
        // 6-1 等关卡：影子连通后自动通关序列
        if (this.config.autoFinishOnBridge) {
          this.triggerAutoFinish();
        }
      }
    } else {
      this.shadowMask.clearBridgeGap();
    }
    // 每个物体单独判定：只有"贡献了某个连通桥"的物体才变绿
    for (const object of this.shadowObjects) {
      object.setShadowConnected(connected && this.isObjectConnected(object));
    }
  }

  /** 尝试通关：根据 requireAllWalkersAtGate 决定单组到达即通关 / 还是所有组到达 */
  private tryCompleteLevel(): void {
    if (this.completed) return;
    if (this.config.requireAllWalkersAtGate) {
      // requireAllWalkersAtGate 时：无论是否 partyMerged，都要求所有 walker 到门才通关。
      // 这样 partyMerged 下主角触发 tryCompleteLevel 时跟随者还在路上 → 不立即完结，
      // 跟随者可以继续向门口走。
      const allAtGate = this.allWalkers.every((w) => this.gate.isReached(w.position));
      if (!allAtGate) return;
    }
    this.completeLevel();
  }

  private completeLevel(): void {
    if (this.completed) {
      return;
    }
    this.completed = true;
    this.onLevelComplete?.();
    this.onComplete?.();
  }
}
