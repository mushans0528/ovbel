# 素材与 SEO 规范

## 1. 素材获取原则

原站为 JS 渲染且存在 HTTPS 证书问题（`curl` 默认校验失败），直接抓取 HTML 仅得到外壳。本次可核实资产为：

- 正文字段（Features / Application / Standards）通过 WebFetch 渲染后取得；
- 唯一内容图为 faiusr CDN 上的规格表图（`https://31710374.s21i.faiusr.com/4/ABUIABAEGAAgr83mwwYowtyHwQIwhwc49AQ.png.webp`），通过 `curl -k` 下载（仅用于评估公开资产）。

未取得且本次不使用的资产：

- 产品实拍图、卷装图、工厂生产线图；
- 编织结构剖面图、覆盖胶等级示意等工程图；
- 第三方认证标识（CE / ISO 等原页未列）。

产品负责人应从以下任一可信渠道补齐：

1. 原网站 CMS 媒体库；
2. 原网站服务器备份；
3. 公司内部产品图库；
4. 对应订单、样本或产品数据表的原始图片。

不得把搜索到的其他供应商产品图作为 OVBEL 产品图，也不得在没有审核的情况下用 AI 生成图替代真实产品照片。

## 2. 已导入素材

2026-08-29 已导入 1 张规格表图（`/products/polyester-core-conveyor-belt/cover.webp`，原 903×628 PNG，保存为 WebP 47104 B），同时作为 cover 与 gallery 主图。发布前仍需由素材负责人确认图片与产品匹配及使用权。

## 3. 最低素材清单（待业务补齐）

| ID | 文件建议名 | 内容 | 最低建议尺寸 | 必需 |
|---|---|---|---|---|
| PCB-IMG-01 | `polyester-core-conveyor-belt-hero.webp` | 输送带成品/卷带主图 | 1600×1200 | 是 |
| PCB-IMG-02 | `polyester-core-conveyor-belt-carcass.webp` | 聚酯帆布带芯特写 | 1200×900 | 是 |
| PCB-IMG-03 | `polyester-core-conveyor-belt-application.webp` | 矿场/砂石现场应用 | 1600×1000 | 否 |
| PCB-IMG-04 | `polyester-core-conveyor-belt-edge-types.webp` | 模压边与切边对比 | 1200×800 | 否 |
| PCB-IMG-05 | `polyester-core-conveyor-belt-construction.webp` | 覆盖胶 + 带芯剖面 | 1200×900 | 否 |

仅在所有 IMG 全部到位后，才能移除 `cover.webp`（规格表图）作为 gallery/cover 的占位。

## 4. 图片处理

- 保存原始文件，不覆盖母版。
- 发布格式优先 AVIF/WebP，保留 JPEG/PNG 原图用于归档。
- 不拉伸、不改变产品结构与比例，不移除可能影响产品识别的标识。
- 可做亮度、白平衡、裁切和背景清理，但不得改变产品结构。
- 每张图片记录来源、授权状态、拍摄对象和审核人。

建议在素材交接表中记录：

| 字段 | 说明 |
|---|---|
| `assetId` | 对应 PCB-IMG 编号 |
| `source` | CMS、服务器、内部图库或摄影 |
| `licenseOwner` | 权利主体 |
| `reviewedBy` | 产品审核人 |
| `productMatch` | 是否确认属于本产品 |
| `notes` | 型号或拍摄场景说明 |

## 5. Alt 文本

Alt 文本描述图片中真实可见的内容，不堆砌关键词。

| 图片 | English alt | 中文 alt |
|---|---|---|
| 规格表图（当前 cover） | Polyester core conveyor belt — specification overview | 聚酯芯输送带 — 规格参数一览 |
| 主图（待补） | Polyester core conveyor belt, polyester canvas core with rubber covers | 聚酯芯输送带成品，聚酯帆布带芯配橡胶覆盖胶 |
| 带芯特写（待补） | Close-up of multi-ply polyester canvas core | 多层聚酯帆布带芯局部 |
| 应用图（待补） | Polyester core conveyor belt carrying aggregate on a long-distance conveyor | 聚酯芯输送带在长距离输送机上运送骨料 |
| 修边对比（待补） | Moulded edge and cut edge of the polyester core conveyor belt | 聚酯芯输送带模压边与切边对比 |

如果图片仅为装饰，应使用空 alt；产品主图不能使用空 alt。

## 6. SEO 文案

### English

- Meta title: `Polyester Core Conveyor Belt for General-Duty Material Handling | OVBEL`
- Meta description: `Multi-ply polyester canvas core conveyor belts with EP200/2–EP1200/6 tensile grades, 400–2500 mm belt widths and wear-resistant rubber covers for long-distance, high-capacity conveying.`
- Canonical: `https://ovbel.com/en/products/conveyor-belts/polyester-core-conveyor-belt`

### 简体中文

- Meta title: `通用散料输送用聚酯芯输送带 | OVBEL`
- Meta description: `多层聚酯帆布带芯输送带，覆盖 EP200/2–EP1200/6 抗拉强度等级、400–2500 mm 带宽与耐磨橡胶覆盖胶，适用于长距离、大运量物料输送。`
- Canonical: `https://ovbel.com/zh/products/conveyor-belts/polyester-core-conveyor-belt`

## 7. Hreflang

```text
en         https://ovbel.com/en/products/conveyor-belts/polyester-core-conveyor-belt
zh-CN      https://ovbel.com/zh/products/conveyor-belts/polyester-core-conveyor-belt
x-default  https://ovbel.com/en/products/conveyor-belts/polyester-core-conveyor-belt
```

## 8. Open Graph

- 使用经审核的主图，推荐 1200×630 的分享裁切版本（当前 cover 为规格表图，业务补齐主图后应替换）。
- OG 标题和描述按页面语言输出。
- `og:url` 必须是当前语言 canonical。
- 不要让中文页沿用英文全站默认 OG 标题。

## 9. 关键词使用原则

英文可自然覆盖 `polyester core conveyor belt`、`EP conveyor belt`、`multi-ply fabric conveyor belt`；中文可自然覆盖"聚酯芯输送带""EP 输送带""多层织物芯输送带"。不建议设置过时的 `meta keywords`，也不要在页面底部堆叠关键词。
