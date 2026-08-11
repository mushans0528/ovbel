# Polyurethane Belt Cleaner / 聚氨酯清扫器

| 项目 | 内容 |
|---|---|
| 英文名称 | Polyurethane Belt Cleaner |
| 中文名称 | 聚氨酯清扫器 |
| 产品 slug | `polyurethane-belt-cleaner` |
| 所属分类 | `conveyor-components`（输送机配件） |
| 型号 | DB-HPU |
| 源页面 | https://www.respowerbelt.com/h-col-126.html |
| 状态 | 已添加到 OVBEL 站点数据模型，构建验证通过，待推送 |

## 变更文件
- `lib/products.ts`：新增 EN 条目 + `zhProducts["polyurethane-belt-cleaner"]` 中文条目。
- `public/products/polyurethane-belt-cleaner/`：5 张真实产品 webp（3 张图库 + 2 张技术图）。
- `docs/product-pages/polyurethane-belt-cleaner/`：本目录下 6 份交付文档。

## 实现要点
- 沿用既有数据驱动架构，未新增组件、未新增路由。
- 页面内容通过 `lib/products.ts` 统一输出，自动同步分类页、产品卡片、相关产品、询盘预填、SEO、canonical、hreflang、Open Graph 和 Product JSON-LD。
- 参数（带宽 450–2400 mm、带速 ≤3.5 m/s、温度 −40~90 °C、湿度 ≤15%）均来自原页明确文字；选型表以技术图片形式保留，未编造具体刮刀硬度、弹簧行程、支架尺寸等未给出数据。
- 所有图片均来自 OVBEL 自有 CDN，已获使用授权；点击可全屏放大，无放大镜装饰图标。

## 仍待业务确认
聚氨酯硬度 / 刮刀材质牌号、刮刀分段尺寸、支架及弹簧规格、适用认证（CE / ATEX 等）、带宽与选型表上限的一致性（页面文字 2400 mm，选型表出现 120 in. 约 3000 mm）、库存、交期、MOQ、价格与保修等，需业务确认后在数据模型中补充。
