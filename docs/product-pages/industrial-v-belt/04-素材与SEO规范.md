# 04 - 素材与 SEO 规范

## 图片来源

全部来自 respowerbelt.com 页面 h-col-157 的 CDN（`30745609.s21i.faiusr.com`），属于同公司旧站素材，具备使用权。

| 文件名 | 来源 CDN 路径 | 用途 |
|---|---|---|
| cover.webp | `...grpKpuwYo1uHtrQYwhwQ45gM.png.webp` | 封面 + 图库 |
| gallery-01.webp | `...grpKpuwYohNztlwEwuAg4uAg.jpg.webp` | 图库 |
| gallery-02.webp | `...nMSpuwYorOC4yAEwsww4sww.jpg.webp` | 图库 |
| specification-table.webp | `...g1_CpuwYo2au7QjCACjjcBA.png.webp` | 技术规格表 |

已排除两张 1208×310 的 RESPOWER 品牌 logo 横幅（e/f），因含旧品牌标识且非产品素材。

## Alt 文本

- cover: "Classical wrapped V-belts in standard profiles A/B/C/D/E/F/Z"
- gallery-01: "Close-up of multi-rib wrapped V-belt surface"
- gallery-02: "Single coiled classical wrapped V-belt"
- specification-table: "Classical wrapped V-belt specification table: profiles, angle, standards, MOQ"

## SEO

- **EN title**: `Classical Wrapped V-Belt A/B/C/D/E/F/Z`
- **ZH title**: `普通包布 V 带 A/B/C/D/E/F/Z`
- Layout 模板自动追加 `| OVBEL`，最终输出：
  - EN: `Classical Wrapped V-Belt A/B/C/D/E/F/Z | OVBEL`
  - ZH: `普通包布 V 带 A/B/C/D/E/F/Z | OVBEL`
- **EN description**: Classical wrapped V-belts in profiles A/B/C/D/E/F/Z. Rubber construction, 40° angle, black or customised. ISO 4184 / DIN 2215 / RMA references. OEM/ODM accepted.
- **ZH description**: OVBEL 普通包布 V 带，标准截面 A/B/C/D/E/F/Z，橡胶结构、40° 带轮槽角，黑色或定制颜色。参考 ISO 4184 / DIN 2215 / RMA，接受 OEM/ODM。

## Canonical / Hreflang / OG

- canonical: `https://ovbel.com/{locale}/products/power-transmission-belts/industrial-v-belt`
- hreflang: `en`, `zh-CN`, `x-default`
- Open Graph: 复用 `seo.title` / `seo.description` + 封面图
- Product JSON-LD: 由 `ProductDetailPage` 自动生成（无 offers/rating/库存/价格）
