# 04 — 素材与 SEO 规范

## 1. 图片素材

所有图片均下载自 OVBEL 自有 CDN（`30745609.s21i.faiusr.com`），已获使用授权。

| 源文件 | 输出文件 | 内容说明 | 尺寸（转换后） | 用途 |
|---|---|---|---|---|
| `…/ABUIABACGAAgupKpuwYo2Jqm1wEwhgU4kgM.jpg.webp` | `cover.webp` | 同步带产品图 | 1440 × 1080 | 封面 / 产品卡片 / JSON-LD / OG |
| `…/ABUIABACGAAgu5KpuwYol9vVlwQwoAs4uAg.jpg.webp` | `gallery-01.webp` | 同步带产品图 | 646 × 402 | 图库 |
| `…/ABUIABACGAAgu5KpuwYouIDeigQwjAY4nAQ.jpg.webp` | `gallery-02.webp` | 同步带产品图 | 780 × 540 | 图库 |
| `…/ABUIABACGAAg5rKpuwYo0IuvCTDuBTjmBQ.jpg.webp` | `gallery-03.webp` | 同步带产品图 | 750 × 742 | 图库 |
| `…/ABUIABAEGAAgwYWouwYon9TmCTCACjjpAg.png` | `banner.webp` | 产品横幅图（透明 PNG 合成白底） | 1280 × 361 | 图库 |
| `…/ABUIABAEGAAg0bapuwYoufX24gUwqwY4-QQ.png.webp` | `specification-diagram.webp` | 同步带结构 / 尺寸示意图 | 811 × 637 | 技术图 |

### 技术处理

- 输出格式：WebP，quality 92，method 4。
- 图库照片最大边 1600 px（实际均小于该值，未缩放）；规格图最大边 2400 px 以保留可读性。
- 横幅透明 PNG 先与白色背景合成后再转 WebP，避免透明区域显示异常。

### Alt 文本

- 图库图片：由 `ProductGallery` 使用 `productName` 自动生成，例如 `Timing Belt product view` / `同步带产品图`。
- 技术图：由 `ZoomableImage` 使用文档标签索引，例如 `Timing Belt — Documents 1` / `同步带 — 技术资料 1`。

## 2. SEO 规范

### 2.1 数据字段

- `seo.title`（EN）：`Timing Belt | Rubber Synchronous Belt with Neoprene Body & Glass-Fibre Cord`
- `seo.description`（EN）：`Rubber timing (synchronous) belts with neoprene body, glass-fibre cord reinforcement and nylon 66 tooth facing. Slip-free, efficient, low-noise drive for textile, printing, packaging, automotive and industrial equipment.`
- `seo.title`（ZH）：`同步带 | 氯丁橡胶带体 + 玻璃纤维承拉层橡胶同步带`
- `seo.description`（ZH）：`OVBEL 橡胶同步带，氯丁橡胶带体、玻璃纤维承拉层、尼龙 66 齿面包布。无滑差、高效率、低噪声，适用于纺织、印刷、包装、汽车及通用工业传动。`

### 2.2 自动输出

- **canonical**：`/products/power-transmission-belts/timing-belt`（en）、`/zh/products/power-transmission-belts/timing-belt`（zh）。
- **hreflang**：`en`、`zh-CN`、`x-default`。
- **Open Graph**：title / description / image（`media.cover`）、locale。
- **Product JSON-LD**：name、description、image、brand（OVBEL）、category（`Power Transmission Belts`）。不含 `offers`、`review`、`aggregateRating`。

## 3. 响应式、可访问性与交互

- 图库使用 `ProductGallery`：桌面端左侧缩略图 + 主图，移动端滑动/堆叠；点击主图进入全屏灯箱；支持键盘 Esc 退出、左右箭头切换。
- 无放大镜装饰图标。
- 所有交互元素具备焦点样式；图片包含 `alt`；对比度符合现有主题。
