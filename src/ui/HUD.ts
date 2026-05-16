export class HUD {
  public readonly root: HTMLElement;
  private readonly toast: HTMLDivElement;
  private readonly centerMessage: HTMLDivElement;
  private readonly subMessage: HTMLDivElement;
  private readonly pausePanel: HTMLDivElement;
  private toastTimer = 0;

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
    topLeft.innerHTML = '<strong style="display:block;font-size:18px;">光语 · Luminal</strong><span style="font-size:13px;color:#6d5d52;">拖动物体，让影子补上断桥</span>';
    this.root.append(topLeft);

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
    this.pausePanel.innerHTML = `
      <div style="pointer-events:auto; min-width:300px; padding:28px 30px; border-radius:24px; background:rgba(255,248,238,0.92); box-shadow:0 20px 50px rgba(64,43,21,0.16); text-align:center;">
        <div style="font-size:28px; margin-bottom:8px;">已暂停</div>
        <div style="font-size:14px; color:#6e6054; margin-bottom:18px;">按 Esc 重新开始本关，或点击继续。</div>
        <button data-action="resume" style="border:none; background:#6f60f4; color:#fff; padding:10px 18px; border-radius:999px; cursor:pointer; font-size:14px;">继续</button>
      </div>
    `;
    this.root.append(this.pausePanel);
  }

  bindResume(action: () => void): void {
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
    this.showToast('提示：让影子补上中央断桥');
  }

  showComplete(): void {
    this.centerMessage.textContent = 'Level Complete';
    this.centerMessage.style.opacity = '1';
    this.subMessage.textContent = '光路已通，影行者抵达终点';
    this.subMessage.style.opacity = '1';
  }

  hideComplete(): void {
    this.centerMessage.style.opacity = '0';
    this.subMessage.style.opacity = '0';
  }

  setPaused(paused: boolean): void {
    this.pausePanel.style.display = paused ? 'flex' : 'none';
  }
}
