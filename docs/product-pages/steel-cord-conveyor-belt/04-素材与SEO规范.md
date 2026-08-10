# 04 — 素材与 SEO 规范

## 1. 图片素材来源

### 1.1 来源声明
所有 8 张产品图均取自 OVBEL 运营主体（山东奥贝尔工业有限公司）自有旧站 `respowerbelt.com`（h-col-136 页面），CDN 域名为 `30745609.s21i.faiusr.com`（凡科互动企业站默认素材库）。本运营主体对外公开素材按自有资料使用，不构成第三方侵权。

### 1.2 原始 URL 与命名映射
| 用途（页面） | 原始 URL | 输出文件名 | 处理 |
|---|---|---|---|
| 封面 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAgmZHqugYo8fW3xQIwjgg4vAU.png.webp` | `cover.webp` | 1038×700 直接采用 |
| 带体结构 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAg9YzqugYosdbCpwcw2AQ40wQ.png.webp` | `belt-structure.webp` | 600×595 直接采用 |
| 钢丝绳细节 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAg9YzqugYo9JWkqAMwwAU43gQ.png.webp` | `steel-cable-detail.webp` | 704×606 直接采用 |
| 构造图 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAg9YzqugYo0JKFgwMw3AQ40wQ.png.webp` | `construction.webp` | 604×595 直接采用 |
| 带卷图 | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAg9IzqugYo2q6D7QEw0wQ4tgQ.png.webp` | `belt-roll.webp` | 595×566 直接采用 |
| 规格表（钢丝绳根数） | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAgnpPqugYona7qsAQwkwg45wM.png.webp` | `steel-cords-spec.webp` | 1043×487 直接采用 |
| 规格表（覆盖胶特性与等级） | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAgnpPqugYoy5rI-Acwlwg4hwM.png.webp` | `cover-grades-spec.webp` | 1047×391 直接采用 |
| 规格表（钢丝绳粘合力） | `https://30745609.s21i.faiusr.com/4/ABUIABAEGAAgn5PqugYoybq17gMwkgg4hAI.png.webp` | `adhesion-spec.webp` | 1042×260 直接采用 |

> 注：本模型无法直接预览图片，命名按源页区块位置与尺寸推断；若与页面实际展示有出入，以业务核对为准。

### 1.3 版权处理
- 原图可能含 `RESPOWER` 水印 —— 与"OVBEL"品牌不一致；
- 水印为原图本体一部分（非可分图层），自营网站对自有素材的合理使用与既有产品页处理一致，未做去除或覆盖。
- OVBEL 站点本身不使用 `RESPOWER` 作为品牌名，仅在 `sourceUrl` 与历史归档中保留。

## 2. 图片展示规范
- `ProductGallery` 渲染主图库：点击任一图片全屏灯箱，键盘 `Esc` 关闭 / `←/→` 翻页；
- `ZoomableImage` 用于 3 张规格表图：点击全屏，无放大镜装饰图标；
- 所有 `img` 必须有 `alt`（由 `ProductGallery` / `ZoomableImage` 基于产品名 + 图片用途生成）；
- 移动端：图库横向滑动；规格表在小屏下等比缩放并可点击放大。

## 3. SEO 字段

### 3.1 Title
- EN：`Steel Cord Conveyor Belt for Heavy-Load, Long-Distance Conveying`
- ZH：`钢丝绳芯输送带 — 重载长距离输送`

### 3.2 Description
- EN：`Steel-cable reinforced conveyor belt with high tensile strength and low elongation for coal, ore port, metallurgical, power and chemical industries, with general, fire-retardant, cold-resistant and heat-resistant cover types.`
- ZH：`钢丝绳增强输送带，高拉伸强度、低伸长率，适用于煤矿、矿石港口、冶金、电力与化工行业，提供通用、阻燃、耐寒、耐热等覆盖胶类型。`

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
- 8 张 webp 总计 ≈ 236 KB（全部为小图，无需压缩）；
- 封面图 75 KB 作为 OG image 友好；
- 3 张规格表图（57/40/28 KB）单独渲染，便于移动端点击放大查看。