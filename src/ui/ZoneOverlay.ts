import * as THREE from 'three';
import type { SceneManager } from '@/core/Scene';
import type { LevelConfig } from '@/game/Level';

export interface ZoneScreenRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export class ZoneOverlay {
  public readonly clickZone: HTMLDivElement;
  public readonly moveZone: HTMLDivElement;
  private clickRect: ZoneScreenRect = { left: 0, top: 0, width: 0, height: 0 };
  private moveRect: ZoneScreenRect = { left: 0, top: 0, width: 0, height: 0 };

  private readonly platLeft: number;
  private readonly platRight: number;
  private readonly platTop: number;
  private readonly platBottom: number;
  private readonly wallZ: number;
  private fadeTimer = 0;

  constructor(
    private readonly sceneManager: SceneManager,
    config: LevelConfig,
    parent: HTMLElement,
    controlPanel: HTMLDivElement,
  ) {
    void controlPanel;
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    for (const p of config.platforms) {
      minX = Math.min(minX, p.x - p.width / 2);
      maxX = Math.max(maxX, p.x + p.width / 2);
      minY = Math.min(minY, p.y - p.height / 2);
      maxY = Math.max(maxY, p.y + p.height / 2);
    }
    this.platLeft = minX;
    this.platRight = maxX;
    this.platTop = maxY;
    this.platBottom = minY;
    this.wallZ = sceneManager.wallBounds.z;

    this.clickZone = this.createZoneDiv('可移动区域', 'rgba(111, 96, 244, 0.35)', '#6f60f4');
    parent.append(this.clickZone);

    this.moveZone = this.createZoneDiv('可点击区域', 'rgba(124, 107, 231, 0.30)', '#7c6be7');
    parent.append(this.moveZone);

    this.updateLayout();
  }

  private createZoneDiv(label: string, borderColor: string, textColor: string): HTMLDivElement {
    const div = document.createElement('div');
    Object.assign(div.style, {
      position: 'absolute',
      border: `2px solid ${borderColor}`,
      borderRadius: '12px',
      background: 'rgba(255, 253, 245, 0.88)',
      pointerEvents: 'none',
      transition: 'none',
      opacity: '1',
      zIndex: '1',
    });
    const tag = document.createElement('span');
    Object.assign(tag.style, {
      position: 'absolute',
      left: '8px',
      top: '6px',
      fontSize: '11px',
      fontWeight: '600',
      color: textColor,
      opacity: '0.7',
      userSelect: 'none',
    });
    tag.textContent = label;
    div.append(tag);
    return div;
  }

  fadeOut(duration: number): void {
    this.setZoneOpacity(0, duration);
  }

  fadeIn(duration: number): void {
    this.clickZone.style.transition = 'none';
    this.moveZone.style.transition = 'none';
    this.clickZone.style.opacity = '0';
    this.moveZone.style.opacity = '0';
    window.clearTimeout(this.fadeTimer);
    void this.clickZone.offsetHeight;
    this.setZoneOpacity(1, duration);
  }

  private setZoneOpacity(opacity: number, duration: number): void {
    const transition = `opacity ${duration}s linear`;
    this.clickZone.style.transition = transition;
    this.moveZone.style.transition = transition;
    window.clearTimeout(this.fadeTimer);
    requestAnimationFrame(() => {
      this.clickZone.style.opacity = `${opacity}`;
      this.moveZone.style.opacity = `${opacity}`;
    });
    this.fadeTimer = window.setTimeout(() => {
      this.clickZone.style.transition = 'none';
      this.moveZone.style.transition = 'none';
    }, duration * 1000);
  }

  private worldToScreen(x: number, y: number): { sx: number; sy: number } {
    const pos = new THREE.Vector3(x, y, this.wallZ);
    const screen = this.sceneManager.worldToScreen(pos);
    return { sx: screen.x, sy: screen.y };
  }

  updateLayout(): void {
    const topLeft = this.worldToScreen(this.platLeft, this.platTop);
    const bottomRight = this.worldToScreen(this.platRight, this.platBottom);

    const clickTop = bottomRight.sy + 30;
    const clickBottom = clickTop + 220;
    const clickLeft = topLeft.sx;
    const clickRight = bottomRight.sx;

    this.clickRect = {
      left: clickLeft,
      top: clickTop,
      width: clickRight - clickLeft,
      height: clickBottom - clickTop,
    };

    Object.assign(this.clickZone.style, {
      left: `${this.clickRect.left}px`,
      top: `${this.clickRect.top}px`,
      width: `${this.clickRect.width}px`,
      height: `${this.clickRect.height}px`,
    });

    const moveBottom = bottomRight.sy;
    const moveTop = moveBottom - 150;

    this.moveRect = {
      left: clickLeft,
      top: moveTop,
      width: clickRight - clickLeft,
      height: Math.max(0, moveBottom - moveTop),
    };

    Object.assign(this.moveZone.style, {
      left: `${this.moveRect.left}px`,
      top: `${this.moveRect.top}px`,
      width: `${this.moveRect.width}px`,
      height: `${this.moveRect.height}px`,
    });
  }

  isInClickZone(clientX: number, clientY: number): boolean {
    const containerRect = this.sceneManager.renderer.domElement.parentElement?.getBoundingClientRect();
    if (!containerRect) return false;
    const localX = clientX - containerRect.left;
    const localY = clientY - containerRect.top;
    return (
      localX >= this.moveRect.left &&
      localX <= this.moveRect.left + this.moveRect.width &&
      localY >= this.moveRect.top &&
      localY <= this.moveRect.top + this.moveRect.height
    );
  }

  isInMoveZone(clientX: number, clientY: number): boolean {
    const containerRect = this.sceneManager.renderer.domElement.parentElement?.getBoundingClientRect();
    if (!containerRect) return false;
    const localX = clientX - containerRect.left;
    const localY = clientY - containerRect.top;
    return (
      localX >= this.clickRect.left &&
      localX <= this.clickRect.left + this.clickRect.width &&
      localY >= this.clickRect.top &&
      localY <= this.clickRect.top + this.clickRect.height
    );
  }

  getMoveWorldBounds(): { minX: number; maxX: number; minY: number; maxY: number } {
    return {
      minX: this.platLeft,
      maxX: this.platRight,
      minY: this.sceneManager.wallBounds.minY,
      maxY: this.platBottom,
    };
  }
}
