import * as THREE from 'three';

export interface ShadowObjectData {
  id: string;
  railMinX: number;
  railMaxX: number;
  railY: number;
  railZ: number;
  initialT: number;
  initialRotationX: number;
  initialRotationY: number;
  shape?: 'box' | 'triangle';
}

function createTrianglePrismGeometry(width: number, height: number, depth: number): THREE.ExtrudeGeometry {
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2, -height / 2);
  shape.lineTo(width / 2, -height / 2);
  shape.lineTo(0, height / 2);
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: false,
    curveSegments: 1,
  });
  geometry.translate(0, 0, -depth / 2);
  return geometry;
}

function mergeProjectedParts(parts: { positions: number[]; indices: number[] }[]): THREE.BufferGeometry {
  const positions: number[] = [];
  const indices: number[] = [];
  let offset = 0;

  for (const part of parts) {
    positions.push(...part.positions);
    indices.push(...part.indices.map((index) => index + offset));
    offset += part.positions.length / 3;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}

export class ShadowObject {
  public readonly group = new THREE.Group();
  public readonly railLine: THREE.Line;
  public readonly shadowMaskMesh: THREE.Mesh;
  public readonly shadowVisualMesh: THREE.Mesh;
  private shadowVisualMaterial!: THREE.MeshBasicMaterial;
  public readonly pickables: THREE.Mesh[] = [];
  public lastProjMinY = 0;
  public lastProjMaxY = 0;
  public lastProjMinX = 0;
  public lastProjMaxX = 0;
  private lastProjectedTriangles: { x1: number; y1: number; x2: number; y2: number; x3: number; y3: number }[] = [];
  private readonly parts: THREE.Mesh[] = [];
  private readonly projectionParts: THREE.Mesh[] = [];
  private readonly projectionGroup = new THREE.Group();
  private readonly material = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#f1eadb'),
    roughness: 0.52,
    metalness: 0.02,
  });
  private currentT = 0;
  private readonly initialRotation = new THREE.Euler();

  constructor(public readonly data: ShadowObjectData) {
    this.group.name = data.id;
    this.group.position.set(0, data.railY, data.railZ);
    this.initialRotation.set(data.initialRotationX, data.initialRotationY, 0, 'XYZ');

    const displayScale = 0.25;  // 物体更小
    const projScale = 0.8;      // 缩小投影使旋转幅度感知与物体接近
    const shape = data.shape ?? 'box';
    const w = 4.5 * displayScale;
    const h = 1.2 * displayScale;
    const d = 1.2 * displayScale;
    const pw = 4.5 * projScale;
    const ph = 1.2 * projScale;
    const pd = 1.2 * projScale;
    const displayGeometry = shape === 'triangle'
      ? createTrianglePrismGeometry(w, h, d)
      : new THREE.BoxGeometry(w, h, d);
    const projectionGeometry = shape === 'triangle'
      ? createTrianglePrismGeometry(pw, ph, pd)
      : new THREE.BoxGeometry(pw, ph, pd);

    const block = new THREE.Mesh(displayGeometry, this.material);
    block.position.set(0, 0, 0);
    block.castShadow = false;
    block.receiveShadow = false;
    block.userData.shadowObject = this;
    this.parts.push(block);
    this.group.add(block);
    this.pickables.push(block);

    const projBlock = new THREE.Mesh(projectionGeometry);
    projBlock.position.set(0, 0, 0);
    projBlock.visible = false;
    this.projectionParts.push(projBlock);
    this.projectionGroup.add(projBlock);

    const railGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(data.railMinX, data.railY, data.railZ),
      new THREE.Vector3(data.railMaxX, data.railY, data.railZ),
    ]);
    const railMaterial = new THREE.LineDashedMaterial({
      color: new THREE.Color('#7c6be7'),
      transparent: true,
      opacity: 0.68,
      dashSize: 0.32,
      gapSize: 0.18,
    });
    this.railLine = new THREE.Line(railGeometry, railMaterial);
    this.railLine.computeLineDistances();

    this.shadowMaskMesh = new THREE.Mesh(
      new THREE.BufferGeometry(),
      new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, depthTest: false, depthWrite: false }),
    );

    this.shadowVisualMesh = new THREE.Mesh(
      new THREE.BufferGeometry(),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#1a1a1a'),
        transparent: true,
        opacity: 0.45,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    this.shadowVisualMaterial = this.shadowVisualMesh.material as THREE.MeshBasicMaterial;

    this.reset();
  }

  get normalizedT(): number {
    return this.currentT;
  }

  get anchorWorldPosition(): THREE.Vector3 {
    return this.group.localToWorld(new THREE.Vector3(0, 0.4, 0));
  }

  setShadowConnected(connected: boolean): void {
    this.shadowVisualMaterial.color.set(connected ? '#1b6e2a' : '#1a1a1a');
    this.shadowVisualMaterial.opacity = connected ? 0.55 : 0.45;
  }

  setSelected(selected: boolean): void {
    this.material.emissive = new THREE.Color(selected ? '#6d5eff' : '#000000');
    this.material.emissiveIntensity = selected ? 0.24 : 0;
  }

  rotate(deltaX: number, deltaY: number): void {
    this.group.rotation.x += deltaX;
    this.group.rotation.y -= deltaY;
  }

  private currentYOffset = 0;

  setRailT(t: number): void {
    this.currentT = THREE.MathUtils.clamp(t, 0, 1);
    this.group.position.x = THREE.MathUtils.lerp(this.data.railMinX, this.data.railMaxX, this.currentT);
    this.group.position.y = this.data.railY + this.currentYOffset;
    this.group.position.z = this.data.railZ;
  }

  moveY(delta: number): void {
    this.currentYOffset = THREE.MathUtils.clamp(this.currentYOffset + delta * 8, -3, 3);
    this.group.position.y = this.data.railY + this.currentYOffset;
  }

  reset(): void {
    this.group.rotation.copy(this.initialRotation);
    this.currentYOffset = 0;
    this.setRailT(this.data.initialT);
  }

  getYRangeAtX(x: number): { minY: number; maxY: number } | null {
    let resultMin: number | null = null;
    let resultMax: number | null = null;
    for (const tri of this.lastProjectedTriangles) {
      const triMinX = Math.min(tri.x1, tri.x2, tri.x3);
      const triMaxX = Math.max(tri.x1, tri.x2, tri.x3);
      if (x < triMinX || x > triMaxX) continue;

      const edges: [number, number, number, number][] = [
        [tri.x1, tri.y1, tri.x2, tri.y2],
        [tri.x2, tri.y2, tri.x3, tri.y3],
        [tri.x3, tri.y3, tri.x1, tri.y1],
      ];
      for (const [ax, ay, bx, by] of edges) {
        if ((ax <= x && bx >= x) || (bx <= x && ax >= x)) {
          let y: number;
          if (Math.abs(bx - ax) < 1e-9) {
            y = Math.max(ay, by);
          } else {
            const t = (x - ax) / (bx - ax);
            y = ay + t * (by - ay);
          }
          if (resultMin === null || y < resultMin) resultMin = y;
          if (resultMax === null || y > resultMax) resultMax = y;
        }
      }
    }
    if (resultMin === null || resultMax === null) return null;
    return { minY: resultMin, maxY: resultMax };
  }

  updateShadowProjection(lightDirection: THREE.Vector3, wallZ: number): void {
    this.projectionGroup.position.copy(this.group.position);
    this.projectionGroup.rotation.copy(this.group.rotation);
    this.projectionGroup.updateWorldMatrix(true, true);
    const projectedParts: { positions: number[]; indices: number[] }[] = [];

    for (const part of this.projectionParts) {
      part.updateWorldMatrix(true, false);
      const positionAttribute = part.geometry.getAttribute('position');
      const indexAttribute = part.geometry.getIndex();
      const positions: number[] = [];

      for (let index = 0; index < positionAttribute.count; index += 1) {
        const vertex = new THREE.Vector3().fromBufferAttribute(positionAttribute, index).applyMatrix4(part.matrixWorld);
        const distance = (wallZ - vertex.z) / lightDirection.z;
        const projected = vertex.clone().addScaledVector(lightDirection, distance);
        positions.push(projected.x, projected.y, wallZ + 0.002);
      }



      const indices = indexAttribute ? Array.from(indexAttribute.array) : [...Array(positionAttribute.count).keys()];
      projectedParts.push({ positions, indices });
    }

    const allXs: number[] = [];
    const allYs: number[] = [];
    this.lastProjectedTriangles = [];
    for (const part of projectedParts) {
      for (let i = 0; i < part.positions.length; i += 3) {
        allXs.push(part.positions[i]);
        allYs.push(part.positions[i + 1]);
      }
      for (let i = 0; i < part.indices.length; i += 3) {
        const i0 = part.indices[i], i1 = part.indices[i + 1], i2 = part.indices[i + 2];
        this.lastProjectedTriangles.push({
          x1: part.positions[i0 * 3], y1: part.positions[i0 * 3 + 1],
          x2: part.positions[i1 * 3], y2: part.positions[i1 * 3 + 1],
          x3: part.positions[i2 * 3], y3: part.positions[i2 * 3 + 1],
        });
      }
    }
    this.lastProjMinX = allXs.length > 0 ? Math.min(...allXs) : 0;
    this.lastProjMaxX = allXs.length > 0 ? Math.max(...allXs) : 0;
    this.lastProjMinY = allYs.length > 0 ? Math.min(...allYs) : 0;
    this.lastProjMaxY = allYs.length > 0 ? Math.max(...allYs) : 0;

    const nextGeometry = mergeProjectedParts(projectedParts);
    this.shadowMaskMesh.geometry.dispose();
    this.shadowMaskMesh.geometry = nextGeometry;

    this.shadowVisualMesh.geometry.dispose();
    this.shadowVisualMesh.geometry = nextGeometry.clone();
    this.shadowVisualMesh.position.z = 0.20;
  }
}
