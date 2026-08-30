# 04 - 素材与 SEO 规范（Endless Conveyor Belt）

## 1. 图片素材原则

- 必须使用**真实、有权使用**的产品素材（要求 7）。
- 图片可点击全屏放大，灯箱**不显示放大镜装饰图标**（沿用 `ProductGallery`/`ZoomableImage`）。
- 所有图片经 Pillow（隔离 venv）由源 PNG/JPG 转为 **webp**（与仓库 114 个 webp 资产生态一致）。

## 2. 本次采用的真实素材

来源：用户直接提供（OVBEL 自有产品照，原 PNG 已转 webp）。

| 文件 | 源 PNG | 尺寸 | 用途 | 说明 |
|---|---|---|---|---|
| `cover.webp` | `Desktop/.../1.png` | 800×730 | 封面 + 画廊首图 | 卷状展示，可清晰看到无接头环形结构 |
| `gallery-01.webp` | `Desktop/.../2.png` | 800×680 | 画廊（细节） | 多层织物带芯结构 |
| `gallery-02.webp` | `Desktop/.../3.png` | 800×524 | 画廊（平铺） | 平铺展开外观 |
| `gallery-03.webp` | `Desktop/.../4.png` | 800×702 | 画廊（整面） | 整张平铺的顶部表面 |

> 命名规则：`cover.webp` = 第 1 张（首图），`gallery-0X.webp` = 第 2/3/4 张，按用户提供的文件名顺序 1→2→3→4 排列。

### 2.1 历史来源（仅作记录，不再使用）

上一版（提交 `d652011`）的 3 张图（cover 957×341、gallery-01 600×450、gallery-02 344×344）来自第三方参考站 `sjbelt.com` 的 Fastimg CDN。本次已**全部替换**为 OVBEL 自有素材，规避第三方版权风险。

## 3. alt 文本

| 图片 | EN alt | ZH alt |
|---|---|---|
| cover | Endless conveyor belt — rolled configuration showing the jointless loop | 环形输送带 — 卷状展示，可清晰看到无接头环形结构 |
| gallery-01 | Endless conveyor belt — multi-layer fabric carcass detail | 环形输送带 — 多层织物带芯结构细节 |
| gallery-02 | Endless conveyor belt — flat-laid overview | 环形输送带 — 平铺展开外观 |
| gallery-03 | Endless conveyor belt — full-length flat top surface | 环形输送带 — 整张平铺的顶部表面 |

## 4. 待补充素材清单（Pending Business）

> 当前 4 张已覆盖"整体 / 细节 / 平铺 / 整面"主要展示面，封面亦已替换为 OVBEL 自有素材。如需进一步丰富，可继续补充：

| 编号 | 内容 | 优先级 |
|---|---|---|
| IMG-02 | 环形结构/接头处细节特写（已有覆盖） | 低 |
| IMG-04 | 织物/带芯剖面图（EP/NN/CC） | 中 |
| IMG-05 | 应用行业场景图（矿山/港口等） | 中 |
| IMG-06 | 装机运行实景图 | 中 |

## 5. SEO 文案

**EN**
- Title: `Endless Conveyor Belt (Jointless) for Medium & Small Conveyors`
- Description: `Jointless endless conveyor belt with nylon, polyester or cotton carcass, no on-site splicing, 300–2500 mm width and 100–800 kN/m/ply. High-strength and standard models for mining, ports, metallurgy and more.`

**ZH**
- Title: `环形输送带（无接头）— 中小型带式输送机专用`
- Description: `采用尼龙、聚酯或棉帆布带芯的无接头环形输送带，无需现场硫化接头，带宽300–2500 mm，强度100–800 kN/m/层，含高强度型与标准型，适用于矿山、港口、冶金等。`

## 6. 技术 SEO（由 generateMetadata 自动生成）

- `canonical`：`https://<site>/{locale}/products/conveyor-belts/endless-conveyor-belt`
- `hreflang`：`en`、`zh-CN`、`x-default`
- Open Graph：`og:title`、`og:description`、`og:image`（cover）、`og:type=product`
- JSON-LD：`Product` 类型（name、image[] 含 cover + 3 张 gallery、description、category、brand 等）
- 关键词建议：endless conveyor belt, jointless conveyor belt, 环形输送带, 无接头输送带, endless belt, nylon conveyor belt

## 7. 合规状态

✅ 已完成：4 张产品图全部替换为用户提供的 OVBEL 自有素材，第三方版权风险已消除。
