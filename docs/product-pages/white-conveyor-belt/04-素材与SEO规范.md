# 04 — 素材与 SEO 规范

## 1. 图片素材来源

### 1.1 来源声明
所有 5 张产品图均取自 OVBEL 运营主体（山东奥贝尔工业有限公司）自有旧站 `respowerbelt.com`（h-col-115 页面），CDN 域名为 `30745609.s21i.faiusr.com`（凡科互动企业站默认素材库）。本运营主体对外公开素材按自有资料使用，不构成第三方侵权。

### 1.2 原始 URL 与命名映射
| 用途（页面） | 原始 URL | 输出文件名 | 处理 |
|---|---|---|---|
| 封面 | `https://30745609.s21i.faiusr.com/2/ABUIABACGAAg0orFugYotJGy2wIwnAQ4mwU.jpg.webp` | `cover.webp` | 540×667 直接采用 |
| 工厂概览 | `https://30745609.s21i.faiusr.com/2/ABUIABACGAAg_6jKugYo-b2Q0gMw_CI4qh8.jpg.webp` | `factory-overview.webp` | 4472×4010 → 1600×1435 webp（质量 85） |
| 产线特写 | `https://30745609.s21i.faiusr.com/2/ABUIABACGAAgna7eugYohqCx2gIwrQg4oAY.jpg.webp` | `production-line.webp` | 1069×800 直接采用 |
| 胶带细节 | `https://30745609.s21i.faiusr.com/2/ABUIABACGAAgnq7eugYojJey3QMwoC041B8.jpg.webp` | `belt-detail.webp` | 5792×4052 → 1600×1119 webp（质量 85） |
| 规格表 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAg3pbqugYo2ejtCTC7CDjnAw.png.webp` | `spec-table.webp` | 1083×487 直接采用 |

### 1.3 版权处理
- 原图左上角含 `RESPOWER` 水印 —— 与"OVBEL"品牌不一致；
- 由于水印为原图本体的一部分（非可分图层），在 web 上合理使用（reuse）属于自营网站对自有素材的展示，未做去除或覆盖；这与 `rough-top` / `sidewall` / `solid-woven` 三页对自有素材的处理一致。
- OVBEL 站点本身**不使用** `RESPOWER` 作为品牌名（仅在 `sourceUrl` 与历史归档中保留），不展示在导航、页脚、徽标处。

## 2. 图片展示规范
- `ProductGallery` 渲染主图库：点击任一图片全屏灯箱，键盘 `Esc` 关闭 / `←/→` 翻页；
- `ZoomableImage` 用于规格表等内嵌图片：点击全屏，无放大镜装饰图标；
- 所有 `img` 必须填写 `alt`（由 `ProductGallery` / `ZoomableImage` 内部基于产品名 + 图片用途生成）；
- 移动端：图库横向滑动；规格表在小屏下保持等比缩放并可点击放大。

## 3. SEO 字段

### 3.1 Title
- EN：`White Conveyor Belt for Food-Grade and Hygienic Material Handling`
- ZH：`食品级白色输送带 — 洁净物料输送`

### 3.2 Description
- EN：`White rubber food-grade conveyor belt with a smooth non-marking cover, high tensile strength and good tear resistance, used for sugar, grain, dock-side transfer and food processing lines.`
- ZH：`白色橡胶食品级输送带，光滑不易留痕，拉伸强度高，抗撕裂性好，适用于糖、粮食、码头转运及食品加工生产线。`

### 3.3 Canonical / Hreflang
- 由既有路由组件自动生成：
  - `<link rel="canonical">` 指向当前 locale 对应 URL；
  - `hreflang`：`en` / `zh-CN` / `x-default` 三值齐全。

### 3.4 Open Graph
- `og:title` / `og:description` / `og:image` / `og:locale` / `og:url` / `og:type=product` 由既有组件生成；
- `og:image` 指向 `cover.webp`（首张封面图）。

### 3.5 Product JSON-LD
- 由 `ProductDetailPage` 顶部脚本输出，含：
  - `@type: Product`
  - `name`、`description`、`image[]`、`category`、`brand`（OVBEL）
  - `manufacturer`：Shandong Ovbel Industrial Co., Ltd.
  - **不含** `offers` / `aggregateRating`（避免虚构价格/库存/评分，与既有约定一致）。

## 4. 链接与内部导航
- 分类页 `app/products/[category]/page.tsx` 自动包含本产品卡片（无需修改）；
- 首页 `app/page.tsx` / `app/[locale]/[[...path]]/page.tsx` 的产品聚合展示按既有逻辑自动包含；
- 询盘表单 `InquiryForm` 自动按 `getProducts(locale)` 与产品 slug 预填 `subject`，EN/ZH 切换时同步。

## 5. 性能与体积
- 5 张 webp 总计 ≈ 450 KB；
- 封面图（540×667，49 KB）作为 OG image 友好；
- 规格表（1083×487，48 KB）单独渲染，便于移动端点击放大查看。