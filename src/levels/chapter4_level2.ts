import type { LevelConfig } from '@/game/Level';

// 4-2：两组角色（男+狗 / 女+猫），各自在不同平台
// 中间平台上有门 + 两个机关，两边各有一组人物
// 两个机关同时被踩亮（continuous 模式）→ 门出现 → 角色到门通关
export const chapter4Level2: LevelConfig = {
  name: '章节 4 - 关卡 2',
  platforms: [
    // 左平台 y=12.25（与 4-1 右一致）、右平台 y=7.25（与 4-1 左一致）、中间 y=9.75
    { id: 'left-platform',   x: -6.5, y: 10.95, width: 2.5, height: 0.35 },
    { id: 'middle-platform', x:  0,   y:  9.75, width: 5.0, height: 0.35 },
    { id: 'right-platform',  x:  6.5, y:  7.25, width: 2.5, height: 0.35 },
  ],
  // 门初始隐藏，两个机关同时绿色时才出现
  gate: { x: 0, y: 9.45, textureUrl: '/textures/gate_new.png', displayHeight: 3.12 },
  gateInitialHidden: true,
  // 两个机关（continuous 模式：仅在角色站在上面时变绿，离开变回橙色）
  buttons: [
    { x: -2.0, y: 9.93, triggerHalfWidth: 1.2, triggerHalfHeight: 0.5, visualRadius: 0.2, mode: 'continuous' },
    { x:  2.0, y: 9.93, triggerHalfWidth: 1.2, triggerHalfHeight: 0.5, visualRadius: 0.2, mode: 'continuous' },
  ],
  // 主角色组：男 young + 狗，位于左平台
  walkerStart: { x: -6.5, y: 11.125 },
  walkerSheet: {
    url: '/textures/young_sheet.png',
    frameCount: 2,
    frameW: 1200,
    frameH: 2000,
    height: 2.3,
    yOffset: 0.0,
  },
  companion: {
    start: { x: -6.0, y: 11.125 },
    sheet: {
      url: '/textures/dog_sheet.png',
      frameCount: 2,
      frameW: 1600,
      frameH: 1200,
      height: 0.9,
      yOffset: 0.0,
    },
    followDistance: 0.55,
    followSpeed: 2.5,
    startInFollow: true,
    initialFacing: 'right',
  },
  // 额外角色组：女 wife + 猫，位于右平台
  extraCharacterGroups: [
    {
      start: { x: 6.5, y: 7.425 },
      sheet: {
        url: '/textures/wife_sheet.png',
        frameCount: 2,
        frameW: 1200,
        frameH: 2100,
        height: 2.3,
        yOffset: 0.0,
      },
      initialFacing: 'left',
      companion: {
        start: { x: 6.0, y: 7.425 },
        sheet: {
          url: '/textures/cat_sheet.png',
          frameCount: 2,
          frameW: 2000,
          frameH: 1400,
          height: 0.9,
          yOffset: 0.0,
        },
        followDistance: 0.55,
        followSpeed: 2.5,
        startInFollow: true,
        initialFacing: 'left',
      },
    },
  ],
  objects: [
    {
      // 望远镜：覆盖间隙 1（左↔中），左平台 y=10.95 低，中平台 y=9.75 高 → 上坡
      id: 'telescope',
      railMinX: -5.0,
      railMaxX: -2.0,
      railY: 6.3,
      railZ: 8.0,
      initialT: 0.48,
      initialRotationX: 0,
      initialRotationY: 1.9199,
      initialRotationZ: 0.5236,
      initialYOffset: 1.82,
      wrapperExtraRotation: { y: Math.PI / 2, z: -Math.PI / 2 },
      moveLimit: { up: 22, down: 8, left: 4, right: 4 },
      modelUrl: '/models/telescope.glb',
      modelScale: 0.87,
      projectionScale: 1.5,
      useGlbProjection: true,
      shadowXScale: 3,
      shadowYScale: 2,
      disableMove: true, // 望远镜只允许旋转
    },
    {
      // 气球：覆盖间隙 2（中↔右），中平台 y=9.75 高，右平台 y=7.25 低 → 下坡
      id: 'balloon',
      railMinX: 2.0,
      railMaxX: 5.0,
      railY: 6.3,
      railZ: 4.0,
      initialT: 0.6,
      initialRotationX: 0,
      initialRotationY: 0,
      initialRotationZ: 0.41,
      initialYOffset: 0.28,
      wrapperExtraRotation: { y: Math.PI / 2, z: -Math.PI / 2 },
      moveLimit: { up: 12, down: 8, left: 4, right: 4 },
      modelUrl: '/models/balloon.glb',
      modelScale: 1.82,
      projectionScale: 3.66,
      useGlbProjection: true,
      shadowXScale: 3,
      shadowYScale: 2,
      disableRotate: true, // 气球只允许移动
    },
  ],
  shadowDirection: { x: 0, y: -0.05, z: -20 },
  bridgeTolerance: 0.2,
  noGuide: true,
  multiBridge: true,
  autoSelectByAction: true,
  hintArea: { x: 0, y: 9.85, width: 3.25, height: 1.05 },
  hintText: '点选角色切换；让两处机关同时亮起',
  hintTextEn: 'Switch characters — light both buttons at once',
  transitHintText: '',
  transitHintTextEn: '',
  persistentHint: true,
};
