# 04 — 素材与 SEO 规范

## 1. 图片素材

| 版本 | 来源 | 状态 |
|---|---|---|
| v1（初版，已替换） | OVBEL 旧站 `respowerbelt.com` h-col-135，凡科互动企业站 CDN（`30745609.s21i.faiusr.com`） | 已停用 |
| **v2（当前）** | **2026-08-31 由用户提供的产品实拍 PNG，置于 `~/Desktop/未命名文件夹/阻燃输送带/`，为 OVBEL 自有素材** | **生效中** |

> v2 替换说明：
> - 用户于本回合提供 4 张 OVBEL 自有阻燃输送带产品实拍 PNG，替换掉 v1 中只有 1 张（含复用）真实产品图的精简图库。
> - 已删除的文件：`cover.webp`、`gallery-01.webp`（v1 版本，已被 v2 同名 `cover.webp` 与新增 `gallery-01/02/03.webp` 替代）。
> - 替换影响范围：详情页首图（图库第 1 张）+ 图库第 2/3/4 张；alt 文本同步更新为 4 条新实景描述。

### 1.1 v2 文件来源与映射（由用户提供，OVBEL 自有）

| 排序（详情页） | 原始文件 | 输出文件名 | 用途 | 尺寸 |
|---|---|---|---|---|
| 1（首图 / 图库 1） | `未命名文件夹/阻燃输送带/1.png` | `cover.webp` | 详情页首图；图库第 1 张 | 640×617 |
| 2 | `未命名文件夹/阻燃输送带/2.png` | `gallery-01.webp` | 图库第 2 张 | 600×800 |
| 3 | `未命名文件夹/阻燃输送带/3.png` | `gallery-02.webp` | 图库第 3 张 | 750×800 |
| 4 | `未命名文件夹/阻燃输送带/4.png` | `gallery-03.webp` | 图库第 4 张 | 1024×680 |

### 1.2 v2 处理说明
- 用户交付 4 张 PNG，Pillow 转码为 webp（quality=88, method=4），全部为 OVBEL 自有实拍素材，无第三方版权风险。
- 4 张图均垂直展示黑色阻燃带本体：
  - 1：黑色橡胶带厚卷成筒状，光滑阻燃覆盖胶可见；
  - 2：黑色橡胶带大卷端面拍摄，多层织物带芯略带弧形；
  - 3：整卷黑色阻燃带围绕黄色芯轴呈同心层绕；
  - 4：黑色阻燃带大幅折叠展开，曲边可见多层带体。
- `cover.webp`（即图 1）作为详情页 hero / 图库第 1 张；图 2/3/4 依次进入图库第 2/3/4 张，按 `1→2→3→4` 顺序播放。
- alt 文本统一为「产品 + 关键视觉特征」句式，利于搜索引擎理解并满足 a11y。

### 1.3 历史版本说明
- 原页面 `h-col-135` 仅提供 1 张真实产品照片，v1 中封面与图库重复使用同一张图；本次 v2 替换为 4 张差异化实拍，视觉与 a11y 均更佳。

## 2. 交互规范
- 图库使用现有 `ProductGallery` 组件，点击图片进入全屏灯箱。
- 支持键盘操作：Esc 关闭、左右方向键切换。
- 不显示放大镜装饰图标（仅 click-to-zoom）。
- 所有 `<img>` 均提供 `alt` 文本。

## 3. SEO 规范

### 页面级 SEO（由 `app/[locale]/[[...path]]/page.tsx` 输出）
- `title` / `description`：取自 `product.seo`。
- `canonical`：每语言一条，格式 `/products/conveyor-belts/fire-resistant-conveyor-belt`。
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
