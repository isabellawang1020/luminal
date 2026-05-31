import * as THREE from 'three';
import type { SceneManager } from '@/core/Scene';
import type { LevelConfig } from '@/game/Level';
import { Locale } from '@/core/Locale';

export interface ZoneScreenRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export class ZoneOverlay {
  /** 合并后的操作区域：覆盖平台底边上下，玩家在这里点击操作物体/角色 */
  public readonly zone: HTMLDivElement;
  private hintLabel!: HTMLDivElement;
  private warningLabel!: HTMLDivElement;
  private warningTimer = 0;
  private zoneRect: ZoneScreenRect = { left: 0, top: 0, width: 0, height: 0 };

  private readonly platLeft: number;
  private readonly platRight: number;
  private readonly platTop: number;
  private readonly platBottom: number;
  private readonly wallZ: number;
  private fadeTimer = 0;
  private hintHidden = false;

  // 区域上下扩展尺寸（屏幕像素）
  private static readonly EXTEND_UP   = 150; // 紧贴平台底边向上覆盖平台本身的高度
  private static readonly EXTEND_DOWN = 420; // 从平台底边向下延伸（提示玩家操作区）

  constructor(
    private readonly sceneManager: SceneManager,
    config: LevelConfig,
    private readonly parent: HTMLElement,
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

    this.zone = this.createZoneDiv();
    parent.append(this.zone);

    this.hintLabel = document.createElement('div');
    this.hintLabel.textContent = config.hintText ?? Locale.t('向上移动积木，让影子铺出第一道光路', 'Lift the block upward, and let its shadow form the first path of light');
    Object.assign(this.hintLabel.style, {
      position: 'absolute',
      fontSize: '24px',
      fontWeight: '600',
      color: '#7c6be7',
      background: 'rgba(255,253,245,0.82)',
      backdropFilter: 'blur(8px)',
      padding: '9px 22px',
      borderRadius: '999px',
      pointerEvents: 'none',
      userSelect: 'none',
      zIndex: '2',
      whiteSpace: 'nowrap',
      transform: 'translateX(-50%)',
    });
    parent.append(this.hintLabel);

    // 监控 hintLabel style 变化，定位谁在恢复显示
    new MutationObserver((mutations) => {
      if (!this.hintHidden) return;
      for (const m of mutations) {
        if (m.type === 'attributes' && m.attributeName === 'style') {
          const vis = this.hintLabel.style.visibility;
          const op = this.hintLabel.style.opacity;
          if (vis !== 'hidden' || op !== '0') {
            console.warn('[ZoneOverlay] hintLabel restored after hideHint!', 'visibility:', vis, 'opacity:', op, new Error().stack);
            // 立即重新隐藏
            this.hintLabel.style.visibility = 'hidden';
            this.hintLabel.style.opacity = '0';
          }
        }
      }
    }).observe(this.hintLabel, { attributes: true, attributeFilter: ['style'] });

    this.warningLabel = document.createElement('div');
    this.warningLabel.textContent = Locale.t('角色正站在影子上，移动物品会让道路消散', 'A character is standing on a shadow. Moving the object will make the path fade.');
    Object.assign(this.warningLabel.style, {
      position: 'absolute',
      fontSize: '13px',
      fontWeight: '600',
      color: '#c0392b',
      background: 'rgba(255, 240, 238, 0.92)',
      backdropFilter: 'blur(8px)',
      padding: '5px 14px',
      borderRadius: '999px',
      pointerEvents: 'none',
      userSelect: 'none',
      zIndex: '3',
      whiteSpace: 'nowrap',
      transform: 'translateX(-50%)',
      opacity: '0',
      transition: 'opacity 0.3s ease',
    });
    parent.append(this.warningLabel);

    this.updateLayout();
  }

  private createZoneDiv(): HTMLDivElement {
    const div = document.createElement('div');
    Object.assign(div.style, {
      position: 'absolute',
      border: 'none',
      borderRadius: '14px',
      background: 'rgba(255, 255, 255, 0.28)',
      pointerEvents: 'none',
      transition: 'none',
      opacity: '1',
      zIndex: '1',
    });
    return div;
  }

  fadeOut(duration: number): void {
    this.setZoneOpacity(0, duration);
  }

  fadeIn(duration: number): void {
    this.hintHidden = false;
    this.hintLabel.style.opacity = '1';
    this.zone.style.transition = 'none';
    this.zone.style.opacity = '0';
    window.clearTimeout(this.fadeTimer);
    void this.zone.offsetHeight;
    this.setZoneOpacity(1, duration);
  }

  private setZoneOpacity(opacity: number, duration: number): void {
    const transition = `opacity ${duration}s linear`;
    this.zone.style.transition = transition;
    this.hintLabel.style.transition = transition;
    window.clearTimeout(this.fadeTimer);
    requestAnimationFrame(() => {
      this.zone.style.opacity = `${opacity}`;
      if (!this.hintHidden) {
        this.hintLabel.style.opacity = `${opacity}`;
      }
    });
    this.fadeTimer = window.setTimeout(() => {
      this.zone.style.transition = 'none';
      this.hintLabel.style.transition = 'none';
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

    // 合并 zone：从平台底边向上 EXTEND_UP 到向下 EXTEND_DOWN
    const zoneTop    = bottomRight.sy - ZoneOverlay.EXTEND_UP;
    const zoneBottom = bottomRight.sy + ZoneOverlay.EXTEND_DOWN;
    const zoneLeft   = topLeft.sx;
    const zoneRight  = bottomRight.sx;

    this.zoneRect = {
      left: zoneLeft,
      top: zoneTop,
      width: zoneRight - zoneLeft,
      height: zoneBottom - zoneTop,
    };

    Object.assign(this.zone.style, {
      left: `${this.zoneRect.left}px`,
      top: `${this.zoneRect.top}px`,
      width: `${this.zoneRect.width}px`,
      height: `${this.zoneRect.height}px`,
    });

    // 提示文案 & 警告文案：zone 顶部上方，水平居中
    const hintCenterX = this.zoneRect.left + this.zoneRect.width / 2;
    const hintTop = `${this.zoneRect.top - 36}px`;
    if (!this.hintHidden) {
      Object.assign(this.hintLabel.style, { left: `${hintCenterX}px`, top: hintTop });
    }
    Object.assign(this.warningLabel.style, { left: `${hintCenterX}px`, top: hintTop });
  }

  setHintText(text: string): void {
    this.hintLabel.textContent = text;
    // hideHint 后不恢复显示
    if (!this.hintHidden) {
      this.hintLabel.style.opacity = '1';
    }
  }

  hideHint(): void {
    this.hintHidden = true;
    // 只移除提示文字标签，区域框保留
    this.hintLabel.remove();
  }

  isHintVisible(): boolean {
    return !this.hintHidden && this.hintLabel.isConnected;
  }

  resetHint(text?: string): void {
    if (text) this.hintLabel.textContent = text;
    this.hintHidden = false;
    if (!this.hintLabel.isConnected) {
      this.parent.append(this.hintLabel);
    }
    this.hintLabel.style.opacity = '1';
  }

  showWarning(): void {
    this.warningLabel.textContent = Locale.t('角色正站在影子上，移动物品会让道路消散', 'A character is standing on a shadow. Moving the object will make the path fade.');
    window.clearTimeout(this.warningTimer);
    this.hintLabel.style.opacity = '0';
    this.warningLabel.style.transition = 'opacity 0.2s ease';
    this.warningLabel.style.opacity = '1';
  }

  hideWarning(): void {
    this.warningTimer && window.clearTimeout(this.warningTimer);
    this.warningLabel.style.transition = 'opacity 0.4s ease';
    this.warningLabel.style.opacity = '0';
    if (!this.hintHidden) {
      this.hintLabel.style.transition = 'opacity 0.4s ease';
      this.hintLabel.style.opacity = '1';
    }
    this.warningTimer = window.setTimeout(() => {
      if (!this.hintHidden) this.hintLabel.style.transition = 'none';
      this.warningLabel.style.transition = 'none';
    }, 400);
  }

  refreshWarningText(): void {
    this.warningLabel.textContent = Locale.t('角色正站在影子上，移动物品会让道路消散', 'A character is standing on a shadow. Moving the object will make the path fade.');
  }
}
