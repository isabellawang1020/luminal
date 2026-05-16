import * as THREE from 'three';
import { SceneManager } from '@/core/Scene';
import { ShadowMask } from '@/core/ShadowMask';
import { Gate, type GateData } from '@/game/Gate';
import { Platform, type PlatformData } from '@/game/Platform';
import { ShadowObject, type ShadowObjectData } from '@/game/ShadowObject';
import { Walker } from '@/game/Walker';
import { HUD } from '@/ui/HUD';
import { findNearestWalkable, findPath } from '@/utils/Pathfinding';

export interface LevelConfig {
  name: string;
  platforms: PlatformData[];
  gate: GateData;
  walkerStart: { x: number; y: number };
  objects: ShadowObjectData[];
  hintArea: { x: number; y: number; width: number; height: number };
}

export class Level {
  public readonly rootGroup = new THREE.Group();
  private readonly shadowDirection = new THREE.Vector3(0, 3.35, -10).normalize();
  private readonly shadowMask: ShadowMask;
  private readonly platforms: Platform[] = [];
  private readonly shadowObjects: ShadowObject[] = [];
  private readonly gate: Gate;
  private readonly walker: Walker;
  private readonly hintMesh: THREE.Mesh;
  private selectedIndex = -1;
  private paused = false;
  private completed = false;
  private shadowDirty = true;
  private hintTimer = 0;

  constructor(
    private readonly sceneManager: SceneManager,
    private readonly hud: HUD,
    private readonly config: LevelConfig,
    private readonly onComplete?: () => void,
  ) {
    this.rootGroup.name = `${config.name}-root`;
    this.sceneManager.scene.add(this.rootGroup);
    this.shadowMask = new ShadowMask(sceneManager.renderer, sceneManager.wallBounds);

    for (const platformData of config.platforms) {
      const platform = new Platform(platformData);
      this.platforms.push(platform);
      this.rootGroup.add(platform.mesh);
    }
    this.shadowMask.buildPlatformMask(this.platforms);

    this.gate = new Gate(config.gate);
    this.rootGroup.add(this.gate.group);

    for (const objectData of config.objects) {
      const shadowObject = new ShadowObject(objectData);
      this.shadowObjects.push(shadowObject);
      this.rootGroup.add(shadowObject.railLine, shadowObject.group, shadowObject.shadowVisualMesh);
      this.shadowMask.addObject(shadowObject);
    }

    this.walker = new Walker(new THREE.Vector2(config.walkerStart.x, config.walkerStart.y));
    this.rootGroup.add(this.walker.group);

    this.hintMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(config.hintArea.width, config.hintArea.height),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#fff0ab'),
        transparent: true,
        opacity: 0,
        depthWrite: false,
      }),
    );
    this.hintMesh.position.set(config.hintArea.x, config.hintArea.y, 0.12);
    this.rootGroup.add(this.hintMesh);

    this.refreshShadows();
    if (this.shadowObjects.length > 0) {
      const leftmostIndex = this.shadowObjects.reduce((bestIdx, obj, idx, arr) =>
        obj.group.position.x < arr[bestIdx].group.position.x ? idx : bestIdx, 0);
      this.setSelectedObject(leftmostIndex);
    }
  }

  get pickables(): THREE.Object3D[] {
    return this.shadowObjects.flatMap((object) => object.pickables);
  }

  get selectedObject(): ShadowObject | null {
    return this.selectedIndex >= 0 ? this.shadowObjects[this.selectedIndex] : null;
  }

  get selectedAnchor(): THREE.Vector3 | null {
    return this.selectedObject ? this.selectedObject.anchorWorldPosition : null;
  }

  setSelectedObject(index: number | null): void {
    this.shadowObjects.forEach((object) => object.setSelected(false));
    if (index === null || index < 0 || index >= this.shadowObjects.length) {
      this.selectedIndex = -1;
      return;
    }
    this.selectedIndex = index;
    this.shadowObjects[this.selectedIndex].setSelected(true);
  }

  selectLeftmostObject(): void {
    if (this.shadowObjects.length === 0) {
      return;
    }
    const leftmostIndex = this.shadowObjects.reduce((bestIdx, obj, idx, arr) =>
      obj.group.position.x < arr[bestIdx].group.position.x ? idx : bestIdx, 0);
    this.setSelectedObject(leftmostIndex);
  }

  cycleSelection(): void {
    if (this.shadowObjects.length === 0) {
      return;
    }
    const nextIndex = this.selectedIndex < 0 ? 0 : (this.selectedIndex + 1) % this.shadowObjects.length;
    this.setSelectedObject(nextIndex);
  }

  selectObjectFromMesh(mesh: THREE.Object3D): void {
    const owner = mesh.userData.shadowObject as ShadowObject | undefined;
    if (!owner) {
      return;
    }
    const index = this.shadowObjects.indexOf(owner);
    if (index >= 0) {
      this.setSelectedObject(index);
    }
  }

  rotateSelected(deltaX: number, deltaY: number): void {
    if (this.paused || this.completed || !this.selectedObject) {
      return;
    }
    this.selectedObject.rotate(deltaX, deltaY);
    this.refreshShadows();
  }

  setSelectedRail(value: number): void {
    if (this.paused || this.completed || !this.selectedObject) {
      return;
    }
    this.selectedObject.setRailT(value);
    this.refreshShadows();
  }

  moveSelectedY(delta: number): void {
    if (this.paused || this.completed || !this.selectedObject) {
      return;
    }
    this.selectedObject.moveY(delta);
    this.refreshShadows();
  }

  resetSelectedObject(): void {
    if (this.selectedObject) {
      this.selectedObject.reset();
      this.refreshShadows();
    }
  }

  finalizeAdjustment(): void {
    this.refreshShadows();
  }

  attemptMove(point: THREE.Vector3): boolean {
    if (this.paused || this.completed) {
      return false;
    }

    const snappedY = this.snapToNearestSurface(point.x, point.y);
    const snappedPoint = new THREE.Vector3(point.x, snappedY, point.z);

    const startCell = this.shadowMask.mapper.worldToCell(this.walker.position.x, this.walker.position.y);
    const targetCellRaw = this.shadowMask.mapper.worldToCell(snappedPoint.x, snappedPoint.y);
    if (!startCell || !targetCellRaw) {
      this.hud.showToast('无法到达');
      return false;
    }

    const targetCell = findNearestWalkable(
      this.shadowMask.mask,
      this.shadowMask.width,
      this.shadowMask.height,
      targetCellRaw,
      10,
    );

    if (!targetCell) {
      this.hud.showToast('无法到达');
      return false;
    }

    const path = findPath(this.shadowMask.mask, this.shadowMask.width, this.shadowMask.height, startCell, targetCell);
    if (!path) {
      this.hud.showToast('无法到达');
      return false;
    }

    const worldPath = path.map((cell) => {
      const world = this.shadowMask.mapper.cellToWorld(cell);
      return new THREE.Vector2(world.x, world.y);
    });

    this.walker.setPath(worldPath, () => {
      if (this.gate.isReached(this.walker.position)) {
        this.completeLevel();
      }
    });
    return true;
  }

  private snapToNearestSurface(x: number, _y: number): number {
    const candidates: number[] = [];

    for (const plat of this.config.platforms) {
      const platLeft = plat.x - plat.width / 2;
      const platRight = plat.x + plat.width / 2;
      if (x >= platLeft && x <= platRight) {
        candidates.push(plat.y + plat.height / 2);
      }
    }

    if (this.bridgeConnected) {
      for (const obj of this.shadowObjects) {
        if (x >= obj.lastProjMinX && x <= obj.lastProjMaxX) {
          candidates.push(obj.lastProjMaxY);
        }
      }
    }

    if (candidates.length === 0) {
      for (const plat of this.config.platforms) {
        candidates.push(plat.y + plat.height / 2);
      }
    }

    let best = candidates[0];
    let bestDist = Math.abs(_y - best);
    for (let i = 1; i < candidates.length; i += 1) {
      const dist = Math.abs(_y - candidates[i]);
      if (dist < bestDist) {
        best = candidates[i];
        bestDist = dist;
      }
    }
    return best;
  }

  showHint(): void {
    this.hud.showHintMessage();
    this.hintTimer = 1.2;
  }

  togglePause(): void {
    if (this.completed) {
      this.restart();
      return;
    }

    if (!this.paused) {
      this.paused = true;
      this.hud.setPaused(true);
      return;
    }

    this.restart();
  }

  resume(): void {
    this.paused = false;
    this.hud.setPaused(false);
  }

  setVisible(visible: boolean): void {
    this.walker.group.visible = visible;
  }

  dispose(): void {
    this.sceneManager.scene.remove(this.rootGroup);
    for (const object of this.shadowObjects) {
      object.shadowMaskMesh.removeFromParent();
    }
  }

  restart(): void {
    this.completed = false;
    this.paused = false;
    this.hud.setPaused(false);
    this.hud.hideComplete();
    this.setVisible(true);
    for (const object of this.shadowObjects) {
      object.reset();
    }
    this.walker.setPosition(new THREE.Vector2(this.config.walkerStart.x, this.config.walkerStart.y));
    this.refreshShadows();
  }

  update(deltaTime: number): void {
    if (!this.paused) {
      this.walker.update(deltaTime);
      this.gate.update(deltaTime, this.completed);
    }

    if (this.shadowDirty) {
      this.shadowMask.refreshVisual();
      this.shadowDirty = false;
    }

    if (this.hintTimer > 0) {
      this.hintTimer = Math.max(0, this.hintTimer - deltaTime);
    }

    const hintMaterial = this.hintMesh.material;
    if (hintMaterial instanceof THREE.MeshBasicMaterial) {
      hintMaterial.opacity = this.hintTimer > 0 ? 0.28 + Math.sin(performance.now() * 0.012) * 0.1 : 0;
    }
  }

  private refreshShadows(): void {
    for (const object of this.shadowObjects) {
      object.updateShadowProjection(this.shadowDirection, this.sceneManager.wallBounds.z);
    }
    this.shadowMask.captureMask();
    this.shadowDirty = false;
    this.checkBridgeConnected();
  }

  private checkBridgeConnected(): void {
    const platTop = this.config.platforms[0].y + this.config.platforms[0].height / 2;
    const tolerance = 0.15;
    const minCoverageRatio = 0.8;
    const sampleCount = 20;

    const gapLeftX = this.config.platforms[0].x + this.config.platforms[0].width / 2;
    const gapRightX = this.config.platforms[1].x - this.config.platforms[1].width / 2;

    let coveredSamples = 0;
    for (let i = 0; i < sampleCount; i += 1) {
      const x = gapLeftX + (i + 0.5) / sampleCount * (gapRightX - gapLeftX);
      let sampleCovered = false;
      for (const obj of this.shadowObjects) {
        const range = obj.getYRangeAtX(x);
        if (range !== null && range.minY <= platTop + tolerance && range.maxY >= platTop - tolerance) {
          sampleCovered = true;
          break;
        }
      }
      if (sampleCovered) coveredSamples += 1;
    }

    const connected = coveredSamples / sampleCount >= minCoverageRatio;
    this.setBridgeHighlight(connected);
  }

  private bridgeConnected = false;

  getDebugInfo(): Record<string, string> {
    const obj = this.selectedObject;
    const cam = this.sceneManager.camera;
    const info: Record<string, string> = {
      'camera': `y=${cam.position.y.toFixed(2)} z=${cam.position.z.toFixed(2)}`,
      'light dir': `(${this.shadowDirection.x.toFixed(2)}, ${this.shadowDirection.y.toFixed(2)}, ${this.shadowDirection.z.toFixed(2)})`,
      'bridge': this.bridgeConnected ? 'CONNECTED' : 'disconnected',
      'walker': `(${this.walker.position.x.toFixed(2)}, ${this.walker.position.y.toFixed(2)})`,
      'state': this.completed ? 'COMPLETE' : this.paused ? 'PAUSED' : 'PLAYING',
    };
    if (obj) {
      const p = obj.group.position;
      info['object pos'] = `(${p.x.toFixed(2)}, ${p.y.toFixed(2)}, ${p.z.toFixed(2)})`;
      info['object rot'] = `(${obj.group.rotation.x.toFixed(2)}, ${obj.group.rotation.y.toFixed(2)})`;
      info['rail T'] = obj.normalizedT.toFixed(3);
      info['proj Y'] = `${obj.lastProjMinY.toFixed(3)} ~ ${obj.lastProjMaxY.toFixed(3)}`;
    }
    const platTop = (this.config.platforms[0].y + this.config.platforms[0].height / 2).toFixed(3);
    info['platform top'] = platTop;

    const mask = this.shadowMask.mask;
    const w = this.shadowMask.width;
    const h = this.shadowMask.height;
    let sMin = h, sMax = 0, pMin = h, pMax = 0;
    const pm = this.shadowMask.getPlatformMask();
    const sm = this.shadowMask.getShadowMask();
    for (let r = 0; r < h; r += 1) {
      for (let c = 0; c < w; c += 1) {
        if (pm[r * w + c] === 1) { pMin = Math.min(pMin, r); pMax = Math.max(pMax, r); }
        if (sm[r * w + c] === 1) { sMin = Math.min(sMin, r); sMax = Math.max(sMax, r); }
      }
    }
    let wShadMin = h, wShadMax = 0;
    for (let r = 0; r < h; r += 1) {
      for (let c = 0; c < w; c += 1) {
        if (mask[r * w + c] === 1 && pm[r * w + c] === 0) { wShadMin = Math.min(wShadMin, r); wShadMax = Math.max(wShadMax, r); }
      }
    }
    info['plat rows'] = `${pMin}-${pMax}`;
    info['shadow(raw)'] = `${sMin}-${sMax}`;
    info['shadow(walk)'] = `${wShadMin}-${wShadMax}`;
    info['gap'] = sMin > pMax ? `${sMin - pMax} rows gap` : sMax < pMin ? `${pMin - sMax} rows gap` : 'OVERLAP';
    info['expand'] = this.shadowMask.lastExpandInfo;
    info['walkable'] = `${Array.from(mask).filter(v => v === 1).length} cells`;

    return info;
  }

  private setBridgeHighlight(connected: boolean): void {
    this.bridgeConnected = connected;
    if (connected) {
      this.shadowMask.fillBridgeGap();
    } else {
      this.shadowMask.clearBridgeGap();
    }
    for (const object of this.shadowObjects) {
      object.setShadowConnected(connected);
    }
  }

  private completeLevel(): void {
    if (this.completed) {
      return;
    }
    this.completed = true;
    this.onComplete?.();
  }
}
