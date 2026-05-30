import type { ShadowObject } from '@/game/ShadowObject';
import { Locale } from '@/core/Locale';
import { audioManager } from '@/audio/SfxManager';

export interface ObjectControlsCallbacks {
  onRotateX: (delta: number) => void;
  onRotateY: (delta: number) => void;
  onRotateZ: (delta: number) => void;
  onRailChange: (value: number, direction: 'left' | 'right') => void;
  onRailChangeY: (delta: number) => void;
  onBeginAdjust: () => void;
  onEndAdjust: () => void;
}

const ROTATION_STEP = (Math.PI / 180) * 10;
const RAIL_STEP = 0.03;

export class ObjectControls {
  public readonly root: HTMLDivElement;
  public readonly panel: HTMLDivElement;
  private activeObject: ShadowObject | null = null;
  private holdTimer = 0;

  // 移动面板四个按钮引用，用于灰显
  private moveBtns: { up: HTMLButtonElement; down: HTMLButtonElement; left: HTMLButtonElement; right: HTMLButtonElement } | null = null;
  private movePad: HTMLDivElement | null = null;
  private rotateBtns: { up: HTMLButtonElement; down: HTMLButtonElement; left: HTMLButtonElement; right: HTMLButtonElement } | null = null;
  private rotationPad: HTMLDivElement | null = null;
  private tutorialArrow: HTMLDivElement | null = null;
  private tutorialLocked = false;
  private rotateTutorialLocked = false;
  private gameStarted = false;
  private panelForceHidden = false;
  private arrowTime = 0;
  private readonly moveBg = 'rgba(124, 107, 231, 0.82)';
  // 标签跟踪：用于语言切换时刷新 center 文本（旋转/移动）
  private readonly centerLabels: Array<{ element: HTMLDivElement; zh: string; en?: string }> = [];
  private readonly moveAccent = '#7c6be7';
  private readonly disabledBg = 'rgba(180, 180, 180, 0.45)';

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

    const { pad: rotatePad, btns: rotateBtns } = this.buildCrosspadWithRefs('旋转', 'Rotate', '#6f60f4', 'rgba(111, 96, 244, 0.88)', {
      up: () => this.callbacks.onRotateZ(ROTATION_STEP),    // 顺时针
      down: () => this.callbacks.onRotateZ(-ROTATION_STEP), // 逆时针
      left: () => this.callbacks.onRotateY(ROTATION_STEP),
      right: () => this.callbacks.onRotateY(-ROTATION_STEP),
    }, {
      up:    '/textures/ui/rotate_up.png',
      down:  '/textures/ui/rotate_down.png',
      left:  '/textures/ui/rotate_left.png',
      right: '/textures/ui/rotate_right.png',
    });
    this.rotateBtns = rotateBtns;
    this.rotationPad = rotatePad;
    this.panel.append(this.rotationPad);

    const { pad: movePad, btns: moveBtns } = this.buildCrosspadWithRefs('移动', 'Move', this.moveAccent, this.moveBg, {
      up: () => this.callbacks.onRailChangeY(RAIL_STEP),
      down: () => this.callbacks.onRailChangeY(-RAIL_STEP),
      left: () => {
        if (this.activeObject) {
          this.callbacks.onRailChange(Math.max(0, this.activeObject.normalizedT - RAIL_STEP), 'left');
        }
      },
      right: () => {
        if (this.activeObject) {
          this.callbacks.onRailChange(Math.min(1, this.activeObject.normalizedT + RAIL_STEP), 'right');
        }
      },
    });
    this.moveBtns = moveBtns;
    this.movePad = movePad;
    this.panel.append(movePad);

    // 引导金色箭头（fixed 定位，指向上移按钮正上方）
    this.tutorialArrow = document.createElement('div');
    Object.assign(this.tutorialArrow.style, {
      position: 'fixed',
      fontSize: '56px',
      color: '#f5c842',
      textShadow: '0 0 8px #f5c84299',
      pointerEvents: 'none',
      display: 'none',
      zIndex: '9999',
      animation: 'tutorialPulse 0.8s ease-in-out infinite alternate',
    });
    this.tutorialArrow.textContent = '▼';
    document.body.append(this.tutorialArrow);

    // 注入 keyframes
    if (!document.getElementById('tutorial-arrow-style')) {
      const style = document.createElement('style');
      style.id = 'tutorial-arrow-style';
      style.textContent = `
        @keyframes tutorialPulse {
          from { opacity: 1; }
          to   { opacity: 0.55; }
        }
      `;
      document.head.append(style);
    }

    document.addEventListener('pointerup', () => this.stopHold());
  }

  private buildCrosspad(
    label: string,
    labelEn: string,
    accentColor: string,
    buttonBg: string,
    actions: { up: () => void; down: () => void; left: () => void; right: () => void },
    icons?: { up?: string; down?: string; left?: string; right?: string },
  ): HTMLDivElement {
    return this.buildCrosspadWithRefs(label, labelEn, accentColor, buttonBg, actions, icons).pad;
  }

  private buildCrosspadWithRefs(
    label: string,
    labelEn: string,
    accentColor: string,
    buttonBg: string,
    actions: { up: () => void; down: () => void; left: () => void; right: () => void },
    icons?: { up?: string; down?: string; left?: string; right?: string },
  ): { pad: HTMLDivElement; btns: { up: HTMLButtonElement; down: HTMLButtonElement; left: HTMLButtonElement; right: HTMLButtonElement } } {
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
    this.centerLabels.push({ element: center, zh: label, en: labelEn });

    const makeBtn = (text: string): HTMLButtonElement => {
      const btn = document.createElement('button');
      const isImageIcon = text.startsWith('/') || text.startsWith('http');
      const isArcArrow = text === '↻' || text === '↺';
      if (isImageIcon) {
        const img = document.createElement('img');
        img.src = text;
        img.draggable = false;
        Object.assign(img.style, {
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          pointerEvents: 'none',
          userSelect: 'none',
        });
        btn.append(img);
      } else {
        btn.textContent = text;
      }
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
        fontSize: isArcArrow ? '17px' : '13px',
        padding: isImageIcon ? '4px' : '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.12s, transform 0.1s',
        userSelect: 'none',
      });
      btn.addEventListener('pointerenter', () => {
        if (btn.disabled) return;
        btn.style.background = accentColor;
        btn.style.transform += ' scale(1.08)';
      });
      btn.addEventListener('pointerleave', () => {
        if (btn.disabled) return;
        btn.style.background = buttonBg;
        btn.style.transform = btn.style.transform.replace(' scale(1.08)', '');
      });
      btn.addEventListener('pointerdown', (e) => e.stopPropagation());
      btn.addEventListener('click', (e) => e.stopPropagation());
      return btn;
    };

    const up = makeBtn(icons?.up ?? '▲');
    Object.assign(up.style, { left: '50%', top: '0', transform: 'translateX(-50%)' });
    this.attachHold(up, actions.up);

    const down = makeBtn(icons?.down ?? '▼');
    Object.assign(down.style, { left: '50%', bottom: '0', transform: 'translateX(-50%)' });
    this.attachHold(down, actions.down);

    const left = makeBtn(icons?.left ?? '◀');
    Object.assign(left.style, { left: '0', top: '50%', transform: 'translateY(-50%)' });
    this.attachHold(left, actions.left);

    const right = makeBtn(icons?.right ?? '▶');
    Object.assign(right.style, { right: '0', top: '50%', transform: 'translateY(-50%)' });
    this.attachHold(right, actions.right);

    pad.append(up, down, left, right);
    return { pad, btns: { up, down, left, right } };
  }

  private attachHold(button: HTMLButtonElement, action: () => void): void {
    button.addEventListener('pointerdown', (event) => {
      event.stopPropagation();
      if (button.disabled) return;
      action();
      // Play click sound at 0.5 volume
      audioManager.play('click', 0.2);
      this.callbacks.onBeginAdjust();
      this.stopHold();
      this.holdTimer = window.setInterval(() => {
        if (!button.disabled) action();
      }, 100);
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

  private setMoveButtonDisabled(btn: HTMLButtonElement, disabled: boolean): void {
    btn.disabled = disabled;
    btn.style.background = disabled ? this.disabledBg : this.moveBg;
    btn.style.cursor = disabled ? 'not-allowed' : 'pointer';
    btn.style.opacity = disabled ? '0.5' : '1';
  }

  setObject(object: ShadowObject | null): void {
    this.activeObject = object;
    this.panel.style.display = (object && !this.panelForceHidden) ? 'flex' : 'none';
    // 无物体时（含开始页/叙事页）隐藏引导箭头
    if (!object) {
      if (this.tutorialArrow) this.tutorialArrow.style.display = 'none';
      if (this.moveBtns) {
        for (const btn of Object.values(this.moveBtns)) {
          this.setMoveButtonDisabled(btn, false);
        }
      }
    } else if (this.tutorialLocked && this.gameStarted) {
      // 上移引导：重新应用按钮禁用状态
      if (this.moveBtns) {
        this.setMoveButtonDisabled(this.moveBtns.down,  true);
        this.setMoveButtonDisabled(this.moveBtns.left,  true);
        this.setMoveButtonDisabled(this.moveBtns.right, true);
      }
      if (this.tutorialArrow) {
        this.tutorialArrow.style.display = 'block';
        this._updateArrowPosition();
      }
    } else if (this.rotateTutorialLocked && this.gameStarted) {
      // 旋转引导：重新应用移动四键禁用状态
      if (this.moveBtns) {
        this.setMoveButtonDisabled(this.moveBtns.up,    true);
        this.setMoveButtonDisabled(this.moveBtns.down,  true);
        this.setMoveButtonDisabled(this.moveBtns.left,  true);
        this.setMoveButtonDisabled(this.moveBtns.right, true);
      }
      if (this.rotateBtns) {
        this.setMoveButtonDisabled(this.rotateBtns.down,  true);
        this.setMoveButtonDisabled(this.rotateBtns.left,  true);
        this.setMoveButtonDisabled(this.rotateBtns.right, true);
      }
      if (this.tutorialArrow) {
        this.tutorialArrow.style.display = 'block';
        this._updateArrowPosition();
      }
    } else {
      // 正常模式：根据物体能力禁用对应按钮
      if (this.moveBtns) {
        const disableMove = !!object.data.disableMove;
        this.setMoveButtonDisabled(this.moveBtns.up, disableMove);
        this.setMoveButtonDisabled(this.moveBtns.down, disableMove);
        this.setMoveButtonDisabled(this.moveBtns.left, disableMove);
        this.setMoveButtonDisabled(this.moveBtns.right, disableMove);
      }
      if (this.rotateBtns) {
        const disableRotate = !!object.data.disableRotate;
        this.setMoveButtonDisabled(this.rotateBtns.up, disableRotate);
        this.setMoveButtonDisabled(this.rotateBtns.down, disableRotate);
        this.setMoveButtonDisabled(this.rotateBtns.left, disableRotate);
        this.setMoveButtonDisabled(this.rotateBtns.right, disableRotate);
      }
    }
  }

  updateScreenPosition(_position: { x: number; y: number; visible: boolean }, deltaTime = 0): void {
    // Fixed at bottom center — no position tracking
    if ((this.tutorialLocked || this.rotateTutorialLocked) && this.tutorialArrow?.style.display !== 'none') {
      this._updateArrowPosition(deltaTime);
    }
  }

  notifyGameStarted(): void {
    this.gameStarted = true;
    // 若当前已在任意引导模式且有物体，立即显示箭头
    if ((this.tutorialLocked || this.rotateTutorialLocked) && this.activeObject && this.tutorialArrow) {
      this.tutorialArrow.style.display = 'block';
      this._updateArrowPosition();
    }
  }

  setRotationVisible(visible: boolean): void {
    if (this.rotationPad) {
      this.rotationPad.style.display = visible ? '' : 'none';
    }
  }

  setMoveVisible(visible: boolean): void {
    if (this.movePad) {
      this.movePad.style.display = visible ? '' : 'none';
    }
  }

  /** 语言切换时刷新面板内的标签（旋转/移动） */
  refreshLabels(): void {
    for (const entry of this.centerLabels) {
      entry.element.textContent = Locale.t(entry.zh, entry.en);
    }
  }

  hideArrow(): void {
    if (this.tutorialArrow) this.tutorialArrow.style.display = 'none';
  }

  /** 让引导箭头指向指定屏幕坐标，deltaTime 用于驱动弹跳动画 */
  pointArrowAt(screenX: number, screenY: number, offsetX = 0, offsetY = -110, deltaTime = 0): void {
    if (!this.tutorialArrow) return;
    this.tutorialArrow.style.display = 'block';
    this.arrowTime += deltaTime;
    const bounce = Math.sin(this.arrowTime * 4.0) * 7; // ±7px 弹跳
    Object.assign(this.tutorialArrow.style, {
      left: `${screenX + offsetX}px`,
      top: `${screenY + offsetY + bounce}px`,
      transform: 'translateX(-50%)',
    });
  }

  /** 开启引导模式：锁定只有上移按钮可点，显示金色箭头 */
  setTutorialMode(enabled: boolean): void {
    this.tutorialLocked = enabled;
    if (!this.moveBtns) return;

    if (enabled) {
      // 锁定按钮状态，但箭头不在这里显示——等 setObject 时再决定是否显示
      this.setMoveButtonDisabled(this.moveBtns.down, true);
      this.setMoveButtonDisabled(this.moveBtns.left, true);
      this.setMoveButtonDisabled(this.moveBtns.right, true);
      this.moveBtns.up.style.boxShadow = '0 0 12px 4px #f5c84266';
    } else {
      // 解锁：隐藏箭头，恢复上移光晕，其余按钮状态交由 syncSlider 根据 moveLimit 决定
      if (this.tutorialArrow) this.tutorialArrow.style.display = 'none';
      this.moveBtns.up.style.boxShadow = '0 3px 8px rgba(73, 55, 173, 0.25)';
      // 强制触发一次 syncSlider 让 moveLimit 即时生效
      if (this.activeObject) {
        this.setMoveButtonDisabled(this.moveBtns.down,  !this.activeObject.canMove('down'));
        this.setMoveButtonDisabled(this.moveBtns.left,  !this.activeObject.canMove('left'));
        this.setMoveButtonDisabled(this.moveBtns.right, !this.activeObject.canMove('right'));
      }
    }
  }

  private _updateArrowPosition(deltaTime = 0): void {
    if (!this.tutorialArrow) return;
    this.arrowTime += deltaTime;
    const bounce = Math.sin(this.arrowTime * 4.0) * 7;

    // 旋转引导：箭头指向顺时针按钮（rotateBtns.up）
    const targetBtn = this.rotateTutorialLocked
      ? this.rotateBtns?.up
      : this.moveBtns?.up;
    if (!targetBtn) return;

    const btnRect = targetBtn.getBoundingClientRect();
    Object.assign(this.tutorialArrow.style, {
      left: `${btnRect.left + btnRect.width / 2}px`,
      top: `${btnRect.top - 70 + bounce}px`,
      transform: 'translateX(-50%)',
    });
  }

  /** 开启旋转引导模式：移动四键置灰，高亮顺时针按钮，箭头指向顺时针 */
  setRotateTutorialMode(enabled: boolean): void {
    this.rotateTutorialLocked = enabled;
    if (!this.moveBtns || !this.rotateBtns) return;

    if (enabled) {
      // 移动四键全部置灰
      this.setMoveButtonDisabled(this.moveBtns.up,    true);
      this.setMoveButtonDisabled(this.moveBtns.down,  true);
      this.setMoveButtonDisabled(this.moveBtns.left,  true);
      this.setMoveButtonDisabled(this.moveBtns.right, true);
      // 旋转面板：只有顺时针（up）可点，其余置灰
      this.setMoveButtonDisabled(this.rotateBtns.down,  true);
      this.setMoveButtonDisabled(this.rotateBtns.left,  true);
      this.setMoveButtonDisabled(this.rotateBtns.right, true);
      // 高亮顺时针按钮
      this.rotateBtns.up.style.boxShadow = '0 0 12px 4px #f5c84266';
      // 显示箭头
      if (this.tutorialArrow && this.gameStarted && this.activeObject) {
        this.tutorialArrow.style.display = 'block';
        this._updateArrowPosition();
      }
    } else {
      // 解锁：隐藏箭头，恢复旋转按钮，移动按钮交由 syncSlider 决定
      if (this.tutorialArrow) this.tutorialArrow.style.display = 'none';
      this.rotateBtns.up.style.boxShadow = '0 3px 8px rgba(73, 55, 173, 0.25)';
      this.setMoveButtonDisabled(this.rotateBtns.down,  false);
      this.setMoveButtonDisabled(this.rotateBtns.left,  false);
      this.setMoveButtonDisabled(this.rotateBtns.right, false);
      // 移动按钮解锁，由 syncSlider 根据 moveLimit 即时刷新
    }
  }

  syncSlider(): void {
    if (!this.activeObject || !this.moveBtns) return;
    const obj = this.activeObject;
    // 旋转引导模式下移动四键始终锁定
    if (!this.rotateTutorialLocked) {
      if (obj.data.disableMove) {
        this.setMoveButtonDisabled(this.moveBtns.up, true);
        this.setMoveButtonDisabled(this.moveBtns.down, true);
        this.setMoveButtonDisabled(this.moveBtns.left, true);
        this.setMoveButtonDisabled(this.moveBtns.right, true);
      } else {
        this.setMoveButtonDisabled(this.moveBtns.up,    !obj.canMove('up'));
        this.setMoveButtonDisabled(this.moveBtns.down,  !obj.canMove('down'));
        this.setMoveButtonDisabled(this.moveBtns.left,  !obj.canMove('left'));
        this.setMoveButtonDisabled(this.moveBtns.right, !obj.canMove('right'));
      }
    }
    // 上移引导模式下 down/left/right 始终锁定
    if (this.tutorialLocked) {
      this.setMoveButtonDisabled(this.moveBtns.up, !obj.canMove('up'));
      this.setMoveButtonDisabled(this.moveBtns.down,  true);
      this.setMoveButtonDisabled(this.moveBtns.left,  true);
      this.setMoveButtonDisabled(this.moveBtns.right, true);
    }
  }
}
