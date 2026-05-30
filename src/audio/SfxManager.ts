/**
 * 音效管理器 - 用于播放短促的游戏音效
 */
export class SfxManager {
  private audioContext: AudioContext | null = null;
  private audioBuffers: Map<string, AudioBuffer> = new Map();
  private masterVolume = 1.0;
  private unlocked = false;

  constructor() {
    // AudioContext 需要用户交互后才能初始化
  }

  /**
   * 解锁音频（需要在用户交互事件中调用）
   * 这会恢复 AudioContext，使其能够真正播放音频
   */
  unlock(): void {
    if (this.unlocked) return;

    try {
      // 如果在 preload 阶段已创建但被挂起，则恢复它
      if (!this.audioContext) {
        this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      this.audioContext.resume();
      this.unlocked = true;
      console.log('[SfxManager] Audio context unlocked');
    } catch (err) {
      console.error('[SfxManager] Failed to create AudioContext:', err);
    }
  }

  /**
   * 预加载音效文件
   */
  async preload(sfxIds: string[]): Promise<void> {
    // 确保 AudioContext 已创建（如果还没，先创建一个但未解锁状态）
    if (!this.audioContext) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.audioContext = new AudioContextClass();
      console.log('[SfxManager] AudioContext created for preloading');
    }

    for (const id of sfxIds) {
      if (this.audioBuffers.has(id)) continue;

      try {
        const response = await fetch(`/sound/${id}.m4a`);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
        this.audioBuffers.set(id, audioBuffer);
        console.log(`[SfxManager] Loaded: ${id}`);
      } catch (err) {
        console.error(`[SfxManager] Failed to load ${id}:`, err);
      }
    }
  }

  /**
   * 播放音效
   * @param id 音效ID（不含扩展名）
   * @param volume 音量（0-1），默认使用 masterVolume
   */
  play(id: string, volume?: number): void {
    if (!this.audioContext) {
      console.warn('[SfxManager] AudioContext not available');
      return;
    }

    // 确保 AudioContext 处于运行状态
    if (this.audioContext.state === 'suspended' && this.unlocked) {
      this.audioContext.resume();
    }

    const buffer = this.audioBuffers.get(id);
    if (!buffer) {
      console.warn(`[SfxManager] Sound not loaded: ${id}`);
      return;
    }

    const gainNode = this.audioContext.createGain();
    gainNode.gain.value = (volume ?? this.masterVolume) * this.masterVolume;
    gainNode.connect(this.audioContext.destination);

    const source = this.audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(gainNode);
    source.start(0);

    source.onended = () => {
      source.disconnect();
      gainNode.disconnect();
    };
  }

  /**
   * 设置主音量
   */
  setMasterVolume(volume: number): void {
    this.masterVolume = Math.max(0, Math.min(1, volume));
  }

  /**
   * 获取当前主音量
   */
  getMasterVolume(): number {
    return this.masterVolume;
  }
}

// 全局单例
export const audioManager = new SfxManager();
