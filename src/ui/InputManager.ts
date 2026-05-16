import { Level } from '@/game/Level';
import { SceneManager } from '@/core/Scene';
import type { ZoneOverlay } from '@/ui/ZoneOverlay';

export class InputManager {
  private pointerDown = { x: 0, y: 0 };

  constructor(
    private readonly sceneManager: SceneManager,
    private readonly getLevel: () => Level,
    private readonly overlayRoots: HTMLElement[],
    private readonly zoneOverlay?: ZoneOverlay,
    private readonly isEnabled: () => boolean = () => true,
  ) {
    const canvas = this.sceneManager.renderer.domElement;
    canvas.addEventListener('pointerdown', (event) => {
      this.pointerDown = { x: event.clientX, y: event.clientY };
    });

    canvas.addEventListener('click', (event) => {
      if (!this.isEnabled()) {
        return;
      }

      const moved = Math.hypot(event.clientX - this.pointerDown.x, event.clientY - this.pointerDown.y);
      if (moved > 6) {
        return;
      }

      const level = this.getLevel();
      const hits = this.sceneManager.raycastObjects(event.clientX, event.clientY, level.pickables);
      if (hits.length > 0) {
        level.selectObjectFromMesh(hits[0].object);
        return;
      }

      if (this.zoneOverlay && this.zoneOverlay.isInMoveZone(event.clientX, event.clientY)) {
        level.selectLeftmostObject();
        return;
      }

      level.setSelectedObject(null);

      if (this.zoneOverlay && !this.zoneOverlay.isInClickZone(event.clientX, event.clientY)) {
        return;
      }

      const wallPoint = this.sceneManager.intersectWall(event.clientX, event.clientY);
      if (wallPoint) {
        level.attemptMove(wallPoint);
      }
    });

    window.addEventListener('keydown', (event) => {
      if (!this.isEnabled()) {
        return;
      }

      if (this.isTypingIntoOverlay(event.target)) {
        return;
      }

      const level = this.getLevel();

      if (event.code === 'Tab') {
        event.preventDefault();
        level.cycleSelection();
      }

      if (event.code === 'KeyR') {
        level.resetSelectedObject();
      }

      if (event.code === 'KeyH') {
        level.showHint();
      }

      if (event.code === 'Escape') {
        level.togglePause();
      }
    });
  }

  private isTypingIntoOverlay(target: EventTarget | null): boolean {
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    return this.overlayRoots.some((root) => root.contains(target));
  }
}
