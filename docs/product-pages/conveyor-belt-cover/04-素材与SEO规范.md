# 04 - 素材与 SEO 规范

## 图片来源

全部 5 张图片均来自自有旧站 CDN `30745609.s21i.faiusr.com`，对应 `h-col-127.html` 页面中的 `photo_item` / `jz_img_cliping` 图片标签。

| 原 URL | 本地文件名 | 用途 |
|--------|------------|------|
| `...gJzfugYokYe35wEwwBk4kBM.jpg.webp` | `cover.webp` | 主图/封面 |
| `...-5vfugYoouLmpQEwpQI43AE.jpg.webp` | `gallery-02.webp` | 图库：成排罩壳 |
| `...-5vfugYo8KCwjQYwnwM4rAI.jpg.webp` | `gallery-03.webp` | 图库：堆叠罩壳 |
| `...-5vfugYoqIWL_AEwkQI4zgE.jpg.webp` | `gallery-04.webp` | 图库：户外安装 |
| `...tp7fugYoh-aklAYw0g04_wI.jpg.webp` | `spec-table.webp` | 技术图：规格表 |

## 图片处理

- 格式：WebP
- 质量：92
- 最大长边：1600 px（封面/图库），2000 px（规格表）
- 无水印、无放大镜装饰图标
- 所有图片均支持点击全屏放大（复用现有 lightbox）

## SEO 规范

- **Slug**: `conveyor-belt-cover`
- **Canonical**: `/products/conveyor-components/conveyor-belt-cover`（英文）及 `/zh/products/conveyor-components/conveyor-belt-cover`（中文）
- **Hreflang**: `en`, `zh-CN`, `x-default`
- **Open Graph**: 使用 `media.cover`
- **JSON-LD**: `Product` 类型，仅包含 `name`、`description`、`image`、`brand`、`sku` 占位；不含虚构价格、库存、评分、 offers。

## Alt 文本

所有图片使用描述性 alt：
- cover: "Corrugated steel conveyor belt cover sections"
- gallery-02: "Multiple arched conveyor belt covers in factory"
- gallery-03: "Stacked blue corrugated conveyor covers"
- gallery-04: "Conveyor belt cover installed on outdoor conveyor walkway"
- spec-table: "Conveyor belt cover product specification table"
