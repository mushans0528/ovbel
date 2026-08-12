# 04 — 素材与 SEO 规范

## 1. 图片素材

所有图片均下载自 OVBEL 自有 CDN（`30745609.s21i.faiusr.com`），已获使用授权。

| 源文件 | 输出文件 | 内容说明 | 尺寸（转换后） | 用途 |
|---|---|---|---|---|
| img1.webp | `cover.webp` | 多种 U 型槽密封条排列展示图 | 750 × 750 | 封面 / 产品卡片 / JSON-LD / OG |
| img2.webp | `gallery-01.webp` | 单条弯曲背部泡型密封条实物图 | 800 × 800 | 图库 |
| img3.webp | `gallery-02.webp` | 两条并置 U 型槽密封条实物图 | 800 × 800 | 图库 |
| img4.webp | `gallery-03.webp` | 单条 U 型槽密封条近景图 | 800 × 800 | 图库 |
| img5.webp | `specification-table.webp` | 产品参数表 | 917 × 479 | 技术图 |

### 技术处理

- 输出格式：WebP，quality 92，method 6。
- 图库照片最大边 1600 px；规格表最大边 2400 px 以保留可读性。
- RGB 模式；无透明通道转换。

### Alt 文本

- 图库图片：由 `ProductGallery` 使用 `productName` 自动生成，例如 `Rubber Seal Strip product view` / `橡胶密封条产品图`。
- 技术图：由 `ZoomableImage` 使用文档标签索引，例如 `Rubber Seal Strip — Documents 1` / `橡胶密封条 — 技术资料 1`。

## 2. SEO 规范

### 2.1 数据字段

- `seo.title`（EN）：`Rubber Seal Strip | Custom EPDM U-Channel & Bulb Edge Seals`
- `seo.description`（EN）：`EPDM rubber seal strip in black, 60–65 Shore A, supplied in custom sizes. U-channel and bulb-edge profiles for waterproof, windproof, dustproof sealing on mining, vehicle and marine equipment.`
- `seo.title`（ZH）：`橡胶密封条 | 定制 EPDM U 型槽与泡型边密封条`
- `seo.description`（ZH）：`OVBEL 黑色 EPDM 橡胶密封条，硬度 60–65 邵氏 A，按尺寸定制。U 型槽和泡型边结构，用于矿山、车辆、船用设备的防水、防风、防尘密封。`

### 2.2 自动输出

- **canonical**：`/products/rubber-products-hoses/rubber-seal-strip`（en）、`/zh/products/rubber-products-hoses/rubber-seal-strip`（zh）。
- **hreflang**：`en`、`zh-CN`、`x-default`。
- **Open Graph**：title / description / image（`media.cover`）、locale。
- **Product JSON-LD**：name、description、image、brand（OVBEL）、category（`Rubber Products & Hoses`）。不含 `offers`、`review`、`aggregateRating`。

## 3. 响应式、可访问性与交互

- 图库使用 `ProductGallery`：桌面端左侧缩略图 + 主图，移动端滑动/堆叠；点击主图进入全屏灯箱；支持键盘 Esc 退出、左右箭头切换。
- 无放大镜装饰图标。
- 所有交互元素具备焦点样式；图片包含 `alt`；对比度符合现有主题。
