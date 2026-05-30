import * as THREE from 'three';

export interface GateData {
  x: number;
  y: number;
  /** 贴图路径，有值时用图片 Sprite 替换程序化几何 */
  textureUrl?: string;
  /** 贴图显示尺寸（世界单位高度，默认 1.8） */
  displayHeight?: number;
}

export class Gate {
  public readonly group = new THREE.Group();
  private readonly glow: THREE.Mesh;
  private readonly halo: THREE.Mesh;
  private readonly haloMaterial: THREE.MeshBasicMaterial;
  private spriteMat?: THREE.MeshBasicMaterial;
  private elapsed = 0;

  constructor(public readonly data: GateData) {
    const displayHeight = data.displayHeight ?? 1.8;

    if (data.textureUrl) {
      // 贴图模式：用 PlaneGeometry + PNG 贴图
      this.spriteMat = new THREE.MeshBasicMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      new THREE.TextureLoader().load(data.textureUrl, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        this.spriteMat!.map = tex;
        this.spriteMat!.needsUpdate = true;
      });
      const sprite = new THREE.Mesh(
        new THREE.PlaneGeometry(displayHeight, displayHeight), // 贴图 1:1
        this.spriteMat,
      );
      sprite.position.z = 0.12;
      sprite.renderOrder = -1;
      this.group.add(sprite);
    } else {
      // 程序化几何模式（原有逻辑）
      const frame = new THREE.Mesh(
        new THREE.BoxGeometry(0.95, 1.5, 0.18),
        new THREE.MeshStandardMaterial({
          color: new THREE.Color('#8a5c1f'),
          emissive: new THREE.Color('#4d2e08'),
          roughness: 0.45,
          metalness: 0.2,
        }),
      );
      const panel = new THREE.Mesh(
        new THREE.PlaneGeometry(0.62, 1.16),
        new THREE.MeshBasicMaterial({ color: new THREE.Color('#f4c760'), transparent: true, opacity: 0.9 }),
      );
      panel.position.z = 0.11;
      this.group.add(frame, panel);
    }

    // 占位（保持字段存在，update 不报错）
    this.glow = new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshBasicMaterial());
    this.haloMaterial = new THREE.MeshBasicMaterial();
    this.halo = new THREE.Mesh(new THREE.BufferGeometry(), this.haloMaterial);

    this.group.position.set(data.x, data.y + displayHeight / 2, 0.16);
  }

  getWalkTarget(): THREE.Vector2 {
    return new THREE.Vector2(this.data.x, this.data.y);
  }

  /** 门的右边缘 X（贴图宽度 = displayHeight，中心在 data.x） */
  get rightEdgeX(): number {
    const half = (this.data.displayHeight ?? 1.8) / 2;
    return this.data.x + half;
  }

  /** 是否点击在门范围内（X 在门左右边缘之间，Y 在门上下之间） */
  isClickedOn(point: THREE.Vector2): boolean {
    const half = (this.data.displayHeight ?? 1.8) / 2;
    const top = this.data.y + (this.data.displayHeight ?? 1.8);
    return (
      point.x >= this.data.x - half &&
      point.x <= this.data.x + half &&
      point.y >= this.data.y - 0.3 &&
      point.y <= top + 0.3
    );
  }

  isReached(position: THREE.Vector2): boolean {
    if (!this.group.visible) return false; // 隐藏时不算到达
    // X 在门半宽内 + Y 在门贴图范围内（角色站平台上时 Y 跟门中心 Y 可能有较大差，所以 Y 容差按 displayHeight/2）
    const t = this.getWalkTarget();
    const halfH = (this.data.displayHeight ?? 1.8) / 2;
    const dx = Math.abs(position.x - t.x);
    const dy = Math.abs(position.y - t.y);
    return dx < 0.55 && dy < halfH;
  }

  /** 隐藏门（关卡可在初始时调用） */
  setHidden(hidden: boolean): void {
    this.group.visible = !hidden;
  }

  get isVisible(): boolean {
    return this.group.visible;
  }

  update(deltaTime: number, completed: boolean): void {
    this.elapsed += deltaTime;
    const pulse = 1 + Math.sin(this.elapsed * 3.1) * 0.05;
    this.glow.scale.setScalar(completed ? 1.18 + Math.sin(this.elapsed * 12) * 0.06 : pulse);
    this.haloMaterial.opacity = completed ? 0.45 : 0.12 + Math.sin(this.elapsed * 2.5) * 0.03;
    if (this.spriteMat) {
      this.spriteMat.opacity = completed ? 1 : 0.88 + Math.sin(this.elapsed * 2.5) * 0.08;
    }
  }
}
