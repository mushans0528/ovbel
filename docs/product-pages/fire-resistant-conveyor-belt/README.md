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
- `lib/products.ts`：新增 EN 条目 + `zhProducts["fire-resistant-conveyor-belt"]` 中文条目；v2（2026-08-31）扩展 EN/ZH `media.gallery` 为 4 项 + `galleryAlt` 各 4 条。
- `public/products/fire-resistant-conveyor-belt/`：v1（2 张 webp，已删除）→ v2（4 张 OVBEL 自有产品实拍 webp，按 `1.png→cover.webp / 2.png→gallery-01.webp / 3.png→gallery-02.webp / 4.png→gallery-03.webp` 命名）。
- `docs/product-pages/fire-resistant-conveyor-belt/`：本目录下 6 份交付文档。

## 实现要点
- 沿用既有数据驱动架构，未新增组件、未新增路由。
- 页面内容通过 `lib/products.ts` 统一输出，自动同步分类页、产品卡片、相关产品、询盘预填、SEO、canonical、hreflang、Open Graph 和 Product JSON-LD。
- 规格数值（覆盖胶拉伸强度、伸长率、磨耗量、阻燃等级、抗静电性能、火焰持续时间等）均来自原页表格，未编造具体带宽、温度、带速等未给出数据。
- 图片素材：**当前版本（v2）为 OVBEL 自有实拍 PNG**（2026-08-31 用户提供，置于 `~/Desktop/未命名文件夹/阻燃输送带/`），点击可全屏放大，无放大镜装饰图标。历史版本（v1）来自 OVBEL 旧站 CDN，已被本次替换。

## 仍待业务确认
具体带宽范围、带长范围、覆盖胶厚度、工作温度范围、最大带速、最小带轮直径、接头方式、阻燃认证细节、库存、交期、MOQ、价格与保修等，需业务确认后在数据模型中补充。
