import type { LevelConfig } from '@/game/Level';

export const chapter1Level2: LevelConfig = {
  name: '章节 1 - 关卡 2',
  platforms: [
    { id: 'left-platform', x: -4.65, y: 7.25, width: 6.1, height: 0.35 },
    { id: 'right-platform', x: 4.65, y: 7.25, width: 6.1, height: 0.35 },
  ],
  gate: { x: 6.35, y: 7.425 },
  walkerStart: { x: -6.45, y: 7.425 },
  objects: [
    {
      id: 'triangle-block',
      railMinX: -3.0,
      railMaxX: 3.0,
      railY: 6.3,
      railZ: 16.0,
      initialT: 0.5,
      initialRotationX: 0,
      initialRotationY: 0,
      shape: 'triangle',
    },
  ],
  hintArea: { x: 0, y: 7.35, width: 3.25, height: 1.05 },
};
