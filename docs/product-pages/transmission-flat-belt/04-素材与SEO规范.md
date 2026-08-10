# 04 — 素材与 SEO 规范

## 1. 图片素材来源

### 1.1 来源声明
所有 5 张产品图均取自 OVBEL 运营主体（山东奥贝尔工业有限公司）自有旧站 `respowerbelt.com`（h-col-121 页面），CDN 域名为 `30745609.s21i.faiusr.com`（凡科互动企业站默认素材库）。本运营主体对外公开素材按自有资料使用，不构成第三方侵权。

### 1.2 原始 URL 与命名映射
| 用途（页面） | 原始 URL | 输出文件名 | 处理 |
|---|---|---|---|
| 封面 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAg99LeugYohr3hSTCABjiACA.png.webp` | `cover.webp` | 768×1024 直接采用 |
| 切边结构 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAg99LeugYo7tuNjgYw0QM4lAM.png.webp` | `cut-edge.webp` | 465×404 直接采用 |
| 圆边结构 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAg_NLeugYo8Mjt5Acw2QM4mgM.png.webp` | `round-edge.webp` | 473×410 直接采用 |
| 平带卷/运行 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAg_9LeugYogIjq0gIw1wM4lgM.png.webp` | `belt-roll.webp` | 471×406 直接采用 |
| 盎司等级表 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAgoNTeugYolLrP2AEwsws4gwM.png.webp` | `ounce-grades-table.webp` | 1459×387 直接采用 |

> 注：img2–img4 位于源页 Product Parameters 区块（切边/圆边/带卷），命名按区块上下文推断；若与页面实际展示有出入，以业务核对为准。

### 1.3 版权处理
- 原图可能含 `RESPOWER` 水印 —— 与"OVBEL"品牌不一致；
- 水印为原图本体一部分（非可分图层），自营网站对自有素材的合理使用与既有产品页处理一致，未做去除或覆盖。
- OVBEL 站点本身不使用 `RESPOWER` 作为品牌名，仅在 `sourceUrl` 与历史归档中保留。

## 2. 图片展示规范
- `ProductGallery` 渲染主图库：点击任一图片全屏灯箱，键盘 `Esc` 关闭 / `←/→` 翻页；
- `ZoomableImage` 用于盎司等级表：点击全屏，无放大镜装饰图标；
- 所有 `img` 必须有 `alt`（由 `ProductGallery` / `ZoomableImage` 基于产品名 + 图片用途生成）；
- 移动端：图库横向滑动；规格表在小屏下等比缩放并可点击放大。

## 3. SEO 字段

### 3.1 Title
- EN：`Transmission Flat Belt (28–36 OZ) with Cotton Canvas Skeleton`
- ZH：`平型传动带（28–36 OZ）— 棉帆布骨架`

### 3.2 Description
- EN：`Cotton-canvas flat transmission belts in 28–36 OZ grades with cut-edge and round-edge constructions for factory, mine, terminal, grain-processing, irrigation and wood-cutting drives.`
- ZH：`棉帆布骨架平型传动带，28–36 OZ 多等级，切边与圆边两种结构，适用于工厂、矿山、码头、粮食加工、灌溉及木材切割传动。`

### 3.3 Canonical / Hreflang
- 由既有路由组件自动生成：`canonical` 指向当前 locale URL；`hreflang` 含 `en` / `zh-CN` / `x-default`。

### 3.4 Open Graph
- `og:title` / `og:description` / `og:image`（指向 `cover.webp`）/ `og:locale` / `og:url` / `og:type=product` 由既有组件生成。

### 3.5 Product JSON-LD
- 由 `ProductDetailPage` 顶部脚本输出：`@type: Product`、`name`、`description`、`image[]`、`category`、`brand`（OVBEL）、`manufacturer`（Shandong Ovbel Industrial Co., Ltd.）。
- **不含** `offers` / `aggregateRating`（避免虚构价格/库存/评分）。

## 4. 链接与内部导航
- 分类页 `app/products/[category]/page.tsx` 自动包含本产品卡片（无需修改）；
- 首页/列表页按既有逻辑自动包含；
- 询盘表单 `InquiryForm` 自动按 `getProducts(locale)` 与产品 slug 预填 `subject`，EN/ZH 切换同步。

## 5. 性能与体积
- 5 张 webp 总计 ≈ 152 KB（全部为小图，无需压缩）；
- 封面图 65 KB 作为 OG image 友好；
- 盎司等级表（18 KB）单独渲染，便于移动端点击放大查看。