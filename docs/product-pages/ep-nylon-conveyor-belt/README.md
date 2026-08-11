# EP/Nylon Conveyor Belt / EP/尼龙输送带

| 项目 | 内容 |
|---|---|
| 英文名称 | EP/Nylon Conveyor Belt |
| 中文名称 | EP/尼龙输送带 |
| 产品 slug | `ep-nylon-conveyor-belt` |
| 所属分类 | `conveyor-belts`（输送带） |
| 源页面 | https://www.respowerbelt.com/h-col-125.html |
| 状态 | 已添加到 OVBEL 站点数据模型，构建验证通过，待推送 |

## 变更文件
- `lib/products.ts`：新增 EN 条目 + `zhProducts["ep-nylon-conveyor-belt"]` 中文条目。
- `public/products/ep-nylon-conveyor-belt/`：4 张真实产品 / 规格表 webp。
- `docs/product-pages/ep-nylon-conveyor-belt/`：本目录下 6 份交付文档。

## 实现要点
- 沿用既有数据驱动架构，未新增组件、未新增路由。
- 页面内容通过 `lib/products.ts` 统一输出，自动同步分类页、产品卡片、相关产品、询盘预填、SEO、canonical、hreflang、Open Graph 和 Product JSON-LD。
- 具体强度矩阵、覆盖胶厚度、带宽与卷长范围通过 2 张规格表图片（`ep-spec-table.webp`、`nn-spec-table.webp`）呈现，未在文本中编造具体数字。
- 所有图片均来自 OVBEL 自有 CDN，已获使用授权；点击可全屏放大，无放大镜装饰图标。

## 仍待业务确认
具体织物规格默认推荐、覆盖胶等级组合、工作温度范围、最大带速、最小带轮直径、接头方式、阻燃/耐热/耐寒/耐油/耐酸碱认证、库存、交期、MOQ、价格与保修等，需业务确认后在数据模型中补充。
