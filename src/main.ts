import { SceneManager } from '@/core/Scene';
import { ChapterManager } from '@/game/ChapterManager';
import { chapter1Level2 } from '@/levels/chapter1_level2';
import { tutorial3 } from '@/levels/tutorial3';
import { HUD } from '@/ui/HUD';
import { InputManager } from '@/ui/InputManager';
import { ObjectControls } from '@/ui/ObjectControls';
import { ZoneOverlay } from '@/ui/ZoneOverlay';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('未找到应用挂载点 #app');
}

app.style.position = 'relative';
app.style.width = '100%';
app.style.height = '100%';

const zoneLayer = document.createElement('div');
zoneLayer.style.position = 'absolute';
zoneLayer.style.inset = '0';
zoneLayer.style.pointerEvents = 'none';
zoneLayer.style.zIndex = '0';
app.append(zoneLayer);

const sceneLayer = document.createElement('div');
sceneLayer.style.position = 'absolute';
sceneLayer.style.inset = '0';
sceneLayer.style.zIndex = '1';
app.append(sceneLayer);

const uiLayer = document.createElement('div');
uiLayer.style.position = 'absolute';
uiLayer.style.inset = '0';
uiLayer.style.pointerEvents = 'none';
uiLayer.style.zIndex = '2';
app.append(uiLayer);

const sceneManager = new SceneManager(sceneLayer);
const hud = new HUD(uiLayer);
const chapterManager = new ChapterManager(sceneManager, hud, {
  levels: [tutorial3, chapter1Level2],
});

const controls = new ObjectControls(uiLayer, {
  onRotateX: (delta) => chapterManager.activeLevel.rotateSelected(delta, 0),
  onRotateY: (delta) => chapterManager.activeLevel.rotateSelected(0, delta),
  onRailChange: (value) => chapterManager.activeLevel.setSelectedRail(value),
  onRailChangeY: (delta) => chapterManager.activeLevel.moveSelectedY(delta),
  onBeginAdjust: () => undefined,
  onEndAdjust: () => chapterManager.activeLevel.finalizeAdjustment(),
});

const zoneOverlay = new ZoneOverlay(sceneManager, tutorial3, zoneLayer, controls.panel);
chapterManager.setOverlayFader(zoneOverlay);
hud.bindResume(() => chapterManager.activeLevel.resume());

sceneManager.removeWallBackground();

new InputManager(sceneManager, () => chapterManager.activeLevel, [controls.root, hud.root], zoneOverlay, () => !chapterManager.isTransitioning);

const debugPanel = document.createElement('div');
Object.assign(debugPanel.style, {
  position: 'absolute',
  top: '24px',
  right: '24px',
  padding: '12px 16px',
  borderRadius: '10px',
  background: 'rgba(0, 0, 0, 0.75)',
  color: '#00ff88',
  fontFamily: 'monospace',
  fontSize: '12px',
  lineHeight: '1.7',
  pointerEvents: 'auto',
  display: 'block',
  zIndex: '9999',
  minWidth: '260px',
  whiteSpace: 'pre',
});

const debugInfoText = document.createElement('div');
debugInfoText.style.pointerEvents = 'none';
debugPanel.append(debugInfoText);

const levelSelectContainer = document.createElement('div');
Object.assign(levelSelectContainer.style, {
  marginTop: '10px',
  paddingTop: '8px',
  borderTop: '1px solid rgba(0, 255, 136, 0.3)',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
});

for (let i = 0; i < chapterManager.levelCount; i += 1) {
  const btn = document.createElement('button');
  btn.textContent = `${i + 1}: ${chapterManager.getLevelName(i)}`;
  Object.assign(btn.style, {
    background: 'rgba(0, 255, 136, 0.15)',
    border: '1px solid rgba(0, 255, 136, 0.4)',
    borderRadius: '4px',
    color: '#00ff88',
    fontFamily: 'monospace',
    fontSize: '11px',
    padding: '4px 8px',
    cursor: 'pointer',
    pointerEvents: 'auto',
  });
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    chapterManager.jumpToLevel(i);
  });
  levelSelectContainer.append(btn);
}
debugPanel.append(levelSelectContainer);
app.append(debugPanel);

window.addEventListener('keydown', (e) => {
  if (e.code === 'KeyD') {
    debugPanel.style.display = debugPanel.style.display === 'none' ? 'block' : 'none';
  }
});

window.addEventListener('resize', () => zoneOverlay.updateLayout());

let previousTime = performance.now();

function tick(now: number): void {
  const deltaTime = Math.min(0.033, (now - previousTime) / 1000);
  previousTime = now;

  chapterManager.update(deltaTime);

  const activeLevel = chapterManager.activeLevel;
  controls.setObject(chapterManager.isTransitioning ? null : activeLevel.selectedObject);
  controls.syncSlider();
  zoneOverlay.updateLayout();

  const anchor = chapterManager.isTransitioning ? null : activeLevel.selectedAnchor;
  if (anchor) {
    controls.updateScreenPosition(sceneManager.worldToScreen(anchor));
  }

  if (debugPanel.style.display !== 'none') {
    const info = activeLevel.getDebugInfo();
    debugInfoText.textContent = Object.entries(info).map(([k, v]) => `${k}: ${v}`).join('\n');
  }

  sceneManager.render();
  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
