import * as THREE from 'three';

function createWalkerTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 192;
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('无法创建 Walker 纹理。');
  }

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#ffffff';
  context.beginPath();
  context.arc(64, 38, 20, 0, Math.PI * 2);
  context.fill();

  context.fillRect(47, 52, 34, 74);
  context.fillRect(36, 64, 22, 56);
  context.fillRect(70, 64, 22, 56);
  context.fillRect(48, 122, 12, 48);
  context.fillRect(68, 122, 12, 48);
  context.fillRect(40, 164, 26, 10);
  context.fillRect(62, 164, 26, 10);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export class Walker {
  public readonly group = new THREE.Group();
  private readonly sprite: THREE.Mesh;
  private readonly path: THREE.Vector2[] = [];
  private completionCallback: (() => void) | null = null;
  private elapsed = 0;
  private readonly speed = 2.8;
  private readonly height = 1.55;
  private readonly position2D = new THREE.Vector2();

  constructor(start: THREE.Vector2) {
    this.position2D.copy(start);
    this.sprite = new THREE.Mesh(
      new THREE.PlaneGeometry(1.05, this.height),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#000000'),
        opacity: 1.0,
        alphaMap: createWalkerTexture(),
        transparent: true,
        depthWrite: false,
      }),
    );
    this.sprite.position.set(0, this.height / 2, 0);
    this.group.add(this.sprite);
    this.group.position.set(start.x, start.y, 0.24);
  }

  get position(): THREE.Vector2 {
    return this.position2D.clone();
  }

  setPosition(position: THREE.Vector2): void {
    this.position2D.copy(position);
    this.path.length = 0;
    this.group.position.set(position.x, position.y, 0.24);
  }

  setPath(points: THREE.Vector2[], onComplete?: () => void): void {
    this.path.length = 0;
    for (const point of points) {
      this.path.push(point.clone());
    }
    this.completionCallback = onComplete ?? null;
  }

  isWalking(): boolean {
    return this.path.length > 0;
  }

  update(deltaTime: number): void {
    this.elapsed += deltaTime;

    if (this.path.length > 0) {
      const target = this.path[0];
      const direction = target.clone().sub(this.position2D);
      const distance = direction.length();

      if (distance <= this.speed * deltaTime) {
        this.position2D.copy(target);
        this.path.shift();
        if (this.path.length === 0 && this.completionCallback) {
          const callback = this.completionCallback;
          this.completionCallback = null;
          callback();
        }
      } else {
        direction.normalize().multiplyScalar(this.speed * deltaTime);
        this.position2D.add(direction);
      }

      const facing = Math.sign(direction.x || 1);
      this.sprite.scale.x = facing >= 0 ? 1 : -1;
    }

    const bob = this.isWalking() ? Math.sin(this.elapsed * 11) * 0.08 : Math.sin(this.elapsed * 2.4) * 0.025;
    this.sprite.position.y = this.height / 2 + bob;
    this.group.position.set(this.position2D.x, this.position2D.y, 0.24);
  }
}
