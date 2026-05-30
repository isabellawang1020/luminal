import type { LevelConfig } from '@/game/Level';

// 5-1：双角色 + 黑色墙障碍 + 双机关协作
// 玩家先用左下平台机关解锁隐藏通路 → 上左上平台触发墙移除机关 → 墙爆炸
// 再操作物品搭桥 → 两组角色都到达右侧门通关
export const chapter5Level1: LevelConfig = {
  name: '章节 5 - 关卡 1',
  platforms: [
    // 左下平台（站立 + 左侧机关）：x=-3.5, y=7.25, width 8
    { id: 'left-bottom',  x: -3.5, y: 7.25,  width: 8, height: 0.35 },
    // 左上平台（隐藏通路顶 + 第二个机关）：x=-1.5, y=12.25, width 2
    { id: 'left-top',     x: -6.5, y: 10.25, width: 2, height: 0.35 },
    // 右侧平台（终点 + 门）：x=6.5, y=7.25, width 2.5
    { id: 'right-platform', x: 6.5, y: 8.75, width: 2.5, height: 0.35 },
  ],
  // 隐藏通路：垂直阶梯，左下 x=-6.5 → 左上 x=-6.5
  // 左下平台顶 y=7.425；左上平台底 y=10.075
  // 高度差 2.65，用 3 段，相邻段重叠 0.4 保证 BFS 能跨
  hiddenPlatforms: [
    { id: 'ramp-1', x: -6.5, y:  7.95, width: 0.8, height: 1.4 }, // 7.25~8.65（重叠左下顶 7.425）
    { id: 'ramp-2', x: -6.5, y:  8.85, width: 0.8, height: 1.4 }, // 8.15~9.55（重叠 ramp-1）
    { id: 'ramp-3', x: -6.5, y:  9.75, width: 0.8, height: 1.4 }, // 9.05~10.45（重叠 ramp-2 + 左上底 10.075）
  ],
  hiddenPlatformRevealDuration: 0.3,
  hiddenPlatformButtonIndex: 0, // buttons[0] 控制隐藏通路
  // 黑色墙：X[-2.5, -0.5] Y[6.8, 13.5]（下边缘从 7.5 降到 6.8，让墙穿透到平台 cell）
  walls: [
    { x: 2.0, y: 7.15, width: 6.0, height: 10.7 },
  ],
  wallRemoveButtonIndex: 1, // buttons[1] 移除墙
  // 两个机关：
  // [0]=左下平台靠墙位置（continuous，控制隐藏通路）
  // [1]=左上平台（once，触发墙移除）
  buttons: [
    {
      x: -2.0, y: 7.43,
      triggerHalfWidth: 1.5, triggerHalfHeight: 0.5,
      visualRadius: 0.2,
      mode: 'continuous',
    },
    {
      x: -6.5, y: 10.43,
      triggerHalfWidth: 0.8, triggerHalfHeight: 0.5,
      visualRadius: 0.2,
      mode: 'once',
    },
  ],
  // 门在右侧平台中央，初始可见（无需 gateInitialHidden）
  gate: { x: 6.5, y: 8.5, textureUrl: '/textures/gate_new.png', displayHeight: 4.125 },
  // 主角色组：adult + 狗，站在左下平台
  walkerStart: { x: -6.0, y: 7.425 },
  walkerSheet: {
    url: '/textures/adult_sheet.png',
    frameCount: 2,
    frameW: 1100,
    frameH: 2000,
    height: 2.3,
    yOffset: 0.0,
  },
  companion: {
    start: { x: -5.5, y: 7.425 },
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
  // 第二组：wife + 猫，紧挨主组 X 间隔 0.8
  extraCharacterGroups: [
    {
      start: { x: -5.2, y: 7.425 },
      sheet: {
        url: '/textures/wife_sheet.png',
        frameCount: 2,
        frameW: 1200,
        frameH: 2100,
        height: 2.3,
        yOffset: 0.0,
      },
      initialFacing: 'right',
      companion: {
        start: { x: -4.7, y: 7.425 },
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
        initialFacing: 'right',
      },
    },
  ],
  objects: [
    {
      // 蛋糕：覆盖左下→右侧的间隙，初始影子在墙范围内被遮挡
      id: 'cake',
      railMinX: -1.0,
      railMaxX:  4.0,
      railY: 6.3,
      railZ: 8.0,
      initialT: 0.51,
      initialRotationX: 0.27,
      initialRotationY: 0,
      initialRotationZ: 0.8727,
      initialYOffset: 0.08,
      wrapperExtraRotation: { y: Math.PI / 2, z: -Math.PI / 2 },
      moveLimit: { up: 12, down: 8, left: 6, right: 6 },
      modelUrl: '/models/cake.glb',
      modelScale: 1.75,
      projectionScale: 3.72,
      useGlbProjection: true,
      shadowXScale: 3,
      shadowYScale: 2,
    },
  ],
  shadowDirection: { x: 0, y: 1.35, z: -20 },
  bridgeTolerance: 0.2,
  // 排除 left-top 和 ramps（通过 hiddenPlatforms ramps 与 left-bottom 连通，不应作为桥接 gap 端点）
  // 蛋糕只需要桥接 left-bottom ↔ right-platform
  bridgeIgnorePlatformIds: ['left-top', 'ramp-1', 'ramp-2', 'ramp-3'],
  noGuide: true,
  multiBridge: true,
  requireAllWalkersAtGate: true, // 两组角色都到门才通关
  allowPartyMerge: true, // 墙移除后两组相遇可合并为一队
  partyOrder: ['extra-walker-0', 'main-walker', 'extra-companion-0', 'main-companion'], // 女、男、猫、狗
  hintArea: { x: 0, y: 7.35, width: 3.25, height: 1.05 },
  hintText: '裂缝之处，光自会渗入',
  hintTextEn: 'Where light breaks through — where life begins anew',
  wallRemovedHintText: '每个人都是光的一部分，少了谁，光路都不完整',
  wallRemovedHintTextEn: 'Each of us is a piece of the light — without one, the path is incomplete',
  transitHintText: '',
  transitHintTextEn: '',
  persistentHint: true,
};
