# 素材与 SEO 规范：Rough Top Conveyor Belt

> 适用范围：`public/products/rough-top-conveyor-belt/` 下的图片资源，以及该产品详情页的双语 SEO 输出  
> 维护责任人：内容负责人 / 素材负责人 / SEO 负责人

## 1. 图片素材清单

| 路径 | 角色 | 尺寸 | 文件大小 | 渲染位置 |
|---|---|---|---|---|
| `/products/rough-top-conveyor-belt/1.webp` | 入口封面 / Hero 首图 | 按原图比例 | ~86 KB | 首页产品卡（`ProductCard`）、OG 图、JSON-LD、详情页首图 |
| `/products/rough-top-conveyor-belt/2.webp` | 图库 | 按原图比例 | ~124 KB | 图库第 2 张 + 灯箱 |
| `/products/rough-top-conveyor-belt/3.webp` | 图库 | 按原图比例 | ~213 KB | 图库第 3 张 + 灯箱 |
| `/products/rough-top-conveyor-belt/4.webp` | 图库 | 按原图比例 | ~99 KB | 图库第 4 张 + 灯箱 |

## 2. 图片生成策略

- 由于原页面 HTTPS 证书在抓取环境无法验证，本次未把任何原站图片直接用于新站；
- 4 张图片为公司提供的真实产品照片（桌面文件夹「糙面带Rough Top Conveyor Belt」，文件名 1–4），按名称顺序对应封面（1）与图库（2/3/4）；
- 原始格式为 png/jpg，已统一转换为 `.webp`（quality 90），便于 Next.js `next/image` 直接优化，且文件体积显著下降（如封面 8 MB → 86 KB）；
- 上传前请确认图片无水印、无未授权第三方品牌或人物肖像。

## 3. 图片替换流程

当公司自有产品图库（CMS / 服务器 / 原图备份）确认可授权使用后，可按以下规则一对一替换，**保持文件名与目录不变**，无需修改代码：

1. 将新图片按顺序命名为 `1.webp / 2.webp / 3.webp / 4.webp`；
2. 放入 `public/products/rough-top-conveyor-belt/` 覆盖对应文件；
3. 在 PR 中说明图片来源、版权归属、拍摄/制作者与日期；
4. 在 `05-验收清单.md` 的"素材与权利"小节中勾选并签字。

建议替换目标：

- `1.webp` 替换为公司拍摄的真实产品外观图（同时作为封面与图库首图）；
- `2.webp` 替换为上表面纹理或叠放特写；
- `3.webp` 替换为产品细节/纹理近景；
- `4.webp` 替换为不同角度或应用场景照片；
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
  "manufacturer": { "@type": "Organization", "name": "Shandong Ovbel Industrial Co., Ltd." },
  "url": "<canonical>",
  "image": ["<cover 绝对 URL>", "<图库 1 绝对 URL>", "<图库 2 绝对 URL>", "<图库 3 绝对 URL>"]
}
```

**明确不写入**的字段：`offers`、`aggregateRating`、`review`、`sku`、`mpn`、`weight`。这些字段未由业务数据确认，避免虚构价格、库存、评分、SKU 与重量。

## 7. 禁止事项

- 不得在 SEO 文案中虚构覆盖胶等级、拉伸强度、温度范围、阻燃/防静电/食品级认证、库存、价格、保修期；
- 不得在 alt 文本中加入营销词（如 "best"、"#1"、"premium quality" 等无证据描述）；
- 不得使用与 Rough Top 无关的产品图作为 `media.cover` 或 `media.gallery`。