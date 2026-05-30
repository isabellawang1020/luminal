import * as THREE from 'three';
import type { Platform } from '@/game/Platform';
import type { ShadowObject } from '@/game/ShadowObject';
import { GridMapper, type WallBounds } from '@/utils/GridMapper';



export class ShadowMask {
  public readonly width = 512;
  public readonly height = 256;
  public readonly mapper: GridMapper;
  private readonly scene = new THREE.Scene();
  private readonly camera: THREE.OrthographicCamera;
  private readonly renderTarget: THREE.WebGLRenderTarget;
  private readonly readBuffer = new Uint8Array(this.width * this.height * 4);
  private readonly platformMask = new Uint8Array(this.width * this.height);
  private readonly shadowMask = new Uint8Array(this.width * this.height);
  private readonly walkableMask = new Uint8Array(this.width * this.height);
  /** 墙 cell 集合：mask 索引 → 是墙的 cell 标 1（在 mergeMasks 后强制清零 walkable） */
  private wallMask = new Uint8Array(this.width * this.height);

  constructor(
    private readonly renderer: THREE.WebGLRenderer,
    wallBounds: WallBounds,
  ) {
    this.mapper = new GridMapper(wallBounds, this.width, this.height);
    this.camera = new THREE.OrthographicCamera(
      wallBounds.minX,
      wallBounds.maxX,
      wallBounds.maxY,
      wallBounds.minY,
      0.01,
      20,
    );
    this.camera.position.set(0, (wallBounds.minY + wallBounds.maxY) / 2, 10);
    this.camera.lookAt(0, (wallBounds.minY + wallBounds.maxY) / 2, wallBounds.z);

    this.renderTarget = new THREE.WebGLRenderTarget(this.width, this.height, {
      depthBuffer: false,
      stencilBuffer: false,
      magFilter: THREE.LinearFilter,
      minFilter: THREE.LinearFilter,
    });
    this.renderTarget.texture.generateMipmaps = false;
  }

  get texture(): THREE.Texture {
    return this.renderTarget.texture;
  }

  get mask(): Uint8Array {
    return this.walkableMask;
  }

  getPlatformMask(): Uint8Array {
    return this.platformMask;
  }

  getShadowMask(): Uint8Array {
    return this.shadowMask;
  }

  addObject(object: ShadowObject): void {
    this.scene.add(object.shadowMaskMesh);
  }

  buildPlatformMask(platforms: Platform[]): void {
    this.platformMask.fill(0);

    for (const platform of platforms) {
      const bounds = this.mapper.rectToCells(platform.data);
      for (let row = bounds.minRow; row <= bounds.maxRow; row += 1) {
        for (let col = bounds.minCol; col <= bounds.maxCol; col += 1) {
          this.platformMask[row * this.width + col] = 1;
        }
      }
    }

    this.mergeMasks();
  }

  refreshVisual(): void {
    const previous = this.renderer.getRenderTarget();
    this.renderer.setRenderTarget(this.renderTarget);
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.clear();
    this.renderer.render(this.scene, this.camera);
    this.renderer.setRenderTarget(previous);
    this.renderer.setClearColor(0x000000, 0);
  }

  captureMask(): void {
    this.refreshVisual();
    this.renderer.readRenderTargetPixels(this.renderTarget, 0, 0, this.width, this.height, this.readBuffer);

    for (let row = 0; row < this.height; row += 1) {
      const srcRow = this.height - 1 - row;
      for (let col = 0; col < this.width; col += 1) {
        this.shadowMask[row * this.width + col] = this.readBuffer[(srcRow * this.width + col) * 4] > 24 ? 1 : 0;
      }
    }
    this.expandToLowerRows(this.shadowMask, 0);
    this.mergeMasks();
  }

  public lastExpandInfo = '';

  private expandToLowerRows(mask: Uint8Array, steps: number): void {
    let minBefore = this.height, maxBefore = 0;
    for (let r = 0; r < this.height; r += 1) {
      for (let c = 0; c < this.width; c += 1) {
        if (mask[r * this.width + c] === 1) { minBefore = Math.min(minBefore, r); maxBefore = Math.max(maxBefore, r); }
      }
    }

    for (let s = 0; s < steps; s += 1) {
      const temp = new Uint8Array(mask.length);
      temp.set(mask);
      for (let row = 0; row < this.height - 1; row += 1) {
        for (let col = 0; col < this.width; col += 1) {
          if (temp[row * this.width + col] === 0 && temp[(row + 1) * this.width + col] === 1) {
            mask[row * this.width + col] = 1;
          }
        }
      }
    }

    let minAfter = this.height, maxAfter = 0;
    for (let r = 0; r < this.height; r += 1) {
      for (let c = 0; c < this.width; c += 1) {
        if (mask[r * this.width + c] === 1) { minAfter = Math.min(minAfter, r); maxAfter = Math.max(maxAfter, r); }
      }
    }
    this.lastExpandInfo = `pre:${minBefore}-${maxBefore} post:${minAfter}-${maxAfter}`;
  }

  /**
   * 填充指定间隙列，让该列从"间隙参考 Y 附近"可走。
   * 新版每个 gap 单独处理，只在该 gap 的 Y 范围内填充（避免不同层平台间隙互相干扰）。
   * @param gaps 已连通间隙列表，每个含 X 范围和 Y 范围（参考线 Y ± 容差）
   *             省略时按旧行为：用全局平台 Y 范围
   */
  fillBridgeGap(gaps?: Array<{ xMin: number; xMax: number; yMin: number; yMax: number } | [number, number]>): void {
    // 兼容旧调用（数组里是 [xMin, xMax] 元组时）：用全局平台 Y 范围
    let normalizedGaps: Array<{ xMin: number; xMax: number; yMin: number; yMax: number }>;
    if (gaps && gaps.length > 0 && Array.isArray(gaps[0])) {
      // 旧调用，用全局 platTop/platBot 范围
      let platTopRow = this.height;
      let platBotRow = 0;
      for (let row = 0; row < this.height; row += 1) {
        for (let col = 0; col < this.width; col += 1) {
          if (this.platformMask[row * this.width + col] === 1) {
            platTopRow = Math.min(platTopRow, row);
            platBotRow = Math.max(platBotRow, row);
          }
        }
      }
      if (platTopRow >= this.height) return;
      const yMin = this.mapper.bounds.minY + (platTopRow / this.height) * (this.mapper.bounds.maxY - this.mapper.bounds.minY);
      const yMax = this.mapper.bounds.minY + ((platBotRow + 1) / this.height) * (this.mapper.bounds.maxY - this.mapper.bounds.minY);
      normalizedGaps = (gaps as Array<[number, number]>).map(([xMin, xMax]) => ({ xMin, xMax, yMin, yMax }));
    } else if (gaps) {
      normalizedGaps = gaps as Array<{ xMin: number; xMax: number; yMin: number; yMax: number }>;
    } else {
      return;
    }

    for (const g of normalizedGaps) {
      // 该 gap 的 cell 范围
      const cMinCell = this.mapper.worldToCell(g.xMin, this.mapper.bounds.minY + 0.01);
      const cMaxCell = this.mapper.worldToCell(g.xMax, this.mapper.bounds.minY + 0.01);
      const rMinCell = this.mapper.worldToCell(g.xMin, g.yMin);
      const rMaxCell = this.mapper.worldToCell(g.xMin, g.yMax);
      const colMin = cMinCell?.col ?? 0;
      const colMax = cMaxCell?.col ?? this.width - 1;
      const r1 = rMinCell?.row ?? 0;
      const r2 = rMaxCell?.row ?? this.height - 1;
      const rowMin = Math.min(r1, r2);
      const rowMax = Math.max(r1, r2);

      for (let col = colMin; col <= colMax; col += 1) {
        // 该列在 gap Y 范围内是否有平台 cell — 有 = 已是平台 cell，不填
        // 注意：bottom 长平台 cell 在 row 110-118，跟上层 gap (row 198-202) 不同行 → 不会误判
        let hasPlatform = false;
        for (let row = rowMin; row <= rowMax; row += 1) {
          if (this.platformMask[row * this.width + col] === 1) {
            hasPlatform = true;
            break;
          }
        }
        if (!hasPlatform) {
          for (let row = rowMin; row <= rowMax; row += 1) {
            const idx = row * this.width + col;
            if (this.wallMask[idx] === 1) continue;
            this.walkableMask[idx] = 1;
          }
        }
      }
    }
  }

  clearBridgeGap(): void {
    this.mergeMasks();
  }

  /** 设置墙区域（X/Y 范围 → mask cell），影响 BFS 走不通 */
  setWalls(rects: Array<{ x: number; y: number; width: number; height: number }>): void {
    this.wallMask.fill(0);
    for (const r of rects) {
      const bounds = this.mapper.rectToCells(r);
      for (let row = bounds.minRow; row <= bounds.maxRow; row += 1) {
        for (let col = bounds.minCol; col <= bounds.maxCol; col += 1) {
          this.wallMask[row * this.width + col] = 1;
        }
      }
    }
    this.mergeMasks();
  }

  private mergeMasks(): void {
    for (let index = 0; index < this.walkableMask.length; index += 1) {
      // 墙优先级最高：是墙就不可走
      if (this.wallMask[index] === 1) {
        this.walkableMask[index] = 0;
      } else {
        this.walkableMask[index] = this.platformMask[index];
      }
    }
  }
}
