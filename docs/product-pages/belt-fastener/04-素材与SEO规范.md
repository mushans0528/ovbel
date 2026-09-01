# 04 - 素材与 SEO 规范

## 图片来源与使用边界

### v2 资产（当前）

`belt-fastener` 详情页主图（v2）全部来自用户提供的 3 张 OVBEL 自有 JPG（2026-09-01 替换），版权归 OVBEL，可直接上线；v1 来自第三方 CDN 的扣板参考图已在 v2 中被覆盖并从仓库删除，版权风险消除。

| 本地文件 | 源文件 | 用途 | 尺寸 |
|---|---|---|---|
| `cover.webp` | `Desktop/未命名文件夹/卡扣/1.jpg` | 封面/图库 #1，镀锌扣板堆叠特写 | 1200×828 |
| `gallery-01.webp` | `Desktop/未命名文件夹/卡扣/2.jpg` | 图库 #2，扣板与螺栓螺母并排 | 1200×828 |
| `gallery-02.webp` | `Desktop/未命名文件夹/卡扣/3.jpg` | 图库 #3，扣板与螺栓多角度堆叠 | 1200×828 |
| `model-selection-table.png` | （v1 沿用）`...ja7fugYoisrgtQYwrwo43gU.png` | 型号、厚度、强度、滚筒及工具参考 | 图库外 - 技术资料区 |

3 张产品图均经视觉检查，无第三方水印或旧品牌标识。技术资料图作为"技术资料与文档"分区展示，不进主图库。

### v1 历史（已不再引用）

| 本地文件（已删除） | 原 CDN 路径后缀 |
|---|---|
| `gallery-02.webp` | `...sK3fugYo4K7T7QYw5Ag4gwk.jpg.webp` |
| `gallery-03.webp` | `...sK3fugYo4-3vyQEwmwk40wY.jpg.webp` |
| `gallery-04.webp` | `...sK3fugYo_5jJqgEwmwk49gY.jpg.webp` |

v1 还引用过一张 `cover.webp`（CDN 后缀 `sK3fugYo0JXk2gEwmwk45Ac.jpg.webp`），文件名保留但内容已替换为用户自有 JPG。

## Alt 文本

EN/ZH 分别存入统一 `ProductMedia.galleryAlt` 与 `technicalImageLabels`，描述图中实际部件，不以"图片 1"代替。

## SEO 与结构化数据

- EN canonical: `https://ovbel.com/en/products/conveyor-components/belt-fastener`
- ZH canonical: `https://ovbel.com/zh/products/conveyor-components/belt-fastener`
- hreflang: `en`、`zh-CN`、`x-default`
- Open Graph: 使用双语 SEO 文案和真实封面图
- Product JSON-LD: 包含产品名、简介、分类、品牌、URL 和图片；不包含未确认的 offers、价格、库存或评分
