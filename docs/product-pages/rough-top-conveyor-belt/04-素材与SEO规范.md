# 素材与 SEO 规范：Rough Top Conveyor Belt

> 适用范围：`public/products/rough-top-conveyor-belt/` 下的图片资源，以及该产品详情页的双语 SEO 输出  
> 维护责任人：内容负责人 / 素材负责人 / SEO 负责人

## 1. 图片素材清单

| 路径 | 角色 | 尺寸 | 文件大小 | 渲染位置 |
|---|---|---|---|---|
| `/products/rough-top-conveyor-belt/cover.webp` | 入口封面 | 1536 × 1024 | ~46 KB | Hero（`ProductGallery` 首图） |
| `/products/rough-top-conveyor-belt/surface-texture.webp` | 图库 | 1024 × 1024 | ~75 KB | 图库第 1 张 + 灯箱 |
| `/products/rough-top-conveyor-belt/factory-rolling.webp` | 图库 | 1024 × 1024 | ~82 KB | 图库第 2 张 + 灯箱 |
| `/products/rough-top-conveyor-belt/cross-section.webp` | 图库 | 1024 × 1024 | ~60 KB | 图库第 3 张 + 灯箱 |

## 2. 图片生成策略

- 由于原页面 HTTPS 证书在抓取环境无法验证，本次未把任何原站图片直接用于新站；
- 4 张图片均按品牌设计思路（深蓝主色、橙色高亮、留白、信息层级清晰、专业现代感）使用 ImageGen 生成；
- 所有图片均无第三方品牌水印、无人物肖像、无可识别设施标识；
- 输出格式统一为 `.webp`，便于 Next.js `next/image` 直接优化。

## 3. 图片替换流程

当公司自有产品图库（CMS / 服务器 / 原图备份）确认可授权使用后，可按以下规则一对一替换，**保持文件名与目录不变**，无需修改代码：

1. 将新图片命名为 `cover.webp / surface-texture.webp / factory-rolling.webp / cross-section.webp`；
2. 放入 `public/products/rough-top-conveyor-belt/` 覆盖对应文件；
3. 在 PR 中说明图片来源、版权归属、拍摄/制作者与日期；
4. 在 `05-验收清单.md` 的"素材与权利"小节中勾选并签字。

建议替换目标：

- `cover.webp` 替换为公司拍摄的真实产品外观图；
- `surface-texture.webp` 替换为上表面纹理的高分辨率近景；
- `factory-rolling.webp` 替换为生产现场的真实照片；
- `cross-section.webp` 可保留为技术示意图，或替换为带尺寸标注的工程图。

## 4. 图片权利与可追溯

- 当前图片均为本项目生成，无外部授权问题；
- 一旦替换为外部图片，必须在 PR 中提交《图片权利说明》并附原始图库/CMS 链接；
- 不得引入第三方供应商的同款产品图片或搜索引擎结果图片；
- 不得引入含有可识别第三方品牌 Logo、人脸、设施名称的图片。

## 5. Alt 文本规范

`ProductGallery` 组件按 locale 自动生成 alt：

- 英文：`${productName} product image ${index + 1}`；
- 简体中文：`${productName}产品图片 ${index + 1}`。

`ProductDetailPage` 的 `og:image` 与 JSON-LD `image` 字段均使用绝对 URL `https://ovbel.com{path}`，可在公开网络中直接抓取。

## 6. 双语 SEO 输出

### 6.1 `<title>` 与 `<meta description>`

| 语言 | title | description |
|---|---|---|
| en | Rough Top Conveyor Belt for Light-Duty Inclined Conveying | Textured-surface rough top conveyor belt with 2 or 3 ply EP construction, cut edges, optional bottom cover or bare back, for cartons, sacks and parcels. |
| zh | 轻型倾斜输送用粗面输送带 | 纹理表面粗面输送带，2 层或 3 层 EP 结构，切边，可选底覆盖胶或裸背，适用于纸箱、袋装货物与包裹输送。 |

### 6.2 canonical

```
https://ovbel.com/en/products/conveyor-belts/rough-top-conveyor-belt
https://ovbel.com/zh/products/conveyor-belts/rough-top-conveyor-belt
```

### 6.3 hreflang

| 语言 | hreflang |
|---|---|
| English | `https://ovbel.com/en/products/conveyor-belts/rough-top-conveyor-belt` |
| 简体中文 | `https://ovbel.com/zh/products/conveyor-belts/rough-top-conveyor-belt` |
| x-default | `https://ovbel.com/en/products/conveyor-belts/rough-top-conveyor-belt` |

### 6.4 Open Graph

`og:title` / `og:description` 与 `<title>` / `<meta description>` 一致；`og:url` 为当前语言 canonical；`og:image` 包含 `cover.webp` + 3 张图库图的绝对 URL。

### 6.5 Product JSON-LD

```jsonc
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "<对应语言名称>",
  "description": "<对应语言 summary>",
  "category": "<对应语言分类名>",
  "brand": { "@type": "Brand", "name": "OVBEL" },
  "manufacturer": { "@type": "Organization", "name": "Shandong Respower Industrial Co., Ltd." },
  "url": "<canonical>",
  "image": ["<cover 绝对 URL>", "<图库 1 绝对 URL>", "<图库 2 绝对 URL>", "<图库 3 绝对 URL>"]
}
```

**明确不写入**的字段：`offers`、`aggregateRating`、`review`、`sku`、`mpn`、`weight`。这些字段未由业务数据确认，避免虚构价格、库存、评分、SKU 与重量。

## 7. 禁止事项

- 不得在 SEO 文案中虚构覆盖胶等级、拉伸强度、温度范围、阻燃/防静电/食品级认证、库存、价格、保修期；
- 不得在 alt 文本中加入营销词（如 "best"、"#1"、"premium quality" 等无证据描述）；
- 不得使用与 Rough Top 无关的产品图作为 `media.cover` 或 `media.gallery`。