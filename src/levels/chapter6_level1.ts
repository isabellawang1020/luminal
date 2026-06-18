import type { LevelConfig } from '@/game/Level';
import { a } from '@/utils/asset';

// 6-1：单关，影子连通 → 自动通关 + 角色变身/淡出剧情
// 平台：左侧 X[-8, -4]、右侧 X[4, 8]，等高 y=6.25
// 角色：女(walker) + 男(companion) + 狗(extra walker) + 猫(extra companion)
// 物品：怀表（watch.glb），放间隙中间偏下
// 特殊：影子连通触发自动序列 — 角色被自动选中走向门，途中变身（女男→老人 + 狗淡出 + 猫淡出 + 老人淡出）
export const chapter6Level1: LevelConfig = {
  name: '章节 6 - 关卡 1',
  platforms: [
    // 左平台：左沿 X=-8 保持，长度 6.6 → 4.1，X[-8, -3.9]，中心 x=-5.95
    { id: 'left',  x: -5.95, y: 6.25, width: 4.1, height: 0.35 },
    // 右平台：右沿 X=8 保持，长度 7.6 → 9.1，X[-1.1, 8]，中心 x=3.45
    { id: 'right', x:  3.45, y: 6.25, width: 9.1, height: 0.35 },
  ],
  // 门：放大到 displayHeight=3.5；y 下移 1.5
  gate: { x: 6.25, y: 6.0, textureUrl: a('/textures/gate_new.webp'), displayHeight: 3.5 },

  // ── 主角色组：女 (wife) + 男 (young, companion)，初始在左平台 ──
  walkerStart: { x: -6.5, y: 6.425 },
  walkerSheet: {
    url: a('/textures/wife_sheet.webp'),
    frameCount: 2,
    frameW: 1200,
    frameH: 2100,
    height: 2.3,
    yOffset: 0.0,
  },
  companion: {
      start: { x: -7.3, y: 6.425 },
    sheet: {
      url: a('/textures/young_sheet.webp'),
      frameCount: 2,
      frameW: 1200,
      frameH: 2000,
      height: 2.3,
      yOffset: 0.0,
    },
     followDistance: 0.8,
    followSpeed: 1.8,
    startInFollow: true,
    initialFacing: 'right',
  },

  // ── 第二组：狗 (walker) + 猫 (companion)，初始在左平台靠右 ──
  // 顺序"女、男、狗、猫"——女男在左，狗猫紧跟
  extraCharacterGroups: [
    {
       start: { x: -5.7, y: 6.425 },
      sheet: {
        url: a('/textures/dog_sheet.webp'),
        frameCount: 2,
        frameW: 1600,
        frameH: 1200,
        height: 0.9,
        yOffset: 0.0,
      },
      initialFacing: 'right',
       companion: {
        start: { x: -4.8, y: 6.425 },
        sheet: {
          url: a('/textures/cat_sheet.webp'),
          frameCount: 2,
          frameW: 2000,
          frameH: 1400,
          height: 0.9,
          yOffset: 0.0,
          indicatorXOffset: -0.4,
        },
        followDistance: 0.7,
        followSpeed: 1.2,
        startInFollow: true,
        initialFacing: 'right',
      },
    },
  ],

  // 怀表：放在间隙中间偏下
  objects: [
    {
      id: 'watch',
      // 间隙 X[-3.9, -1.1]，rail 留一点 buffer
      railMinX: -3.5,
      railMaxX: -1.5,
      railY: 6.0,
      railZ: 1.0,
      initialT: 0.47,
      initialRotationX: 0,
      initialRotationY: 2.2689,
      initialRotationZ: 0,
      initialYOffset: -0.36,
      wrapperExtraRotation: { y: Math.PI / 2, z: -Math.PI / 2 },
      moveLimit: { up: 10, down: 6, left: 4, right: 4 },
      modelUrl: a('/models/watch.glb'),
      modelScale: 1.9,
      projectionScale: 2.97,
      useGlbProjection: true,
      shadowXScale: 3,
      shadowYScale: 2,
    },
  ],
  shadowDirection: { x: 0, y: -3.05, z: -20 },
  bridgeTolerance: 0.2,
  noGuide: true,
  multiBridge: true,
  hintArea: { x: 0, y: 9.5, width: 4, height: 1.0 },
  hintText: '让影子，轻轻填上时光的缝隙',
  hintTextEn: 'Let the shadow gently fill the cracks of time',
  persistentHint: true,
  // 6-1 慢节奏剧情，角色走得慢一点
  walkerSpeed: 2.0,
  extraWalkerSpeed: 1.2,
  // 初始就合并队伍：四角色作为一组（女、男、狗、猫顺序）
  allowPartyMerge: true,
  partyMergedFromStart: true,
  partyOrder: ['main-walker', 'main-companion', 'extra-walker-0', 'extra-companion-0'],
  requireAllWalkersAtGate: true,
  // 特殊：影子连通 → 触发自动通关序列（main.ts 监听 onAutoFinish）
  autoFinishOnBridge: true,
};
