export interface NarrativeLine {
  zh: string;
  en: string;
}

export interface NarrativeShowOptions {
  /** 是否隐藏底部向右箭头（默认 false） */
  hideArrow?: boolean;
  /** 是否禁用点击继续（默认 false，页面将常驻显示） */
  disableClick?: boolean;
}

export class NarrativeScreen {
  public readonly root: HTMLDivElement;

  constructor(parent: HTMLElement) {
    this.root = document.createElement('div');
    Object.assign(this.root.style, {
      position: 'absolute',
      inset: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a0a',
      zIndex: '99',
      pointerEvents: 'none',
      opacity: '0',
      cursor: 'pointer',
      userSelect: 'none',
    });
    parent.append(this.root);
  }

  show(lines: NarrativeLine[], onDone?: () => void, options: NarrativeShowOptions = {}): void {
    const hideArrow = options.hideArrow ?? false;
    const disableClick = options.disableClick ?? false;

    this.root.innerHTML = '';
    let dismissed = false;

    // 注入动画样式（如尚未注入）
    if (!document.getElementById('narrative-style')) {
      const style = document.createElement('style');
      style.id = 'narrative-style';
      style.textContent = `
        @keyframes luminal-fadein {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes tri-pulse {
          0%, 100% { opacity: 0.15; transform: translateX(0); }
          50%       { opacity: 0.9;  transform: translateX(4px); }
        }
      `;
      document.head.append(style);
    }

    // 文字内容区——整体上移（用 marginBottom 把重心推向上方）
    const content = document.createElement('div');
    Object.assign(content.style, {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      padding: '0 40px',
      maxWidth: '800px',
      textAlign: 'center',
      marginBottom: '80px',   // 上移效果：给底部 loading 留位并把文字推高
    });

    // 每行：淡入 0.8s + 停留 0.4s，下一行在上一行开始后 1.2s 出现
    const LINE_INTERVAL = 1.2;

    lines.forEach((line, i) => {
      const group = document.createElement('div');
      Object.assign(group.style, {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
        opacity: '0',
        animation: `luminal-fadein 0.8s ease ${i * LINE_INTERVAL}s both`,
      });

      const zh = document.createElement('div');
      zh.textContent = line.zh;
      Object.assign(zh.style, {
        fontSize: '26px',
        fontWeight: '500',
        color: 'rgba(255, 248, 235, 0.92)',
        letterSpacing: '0.08em',
        lineHeight: '1.6',
      });

      const en = document.createElement('div');
      en.textContent = line.en;
      Object.assign(en.style, {
        fontSize: '15px',
        fontWeight: '300',
        color: 'rgba(255, 248, 235, 0.5)',
        letterSpacing: '0.18em',
        lineHeight: '1.5',
        fontStyle: 'italic',
      });

      group.append(zh, en);
      content.append(group);
    });

    this.root.append(content);

    // 三角形 loading：最后一行显示完后 0.6s 出现（hideArrow 时不显示）
    if (!hideArrow) {
      const triDelay = (lines.length - 1) * LINE_INTERVAL + 0.8 + 0.6;
      const triWrap = document.createElement('div');
      Object.assign(triWrap.style, {
        position: 'absolute',
        bottom: '52px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        opacity: '0',
        animation: `luminal-fadein 0.8s ease ${triDelay}s both`,
      });

      [0, 1, 2].forEach((i) => {
        const tri = document.createElement('div');
        tri.textContent = '▶';
        Object.assign(tri.style, {
          fontSize: '12px',
          color: 'rgba(255, 248, 235, 0.9)',
          animation: `tri-pulse 2.0s ease-in-out ${i * 0.35}s infinite`,
        });
        triWrap.append(tri);
      });

      this.root.append(triWrap);
    }

    // 立即显示（不再淡入），避免与 overlayLayer 渐变叠加造成"黑屏闪现"
    // 叙事页本身就是黑底，内部每行文字有自己的 fadein 动画，体验更稳
    this.root.style.transition = 'none';
    this.root.style.opacity = '1';
    this.root.style.pointerEvents = disableClick ? 'none' : 'auto';

    // 点击任意位置继续（disableClick 时不绑定，页面常驻显示）
    if (!disableClick) {
      const onTap = () => {
        if (dismissed) return;
        dismissed = true;
        this.root.removeEventListener('pointerdown', onTap);
        this.root.style.transition = 'opacity 0.5s ease';
        this.root.style.opacity = '0';
        this.root.style.pointerEvents = 'none';
        setTimeout(() => onDone?.(), 500);
      };
      this.root.addEventListener('pointerdown', onTap);
    }
  }
}
