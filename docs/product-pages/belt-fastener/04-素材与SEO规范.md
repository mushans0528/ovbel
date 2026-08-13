# 04 - 素材与 SEO 规范

## 图片来源与使用边界

素材均由用户指定的 Respower 原产品页 `h-col-131` 引用的公开 CDN 文件提取。用户要求从该现有页面整合真实产品素材；交付前仍建议由业务方留存素材权属或授权记录。

| 本地文件 | 原始 CDN 路径后缀 | 用途 |
|---|---|---|
| `cover.webp` | `...sK3fugYo0JXk2gEwmwk45Ac.jpg.webp` | 封面/图库，镀锌扣板、螺栓和螺母 |
| `gallery-02.webp` | `...sK3fugYo4K7T7QYw5Ag4gwk.jpg.webp` | 深色带扣组件双角度 |
| `gallery-03.webp` | `...sK3fugYo4-3vyQEwmwk40wY.jpg.webp` | 深色扣板与五金展开 |
| `gallery-04.webp` | `...sK3fugYo_5jJqgEwmwk49gY.jpg.webp` | 带扣扣板特写 |
| `model-selection-table.png` | `...ja7fugYoisrgtQYwrwo43gU.png` | 型号、厚度、强度、滚筒及工具参考 |

五张图均已人工视觉检查，无 Respower 水印或可见旧品牌标识。未使用生成式或替代性产品图。

## Alt 文本

EN/ZH 分别存入统一 `ProductMedia.galleryAlt` 与 `technicalImageLabels`，描述图中实际部件，不以“图片 1”代替。

## SEO 与结构化数据

- EN canonical: `https://ovbel.com/en/products/conveyor-components/belt-fastener`
- ZH canonical: `https://ovbel.com/zh/products/conveyor-components/belt-fastener`
- hreflang: `en`、`zh-CN`、`x-default`
- Open Graph: 使用双语 SEO 文案和真实封面图
- Product JSON-LD: 包含产品名、简介、分类、品牌、URL 和图片；不包含未确认的 offers、价格、库存或评分
