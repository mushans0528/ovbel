# 04 — 素材与 SEO 规范

## 1. 图片素材

所有图片均下载自 OVBEL 自有 CDN（`30745609.s21i.faiusr.com`），已获使用授权。

| 源文件 | 输出文件 | 内容说明 | 尺寸（转换后） | 用途 |
|---|---|---|---|---|
| 08_pngA.webp | `cover.webp` | 红色聚氨酯刮刀实物图（白底） | 657 × 371 | 封面/图库首图 |
| 07_photo1.webp | `gallery-02.webp` | 3D 渲染外观图 | 800 × 700 | 图库 |
| 10_photo2.webp | `gallery-03.webp` | 两款实物并排图 | 750 × 750 | 图库 |
| 09_pngB.webp | `installation-diagram.webp` | 头部滚筒安装示意图（含标注） | 675 × 326 | 技术图 |
| 11_pngC.webp | `selection-table.webp` | 带宽/滚筒直径分段选型表 | 1180 × 695 | 技术图 |

### 技术处理
- 输出格式：WebP，quality 92，method 6。
- 图库照片最大边 1600 px；选型表最大边 2000 px 以保留可读性。
- RGB 模式；无透明通道转换。

### Alt 文本
- `cover.webp` / `gallery-02.webp` / `gallery-03.webp`：`Polyurethane belt cleaner DB-HPU product view` / `DB-HPU 聚氨酯头部清扫器产品图`（由 `ProductGallery` 使用 `productName` 自动生成）。
- `installation-diagram.webp`：`DB-HPU belt cleaner installed on head pulley` / `DB-HPU 清扫器安装于头部滚筒示意图`。
- `selection-table.webp`：`Blade segment selection table by belt width and pulley diameter` / `按带宽与滚筒直径选择刮刀分段数量`。

## 2. SEO 规范

### 2.1 数据字段
- `seo.title`（EN）：`DB-HPU Polyurethane Primary Belt Cleaner for Conveyor Head Pulleys`
- `seo.description`（EN）：`DB-HPU primary polyurethane belt cleaner with self-adjusting spring tensioners for head pulleys. Suitable for 450–2400 mm belt widths, speeds up to 3.5 m/s and temperatures from −40 °C to +90 °C.`
- `seo.title`（ZH）：`DB-HPU 聚氨酯头部清扫器 | 输送机皮带清扫`
- `seo.description`（ZH）：`DB-HPU 聚氨酯一次性头部清扫器，配自调弹簧张紧装置，适用带宽 450–2400 mm、带速最高 3.5 m/s、工作温度 −40 °C 至 +90 °C。`

### 2.2 自动输出
- **canonical**：`/products/conveyor-components/polyurethane-belt-cleaner`（en）、`/zh/products/conveyor-components/polyurethane-belt-cleaner`（zh）。
- **hreflang**：`en`、`zh-CN`、`x-default`。
- **Open Graph**：title / description / image（`media.cover`）、locale。
- **Product JSON-LD**：name、description、image、brand（OVBEL）、category（`Conveyor Components`）。不含 `offers`、`review`、`aggregateRating`。

## 3. 响应式、可访问性与交互
- 图库使用 `ProductGallery`：桌面端左侧缩略图 + 主图，移动端滑动/堆叠；点击主图进入全屏灯箱；支持键盘 Esc 退出、左右箭头切换。
- 无放大镜装饰图标。
- 所有交互元素具备焦点样式；图片包含 `alt`；对比度符合现有主题。
