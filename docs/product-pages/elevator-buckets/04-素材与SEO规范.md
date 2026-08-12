# 04 — 素材与 SEO 规范

## 1. 图片素材

所有图片均下载自 OVBEL 自有 CDN（`30745609.s21i.faiusr.com`），已获使用授权。

| 源文件 | 输出文件 | 内容说明 | 尺寸（转换后） | 用途 |
|---|---|---|---|---|
| img4.webp | `cover.webp` | 彩色塑料料斗组合图 | 598 × 599 | 封面 / JSON-LD / OG |
| img1.webp | `gallery-01.webp` | 不锈钢料斗实物图（两件） | 801 × 603 | 图库 |
| img2.webp | `gallery-02.webp` | 不锈钢料斗实物图（单件侧视） | 655 × 599 | 图库 |
| img3.webp | `gallery-03.webp` | 不锈钢料斗实物图（三孔近景） | 645 × 648 | 图库 |
| img5.webp | `material-comparison-table.webp` | 材料性能对比表 | 1488 × 704 | 技术图 |
| img6.webp | `material-applications-table.webp` | 材料应用场景表 | 939 × 684 | 技术图 |
| img7.webp | `dimension-drawing.webp` | 料斗尺寸参数图 | 1222 × 542 | 技术图 |

### 技术处理
- 输出格式：WebP，quality 92，method 6。
- 图库照片最大边 1600 px；规格表/结构图最大边 2400 px 以保留可读性。
- RGB 模式；无透明通道转换。

### Alt 文本
- 图库图片：由 `ProductGallery` 使用 `productName` 自动生成，例如 `Elevator Buckets product view` / `提升机料斗产品图`。
- 技术图：由 `ZoomableImage` 使用文档标签索引，例如 `Elevator Buckets — Documents 1` / `提升机料斗 — 技术资料 1`。

## 2. SEO 规范

### 2.1 数据字段
- `seo.title`（EN）：`Elevator Buckets | Steel, HDPE, Nylon & PU Bucket Range`
- `seo.description`（EN）：`Elevator buckets in mild steel, stainless steel, HDPE, nylon 6, reinforced nylon and PU. Over 12 models and nearly 400 size references for grain, food and industrial vertical conveying.`
- `seo.title`（ZH）：`提升机料斗 | 钢质、HDPE、尼龙与 PU 料斗系列`
- `seo.description`（ZH）：`OVBEL 提升机料斗提供低碳钢、不锈钢、HDPE、尼龙 6、增强尼龙和 PU 六种材料，12 个以上系列、近 400 个尺寸参考，适用于粮食、食品及工业垂直输送。`

### 2.2 自动输出
- **canonical**：`/products/conveyor-components/elevator-buckets`（en）、`/zh/products/conveyor-components/elevator-buckets`（zh）。
- **hreflang**：`en`、`zh-CN`、`x-default`。
- **Open Graph**：title / description / image（`media.cover`）、locale。
- **Product JSON-LD**：name、description、image、brand（OVBEL）、category（`Conveyor Components`）。不含 `offers`、`review`、`aggregateRating`。

## 3. 响应式、可访问性与交互
- 图库使用 `ProductGallery`：桌面端左侧缩略图 + 主图，移动端滑动/堆叠；点击主图进入全屏灯箱；支持键盘 Esc 退出、左右箭头切换。
- 无放大镜装饰图标。
- 所有交互元素具备焦点样式；图片包含 `alt`；对比度符合现有主题。
