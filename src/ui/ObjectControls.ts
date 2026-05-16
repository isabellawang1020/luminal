import type { ShadowObject } from '@/game/ShadowObject';

export interface ObjectControlsCallbacks {
  onRotateX: (delta: number) => void;
  onRotateY: (delta: number) => void;
  onRailChange: (value: number) => void;
  onRailChangeY: (delta: number) => void;
  onBeginAdjust: () => void;
  onEndAdjust: () => void;
}

const ROTATION_STEP = (Math.PI / 180) * 5;
const RAIL_STEP = 0.03;

export class ObjectControls {
  public readonly root: HTMLDivElement;
  public readonly panel: HTMLDivElement;
  private activeObject: ShadowObject | null = null;
  private holdTimer = 0;

  constructor(parent: HTMLElement, private readonly callbacks: ObjectControlsCallbacks) {
    this.root = document.createElement('div');
    this.root.style.position = 'absolute';
    this.root.style.inset = '0';
    this.root.style.pointerEvents = 'none';
    parent.append(this.root);

    this.panel = document.createElement('div');
    Object.assign(this.panel.style, {
      position: 'absolute',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'none',
      pointerEvents: 'auto',
      alignItems: 'center',
      gap: '23px',
      padding: '13px 23px',
      borderRadius: '16px',
      background: 'rgba(255, 248, 241, 0.95)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 8px 32px rgba(84, 61, 35, 0.18)',
      border: '1px solid rgba(111, 96, 244, 0.2)',
    });
    this.root.append(this.panel);

    this.panel.append(this.buildCrosspad('旋转', '#6f60f4', 'rgba(111, 96, 244, 0.88)', {
      up: () => this.callbacks.onRotateX(-ROTATION_STEP),
      down: () => this.callbacks.onRotateX(ROTATION_STEP),
      left: () => this.callbacks.onRotateY(-ROTATION_STEP),
      right: () => this.callbacks.onRotateY(ROTATION_STEP),
    }));

    this.panel.append(this.buildCrosspad('移动', '#7c6be7', 'rgba(124, 107, 231, 0.82)', {
      up: () => this.callbacks.onRailChangeY(RAIL_STEP),
      down: () => this.callbacks.onRailChangeY(-RAIL_STEP),
      left: () => { if (this.activeObject) this.callbacks.onRailChange(Math.max(0, this.activeObject.normalizedT - RAIL_STEP)); },
      right: () => { if (this.activeObject) this.callbacks.onRailChange(Math.min(1, this.activeObject.normalizedT + RAIL_STEP)); },
    }));

    document.addEventListener('pointerup', () => this.stopHold());
  }

  private buildCrosspad(
    label: string,
    accentColor: string,
    buttonBg: string,
    actions: { up: () => void; down: () => void; left: () => void; right: () => void },
  ): HTMLDivElement {
    const pad = document.createElement('div');
    Object.assign(pad.style, {
      position: 'relative',
      width: '105px',
      height: '105px',
      flexShrink: '0',
    });

    const center = document.createElement('div');
    Object.assign(center.style, {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      width: '35px',
      height: '35px',
      borderRadius: '7px',
      background: 'rgba(255, 255, 255, 0.92)',
      border: `2px solid ${accentColor}40`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '11px',
      color: accentColor,
      fontWeight: '600',
      pointerEvents: 'none',
      userSelect: 'none',
    });
    center.textContent = label;
    pad.append(center);

    const makeBtn = (text: string): HTMLButtonElement => {
      const btn = document.createElement('button');
      btn.textContent = text;
      Object.assign(btn.style, {
        position: 'absolute',
        width: '32px',
        height: '32px',
        border: 'none',
        borderRadius: '7px',
        background: buttonBg,
        color: '#fff',
        boxShadow: '0 3px 8px rgba(73, 55, 173, 0.25)',
        cursor: 'pointer',
        fontSize: '13px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.12s, transform 0.1s',
        userSelect: 'none',
      });
      btn.addEventListener('pointerenter', () => { btn.style.background = accentColor; btn.style.transform += ' scale(1.08)'; });
      btn.addEventListener('pointerleave', () => { btn.style.background = buttonBg; btn.style.transform = btn.style.transform.replace(' scale(1.08)', ''); });
      btn.addEventListener('pointerdown', (e) => e.stopPropagation());
      btn.addEventListener('click', (e) => e.stopPropagation());
      return btn;
    };

    const up = makeBtn('▲');
    Object.assign(up.style, { left: '50%', top: '0', transform: 'translateX(-50%)' });
    this.attachHold(up, actions.up);

    const down = makeBtn('▼');
    Object.assign(down.style, { left: '50%', bottom: '0', transform: 'translateX(-50%)' });
    this.attachHold(down, actions.down);

    const left = makeBtn('◀');
    Object.assign(left.style, { left: '0', top: '50%', transform: 'translateY(-50%)' });
    this.attachHold(left, actions.left);

    const right = makeBtn('▶');
    Object.assign(right.style, { right: '0', top: '50%', transform: 'translateY(-50%)' });
    this.attachHold(right, actions.right);

    pad.append(up, down, left, right);
    return pad;
  }

  private attachHold(button: HTMLButtonElement, action: () => void): void {
    button.addEventListener('pointerdown', (event) => {
      event.stopPropagation();
      action();
      this.callbacks.onBeginAdjust();
      this.stopHold();
      this.holdTimer = window.setInterval(action, 100);
    });
    button.addEventListener('pointerup', () => {
      this.stopHold();
      this.callbacks.onEndAdjust();
    });
    button.addEventListener('pointerleave', () => {
      this.stopHold();
    });
  }

  private stopHold(): void {
    if (this.holdTimer) {
      window.clearInterval(this.holdTimer);
      this.holdTimer = 0;
    }
  }

  setObject(object: ShadowObject | null): void {
    this.activeObject = object;
    this.panel.style.display = object ? 'flex' : 'none';
  }

  updateScreenPosition(_position: { x: number; y: number; visible: boolean }): void {
    // Fixed at bottom center — no position tracking
  }

  syncSlider(): void {
    // Buttons read normalizedT directly
  }
}
