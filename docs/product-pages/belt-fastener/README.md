# Conveyor Belt Fastener / 输送带扣

- **slug**: `belt-fastener`
- **category**: `conveyor-components`
- **source page**: https://www.respowerbelt.com/h-col-131.html
- **status**: 双语页面、真实素材、型号参考和询盘/SEO 级联已整合

## 交付物

| 文件 | 说明 |
|---|---|
| `01-原站内容审计.md` | 已确认事实、编辑性改写与待业务确认项 |
| `02-双语页面文案.md` | 中英文对齐的上线文案 |
| `03-实现规格.md` | 现有模型、路由、组件和级联效果 |
| `04-素材与SEO规范.md` | 图片来源、alt、SEO 与结构化数据 |
| `05-验收清单.md` | 构建、响应式、可访问性和待确认项 |

## 变更文件（v1 → v2 增量）

### v1（2026-08-13 首次创建）
- `lib/products.ts` 新增 `belt-fastener` EN 条目与 `zhProducts["belt-fastener"]` 覆盖；4 张产品 webp（`cover` + `gallery-02/03/04`）来自参考站 CDN；技术资料 1 张。
- 6 份 dossier 文档（本目录全部 6 份）。
- 旧的 4 张图版权待业务确认，交付建议补自有素材。

### v2（2026-09-01 详情页图片替换）
- `lib/products.ts`：
  - `products[].media.gallery` 由 4 项改为 3 项（`cover` + `gallery-01` + `gallery-02`），文件路径不变但内容已替换为用户自有 JPG 转 webp。
  - 新增 3 条 EN `galleryAlt`。
  - `zhProducts["belt-fastener"].media.gallery` 同步改为 3 项；新增 3 条 ZH `galleryAlt`。
  - `media.technicalImages` / `media.technicalImageLabels` 保持不变。
- `public/products/belt-fastener/cover.webp` 与 `gallery-02.webp`：内容替换为用户自有 JPG。
- 新增 `public/products/belt-fastener/gallery-01.webp`。
- 删除 `public/products/belt-fastener/gallery-03.webp` 与 `gallery-04.webp`（已无引用）。
- 6 份 dossier 文档按 v1→v2 重写（本目录 `04-素材与SEO规范.md` / `05-验收清单.md` / `README.md`），其它 3 份无引用变更。

## 实现要点

- 沿用数据驱动架构：`lib/products.ts` 的 `media` 子键为唯一变更点；`ProductGallery` 自动从 `gallery` 数组渲染并支持灯箱、Esc、左右方向键。
- 仅做主图替换；技术资料（`model-selection-table.png`）保持原文件名与位置，避免破坏"技术资料与文档"分区。
- EN/ZH 各自维护 3 条 `galleryAlt`，与图库顺序一一对应；未引用 4 张以上的图，因此 gallery 长度缩为 3。

## 资料纪律

- 凡是用户提供的 OVBEL 自有素材（含本次 3 张 JPG）可直接使用并标注"OVBEL 自有素材"；不再向业务方索要授权证明。
- 凡是来自第三方参考站（respowerbelt.com / rprbelt.com / sjbelt.com 等 CDN）的图片，必须在替换为自有素材后才能删除"版权待业务确认"标注；未替换前不可删除。
- 用户图片存放位置固定为 `~/Desktop/未命名文件夹/<品类名>/`，命名遵循 `1.<ext> / 2.<ext> / 3.<ext> / 4.<ext>` 自然顺序。
