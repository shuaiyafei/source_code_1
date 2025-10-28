# H5 适配快速参考指南

## 响应式断点速查表

| 设备类型 | 断点 | 应用场景 |
|---------|------|---------|
| 桌面 | > 1024px | PC 浏览器 |
| 平板 | 768px - 1024px | iPad, 平板电脑 |
| 手机 | < 768px | 手机设备 |
| 小手机 | < 480px | iPhone SE, 小屏手机 |

## 常用响应式规则模板

### 标题字体大小
```css
/* PC */
font-size: 64px;

/* 平板 */
@media (max-width: 1024px) {
  font-size: 48px;
}

/* 手机 */
@media (max-width: 768px) {
  font-size: 32px;
}

/* 小手机 */
@media (max-width: 480px) {
  font-size: 24px;
}
```

### 正文字体大小
```css
/* PC */
font-size: 16px;

/* 平板 */
@media (max-width: 1024px) {
  font-size: 14px;
}

/* 手机 */
@media (max-width: 768px) {
  font-size: 13px;
}

/* 小手机 */
@media (max-width: 480px) {
  font-size: 12px;
}
```

### 间距调整
```css
/* PC */
padding: 80px 40px;

/* 平板 */
@media (max-width: 1024px) {
  padding: 60px 30px;
}

/* 手机 */
@media (max-width: 768px) {
  padding: 40px 20px;
}

/* 小手机 */
@media (max-width: 480px) {
  padding: 30px 15px;
}
```

### 布局转换（Grid 到单列）
```css
/* PC - 并排布局 */
display: grid;
grid-template-columns: 1fr 1fr;
gap: 60px;

/* 平板 */
@media (max-width: 1024px) {
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

/* 手机 - 单列布局 */
@media (max-width: 768px) {
  grid-template-columns: 1fr;
  gap: 20px;
}
```

### 图片响应式
```css
/* 所有设备通用 */
img {
  width: 100%;
  height: auto;
  display: block;
  max-width: 100%;
}

/* 手机端特殊处理 */
@media (max-width: 768px) {
  img {
    object-fit: cover;
  }
}
```

## 组件适配检查清单

### 导航组件
- [ ] 移动端显示汉堡菜单
- [ ] 菜单全屏显示
- [ ] Logo 大小调整
- [ ] 菜单项字体大小调整

### 卡片组件
- [ ] 卡片高度响应式
- [ ] 内容间距调整
- [ ] 标题和描述字体大小调整
- [ ] 按钮大小调整

### 图库组件
- [ ] 列数从 4 改为 3 再改为 2 或 1
- [ ] 行高自适应
- [ ] 间距调整

### 文本组件
- [ ] 标题字体大小调整
- [ ] 行高调整
- [ ] 段落间距调整
- [ ] 最大宽度限制

### 布局组件
- [ ] 从并排改为堆叠
- [ ] 间距调整
- [ ] 对齐方式调整
- [ ] 背景图片处理

## 常见问题解决

### 问题 1：文字在小屏幕上太小
**解决方案**：
```css
@media (max-width: 768px) {
  font-size: 14px;  /* 增大字体 */
  line-height: 1.6; /* 增加行高 */
}
```

### 问题 2：图片超出容器
**解决方案**：
```css
img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### 问题 3：布局在手机上混乱
**解决方案**：
```css
@media (max-width: 768px) {
  display: flex;
  flex-direction: column; /* 改为纵向 */
}
```

### 问题 4：菜单在手机上不可用
**解决方案**：
```css
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    transition: right 0.3s ease;
  }

  .nav-menu.active {
    right: 0;
  }
}
```

## 测试工具

### Chrome DevTools
1. 按 F12 打开开发者工具
2. 点击设备工具栏图标
3. 选择不同的设备进行测试

### 推荐测试设备
- iPhone SE (375px)
- iPhone 12 (390px)
- iPhone 12 Pro Max (428px)
- iPad (768px)
- iPad Pro (1024px)

## 性能优化建议

### 图片优化
```html
<!-- 使用 srcset 提供不同分辨率 -->
<img
  src="image.png"
  srcset="image-small.png 480w, image-medium.png 768w, image-large.png 1024w"
  alt="描述"
/>
```

### 懒加载
```html
<!-- 使用 loading="lazy" 属性 -->
<img src="image.png" loading="lazy" alt="描述" />
```

### CSS 优化
```css
/* 使用 CSS 变量管理响应式值 */
:root {
  --font-size-title: 64px;
  --padding-section: 80px;
}

@media (max-width: 768px) {
  :root {
    --font-size-title: 32px;
    --padding-section: 40px;
  }
}

.title {
  font-size: var(--font-size-title);
}

.section {
  padding: var(--padding-section);
}
```

## 调试技巧

### 查看当前屏幕宽度
```javascript
console.log(window.innerWidth);
```

### 监听窗口大小变化
```javascript
window.addEventListener('resize', () => {
  console.log('新宽度:', window.innerWidth);
});
```

### 强制刷新缓存
```
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

## 最佳实践总结

1. ✅ **移动优先**：从小屏幕开始设计
2. ✅ **渐进增强**：逐步添加更大屏幕的样式
3. ✅ **灵活单位**：使用 %, vw, em 等相对单位
4. ✅ **触摸友好**：按钮最小 44x44px
5. ✅ **性能优先**：优化图片和资源加载
6. ✅ **测试充分**：在真实设备上测试
7. ✅ **可访问性**：确保所有用户都能使用

## 相关文件

- 详细适配总结：`H5_ADAPTATION_SUMMARY.md`
- 全局样式：`src/style.css`
- 各组件样式：`src/page/*/component/*.vue`

## 联系和支持

如有问题或需要进一步的适配，请参考：
- Vue 3 官方文档：https://vuejs.org/
- MDN 响应式设计：https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
- CSS 媒体查询：https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries
