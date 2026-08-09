# Rough Top Conveyor Belt 多语言产品详情页文档包

> 目标页面：OVBEL 新站的粗面/防滑输送带产品详情页  
> 原始资料：<https://www.respowerbelt.com/h-col-123.html>  
> 整理日期：2026-08-09  
> 目标语言：英语（`en`）、简体中文（`zh-CN`）

## 1. 文档用途

本目录包含实现一份中英文 Rough Top 产品详情页所需的内容事实、双语文案、数据结构、页面模块、SEO、素材清单和验收标准。

建议按以下顺序使用：

1. 产品/技术负责人审核 `01-原站内容审计.md` 中的事实与待确认项；
2. 翻译/业务负责人审核 `02-双语页面文案.md`；
3. 开发人员依据 `03-实现规格.md` 在 `lib/products.ts` 中扩展数据并接入现有渲染组件；
4. 设计/内容人员依据 `04-素材与SEO规范.md` 准备或替换图片素材；
5. QA 与业务签字人员依据 `05-验收清单.md` 完成双语页面验收。

## 2. 目标 URL

| 语言 | URL |
|---|---|
| English | `/en/products/conveyor-belts/rough-top-conveyor-belt` |
| 简体中文 | `/zh/products/conveyor-belts/rough-top-conveyor-belt` |

英文为 `x-default`。两种语言共用同一分类 slug 与产品 slug，语言切换必须停留在当前产品页，并保留有意义的查询参数。

## 3. 文档边界

- 原页面可直接核实的事实被标记为 **原站事实**。
- 为提高可读性而重新撰写的句子被标记为 **编辑性改写**，不改变参数含义。
- 原站未提供的技术数据被标记为 **待业务确认**，上线前不得编造。
- 不得引入其他供应商的同款产品图片或搜索结果图片。

## 4. 当前实现摘要

`lib/products.ts` 中 `rough-top-conveyor-belt` 条目已升级为可上线状态：

- 英文条目包含完整的 `summary / description / applicationIntro / featureHeading / features(6) / applications(5) / specifications(8) / precautions(5) / inquiryChecklist(6) / seo / sourceUrl / media`。
- 中文条目（`zhProducts["rough-top-conveyor-belt"]`）字段与英文条目一一对应，信息量保持一致。
- 图片媒体（`media.cover` + `media.gallery`）使用 4 张按设计思路生成的 `.webp`，由 `ProductGallery` 组件统一渲染，支持点击全屏放大、键盘导航（Esc 关闭、左右切图）、alt 文本与焦点管理。
- Product JSON-LD、canonical、hreflang（`en` / `zh-CN` / `x-default`）、Open Graph 已由 `[locale]/[[...path]]/page.tsx` 与 `ProductDetailPage` 统一输出，无虚构价格、库存、评分或评论。
- 询盘预填：`/request-quote?product=rough-top-conveyor-belt` 直接进入产品专属询盘页，并显示该产品的 `inquiryChecklist`。

## 5. 推荐发布策略

第一阶段可使用本文档中标记为"原站事实"的参数与文案发布。覆盖胶等级、拉伸强度、整卷长度、最小带轮直径、最大带速、温度范围、阻燃/防静电/食品级认证等未由原页面给出的参数，统一保留为"待业务确认"，在获得技术数据表后再补齐。