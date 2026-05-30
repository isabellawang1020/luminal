import * as THREE from 'three';
import { audioManager } from '@/audio/SfxManager';

export interface ButtonData {
  /** 按钮中心位置 */
  x: number;
  y: number;
  /** 圆形触发半径（默认 0.5，仅在未设 triggerHalfWidth/triggerHalfHeight 时生效） */
  triggerRadius?: number;
  /** X 方向半宽（设置后变成矩形判定，独立于 Y） */
  triggerHalfWidth?: number;
  /** Y 方向半高（设置后变成矩形判定，独立于 X） */
  triggerHalfHeight?: number;
  /** 显示半径（圆形外观；默认 0.18） */
  visualRadius?: number;
  /**
   * 触发模式：
   * - 'once'（默认）：一旦激活就锁定，离开也保持绿色
   * - 'continuous'：仅当有角色在区域内时才绿色，离开自动变回橙色
   * - 'toggle'：每次有角色从外部进入触发范围，state 在 'A' / 'B' 之间翻转
   *           不像 once/continuous 用 activated 表示绿/橙，toggle 用 state 区分
   */
  mode?: 'once' | 'continuous' | 'toggle';
  /** toggle 模式的初始状态，默认 'A' */
  initialToggleState?: 'A' | 'B';
  /** toggle 模式：state A 的图片 URL（可选，传入后替代默认黄色棒） */
  imageA?: string;
  /** toggle 模式：state B 的图片 URL */
  imageB?: string;
  /** toggle 模式：图片宽度（世界坐标单位，默认 0.8） */
  imageWidth?: number;
  /** toggle 模式：图片高度（世界坐标单位，默认 0.5） */
  imageHeight?: number;
}

/**
 * 关卡内可被角色碰触触发的圆形按钮。
 * - idle 状态：橙色，呼吸闪烁
 * - activated 状态：绿色稳定亮
 */
export class Button {
  public readonly group = new THREE.Group();
  private readonly innerMesh: THREE.Mesh;
  private readonly outerMesh: THREE.Mesh;
  private readonly innerMat: THREE.MeshBasicMaterial;
  private readonly outerMat: THREE.MeshBasicMaterial;
  private elapsed = 0;
  private activated = false;
  private activatedCallback: (() => void) | null = null;
  private deactivatedCallback: (() => void) | null = null;
  /** continuous 模式下，每帧重新累积"是否有角色在范围内" */
  private touchedThisFrame = false;
  /** toggle 模式下，记录每个角色上一帧是否在范围内（key 用 walker 引用的 weak id） */
  private wasInsideMap = new WeakMap<object, boolean>();
  /** toggle 模式下的当前状态 */
  private toggleState: 'A' | 'B' = 'A';
  private toggleCallbacks: Array<(state: 'A' | 'B') => void> = [];
  /** toggle 模式：扳手左右两半（一根棒，只有指向方向那半亮黄，另一半暗灰） */
  private toggleHalfLeft: THREE.Mesh | null = null;
  private toggleHalfRight: THREE.Mesh | null = null;
  private toggleHalfLeftMat: THREE.MeshBasicMaterial | null = null;
  private toggleHalfRightMat: THREE.MeshBasicMaterial | null = null;
  /** toggle 模式：图片（如果配置了 imageA/imageB） */
  private toggleImageA: THREE.Sprite | null = null;
  private toggleImageB: THREE.Sprite | null = null;
  private toggleImageAMat: THREE.SpriteMaterial | null = null;
  private toggleImageBMat: THREE.SpriteMaterial | null = null;

  // 颜色
  private static readonly IDLE_COLOR = new THREE.Color('#ff9933');     // 橙色
  private static readonly ACTIVE_COLOR = new THREE.Color('#42d966');   // 绿色

  constructor(public readonly data: ButtonData) {
    const visualRadius = data.visualRadius ?? 0.18;

    // 外圈光晕
    this.outerMat = new THREE.MeshBasicMaterial({
      color: Button.IDLE_COLOR,
      transparent: true,
      opacity: 0.35,
      depthTest: false,
    });
    this.outerMesh = new THREE.Mesh(
      new THREE.CircleGeometry(visualRadius * 2.2, 32),
      this.outerMat,
    );
    this.outerMesh.renderOrder = 4;
    this.group.add(this.outerMesh);

    // 内圈实心
    this.innerMat = new THREE.MeshBasicMaterial({
      color: Button.IDLE_COLOR,
      transparent: true,
      opacity: 0.95,
      depthTest: false,
    });
    this.innerMesh = new THREE.Mesh(
      new THREE.CircleGeometry(visualRadius, 32),
      this.innerMat,
    );
    this.innerMesh.renderOrder = 5;
    this.group.add(this.innerMesh);

    this.group.position.set(data.x, data.y, 0.2);

    // toggle 模式：构建"扳手"指示器（两半矩形拼成一根棒，只有指向方向那半亮）
    if (data.mode === 'toggle') {
      // 隐藏默认的圆形 inner/outer，只显示扳手棒
      this.innerMesh.visible = false;
      this.outerMesh.visible = false;
      this.toggleState = data.initialToggleState ?? 'A';

      // 如果配置了图片，使用图片替代黄色棒
      if (data.imageA || data.imageB) {
        const imgWidth = data.imageWidth ?? 0.8;
        const imgHeight = data.imageHeight ?? 0.5;

        // 加载 imageA
        if (data.imageA) {
          this.toggleImageAMat = new THREE.SpriteMaterial({
            transparent: true,
            depthTest: false,
            opacity: 0.95,
          });
          new THREE.TextureLoader().load(
            data.imageA,
            (texture) => {
              if (this.toggleImageAMat) {
                this.toggleImageAMat.map = texture;
                this.toggleImageAMat.needsUpdate = true;
              }
            },
          );
          this.toggleImageA = new THREE.Sprite(this.toggleImageAMat);
          this.toggleImageA.scale.set(imgWidth, imgHeight, 1);
          this.toggleImageA.position.set(0, 0, 0.02);
          this.toggleImageA.renderOrder = 0;
          this.group.add(this.toggleImageA);
        }

        // 加载 imageB
        if (data.imageB) {
          this.toggleImageBMat = new THREE.SpriteMaterial({
            transparent: true,
            depthTest: false,
            opacity: 0.95,
          });
          new THREE.TextureLoader().load(
            data.imageB,
            (texture) => {
              if (this.toggleImageBMat) {
                this.toggleImageBMat.map = texture;
                this.toggleImageBMat.needsUpdate = true;
              }
            },
          );
          this.toggleImageB = new THREE.Sprite(this.toggleImageBMat);
          this.toggleImageB.scale.set(imgWidth, imgHeight, 1);
          this.toggleImageB.position.set(0, 0, 0.02);
          this.toggleImageB.renderOrder = 0;
          this.group.add(this.toggleImageB);
        }

        // 应用初始状态
        this.applyToggleVisual();
      } else {
        // 默认黄色棒
        const v = data.visualRadius ?? 0.18;
        const halfWidth = v * 1.8;
        const halfHeight = v * 1.1;
        const yellow = new THREE.Color('#ffd83a');
        const dim = new THREE.Color('#665a30');

        // 左半
        this.toggleHalfLeftMat = new THREE.MeshBasicMaterial({
          color: dim, transparent: true, opacity: 0.95, depthTest: false,
        });
        this.toggleHalfLeft = new THREE.Mesh(
          new THREE.PlaneGeometry(halfWidth, halfHeight),
          this.toggleHalfLeftMat,
        );
        this.toggleHalfLeft.position.set(-halfWidth / 2, 0, 0.02);
        this.toggleHalfLeft.renderOrder = 6;
        this.group.add(this.toggleHalfLeft);

        // 右半
        this.toggleHalfRightMat = new THREE.MeshBasicMaterial({
          color: yellow, transparent: true, opacity: 0.95, depthTest: false,
        });
        this.toggleHalfRight = new THREE.Mesh(
          new THREE.PlaneGeometry(halfWidth, halfHeight),
          this.toggleHalfRightMat,
        );
        this.toggleHalfRight.position.set(halfWidth / 2, 0, 0.02);
        this.toggleHalfRight.renderOrder = 6;
        this.group.add(this.toggleHalfRight);

        // 应用初始状态
        this.applyToggleVisual();
      }
    }
  }

  /** 根据 toggleState 更新扳手视觉（state A → 显示 imageA / 右半亮；state B → 显示 imageB / 左半亮） */
  private applyToggleVisual(): void {
    // 图片模式
    if (this.toggleImageA || this.toggleImageB) {
      if (this.toggleState === 'A') {
        if (this.toggleImageA) this.toggleImageA.visible = true;
        if (this.toggleImageB) this.toggleImageB.visible = false;
      } else {
        if (this.toggleImageA) this.toggleImageA.visible = false;
        if (this.toggleImageB) this.toggleImageB.visible = true;
      }
      return;
    }

    // 默认黄色棒模式
    if (!this.toggleHalfLeftMat || !this.toggleHalfRightMat) return;
    const yellow = new THREE.Color('#ffd83a');
    const dim = new THREE.Color('#665a30');
    if (this.toggleState === 'A') {
      this.toggleHalfRightMat.color.copy(yellow);
      this.toggleHalfLeftMat.color.copy(dim);
    } else {
      this.toggleHalfLeftMat.color.copy(yellow);
      this.toggleHalfRightMat.color.copy(dim);
    }
  }

  /** 设置 toggle 模式的翻转回调（可多次注册，触发时全部依次调用） */
  onToggle(callback: (state: 'A' | 'B') => void): void {
    this.toggleCallbacks.push(callback);
  }

  /** toggle 模式：当前状态 */
  get currentToggleState(): 'A' | 'B' {
    return this.toggleState;
  }

  /** 设置按钮"被激活"时的回调（首次进入或 continuous 模式每次进入） */
  onActivated(callback: () => void): void {
    this.activatedCallback = callback;
  }

  /** 设置按钮"被取消激活"时的回调（continuous 模式下从绿变回橙） */
  onDeactivated(callback: () => void): void {
    this.deactivatedCallback = callback;
  }

  /**
   * 检查某位置是否触碰按钮。
   * once 模式：第一次进入就 latch
   * continuous 模式：每帧累积，update() 里统一处理
   * toggle 模式：边沿触发（从外进入翻转 state）
   */
  checkTrigger(walkerX: number, walkerY: number, walkerRef?: object): void {
    const dx = walkerX - this.data.x;
    const dy = walkerY - this.data.y;
    // 优先用矩形判定（如果配了 triggerHalfWidth / triggerHalfHeight），否则用圆形
    let inside: boolean;
    if (this.data.triggerHalfWidth !== undefined || this.data.triggerHalfHeight !== undefined) {
      const hw = this.data.triggerHalfWidth ?? this.data.triggerRadius ?? 0.5;
      const hh = this.data.triggerHalfHeight ?? this.data.triggerRadius ?? 0.5;
      inside = Math.abs(dx) <= hw && Math.abs(dy) <= hh;
    } else {
      const r = this.data.triggerRadius ?? 0.5;
      inside = Math.hypot(dx, dy) <= r;
    }

    const mode = this.data.mode ?? 'once';
    if (mode === 'once') {
      if (inside && !this.activated) this.setActivated(true);
    } else if (mode === 'continuous') {
      // continuous：累积"本帧有角色在范围内"
      if (inside) this.touchedThisFrame = true;
    } else if (mode === 'toggle' && walkerRef) {
      // toggle：边沿触发（false → true 翻转一次，true → false 不触发）
      const wasInside = this.wasInsideMap.get(walkerRef) ?? false;
      if (inside && !wasInside) {
        this.toggleState = this.toggleState === 'A' ? 'B' : 'A';
        this.applyToggleVisual();
        for (const cb of this.toggleCallbacks) cb(this.toggleState);
        
        // Play switch sound effect
        audioManager.play('switch');
      }
      this.wasInsideMap.set(walkerRef, inside);
    }
  }

  private setActivated(active: boolean): void {
    if (this.activated === active) return;
    this.activated = active;
    
    // Play switch sound effect
    audioManager.play('switch');
    
    const color = active ? Button.ACTIVE_COLOR : Button.IDLE_COLOR;
    this.innerMat.color.copy(color);
    this.outerMat.color.copy(color);
    if (active) {
      this.innerMat.opacity = 1;
      this.outerMat.opacity = 0.45;
      this.activatedCallback?.();
    } else {
      this.deactivatedCallback?.();
    }
  }

  /** 重置（关卡 reset 时调用） */
  reset(): void {
    this.activated = false;
    this.touchedThisFrame = false;
    this.innerMat.color.copy(Button.IDLE_COLOR);
    this.outerMat.color.copy(Button.IDLE_COLOR);
    this.elapsed = 0;
    if (this.data.mode === 'toggle') {
      this.toggleState = this.data.initialToggleState ?? 'A';
      this.applyToggleVisual();
      this.wasInsideMap = new WeakMap();
    }
  }

  get isActivated(): boolean {
    return this.activated;
  }

  update(deltaTime: number): void {
    this.elapsed += deltaTime;

    // continuous 模式：根据本帧累积的"是否有角色在范围内"切换状态
    if ((this.data.mode ?? 'once') === 'continuous') {
      this.setActivated(this.touchedThisFrame);
      this.touchedThisFrame = false; // 下一帧重新累积
    }

    // toggle 模式
    if (this.data.mode === 'toggle') {
      // 图片模式：恒定 opacity 1.0，无呼吸动画
      if (this.toggleImageAMat || this.toggleImageBMat) {
        if (this.toggleImageAMat) this.toggleImageAMat.opacity = 1.0;
        if (this.toggleImageBMat) this.toggleImageBMat.opacity = 1.0;
        return;
      }

      // 默认黄色棒模式：轻微呼吸
      const pulse = (Math.sin(this.elapsed * 3) + 1) / 2;
      const opacity = 0.85 + pulse * 0.15;
      if (this.toggleState === 'A') {
        if (this.toggleHalfRightMat) this.toggleHalfRightMat.opacity = opacity;
        if (this.toggleHalfLeftMat) this.toggleHalfLeftMat.opacity = 0.6;
      } else {
        if (this.toggleHalfLeftMat) this.toggleHalfLeftMat.opacity = opacity;
        if (this.toggleHalfRightMat) this.toggleHalfRightMat.opacity = 0.6;
      }
      return;
    }

    if (!this.activated) {
      // idle 呼吸闪烁
      const pulse = (Math.sin(this.elapsed * 4) + 1) / 2; // 0~1
      this.innerMat.opacity = 0.75 + pulse * 0.25; // 0.75~1
      this.outerMat.opacity = 0.25 + pulse * 0.25; // 0.25~0.5
      const scale = 1 + pulse * 0.1; // 1~1.1
      this.outerMesh.scale.set(scale, scale, 1);
    } else {
      // 激活态：绿色呼吸闪烁（稍微温和一些）
      const pulse = (Math.sin(this.elapsed * 3) + 1) / 2;
      this.innerMat.opacity = 0.9 + pulse * 0.1;
      this.outerMat.opacity = 0.35 + pulse * 0.15;
      const scale = 1 + pulse * 0.05;
      this.outerMesh.scale.set(scale, scale, 1);
    }
  }

  dispose(): void {
    this.innerMesh.geometry.dispose();
    this.outerMesh.geometry.dispose();
    this.innerMat.dispose();
    this.outerMat.dispose();

    // 清理 toggle 黄色棒资源
    if (this.toggleHalfLeft) {
      this.toggleHalfLeft.geometry.dispose();
      this.toggleHalfLeftMat?.dispose();
    }
    if (this.toggleHalfRight) {
      this.toggleHalfRight.geometry.dispose();
      this.toggleHalfRightMat?.dispose();
    }

    // 清理 toggle 图片资源
    if (this.toggleImageA) {
      this.toggleImageAMat?.map?.dispose();
      this.toggleImageAMat?.dispose();
    }
    if (this.toggleImageB) {
      this.toggleImageBMat?.map?.dispose();
      this.toggleImageBMat?.dispose();
    }
  }
}
