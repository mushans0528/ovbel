# Sidewall Conveyor Belt / 挡边输送带

> 原始资料：<https://www.respowerbelt.com/h-col-118.html>  
> 本页为 OVBEL 网站第 4 个可上线双语产品详情页（conveyor-belts 分类）。

## 页面状态
- 数据模型：`lib/products.ts` 中 slug `sidewall-conveyor-belt` 已补全（EN + ZH）。
- 图片资产：`public/products/sidewall-conveyor-belt/` 下 8 张真实产品/规格图。
- 渲染方式：通过既有 `ProductDetailPage` / `ProductGallery` / `ZoomableImage` 数据驱动渲染，无新增组件或路由。
- 构建验证：通过 `tsc --noEmit` 与 `next build`（30 页静态生成）。

## 关键决策
- 分类归属：`conveyor-belts`。
- 图片策略：全部来自 respowerbelt.com 自有旧站（公司自有素材），未生成合成图。
- 规格处理：基带宽度、挡边高度、横隔板高度、最小带轮直径、挡边/横隔板型式等关键范围已录入 `specifications`；完整规格表保留在 `technicalImages` 中。
- 待业务确认：基带结构层数、拉伸强度、工作温度（仅覆盖胶等级温度）、最大带速、认证标准、库存/交期/MOQ/价格等，未在页面中展示。

## 文件索引
- `01-原站内容审计.md`
- `02-双语页面文案.md`
- `03-实现规格.md`
- `04-素材与SEO规范.md`
- `05-验收清单.md`

## 图片更新记录
- 2026-08-29：产品图整体替换为实拍素材（`/Desktop/=挡边带Sidewall Conveyor Belt/` 1.png–4.png）
  - 入口封面：`public/products/sidewall-conveyor-belt/1.webp`
  - 详情页图库顺序：1.webp → 2.webp → 3.webp → 4.webp
  - 旧图已移除：cover.webp、factory-overview.webp、long-belt-line.webp、large-rolls-stored.webp、rolled-product.webp
  - 规格图 technicalImages 保持不变
