/**
 * 视频播放屏幕
 * 用于在关卡过渡时播放过场视频
 */
export class VideoScreen {
  private container: HTMLElement;
  private video: HTMLVideoElement | null = null;
  private onComplete?: () => void;

  constructor(parent: HTMLElement) {
    this.container = document.createElement('div');
    this.container.style.position = 'absolute';
    this.container.style.inset = '0';
    this.container.style.backgroundColor = '#000';
    this.container.style.display = 'none';
    this.container.style.zIndex = '10';
    parent.appendChild(this.container);
  }

  /**
   * 播放视频
   * @param videoUrl 视频 URL
   * @param callback 播放完成后的回调
   * @param fadeInDuration 淡入时长（毫秒），默认 0（无淡入）
   */
  show(videoUrl: string, callback?: () => void, fadeInDuration: number = 0): void {
    this.onComplete = callback;
    console.log(`[VideoScreen] show called with: ${videoUrl}, fadeIn: ${fadeInDuration}ms`);
    
    // 防止重复回调（error + ended 都会触发 onComplete）
    let completed = false;
    const safeComplete = () => {
      if (completed) return;
      completed = true;
      this.onComplete?.();
    };
    
    // 清空之前的内容
    this.container.innerHTML = '';
    
    // 创建 video 元素
    this.video = document.createElement('video');
    this.video.src = videoUrl;
    this.video.style.width = '100%';
    this.video.style.height = '100%';
    this.video.style.objectFit = 'contain';
    this.video.style.display = 'block';
    this.video.muted = true;
    this.video.playsInline = true;
    (this.video as any).webkitPlaysinline = true;
    this.video.controls = false;
    
    // 如果需要淡入，设置初始状态
    if (fadeInDuration > 0) {
      this.video.style.opacity = '0';
      this.video.style.transition = `opacity ${fadeInDuration}ms ease-out`;
    } else {
      this.video.style.opacity = '1';
    }
    
    // 播放完成事件 - 渐黑过渡
    this.video.addEventListener('ended', () => {
      const fadeOutDuration = 500; // 0.5s 渐黑
      const pauseInBlack = 400;    // 0.4s 纯黑停顿

      // 1. 视频淡出到黑色（0.5s）
      this.video!.style.transition = `opacity ${fadeOutDuration}ms ease-in`;
      this.video!.style.opacity = '0';

      setTimeout(() => {
        // 2. 移除视频元素（容器本身保留，黑色背景继续覆盖 overlayLayer）
        // 这样在叙事页显示之前，overlayLayer 仍然是纯黑，不会透出场景
        if (this.video) {
          this.video.pause();
          this.video.src = '';
          this.video.remove();
          this.video = null;
        }

        // 3. 短暂停顿后触发回调，显示叙事页（文字会自然淡入）
        setTimeout(() => {
          safeComplete();
        }, pauseInBlack);
      }, fadeOutDuration);
    });
    
    this.video.addEventListener('error', (e) => {
      console.error('[VideoScreen] video error:', e);
      this.hide();
      safeComplete();
    });
    
    // 添加到容器
    this.container.appendChild(this.video);
    this.container.style.display = 'block';
    
    // 开始播放
    const playPromise = this.video.play();
    console.log('[VideoScreen] play promise:', playPromise);
    if (playPromise) {
      playPromise.then(() => {
        // 播放成功后，如果需要淡入，触发 transition
        if (fadeInDuration > 0 && this.video) {
          this.video.style.opacity = '1';
        }
      }).catch((err) => {
        console.error('[VideoScreen] play rejected:', err);
        // 重试一次
        setTimeout(() => {
          this.video?.play().catch((err2) => {
            console.error('[VideoScreen] retry also failed:', err2);
            this.hide();
            safeComplete();
          });
        }, 100);
      });
    }
  }

  /**
   * 隐藏视频屏幕
   */
  hide(): void {
    if (this.video) {
      this.video.pause();
      this.video.src = '';
      this.video = null;
    }
    this.container.style.display = 'none';
    this.container.innerHTML = '';
  }
}
