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
    return new Level(this.sceneManager, this.hud, this.chapter.levels[index], () => this.handleLevelComplete());
  }

  private handleLevelComplete(): void {
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

  private finishTransition(): void {
    const outgoingLevel = this.currentLevel;
    const incomingLevel = this.nextLevel;

    if (!incomingLevel) {
      return;
    }

    outgoingLevel.dispose();
    incomingLevel.rootGroup.position.x = 0;
    incomingLevel.setVisible(true);

    this.currentIndex += 1;
    this.currentLevel = incomingLevel;
    this.nextLevel = null;
    this.transitionState = 'idle';
    this.transitionTimer = 0;
    this.sceneManager.setClipping(false);
    this.overlayFader?.fadeIn(this.FADE_DURATION);
  }
}
