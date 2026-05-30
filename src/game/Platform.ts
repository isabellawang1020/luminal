import * as THREE from 'three';

export interface PlatformData {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  /** 透明度，默认 1.0 */
  opacity?: number;
  /** 颜色，默认 '#625048' */
  color?: string;
}

function createRoundedRectShape(width: number, height: number, radius: number): THREE.Shape {
  const x = -width / 2;
  const y = -height / 2;
  const shape = new THREE.Shape();
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);
  return shape;
}

export class Platform {
  public readonly mesh: THREE.Mesh;

  constructor(public readonly data: PlatformData) {
    const geometry = new THREE.ExtrudeGeometry(createRoundedRectShape(data.width, data.height, 0.14), {
      depth: 0.35,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelThickness: 0.08,
      bevelSize: 0.08,
      curveSegments: 8,
    });
    geometry.center();

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(data.color ?? '#625048'),
      roughness: 0.88,
      metalness: 0.06,
      depthTest: false,
      transparent: true,
      opacity: data.opacity ?? 1.0,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(data.x, data.y, 0.18);
    this.mesh.castShadow = false;
    this.mesh.receiveShadow = true;
    this.mesh.renderOrder = 0; // 平台：最下层
  }
}
