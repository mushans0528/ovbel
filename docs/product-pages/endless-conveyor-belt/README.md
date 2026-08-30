# 环形输送带 / Endless Conveyor Belt — 资料档案

> 本文档为 OVBEL 网站新增产品详情页的配套资料档案，遵循与 `polyester-core-conveyor-belt` 一致的模板。

## 基本信息

| 项 | 内容 |
|---|---|
| 产品中文名 | 环形输送带 |
| 产品英文名 | Endless Conveyor Belt |
| slug | `endless-conveyor-belt` |
| 分类 | `conveyor-belts`（输送带） |
| 资料来源 | http://www.sjbelt.com/product/huan-xing-shu-song-dai-791.html |
| 来源品牌 | ZHEJIANG SANJIA RUBBER BELT Co., Ltd.（第三方参考站，非 OVBEL） |
| 目标分支 | `main` |
| 提交方式 | 扩展统一产品模型 `lib/products.ts`（EN 条目 + ZH override），数据驱动自动派生页面 |

## 文档边界（数据分级）

本档案将来源资料严格分为三类，满足「不得编造参数、认证、价格、库存或应用承诺」的要求：

- **已确认事实（Confirmed）**：页面明示的名称、特性、应用、规格参数、织物代号、型号等。
- **编辑性改写（Editorial）**：英文术语规范化（如 Conveyor 拼写、句式润色）、中文翻译对齐；不改变事实。
- **待业务确认（Pending）**：来源页未提供或属通用建议的内容——见下文与 `05-验收清单.md`。

## 文件清单

| 文件 | 用途 |
|---|---|
| `01-原站内容审计.md` | 原站采集状态、页面身份、已提取事实、未提供字段、可追溯矩阵 |
| `02-双语页面文案.md` | EN/ZH 核心字段、Hero、应用、优势、规格、储运、询盘、结构化询盘字段 |
| `03-实现规格.md` | 路由、数据模型扩展、组件需求、Metadata/JSON-LD、性能与可访问性、落地顺序 |
| `04-素材与SEO规范.md` | 真实素材清单、alt 文本、SEO 文案、hreflang、OG、关键词 |
| `05-验收清单.md` | 内容事实 / 多语言 / 页面交互 / SEO / 素材 / 技术 / 业务签核 验收项 |

## 关键结论

- 原站为 JS 无关的传统页面，正文可直接抓取；图片为 Fastimg CDN，需带 Referer 才能下载（直链被拦截）。
- 原站**未列出**任何产品标准/认证（如 GB/T、DIN 等），故规格中**未编造**标准字段。
- 原站仅提供 3 张真实产品图（含一张命名为「环形输送带.jpg」的画廊图）；已下载并转 webp 用于 cover/gallery。
- ⚠️ 图片来自第三方参考品牌站点，**版权待业务确认**：上线前建议替换为 OVBEL 自有、已获授权的产品照片（见 `04-素材与SEO规范.md` 与 `05-验收清单.md`）。
