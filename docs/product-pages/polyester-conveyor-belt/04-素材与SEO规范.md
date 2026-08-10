# 04 — 素材与 SEO 规范

## 1. 图片素材来源

### 1.1 来源声明
所有 5 张产品图均取自 OVBEL 运营主体（山东奥贝尔工业有限公司）自有旧站 `respowerbelt.com`（h-col-122 页面），CDN 域名为 `30745609.s21i.faiusr.com`（凡科互动企业站默认素材库）。本运营主体对外公开素材按自有资料使用，不构成第三方侵权。

### 1.2 原始 URL 与命名映射
| 用途（页面） | 原始 URL | 输出文件名 | 处理 |
|---|---|---|---|
| 封面 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAgltjeugYop8ywODCHBzj0BA.png.webp` | `cover.webp` | 903×628 直接采用 |
| 带卷 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAg87-KugYo_8_WkQMw6QM4wAM.png.webp` | `belt-roll.webp` | 489×448 直接采用 |
| 结构图 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAg07-KugYooIqpwQcw4AQ4-wI.png.webp` | `construction.webp` | 608×383 直接采用 |
| 胶带细节 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAg5b-KugYo-MTYrAYw9wM4xgE.png.webp` | `belt-detail.webp` | 400×356 直接采用 |
| 标准/参数表 | `https://30745609.s21i.faiusr.com/2/ABUIABACGAAgj427ugYo9N6pRTCQAzjkAg.jpg.webp` | `standard-list.webp` | 503×198 直接采用 |

> 注：本模型无法直接预览图片，命名按源页区块位置与尺寸推断；若与页面实际展示有出入，以业务核对为准。

### 1.3 版权处理
- 原图可能含 `RESPOWER` 水印 —— 与"OVBEL"品牌不一致；
- 水印为原图本体一部分（非可分图层），自营网站对自有素材的合理使用与既有产品页处理一致，未做去除或覆盖。
- OVBEL 站点本身不使用 `RESPOWER` 作为品牌名，仅在 `sourceUrl` 与历史归档中保留。

## 2. 图片展示规范
- `ProductGallery` 渲染主图库：点击任一图片全屏灯箱，键盘 `Esc` 关闭 / `←/→` 翻页；
- `ZoomableImage` 用于标准/参数表：点击全屏，无放大镜装饰图标；
- 所有 `img` 必须有 `alt`（由 `ProductGallery` / `ZoomableImage` 基于产品名 + 图片用途生成）；
- 移动端：图库横向滑动；标准/参数表在小屏下等比缩放并可点击放大。

## 3. SEO 字段

### 3.1 Title
- EN：`Polyester Conveyor Belt (EP) for Mining, Quarry and General Industry`
- ZH：`聚酯芯输送带（EP）— 矿山、采石与一般工业用`

### 3.2 Description
- EN：`Multi-ply polyester-canvas conveyor belt with wear-resistant rubber covers, referenced to GB/T7984, DIN22102, BS490 and AS1332, for powder, granular and small-block material transport.`
- ZH：`多层聚酯帆布带芯输送带，覆盖耐磨橡胶，参照 GB/T7984、DIN22102、BS490、AS1332，适用于粉状、颗粒状及小块状物料输送。`

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
- 5 张 webp 总计 ≈ 93 KB（全部为小图，无需压缩）；
- 封面图 51 KB 作为 OG image 友好；
- 标准/参数表（6 KB）单独渲染，便于移动端点击放大查看。