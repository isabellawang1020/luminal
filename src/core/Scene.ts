import * as THREE from 'three';
import type { WallBounds } from '@/utils/GridMapper';

function createWallTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 768;
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('无法创建墙面纹理。');
  }

  const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#f0e6ce');
  gradient.addColorStop(1, '#ddd1b7');
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  for (let index = 0; index < 2400; index += 1) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const alpha = Math.random() * 0.08;
    const size = Math.random() * 2.4 + 0.4;
    context.fillStyle = `rgba(90, 68, 43, ${alpha.toFixed(3)})`;
    context.fillRect(x, y, size, size);
  }

  context.strokeStyle = 'rgba(113, 86, 58, 0.15)';
  context.lineWidth = 12;
  context.strokeRect(12, 12, canvas.width - 24, canvas.height - 24);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export class SceneManager {
  public readonly renderer: THREE.WebGLRenderer;
  public readonly scene = new THREE.Scene();
  public readonly camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  public readonly wallBounds: WallBounds = {
    minX: -8,
    maxX: 8,
    minY: 0.8,
    maxY: 9.8,
    z: 0,
  };
  public readonly wallMesh: THREE.Mesh;
  private readonly wallFrame: THREE.Mesh;
  private readonly sill: THREE.Mesh;
  public readonly wallPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  private readonly leftMask: HTMLDivElement;
  private readonly rightMask: HTMLDivElement;
  private readonly raycaster = new THREE.Raycaster();
  private readonly pointer = new THREE.Vector2();
  constructor(private readonly container: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = false;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.container.append(this.renderer.domElement);

    this.camera.position.set(0, 3.67, 24);
    this.camera.lookAt(0, 4.5, 3);

    this.scene.add(new THREE.AmbientLight(0xf7efe2, 1.5));

    const keyLight = new THREE.DirectionalLight(0xfff3df, 2.5);
    keyLight.position.set(0, 1.5, 18);
    keyLight.target.position.set(0, 7, 0);
    keyLight.castShadow = false;
    this.scene.add(keyLight);
    this.scene.add(keyLight.target);

    const fillLight = new THREE.PointLight(0xdccdb8, 18, 35, 2);
    fillLight.position.set(-6, 2, 8);
    this.scene.add(fillLight);

    const wallMaterial = new THREE.MeshStandardMaterial({
      map: createWallTexture(),
      roughness: 0.95,
      metalness: 0,
    });

    this.wallMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(this.wallBounds.maxX - this.wallBounds.minX, this.wallBounds.maxY - this.wallBounds.minY),
      wallMaterial,
    );
    this.wallMesh.position.set(0, (this.wallBounds.minY + this.wallBounds.maxY) / 2, this.wallBounds.z);
    this.wallMesh.receiveShadow = true;
    this.scene.add(this.wallMesh);

    this.wallFrame = new THREE.Mesh(
      new THREE.BoxGeometry(16.6, 9.6, 0.36),
      new THREE.MeshStandardMaterial({ color: new THREE.Color('#7f6a54'), roughness: 0.8, metalness: 0.04 }),
    );
    this.wallFrame.position.set(0, 5.3, -0.22);
    this.scene.add(this.wallFrame);

    this.sill = new THREE.Mesh(
      new THREE.BoxGeometry(17.8, 0.85, 4.2),
      new THREE.MeshStandardMaterial({ color: new THREE.Color('#d0c3b2'), roughness: 0.94 }),
    );
    this.sill.position.set(0, 0.05, 1.15);
    this.scene.add(this.sill);

    const maskStyle = { position: 'absolute', top: '0', height: '100%', background: '#006994', display: 'none', zIndex: '3', pointerEvents: 'none' } as const;

    this.leftMask = document.createElement('div');
    Object.assign(this.leftMask.style, { ...maskStyle, left: '0', width: '0' });
    this.container.append(this.leftMask);

    this.rightMask = document.createElement('div');
    Object.assign(this.rightMask.style, { ...maskStyle, right: '0', width: '0' });
    this.container.append(this.rightMask);

    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  private readonly handleResize = (): void => {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    if (this.leftMask.style.display !== 'none') {
      this.updateMaskPositions();
    }
  };

  worldToScreen(position: THREE.Vector3): { x: number; y: number; visible: boolean } {
    const projected = position.clone().project(this.camera);
    const x = (projected.x * 0.5 + 0.5) * this.container.clientWidth;
    const y = (-projected.y * 0.5 + 0.5) * this.container.clientHeight;
    const visible = projected.z > -1 && projected.z < 1;
    return { x, y, visible };
  }

  intersectWall(clientX: number, clientY: number): THREE.Vector3 | null {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    const point = new THREE.Vector3();
    const hit = this.raycaster.ray.intersectPlane(this.wallPlane, point);
    if (!hit) {
      return null;
    }
    return point;
  }

  raycastObjects(clientX: number, clientY: number, objects: THREE.Object3D[]): THREE.Intersection[] {
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);
    return this.raycaster.intersectObjects(objects, true);
  }

  removeWallBackground(): void {
    this.scene.remove(this.wallMesh, this.wallFrame, this.sill);
  }

  setClipping(enabled: boolean): void {
    if (enabled) {
      this.updateMaskPositions();
      this.leftMask.style.display = 'block';
      this.rightMask.style.display = 'block';
    } else {
      this.leftMask.style.display = 'none';
      this.rightMask.style.display = 'none';
    }
  }

  private updateMaskPositions(): void {
    const leftEdge = this.worldToScreen(new THREE.Vector3(this.wallBounds.minX, 5, this.wallBounds.z));
    const rightEdge = this.worldToScreen(new THREE.Vector3(this.wallBounds.maxX, 5, this.wallBounds.z));
    const containerWidth = this.container.clientWidth;
    this.leftMask.style.width = `${Math.max(0, leftEdge.x)}px`;
    this.rightMask.style.width = `${Math.max(0, containerWidth - rightEdge.x)}px`;
  }

  render(): void {
    this.renderer.render(this.scene, this.camera);
  }
}
