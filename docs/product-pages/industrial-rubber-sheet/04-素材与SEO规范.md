# 04-素材与 SEO 规范 — Industrial Rubber Sheet / 工业橡胶板

## 图片清单

| 文件名 | 来源 | 内容 | 用途 | 尺寸（处理后） |
|---|---|---|---|---|
| `cover.webp` | h-col-155 图 4 | 卷状黑色工业橡胶板特写 | 产品封面 | 1500 × 1500 |
| `gallery-01.webp` | h-col-155 图 2 | 黑色橡胶矩形块 | 图库 | 1280 × 1280 |
| `gallery-02.webp` | h-col-155 图 1 | 卷状黑色橡胶板 | 图库 | 387 × 354 |
| `gallery-03.webp` | h-col-155 图 3 | 卷状黑色橡胶板 | 图库 | 362 × 390 |
| `specification-table.webp` | h-col-155 图 5 | SBR Rubber Sheet 参数表 | 技术文档 | 958 × 349 |

## 转码规则

- 使用 Pillow 转换为 webp，quality=92，method=6。
- 照片类最大边 1600 px；参数表/图纸类最大边 2400 px。
- 保持原始宽高比，不裁剪。

## Alt 文本

| 图片 | 英文 alt | 中文 alt |
|---|---|---|
| cover | Black industrial rubber sheet roll | 卷状黑色工业橡胶板 |
| gallery-01 | Black industrial rubber sheet block | 黑色工业橡胶板矩形块 |
| gallery-02 | Black rubber sheet roll | 卷状黑色橡胶板 |
| gallery-03 | Black rubber sheet roll view | 卷状黑色橡胶板展示 |
| specification-table | SBR rubber sheet specification table | SBR 橡胶板参数表 |

> Alt 文本由现有 `ProductGallery` 与 `ZoomableImage` 通过 `alt` 参数传入；最终显示文案由组件内部根据 locale 决定，或直接使用图片路径中的描述字段。当前数据模型未为每图单独配置 alt，组件使用产品名称 + 索引生成可访问文本。

## SEO 规范

- **canonical**：由 `[locale]/[[...path]]/page.tsx` 根据当前 locale 与 slug 自动生成。
- **hreflang**：en、zh-CN、x-default，由同一页面输出。
- **Open Graph**：
  - `og:title` 使用 `seo.title`
  - `og:description` 使用 `seo.description`
  - `og:image` 使用 `media.cover`
- **Product JSON-LD**：由 `ProductDetailPage` 自动输出，包含 name、description、image、brand；不含 `offers`、`review`、`aggregateRating`。
- 页面 URL：
  - `/en/products/industrial-rubber-sheet`
  - `/zh/products/industrial-rubber-sheet`
