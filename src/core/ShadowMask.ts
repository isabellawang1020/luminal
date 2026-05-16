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

  fillBridgeGap(): void {
    let globalPlatTopRow = -1;
    for (let row = 0; row < this.height; row += 1) {
      for (let col = 0; col < this.width; col += 1) {
        if (this.platformMask[row * this.width + col] === 1) {
          globalPlatTopRow = Math.max(globalPlatTopRow, row);
        }
      }
    }
    if (globalPlatTopRow < 0) return;

    const bandHalf = 1;
    const bandMin = Math.max(0, globalPlatTopRow - bandHalf);
    const bandMax = Math.min(this.height - 1, globalPlatTopRow + bandHalf);

    for (let col = 0; col < this.width; col += 1) {
      let hasPlatform = false;
      for (let row = bandMin; row <= bandMax; row += 1) {
        if (this.platformMask[row * this.width + col] === 1) {
          hasPlatform = true;
          break;
        }
      }
      if (!hasPlatform) {
        for (let row = bandMin; row <= bandMax; row += 1) {
          this.walkableMask[row * this.width + col] = 1;
        }
      }
    }
  }

  clearBridgeGap(): void {
    this.mergeMasks();
  }

  private mergeMasks(): void {
    for (let index = 0; index < this.walkableMask.length; index += 1) {
      this.walkableMask[index] = this.platformMask[index];
    }
  }
}
