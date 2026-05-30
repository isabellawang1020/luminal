import { Level, type LevelConfig } from '@/game/Level';
import type { SceneManager } from '@/core/Scene';
import type { HUD } from '@/ui/HUD';

export interface ChapterConfig {
  levels: LevelConfig[];
}

interface OverlayFader {
  fadeOut(duration: number): void;
  fadeIn(duration: number): void;
}

export class ChapterManager {
  private currentIndex = 0;
  private currentLevel: Level;
  private nextLevel: Level | null = null;
  private transitionState: 'idle' | 'sliding' | 'settling' = 'idle';
  private transitionTimer = 0;
  private overlayFader: OverlayFader | null = null;
  private deferredTransition = false;
  public onLevelCreated?: (level: Level) => void;
  public onLevelActivated?: (index: number) => void;

  private readonly SETTLE_DELAY = 0.2;
  private readonly FADE_DURATION = 0.5;
  private readonly SLIDE_DURATION = 1.2;
  private readonly SLIDE_DISTANCE = 20;

  constructor(
    public readonly sceneManager: SceneManager,
    private readonly hud: HUD,
    private readonly chapter: ChapterConfig,
  ) {
    if (chapter.levels.length === 0) {
      throw new Error('ChapterManager 至少需要一个关卡');
    }

    this.currentLevel = this.createLevel(this.currentIndex);
  }

  get activeLevel(): Level {
    return this.currentLevel;
  }

  get isTransitioning(): boolean {
    return this.transitionState !== 'idle';
  }

  get levelCount(): number {
    return this.chapter.levels.length;
  }

  get currentLevelIndex(): number {
    return this.currentIndex;
  }

  getLevelName(index: number): string {
    return this.chapter.levels[index]?.name ?? `Level ${index}`;
  }

  jumpToLevel(index: number): void {
    if (index < 0 || index >= this.chapter.levels.length || this.transitionState !== 'idle') return;
    this.currentLevel.dispose();
    this.nextLevel?.dispose();
    this.nextLevel = null;
    this.currentIndex = index;
    this.currentLevel = this.createLevel(index);
    this.transitionState = 'idle';
    this.transitionTimer = 0;
    this.hud.hideComplete();
    this.hud.setPaused(false);
    this.overlayFader?.fadeIn(0.3);
    this.onLevelActivated?.(this.currentIndex);
  }

  setOverlayFader(overlayFader: OverlayFader): void {
    this.overlayFader = overlayFader;
  }

  update(deltaTime: number): void {
    this.currentLevel.update(deltaTime);

    if (!this.nextLevel) {
      return;
    }

    if (this.transitionState === 'settling') {
      this.transitionTimer += deltaTime;
      if (this.transitionTimer >= this.SETTLE_DELAY) {
        this.transitionState = 'sliding';
        this.transitionTimer = 0;
      }
      return;
    }

    if (this.transitionState === 'sliding') {
      this.transitionTimer += deltaTime;
      const progress = Math.min(1, this.transitionTimer / this.SLIDE_DURATION);
      this.currentLevel.rootGroup.position.x = -this.SLIDE_DISTANCE * progress;
      this.nextLevel.rootGroup.position.x = this.SLIDE_DISTANCE * (1 - progress);

      if (progress >= 1) {
        this.finishTransition();
      }
    }
  }

  private createLevel(index: number): Level {
    const level = new Level(this.sceneManager, this.hud, this.chapter.levels[index], () => this.handleLevelComplete());
    this.onLevelCreated?.(level);
    return level;
  }

  private handleLevelComplete(): void {
    // 延迟过渡模式：不做 SLIDE，由外部（main.ts）控制过渡时机（用于视频/叙事）
    if (this.deferredTransition) {
      this.deferredTransition = false;
      this.currentLevel.setSelectedObject(null);
      this.nextLevel = this.createLevel(this.currentIndex + 1);
      this.nextLevel.rootGroup.position.x = this.SLIDE_DISTANCE;
      this.nextLevel.setVisible(false);
      // 不启动 SLIDE，transitionState 保持 'idle' 以避免 update 中的 SLIDE 逻辑
      this.transitionState = 'idle';
      this.transitionTimer = 0;
      return;
    }

    this.currentLevel.setVisible(false);

    if (this.currentIndex >= this.chapter.levels.length - 1) {
      this.hud.showComplete();
      return;
    }

    this.currentLevel.setSelectedObject(null);
    this.nextLevel = this.createLevel(this.currentIndex + 1);
    this.nextLevel.rootGroup.position.x = this.SLIDE_DISTANCE;
    this.nextLevel.setVisible(false);
    this.transitionState = 'settling';
    this.transitionTimer = 0;
    this.sceneManager.setClipping(true);

    this.overlayFader?.fadeOut(this.FADE_DURATION);
  }

  /**
   * 延迟过渡：让下一个关卡完成时不启动 SLIDE 动画，
   * 由外部（main.ts）控制过渡时机（视频/叙事流程专用）。
   */
  public deferTransitionToNextLevel(): void {
    this.deferredTransition = true;
  }

  /**
   * 外部（main.ts）在视频/叙事后调用：
   * 直接将 nextLevel 切换为 currentLevel（无 SLIDE），触发 onLevelActivated。
   */
  public completeDeferredTransition(): void {
    const incomingLevel = this.nextLevel;
    if (!incomingLevel) {
      return;
    }

    const outgoingLevel = this.currentLevel;
    outgoingLevel.dispose();

    incomingLevel.rootGroup.position.x = 0;
    incomingLevel.setVisible(true);
    incomingLevel.finalizeAdjustment();

    this.currentIndex += 1;
    this.currentLevel = incomingLevel;
    this.nextLevel = null;
    this.transitionState = 'idle';
    this.transitionTimer = 0;

    this.onLevelActivated?.(this.currentIndex);
  }

  private finishTransition(): void {
    const outgoingLevel = this.currentLevel;
    const incomingLevel = this.nextLevel;

    if (!incomingLevel) {
      return;
    }

    outgoingLevel.dispose();
    incomingLevel.rootGroup.position.x = 0;
    incomingLevel.setVisible(true);
    incomingLevel.finalizeAdjustment(); // 确保影子在切换完成时刷新
    this.sceneManager.setClipping(false);

    this.currentIndex += 1;
    this.currentLevel = incomingLevel;
    this.nextLevel = null;
    this.transitionState = 'idle';
    this.transitionTimer = 0;
    this.onLevelActivated?.(this.currentIndex);

    this.overlayFader?.fadeIn(this.FADE_DURATION);
  }
}
