import * as THREE from 'three';
import type { WalkerSheet } from '@/game/Level';
import { IdleIndicator } from '@/game/IdleIndicator';
import { a } from '@/utils/asset';

const DEFAULT_SHEET: WalkerSheet = {
  url: a('/textures/walker_sheet.png'),
  frameCount: 5,
  frameW: 128,
  frameH: 256,
};

const FRAME_FPS = 8;

export interface WalkerOptions {
  /** 不创建头顶菱形指示器（如：宠物/伴随者） */
  noIndicator?: boolean;
  /** 自定义移动速度（默认 2.8） */
  speed?: number;
  /** 初始朝向（默认 'right'）—— 影响 sprite.scale.x 的初始值 */
  initialFacing?: 'left' | 'right';
}

export class Walker {
  public readonly group = new THREE.Group();
  private readonly sprite: THREE.Mesh;
  private readonly spriteMat: THREE.MeshBasicMaterial;
  private readonly path: THREE.Vector2[] = [];
  private completionCallback: (() => void) | null = null;
  private elapsed = 0;
  private readonly speed: number;
  /** 速度倍率，外部可动态设置（跟随落后时加速） */
  public speedBoost = 1;
  public height: number;
  /** sprite Y 偏移基线（用于变身后调整脚位）— 默认 height/2，由 setExtraScale 修改 */
  private spriteBaseY: number;
  private readonly yOffset: number;
  private readonly position2D = new THREE.Vector2();
  private frameCount: number;

  // 掉落动画状态
  private fallTimer = -1;
  private readonly FALL_DURATION = 3.0;
  private fallStartY = 0;
  private fallCallback: (() => void) | null = null;

  // 序列帧状态
  private frameElapsed = 0;
  private currentFrame = 0;

  // idle 指示器（可选）
  private readonly indicator: IdleIndicator | null;

  constructor(start: THREE.Vector2, sheet?: WalkerSheet, options?: WalkerOptions) {
    this.position2D.copy(start);
    const s = sheet ?? DEFAULT_SHEET;
    this.frameCount = s.frameCount;
    this.height = s.height ?? 1.0;
    this.spriteBaseY = this.height / 2;
    this.yOffset = s.yOffset ?? 0.08;
    this.speed = options?.speed ?? 4.0;

    this.spriteMat = new THREE.MeshBasicMaterial({
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    // 纹理加载完成后才赋给材质，避免 "no image data found" 警告
    new THREE.TextureLoader().load(s.url, (texture) => {
      texture.repeat.set(1 / s.frameCount, 1);
      texture.offset.set(0, 0);
      this.spriteMat.map = texture;
      this.spriteMat.needsUpdate = true;
    });

    // 宽高比与单帧一致
    const aspect = s.frameW / s.frameH;
    this.sprite = new THREE.Mesh(
      new THREE.PlaneGeometry(this.height * aspect, this.height),
      this.spriteMat,
    );
    this.sprite.position.set(0, this.height / 2, 0);
    this.group.add(this.sprite);

    // 应用初始朝向（默认朝右）
    if (options?.initialFacing === 'left') {
      this.sprite.scale.x = -1;
    }

    // 指示器挂在 sprite 顶部（baseY = sprite 高度 + 小间距），黑色，尺寸放大
    if (options?.noIndicator) {
      this.indicator = null;
    } else {
      this.indicator = new IdleIndicator({ baseY: this.height + 0.22, size: 0.28, z: 0.1, color: 0x000000, xOffset: s.indicatorXOffset ?? 0 });
      this.group.add(this.indicator.mesh);
    }

    this.group.position.set(start.x, start.y + this.yOffset, 0.24);
  }

  get position(): THREE.Vector2 {
    return this.position2D.clone();
  }

  get isFalling(): boolean {
    return this.fallTimer >= 0;
  }

  showIndicator(): void {
    this.indicator?.setVisible(true);
  }

  hideIndicator(): void {
    this.indicator?.setVisible(false);
  }

  setPosition(position: THREE.Vector2): void {
    this.position2D.copy(position);
    this.path.length = 0;
    this.fallTimer = -1;
    this.spriteMat.opacity = 1;
    this.group.position.set(position.x, position.y + this.yOffset, 0.24);
    this.setFrame(0);
  }

  setPath(points: THREE.Vector2[], onComplete?: () => void): void {
    // 节流：若新 path 跟当前 path 的终点几乎相同（< 0.02 单位），不重置 path
    // 避免外部每帧调用 setPath 导致 walker 频繁重启动画 / 卡在原地
    if (
      points.length > 0
      && this.path.length > 0
      && !onComplete
      && this.completionCallback === null
    ) {
      const newEnd = points[points.length - 1];
      const curEnd = this.path[this.path.length - 1];
      if (Math.abs(newEnd.x - curEnd.x) < 0.02 && Math.abs(newEnd.y - curEnd.y) < 0.02) {
        return;
      }
    }
    this.path.length = 0;
    for (const point of points) {
      this.path.push(point.clone());
    }
    this.completionCallback = onComplete ?? null;
  }

  isWalking(): boolean {
    return this.path.length > 0;
  }

  /** 强制设置朝向（>0 朝右，<0 朝左，=0 不变）。仅在 sprite 静止时调用有意义，移动时会被覆盖。 */
  setFacing(sign: number): void {
    if (sign > 0) this.sprite.scale.x = 1;
    else if (sign < 0) this.sprite.scale.x = -1;
  }

  /** 透明度（用于剧情淡出 / 淡入） */
  setOpacity(opacity: number): void {
    this.spriteMat.opacity = Math.max(0, Math.min(1, opacity));
    this.sprite.visible = this.spriteMat.opacity > 0.01;
  }
  getOpacity(): number {
    return this.spriteMat.opacity;
  }

  /** 替换 sprite 纹理（用于角色变身：女男 → 老人）。同时按需调整高度/纵横比 */
  swapSheet(sheet: WalkerSheet): void {
    new THREE.TextureLoader().load(sheet.url, (texture) => {
      texture.repeat.set(1 / sheet.frameCount, 1);
      texture.offset.set(0, 0);
      this.spriteMat.map = texture;
      this.spriteMat.needsUpdate = true;
    });
    // 如果 height 不同，重建 sprite 几何体
    const newHeight = sheet.height ?? this.height;
    if (Math.abs(newHeight - this.height) > 0.01) {
      const aspect = sheet.frameW / sheet.frameH;
      this.sprite.geometry.dispose();
      this.sprite.geometry = new THREE.PlaneGeometry(newHeight * aspect, newHeight);
      this.sprite.position.y = newHeight / 2;
      this.spriteBaseY = newHeight / 2;
      this.height = newHeight;
    }
    this.frameCount = sheet.frameCount;
  }

  /** 额外缩放（用于变身后老人比例微调），1.0 = 不缩放。同时下移 sprite 让"脚"保持贴平台顶或更低 */
  setExtraScale(scaleMul: number, footYOffset: number = 0): void {
    const baseDir = this.sprite.scale.x >= 0 ? 1 : -1;
    this.sprite.scale.set(baseDir * scaleMul, scaleMul, 1);
    // 缩放后让 sprite 底部贴 walker 脚底；footYOffset < 0 让脚下沉
    this.spriteBaseY = (this.height * scaleMul) / 2 + footYOffset;
    this.sprite.position.y = this.spriteBaseY;
  }

  fall(onComplete?: () => void): void {
    if (this.isFalling) return;
    this.path.length = 0;
    this.completionCallback = null;
    this.fallStartY = this.position2D.y;
    this.fallTimer = 0;
    this.fallCallback = onComplete ?? null;
  }

  private setFrame(frame: number): void {
    this.currentFrame = frame;
    if (this.spriteMat.map) {
      this.spriteMat.map.offset.x = frame / this.frameCount;
      this.spriteMat.map.needsUpdate = true;
    }
  }

  update(deltaTime: number): void {
    this.elapsed += deltaTime;

    // 掉落动画优先
    if (this.isFalling) {
      this.fallTimer += deltaTime;
      const t = Math.min(this.fallTimer / this.FALL_DURATION, 1);
      const dropY = this.fallStartY - 10 * t * t;
      this.group.position.set(this.position2D.x, dropY + this.yOffset, 0.24);
      this.spriteMat.opacity = Math.max(0, 1 - t * 1.5);
      this.indicator?.setVisible(false);
      if (t >= 1) {
        this.fallTimer = -1;
        this.spriteMat.opacity = 1;
        const cb = this.fallCallback;
        this.fallCallback = null;
        cb?.();
      }
      return;
    }

    if (this.path.length > 0) {
      const target = this.path[0];
      const direction = target.clone().sub(this.position2D);
      const distance = direction.length();
      const effectiveSpeed = this.speed * this.speedBoost;

      if (distance <= effectiveSpeed * deltaTime) {
        this.position2D.copy(target);
        this.path.shift();
        if (this.path.length === 0 && this.completionCallback) {
          const callback = this.completionCallback;
          this.completionCallback = null;
          callback();
        }
      } else {
        direction.normalize().multiplyScalar(effectiveSpeed * deltaTime);
        this.position2D.add(direction);
      }

      // 朝向翻转
      const facing = Math.sign(direction.x || 1);
      this.sprite.scale.x = facing >= 0 ? 1 : -1;
    }

    if (this.isWalking()) {
      // 序列帧播放
      this.frameElapsed += deltaTime;
      if (this.frameElapsed >= 1 / FRAME_FPS) {
        this.frameElapsed -= 1 / FRAME_FPS;
        this.setFrame((this.currentFrame + 1) % this.frameCount);
      }
      // 轻微上下弹跳辅助走路感
      const bob = Math.abs(Math.sin(this.elapsed * FRAME_FPS)) * 0.04;
      this.sprite.position.y = this.spriteBaseY + bob;
      this.sprite.position.x = 0;
      this.sprite.rotation.z = 0;
    } else {
      // 站立：停在第0帧，轻微呼吸
      this.setFrame(0);
      this.frameElapsed = 0;
      const breathe = Math.sin(this.elapsed * 2.4) * 0.02;
      this.sprite.position.y = this.spriteBaseY + breathe;
      this.sprite.position.x = 0;
      this.sprite.rotation.z = 0;
    }

    this.group.position.set(this.position2D.x, this.position2D.y + this.yOffset, 0.24);
    this.indicator?.update(deltaTime);
  }
}
