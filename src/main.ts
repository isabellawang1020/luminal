import * as THREE from 'three';
import { SceneManager } from '@/core/Scene';
import { ChapterManager } from '@/game/ChapterManager';
import { chapter1Level2 } from '@/levels/chapter1_level2';
import { chapter2Level1 } from '@/levels/chapter2_level1';
import { chapter3Level1 } from '@/levels/chapter3_level1';
import { chapter3Level2 } from '@/levels/chapter3_level2';
import { chapter4Level1 } from '@/levels/chapter4_level1';
import { chapter4Level2 } from '@/levels/chapter4_level2';
import { chapter5Level1 } from '@/levels/chapter5_level1';
import { chapter5Level2 } from '@/levels/chapter5_level2';
import { chapter6Level1 } from '@/levels/chapter6_level1';
import { tutorial3 } from '@/levels/tutorial3';
import { HUD } from '@/ui/HUD';
import { InputManager } from '@/ui/InputManager';
import { NarrativeScreen } from '@/ui/NarrativeScreen';
import { ObjectControls } from '@/ui/ObjectControls';
import { BgmManager } from '@/audio/BgmManager';
import { audioManager } from '@/audio/SfxManager';
import { StartScreen } from '@/ui/StartScreen';
import { VideoScreen } from '@/ui/VideoScreen';
import { ZoneOverlay } from '@/ui/ZoneOverlay';
import { Locale } from '@/core/Locale';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('未找到应用挂载点 #app');
}

app.style.position = 'relative';
app.style.width = '100%';
app.style.height = '100%';

const zoneLayer = document.createElement('div');
zoneLayer.style.position = 'absolute';
zoneLayer.style.inset = '0';
zoneLayer.style.pointerEvents = 'none';
zoneLayer.style.zIndex = '0';
app.append(zoneLayer);

// ── 背景图层（挂在 zoneLayer 内，Three.js canvas 透明后穿透显示）──
const bgLayer = document.createElement('div');
Object.assign(bgLayer.style, {
  position: 'absolute',
  inset: '0',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  transition: 'opacity 0.5s ease',
  opacity: '0',
});
zoneLayer.append(bgLayer);

/** 每个关卡索引对应的背景图 URL（undefined 表示无背景） */
const LEVEL_BACKGROUNDS: (string | undefined)[] = [
  '/chapter1_bg.jpg', // 1-1
  '/chapter1_bg.jpg', // 1-2
  '/chapter2_bg.jpg', // 2-1
  '/chapter3_bg.jpg', // 3-1
  '/chapter3_bg.jpg', // 3-2
  '/chapter5_bg.jpg', // 4-1（与第五章交换）
  '/chapter5_bg.jpg', // 4-2（与第五章交换）
  '/chapter4_bg.jpg', // 5-1（与第四章交换）
  '/chapter4_bg.jpg', // 5-2（暂用第五章背景）
  '/chapter6_bg.jpg', // 6-1
];

// 关卡索引 → "X-Y" 编号 + 中文章节名（与 levels 数组顺序对应）
const LEVEL_LABELS = ['1-1', '1-2', '2-1', '3-1', '3-2', '4-1', '4-2', '5-1', '5-2', '6-1'];
const CHAPTER_NAMES_CN = ['第一章', '第二章', '第三章', '第四章', '第五章', '第六章'];

/** 返回类似 "第一章 1-1" 的关卡显示标题 */
function getLevelDisplayLabel(index: number): string {
  const label = LEVEL_LABELS[index] ?? `L${index + 1}`;
  const chapterNum = parseInt(label.split('-')[0], 10);
  const chapterName = CHAPTER_NAMES_CN[chapterNum - 1] ?? `第${chapterNum}章`;
  return `${chapterName} ${label}`;
}

function setBackground(levelIndex: number): void {
  const url = LEVEL_BACKGROUNDS[levelIndex];
  if (url) {
    bgLayer.style.backgroundImage = `url('${url}')`;
    bgLayer.style.opacity = '1';
  } else {
    bgLayer.style.opacity = '0';
  }
}

const sceneLayer = document.createElement('div');
sceneLayer.style.position = 'absolute';
sceneLayer.style.inset = '0';
sceneLayer.style.zIndex = '1';
app.append(sceneLayer);

const uiLayer = document.createElement('div');
uiLayer.style.position = 'absolute';
uiLayer.style.inset = '0';
uiLayer.style.pointerEvents = 'none';
uiLayer.style.zIndex = '2';
app.append(uiLayer);

const sceneManager = new SceneManager(sceneLayer);
const hud = new HUD(uiLayer);
const chapterManager = new ChapterManager(sceneManager, hud, {
  levels: [tutorial3, chapter1Level2, chapter2Level1, chapter3Level1, chapter3Level2, chapter4Level1, chapter4Level2, chapter5Level1, chapter5Level2, chapter6Level1],
});

const controls = new ObjectControls(uiLayer, {
  onRotateX: (delta) => chapterManager.activeLevel.rotateSelected(delta, 0, 0),
  onRotateY: (delta) => {
    chapterManager.activeLevel.autoSelectForAction('rotate');
    chapterManager.activeLevel.rotateSelected(0, delta, 0);
  },
  onRotateZ: (delta) => {
    chapterManager.activeLevel.autoSelectForAction('rotate');
    chapterManager.activeLevel.rotateSelected(0, 0, delta);
  },
  onRailChange: (value, direction) => {
    chapterManager.activeLevel.autoSelectForAction('move');
    chapterManager.activeLevel.setSelectedRail(value, direction);
  },
  onRailChangeY: (delta) => {
    chapterManager.activeLevel.autoSelectForAction('move');
    chapterManager.activeLevel.moveSelectedY(delta);
  },
  onBeginAdjust: () => undefined,
  onEndAdjust: () => chapterManager.activeLevel.finalizeAdjustment(),
});

const zoneOverlay = new ZoneOverlay(sceneManager, tutorial3, zoneLayer, controls.panel);
chapterManager.setOverlayFader(zoneOverlay);
hud.bindResume(() => chapterManager.activeLevel.resume());
hud.setBgmCallback((muted) => bgm.setMuted(muted));

// 角色掉落 → 显示警告；关卡重置 → 隐藏警告；关卡切换 → 更新提示文案 + 背景
let walkerArrowTracking = false; // 影子变绿后追踪角色位置给箭头用
let gateArrowTracking = false;   // 角色选中后追踪门位置给箭头用

// 6-1 剧情序列：女男变老人 + 狗淡出 + 猫淡出 + 老人淡出 → 过关
function runChapter6Sequence(level: import('@/game/Level').Level): void {
  // 主角女、companion 男、extra walker 狗、extra companion 猫
  const wife = level.mainWalker;
  const husband = level.mainCompanion?.walker;
  const dog = level.getExtraWalker(0);
  const cat = level.getExtraCompanion(0)?.walker;
  if (!wife || !husband || !dog || !cat) {
    console.warn('[6-1] 缺少角色，无法播放序列');
    return;
  }
  // old_sheet 两份（用于女男变老人）—— 同一张 sheet，两个比例
  const oldSheet = {
    url: '/textures/old_sheet.png',
    frameCount: 2,
    frameW: 1200,
    frameH: 2000,
    height: 2.3,
    yOffset: 0.0,
  };

  // 通用淡出动画
  const fadeOut = (w: typeof wife, durMs: number) => {
    const start = performance.now();
    const initialOpacity = w.getOpacity();
    const tick = () => {
      const elapsed = performance.now() - start;
      const t = Math.min(1, elapsed / durMs);
      w.setOpacity(initialOpacity * (1 - t));
      if (t < 1) requestAnimationFrame(tick);
    };
    tick();
  };

  // 序列时间表（相对影子连通触发时刻，单位秒）
  // 4s：狗开始淡出（1s）
  // 5s：狗消失 + 男变老（0.9 比例）
  // 6s：猫开始淡出（1s）
  // 7s：猫消失 + 女变老（0.8 比例，Y 下移 0.1）
  // 11s：男老人开始淡出
  // 12.5s：男老人消失
  // 剩余：女老人继续走到门口 → 触发 completeLevel → 叙事页

  setTimeout(() => {
    husband.swapSheet({ ...oldSheet });
    husband.setExtraScale(0.9);
  }, 5000);

  setTimeout(() => {
    wife.swapSheet({ ...oldSheet });
    wife.setExtraScale(0.7, 0.1);
  }, 7000);

  setTimeout(() => fadeOut(dog, 1000), 4000);
  setTimeout(() => fadeOut(cat, 1000), 6000);
  setTimeout(() => fadeOut(husband, 1000), 7000);
}

const bindLevelCallbacks = (level: import('@/game/Level').Level) => {
  level.onWalkerFell = () => zoneOverlay.showWarning();
  level.onRestart = () => { zoneOverlay.hideWarning(); walkerArrowTracking = false; gateArrowTracking = false; };
  // 切换关卡时先把提示词写入 level（onLevelActivated 时再显示，
  // 避免延迟过渡提前创建下一关时提示词闪现）
  level.setHintText(
    level.config.hintText ?? '向上移动积木，让影子铺出第一道光路',
    level.config.hintTextEn ?? 'Lift the block upward, and let its shadow form the first path of light',
  );



  // 旋转面板显隐
  controls.setRotationVisible(!level.config.hideRotationPanel);
  // 重置移动面板（上一关可能隐藏了）
  controls.setMoveVisible(true);
  // 引导模式（上移）
  const hasTutorial = (level.config.tutorialUpSteps ?? 0) > 0;
  controls.setTutorialMode(hasTutorial);
  // 引导模式（旋转）
  const hasRotateTutorial = (level.config.tutorialRotateSteps ?? 0) > 0;
  controls.setRotateTutorialMode(hasRotateTutorial);
  level.onTutorialUnlock = () => {
    controls.setTutorialMode(false);
    controls.setRotateTutorialMode(false);
  };
  // 影子连通回调
  walkerArrowTracking = false;
  gateArrowTracking = false;
  controls.hideArrow();

  // 公共：关卡通关后的章节切换叙事（对所有关卡都生效，包括 noGuide）
  const playChapterNarrativeIfNeeded = () => {
    // 关卡索引 → 通关后要播放的叙事数组
    const narrativeMap: Record<number, Array<{ zh: string; en: string }>> = {
      1: chapter2Narrative, // 1-2 通关后 → 第二章叙事
      2: chapter3Narrative, // 2-1 通关后 → 第三章叙事
      4: chapter4Narrative, // 3-2 通关后 → 第四章叙事
      6: chapter5Narrative, // 4-2 通关后 → 第五章叙事
      8: chapter6Narrative, // 5-2 通关后 → 第六章叙事（终章前）
      9: endingNarrative,   // 6-1 通关后 → 结束语
    };
    // 关卡索引 → 叙事前播放的视频 URL（可选）
    const preNarrativeVideoMap: Record<number, string> = {
      1: '/video/chapter1end2.mp4', // 1-2 通关后 → chapter1end2 → 第二章叙事
      2: '/video/chapter2end.mp4', // 2-1 通关后 → chapter2end → 第三章叙事
      4: '/video/chapter3end.mp4', // 3-2 通关后 → chapter3end → 第四章叙事
      6: '/video/chapter4end.mp4', // 4-2 通关后 → chapter4end → 第五章叙事
      8: '/video/chapter5end.mp4', // 5-2 通关后 → chapter5end → 第六章叙事
      9: '/video/chapter6end.mp4', // 6-1 通关后 → chapter6end → 结束叙事
    };
    // 关卡索引 → 视频开始播放时淡入的下一章 BGM（视频期间完成 crossfade）
    const nextBgmMap: Record<number, string> = {
      1: 'BGM-02',   // 1-2 通关后 → chapter1end2 视频期间 → BGM-02
      2: 'BGM-03',   // 2-1 通关后 → chapter2end 视频期间 → BGM-03
      4: 'BGM-04',   // 3-2 通关后 → chapter3end 视频期间 → BGM-04
      6: 'BGM-05',   // 4-2 通关后 → chapter4end 视频期间 → BGM-05
      8: 'BGM-06',   // 5-2 通关后 → chapter5end 视频期间 → BGM-06
      9: 'BGM-06',   // 6-1 通关后（终章）保持 BGM-06 作为结束叙事音乐
    };
    const narrative = narrativeMap[chapterManager.currentLevelIndex];
    if (!narrative) return;
    const preVideo = preNarrativeVideoMap[chapterManager.currentLevelIndex];
    // 防御性清理：StartScreen 可能因调试跳关等路径未被 dismiss，
    // 此时直接 opacity=1 会让 StartScreen 重新可见 → 关卡切换看到首页。
    if (startScreen.root.parentElement) startScreen.root.remove();

    // 延迟过渡：让 ChapterManager 不自动执行 SLIDE 动画，
    // 等视频/叙事播放完成后再手动切换到下一关
    chapterManager.deferTransitionToNextLevel();

    // 关卡完成 → 渐黑过渡（0.5s 淡出 + 0.3s 纯黑停顿）
    overlayLayer.style.transition = 'opacity 0.5s ease-out';
    overlayLayer.style.opacity = '1';
    overlayLayer.style.pointerEvents = 'auto';
    // 在渐变期间就把 overlayLayer 背景置黑，避免视频/叙事前瞬间透出场景
    overlayLayer.style.background = '#000';
    bgm.setVolumeMultiplier(0.3, 0.6);

    // 叙事/视频结束后的统一收尾动作
    const finishTransition = () => {
      // 手动完成关卡切换（nextLevel → currentLevel，触发 onLevelActivated）
      chapterManager.completeDeferredTransition();
      overlayLayer.style.transition = 'opacity 0.4s ease';
      overlayLayer.style.opacity = '0';
      overlayLayer.style.pointerEvents = 'none';
      overlayLayer.style.background = 'transparent';
      bgm.setVolumeMultiplier(1.0, 0.8);
    };

    // 显示叙事页
    const showNarrative = () => {
      // 结束叙事（index 9）：demo 到此为止，不显示箭头、不响应点击、常驻显示
      if (chapterManager.currentLevelIndex === 9) {
        narrativeScreen.show(narrative, undefined, { hideArrow: true, disableClick: true });
        return;
      }
      narrativeScreen.show(narrative, finishTransition);
    };

    // 0.8s 渐黑完成后再开始播放内容（视频或叙事）
    setTimeout(() => {
      // 播放顺序：视频 → 叙事 → 过渡
      // 如果有视频就先播放视频，视频结束后显示叙事；否则直接显示叙事
      if (preVideo) {
        // 视频开始播放时淡入下一章 BGM（同时淡出当前 BGM），与视频 3s 淡入同步完成
        const nextBgm = nextBgmMap[chapterManager.currentLevelIndex];
        if (nextBgm) {
          bgm.setVolumeMultiplier(0.3, 0.6);
          bgm.crossfadeTo(nextBgm, 3.0);
        }
        // 章节结束视频标准淡入时长：3s
        videoScreen.show(preVideo, showNarrative, 3000);
      } else {
        showNarrative();
      }
    }, 800);
  };

  if (level.config.noGuide) {
    // noGuide 模式：影子连通后只隐藏移动面板，不显示提示和箭头
    // multiBridge 模式：保留移动面板（玩家还要继续挪物体搭下一段桥）
    // persistentHint 模式：提示词全程保留
    const hideHintIfNotPersistent = () => {
      if (!level.config.persistentHint) zoneOverlay.hideHint();
    };
    level.onBridgeConnected = () => {
      // autoFinishOnBridge 关卡：影子连通后强制隐藏移动 + 旋转面板（玩家不再操作）
      if (level.config.autoFinishOnBridge) {
        controls.setMoveVisible(false);
        controls.setRotationVisible(false);
      } else if (!level.config.multiBridge) {
        controls.setMoveVisible(false);
      }
      hideHintIfNotPersistent();
    };
    level.onWalkerSelected = () => { /* 无引导 */ };
    level.onWalkerStartMove = () => {
      controls.hideArrow();
      hideHintIfNotPersistent();
    };
    level.onLevelComplete = () => {
      controls.hideArrow();
      hideHintIfNotPersistent();
      playChapterNarrativeIfNeeded();
    };
    // multiBridge 模式 + 有 companion：角色到达"中转平台"时
    //   1) 显示中转提示词
    //   2) 触发 companion 跟随
    if (level.config.multiBridge && level.config.platforms.length >= 3) {
      const plats = level.config.platforms;
      level.onWalkerArrived = (pos) => {
        for (let i = 1; i < plats.length - 1; i += 1) {
          const p = plats[i];
          if (pos.x >= p.x - p.width / 2 && pos.x <= p.x + p.width / 2) {
            // 空串或 undefined 表示"全程不切换提示词"，保留原有文案
            if (level.config.transitHintText) {
              const text = level.setHintText(
                level.config.transitHintText ?? '再次移动行李箱，铺出下一段路',
                level.config.transitHintTextEn ?? 'Move the suitcase again to make the next path',
              );
              zoneOverlay.resetHint(text);
            }
            // 启动 companion 跟随主角
            level.startCompanionFollowing();
            break;
          }
        }
      };
    }
    // 墙移除后切换提示词
    if (level.config.wallRemovedHintText) {
      level.onWallRemoved = () => {
        zoneOverlay.resetHint(
          level.setHintText(
            level.config.wallRemovedHintText!,
            level.config.wallRemovedHintTextEn,
          ),
        );
      };
    }
  } else {
    level.onBridgeConnected = () => {
      controls.setMoveVisible(false);
      const bridgeText = level.setHintText(
        level.config.bridgeHintText ?? '光路已铺就，点选人物前行',
        level.config.bridgeHintTextEn ?? 'The light-path is set. Click a character to walk',
      );
      zoneOverlay.setHintText(bridgeText);
      walkerArrowTracking = true;
    };
    level.onWalkerSelected = () => {
      walkerArrowTracking = false;
      gateArrowTracking = true;
      const walkerText = level.setHintText(
        level.config.walkerSelectedHintText ?? '点选门扉，引导角色前往终点',
        level.config.walkerSelectedHintTextEn ?? 'Click the gate — guide them to the end',
      );
      zoneOverlay.setHintText(walkerText);
    };
    level.onWalkerStartMove = () => {
      gateArrowTracking = false;
      walkerArrowTracking = false;
      controls.hideArrow();
      zoneOverlay.hideHint();
    };
    level.onLevelComplete = () => {
      gateArrowTracking = false;
       walkerArrowTracking = false;
      controls.hideArrow();
      zoneOverlay.hideHint();
      playChapterNarrativeIfNeeded();
    };
  }

  // 6-1 自动通关剧情：影子连通触发后，启动变身 / 淡出序列
  level.onAutoFinish = () => {
    runChapter6Sequence(level);
  };
};
// 第一个关卡在 ChapterManager 构造时已创建，需手动补绑
bindLevelCallbacks(chapterManager.activeLevel);

// 语言切换处理：切换 Locale + 重新刷新当前关卡的提示词
Locale.onChange(() => {
  const activeLevel = chapterManager.activeLevel;
  const translated = activeLevel.refreshHintText();
  // 仅在关卡当前正在显示提示词时更新（避免已 hideHint 的关卡被拉回）
  if (translated !== null && zoneOverlay.isHintVisible()) {
    zoneOverlay.setHintText(translated);
  }
  // 同步刷新暂停面板 + 控制面板标签 + HUD 动态文本 + ZoneOverlay 警告文本
  hud.refreshPausedText();
  hud.refreshLocalizedText();
  controls.refreshLabels();
  zoneOverlay.refreshWarningText();
});

// HUD 语言按钮回调
hud.setLangCallback((lang) => Locale.setLang(lang));
// ── BGM 管理 ──────────────────────────────────────────────────
const bgm = new BgmManager();
bgm.preload(
  ['BGM-00', 'BGM-01', 'BGM-02', 'BGM-03', 'BGM-04', 'BGM-05', 'BGM-06'],
  (id) => `/bgm/${id}.mp3`,
);

// ── 音效管理 ──────────────────────────────────────────────────
// 初始化音效管理器
audioManager.preload(['wall', 'pass', 'connected', 'switch', 'click']).then(() => {
  console.log('[Main] SFX preloaded');
});

// 用户首次交互后解锁播放
const unlockBgm = () => {
  bgm.unlock();
  audioManager.unlock();
  window.removeEventListener('pointerdown', unlockBgm);
  window.removeEventListener('keydown', unlockBgm);
};
window.addEventListener('pointerdown', unlockBgm);
window.addEventListener('keydown', unlockBgm);
// 进入页面立刻切到开始页 BGM（unlock 之前会被排队，unlock 后开始）
bgm.crossfadeTo('BGM-00', 0);

/** 关卡 index → 章节 BGM ID */
function getBgmForLevel(levelIndex: number): string {
  const label = LEVEL_LABELS[levelIndex] ?? '1-1';
  const chapterNum = parseInt(label.split('-')[0], 10);
  return `BGM-0${chapterNum}`;
}

// 后续关卡切换时自动绑
chapterManager.onLevelCreated = bindLevelCallbacks;
chapterManager.onLevelActivated = (index) => {
  // 关卡激活时显示提示词（此时关卡已切换完成，不会提前闪现）
  const activeLevel = chapterManager.activeLevel;
  // 每次重新设置提示词（刷新 Locale 对应的翻译版本，防御 currentHint 过期）
  const displayHint = activeLevel.setHintText(
    activeLevel.config.hintText ?? '向上移动积木，让影子铺出第一道光路',
    activeLevel.config.hintTextEn ?? 'Lift the block upward, and let its shadow form the first path of light',
  );
  zoneOverlay.resetHint(displayHint);
  setBackground(index);
  hud.setLevelLabel(getLevelDisplayLabel(index));
  // 切换 BGM 到当前章节
  bgm.crossfadeTo(getBgmForLevel(index), 1.2);
};
// 初始关卡背景 & 关卡标签
setBackground(0);
hud.setLevelLabel(getLevelDisplayLabel(0));

sceneManager.removeWallBackground();

new InputManager(sceneManager, () => chapterManager.activeLevel, [controls.root, hud.root], zoneOverlay, () => !chapterManager.isTransitioning);

const debugPanel = document.createElement('div');
Object.assign(debugPanel.style, {
  position: 'absolute',
  top: '24px',
  right: '24px',
  padding: '12px 16px',
  borderRadius: '10px',
  background: 'rgba(0, 0, 0, 0.75)',
  color: '#00ff88',
  fontFamily: 'monospace',
  fontSize: '12px',
  lineHeight: '1.7',
  pointerEvents: 'auto',
  display: 'none',
  zIndex: '9999',
  minWidth: '200px',
  whiteSpace: 'pre',
  // 限制最大高度，超出可滚动
  maxHeight: 'calc(100vh - 48px)',
  overflowY: 'auto',
  overflowX: 'hidden',
});

const debugInfoText = document.createElement('div');
debugInfoText.style.pointerEvents = 'none';
debugPanel.append(debugInfoText);

const levelSelectContainer = document.createElement('div');
Object.assign(levelSelectContainer.style, {
  marginTop: '10px',
  paddingTop: '8px',
  borderTop: '1px solid rgba(0, 255, 136, 0.3)',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '6px',
});

for (let i = 0; i < chapterManager.levelCount; i += 1) {
  const btn = document.createElement('button');
  btn.textContent = LEVEL_LABELS[i] ?? `L${i + 1}`;
  Object.assign(btn.style, {
    background: 'rgba(0, 255, 136, 0.15)',
    border: '1px solid rgba(0, 255, 136, 0.4)',
    borderRadius: '4px',
    color: '#00ff88',
    fontFamily: 'monospace',
    fontSize: '11px',
    padding: '4px 8px',
    cursor: 'pointer',
    pointerEvents: 'auto',
    textAlign: 'center',
  });
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    // 跳过开始页和叙事页，直接进入关卡
    if (!gameStarted) {
      gameStarted = true;
      overlayLayer.style.transition = 'none';
      overlayLayer.style.opacity = '0';
      overlayLayer.style.pointerEvents = 'none';
      sceneLayer.style.transition = 'none';
      sceneLayer.style.opacity = '1';
      zoneLayer.style.opacity = '1';
      uiLayer.style.opacity = '1';
      chapterManager.activeLevel.resume();
      controls.notifyGameStarted();
    }
    chapterManager.jumpToLevel(i);
  });
  levelSelectContainer.append(btn);
}
debugPanel.append(levelSelectContainer);

// ── 位置模拟器 ──────────────────────────────────────────────────
const poseSection = document.createElement('div');
Object.assign(poseSection.style, {
  marginTop: '10px',
  paddingTop: '8px',
  borderTop: '1px solid rgba(0, 255, 136, 0.3)',
});

const poseSectionTitle = document.createElement('div');
poseSectionTitle.textContent = '── 位置模拟器 ──';
Object.assign(poseSectionTitle.style, {
  color: '#88ddff',
  fontSize: '11px',
  marginBottom: '6px',
  letterSpacing: '0.5px',
});
poseSection.append(poseSectionTitle);

// 姿态输入框工厂
const makePoseInputRow = (
  label: string,
  step: number,
  onChange: (v: number) => void,
): { row: HTMLDivElement; input: HTMLInputElement } => {
  const row = document.createElement('div');
  Object.assign(row.style, {
    display: 'flex', alignItems: 'center', gap: '6px',
    marginBottom: '4px', pointerEvents: 'auto',
  });
  const lbl = document.createElement('span');
  lbl.textContent = label;
  Object.assign(lbl.style, { color: '#88ddff', fontSize: '11px', minWidth: '72px' });
  row.append(lbl);
  const input = document.createElement('input');
  input.type = 'number';
  input.step = String(step);
  input.value = '0';
  Object.assign(input.style, {
    flex: '1', background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(136,221,255,0.3)',
    borderRadius: '3px', color: '#c8f0ff', fontFamily: 'monospace', fontSize: '11px',
    padding: '2px 5px', width: '0',
  });
  input.addEventListener('change', (e) => { e.stopPropagation(); onChange(parseFloat(input.value) || 0); });
  input.addEventListener('click', (e) => e.stopPropagation());
  input.addEventListener('mousedown', (e) => e.stopPropagation());
  input.addEventListener('keydown', (e) => e.stopPropagation());
  row.append(input);
  return { row, input };
};

const { row: poseIdRow, input: poseIdInput } = makePoseInputRow('id', 1, () => {});
// id 行只读文本显示
poseIdInput.type = 'text';
poseIdInput.readOnly = true;
poseIdInput.style.color = '#aaa';
poseSection.append(poseIdRow);

const { row: poseTRow, input: poseTInput } = makePoseInputRow('initialT', 0.001, (v) => chapterManager.activeLevel.setSelectedInitialT(v));
poseSection.append(poseTRow);

// initialX：物体当前世界坐标 X，可编辑（内部转 normalizedT）
const { row: poseXRow, input: poseXInput } = makePoseInputRow('initialX', 0.01, (v) => {
  const obj = chapterManager.activeLevel.selectedObject;
  if (!obj) return;
  const span = obj.data.railMaxX - obj.data.railMinX;
  if (span === 0) return;
  const t = (v - obj.data.railMinX) / span;
  chapterManager.activeLevel.setSelectedInitialT(Math.max(0, Math.min(1, t)));
});
poseSection.append(poseXRow);

const { row: poseRXRow, input: poseRXInput } = makePoseInputRow('rotX', 0.01, (v) => {
  const obj = chapterManager.activeLevel.selectedObject;
  if (obj) chapterManager.activeLevel.setSelectedRotation(v, obj.group.rotation.y, obj.group.rotation.z);
});
poseSection.append(poseRXRow);

const { row: poseRYRow, input: poseRYInput } = makePoseInputRow('rotY', 0.01, (v) => {
  const obj = chapterManager.activeLevel.selectedObject;
  if (obj) chapterManager.activeLevel.setSelectedRotation(obj.group.rotation.x, v, obj.group.rotation.z);
});
poseSection.append(poseRYRow);

const { row: poseRZRow, input: poseRZInput } = makePoseInputRow('rotZ', 0.01, (v) => {
  const obj = chapterManager.activeLevel.selectedObject;
  if (obj) chapterManager.activeLevel.setSelectedRotation(obj.group.rotation.x, obj.group.rotation.y, v);
});
poseSection.append(poseRZRow);

const { row: poseYOffRow, input: poseYOffInput } = makePoseInputRow('yOffset', 0.01, (v) => chapterManager.activeLevel.setSelectedYOffset(v));
poseSection.append(poseYOffRow);

// poseInfoText 保留为空 pre，用于错误输出
const poseInfoText = document.createElement('pre');
Object.assign(poseInfoText.style, {
  margin: '0', fontSize: '10px', color: '#f88', whiteSpace: 'pre', pointerEvents: 'none',
});
poseSection.append(poseInfoText);

// ── 缩放滑块区 ────────────────────────────────────────────────
const makeSliderRow = (
  label: string,
  min: number,
  max: number,
  step: number,
  initVal: number,
  onChange: (v: number) => void,
): { row: HTMLDivElement; slider: HTMLInputElement; valueLabel: HTMLSpanElement } => {
  const row = document.createElement('div');
  Object.assign(row.style, {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '5px',
    pointerEvents: 'auto',
  });

  const lbl = document.createElement('span');
  lbl.textContent = label;
  Object.assign(lbl.style, { color: '#88ddff', fontSize: '11px', minWidth: '80px' });
  row.append(lbl);

  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = String(min);
  slider.max = String(max);
  slider.step = String(step);
  slider.value = String(initVal);
  Object.assign(slider.style, { flex: '1', cursor: 'pointer', accentColor: '#88ddff' });
  row.append(slider);

  const valueLabel = document.createElement('span');
  valueLabel.textContent = initVal.toFixed(3);
  Object.assign(valueLabel.style, { color: '#c8f0ff', fontSize: '11px', minWidth: '42px', textAlign: 'right' });
  row.append(valueLabel);

  slider.addEventListener('input', (e) => {
    e.stopPropagation();
    const v = parseFloat(slider.value);
    valueLabel.textContent = v.toFixed(3);
    onChange(v);
  });
  slider.addEventListener('click', (e) => e.stopPropagation());
  slider.addEventListener('mousedown', (e) => e.stopPropagation());

  return { row, slider, valueLabel };
};

const { row: modelScaleRow, slider: modelScaleSlider, valueLabel: modelScaleLabel } = makeSliderRow(
  'modelScale',
  0.05, 3.0, 0.01, 0.6,
  (v) => chapterManager.activeLevel.setSelectedModelScale(v),
);
poseSection.append(modelScaleRow);

const { row: projScaleRow, slider: projScaleSlider, valueLabel: projScaleLabel } = makeSliderRow(
  'projScale',
  0.05, 6.0, 0.01, 1.2,
  (v) => chapterManager.activeLevel.setSelectedProjScale(v),
);
poseSection.append(projScaleRow);

const { row: lightYRow, slider: lightYSlider, valueLabel: lightYLabel } = makeSliderRow(
  'lightDir Y',
  -5.0, 5.0, 0.05, 0.3,
  (v) => chapterManager.activeLevel.setShadowDirectionY(v),
);
poseSection.append(lightYRow);

// 「复制初始位置配置」按钮
const copyPoseBtn = document.createElement('button');
copyPoseBtn.textContent = '复制为初始位置配置';
Object.assign(copyPoseBtn.style, {
  background: 'rgba(136, 221, 255, 0.15)',
  border: '1px solid rgba(136, 221, 255, 0.5)',
  borderRadius: '4px',
  color: '#88ddff',
  fontFamily: 'monospace',
  fontSize: '11px',
  padding: '5px 10px',
  cursor: 'pointer',
  pointerEvents: 'auto',
  width: '100%',
  marginTop: '4px',
});
copyPoseBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const obj = chapterManager.activeLevel.selectedObject;
  if (!obj) return;
  const pose = obj.currentPose;
  const r = (n: number) => parseFloat(n.toFixed(4));
  const lightY = chapterManager.activeLevel.getShadowDirectionRawY();
  const lines = [
    `      initialT: ${r(pose.initialT)},`,
    `      initialRotationX: ${r(pose.initialRotationX)},`,
    `      initialRotationY: ${r(pose.initialRotationY)},`,
    `      initialRotationZ: ${r(pose.initialRotationZ)},`,
    `      modelScale: ${r(pose.modelScale)},`,
    `      projectionScale: ${r(pose.projectionScale)},`,
    ...(pose.railYOffset !== 0 ? [`      // railY offset: ${r(pose.railYOffset)} (在 railY 基础上增减)`] : []),
    `      // shadowDirection y: ${parseFloat(lightY.toFixed(3))}`,
  ];
  const text = lines.join('\n');
  navigator.clipboard.writeText(text).then(() => {
    copyPoseBtn.textContent = '✓ 已复制！';
    setTimeout(() => { copyPoseBtn.textContent = '复制为初始位置配置'; }, 1800);
  }).catch(() => {
    copyPoseBtn.textContent = '见下方输出';
    poseInfoText.textContent += `\n--- 复制内容 ---\n${text}\n`;
  });
});
poseSection.append(copyPoseBtn);

debugPanel.append(poseSection);
app.append(debugPanel);

window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyD') {
    debugPanel.style.display = debugPanel.style.display === 'none' ? 'block' : 'none';
  }
});

window.addEventListener('resize', () => zoneOverlay.updateLayout());

// ── 开始页 & 叙事页流程 ──────────────────────────────────────
// overlay 层用于承载开始页 / 叙事页（zIndex 最高）
// 自身透明，由内部 StartScreen / NarrativeScreen 各自的黑底承担遮挡
const overlayLayer = document.createElement('div');
Object.assign(overlayLayer.style, {
  position: 'absolute',
  inset: '0',
  zIndex: '50',
  pointerEvents: 'auto',
  background: 'transparent',
});
app.append(overlayLayer);

const narrativeScreen = new NarrativeScreen(overlayLayer);
const videoScreen = new VideoScreen(overlayLayer);

// 第一章开篇文字
const chapter1Narrative = [
  { zh: '你睁开眼，第一眼看见的是光。', en: 'When you opened your eyes, the first thing you saw was light.' },
];

// 第二章开篇文字
const chapter2Narrative = [
  { zh: '你学会了走路。', en: 'You learned to walk.' },
  { zh: '影子，也开始学着陪伴。', en: 'And your shadow learned to stay beside you.' },
];

// 第三章开篇文字
const chapter3Narrative = [
  { zh: '有一天，你忽然想知道：光，究竟从哪里来？', en: 'One day, you began to wonder: where does light truly come from?' },
  { zh: '也是那一天，路上多了一个同行者。', en: 'That same day, someone began walking beside you.' },
];

// 第四章开篇文字
const chapter4Narrative = [
  { zh: '你背起行囊，走进更大的世界。', en: 'You shouldered your luggage and stepped into a wider world.' },
  { zh: '光在远方，你在此处，中间是一段漫长却美丽的路。', en: 'Light was far ahead. You stood here. Between them lay a long, beautiful road.' },
];

// 第五章开篇文字
const chapter5Narrative = [
  { zh: '你曾以为，拥有就会害怕失去。', en: 'You once thought having meant fearing loss.' },
  { zh: '后来才懂，最暖的光，不是照向远方，而是照亮回家的路。', en: 'Only later did you learn: the warmest light is not the one that shines far away, but the one that lights the way home.' },
];

// 第六章开篇文字（5-2 通关后，进入终章 6-1）
const chapter6Narrative = [
  { zh: '原来路再远，只要有人同行，就不算长。', en: 'It turned out no road is too long, as long as someone walks with you.' },
  { zh: '后来，我们成了彼此的灯。', en: "In time, we became each other's light." },
  { zh: '可光越往前，影子也被拉得越长。', en: 'But as the light moved on, the shadows grew longer.' },
];

// 终章结束语（6-1 通关后）
const endingNarrative = [
  { zh: '你来时，世界把一束光交到你手里。', en: 'When you arrived, the world placed a beam of light in your hands.' },
  { zh: '你离开时，把它还给了每一个你爱过的人。', en: 'When you left, you gave it back to everyone you ever loved.' },
  { zh: '光不会消失，它只是换了地方，继续温柔地照着。', en: 'Light never disappears. It simply moves somewhere else, and keeps shining softly.' },
  { zh: '', en: '' }, // 空行
  { zh: '', en: '' }, // 额外空行 1
  { zh: '', en: '' }, // 额外空行 2
  { zh: '谢谢你，陪他走完这一生。', en: 'Thank you for walking this life with him.' },
];


// 初始隐藏场景层，叙事结束后再淡入
sceneLayer.style.opacity = '0';
sceneLayer.style.transition = 'opacity 0.6s ease';
zoneLayer.style.opacity = '0';
uiLayer.style.opacity = '0';

let gameStarted = false;

function startGame(): void {
  if (gameStarted) return;
  gameStarted = true;
  // 点击开始：BGM-00 淡出，同时淡入 BGM-01（视频期间播放）
  bgm.crossfadeTo('BGM-01', 1.0);

  // 关卡画面 → 渐黑过渡（0.5s 淡出 + 0.3s 纯黑停顿）
  overlayLayer.style.transition = 'opacity 0.5s ease-out';
  overlayLayer.style.opacity = '1';
  overlayLayer.style.pointerEvents = 'auto';
  overlayLayer.style.background = '#000';

  // 叙事结束后的统一收尾动作（淡入游戏场景）
  const finishIntro = () => {
    console.log('[StartGame] entering game');
    overlayLayer.style.transition = 'opacity 0.4s ease';
    overlayLayer.style.opacity = '0';
    overlayLayer.style.pointerEvents = 'none';
    overlayLayer.style.background = 'transparent';
    sceneLayer.style.opacity = '1';
    zoneLayer.style.opacity = '1';
    uiLayer.style.opacity = '1';
    chapterManager.activeLevel.resume();
    controls.notifyGameStarted();
  };

  // 叙事页
  const showNarrative = () => {
    narrativeScreen.show(chapter1Narrative, finishIntro);
  };

  // 视频 → 叙事（视频从全黑淡入 5s）
  const showVideoThenNarrative = () => {
    videoScreen.show('/video/chapter1start.mp4', showNarrative, 5000);
  };

  // 0.8s 渐黑完成后开始播放视频
  setTimeout(showVideoThenNarrative, 800);
}

const startScreen = new StartScreen(overlayLayer);
startScreen.onStart(startGame);

// ── Tick ─────────────────────────────────────────────────────
let previousTime = performance.now();

function tick(now: number): void {
  const deltaTime = Math.min(0.033, (now - previousTime) / 1000);
  previousTime = now;

  chapterManager.update(deltaTime);

  const activeLevel = chapterManager.activeLevel;
  const curObj = chapterManager.isTransitioning ? null : activeLevel.selectedObject;
  controls.setObject(curObj);
  // 面板显隐：
  // - autoFinishOnBridge 关卡且影子已连通：强制都隐藏（玩家不能再操作物体）
  // - autoSelectByAction 关卡：两个面板都显示，由点按钮自动选中物体
  // - 否则：根据当前选中物体的 disableMove / disableRotate 切换
  if (activeLevel.config.autoFinishOnBridge && activeLevel.isBridgeConnected) {
    controls.setMoveVisible(false);
    controls.setRotationVisible(false);
  } else if (activeLevel.config.autoSelectByAction) {
    controls.setMoveVisible(true);
    controls.setRotationVisible(!activeLevel.config.hideRotationPanel);
  } else if (curObj) {
    controls.setMoveVisible(!curObj.data.disableMove);
    controls.setRotationVisible(!curObj.data.disableRotate && !activeLevel.config.hideRotationPanel);
  }
  controls.syncSlider();
  zoneOverlay.updateLayout();

  const anchor = chapterManager.isTransitioning ? null : activeLevel.selectedAnchor;
  if (anchor) {
    controls.updateScreenPosition(sceneManager.worldToScreen(anchor), deltaTime);
  }

  // 影子变绿后，箭头追踪角色屏幕位置
  if (walkerArrowTracking) {
    const walkerPos = activeLevel.walkerWorldPosition;
    const screen = sceneManager.worldToScreen(new THREE.Vector3(walkerPos.x, walkerPos.y + 0.5, 0.24));
    controls.pointArrowAt(screen.x, screen.y, 10, -110, deltaTime);
  }
  // 角色选中后，箭头追踪门的屏幕位置
  if (gateArrowTracking) {
    const gatePos = activeLevel.gateWorldPosition;
    const screen = sceneManager.worldToScreen(new THREE.Vector3(gatePos.x, gatePos.y, 0.16));
    controls.pointArrowAt(screen.x, screen.y, 0, -180, deltaTime);
  }

  if (debugPanel.style.display !== 'none') {
    const info = activeLevel.getDebugInfo();
    debugInfoText.textContent = Object.entries(info).map(([k, v]) => `${k}: ${v}`).join('\n');

    // 位置模拟器：同步输入框（只在无焦点时更新，避免打断编辑）
    const obj = activeLevel.selectedObject;
    const syncInput = (input: HTMLInputElement, val: number) => {
      if (document.activeElement !== input) {
        input.value = parseFloat(val.toFixed(4)).toString();
      }
    };
    if (obj) {
      const pose = obj.currentPose;
      if (document.activeElement !== poseIdInput) poseIdInput.value = obj.data.id;
      syncInput(poseTInput, pose.initialT);
      // 世界坐标 X = lerp(railMinX, railMaxX, T)
      const worldX = obj.data.railMinX + pose.initialT * (obj.data.railMaxX - obj.data.railMinX);
      syncInput(poseXInput, worldX);
      syncInput(poseRXInput, pose.initialRotationX);
      syncInput(poseRYInput, pose.initialRotationY);
      syncInput(poseRZInput, pose.initialRotationZ);
      syncInput(poseYOffInput, pose.railYOffset);
      if (parseFloat(modelScaleSlider.value) !== pose.modelScale) {
        modelScaleSlider.value = String(pose.modelScale);
        modelScaleLabel.textContent = pose.modelScale.toFixed(3);
      }
      if (parseFloat(projScaleSlider.value) !== pose.projectionScale) {
        projScaleSlider.value = String(pose.projectionScale);
        projScaleLabel.textContent = pose.projectionScale.toFixed(3);
      }
    } else {
      poseIdInput.value = '（无选中物体）';
    }
    // lightY 滑块同步
    const rawY = activeLevel.getShadowDirectionRawY();
    if (Math.abs(parseFloat(lightYSlider.value) - rawY) > 0.001) {
      lightYSlider.value = String(rawY);
      lightYLabel.textContent = rawY.toFixed(3);
    }
  }

  sceneManager.render();
  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
