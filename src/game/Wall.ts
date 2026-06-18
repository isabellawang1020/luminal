import * as THREE from 'three';
import { audioManager } from '@/audio/SfxManager';
import { a } from '@/utils/asset';

export interface WallData {
  /** 墙中心 X */
  x: number;
  /** 墙中心 Y */
  y: number;
  /** 宽度 */
  width: number;
  /** 高度 */
  height: number;
}

// 共享墙纹理（首次加载后所有 Wall 复用，单张图拉伸覆盖）
let sharedWallTexture: THREE.Texture | null = null;
function getWallTexture(): THREE.Texture {
  if (!sharedWallTexture) {
    sharedWallTexture = new THREE.TextureLoader().load(a('/textures/wall.webp'));
    sharedWallTexture.wrapS = THREE.ClampToEdgeWrapping;
    sharedWallTexture.wrapT = THREE.ClampToEdgeWrapping;
    sharedWallTexture.colorSpace = THREE.SRGBColorSpace;
    sharedWallTexture.minFilter = THREE.LinearMipmapLinearFilter;
    sharedWallTexture.magFilter = THREE.LinearFilter;
    sharedWallTexture.anisotropy = 4;
  }
  return sharedWallTexture;
}

/**
 * 「朦胧雾墙」障碍物：
 * - 视觉：单张纹理拉伸铺满（支持超大宽高）
 * - 物理：阻挡 BFS 寻路（占用 platformMask=0 + 标记墙 cell 在 walkableMask 内强制为 0）
 * - 影子：物体投影到墙的 X/Y 范围内的部分会被 ShadowObject.getYRangeAtX 屏蔽
 */
export class Wall {
  public readonly mesh: THREE.Mesh;
  public readonly cracks: THREE.Group; // 裂纹/碎片占位组（可放粒子）
  private removed = false;

  constructor(public readonly data: WallData) {
    const geometry = new THREE.PlaneGeometry(data.width, data.height);
    const material = new THREE.MeshBasicMaterial({
      map: getWallTexture(),
      transparent: true,
      opacity: 0.95,
      depthTest: false,
      alphaTest: 0.02,
      side: THREE.DoubleSide,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(data.x, data.y, 0.18);
    this.mesh.renderOrder = 4;
    this.cracks = new THREE.Group();
  }

  get isRemoved(): boolean {
    return this.removed;
  }

  /** 触发"爆炸消失"效果：大量飞散粒子 + 闪光 + 冲击波 + 墙裂开 */
  explode(onDone?: () => void): void {
    if (this.removed) {
      onDone?.();
      return;
    }
    this.removed = true;

    // 播放墙爆炸音效
    audioManager.play('wall');

    type Particle = {
      mesh: THREE.Mesh | THREE.Group;
      vx: number; vy: number;
      rotSpeed: number;
      lifeFactor: number; // 1 = 慢，2 = 快消失
      isGlow?: boolean;
      materials: THREE.MeshBasicMaterial[]; // 所有需要更新 opacity 的材质
      baseOpacities?: number[]; // 材质初始 opacity（用于比例淡出）
    };
    const particles: Particle[] = [];

    // 辅助：给粒子 Group 内部所有材质设置相同比例 opacity
    const setParticleOpacity = (p: Particle, opacity: number): void => {
      p.materials.forEach((mat, i) => {
        const base = p.baseOpacities?.[i] ?? 1;
        mat.opacity = opacity * base;
      });
    };

    // 1) 圆形粒子（40个 #c5a188 发光小球）
    for (let i = 0; i < 40; i += 1) {
      const size = 0.2 + Math.random() * 0.3;
      const baseColor = new THREE.Color('#c5a188');
      const variation = 0.05 + Math.random() * 0.1;
      const color = baseColor.clone().offsetHSL(0, 0, variation * 0.5);
      const glowColor = baseColor.clone().offsetHSL(0, 0, variation);
      
      const coreMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.5,
        depthTest: false,
      });
      const pMesh = new THREE.Mesh(
        new THREE.CircleGeometry(size, 24),
        coreMat,
      );
      
      const glowMat = new THREE.MeshBasicMaterial({
        color: glowColor,
        transparent: true,
        opacity: 0.2,
        depthTest: false,
        blending: THREE.AdditiveBlending,
      });
      const pGlow = new THREE.Mesh(
        new THREE.CircleGeometry(size * 1.4, 24),
        glowMat,
      );
      
      const container = new THREE.Group();
      container.add(pMesh);
      container.add(pGlow);
      container.position.set(
        this.data.x + (Math.random() - 0.5) * this.data.width * 0.8,
        this.data.y + (Math.random() - 0.5) * this.data.height * 0.8,
        0.21,
      );
      container.renderOrder = 5;
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 7;
      particles.push({
        mesh: container,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed + 1.5,
        rotSpeed: (Math.random() - 0.5) * 6,
        lifeFactor: 1 + Math.random() * 0.5,
        materials: [coreMat, glowMat],
        baseOpacities: [0.5, 0.2],
      });
      this.cracks.add(container);
    }

    // 2) 高亮光粒子（15 个亮黄/橙色发光小球，模拟内部能量）
    for (let i = 0; i < 15; i += 1) {
      const size = 0.2 + Math.random() * 0.2;
      const hue = 0.09 + Math.random() * 0.05; // 黄橙色
      const color = new THREE.Color().setHSL(hue, 0.9, 0.65);
      const glowMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.7,
        depthTest: false,
        blending: THREE.AdditiveBlending,
      });
      const pMesh = new THREE.Mesh(
        new THREE.CircleGeometry(size, 16),
        glowMat,
      );
      pMesh.position.set(
        this.data.x + (Math.random() - 0.5) * this.data.width * 0.5,
        this.data.y + (Math.random() - 0.5) * this.data.height * 0.5,
        0.22,
      );
      pMesh.renderOrder = 6;
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 6;
      particles.push({
        mesh: pMesh,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        rotSpeed: 0,
        lifeFactor: 1.5 + Math.random() * 0.5,
        isGlow: true,
        materials: [glowMat],
        baseOpacities: [0.7],
      });
      this.cracks.add(pMesh);
    }

    // 3) 中心冲击波（一个圆环从中心扩散）
    const shockwave = new THREE.Mesh(
      new THREE.RingGeometry(0.1, 0.3, 32),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#fff5d6'),
        transparent: true,
        opacity: 0.6,
        depthTest: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      }),
    );
    shockwave.position.set(this.data.x, this.data.y, 0.23);
    shockwave.renderOrder = 7;
    this.cracks.add(shockwave);

    // 4) 中心闪光（一个大圆，瞬时炸开后快速消失）
    const flash = new THREE.Mesh(
      new THREE.CircleGeometry(Math.max(this.data.width, this.data.height) * 0.7, 32),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#ffffff'),
        transparent: true,
        opacity: 0.5,
        depthTest: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    flash.position.set(this.data.x, this.data.y, 0.24);
    flash.renderOrder = 8;
    this.cracks.add(flash);

    // 动画 tick
    const startTime = performance.now();
    const duration = 1500; // ms（更长持续时间）
    const wallOriginalScale = this.mesh.scale.clone();
    const tick = () => {
      const now = performance.now();
      const elapsed = (now - startTime) / duration;
      if (elapsed >= 1) {
        this.mesh.visible = false;
        // 清理所有粒子（递归处理 Group 子元素 + 所有材质引用）
        for (const p of particles) {
          // dispose 所有材质
          for (const mat of p.materials) {
            mat.dispose();
          }
          // 递归清理 Group 内部几何体
          if (p.mesh instanceof THREE.Group) {
            for (const child of p.mesh.children) {
              (child as THREE.Mesh).geometry?.dispose();
            }
          } else {
            (p.mesh as THREE.Mesh).geometry?.dispose();
          }
          this.cracks.remove(p.mesh);
        }
        shockwave.geometry.dispose();
        (shockwave.material as THREE.Material).dispose();
        this.cracks.remove(shockwave);
        flash.geometry.dispose();
        (flash.material as THREE.Material).dispose();
        this.cracks.remove(flash);
        onDone?.();
        return;
      }
      const dt = 1 / 60;

      // 墙：前 20% 时间剧烈震动，然后撕裂消失
      if (elapsed < 0.2) {
        const shake = (1 - elapsed / 0.2) * 0.1;
        this.mesh.position.x = this.data.x + (Math.random() - 0.5) * shake;
        this.mesh.position.y = this.data.y + (Math.random() - 0.5) * shake;
      } else {
        const k = Math.max(0, 1 - (elapsed - 0.2) / 0.5);
        this.mesh.scale.set(wallOriginalScale.x * k, wallOriginalScale.y * k, 1);
        (this.mesh.material as THREE.MeshBasicMaterial).opacity = 0.95 * k;
      }

      // 粒子：飞散 + 重力 + 旋转 + 淡出
      for (const p of particles) {
        p.mesh.position.x += p.vx * dt;
        p.mesh.position.y += p.vy * dt;
        p.vy -= 8 * dt; // 重力
        p.vx *= 0.99;   // 空气阻力
        p.vy *= 0.99;
        p.mesh.rotation.z += p.rotSpeed * dt;
        const op = Math.max(0, 1 - elapsed * p.lifeFactor);
        setParticleOpacity(p, op);
        // 光粒子额外缩小
        if (p.isGlow) {
          const s = Math.max(0.1, 1 - elapsed * 1.2);
          p.mesh.scale.set(s, s, 1);
        }
      }

      // 冲击波：快速扩张 + 淡出（前 60%）
      const shockProgress = Math.min(1, elapsed / 0.6);
      const shockScale = 1 + shockProgress * 8;
      shockwave.scale.set(shockScale, shockScale, 1);
      (shockwave.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 1 - shockProgress);

      // 中心闪光：前 15% 时间从大到 0 快速消失
      const flashProgress = Math.min(1, elapsed / 0.15);
      const flashScale = 1 + flashProgress * 1.5;
      flash.scale.set(flashScale, flashScale, 1);
      (flash.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 1 - flashProgress);

      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}
