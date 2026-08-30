# 04 - 素材与 SEO 规范（Endless Conveyor Belt）

## 1. 图片素材原则

- 必须使用**真实、有权使用**的产品素材（要求 7）。
- 图片可点击全屏放大，灯箱**不显示放大镜装饰图标**（沿用 `ProductGallery`/`ZoomableImage`）。
- 所有图片经 Pillow（隔离 venv）由源 PNG/JPG 转为 **webp**（与仓库 114 个 webp 资产生态一致）。

## 2. 本次导入的真实素材

来源：http://www.sjbelt.com/product/huan-xing-shu-song-dai-791.html（Fastimg CDN，需带 Referer 下载）

| 文件 | 原始 URL | 尺寸 | 类型 | 用途 |
|---|---|---|---|---|
| `cover.webp` | `…/500f4bd1-7bac-4baa-8419-4f021d7d39fe.png` | 957×341 | 主图/横幅 | cover + 画廊首图 |
| `gallery-01.webp` | `…/dbde9578-5771-4ede-9663-ef16b984157c.jpg`（页面画廊命名「环形输送带.jpg」） | 600×450 | 产品照片 | 画廊 |
| `gallery-02.webp` | `…/3e39f95f-dd62-4f91-a49d-e7c4fb2cfc19.jpg` | 344×344 | 产品图 | 画廊 |

> 说明：原站仅此 3 张真实产品图（另有两个 `/npublic/img/s.png` 占位缩略图，已弃用）。直链下载被 CDN 拦截（返回 HTTP 567 / markdown 错误页），需带 `Referer: http://www.sjbelt.com/product/huan-xing-shu-song-dai-791.html` 方可获取。

## 3. alt 文本

| 图片 | EN alt | ZH alt |
|---|---|---|
| cover | Endless conveyor belt — main product view | 环形输送带 — 主视图 |
| gallery-01 | Endless conveyor belt — product photo | 环形输送带 — 产品照片 |
| gallery-02 | Endless conveyor belt — detail view | 环形输送带 — 细节视图 |

## 4. 待补充素材清单（Pending Business）

| 编号 | 内容 | 优先级 |
|---|---|---|
| IMG-01 | OVBEL 自有环形输送带整体产品照（替代 cover，规避第三方版权） | 高 |
| IMG-02 | 环形结构/接头处细节特写 | 中 |
| IMG-03 | 装机运行实景图 | 中 |
| IMG-04 | 织物/带芯剖面图（EP/NN/CC） | 低 |
| IMG-05 | 应用行业场景图（矿山/港口等） | 低 |

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
- JSON-LD：`Product` 类型（name、image[]、description、category、brand 等）
- 关键词建议：endless conveyor belt, jointless conveyor belt, 环形输送带, 无接头输送带, endless belt, nylon conveyor belt

## 7. 合规提醒

⚠️ 当前图片来自第三方参考品牌站（浙江三元橡胶带）。在 OVBEL 正式上线前，**必须**替换为 OVBEL 自有、已获授权的产品照片，或取得原图使用授权，以避免版权风险。此事项已列入 `05-验收清单.md` 业务签核。
