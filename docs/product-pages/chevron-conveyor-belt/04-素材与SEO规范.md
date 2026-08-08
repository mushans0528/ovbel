# 素材与 SEO 规范

## 1. 素材获取原则

原站证书异常导致本次无法可靠导出原图。产品负责人应从以下任一可信渠道提供图片：

1. 原网站 CMS 媒体库；
2. 原网站服务器备份；
3. 公司内部产品图库；
4. 对应订单、样本或产品数据表的原始图片。

不得把搜索到的其他供应商产品图作为 OVBEL 产品图，也不得在没有审核的情况下用 AI 生成图替代真实产品照片。

## 2. 最低素材清单

| ID | 文件建议名 | 内容 | 最低建议尺寸 | 必需 |
|---|---|---|---|---|
| IMG-01 | `chevron-conveyor-belt-hero.webp` | 产品整体或卷带主图 | 1600×1200 | 是 |
| IMG-02 | `chevron-profile-detail.webp` | 花纹与上覆盖胶局部 | 1200×900 | 是 |
| IMG-03 | `chevron-belt-application.webp` | 倾斜输送现场 | 1600×1000 | 否 |
| IMG-04 | `profile-herringbone.webp` | 人字形花纹 | 800×600 | 否 |
| IMG-05 | `profile-figure-8.webp` | 8 字形花纹 | 800×600 | 否 |
| IMG-06 | `profile-fishbone.webp` | 鱼骨形花纹 | 800×600 | 否 |
| IMG-07 | `profile-u-shaped.webp` | U 形花纹 | 800×600 | 否 |
| IMG-08 | `profile-cylindrical.webp` | 圆柱形花纹 | 800×600 | 否 |
| IMG-09 | `profile-hemp-faced.webp` | 麻面花纹 | 800×600 | 否 |

如果只能取得一张真实产品图，首版可以只发布 IMG-01，并用文本卡片列出花纹类型。

## 3. 图片处理

- 保存原始文件，不覆盖母版。
- 发布格式优先 AVIF/WebP，保留 JPEG/PNG 原图用于归档。
- 不拉伸、不改变产品花纹比例，不移除可能影响产品识别的标识。
- 可做亮度、白平衡、裁切和背景清理，但不得改变产品结构。
- 每张图片记录来源、授权状态、拍摄对象和审核人。

建议在素材交接表中记录：

| 字段 | 说明 |
|---|---|
| `assetId` | 对应 IMG 编号 |
| `source` | CMS、服务器、内部图库或摄影 |
| `licenseOwner` | 权利主体 |
| `reviewedBy` | 产品审核人 |
| `productMatch` | 是否确认属于本产品 |
| `notes` | 型号、花纹或拍摄场景说明 |

## 4. Alt 文本

Alt 文本描述图片中真实可见的内容，不堆砌关键词。

示例：

| 图片 | English alt | 中文 alt |
|---|---|---|
| 主图 | Black chevron conveyor belt with raised profiles for inclined conveying | 用于倾斜输送的黑色凸起花纹输送带 |
| 局部 | Close-up of integrally vulcanized profiles on the belt top cover | 与上覆盖胶整体硫化的输送带花纹局部 |
| 应用图 | Chevron conveyor belt carrying bulk material on an inclined conveyor | 花纹输送带在倾斜输送机上输送散料 |

如果图片仅为装饰，应使用空 alt；产品主图不能使用空 alt。

## 5. SEO 文案

### English

- Meta title: `Chevron Conveyor Belt for Inclined Material Handling | OVBEL`
- Meta description: `Chevron conveyor belts with CC, CP, NN or EP carcass options, 300–800 mm reference widths and customizable profiles for inclined bulk-material handling.`
- Canonical: `https://ovbel.com/en/products/conveyor-belts/chevron-conveyor-belt`

### 简体中文

- Meta title: `倾斜物料输送用花纹输送带 | OVBEL`
- Meta description: `提供 CC、CP、NN、EP 带芯选择、300–800 mm 参考带宽和可定制花纹结构的倾斜物料输送带。`
- Canonical: `https://ovbel.com/zh/products/conveyor-belts/chevron-conveyor-belt`

## 6. Hreflang

```text
en      https://ovbel.com/en/products/conveyor-belts/chevron-conveyor-belt
zh-CN   https://ovbel.com/zh/products/conveyor-belts/chevron-conveyor-belt
x-default https://ovbel.com/en/products/conveyor-belts/chevron-conveyor-belt
```

## 7. Open Graph

- 使用经审核的主图，推荐 1200×630 的分享裁切版本。
- OG 标题和描述按页面语言输出。
- `og:url` 必须是当前语言 canonical。
- 不要让中文页沿用英文全站默认 OG 标题。

## 8. 关键词使用原则

英文可自然覆盖 `chevron conveyor belt`、`patterned conveyor belt`、`inclined conveyor belt`；中文可自然覆盖“花纹输送带”“倾斜输送带”“人字花纹输送带”。不建议设置过时的 `meta keywords`，也不要在页面底部堆叠关键词。

