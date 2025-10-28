# 🎨 视差滚动效果说明

## 效果描述

在 `GallerySection` 组件中实现了一个视差滚动效果：

- **背景图片** (`bg_bottom.webp`) 固定在底部
- **文字内容** (`IntroSection`) 和 **Footer** 组件都在内容层中
- 当用户向下滚动页面时，内容层（包含文字和Footer）逐渐向上移动
- 背景图片逐渐露出，最终完全显示

---

## 实现原理

### 1. HTML 结构

```vue
<!-- App.vue 页面结构 -->
<div id="app">
  <Navigation />
  <VideoHero />
  <AboutSection />
  <GallerySection />  <!-- 视差滚动区域，包含 IntroSection 和 Footer -->
</div>

<!-- GallerySection.vue 内部结构 -->
<section class="gallery-section">
  <!-- 背景图片层 - 固定 -->
  <div class="background-layer"></div>

  <!-- 内容层 - 可移动 -->
  <div class="content-layer" :style="{ transform: `translateY(${scrollOffset}px)` }">
    <IntroSection />
    <Footer />
  </div>
</section>
```

### 2. CSS 样式

**背景层：**
- `position: absolute` - 绝对定位
- `z-index: 1` - 在底层
- 背景图片固定，不随滚动移动

**内容层：**
- `position: relative` - 相对定位
- `z-index: 2` - 在上层
- `background: white` - 白色背景遮挡背景图
- `transform: translateY()` - 通过 transform 向上移动

### 3. JavaScript 逻辑

```javascript
handleScroll() {
  const section = this.$refs.gallerySection
  const rect = section.getBoundingClientRect()
  const windowHeight = window.innerHeight

  // 计算滚动进度 (0 到 1)
  const progress = Math.max(0, Math.min(1,
    (windowHeight - rect.top) / windowHeight
  ))

  // 根据进度计算偏移量
  const maxOffset = -500  // 最大向上移动 500px
  this.scrollOffset = maxOffset * progress
}
```

---

## 工作流程

1. **初始状态**
   - 内容层完全覆盖背景图
   - `scrollOffset = 0`

2. **开始滚动**
   - 用户向下滚动页面
   - 组件进入视口

3. **计算进度**
   - 根据组件位置计算滚动进度 (0-1)
   - 进度 0 = 组件刚进入视口
   - 进度 1 = 组件完全显示

4. **应用变换**
   - 内容层向上移动：`translateY(-500px * progress)`
   - 背景图逐渐露出

5. **最终状态**
   - 内容层向上移动 500px
   - 背景图完全显示

---

## 参数调整

### 调整移动距离

在 `handleScroll()` 方法中修改 `maxOffset`：

```javascript
const maxOffset = -500  // 改为 -300、-700 等
```

- 数值越大，移动距离越大
- 数值越小，移动距离越小

### 调整滚动速度

修改进度计算公式：

```javascript
// 更快的滚动
const progress = Math.max(0, Math.min(1,
  (windowHeight - rect.top) / (windowHeight * 0.5)
))

// 更慢的滚动
const progress = Math.max(0, Math.min(1,
  (windowHeight - rect.top) / (windowHeight * 1.5)
))
```

### 调整触发时机

修改触发条件：

```javascript
// 提前触发
if (rect.top < windowHeight * 1.2 && rect.bottom > 0) {
  // ...
}

// 延迟触发
if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
  // ...
}
```

---

## 性能优化

### 1. 使用 requestAnimationFrame

```javascript
onScroll() {
  if (this.rafId) {
    cancelAnimationFrame(this.rafId)
  }
  this.rafId = requestAnimationFrame(() => {
    this.handleScroll()
  })
}
```

### 2. 使用 will-change

```css
.content-layer {
  will-change: transform;
}
```

### 3. 使用 passive 事件监听

```javascript
window.addEventListener('scroll', this.onScroll, { passive: true })
```

---

## 响应式设计

不同屏幕尺寸的调整：

```css
/* 桌面 */
.gallery-section {
  min-height: 100vh;
}

/* 平板 */
@media (max-width: 1024px) {
  .gallery-section {
    min-height: 80vh;
  }
}

/* 手机 */
@media (max-width: 768px) {
  .gallery-section {
    min-height: 70vh;
  }
}
```

---

## 浏览器兼容性

- ✅ Chrome / Edge (现代版本)
- ✅ Firefox (现代版本)
- ✅ Safari (现代版本)
- ✅ 移动浏览器

**注意：** 使用了 CSS `transform` 和 `@supports`，在旧浏览器中可能需要降级处理。

---

## 常见问题

### Q: 如何让背景图片也移动？

A: 给 `.background-layer` 添加 transform：

```javascript
// 背景图片向下移动（视差效果）
const bgOffset = 200 * progress
this.bgScrollOffset = bgOffset
```

```vue
<div class="background-layer"
     :style="{ transform: `translateY(${bgScrollOffset}px)` }">
</div>
```

### Q: 如何让效果更平滑？

A: 调整 CSS transition：

```css
.content-layer {
  transition: transform 0.3s ease-out;  /* 增加时间 */
}
```

### Q: 如何在移动端禁用效果？

A: 添加媒体查询：

```javascript
mounted() {
  if (window.innerWidth > 768) {
    window.addEventListener('scroll', this.onScroll, { passive: true })
  }
}
```

---

## 示例效果

```
初始状态:
┌─────────────────┐
│   IntroSection  │ ← 内容层（白色背景）
│                 │
│     Footer      │
└─────────────────┘
  [背景图片被遮挡]

滚动后:
                    ↑ 内容层向上移动
┌─────────────────┐
│   IntroSection  │
│     Footer      │
└─────────────────┘
┌─────────────────┐
│                 │ ← 背景图片露出
│  背景图片显示   │
│                 │
└─────────────────┘
```

---

**创建日期:** 2024-10-23
**版本:** 1.0
