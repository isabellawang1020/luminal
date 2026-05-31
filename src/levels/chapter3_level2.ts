import type { LevelConfig } from '@/game/Level';
import { a } from '@/utils/asset';

// 3-2：三段下坡平台 + 中间平台站着狗 + 单个行李箱
// 玩家先搭间隙 1 让角色到中间平台 → 狗跟随主角 → 玩家挪行李箱搭间隙 2 → 一人一狗一起过终点
export const chapter3Level2: LevelConfig = {
  name: '章节 3 - 关卡 2',
  platforms: [
    // 高度梯度：左 10.25 → 中 9.5 → 右 8.25（下坡，中间偏左、靠近左平台高度）
    { id: 'left-platform',   x: -6.5, y: 10.35, width: 2.5, height: 0.35 },
    { id: 'middle-platform', x: -0.5, y:  9.7,  width: 2.5, height: 0.35 },
    { id: 'right-platform',  x:  6.5, y:  8.25, width: 2.5, height: 0.35 },
  ],
  gate: { x: 6.5, y: 7.95, textureUrl: a('/textures/gate_new.png'), displayHeight: 3.12 },
  walkerStart: { x: -6.95, y: 10.525 },
  // 狗的初始位置在中间平台，等待主角到来后跟随
  companion: {
    start: { x: -0.5, y: 9.875 }, // 中间平台顶面（y=9.7 + 0.175）
    sheet: {
      url: a('/textures/dog_sheet.png'),
      frameCount: 2,
      frameW: 1600,
      frameH: 1200,
      height: 0.9,
      yOffset: 0.0,
    },
    wanderRange: { minX: -1.5, maxX: 0.5 }, // 在中间平台范围内来回踱步
    followDistance: 0.55,
    followSpeed: 2.0,
  },
  objects: [
    {
      id: 'train',
      railMinX: -5.0,
      railMaxX:  5.0,
      railY: 6.3,
      railZ: 16.0,
      initialT: 0.384,
      initialRotationX: 0,
      initialRotationY: 0,
      initialRotationZ: 0,
      initialYOffset: 0.68,
      wrapperExtraRotation: { y: Math.PI / 2, z: -Math.PI / 2 },
      moveLimit: { up: 15, down: 8, left: 2, right: 10 },
      modelUrl: a('/models/train.glb'),
      modelScale: 0.41,
      projectionScale: 1.5,
      useGlbProjection: true,
      shadowXScale: 3,
      shadowYScale: 2,
    },
  ],
  shadowDirection: { x: 0, y: -0.55, z: -20 },
  bridgeTolerance: 0.2,
  noGuide: true,
  multiBridge: true,
  hintArea: { x: 0, y: 10.35, width: 3.25, height: 1.05 },
  hintText: '前行的路上，总有伙伴与你相随',
  hintTextEn: 'On the road ahead, a faithful companion walks beside you',
  transitHintText: '继续铺路，带着伙伴一起向前',
  transitHintTextEn: 'Keep making the path, and bring your companion with you',
  walkerSheet: {
    url: a('/textures/young_sheet.png'),
    frameCount: 2,
    frameW: 1200,
    frameH: 2000,
    height: 2.3,
    yOffset: 0.0,
  },
};
