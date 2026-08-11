# Fire Resistant Conveyor Belt / 阻燃输送带

| 项目 | 内容 |
|---|---|
| 英文名称 | Fire Resistant Conveyor Belt |
| 中文名称 | 阻燃输送带 |
| 产品 slug | `fire-resistant-conveyor-belt` |
| 所属分类 | `conveyor-belts`（输送带） |
| 源页面 | https://www.respowerbelt.com/h-col-135.html |
| 状态 | 已添加到 OVBEL 站点数据模型，构建验证通过，待推送 |

## 变更文件
- `lib/products.ts`：新增 EN 条目 + `zhProducts["fire-resistant-conveyor-belt"]` 中文条目。
- `public/products/fire-resistant-conveyor-belt/`：2 张真实产品 webp。
- `docs/product-pages/fire-resistant-conveyor-belt/`：本目录下 6 份交付文档。

## 实现要点
- 沿用既有数据驱动架构，未新增组件、未新增路由。
- 页面内容通过 `lib/products.ts` 统一输出，自动同步分类页、产品卡片、相关产品、询盘预填、SEO、canonical、hreflang、Open Graph 和 Product JSON-LD。
- 规格数值（覆盖胶拉伸强度、伸长率、磨耗量、阻燃等级、抗静电性能、火焰持续时间等）均来自原页表格，未编造具体带宽、温度、带速等未给出数据。
- 所有图片均来自 OVBEL 自有 CDN，已获使用授权；点击可全屏放大，无放大镜装饰图标。

## 仍待业务确认
具体带宽范围、带长范围、覆盖胶厚度、工作温度范围、最大带速、最小带轮直径、接头方式、阻燃认证细节、库存、交期、MOQ、价格与保修等，需业务确认后在数据模型中补充。
