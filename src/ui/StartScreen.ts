export class StartScreen {
  public readonly root: HTMLDivElement;
  private onStartCallback: (() => void) | null = null;

  constructor(parent: HTMLElement) {
    // 注入样式（手写体 + 动画）
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
      cursor: 'pointer',
      userSelect: 'none',
    });

    // 中文标题 — 手写体
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

    // 英文标题 — 手写体
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

    // 分隔线
    const divider = document.createElement('div');
    Object.assign(divider.style, {
      width: '40px',
      height: '1px',
      background: 'rgba(255, 248, 235, 0.2)',
      margin: '40px 0 32px',
      animation: 'luminal-fadein 1.0s ease 0.5s both',
    });

    // "开始旅程" 两行文字（替代按钮）
    const tapHint = document.createElement('div');
    Object.assign(tapHint.style, {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px',
      animation: 'luminal-fadein 1.0s ease 0.7s both, luminal-pulse 3.9s ease-in-out 1.8s infinite',
      marginTop: '32px',
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

    tapHint.append(hintZH, hintEN);

    this.root.append(titleCN, titleEN, divider, tapHint);

    // 点击任意位置触发
    this.root.addEventListener('pointerdown', () => {
      this.dismiss(() => this.onStartCallback?.());
    });

    parent.append(this.root);
  }

  onStart(callback: () => void): void {
    this.onStartCallback = callback;
  }

  private dismiss(onDone: () => void): void {
    this.root.style.transition = 'opacity 0.6s ease';
    this.root.style.opacity = '0';
    this.root.style.pointerEvents = 'none';
    setTimeout(() => {
      this.root.remove();
      onDone();
    }, 600);
  }
}
