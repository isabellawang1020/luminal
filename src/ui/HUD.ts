import { Locale } from '@/core/Locale';

export class HUD {
  public readonly root: HTMLElement;
  private readonly toast: HTMLDivElement;
  private readonly centerMessage: HTMLDivElement;
  private readonly subMessage: HTMLDivElement;
  private readonly pausePanel: HTMLDivElement;
  private readonly levelLabel: HTMLDivElement;
  private readonly bgmButton: HTMLButtonElement;
  private readonly langButton: HTMLButtonElement;
  private toastTimer = 0;
  private bgmMuted = false;
  private onBgmToggle?: (muted: boolean) => void;
  private onLangToggle?: (lang: 'zh' | 'en') => void;
  private resumeAction?: () => void;

  constructor(parent: HTMLElement) {
    this.root = document.createElement('div');
    this.root.style.position = 'absolute';
    this.root.style.inset = '0';
    this.root.style.pointerEvents = 'none';
    parent.append(this.root);

    const topLeft = document.createElement('div');
    topLeft.style.position = 'absolute';
    topLeft.style.top = '24px';
    topLeft.style.left = '24px';
    topLeft.style.padding = '12px 16px';
    topLeft.style.borderRadius = '14px';
    topLeft.style.background = 'rgba(255,255,255,0.46)';
    topLeft.style.backdropFilter = 'blur(14px)';
    topLeft.style.boxShadow = '0 10px 30px rgba(85,64,40,0.12)';
    topLeft.innerHTML = '<strong style="display:block;font-size:18px;text-align:center;">光语 · Luminal</strong>';

    // 关卡号副标题（在主标题下方，居中显示）
    this.levelLabel = document.createElement('div');
    Object.assign(this.levelLabel.style, {
      display: 'block',
      marginTop: '4px',
      fontSize: '13px',
      color: 'rgba(85, 64, 40, 0.78)',
      letterSpacing: '0.12em',
      fontWeight: '500',
      textAlign: 'center',
    });
    topLeft.append(this.levelLabel);

    this.root.append(topLeft);

    // BGM 控制按钮（独立的，在白色面板下方）
    this.bgmButton = document.createElement('button');
    Object.assign(this.bgmButton.style, {
      position: 'absolute',
      top: '115px',
      left: '24px',
      padding: '5px 14px',
      border: 'none',
      borderRadius: '8px',
      background: '#063654',
      backdropFilter: 'blur(10px)',
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background 0.2s',
      pointerEvents: 'auto',
      boxShadow: '0 4px 14px rgba(85,64,40,0.10)',
      letterSpacing: '0.04em',
    });
    this.bgmButton.textContent = Locale.current === 'zh' ? '🔊 音乐：开' : '🔊 Music: On';
    this.bgmButton.addEventListener('click', () => this.toggleBgm());
    this.bgmButton.addEventListener('pointerenter', () => {
      this.bgmButton.style.background = '#0a4a6e';
    });
    this.bgmButton.addEventListener('pointerleave', () => {
      this.bgmButton.style.background = '#063654';
    });
    this.root.append(this.bgmButton);

    // 语言切换按钮（在 BGM 按钮下方）
    this.langButton = document.createElement('button');
    Object.assign(this.langButton.style, {
      position: 'absolute',
      top: '152px',
      left: '24px',
      padding: '5px 14px',
      border: 'none',
      borderRadius: '8px',
      background: '#063654',
      backdropFilter: 'blur(10px)',
      color: '#ffffff',
      fontSize: '12px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background 0.2s',
      pointerEvents: 'auto',
      boxShadow: '0 4px 14px rgba(85,64,40,0.10)',
      letterSpacing: '0.04em',
    });
    this.langButton.textContent = '🌐 中 / EN';
    this.langButton.dataset.lang = 'zh';
    this.langButton.addEventListener('click', () => this.toggleLang());
    this.langButton.addEventListener('pointerenter', () => {
      this.langButton.style.background = '#0a4a6e';
    });
    this.langButton.addEventListener('pointerleave', () => {
      this.langButton.style.background = '#063654';
    });
    this.root.append(this.langButton);

    this.toast = document.createElement('div');
    this.toast.style.position = 'absolute';
    this.toast.style.left = '50%';
    this.toast.style.bottom = '34px';
    this.toast.style.transform = 'translateX(-50%)';
    this.toast.style.padding = '10px 18px';
    this.toast.style.borderRadius = '999px';
    this.toast.style.background = 'rgba(34,29,24,0.82)';
    this.toast.style.color = '#fff4e6';
    this.toast.style.fontSize = '15px';
    this.toast.style.opacity = '0';
    this.toast.style.transition = 'opacity 0.2s ease';
    this.root.append(this.toast);

    this.centerMessage = document.createElement('div');
    this.centerMessage.style.position = 'absolute';
    this.centerMessage.style.top = '50%';
    this.centerMessage.style.left = '50%';
    this.centerMessage.style.transform = 'translate(-50%, -50%)';
    this.centerMessage.style.fontSize = '56px';
    this.centerMessage.style.letterSpacing = '0.08em';
    this.centerMessage.style.color = '#fff9ee';
    this.centerMessage.style.textShadow = '0 0 28px rgba(255, 214, 128, 0.65)';
    this.centerMessage.style.opacity = '0';
    this.centerMessage.style.transition = 'opacity 0.4s ease';
    this.root.append(this.centerMessage);

    this.subMessage = document.createElement('div');
    this.subMessage.style.position = 'absolute';
    this.subMessage.style.top = 'calc(50% + 44px)';
    this.subMessage.style.left = '50%';
    this.subMessage.style.transform = 'translateX(-50%)';
    this.subMessage.style.color = '#6f5a45';
    this.subMessage.style.fontSize = '15px';
    this.subMessage.style.opacity = '0';
    this.subMessage.style.transition = 'opacity 0.4s ease';
    this.root.append(this.subMessage);

    this.pausePanel = document.createElement('div');
    this.pausePanel.style.position = 'absolute';
    this.pausePanel.style.inset = '0';
    this.pausePanel.style.display = 'none';
    this.pausePanel.style.alignItems = 'center';
    this.pausePanel.style.justifyContent = 'center';
    this.pausePanel.style.background = 'rgba(40, 31, 22, 0.28)';
    this.renderPausePanel();
    this.root.append(this.pausePanel);
  }

  setLevelLabel(text: string): void {
    this.levelLabel.textContent = text;
  }

  setBgmCallback(callback: (muted: boolean) => void): void {
    this.onBgmToggle = callback;
  }

  setLangCallback(callback: (lang: 'zh' | 'en') => void): void {
    this.onLangToggle = callback;
  }

  private toggleBgm(): void {
    this.bgmMuted = !this.bgmMuted;
    this.bgmButton.textContent = this.bgmMuted
      ? (Locale.current === 'zh' ? '🔇 音乐：关' : '🔇 Music: Off')
      : (Locale.current === 'zh' ? '🔊 音乐：开' : '🔊 Music: On');
    this.onBgmToggle?.(this.bgmMuted);
  }

  /** 语言切换时刷新动态显示的文本（BGM 按钮状态、暂停面板） */
  refreshLocalizedText(): void {
    this.bgmButton.textContent = this.bgmMuted
      ? (Locale.current === 'zh' ? '🔇 音乐：关' : '🔇 Music: Off')
      : (Locale.current === 'zh' ? '🔊 音乐：开' : '🔊 Music: On');
    if (this.pausePanel.style.display === 'flex') {
      this.renderPausePanel();
    }
  }

  private toggleLang(): void {
    // 按钮显示当前语言；点击切换到另一个语言
    const currentIsZh = this.langButton.textContent?.includes('中 / EN') !== false;
    // 读取 Locale 当前状态（通过回调用）→ 由外部维护
    const next: 'zh' | 'en' = this.langButton.dataset.lang === 'zh' ? 'en' : 'zh';
    this.langButton.dataset.lang = next;
    this.langButton.textContent = next === 'zh' ? '🌐 中 / EN' : '🌐 EN / 中';
    this.onLangToggle?.(next);
  }

  setPaused(paused: boolean): void {
    this.pausePanel.style.display = paused ? 'flex' : 'none';
    if (paused) this.renderPausePanel();
  }

  /** 语言切换时调用：如果暂停面板正在显示，重新渲染文本 */
  refreshPausedText(): void {
    if (this.pausePanel.style.display === 'flex') this.renderPausePanel();
  }

  private renderPausePanel(): void {
    // 重建 HTML 以刷新语言文本（避免丢失 resume 按钮的事件监听）
    const prevButton = this.pausePanel.querySelector('button[data-action="resume"]');
    const hadListener = prevButton !== null;
    this.pausePanel.innerHTML = `
      <div style="pointer-events:auto; min-width:300px; padding:28px 30px; border-radius:24px; background:rgba(255,248,238,0.92); box-shadow:0 20px 50px rgba(64,43,21,0.16); text-align:center;">
        <div style="font-size:28px; margin-bottom:8px;">${Locale.t('已暂停', 'Paused')}</div>
        <div style="font-size:14px; color:#6e6054; margin-bottom:18px;">${Locale.t('按 Esc 重新开始，或继续旅程', 'Press Esc to restart, or continue the journey')}</div>
        <button data-action="resume" style="border:none; background:#6f60f4; color:#fff; padding:10px 18px; border-radius:999px; cursor:pointer; font-size:14px;">${Locale.t('继续', 'Continue')}</button>
      </div>
    `;
    // 重新绑定 resume 回调
    if (this.resumeAction) {
      const btn = this.pausePanel.querySelector('button[data-action="resume"]');
      btn?.addEventListener('click', this.resumeAction);
    }
  }

  bindResume(action: () => void): void {
    this.resumeAction = action;
    const button = this.pausePanel.querySelector('button[data-action="resume"]');
    button?.addEventListener('click', action);
  }

  showToast(message: string, duration = 1500): void {
    this.toast.textContent = message;
    this.toast.style.opacity = '1';
    window.clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => {
      this.toast.style.opacity = '0';
    }, duration);
  }

  showHintMessage(): void {
    this.showToast(Locale.t('提示：让影子填上中间的空隙', 'Hint: let the shadow fill the gap in the middle'));
  }

  showComplete(): void {
    this.centerMessage.textContent = Locale.t('光路已启', 'The path of light is open');
    this.centerMessage.style.opacity = '1';
    this.subMessage.textContent = Locale.t('旅人已抵达', 'The traveler has arrived');
    this.subMessage.style.opacity = '1';
  }

  hideComplete(): void {
    this.centerMessage.style.opacity = '0';
    this.subMessage.style.opacity = '0';
  }
}
