import type { LevelConfig } from '@/game/Level';
import { a } from '@/utils/asset';

export const chapter1Level3: LevelConfig = {
  name: '章节 1 - 关卡 3',
  platforms: [
    { id: 'left-platform', x: -4.65, y: 7.25, width: 6.1, height: 0.35 },
    { id: 'right-platform', x: 4.65, y: 7.25, width: 6.1, height: 0.35 },
  ],
  gate: { x: 6.35, y: 7.425, textureUrl: a('/textures/gate_new.png'), displayHeight: 1.8 },
  walkerStart: { x: -6.45, y: 7.425 },
  objects: [
    {
      id: 'stroller',
      railMinX: -2.5,
      railMaxX: 2.5,
      railY: 6.3,
      railZ: 16.0,
      initialT: 0.5,
      // 初始朝向：推车正侧面对相机，投影形似横线
      initialRotationX: 0,
      initialRotationY: 0,
      wrapperExtraRotation: { y: Math.PI / 2, z: -Math.PI / 2 },
      // 移动 + 旋转均开放（综合教学）
      moveLimit: { up: 4, down: 4, left: 5, right: 5 },
      modelUrl: a('/models/1_3.glb'),
      modelScale: 0.6,
      projectionScale: 2.0,
      useGlbProjection: true,
    },
  ],
  hintArea: { x: 0, y: 7.35, width: 3.25, height: 1.05 },
  hintText: '移动推车，再转动它，让影子为你铺路',
  hintTextEn: 'Move the stroller, then turn it, and let its shadow make the way',
  walkerSheet: {
    url: a('/textures/baby_sheet.png'),
    frameCount: 4,
    frameW: 256,
    frameH: 192,
    height: 0.82,
    yOffset: 0.015,
  },
};
