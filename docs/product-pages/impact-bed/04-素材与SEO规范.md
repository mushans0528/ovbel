# 04 — 素材与 SEO 规范

## 1. 图片素材

### 1.1 当前在用的详情页图库（v2，2026-09-01 更新）

以下 4 张图片来自 OVBEL 用户提供的实物照片，已获使用授权。命名顺序与图片编号严格一致：1 → cover，2 → gallery-01，3 → gallery-02，4 → gallery-03。

| 源文件 | 输出文件 | 内容说明 | 尺寸（转换后） | 用途 |
|---|---|---|---|---|
| `1.png` | `/products/impact-bed/cover.webp` | 两根蓝色聚氨酯 V 形缓冲条立放，深色背景（主图/封面） | 720 × 1094 | 封面 / 图库[0] |
| `2.png` | `/products/impact-bed/gallery-01.webp` | 红色橡胶缓冲条多层堆叠，展示厚度与吸能体 | 1920 × 1080 | 图库[1] |
| `3.png` | `/products/impact-bed/gallery-02.webp` | 裙板密封区实物安装：红橡胶缓冲条 + 橙色支撑架 | 800 × 496 | 图库[2] |
| `4.png` | `/products/impact-bed/gallery-03.webp` | 黑色缓冲条安装在红色钢架床体上，底部固定螺栓可见 | 1024 × 469 | 图库[3] |

### 1.2 历史 v1 资源（已替换并清理）

原详情页 8 张图来自 `respowerbelt.com` OVBEL CDN（已离线下发到 `public/`），本次由用户提供实物照片替换并清理冗余。

| 源 v1 路径 | 替换后状态 |
|---|---|
| `/products/impact-bed/cover.webp`（白/黑色安装图） | **覆盖**：现为 v2 蓝色 V 形主图。 |
| `/products/impact-bed/impact-bars-red.webp` | **删除**：v2 不再引用。 |
| `/products/impact-bed/impact-bars-blue-trough.webp` | **删除**：v2 不再引用。 |
| `/products/impact-bed/impact-bars-red-stack.webp` | **删除**：v2 不再引用。 |
| `/images/products/impact-bed/impact-bed-installed.webp` | **删除**：v2 不再引用。 |
| `/images/products/impact-bed/impact-bed-set.webp` | **删除**：v2 不再引用。 |
| `/images/products/impact-bed/impact-bar-black.webp` | **删除**：v2 不再引用。 |

### 1.3 仍在使用的旧素材（不在详情页图库，但被 constructionImage / technicalImages 引用）

- **结构图**（`constructionImage`，保留作为描述段插图）：
  - `/images/products/impact-bed/impact-bar-red.webp` — 红色三层橡胶缓冲条截面，作为结构示意图继续使用。
- **技术图**（`technicalImages`，保留作为规格与结构参考）：
  - `/products/impact-bed/spec-table.webp` — 缓冲条规格表。
  - `/products/impact-bed/type-a-drawing.webp` — Type A 缓冲条结构图。
  - `/products/impact-bed/type-b-drawing.webp` — Type B 缓冲条结构图。
  - `/images/products/impact-bed/technical-drawing.png`
  - `/images/products/impact-bed/specification-table.png`
  - `/images/products/impact-bed/specification-notes.png`

### 1.4 技术处理
- 输出格式：WebP，质量 88，method 4（保持与已上线产品一致）。
- 详情页图库照片最大边 ≤ 1920 px；技术图最大边保持原始尺寸。
- RGB 模式；PNG 含透明通道时使用白底平面化再转码（实际本次 PNG 均无 alpha 通道，常规 RGB 转换即可）。

### 1.5 Alt 文本（v2）
- 详情页图库 4 张：`ProductGallery` 优先使用 `media.galleryAlt`，本次新增 4 条 EN + 4 条 ZH，描述每张实物图的视觉重点（V 形主图 / 堆叠 / 安装 / 床体），支持屏幕阅读器并兼顾图片搜索可见性。
- 结构图：`ZoomableImage` 仍使用固定文案 `Impact Bed & Bar three-layer impact bar` / `缓冲床与缓冲条三层缓冲条`。
- 技术图：`ZoomableImage` 使用文档标签索引，例如 `Documents 1` / `技术资料 1`。

## 2. SEO 规范

### 2.1 数据字段
- `seo.title`（EN）：`Conveyor Impact Bed & Impact Bars for Loading Zones`
- `seo.description`（EN）：`Impact beds and three-layer UHMWPE rubber impact bars configured for conveyor loading zones, transfer points and heavy bulk-material handling.`
- `seo.title`（ZH）：`输送机落料区缓冲床与缓冲条`
- `seo.description`（ZH）：`为输送机落料区、转运点和重型散料工况配置的缓冲床及 UHMWPE 三层橡胶缓冲条。`

### 2.2 自动输出
- **canonical**：`/products/conveyor-components/impact-bed`（en）、`/zh/products/conveyor-components/impact-bed`（zh）。
- **hreflang**：`en`、`zh-CN`、`x-default`。
- **Open Graph**：title / description / image（`media.cover`）、locale。
- **Product JSON-LD**：name、description、image、brand（OVBEL）、category（`Conveyor Components`）。不含 `offers`、`review`、`aggregateRating`。

## 3. 响应式、可访问性与交互
- 图库使用 `ProductGallery`：桌面端左侧缩略图 + 主图，移动端滑动/堆叠；点击主图进入全屏灯箱；支持键盘 Esc 退出、左右箭头切换。
- 无放大镜装饰图标。
- 所有交互元素具备焦点样式；图片包含 `alt`；对比度符合现有主题。
