import type { LevelConfig } from '@/game/Level';

// 3-1：三段平台 + 单个行李箱
// 玩家先搭间隙 1 → 角色走过 → 移动行李箱到间隙 2 → 再搭桥 → 角色到终点
export const chapter3Level1: LevelConfig = {
  name: '章节 3 - 关卡 1',
  platforms: [
    // 左/中下沉 2 单位（变成「中部下凹」地形），右平台保持原高
    { id: 'left-platform',   x: -6.5, y:  8.25, width: 2.0, height: 0.35 },
    { id: 'middle-platform', x: -0.5, y: 10.25, width: 3.0, height: 0.35 },
    { id: 'right-platform',  x:  5.9, y: 10.25, width: 3.2, height: 0.35 },
  ],
  gate: { x: 6.5, y: 9.95, textureUrl: '/textures/gate_new.png', displayHeight: 3.12 },
  walkerStart: { x: -6.95, y: 8.425 },
  objects: [
    {
      id: 'suitcase',
      // 轨道范围足够大，让行李箱可以左右移动覆盖两个间隙
      railMinX: -5.0,
      railMaxX:  5.0,
      railY: 6.3,
      railZ: 16.0,
      initialT: 0.386,
      initialRotationX: 0,
      initialRotationY: 0,
      initialRotationZ: 6.2832,
      initialYOffset: 0.46,
      wrapperExtraRotation: { y: Math.PI / 2, z: -Math.PI / 2 },
      moveLimit: { up: 18, down: 8, left: 2, right: 10 },
      modelUrl: '/models/suitcase.glb',
      modelScale: 0.49,
      projectionScale: 2.04,
      useGlbProjection: true,
      shadowXScale: 3,
      shadowYScale: 2,
    },
  ],
  shadowDirection: { x: 0, y: -0.65, z: -20 },
  bridgeTolerance: 0.2,
  noGuide: true,
  multiBridge: true,
  hintArea: { x: 0, y: 10.35, width: 3.25, height: 1.05 },
  hintText: '长路漫漫，先迈出第一步',
  hintTextEn: 'A long road awaits — take the first step',
  walkerSheet: {
    url: '/textures/young_sheet.png',
    frameCount: 2,
    frameW: 1200,
    frameH: 2000,
    height: 2.3,
    yOffset: 0.0,
  },
};
