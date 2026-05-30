import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


// 共享 GLTFLoader 实例（含 Draco 解码器）
const gltfLoader = new GLTFLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
gltfLoader.setDRACOLoader(dracoLoader);

export interface MoveLimit {
  up: number;
  down: number;
  left: number;
  right: number;
}

export interface ShadowObjectData {
  id: string;
  railMinX: number;
  railMaxX: number;
  railY: number;
  railZ: number;
  initialT: number;
  initialRotationX: number;
  initialRotationY: number;
  initialRotationZ?: number;
  initialYOffset?: number;         // 初始 Y 轴偏移（在 railY 基础上增减，默认 0）
  wrapperExtraRotation?: { x?: number; y?: number; z?: number }; // wrapper 额外旋转，用于调整初始朝向而不影响旋转轴
  shape?: 'box' | 'triangle' | 'bottle';
  moveLimit?: MoveLimit;
  modelUrl?: string;           // 可选 GLB 模型路径，加载后替换程序化几何体
  modelScale?: number;         // GLB 模型显示缩放（目标高度，世界单位）
  projectionScale?: number;    // GLB 投影独立缩放，不影响显示大小（默认等于 modelScale）
  textureUrl?: string;         // 可选贴图路径，加载后替换 GLB 材质
  textureRepeat?: number;      // 贴图 UV 重复次数，>1 图案更小更密（默认 1）
  useGlbProjection?: boolean;  // 使用 GLB 真实形状做投影（默认 false 用程序化几何体）
  shadowYScale?: number;       // 每步上下移动时影子Y位移倍数（默认 1，物体显示位移不变）
  shadowXScale?: number;       // 每步左右移动时影子X位移倍数（默认 1，物体显示位移不变）
  /** 禁用移动面板（仅允许旋转） */
  disableMove?: boolean;
  /** 禁用旋转面板（仅允许移动） */
  disableRotate?: boolean;
  /** 初始隐藏（物体+影子都不显示，由机关触发后通过 setHidden(false) 显示） */
  initiallyHidden?: boolean;
}

// 奶瓶：上细下宽的旋转体，竖放投影窄，旋转90°后投影变宽扁
function createBottleGeometry(width: number, height: number, depth: number): THREE.BufferGeometry {
  // 用 ExtrudeGeometry 做奶瓶轮廓：下半圆柱宽体 + 上细颈
  const hw = width / 2;
  const hh = height / 2;
  const neckW = hw * 0.35;  // 颈部宽度
  const neckH = hh * 0.35;  // 颈部占高比例
  const bodyH = hh - neckH;

  const outline = new THREE.Shape();
  // 从底部左侧顺时针画瓶身轮廓
  outline.moveTo(-hw, -hh);
  outline.lineTo(hw, -hh);
  // 右侧瓶身到肩部
  outline.lineTo(hw, -hh + bodyH * 1.6);
  // 右肩收缩到颈部
  outline.quadraticCurveTo(hw * 0.6, -hh + bodyH * 1.85, neckW, -hh + bodyH * 2.0);
  // 颈部右侧到顶
  outline.lineTo(neckW, hh);
  // 顶部
  outline.lineTo(-neckW, hh);
  // 颈部左侧向下
  outline.lineTo(-neckW, -hh + bodyH * 2.0);
  // 左肩展开到瓶身
  outline.quadraticCurveTo(-hw * 0.6, -hh + bodyH * 1.85, -hw, -hh + bodyH * 1.6);
  outline.lineTo(-hw, -hh);

  return new THREE.ExtrudeGeometry(outline, {
    depth,
    bevelEnabled: false,
    curveSegments: 4,
  });
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
  let totalPos = 0;
  let totalIdx = 0;
  for (const part of parts) {
    totalPos += part.positions.length;
    totalIdx += part.indices.length;
  }

  const positions = new Float32Array(totalPos);
  const indices = new Uint32Array(totalIdx);
  let posOff = 0;
  let idxOff = 0;
  let vertOff = 0;

  for (const part of parts) {
    for (let i = 0; i < part.positions.length; i++) {
      positions[posOff++] = part.positions[i];
    }
    for (let i = 0; i < part.indices.length; i++) {
      indices[idxOff++] = part.indices[i] + vertOff;
    }
    vertOff += part.positions.length / 3;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(new THREE.Uint32BufferAttribute(indices, 1));
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
  // GLB 投影：mesh 相对于 group 的局部矩阵（预计算，避免运行时矩阵链遍历）
  private glbLocalMatrices: THREE.Matrix4[] = [];
  // GLB 加载完成后的回调
  public onGlbReady?: () => void;
  private readonly projectionGroup = new THREE.Group();
  private readonly material = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#f1eadb'),
    roughness: 0.52,
    metalness: 0.02,
    depthTest: false,
    transparent: true,
    opacity: 1.0,
  });
  private currentT = 0;
  private readonly initialRotation = new THREE.Euler();
  private ySteps = 0;
  private xSteps = 0;
  private readonly initialTSteps = 0;
  // GLB 加载后投影几何体已烘焙 wrapper 旋转，projectionGroup 不再 copy rotation

  // 描边外发光
  private readonly outlineMeshes: THREE.Mesh[] = [];
  private outlineRoot: THREE.Group | null = null;
  private outlineTime = 0;
  private isSelected = false;

  private isConnected = false;
  private connectedTime = 0;
  private readonly outlineMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color('#ffffff'),
    side: THREE.BackSide,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    depthTest: false,
  });

  // GLB 热更新缩放所需状态
  private glbWrapper: THREE.Group | null = null;
  /** 1 / min(bakedSize) —— 不含 modelScale 的比例基数，热更新时乘以新 modelScale 即可 */
  private glbBaseAutoScale = 1;
  /** 当前 modelScale 运行时值（可热修改） */
  public runtimeModelScale: number;
  /** 当前 projectionScale 运行时值（可热修改） */
  public runtimeProjScale: number;


  constructor(public readonly data: ShadowObjectData) {
    this.group.name = data.id;
    this.group.position.set(0, data.railY, data.railZ);
    this.initialRotation.set(data.initialRotationX, data.initialRotationY, data.initialRotationZ ?? 0, 'XYZ');
    this.runtimeModelScale = data.modelScale ?? 0.3;
    this.runtimeProjScale = data.projectionScale ?? this.runtimeModelScale;

    const displayScale = 0.25;  // 物体更小
    const projScale = 0.8;      // 缩小投影使旋转幅度感知与物体接近
    const shape = data.shape ?? 'box';
    const w = 4.5 * displayScale;
    const h = 1.2 * displayScale;
    const d = 1.2 * displayScale;
    const pw = 4.5 * projScale;
    const ph = 1.2 * projScale;
    const pd = 1.2 * projScale;

    const makeDisplayGeometry = (sw: number, sh: number, sd: number): THREE.BufferGeometry => {
      if (shape === 'triangle') return createTrianglePrismGeometry(sw, sh, sd);
      if (shape === 'bottle') return createBottleGeometry(sw, sh * 2.5, sd);
      return new THREE.BoxGeometry(sw, sh, sd);
    };
    const makeProjGeometry = (sw: number, sh: number, sd: number): THREE.BufferGeometry => {
      if (shape === 'triangle') return createTrianglePrismGeometry(sw, sh, sd);
      // 奶瓶投影：用细长 box，Z 轴深度 = 高度的 2.5 倍，旋转后投影宽度变化明显
      if (shape === 'bottle') return new THREE.BoxGeometry(sw * 0.4, sh, sd * 2.5);
      return new THREE.BoxGeometry(sw, sh, sd);
    };
    const displayGeometry = makeDisplayGeometry(w, h, d);
    const projectionGeometry = makeProjGeometry(pw, ph, pd);

    const block = new THREE.Mesh(displayGeometry, this.material);
    block.position.set(0, 0, 0);
    block.castShadow = false;
    block.receiveShadow = false;
    block.renderOrder = 3; // 物体（程序化）：最上层
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
        opacity: 0.25,
        side: THREE.DoubleSide,
        depthWrite: false,
        depthTest: false,
      }),
    );
    this.shadowVisualMesh.renderOrder = 1; // 影子：中层
    this.shadowVisualMaterial = this.shadowVisualMesh.material as THREE.MeshBasicMaterial;



    this.reset();

    // 若配置了 modelUrl，异步加载 GLB 替换显示用几何体
    if (data.modelUrl) {
      gltfLoader.load(data.modelUrl, (gltf) => {


        // 移除原有程序化 mesh
        for (const part of this.parts) {
          this.group.remove(part);
        }
        this.parts.length = 0;
        this.pickables.length = 0;

        // 关键：clone scene，避免多个 ShadowObject 共用同一个 gltf.scene
        // （Three.js 一个 Object3D 只能有一个 parent，多实例会互相剥离）
        const sceneClone = gltf.scene.clone(true);

        // 用 wrapper 包裹，在 wrapper 上修正旋转和缩放，不动 sceneClone 内部
        const wrapper = new THREE.Group();
        wrapper.add(sceneClone);
        sceneClone.updateMatrixWorld(true);

        // 计算朝向修正旋转矩阵（wrapper 旋转 + extra）
        const ex = data.wrapperExtraRotation;
        const orientEuler = new THREE.Euler(
          0 + (ex?.x ?? 0),
          -Math.PI + (ex?.y ?? 0),
          Math.PI / 2 + (ex?.z ?? 0),
          'XYZ',
        );
        const orientMat = new THREE.Matrix4().makeRotationFromEuler(orientEuler);

        // 将朝向矩阵烘焙进 gltf.scene 的所有子几何体
        // 这样 wrapper 只负责缩放，group 的 XYZ 轴保持纯净
        sceneClone.traverse((child) => {
          if (child instanceof THREE.Mesh && child.geometry) {
            child.geometry = child.geometry.clone();
            child.geometry.applyMatrix4(orientMat);
          }
        });
        // 重置 gltf.scene 自身的旋转（已烘焙进几何体）
        sceneClone.rotation.set(0, 0, 0);
        sceneClone.updateMatrixWorld(true);

        // 量烘焙后的尺寸，计算缩放
        const bakedBox = new THREE.Box3().setFromObject(sceneClone);
        const bakedSize = bakedBox.getSize(new THREE.Vector3());
        // 取最小边作为高度基准（模型躺平后 Y 是厚度），保存基数供热更新使用
        this.glbBaseAutoScale = 1 / Math.min(bakedSize.x, bakedSize.y, bakedSize.z);
        const autoScale = this.runtimeModelScale * this.glbBaseAutoScale;
        wrapper.scale.setScalar(autoScale);
        wrapper.rotation.set(0, 0, 0); // wrapper 不再旋转
        wrapper.updateMatrixWorld(true);

        // 居中
        const scaledBox = new THREE.Box3().setFromObject(wrapper);
        const center = scaledBox.getCenter(new THREE.Vector3());
        wrapper.position.sub(center);

        // 保存 wrapper 引用，供热更新缩放使用
        this.glbWrapper = wrapper;

        const applyTexture = (tex: THREE.Texture | null) => {
          sceneClone.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.userData.shadowObject = this;
              child.renderOrder = 3; // 物体（GLB）：最上层
              // clone 材质以确保 depthTest 修改不影响其他共享实例
              const baseMat = tex
                ? new THREE.MeshStandardMaterial({ map: tex, roughness: 0.75, metalness: 0, depthTest: false, transparent: true, opacity: 1.0 })
                : (child.material as THREE.Material).clone();
              baseMat.depthTest = false;
              (baseMat as THREE.MeshStandardMaterial).transparent = true;
              (baseMat as THREE.MeshStandardMaterial).opacity = 1.0;
              child.material = baseMat;
              this.pickables.push(child);
            }
          });

          // 先把 wrapper 加入 group，确保 GLB mesh 进入场景图
          this.group.add(wrapper);

          // 描边：克隆整个 gltf.scene 作为描边容器，挂在 wrapper 同级
          // 这样描边与物体完全独立，renderOrder 可以自由控制
          this.outlineMeshes.length = 0;
          this.outlineRoot = new THREE.Group();
          const outlineRoot = this.outlineRoot;
          outlineRoot.visible = false;
          outlineRoot.renderOrder = 2; // 描边 group：次上层

          // 复制 wrapper 的缩放和位置（居中偏移）到 outlineRoot
          outlineRoot.scale.copy(wrapper.scale);
          outlineRoot.position.copy(wrapper.position);

          sceneClone.traverse((child) => {
            if (child instanceof THREE.Mesh && child.geometry) {
              // 用子 mesh 的世界矩阵（相对 gltf.scene）还原局部矩阵
              child.updateWorldMatrix(true, false);
              const outlineMesh = new THREE.Mesh(child.geometry, this.outlineMat);
              outlineMesh.renderOrder = 2; // 描边 mesh：次上层
              // 把 child 相对 gltf.scene 的矩阵复制过来
              outlineMesh.matrix.copy(child.matrixWorld);
              outlineMesh.matrix.premultiply(new THREE.Matrix4().copy(sceneClone.matrixWorld).invert());
              outlineMesh.matrixAutoUpdate = false;
              outlineMesh.scale.multiplyScalar(1.06);
              outlineRoot.add(outlineMesh);
              this.outlineMeshes.push(outlineMesh);
            }
          });

          this.group.add(outlineRoot);

          // GLB 异步加载完成时，若物体已被选中，补触发描边显示
          if (this.isSelected) {
            outlineRoot.visible = true;
            this.outlineTime = 0;
          }

          // 用 GLB mesh 替换程序化投影几何体
          if (data.useGlbProjection) {
            for (const part of this.projectionParts) {
              this.projectionGroup.remove(part);
            }
            this.projectionParts.length = 0;
            this.glbLocalMatrices.length = 0;

            // wrapper 已加入 group，先更新 group 下所有矩阵
            this.group.updateMatrixWorld(true);
            const groupWorldInv = new THREE.Matrix4().copy(this.group.matrixWorld).invert();

            // 投影独立缩放：projectionScale / modelScale 的比值作为额外缩放
            const projScaleRatio = this.runtimeProjScale / this.runtimeModelScale;
            const projScaleMat = new THREE.Matrix4().makeScale(projScaleRatio, projScaleRatio, projScaleRatio);

            sceneClone.traverse((child) => {
              if (child instanceof THREE.Mesh && child.geometry) {
                child.updateWorldMatrix(true, false);
                const localMat = new THREE.Matrix4().copy(groupWorldInv).multiply(child.matrixWorld);
                localMat.premultiply(projScaleMat);
                this.projectionParts.push(child);
                this.glbLocalMatrices.push(localMat);
              }
            });
          }

          // GLB 加载完成，通知外层刷新阴影
          this.onGlbReady?.();
        };

        if (data.textureUrl) {
          new THREE.TextureLoader().load(data.textureUrl, (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.wrapS = THREE.RepeatWrapping;
            tex.wrapT = THREE.RepeatWrapping;
            tex.repeat.set(data.textureRepeat ?? 1, data.textureRepeat ?? 1);
            applyTexture(tex);
          }, undefined, () => applyTexture(null));
        } else {
          applyTexture(null);
        }

      }, undefined, (err) => {
        console.error('[GLB] 加载失败', err);
      });
    }
  }

  get normalizedT(): number {
    return this.currentT;
  }

  /** 返回当前可直接写进关卡配置的姿态快照 */
  get currentPose(): {
    initialT: number;
    initialRotationX: number;
    initialRotationY: number;
    initialRotationZ: number;
    railYOffset: number;
    modelScale: number;
    projectionScale: number;
  } {
    return {
      initialT: this.currentT,
      initialRotationX: this.group.rotation.x,
      initialRotationY: this.group.rotation.y,
      initialRotationZ: this.group.rotation.z,
      railYOffset: this.currentYOffset,
      modelScale: this.runtimeModelScale,
      projectionScale: this.runtimeProjScale,
    };
  }

  /**
   * 热更新模型显示缩放。
   * 修改 wrapper.scale，不重载 GLB，不影响旋转轴。
   * 调用后需由外部触发 refreshShadows()。
   */
  setModelScale(newScale: number): void {
    this.runtimeModelScale = newScale;
    if (!this.glbWrapper) return;
    this.glbWrapper.scale.setScalar(newScale * this.glbBaseAutoScale);
    // modelScale 变化时同步重算投影矩阵（projScaleRatio 分母变了）
    this._rebakeProjectionMatrices();
  }

  /**
   * 热更新投影缩放（不影响显示大小）。
   * 调用后需由外部触发 refreshShadows()。
   */
  setProjScale(newScale: number): void {
    this.runtimeProjScale = newScale;
    this._rebakeProjectionMatrices();
  }

  /** 重新计算 glbLocalMatrices（projScaleRatio 变化时调用） */
  private _rebakeProjectionMatrices(): void {
    if (!this.glbWrapper || !this.data.useGlbProjection || this.projectionParts.length === 0) return;

    this.glbWrapper.updateMatrixWorld(true);
    this.group.updateMatrixWorld(true);
    const groupWorldInv = new THREE.Matrix4().copy(this.group.matrixWorld).invert();
    const projScaleRatio = this.runtimeProjScale / this.runtimeModelScale;
    const projScaleMat = new THREE.Matrix4().makeScale(projScaleRatio, projScaleRatio, projScaleRatio);

    for (let pi = 0; pi < this.projectionParts.length; pi++) {
      const child = this.projectionParts[pi];
      child.updateWorldMatrix(true, false);
      const localMat = new THREE.Matrix4().copy(groupWorldInv).multiply(child.matrixWorld);
      localMat.premultiply(projScaleMat);
      this.glbLocalMatrices[pi] = localMat;
    }
  }

  get anchorWorldPosition(): THREE.Vector3 {
    return this.group.localToWorld(new THREE.Vector3(0, 0.4, 0));
  }

  setShadowConnected(connected: boolean): void {
    this.isConnected = connected;
    if (connected) {
      this.shadowVisualMaterial.color.set('#66a09c');
      this.shadowVisualMaterial.opacity = 0.5;
    } else {
      this.shadowVisualMaterial.color.set('#1a1a1a');
      this.shadowVisualMaterial.opacity = 0.25;
    }
  }

  hideOutline(): void {
    if (this.outlineRoot) this.outlineRoot.visible = false;
  }

  /** 隐藏/显示物体本体 + 影子 mask + 影子视觉。隐藏时影子不会写入 mask，桥接判定也跟着失效 */
  setHidden(hidden: boolean): void {
    this.group.visible = !hidden;
    this.shadowMaskMesh.visible = !hidden;
    this.shadowVisualMesh.visible = !hidden;
  }

  setSelected(selected: boolean): void {
    this.isSelected = selected;
    if (this.outlineRoot) {
      this.outlineRoot.visible = selected;
    }
    if (selected) this.outlineTime = 0;
  }

  update(deltaTime: number): void {
    // 描边脉冲
    if (this.outlineRoot?.visible) {
      this.outlineTime += deltaTime;
      const pulse = 0.25 + Math.sin(this.outlineTime * 3.0) * 0.1;
      this.outlineMat.opacity = pulse;
    }

    // 影子连通时：颜色固定为 #66a09c（青绿色）
    if (this.isConnected) {
      this.shadowVisualMaterial.color.set('#66a09c');
      this.shadowVisualMaterial.opacity = 0.5;
    }
  }

  rotate(deltaX: number, deltaY: number, deltaZ = 0): void {
    this.group.rotation.x += deltaX;
    this.group.rotation.y -= deltaY;
    this.group.rotation.z += deltaZ;
  }

  private currentYOffset = 0;

  canMove(direction: 'up' | 'down' | 'left' | 'right'): boolean {
    const lim = this.data.moveLimit;
    if (!lim) return true;
    switch (direction) {
      case 'up':    return this.ySteps < lim.up;
      case 'down':  return this.ySteps > -lim.down;
      case 'left':  return this.xSteps > -lim.left;
      case 'right': return this.xSteps < lim.right;
    }
  }

  setRailT(t: number, direction?: 'left' | 'right'): void {
    const prev = this.currentT;
    this.currentT = THREE.MathUtils.clamp(t, 0, 1);
    this.group.position.x = THREE.MathUtils.lerp(this.data.railMinX, this.data.railMaxX, this.currentT);
    this.group.position.y = this.data.railY + this.currentYOffset;
    this.group.position.z = this.data.railZ;
    if (direction && this.currentT !== prev) {
      if (direction === 'left') this.xSteps -= 1;
      else this.xSteps += 1;
    }
  }

  setYOffset(offset: number): void {
    this.currentYOffset = offset;
    this.group.position.y = this.data.railY + this.currentYOffset;
  }

  moveY(delta: number): void {
    const direction = delta > 0 ? 'up' : 'down';
    if (!this.canMove(direction)) return;
    this.currentYOffset = THREE.MathUtils.clamp(this.currentYOffset + delta * 2, -6, 6);
    this.group.position.y = this.data.railY + this.currentYOffset;
    if (direction === 'up') this.ySteps += 1;
    else this.ySteps -= 1;
  }

  reset(): void {
    this.group.rotation.copy(this.initialRotation);
    this.currentYOffset = this.data.initialYOffset ?? 0;
    this.ySteps = 0;
    this.xSteps = 0;
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

  // 手动遍历节点链，计算世界矩阵（不触发 Three.js 的递归 updateWorldMatrix）
  private computeWorldMatrix(obj: THREE.Object3D): THREE.Matrix4 {
    const mats: THREE.Matrix4[] = [];
    let cur: THREE.Object3D | null = obj;
    while (cur !== null) {
      cur.updateMatrix();
      mats.unshift(cur.matrix.clone());
      cur = cur.parent;
    }
    const result = new THREE.Matrix4();
    for (const m of mats) result.multiply(m);
    return result;
  }

  updateShadowProjection(lightDirection: THREE.Vector3, wallZ: number): void {
    const projectedParts: { positions: number[]; indices: number[] }[] = [];

    // 若配置了 shadowYScale，临时把 group.position.y 的偏移部分放大，投影后还原
    const shadowYScale = this.data.shadowYScale ?? 1;
    const realY = this.group.position.y;
    if (shadowYScale !== 1) {
      const scaledY = this.data.railY + this.currentYOffset * shadowYScale;
      this.group.position.y = scaledY;
    }

    // 若配置了 shadowXScale，临时把 group.position.x 相对轨道中心的偏移放大，投影后还原
    // 以 railCenter 为基准是为了让"物体在轨道中点时影子也在中点"，避免初始位置跑偏
    const shadowXScale = this.data.shadowXScale ?? 1;
    const realX = this.group.position.x;
    if (shadowXScale !== 1) {
      const railCenter = (this.data.railMinX + this.data.railMaxX) / 2;
      const xOffset = realX - railCenter;
      this.group.position.x = railCenter + xOffset * shadowXScale;
    }

    // GLB 未加载完时（glbLocalMatrices 为空），回退到程序化几何体路径
    const useGlb = this.data.useGlbProjection && this.glbLocalMatrices.length > 0;

    // 计算 group 的世界矩阵（手动遍历，不触发递归）
    const groupWorldMatrix = useGlb
      ? this.computeWorldMatrix(this.group)
      : (() => {
          this.projectionGroup.position.copy(this.group.position);
          this.projectionGroup.rotation.copy(this.group.rotation);
          this.projectionGroup.scale.copy(this.group.scale);
          this.projectionGroup.updateMatrix();
          return this.projectionGroup.matrix.clone();
        })();

    for (let pi = 0; pi < this.projectionParts.length; pi++) {
      const part = this.projectionParts[pi];
      let worldMat: THREE.Matrix4;
      if (useGlb) {
        const localMat = this.glbLocalMatrices[pi];
        if (!localMat) continue;
        worldMat = new THREE.Matrix4().copy(groupWorldMatrix).multiply(localMat);
      } else {
        // projectionGroup 已同步 group 变换，part 在 projectionGroup 下
        part.updateMatrix();
        worldMat = new THREE.Matrix4().copy(groupWorldMatrix).multiply(part.matrix);
      }
      const positionAttribute = part.geometry.getAttribute('position');
      const indexAttribute = part.geometry.getIndex();
      const positions: number[] = [];

      for (let index = 0; index < positionAttribute.count; index += 1) {
        const vertex = new THREE.Vector3().fromBufferAttribute(positionAttribute, index).applyMatrix4(worldMat);
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
    // 用 reduce 替代 Math.min/max(...arr)，避免大数组时调用栈溢出
    if (allXs.length > 0) {
      let minX = allXs[0], maxX = allXs[0], minY = allYs[0], maxY = allYs[0];
      for (let i = 1; i < allXs.length; i++) {
        if (allXs[i] < minX) minX = allXs[i];
        if (allXs[i] > maxX) maxX = allXs[i];
        if (allYs[i] < minY) minY = allYs[i];
        if (allYs[i] > maxY) maxY = allYs[i];
      }
      this.lastProjMinX = minX;
      this.lastProjMaxX = maxX;
      this.lastProjMinY = minY;
      this.lastProjMaxY = maxY;
    } else {
      this.lastProjMinX = 0; this.lastProjMaxX = 0;
      this.lastProjMinY = 0; this.lastProjMaxY = 0;
    }

    const nextGeometry = mergeProjectedParts(projectedParts);
    this.shadowMaskMesh.geometry.dispose();
    this.shadowMaskMesh.geometry = nextGeometry;

    this.shadowVisualMesh.geometry.dispose();
    this.shadowVisualMesh.geometry = nextGeometry.clone();
    this.shadowVisualMesh.position.z = 0.25;

    // 还原 group.position.y / x（投影计算完毕）
    if (shadowYScale !== 1) {
      this.group.position.y = realY;
    }
    if (shadowXScale !== 1) {
      this.group.position.x = realX;
    }
  }
}
