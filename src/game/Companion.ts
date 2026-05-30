import * as THREE from 'three';
import { Walker } from '@/game/Walker';
import type { WalkerSheet } from '@/game/Level';

export interface CompanionData {
  /** 伴随者初始位置（一般在某段平台中心附近） */
  start: { x: number; y: number };
  /** 序列帧配置（cat/dog 等） */
  sheet: WalkerSheet;
  /** 待机踱步范围（X 区间，默认 ±0.5 围绕起点） */
  wanderRange?: { minX: number; maxX: number };
  /** 跟随距离（保留字段，当前实现 = 直接复制主角 path，followDistance 仅用于"是否启动 follow" 判断） */
  followDistance?: number;
  /** 跟随速度 */
  followSpeed?: number;
  /** 创建时是否就处于跟随模式（默认 false，先 wander） */
  startInFollow?: boolean;
  /** 初始朝向（默认 'right'） */
  initialFacing?: 'left' | 'right';
}

/**
 * 伴随者（如：宠物狗、宠物猫、跟随男）
 * - wander 模式：在 wanderRange 内随机来回踱步
 * - follow 模式：直接复制主角的 path 来走（最朴素策略：主角点击 → 主角走 BFS path → 同时把 path 给狗 → 狗也走同样路径）
 *   不计算 followDistance，狗的起始位决定它跟主角的差距；走完 path 停在 path 末尾
 */
export class Companion {
  public readonly walker: Walker;
  public readonly group: THREE.Group;
  private mode: 'wander' | 'follow' = 'wander';
  private wanderRange: { minX: number; maxX: number };
  private wanderY: number;
  private wanderTarget: number;
  private wanderPause = 0;

  constructor(public readonly data: CompanionData) {
    this.walker = new Walker(
      new THREE.Vector2(data.start.x, data.start.y),
      data.sheet,
      {
        noIndicator: true,
        speed: data.followSpeed ?? 2.0,
        initialFacing: data.initialFacing ?? 'right',
      },
    );
    this.group = this.walker.group;

    this.wanderY = data.start.y;
    this.wanderRange = data.wanderRange ?? {
      minX: data.start.x - 0.5,
      maxX: data.start.x + 0.5,
    };
    this.wanderTarget = this.pickWanderTarget();
  }

  /**
   * 让伴随者切到跟随模式。从此狗会在 followPath() 被调用时走主角的 path。
   * 不再 wander。
   */
  startFollowing(_target: () => { pos: THREE.Vector2; isWalking: boolean } | null): void {
    this.mode = 'follow';
  }

  /**
   * 主角发起新 path 时调这个：把同样的 path 给狗。狗也开始走这条路径。
   * 末尾截掉 followDistance 单位，让狗最终停在主角身后一段距离。
   */
  followPath(path: THREE.Vector2[]): void {
    if (this.mode !== 'follow') return;
    if (path.length === 0) return;
    const dogPath = this.shortenPathByEnd(
      path.map((p) => p.clone()),
      this.data.followDistance ?? 0.6,
    );
    if (dogPath.length === 0) return;
    this.walker.setPath(dogPath);
  }

  /** 从 path 末尾"沿 path 反方向"砍掉 dropLen 单位 → 返回截断后的 path（保留至少 1 点） */
  private shortenPathByEnd(path: THREE.Vector2[], dropLen: number): THREE.Vector2[] {
    if (path.length <= 1 || dropLen <= 0) return path;
    let remain = dropLen;
    // 从末尾向起点扫，累积每段长度
    let i = path.length - 1;
    while (i > 0 && remain > 0) {
      const a = path[i - 1];
      const b = path[i];
      const segLen = Math.hypot(b.x - a.x, b.y - a.y);
      if (segLen >= remain) {
        // 在 segment 内回退 remain 单位
        const t = (segLen - remain) / segLen;
        const newEnd = new THREE.Vector2(
          a.x + t * (b.x - a.x),
          a.y + t * (b.y - a.y),
        );
        // 保留 path[0..i-1] + newEnd
        return [...path.slice(0, i), newEnd];
      }
      // 跨过整个 segment
      remain -= segLen;
      i -= 1;
    }
    // 走完整段 path 还没砍够 → 只保留起点
    return [path[0].clone()];
  }

  /** 停止跟随 / 踱步（外部接管位置控制；5-1 合并队伍后让 partyFollowing 接管） */
  stopAutoBehavior(): void {
    this.walker.setPath([]);
  }

  /** 重置回待机模式（供关卡 reset 使用） */
  resetToWander(): void {
    this.mode = 'wander';
    this.wanderTarget = this.pickWanderTarget();
    this.wanderPause = 0;
    this.walker.setPath([]);
    this.walker.setPosition(new THREE.Vector2(this.data.start.x, this.data.start.y));
  }

  private pickWanderTarget(): number {
    const { minX, maxX } = this.wanderRange;
    return minX + Math.random() * (maxX - minX);
  }

  update(deltaTime: number): void {
    if (this.mode === 'wander') {
      if (!this.walker.isWalking()) {
        this.wanderPause -= deltaTime;
        if (this.wanderPause <= 0) {
          const cur = this.walker.position.x;
          let next = this.pickWanderTarget();
          let attempts = 0;
          while (Math.abs(next - cur) < 0.3 && attempts < 5) {
            next = this.pickWanderTarget();
            attempts += 1;
          }
          this.wanderTarget = next;
          this.walker.setPath([new THREE.Vector2(this.wanderTarget, this.wanderY)]);
          this.wanderPause = 0.6 + Math.random() * 0.8;
        }
      }
    }
    // follow 模式下 walker.path 由外部 followPath() 设置；这里不需要每帧重算
    this.walker.update(deltaTime);
  }
}
