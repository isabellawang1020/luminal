import * as THREE from 'three';

/**
 * 悬浮在物体/角色头顶的 idle 菱形指示器。
 * 使用方：将 mesh 加入父 group，调用 update(dt) 驱动动画，
 * 通过 setVisible() 控制显隐。
 */
export class IdleIndicator {
  public readonly mesh: THREE.Mesh;
  private time = 0;
  /** 菱形中心相对父 group 的基础 Y 偏移（浮动在此基础上叠加） */
  private readonly baseY: number;
  /** 浮动振幅（世界单位） */
  private readonly amplitude: number;

  /** 浮动方向：1 = 向上，-1 = 向下 */
  private readonly bobDir: number;

  constructor(options: {
    /** 菱形对角线长度（默认 0.18） */
    size?: number;
    /** 菱形中心相对父 group 原点的 Y（默认 0.6） */
    baseY?: number;
    /** 菱形中心相对父 group 原点的 X（默认 0） */
    xOffset?: number;
    /** 颜色（默认白色） */
    color?: THREE.ColorRepresentation;
    /** 浮动振幅（默认 0.06） */
    amplitude?: number;
    /** 渲染层 Z（默认 0.35，确保在物体前面） */
    z?: number;
    /** 尖角朝下（默认 false，朝上） */
    pointDown?: boolean;
  } = {}) {
    const size = options.size ?? 0.18;
    this.baseY = options.baseY ?? 0.6;
    this.amplitude = options.amplitude ?? 0.06;
    this.bobDir = options.pointDown ? -1 : 1;
    const color = options.color ?? 0xffffff;
    const z = options.z ?? 0.35;
    const xOffset = options.xOffset ?? 0;

    // 正方形旋转 45° 作为菱形，pointDown 时额外旋转 90° 使尖角朝下
    const geo = new THREE.PlaneGeometry(size, size);
    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(geo, mat);
    this.mesh.rotation.z = options.pointDown ? -Math.PI / 4 : Math.PI / 4;
    this.mesh.position.set(xOffset, this.baseY, z);
    this.mesh.visible = false;
    this.mesh.renderOrder = 10;
  }

  setVisible(visible: boolean): void {
    this.mesh.visible = visible;
    if (visible) {
      this.time = 0;
    }
  }

  get visible(): boolean {
    return this.mesh.visible;
  }

  update(deltaTime: number): void {
    if (!this.mesh.visible) return;
    this.time += deltaTime;
    // 浮动：pointDown 时向下弹跳
    const bob = Math.sin(this.time * 3.2) * this.amplitude * this.bobDir;
    this.mesh.position.y = this.baseY + bob;
    // 轻微脉冲透明度
    const mat = this.mesh.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.7 + Math.sin(this.time * 3.2) * 0.22;
  }
}
