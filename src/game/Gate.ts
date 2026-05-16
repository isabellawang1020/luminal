import * as THREE from 'three';

export interface GateData {
  x: number;
  y: number;
}

export class Gate {
  public readonly group = new THREE.Group();
  private readonly glow: THREE.Mesh;
  private readonly halo: THREE.Mesh;
  private readonly haloMaterial: THREE.MeshBasicMaterial;
  private elapsed = 0;

  constructor(public readonly data: GateData) {
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

    this.glow = new THREE.Mesh(
      new THREE.PlaneGeometry(1.2, 1.9),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#ffd78d'),
        transparent: true,
        opacity: 0.28,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    this.glow.position.z = 0.06;

    this.haloMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#ffde8d'),
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    this.halo = new THREE.Mesh(
      new THREE.RingGeometry(0.55, 0.82, 48),
      this.haloMaterial,
    );
    this.halo.rotation.x = 0;
    this.halo.position.set(0, 0.08, 0.09);

    this.group.add(this.glow, frame, panel, this.halo);
    this.group.position.set(data.x, data.y + 0.55, 0.16);
  }

  getWalkTarget(): THREE.Vector2 {
    return new THREE.Vector2(this.data.x, this.data.y);
  }

  isReached(position: THREE.Vector2): boolean {
    return position.distanceTo(this.getWalkTarget()) < 0.55;
  }

  update(deltaTime: number, completed: boolean): void {
    this.elapsed += deltaTime;
    const pulse = 1 + Math.sin(this.elapsed * 3.1) * 0.05;
    this.glow.scale.setScalar(completed ? 1.18 + Math.sin(this.elapsed * 12) * 0.06 : pulse);
    this.haloMaterial.opacity = completed ? 0.55 : 0.18 + Math.sin(this.elapsed * 2.5) * 0.04;
  }
}
