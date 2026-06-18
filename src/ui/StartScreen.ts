export class StartScreen {
  public readonly root: HTMLDivElement;
  private onStartCallback: (() => void) | null = null;
  private loadingContainer: HTMLDivElement;
  private progressBar: HTMLDivElement;
  private percentText: HTMLDivElement;
  private hintContainer: HTMLDivElement;
  private isReady = false;
  private isDismissed = false;

  constructor(parent: HTMLElement) {
    if (!document.getElementById('luminal-style')) {
      const style = document.createElement('style');
      style.id = 'luminal-style';
      style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');

        @keyframes luminal-pulse {
          0%   { opacity: 0.6; }
          40%  { opacity: 0.85; }
          60%  { opacity: 0.85; }
          100% { opacity: 0.6; }
        }
        @keyframes luminal-fadein {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `;
      document.head.append(style);
    }

    this.root = document.createElement('div');
    Object.assign(this.root.style, {
      position: 'absolute',
      inset: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a0a',
      zIndex: '100',
      cursor: 'default',
      userSelect: 'none',
    });

    const titleCN = document.createElement('div');
    titleCN.textContent = '光语';
    Object.assign(titleCN.style, {
      fontFamily: '"Ma Shan Zheng", cursive',
      fontSize: '88px',
      fontWeight: '400',
      color: 'rgba(255, 248, 235, 0.92)',
      letterSpacing: '0.1em',
      lineHeight: '1',
      textShadow: '0 2px 40px rgba(255,248,235,0.08)',
      animation: 'luminal-fadein 1.2s ease both',
    });

    const titleEN = document.createElement('div');
    titleEN.textContent = 'Luminal';
    Object.assign(titleEN.style, {
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontSize: '36px',
      fontWeight: '400',
      fontStyle: 'italic',
      color: 'rgba(255, 248, 235, 0.45)',
      letterSpacing: '0.18em',
      lineHeight: '1',
      marginTop: '10px',
      animation: 'luminal-fadein 1.2s ease 0.2s both',
    });

    const divider = document.createElement('div');
    Object.assign(divider.style, {
      width: '40px',
      height: '1px',
      background: 'rgba(255, 248, 235, 0.2)',
      margin: '40px 0 32px',
      animation: 'luminal-fadein 1.0s ease 0.5s both',
    });

    this.root.append(titleCN, titleEN, divider);

    const loadingContainer = document.createElement('div');
    Object.assign(loadingContainer.style, {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      width: '200px',
      animation: 'luminal-fadein 1.0s ease 0.7s both',
      marginTop: '32px',
    });

    const barBg = document.createElement('div');
    Object.assign(barBg.style, {
      width: '100%',
      height: '2px',
      background: 'rgba(255,248,235,0.1)',
      borderRadius: '1px',
      overflow: 'hidden',
    });

    this.progressBar = document.createElement('div');
    Object.assign(this.progressBar.style, {
      width: '0%',
      height: '100%',
      background: 'rgba(255,248,235,0.6)',
      transition: 'width 0.3s ease',
      borderRadius: '1px',
    });
    barBg.append(this.progressBar);

    this.percentText = document.createElement('div');
    Object.assign(this.percentText.style, {
      fontSize: '13px',
      fontWeight: '300',
      color: 'rgba(255,248,235,0.4)',
      letterSpacing: '0.15em',
      fontFamily: 'Georgia, "Times New Roman", serif',
      fontStyle: 'italic',
    });
    this.percentText.textContent = 'loading...';

    loadingContainer.append(barBg, this.percentText);
    this.loadingContainer = loadingContainer;

    this.hintContainer = document.createElement('div');
    Object.assign(this.hintContainer.style, {
      display: 'none',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px',
      marginTop: '32px',
      cursor: 'pointer',
    });

    const hintZH = document.createElement('div');
    hintZH.textContent = '开始旅程';
    Object.assign(hintZH.style, {
      fontSize: '16px',
      fontWeight: '400',
      color: 'rgba(255, 248, 235, 0.6)',
      letterSpacing: '0.3em',
    });

    const hintEN = document.createElement('div');
    hintEN.textContent = 'Start Your Journey';
    Object.assign(hintEN.style, {
      fontSize: '12px',
      fontWeight: '300',
      color: 'rgba(255, 248, 235, 0.3)',
      letterSpacing: '0.15em',
      fontStyle: 'italic',
    });

    this.hintContainer.append(hintZH, hintEN);
    this.root.append(loadingContainer, this.hintContainer);

    this.root.addEventListener('pointerdown', () => {
      if (!this.isReady || this.isDismissed) return;
      this.dismiss(() => this.onStartCallback?.());
    });

    parent.append(this.root);
  }

  updateProgress(fraction: number, percent: string): void {
    this.progressBar.style.width = `${Math.min(100, fraction * 100)}%`;
    this.percentText.textContent = percent;
  }

  ready(): void {
    this.isReady = true;
    this.loadingContainer.style.display = 'none';
    this.hintContainer.style.display = 'flex';
    this.hintContainer.style.animation =
      'luminal-fadein 1.0s ease both, luminal-pulse 3.9s ease-in-out 1.8s infinite';
    this.root.style.cursor = 'pointer';
  }

  onStart(cb: () => void): void {
    this.onStartCallback = cb;
  }

  dismiss(cb: () => void): void {
    if (this.isDismissed) return;
    this.isDismissed = true;
    this.root.style.transition = 'opacity 0.8s ease';
    this.root.style.opacity = '0';
    this.root.style.pointerEvents = 'none';
    setTimeout(() => {
      this.root.remove();
      cb();
    }, 800);
  }
}
