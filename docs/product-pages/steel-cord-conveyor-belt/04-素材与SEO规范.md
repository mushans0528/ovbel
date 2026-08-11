# 04 — 素材与 SEO 规范

## 1. 图片素材

所有图片均来自 OVBEL 自有 CDN `30745609.s21i.faiusr.com`，URL 取自源页面 `https://www.respowerbelt.com/h-col-136.html`，已获使用授权。

| 文件名 | 内容说明 | 用途 | Alt 文本（EN） | Alt 文本（ZH） |
|---|---|---|---|---|
| `cover.webp` | 钢丝绳芯输送带分层结构示意（爆炸图） | 封面 / 图库首图 | Steel cord conveyor belt layered construction showing rubber covers and steel cables | 钢丝绳芯输送带分层结构，展示橡胶覆盖层与钢丝绳 |
| `belt-structure.webp` | 带体横截面，显示多根钢丝绳排布 | 图库 | Cross-section of steel cord conveyor belt showing steel cable arrangement | 钢丝绳芯输送带横截面，显示钢丝绳排布 |
| `construction.webp` | 两块堆叠的钢丝绳芯输送带样品 | 图库 | Stacked steel cord conveyor belt samples | 堆叠的钢丝绳芯输送带样品 |
| `belt-roll.webp` | 两块呈弧形的钢丝绳芯输送带切块 | 图库 | Curved steel cord conveyor belt sections | 弧形的钢丝绳芯输送带切块 |
| `steel-cords-spec.webp` | St-630 ~ St-5400 钢丝绳参数表 | 技术图片 | Steel cord specifications table (St-630 to St-5400) | 钢丝绳规格表（St-630 至 St-5400） |
| `standard-belt-spec.webp` | 带宽 × 强度等级矩阵表 | 技术图片 | Standard belt specification matrix (belt width vs strength grade) | 标准输送带规格矩阵（带宽 vs 强度等级） |
| `cover-grades-spec.webp` | 覆盖胶性能指标表（GB9770 / DIN22131） | 技术图片 | Cover rubber property indexes (GB9770-2001 / DIN22131) | 覆盖胶性能指标（GB9770-2001 / DIN22131） |
| `adhesion-spec.webp` | 钢丝绳粘合力表（GB9770 / DIN22131-88） | 技术图片 | Adhesion of steel cord table (GB9770-2001 / DIN22131-88) | 钢丝绳粘合力表（GB9770-2001 / DIN22131-88） |

## 2. 交互规范
- 图库使用现有 `ProductGallery` 组件，点击图片进入全屏灯箱。
- 支持键盘操作：Esc 关闭、左右方向键切换。
- 不显示放大镜装饰图标（仅 click-to-zoom）。
- 所有 `<img>` 均提供 `alt` 文本。

## 3. SEO 规范

### 页面级 SEO（由 `app/[locale]/[[...path]]/page.tsx` 输出）
- `title` / `description`：取自 `product.seo`。
- `canonical`：每语言一条，格式 `/products/conveyor-belts/steel-cord-conveyor-belt`。
- `hreflang`：`en`、`zh-CN`、`x-default`。
- `og:title`、`og:description`、`og:type = product`、`og:image`：由 `ProductDetailPage` 使用 `seo.description` 与 `media.cover` 生成。
- `twitter:card = summary_large_image`。
- `robots = index, follow`。

### Product JSON-LD（由 `ProductDetailPage` 输出）
- `@type: Product`
- `name` / `description`：多语言
- `image`：`media.gallery`
- `brand: { name: "OVBEL" }`
- `category: Conveyor Belts`
- 不含 `offers`、`review`、`aggregateRating`（禁止编造价格、库存、评分）。

## 4. 响应式 / 可访问性
- 桌面端：双栏布局（图库左、内容右），最大容器 1280 px。
- 移动端：单栏，图库可横向滑动或全屏查看。
- 焦点样式、对比度、语义化标题层级沿用项目现有 Tailwind 主题。
