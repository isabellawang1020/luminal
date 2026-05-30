import type { LevelConfig } from '@/game/Level';

// TODO 后续关卡资源约定：
//   6-1 怀表  → /models/watch.glb
//   6-2 蜡烛 → /models/candle.glb
//
// 5-2：双角色组（女+男 / 猫+狗）+ 上下两层平台 + 中间墙障碍
// 平台布局（先放骨架，机关后续再加）：
//   上层（y=10.25, 同 5-1 左上）：左上、中上、右上 三块独立平台
//   下层（y=6.25, 比 5-1 左下低 1）：左下（长）、右下（带门）两块
//   墙：在左下平台中间，顶高 ≈ 8，不触上层
// 角色：女+男（主组）在左上平台；猫+狗（第二组）在左下平台靠右
// 物体：先放一个占位物体在左下↔右下间隙，待机关方案确定后再调整
export const chapter5Level2: LevelConfig = {
  name: '章节 5 - 关卡 2',
  platforms: [
    // ── 下层（y=6.25，比 5-1 低 1）── 单一通长平台，覆盖整个屏幕宽度
    { id: 'bottom',       x:  0,   y: 6.25, width: 16,  height: 0.35 },
    // ── 上层（y=10.25，同 5-1 左上）──
    // 左上平台：靠屏幕左侧（女+男初始位）
    { id: 'left-top',     x: -6.5, y: 10.25, width: 3,   height: 0.35 },
    // 中上平台：屏幕中间
    { id: 'middle-top',   x:  0,   y: 10.25, width: 3,   height: 0.35 },
    // 右上平台：靠屏幕右侧
    { id: 'right-top',    x:  6.5, y: 10.25, width: 3,   height: 0.35 },
  ],
  // 黑色墙：下方平台中段。X 方向变宽（width=2 → 3.5），中心 x=-3
  // Y[4.5, 8.5]：墙整体再下移 0.5，底深入平台 cell；顶 8.5 < 上层底 10.075
  walls: [
    { x: -3, y: 6.5, width: 3.5, height: 4.0 },
  ],
  // 门：再往下一点
  gate: { x: 6.5, y: 5.825, textureUrl: '/textures/gate_new.png', displayHeight: 4.125 },

  // ── 按钮：buttons[0]=扳手  buttons[1]=机关1(显示物品)  buttons[2]=机关2(移除墙) ──
  buttons: [
    // [0] 扳手开关（toggle）：墙东侧 (墙右沿 -1.25) 与猫狗起始位 (x≥4) 之间，取 x=0.2
    // 触发范围 X ±0.6 / Y ±0.6
    {
      x: 0.2, y: 7.0,
      triggerHalfWidth: 1.0, triggerHalfHeight: 0.6,
      visualRadius: 0.18,
      mode: 'toggle',
      initialToggleState: 'A',
      imageA: '/ui/righton.png',
      imageB: '/ui/lefton.png',
      imageWidth: 2.8,
      imageHeight: 1.2,
    },
    // [1] 机关1（once）：右上平台 x=6.5。激活后显示沙漏 + 自动选中
    {
      x: 6.5, y: 10.6,
      triggerHalfWidth: 1.2, triggerHalfHeight: 0.5,
      visualRadius: 0.2,
      mode: 'once',
    },
    // [2] 机关2（once）：中上平台 x=0。激活后墙爆炸
    {
      x: 0, y: 10.6,
      triggerHalfWidth: 1.2, triggerHalfHeight: 0.5,
      visualRadius: 0.2,
      mode: 'once',
    },
  ],
  // 机关1 → 显示沙漏；机关2 → 移除墙
  revealObjectsButtonIndex: 1,
  wallRemoveButtonIndex: 2,

  // ── 多组隐藏平台 ──
  // 9 段薄阶梯，height=0.6 / y 间隔 0.381（重叠 0.22）
  // 端点：step-1 y=6.725 (底贴下平台顶 6.425)，step-9 y=9.775 (顶贴上层底 10.075)
  // 跨度 = 8×0.381+0.6 = 3.65
  hiddenPlatformGroups: [
    {
      // ── 路径1：下方平台中段 → 右上左端（斜向，stateA 时可见）──
      // X 从 2.5 到 4.7，步长 0.275
      platforms: [
        { id: 'p1-step-1', x: 2.50, y: 6.725, width: 0.9, height: 0.6 },
        { id: 'p1-step-2', x: 2.77, y: 7.106, width: 0.9, height: 0.6 },
        { id: 'p1-step-3', x: 3.05, y: 7.488, width: 0.9, height: 0.6 },
        { id: 'p1-step-4', x: 3.32, y: 7.869, width: 0.9, height: 0.6 },
        { id: 'p1-step-5', x: 3.60, y: 8.250, width: 0.9, height: 0.6 },
        { id: 'p1-step-6', x: 3.87, y: 8.631, width: 0.9, height: 0.6 },
        { id: 'p1-step-7', x: 4.15, y: 9.013, width: 0.9, height: 0.6 },
        { id: 'p1-step-8', x: 4.42, y: 9.394, width: 0.9, height: 0.6 },
        { id: 'p1-step-9', x: 4.70, y: 9.775, width: 0.9, height: 0.6 },
      ],
      triggerLeverIndex: 0,
      triggerLeverState: 'A',
      initiallyRevealed: true,
      revealDuration: 0.4,
    },
    {
      // ── 路径2：下方平台 → 左上（垂直 x=-6.5，stateB 时可见）──
      platforms: [
        { id: 'p2-step-1', x: -6.5, y: 6.725, width: 0.6, height: 0.6 },
        { id: 'p2-step-2', x: -6.5, y: 7.106, width: 0.6, height: 0.6 },
        { id: 'p2-step-3', x: -6.5, y: 7.488, width: 0.6, height: 0.6 },
        { id: 'p2-step-4', x: -6.5, y: 7.869, width: 0.6, height: 0.6 },
        { id: 'p2-step-5', x: -6.5, y: 8.250, width: 0.6, height: 0.6 },
        { id: 'p2-step-6', x: -6.5, y: 8.631, width: 0.6, height: 0.6 },
        { id: 'p2-step-7', x: -6.5, y: 9.013, width: 0.6, height: 0.6 },
        { id: 'p2-step-8', x: -6.5, y: 9.394, width: 0.6, height: 0.6 },
        { id: 'p2-step-9', x: -6.5, y: 9.775, width: 0.6, height: 0.6 },
      ],
      triggerLeverIndex: 0,
      triggerLeverState: 'B',
      initiallyRevealed: false,
      revealDuration: 0.4,
    },
  ],

  // ── 主角色组：女 (wife, walker) + 男 (young, companion)，初始在左上平台 ──
  // 女性在前：朝右走时 wife 在右、young 在左后方（companion 默认 followSide=-1）
  walkerStart: { x: -6.0, y: 10.425 },
  walkerSheet: {
    url: '/textures/wife_sheet.png',
    frameCount: 2,
    frameW: 1200,
    frameH: 2100,
    height: 2.3,
    yOffset: 0.0,
  },
  companion: {
    start: { x: -7.0, y: 10.425 },
    sheet: {
      url: '/textures/young_sheet.png',
      frameCount: 2,
      frameW: 1200,
      frameH: 2000,
      height: 2.3,
      yOffset: 0.0,
    },
    followDistance: 0.8,
    followSpeed: 4.2,
    startInFollow: true,
    initialFacing: 'right',
  },

  // ── 第二组：猫 (cat) + 狗 (dog)，初始在门左侧 ──
  // 门 x=6.5 → cat x=5.5 (门左 1)、dog x=4.0 (猫左 1.5)
  extraCharacterGroups: [
    {
      start: { x: 5.5, y: 6.425 },
      sheet: {
        url: '/textures/cat_sheet.png',
        frameCount: 2,
        frameW: 2000,
        frameH: 1400,
        height: 0.9,
        yOffset: 0.0,
        indicatorXOffset: -0.4, // 选中菱形向左偏，对齐猫身体
      },
      initialFacing: 'left',
      companion: {
        // 狗起始位：猫 x=5.5，狗 x=4.5（间距 1.0）
        start: { x: 4.5, y: 6.425 },
        sheet: {
          url: '/textures/dog_sheet.png',
          frameCount: 2,
          frameW: 1600,
          frameH: 1200,
          height: 0.9,
          yOffset: 0.0,
        },
        // 跟随距离 0.7（之前 1.2），让狗紧跟猫
        followDistance: 0.7,
        // 跟随速度 4.2（略大于 walker 默认 4.0，能追上不掉队）
        followSpeed: 4.2,
        startInFollow: true,
        initialFacing: 'left',
      },
    },
  ],
  // 静止时第二组（猫狗）始终面朝主组（女男）X 方向
  extraGroupsFacePartyMain: true,

  // 沙漏：用 plant.glb 占位，放在左上↔中上间隙（X[-5, -1.5]）
  // 初始隐藏，机关1 激活后才显示并自动选中
  objects: [
    {
      id: 'hourglass',
      railMinX: -4.5,
      railMaxX: -2.0,
      // railY 对齐上层平台顶 (10.425)：让影子 Y 落在两上层平台之间的参考线上才会被判定为连通
      railY: 10.425,
      railZ: 1.0, // 物体紧贴影子壁，物影屏幕 X 几乎重合
      initialT: 0.5,
      initialRotationX: 0,
      initialRotationY: 0,
      initialRotationZ: 0,
      initialYOffset: -0.3, // railY 之上的 Y 偏移：-0.3 下移 0.3
      wrapperExtraRotation: { y: Math.PI / 2, z: -Math.PI / 2 },
      moveLimit: { up: 10, down: 6, left: 4, right: 4 },
      modelUrl: '/models/plant.glb',
      modelScale: 1.8,
      projectionScale: 2.96,
      useGlbProjection: true,
      shadowXScale: 3,
      shadowYScale: 2,
      initiallyHidden: true,
    },
  ],
  shadowDirection: { x: 0, y: 3, z: -20 },
  bridgeTolerance: 0.2,
  // 排除 p2-steps（用于 left-bottom→left-top 的阶梯路径，不应参与桥接判定）
  // 否则它们 commit 后会在 left-top 与 middle-top 之间插入中间段，切断沙漏原本桥接的 gap
  bridgeIgnorePlatformIds: [
    'p2-step-1', 'p2-step-2', 'p2-step-3', 'p2-step-4', 'p2-step-5',
    'p2-step-6', 'p2-step-7', 'p2-step-8', 'p2-step-9',
  ],
  noGuide: true,
  multiBridge: true,
  requireAllWalkersAtGate: true, // 两组都要到门
  // 影子连通后 + 两组都在下方平台 (y=6.425) → 猫狗主动跑向人 → 合并为一队
  allowPartyMerge: true,
  partyMergeCondition: 'bridge-connected-same-platform',
  partyMergePlatformY: 6.425,
  partyMergeChase: true,
  // 合并后队列：女、男、猫、狗
  partyOrder: ['main-walker', 'main-companion', 'extra-walker-0', 'extra-companion-0'],
  hintArea: { x: 0, y: 11.5, width: 4, height: 1.0 },
  hintText: '前路未知，但心中有光，便不会迷失方向',
  hintTextEn: 'The road ahead is unknown, but those who carry light within never lose their way',
  persistentHint: true,
};
