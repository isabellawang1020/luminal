/**
 * BGM 播放管理器。
 *
 * 设计：
 * - 任意时刻只有一轨主 BGM 在播放，按 ID（'BGM-00' ~ 'BGM-06'）切换
 * - 支持渐入 / 渐出 / 临时降音量（用于叙事页过渡）
 * - 响应浏览器 autoplay 限制：unlock() 在用户首次交互后调用，启动当前队列里的播放
 */
export class BgmManager {
  private readonly audios = new Map<string, HTMLAudioElement>();
  private currentId: string | null = null;
  private targetVolume = 1.0;
  /** 主音量上限（用户可调；当前固定 1，留接口） */
  private masterVolume = 0.5;
  /** 渐变状态 */
  private fadeTimer: number | null = null;
  /** 是否已被用户解锁（用户首次交互后置 true） */
  private unlocked = false;
  /** 解锁前排队的"想播放"操作 */
  private pendingId: string | null = null;
  /** 用户是否已手动关闭 BGM */
  private muted = false;

  /** 预加载所有 BGM（不立即播放） */
  preload(ids: string[], urlForId: (id: string) => string): void {
    for (const id of ids) {
      if (this.audios.has(id)) continue;
      const a = new Audio(urlForId(id));
      a.loop = true;
      a.preload = 'auto';
      a.volume = 0;
      this.audios.set(id, a);
    }
  }

  /** 用户首次交互后调用：若 autoplay 之前被拦截，此时补播 */
  unlock(): void {
    if (this.unlocked) return;
    this.unlocked = true;
    if (this.pendingId !== null) {
      const id = this.pendingId;
      this.pendingId = null;
      // 重新尝试播放（不重置 currentId，因为已经被设过）
      const audio = this.audios.get(id);
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch((err) => {
          console.warn(`[BgmManager] play ${id} failed after unlock:`, err);
        });
        this.fadeTo(this.targetVolume * this.masterVolume, 0.8, audio);
      }
    }
  }

  /** 切换到指定 BGM（带渐变） */
  crossfadeTo(id: string, durationSec: number = 1.0): void {
    if (this.currentId === id) {
      // 同一首：若被降音量则恢复（除非 muted）
      if (!this.muted) {
        this.fadeTo(this.targetVolume * this.masterVolume, durationSec);
      }
      return;
    }

    const oldId = this.currentId;
    this.currentId = id;
    const next = this.audios.get(id);
    if (!next) {
      console.warn(`[BgmManager] no audio for ${id}`);
      return;
    }

    // 如果用户已关闭 BGM，新曲目保持静音，不播放
    if (this.muted) {
      next.volume = 0;
      next.currentTime = 0;
      const oldAudio = oldId ? this.audios.get(oldId) ?? null : null;
      if (oldAudio) {
        oldAudio.volume = 0;
        oldAudio.pause();
      }
      return;
    }

    // 启动新轨（从 0 音量开始）
    next.volume = 0;
    next.currentTime = 0;
    // 尝试播放：autoplay 被拦截时记录为 pendingId，等 unlock 再播
    next.play()
      .then(() => {
        this.unlocked = true; // 播成功了，标记已解锁
      })
      .catch(() => {
        this.pendingId = id;
      });

    // 同时渐出旧轨 + 渐入新轨
    const oldAudio = oldId ? this.audios.get(oldId) ?? null : null;
    this.startFade(oldAudio, next, this.targetVolume * this.masterVolume, durationSec);
  }

  /** 渐变到指定音量（targetMul ∈ [0, 1]，相对 masterVolume × targetVolume 系数）
   *  典型用例：叙事页时设 0.2（降到 20%），叙事结束恢复 1.0
   */
  setVolumeMultiplier(targetMul: number, durationSec: number = 0.6): void {
    this.targetVolume = targetMul;
    // 如果用户已关闭 BGM，不改变音量
    if (this.muted) return;
    const audio = this.currentId ? this.audios.get(this.currentId) ?? null : null;
    this.fadeTo(targetMul * this.masterVolume, durationSec, audio);
  }

  /** 仅渐变当前音轨到指定音量 */
  private fadeTo(targetVol: number, durationSec: number, audio?: HTMLAudioElement | null): void {
    const target = audio ?? (this.currentId ? this.audios.get(this.currentId) ?? null : null);
    if (!target) return;
    this.startFade(null, target, targetVol, durationSec);
  }

  private startFade(
    fadeOut: HTMLAudioElement | null,
    fadeIn: HTMLAudioElement | null,
    targetVol: number,
    durationSec: number,
  ): void {
    if (this.fadeTimer !== null) {
      clearInterval(this.fadeTimer);
      this.fadeTimer = null;
    }
    const startVolOut = fadeOut?.volume ?? 0;
    const startVolIn  = fadeIn?.volume ?? 0;
    const startTime = performance.now();
    const dur = Math.max(0.05, durationSec) * 1000;
    this.fadeTimer = window.setInterval(() => {
      const elapsed = (performance.now() - startTime) / dur;
      const t = Math.min(1, elapsed);
      if (fadeOut) {
        fadeOut.volume = Math.max(0, startVolOut * (1 - t));
      }
      if (fadeIn) {
        fadeIn.volume = startVolIn + (targetVol - startVolIn) * t;
      }
      if (t >= 1) {
        // 完成
        if (this.fadeTimer !== null) {
          clearInterval(this.fadeTimer);
          this.fadeTimer = null;
        }
        if (fadeOut && fadeOut !== fadeIn) {
          fadeOut.pause();
          fadeOut.currentTime = 0;
          fadeOut.volume = 0;
        }
      }
    }, 16);
  }

  /** 立即静音停止所有音频（关卡结束时可用） */
  stopAll(): void {
    if (this.fadeTimer !== null) {
      clearInterval(this.fadeTimer);
      this.fadeTimer = null;
    }
    for (const a of this.audios.values()) {
      a.pause();
      a.volume = 0;
      a.currentTime = 0;
    }
    this.currentId = null;
  }

  /** 切换静音状态（用于 UI 按钮） */
  setMuted(muted: boolean): void {
    this.muted = muted;
    if (muted) {
      // 静音：快速淡出到 0
      const audio = this.currentId ? this.audios.get(this.currentId) ?? null : null;
      if (audio) {
        this.fadeTo(0, 0.3, audio);
      }
    } else {
      // 取消静音：恢复到目标音量
      const audio = this.currentId ? this.audios.get(this.currentId) ?? null : null;
      if (audio) {
        this.fadeTo(this.targetVolume * this.masterVolume, 0.3, audio);
      }
    }
  }
}
