# Elevator Buckets / 提升机料斗

| 项目 | 内容 |
|---|---|
| 英文名称 | Elevator Buckets |
| 中文名称 | 提升机料斗 |
| 产品 slug | `elevator-buckets` |
| 所属分类 | `conveyor-components`（输送机配件） |
| 源页面 | https://www.respowerbelt.com/h-col-129.html |
| 状态 | 此前为占位条目；本次基于 h-col-129 补齐完整产品页资料与图片 |

## 变更文件
- `lib/products.ts`：将 `elevator-buckets` 占位条目替换为完整 EN 定义（含材料选项、型号系列、规格、应用、储运须知、询盘清单、SEO、`media`）；同步扩展 `zhProducts["elevator-buckets"]` 中文条目。
- `public/products/elevator-buckets/`：新增 7 张来自 h-col-129 的真实产品 webp（3 张图库 + 3 张技术图 + 1 张封面）。
- `docs/product-pages/elevator-buckets/`：本目录下 6 份交付文档。

## 实现要点
- 沿用既有数据驱动架构，未新增组件、未新增路由、未新增产品 slug。
- 页面内容通过 `lib/products.ts` 统一输出，自动同步分类页、产品卡片、相关产品、询盘预填、SEO、canonical、hreflang、Open Graph 和 Product JSON-LD。
- 六种材料、AA/DM/EU 型号结构、温度参数、FDA 食品接触认证材料、料斗间距、容量设计参考均来自 h-col-129 页面文字或图片中的材料对比表；未编造完整 12 种型号名称、具体尺寸表、承重、认证、价格、库存等未给出数据。
- 所有图片均来自 OVBEL 自有 CDN，已获使用授权；点击可全屏放大，无放大镜装饰图标。

## 仍待业务确认
- 12 种以上料斗型号的完整命名与尺寸表（页面仅给出 AA、DM、EU 及“12+ / 近 400 参考”）。
- 每种材料的具体牌号/等级（如不锈钢 304/316、HDPE 食品级牌号、尼龙 6 与增强尼龙具体规格）。
- FDA 认证的具体标准号与适用范围。
- 具体料斗尺寸 A/B/C/H/T 的数值表及与型号的对应关系。
- 安装孔直径、孔数及背板厚度。
- 最大单斗容量、推荐带速、最大允许块度。
- 库存、交期、MOQ、价格、包装方式与保修条款。
