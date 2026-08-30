# 04 — 素材与 SEO 规范

## 1. 图片素材来源

### 1.1 来源声明（v2 更新：用户提供的 OVBEL 自有产品照片）

| 版本 | 来源 | 状态 |
|---|---|---|
| v1（初版，已替换） | OVBEL 旧站 `respowerbelt.com` h-col-121，凡科互动企业站 CDN（`30745609.s21i.faiusr.com`），含 `RESPOWER` 旧水印 | 已停用 |
| **v2（当前）** | **2026-08-30 由用户提供的产品实拍 PNG，置于 `~/Desktop/=平胶带Transmission Flat Belt/`，为 OVBEL 自有素材** | **生效中** |

> v2 替换说明：
> - 用户于本回合上传 4 张 OVBEL 自有的平型传动带实拍 PNG，替换掉 v1 中来自 `respowerbelt.com` 的 4 张含旧水印的画廊图（含封面）。
> - v1 的 `ounce-grades-table.webp`（盎司等级规格表）保留，仍在 `media.technicalImages` 中渲染，与本次替换无关。
> - 替换影响范围：详情页首图（图库第 1 张）+ 图库第 2/3/4 张。`alt` 文本同步更新为新图实景描述。
> - 已删除的文件：`cover.webp` / `cut-edge.webp` / `round-edge.webp` / `belt-roll.webp`（v1 版本，已被 v2 同名 `cover.webp` 与新增 `gallery-01/02/03.webp` 替代）。

### 1.2 v2 文件来源与映射（由用户提供，OVBEL 自有）

| 排序（详情页） | 原始文件 | 输出文件名 | 用途 | 尺寸 |
|---|---|---|---|---|
| 1（首图 / 图库 1） | `=平胶带Transmission Flat Belt/1.png` | `cover.webp` | 详情页首图；图库第 1 张 | 800×600 |
| 2 | `=平胶带Transmission Flat Belt/2.png` | `gallery-01.webp` | 图库第 2 张 | 800×800 |
| 3 | `=平胶带Transmission Flat Belt/3.png` | `gallery-02.webp` | 图库第 3 张 | 640×626 |
| 4 | `=平胶带Transmission Flat Belt/4.png` | `gallery-03.webp` | 图库第 4 张 | 640×480 |
| —（technicalImages） | 旧 `ounce-grades-table.webp`（v1 保留） | `ounce-grades-table.webp` | 规格表，点击放大 | 1459×387 |

### 1.3 v2 处理说明
- 用户交付 4 张 PNG，Pillow 转码为 webp（quality=88, method=4），全部为 OVBEL 自有实拍素材，无第三方版权风险。
- 4 张图均垂直展示主体：
  - 1：黄色多层棉帆布带堆叠，突出带边多层织物结构；
  - 2：三段棕色棉帆布平带并排，带体中央嵌红色识别线；
  - 3：棕色棉帆布平带大折展开，红色中线、多层带边清晰可见；
  - 4：整卷黄色棉帆布平带，三道绿色捆带固定，端面视角。
- `cover.webp`（即图 1）作为详情页 hero / 图库第 1 张；图 2/3/4 依次进入图库第 2/3/4 张，按 `1→2→3→4` 顺序播放。
- alt 文本统一为「产品 + 关键视觉特征」句式，利于搜索引擎理解并满足 a11y（要求 8）。
- 上一版（v1）的 `RESPOWER` 水印相关版权风险已随本次替换彻底解除。

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
- 5 张 webp 总计 ≈ 290 KB（v2 替换后的当前文件：cover 30KB + gallery-01 47KB + gallery-02 111KB + gallery-03 85KB + 技术表 18KB）；
- 封面图（30 KB）作为 OG image 友好；
- 盎司等级表（18 KB）单独渲染，便于移动端点击放大查看。