# 04 — 素材与 SEO 规范

## 1. 图片素材来源

### 1.1 来源声明
所有 7 张产品图均取自 OVBEL 运营主体（山东奥贝尔工业有限公司）自有旧站 `respowerbelt.com`（h-col-143 页面），CDN 域名为 `30745609.s21i.faiusr.com`（凡科互动企业站默认素材库）。本运营主体对外公开素材按自有资料使用，不构成第三方侵权。

### 1.2 原始 URL 与命名映射
| 用途（页面） | 原始 URL | 输出文件名 | 处理 |
|---|---|---|---|
| 封面 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAgwZDqugYoxfyytAIw2QQ47gM.png.webp` | `cover.webp` | 601×494 直接采用 |
| 带边特写 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAgwZDqugYog5nmjwcw2gQ42gQ.png.webp` | `belt-edge-closeup.webp` | 602×602 直接采用 |
| 带边细节 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAgwZDqugYo5dnlxQYw8AE40QE.png.webp` | `belt-edge-detail.webp` | 240×209 直接采用 |
| 断面样品 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAgwZDqugYo0L7PwgYwyQQ4-QM.png.webp` | `belt-section-samples.webp` | 585×509 直接采用 |
| 带芯爆炸图 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAgwpTqugYolcTrggQwxQQ4ugM.png` | `carcass-exploded-view.webp` | PNG → webp |
| 带体结构图 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAgwpTqugYonPd6MI8JOKoD.png.webp` | `belt-carcass-structure-diagram.webp` | 1167×426 直接采用 |
| 覆盖胶厚度参考表 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAgwpTqugYoxd_aDDCYCjihBA.png.webp` | `cover-thickness-spec-table.webp` | 1304×545 直接采用 |

> 注：本模型已核对图片内容均为输送带/带芯结构相关素材；若与页面实际展示有出入，以业务核对为准。

### 1.3 版权处理
- 原图可能含 `RESPOWER` 水印 —— 与"OVBEL"品牌不一致；
- 水印为原图本体一部分（非可分图层），自营网站对自有素材的合理使用与既有产品页处理一致，未做去除或覆盖。
- OVBEL 站点本身不使用 `RESPOWER` 作为品牌名，仅在 `sourceUrl` 与历史归档中保留。

## 2. 图片展示规范
- `ProductGallery` 渲染主图库：点击任一图片全屏灯箱，键盘 `Esc` 关闭 / `←/→` 翻页；
- `ZoomableImage` 用于 2 张技术图：点击全屏，无放大镜装饰图标；
- 所有 `img` 必须有 `alt`（由 `ProductGallery` / `ZoomableImage` 基于产品名 + 图片用途生成）；
- 移动端：图库横向滑动；技术图在小屏下等比缩放并可点击放大。

## 3. SEO 字段

### 3.1 Title
- EN：`Anti-Tear Conveyor Belt for Impact and Tear-Prone Bulk Handling`
- ZH：`防撕裂输送带 — 抗冲击抗撕裂重载输送`

### 3.2 Description
- EN：`Weft-reinforced anti-tear conveyor belt with transverse steel or polyester cords for mining, port, metallurgy, power, coal, cement, chemical and casting applications.`
- ZH：`纬向增强防撕裂输送带，采用横向钢绳或聚酯绳增强，适用于矿山、港口、冶金、电力、煤炭、水泥、化工、铸造等行业的散料输送。`

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
- 7 张 webp 总计 ≈ 132 KB（全部为小图，无需压缩）；
- 封面图 10 KB 作为 OG image 友好；
- 2 张技术图（23/46 KB）单独渲染，便于移动端点击放大查看。
