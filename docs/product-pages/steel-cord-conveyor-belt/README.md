# Steel Cord Conveyor Belt / 钢丝绳芯输送带

| 项目 | 内容 |
|---|---|
| 英文名称 | Steel Cord Conveyor Belt |
| 中文名称 | 钢丝绳芯输送带 |
| 产品 slug | `steel-cord-conveyor-belt` |
| 所属分类 | `conveyor-belts`（输送带） |
| 源页面 | https://www.respowerbelt.com/h-col-136.html |
| 状态 | 已重新添加到 OVBEL 站点数据模型，待构建验证与推送 |

## 变更文件
- `lib/products.ts`：新增 EN 条目 + `zhProducts["steel-cord-conveyor-belt"]` 中文条目。
- `public/products/steel-cord-conveyor-belt/`：8 张真实产品 / 规格表 webp。
- `docs/product-pages/steel-cord-conveyor-belt/`：本目录下 6 份交付文档。
- `docs/product-pages/anti-tear-conveyor-belt/03-实现规格.md`：将 anti-tear 位置引用从"white 之后"改回"steel-cord 之后"。

## 实现要点
- 沿用既有数据驱动架构，未新增组件、未新增路由。
- 页面内容通过 `lib/products.ts` 统一输出，自动同步分类页、产品卡片、相关产品、询盘预填、SEO、canonical、hreflang、Open Graph 和 Product JSON-LD。
- 数值型规格（St 等级、钢丝绳根数、粘合力等）仅通过 3 张规格表图片呈现，未在文案中编造具体数字。
- 所有图片均来自 OVBEL 自有 CDN，已获使用授权；点击可全屏放大，无放大镜装饰图标。

## 仍待业务确认
具体 ST 等级、带宽范围、钢丝绳根数与间距、覆盖胶厚度、工作温度范围、最大带速、最小带轮直径、接头方式、阻燃/耐热/耐寒认证、库存、交期、MOQ、价格与保修等，需业务确认后在数据模型中补充。
