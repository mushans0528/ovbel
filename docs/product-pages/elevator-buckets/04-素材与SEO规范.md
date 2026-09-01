# 04 — 素材与 SEO 规范

## 1. 图片素材

### v2（详情页图库当前）

4 张详情页图库图片均来自 OVBEL 自有产品素材（由用户提供，`~/Desktop/未命名文件夹/畚斗Elevator Buckets/` 目录，命名为 `1.jpg`、`2.png`、`3.jpg`、`4.jpg`），2026-09-01 替换 v1。

| 源文件 | 输出文件 | 内容说明 | 尺寸（转换后） | 用途 |
|---|---|---|---|---|
| 1.jpg | `cover.webp` | 白色 HDPE 塑料提升机料斗，正面矩形视图，三个安装孔清晰可见（hero / #1） | 1200 × 1200 | 封面 / JSON-LD / OG |
| 2.png | `gallery-01.webp` | 白色塑料料斗 V 形剖面/俯视，三个安装孔位 | 800 × 800 | 图库 |
| 3.jpg | `gallery-02.webp` | 橙色/红色 HDPE 塑料料斗，锥形矩形剖面 | 800 × 800 | 图库 |
| 4.jpg | `gallery-03.webp` | 不锈钢料斗，拉丝金属表面，可见安装孔 | 1000 × 1000 | 图库 |

### v1（旧参考资源，仍保留）

v1 引用过 6 张来自参考站（respowerbelt.com）的塑料/不锈钢料斗图，命名沿用 `cover.webp` + `gallery-01.webp` / `gallery-02.webp` / `gallery-03.webp`。本次 v2 直接覆盖 `cover.webp` 与 `gallery-01.webp` / `gallery-02.webp` / `gallery-03.webp` 4 个文件名；图片内容已替换为 OVBEL 自有素材，版权风险消除。

### 技术图（保留不动）

`media.technicalImages` 中的 3 张技术图独立于图库之外，未参与本次替换。

| 输出文件 | 内容说明 | 用途 |
|---|---|---|
| `material-comparison-table.webp` | 6 种材料性能对比表 | 规格章节 |
| `material-applications-table.webp` | 6 种材料应用场景表 | 规格章节 |
| `dimension-drawing.webp` | 料斗尺寸参数图 | 技术资料 |

### 技术处理
- 输出格式：WebP，quality 88，method 4。
- 长边封顶 1920 px（本次源图长边均 ≤ 1200 px，未缩放）。
- RGB 模式；无透明通道转换；对 `RGBA`/`P`（调色板）源图自动 `convert("RGB")`。
- 工具：托管 Python venv（Pillow）。

### Alt 文本

v2 起 EN 与 ZH 各自显式提供 4 条 `galleryAlt`，描述每张图的内容（材料、形状、视角）。

- EN：
  - `White HDPE elevator bucket, rectangular front view with three mounting holes`
  - `White plastic elevator bucket viewed from above showing V-profile and mounting holes`
  - `Orange HDPE elevator bucket, tapered rectangular profile`
  - `Stainless steel elevator bucket, brushed metal finish with mounting holes`
- ZH：
  - `白色 HDPE 提升机料斗，正面矩形视图，可见三个安装孔`
  - `白色塑料提升机料斗，俯视显示 V 形剖面及安装孔位`
  - `橙色 HDPE 提升机料斗，锥形矩形剖面`
  - `不锈钢提升机料斗，拉丝金属表面，可见安装孔`
- 技术图：由 `ZoomableImage` 使用文档标签索引（例如 `Elevator Buckets — Documents 1` / `提升机料斗 — 技术资料 1`）。

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
