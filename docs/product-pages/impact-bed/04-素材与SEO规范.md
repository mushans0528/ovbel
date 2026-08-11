# 04 — 素材与 SEO 规范

## 1. 图片素材

所有图片均下载自 OVBEL 自有 CDN（`30745609.s21i.faiusr.com`），已获使用授权。

| 源文件 | 输出文件 | 内容说明 | 尺寸（转换后） | 用途 |
|---|---|---|---|---|
| 07.webp | `cover.webp` | 缓冲床整体安装图（白/黑色缓冲条） | 555 × 410 | 封面/图库 |
| 08.webp | `impact-bars-red.webp` | 红色缓冲条实物图 | 1600 × 1200 | 图库 |
| 09.webp | `impact-bars-blue-trough.webp` | 蓝色 V 型缓冲条组图 | 531 × 331 | 图库 |
| 10.webp | `impact-bars-red-stack.webp` | 红色缓冲条堆叠图 | 900 × 1600 | 图库 |
| 11.webp | `spec-table.webp` | 缓冲条规格表 | 1663 × 214 | 技术图 |
| 12.webp | `type-a-drawing.webp` | Type A 缓冲条结构图 | 1319 × 484 | 技术图 |
| 13.webp | `type-b-drawing.webp` | Type B 缓冲条结构图 | 1384 × 541 | 技术图 |

### 既有素材保留
以下文件位于 `public/images/products/impact-bed/`，本次继续使用：
- `impact-bed-installed.webp`
- `impact-bed-set.webp`
- `impact-bar-black.webp`
- `impact-bar-red.webp`
- `technical-drawing.png`
- `specification-table.png`
- `specification-notes.png`

### 技术处理
- 输出格式：WebP，quality 92，method 6。
- 图库照片最大边 1600 px；规格表/结构图最大边 2400 px 以保留可读性。
- RGB 模式；无透明通道转换。

### Alt 文本
- 图库图片：由 `ProductGallery` 使用 `productName` 自动生成，例如 `Impact Bed & Bar product view` / `缓冲床与缓冲条产品图`。
- 结构图：由 `ZoomableImage` 使用固定文案：`Impact Bed & Bar three-layer impact bar` / `缓冲床与缓冲条三层缓冲条`。
- 技术图：由 `ZoomableImage` 使用文档标签索引，例如 `Documents 1` / `技术资料 1`。

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
