# 04 — 素材与 SEO 规范

## 1. 图片素材

所有图片均来自 OVBEL 自有 CDN `30745609.s21i.faiusr.com`，URL 取自源页面 `https://www.respowerbelt.com/h-col-125.html`，已获使用授权。

| 文件名 | 内容说明 | 用途 | Alt 文本（EN） | Alt 文本（ZH） |
|---|---|---|---|---|
| `cover.webp` | 黑色织物芯输送带卷（正面） | 封面 / 图库首图 | Black multi-ply fabric conveyor belt roll | 黑色多层织物芯输送带卷 |
| `belt-roll-side.webp` | 黑色输送带卷侧面 | 图库 | Side view of a multi-ply fabric conveyor belt roll | 多层织物芯输送带卷侧面 |
| `ep-spec-table.webp` | EP 型织物芯输送带规格表 | 技术图片 | EP fabric conveyor belt specification table | EP 型织物芯输送带规格表 |
| `nn-spec-table.webp` | NN 型织物芯输送带规格表 | 技术图片 | NN nylon conveyor belt specification table | NN 型尼龙输送带规格表 |

> 备注：原页面另含 2 张 Chevron 花纹输送带图片，因与“EP/尼龙织物芯输送带”产品定位不符、易造成误导，未纳入本产品图库。

## 2. 交互规范
- 图库使用现有 `ProductGallery` 组件，点击图片进入全屏灯箱。
- 支持键盘操作：Esc 关闭、左右方向键切换。
- 不显示放大镜装饰图标（仅 click-to-zoom）。
- 所有 `<img>` 均提供 `alt` 文本。

## 3. SEO 规范

### 页面级 SEO（由 `app/[locale]/[[...path]]/page.tsx` 输出）
- `title` / `description`：取自 `product.seo`。
- `canonical`：每语言一条，格式 `/products/conveyor-belts/ep-nylon-conveyor-belt`。
- `hreflang`：`en`、`zh-CN`、`x-default`。
- `og:title`、`og:description`、`og:type = product`、`og:image`：由 `ProductDetailPage` 使用 `seo.description` 与 `media.cover` 生成。
- `twitter:card = summary_large_image`。
- `robots = index, follow`。

### Product JSON-LD（由 `ProductDetailPage` 输出）
- `@type: Product`
- `name` / `description`：多语言
- `image`：`media.gallery`
- `brand: { name: "OVBEL" }`
- `category: Conveyor Belts`
- 不含 `offers`、`review`、`aggregateRating`（禁止编造价格、库存、评分）。

## 4. 响应式 / 可访问性
- 桌面端：双栏布局（图库左、内容右），最大容器 1280 px。
- 移动端：单栏，图库可横向滑动或全屏查看。
- 焦点样式、对比度、语义化标题层级沿用项目现有 Tailwind 主题。
