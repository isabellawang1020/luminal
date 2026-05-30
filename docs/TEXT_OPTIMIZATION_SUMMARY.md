# Luminal 游戏文字优化总结

## 优化概述

本次优化基于"光影+剪紙+温馨"的游戏主题，对游戏内所有 UI 文本进行了系统性优化。优化原则：
1. **光影意象贯穿** - 用"光""影""路"等意象替代生硬指令
2. **诗意留白** - 剪紙风格讲究意境，不需把话说满
3. **人生阶段呼应** - 每个章节的文字应匹配人生阶段的情感
4. **中英并重** - 英文不是直译，而是同样优美的创作

## 已优化的文字内容

### 1. LevelConfig 提示文字

#### hintText (关卡引导)
| 章节 | 中文 | English |
|------|------|---------|
| Tutorial | 向上移动，让影子铺出第一道光路 | Lift upward, and let shadows lay the first beam of light |
| 1-2 | 旋转吧，让影子跨越那道空隙 | Turn it — let the shadow bridge the gap |
| 1-3 | 移动与旋转，影子会为你铺路 | Move and turn — the shadow will pave your way |
| 2-1 | 换个角度，光影自会引路 | A new angle — light and shadow will guide you |
| 2-2 | 点选不同的物件，寻找你的光路 | Click objects to switch — find your path of light |
| 3-1 | 长路漫漫，先迈出第一步 | A long road awaits — take the first step |
| 3-2 | 前行的路上，总有忠诚的影子相随 | On the road ahead, faithful shadows walk beside you |
| 4-1 | 看似遥远，路上却总有微光守护 | Seems far away, but soft light guards the way |
| 4-2 | 点选角色切换；让两处机关同时亮起 | Switch characters — light both buttons at once |
| 5-1 | 裂缝之处，光自会渗入 | Where light breaks through — where life begins anew |
| 5-2 | 前路未知，但心中有光，便不会迷失方向 | The road ahead is unknown, but those who carry light within never lose their way |
| 6-1 | 让影子，轻轻覆盖时光的缝隙 | Let shadows gently fill the cracks of time |

#### bridgeHintText
| 中文 | English |
|------|---------|
| 光路已铺就，点选人物前行 | The light-path is set. Click a character to walk |

#### walkerSelectedHintText
| 中文 | English |
|------|---------|
| 点选门扉，引导角色前往终点 | Click the gate — guide them to the end |

#### transitHintText
| 中文 | English |
|------|---------|
| 继续铺路，带着忠诚的伙伴向前 | Keep paving the way — bring your loyal companion along |
| 点选行李，可再次调整位置 | Click the suitcase to reposition it |

#### wallRemovedHintText
| 中文 | English |
|------|---------|
| 每个人都是光的一部分，少了谁，光路都不完整 | Each of us is a piece of the light — without one, the path is incomplete |

### 2. 叙事文字（main.ts）

#### 第一章叙事
| 中文 | English |
|------|---------|
| 你睁开眼，看见的第一件事——是光。 | The first thing you ever saw was light. |

#### 第二章叙事
| 中文 | English |
|------|---------|
| 你学会了走路。 | You learned to walk. |
| 影子，也学会了陪伴。 | And your shadow learned to stay. |

#### 第三章叙事
| 中文 | English |
|------|---------|
| 有天你忽然好奇：光，究竟从哪里来？ | One day, you wondered: where does light truly come from? |
| 也是那一天，路上多了一个同路人。 | That very day, someone joined you on the road. |

#### 第四章叙事
| 中文 | English |
|------|---------|
| 你背上行囊，走进了更大的世界。 | You packed your burdens, and stepped into a wider world. |
| 光在远方，你在身旁，中间是一段漫长却美丽的路。 | Light far away, you here beside me — and in between, a long but beautiful road. |

#### 第五章叙事
| 中文 | English |
|------|---------|
| 你曾以为，拥有就会害怕失去。 | You once thought having meant fearing loss. |
| 后来才懂，最暖的光，不在照亮远方，而在照亮回家的路。 | Only later did you learn: the warmest light doesn't shine far away — it lights the way home. |

#### 第六章叙事
| 中文 | English |
|------|---------|
| 原来路再远，只要有人同行，就不算长。 | It turned out no road is too long, as long as someone walks with you. |
| 我们成了彼此的灯塔。 | We became each other's beacon. |
| 但光走得越快，影子也拉得越长。 | But the faster light travels, the longer shadows stretch. |

#### 结尾叙事
| 中文 | English |
|------|---------|
| 你来时，世界递给你一束光。 | When you arrived, the world handed you a beam of light. |
| 你离开时，把它还给了每一个你爱过的人。 | When you left, you gave it back to everyone you ever loved. |
| 光不会消失，只是换了地方，继续温柔地照亮。 | Light never fades — it simply moves, and keeps softly shining. |
| 谢谢你，陪我们走完这段旅程。 | Thank you for walking this journey with us. |

### 3. UI 界面文字

#### 警告提示（shadowFadeWarning）
| 中文 | English |
|------|---------|
| 当角色站在影子上时，移动物品会使影子消散 | Moving objects while characters stand on shadows will cause the shadows to fade |

#### 提示消息（hintMessage）
| 中文 | English |
|------|---------|
| 让影子铺上中心空缺 | Let shadows fill the central gap |

#### 胜利消息（completeMessage）
- 中文：光路人（The path of light is open）
- 英文：影子行走者已抵达（The shadow-walker has arrived）

#### 暂停面板
- 标题：已暂停 / Paused
- 描述：按 Esc 重新开始，或点选继续 / Press Esc to restart, or click to continue
- 按钮：继续 / Continue

#### BGM 按钮
- 开：BGM: 开 / BGM: On
- 关：BGM: 关 / BGM: Off

### 4. 控件文字

#### 旋转面板
- 中文：旋转
- 英文：Rotate

#### 移动面板
- 中文：移动
- 英文：Move

## 修改的文件列表

### 核心语言系统
- `src/core/Locale.ts` - 语言状态管理单例

### 关卡配置
- `src/levels/tutorial3.ts`
- `src/levels/chapter1_level2.ts`
- `src/levels/chapter1_level3.ts`
- `src/levels/chapter2_level1.ts`
- `src/levels/chapter2_level2.ts`
- `src/levels/chapter3_level1.ts`
- `src/levels/chapter3_level2.ts`
- `src/levels/chapter4_level1.ts`
- `src/levels/chapter4_level2.ts`
- `src/levels/chapter5_level1.ts`
- `src/levels/chapter5_level2.ts`
- `src/levels/chapter6_level1.ts`

### 游戏逻辑
- `src/game/Level.ts` - 添加 hint 文字跟踪方法
- `src/main.ts` - 集成 Locale + 叙事文字 + UI 文字

### UI 组件
- `src/ui/HUD.ts` - 语言切换按钮 + 刷新机制
- `src/ui/ZoneOverlay.ts` - 警告文本多语言
- `src/ui/ObjectControls.ts` - 控件文字刷新

## 技术实现细节

### 语言单例（Locale.ts）
```typescript
export const Locale = {
  _lang: 'zh',
  current: 'zh',
  setLang(lang) { ... },
  onChange(callback) { ... },
  t(zh, en) { ... }
};
```

### 文字刷新机制
- **Level.setHintText(zh, en?)** - 记录当前提示文字双语文本
- **Level.refreshHintText()** - 语言切换时返回翻译后文字
- **HUD.refreshLocalizedText()** - 刷新 BGM 按钮状态
- **controls.refreshLabels()** - 刷新面板标签
- **zoneOverlay.refreshWarningText()** - 刷新警告文本

### 语言切换触发点（main.ts）
```typescript
Locale.onChange(() => {
  // 刷新关卡提示
  if (translated !== null && zoneOverlay.isHintVisible()) {
    zoneOverlay.setHintText(translated);
  }
  // 刷新暂停面板
  hud.refreshPausedText();
  // 刷新 BGM 按钮
  hud.refreshLocalizedText();
  // 刷新控件标签
  controls.refreshLabels();
  // 刷新警告文本
  zoneOverlay.refreshWarningText();
});
```

## 优化效果统计

| 类别 | 总计 | 已优化 |
|------|------|--------|
| hintText | 12 | 12 |
| bridgeHintText | 2 | 2 |
| walkerSelectedHintText | 2 | 2 |
| transitHintText | 2 | 2 |
| wallRemovedHintText | 1 | 1 |
| 叙事文字 | 16 | 16 |
| UI 文字（警告/提示/胜利） | 6 | 6 |
| 控件文字 | 2 | 2 |
| **总计** | **43** | **43** |

## 未翻译内容（可选）

以下内容为开发/调试用，未进行翻译：
- 章节标题（第一章、第二章…）
- 关卡内部名称（章节 1 - 关卡 1…）
- Debug 面板文字
- Console 错误消息

如需翻译这些内容，可以后续添加对应的英文字段。

## 构建结果

```
✓ built in 750ms
dist/assets/index-YP9iYJmV.js 758.18 kB / gzip: 198.51 kB
```

## 下一步建议

1. **测试验证**：在游戏中切换语言，验证所有文字是否正确刷新
2. **用户反馈**：收集玩家对文字风格的反馈
3. **本地化扩展**：如需支持其他语言（如日文、韩文），可扩展 Locale 单例
4. **章节标题翻译**：如需翻译"第一章"等标题，可在 `LEVEL_NAMES_CN` 旁边添加 `LEVEL_NAMES_EN`
