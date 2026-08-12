# Rubber Seal Strip / 橡胶密封条

| 项目 | 内容 |
|---|---|
| 英文名称 | Rubber Seal Strip |
| 中文名称 | 橡胶密封条 |
| 产品 slug | `rubber-seal-strip` |
| 所属分类 | `rubber-products-hoses`（橡胶制品与胶管） |
| 源页面 | https://www.respowerbelt.com/h-col-154.html |
| 状态 | 新增产品页；基于 h-col-154 真实图片与参数表补全 |

## 变更文件

- `lib/products.ts`：
  - 在 `products` 数组中新增 `rubber-seal-strip` 完整 EN 条目（含材料、颜色、硬度、尺寸、应用、功能、储运须知、询盘清单、SEO、`media`）。
  - 在 `zhProducts` 中新增对应中文条目，保持中英文信息对等。
- `public/products/rubber-seal-strip/`：新增 5 张来自 h-col-154 的真实产品 webp（4 张产品图 + 1 张参数表）。
- `docs/product-pages/rubber-seal-strip/`：本目录下 6 份交付文档。

## 实现要点

- 沿用既有数据驱动架构，未新增组件、未新增路由；新增产品 slug 自动接入分类页、产品卡片、相关产品、询盘预填、SEO、canonical、hreflang、Open Graph 和 Product JSON-LD。
- 产品名称、材料（EPDM）、颜色（黑色）、硬度（60–65 SHA）、尺寸（可定制）、应用领域（Mining, Machine, Vehicles, Boat）及功能（Sharp edge protective, Waterproof, Windproof, Airproof, Dustproof）均来自 h-col-154 页面参数表。
- 页面文案围绕原站事实重新撰写，未照抄原句；未编造具体尺寸数值、材料牌号、价格、库存、认证或应用承诺。
- 所有图片均来自 OVBEL 自有 CDN，已获使用授权；点击可全屏放大，无放大镜装饰图标。

## 仍待业务确认

- 具体尺寸系列表（如 U 型槽内宽 × 高度 × 壁厚、泡型边半径等）。
- 材料牌号/等级（EPDM 的具体配方、硬度范围是否可覆盖 60/70/80 SHA 等）。
- 耐温范围、耐臭氧/耐油等级、阻燃等级等性能参数。
- 压缩永久变形率、拉伸强度、断裂伸长率等物理性能。
- 颜色选项（除黑色外是否支持定制）。
- FDA、ROHS、REACH 等认证的具体标准号与适用范围。
- 单卷/单根长度、最小起订量、价格、交期、包装方式与保修条款。
