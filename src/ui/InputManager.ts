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

      // 优先：点击物体本身 → 选中物体
      const hits = this.sceneManager.raycastObjects(event.clientX, event.clientY, level.pickables);
      if (hits.length > 0) {
        level.selectObjectFromMesh(hits[0].object);
        return;
      }

      // 取点击的世界坐标
      const wallPoint = this.sceneManager.intersectWall(event.clientX, event.clientY);
      if (!wallPoint) return;

      // 点击位置在最低平台顶面以上
      if (wallPoint.y >= level.platformTopY) {
        if (level.isWalkerMoveLocked) {
          // 移动锁定：忽略，保持物体选中
          return;
        }
        if (level.isWalkerSelected) {
          // walker 已选中（多角色组场景）：判断点击在哪个组
          const hitIdx = level.getClickedGroupIndex(wallPoint.x, wallPoint.y);
          if (hitIdx >= 0 && hitIdx !== level.currentGroupIndex) {
            // 命中其他组 → 切换到该组
            level.switchToGroup(hitIdx);
            level.selectWalker();
            return;
          }
          // 命中当前组或未命中 → 尝试移动
          level.attemptMove(wallPoint);
        } else {
          // walker 未选中：点击任意组 → 切换到该组并选中 walker
          const hitIdx = level.getClickedGroupIndex(wallPoint.x, wallPoint.y);
          if (hitIdx >= 0) {
            if (hitIdx !== level.currentGroupIndex) {
              level.switchToGroup(hitIdx);
            }
            level.selectWalker();
            return;
          }
          // 没有物体选中 或 桥梁已连通 → 选中角色
          if (!level.selectedObject || level.isBridgeConnected) {
            level.selectWalker();
          }
        }
        return;
      }

      // 点击位置在平台以下
      // 如果已有物体选中 → 保持当前选中（不强制切到最左侧）
      // 如果没有物体选中 → 选中最左侧可见物体（进入物体操作模式）
      if (!level.selectedObject) {
        level.selectLeftmostObject();
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
