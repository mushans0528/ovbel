# Impact Bed & Bar / 缓冲床与缓冲条

| 项目 | 内容 |
|---|---|
| 英文名称 | Impact Bed & Bar |
| 中文名称 | 缓冲床与缓冲条 |
| 产品 slug | `impact-bed` |
| 所属分类 | `conveyor-components`（输送机配件） |
| 源页面 | https://www.respowerbelt.com/h-col-128.html |
| 状态 | 已存在于 OVBEL 站点数据模型；本次基于 h-col-128 补充缺失文档并扩展图片/规格 |

## 变更文件
- `lib/products.ts`：修复中文条目的潜在截断问题；扩展 EN/ZH 规格项（补充缓冲条尺寸、产品编号、UHMWPE 厚度、固定套件）；扩展 `media` 块（新增 `cover`、4 张产品图、3 张技术图）。
- `public/products/impact-bed/`：新增 7 张来自 h-col-128 的真实产品 webp（4 张图库 + 3 张技术图）。
- `docs/product-pages/impact-bed/`：本目录下 6 份交付文档。

## 实现要点
- 沿用既有数据驱动架构，未新增组件、未新增路由、未新增产品 slug。
- 页面内容通过 `lib/products.ts` 统一输出，自动同步分类页、产品卡片、相关产品、询盘预填、SEO、canonical、hreflang、Open Graph 和 Product JSON-LD。
- 缓冲条尺寸（H 50/75/100 mm、W 100 mm、L 1200/1220/1400/1500/1600/2000 mm）、UHMWPE 厚度 12.5 mm、T-bolt M16×45 固定套件及产品编号均来自 h-col-128 页面规格表图片；未编造承重、认证、价格、库存等未给出数据。
- 所有图片均来自 OVBEL 自有 CDN，已获使用授权；点击可全屏放大，无放大镜装饰图标。

## 仍待业务确认
- 缓冲条橡胶硬度、UHMWPE 牌号与颜色选项。
- 铝/钢型材的具体牌号与截面尺寸。
- 床体支撑架材质、调节行程与安装孔位。
- 适用认证（CE、ATEX、MSHA 等）。
- 产品编号与长度的完整对应关系及可定制范围。
- 库存、交期、MOQ、价格与保修条款。
