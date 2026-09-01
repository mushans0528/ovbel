# Elevator Buckets / 提升机料斗

| 项目 | 内容 |
|---|---|
| 英文名称 | Elevator Buckets |
| 中文名称 | 提升机料斗 |
| 产品 slug | `elevator-buckets` |
| 所属分类 | `conveyor-components`（输送机配件） |
| 源页面 | https://www.respowerbelt.com/h-col-129.html |
| 状态 | 详情页图库图片 v1→v2（OVBEL 自有素材替换参考站图） |

## 变更文件

### v1（首次补齐）
- `lib/products.ts`：将 `elevator-buckets` 占位条目替换为完整 EN 定义（含材料选项、型号系列、规格、应用、储运须知、询盘清单、SEO、`media`）；同步扩展 `zhProducts["elevator-buckets"]` 中文条目。
- `public/products/elevator-buckets/`：新增 7 张来自 h-col-129 的真实产品 webp（3 张图库 + 3 张技术图 + 1 张封面）。
- `docs/product-pages/elevator-buckets/`：本目录下 6 份交付文档。

### v2（详情页图库替换）
- `public/products/elevator-buckets/`：
  - `cover.webp` ← `1.jpg`（白色 HDPE 料斗，正面矩形视图）
  - `gallery-01.webp` ← `2.png`（白色塑料料斗，V 形剖面/俯视）
  - `gallery-02.webp` ← `3.jpg`（橙色 HDPE 料斗，锥形矩形剖面）
  - `gallery-03.webp` ← `4.jpg`（不锈钢料斗，拉丝金属表面）
  - 技术图 3 张保留不动。
- `lib/products.ts`：
  - EN `media.gallery` 由 3 项扩为 4 项（首位补 `cover`，与 `cover` 重复以兼容既有展示逻辑）；新增 4 条 EN `galleryAlt`。
  - ZH `media` 块新增完整（4 项 gallery + 4 条 ZH `galleryAlt` + 3 项 `technicalImages`），与 EN 数据对齐。

## 实现要点
- 沿用既有数据驱动架构，未新增组件、未新增路由、未新增产品 slug。
- 页面内容通过 `lib/products.ts` 统一输出，自动同步分类页、产品卡片、相关产品、询盘预填、SEO、canonical、hreflang、Open Graph 和 Product JSON-LD。
- 六种材料、AA/DM/EU 型号结构、温度参数、FDA 食品接触认证材料、料斗间距、容量设计参考均来自 h-col-129 页面文字或图片中的材料对比表；未编造完整 12 种型号名称、具体尺寸表、承重、认证、价格、库存等未给出数据。
- 图库 v2 图片均为 OVBEL 自有产品素材（用户提供，2026-09-01 替换 v1 参考站图）；点击可全屏放大，无放大镜装饰图标。
- 技术图（材料对比表、应用场景表、尺寸参数图）保持 v1 版本，独立于图库显示。

## 资料纪律
- 严格区分已确认事实 / 编辑性改写 / 待业务确认，所有字段都可溯源。
- 图库 v2 全部为 OVBEL 自有素材（用户提供），消除第三方版权风险。
- 未编造标准、认证、价格、库存、应用承诺。

## 仍待业务确认
- 12 种以上料斗型号的完整命名与尺寸表（页面仅给出 AA、DM、EU 及"12+ / 近 400 参考"）。
- 每种材料的具体牌号/等级（如不锈钢 304/316、HDPE 食品级牌号、尼龙 6 与增强尼龙具体规格）。
- FDA 认证的具体标准号与适用范围。
- 具体料斗尺寸 A/B/C/H/T 的数值表及与型号的对应关系。
- 安装孔直径、孔数及背板厚度。
- 最大单斗容量、推荐带速、最大允许块度。
- 库存、交期、MOQ、价格、包装方式与保修条款。
