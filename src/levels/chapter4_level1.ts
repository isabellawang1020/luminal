import type { LevelConfig } from '@/game/Level';
import { a } from '@/utils/asset';

// 4-1：影子桥 + 隐藏平台机关
// 玩家用放大镜搭"左→中"的影子桥，过去后走到中平台中央触发按钮
// 按钮激活后，"中→右"之间的隐藏平台逐渐显示，连接到右侧高高的平台
// 主角 + 狗（从一开始就联动）一起过关
export const chapter4Level1: LevelConfig = {
  name: '章节 4 - 关卡 1',
  platforms: [
    // 左/中等高（7.25），右平台高高在上（12.25）
    { id: 'left-platform',   x: -6.25, y:  7.25, width: 3.0, height: 0.35 },
    { id: 'middle-platform', x:  1.0,  y:  6.75, width: 4.0, height: 0.35 },
    { id: 'right-platform',  x:  6.5, y: 12.25, width: 2.5, height: 0.35 },
  ],
  // 隐藏平台：12 段阶梯式斜坡，从中平台右边缘 (3.0) → 右平台左边缘 (5.25)
  // 跨度 2.25，每段宽 0.1875；高度从 6.925 升到 12.25，每段抬升 ~0.44
  // 每段 height 0.74，相邻段在 Y 方向重叠 0.3（BFS 网格可走）
  hiddenPlatforms: [
    { id: 'hidden-1',  x: 3.09375,  y:  7.27, width: 0.1875, height: 0.74 }, // 顶 7.64, 底 6.90
    { id: 'hidden-2',  x: 3.28125,  y:  7.71, width: 0.1875, height: 0.74 }, // 顶 8.08, 底 7.34
    { id: 'hidden-3',  x: 3.46875,  y:  8.15, width: 0.1875, height: 0.74 }, // 顶 8.52, 底 7.78
    { id: 'hidden-4',  x: 3.65625,  y:  8.59, width: 0.1875, height: 0.74 }, // 顶 8.96, 底 8.22
    { id: 'hidden-5',  x: 3.84375,  y:  9.03, width: 0.1875, height: 0.74 }, // 顶 9.40, 底 8.66
    { id: 'hidden-6',  x: 4.03125,  y:  9.47, width: 0.1875, height: 0.74 }, // 顶 9.84, 底 9.10
    { id: 'hidden-7',  x: 4.21875,  y:  9.91, width: 0.1875, height: 0.74 }, // 顶 10.28,底 9.54
    { id: 'hidden-8',  x: 4.40625,  y: 10.35, width: 0.1875, height: 0.74 }, // 顶 10.72,底 9.98
    { id: 'hidden-9',  x: 4.59375,  y: 10.79, width: 0.1875, height: 0.74 }, // 顶 11.16,底 10.42
    { id: 'hidden-10', x: 4.78125,  y: 11.23, width: 0.1875, height: 0.74 }, // 顶 11.60,底 10.86
    { id: 'hidden-11', x: 4.96875,  y: 11.67, width: 0.1875, height: 0.74 }, // 顶 12.04,底 11.30
    { id: 'hidden-12', x: 5.15625,  y: 12.05, width: 0.1875, height: 0.74 }, // 顶 12.42,底 11.68
  ],
  hiddenPlatformRevealDuration: 0.8,
  // 按钮：中间平台中心位置
  button: {
    x: 1.0,
    y: 6.93, // 中平台顶面 (6.75+0.175) 略高一点，让按钮浮在表面
    triggerRadius: 0.6,
    visualRadius: 0.22,
  },
  gate: { x: 6.5, y: 11.95, textureUrl: a('/textures/gate_new.png'), displayHeight: 3.12 },
  walkerStart: { x: -6.95, y: 7.425 },
  // 狗从一开始就跟随主角
  companion: {
    start: { x: -6.0, y: 7.425 }, // 紧跟主角后面
    sheet: {
      url: a('/textures/dog_sheet.png'),
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
  objects: [
    {
      id: 'magnifier',
      railMinX: -4.0,
      railMaxX:  3.0,
      railY: 6.3,
      railZ: 16.0,
      initialT: 0.4314,
      initialRotationX: 0,
      initialRotationY: -0.5,
      initialRotationZ: 0,
      initialYOffset: 0.3,
      wrapperExtraRotation: { y: Math.PI / 2, z: -Math.PI / 2 },
      moveLimit: { up: 12, down: 8, left: 4, right: 4 },
      modelUrl: a('/models/glass.glb'),
      modelScale: 0.2,
      projectionScale: 0.72,
      useGlbProjection: true,
      shadowXScale: 3,
      shadowYScale: 2,
    },
  ],
  shadowDirection: { x: 0, y: -1.35, z: -20 },
  bridgeTolerance: 0.15,
  noGuide: true,
  multiBridge: true,
  hintArea: { x: 0, y: 7.35, width: 3.25, height: 1.05 },
  hintText: '看似遥远，也会有微光在路上等你',
  hintTextEn: 'It may seem far away, but a soft light waits along the way',
  transitHintText: '', // 全程不切换提示词
  transitHintTextEn: '',
  persistentHint: true, // 关卡全程提示词不消失
  walkerSheet: {
    url: a('/textures/young_sheet.png'),
    frameCount: 2,
    frameW: 1200,
    frameH: 2000,
    height: 2.3,
    yOffset: 0.0,
  },
};
