# Impact Bed & Bar / 缓冲床与缓冲条

| 项目 | 内容 |
|---|---|
| 英文名称 | Impact Bed & Bar |
| 中文名称 | 缓冲床与缓冲条 |
| 产品 slug | `impact-bed` |
| 所属分类 | `conveyor-components`（输送机配件） |
| 源页面 | https://www.respowerbelt.com/h-col-128.html |
| 状态 | 已存在并上线；本次（v2）替换详情页图库为用户提供实物照片 |

## 变更文件

### 首次创建（v1）
- `lib/products.ts`：扩展 EN/ZH 规格项（缓冲条尺寸、产品编号、UHMWPE 厚度、固定套件）；新增 `media` 块（`cover`、4 张产品图、3 张技术图 + `constructionImage` + `technicalImages`）。
- `public/products/impact-bed/`：新增 7 张 webp（4 张图库 + 3 张技术图）。
- `docs/product-pages/impact-bed/`：本目录下 6 份交付文档。

### 增量（v2，2026-09-01 — 用户提供 4 张实物照片替换详情页图库）
- `lib/products.ts`
  - EN `impact-bed.media.gallery`：8 项 → 4 项（`cover.webp` / `gallery-01.webp` / `gallery-02.webp` / `gallery-03.webp`）。
  - EN 新增 `media.galleryAlt`：4 条 EN，描述每张实物照片的视觉内容。
  - ZH `zhProducts["impact-bed"]`：新增完整 `media` 块（`cover` + 4 张 gallery + 4 条 ZH `galleryAlt` + `constructionImage` + `technicalImages`），补足 v1 缺失的媒体信息。
  - 未修改 `description` / `applicationIntro` / `features` / `specifications` / `layers` / `precautions` / `inquiryChecklist` / `seo` / `sourceUrl` / slug / category。
- `public/products/impact-bed/`
  - 新增 4 张 webp（来自用户 4 张 PNG，`Pillow` 转码：quality 88 / method 4）：
    - `cover.webp` 720×1094（蓝色 V 形主图，1.png）
    - `gallery-01.webp` 1920×1080（红色堆叠，2.png）
    - `gallery-02.webp` 800×496（裙板密封区安装，3.png）
    - `gallery-03.webp` 1024×469（黑色 + 红色钢架床体，4.png）
  - 删除 3 张孤儿 webp：`impact-bars-red.webp`、`impact-bars-blue-trough.webp`、`impact-bars-red-stack.webp`。
- `public/images/products/impact-bed/`
  - 删除 3 张孤儿 webp：`impact-bed-installed.webp`、`impact-bed-set.webp`、`impact-bar-black.webp`。
  - 保留：`impact-bar-red.webp`（`constructionImage` 引用）、`technical-drawing.png`、`specification-table.png`、`specification-notes.png`（`technicalImages` 引用）。
- `docs/product-pages/impact-bed/`
  - 更新 `04-素材与SEO规范.md`：图片素材全部写明 v2 状态、列出 v1→v2 文件替换对照、明确 alt 文本策略。
  - 更新 `05-验收清单.md`：素材与新增 Diff 段重写为 v2；保留数据/SEO/构建/仍待业务确认。
  - 更新本 `README.md`：增补 v2 变更明细（变更文件 / 实现要点 / 资料纪律）。

## 实现要点
- 沿用既有数据驱动架构，未新增组件、未新增路由、未新增产品 slug。
- 页面内容通过 `lib/products.ts` 统一输出，自动同步分类页、产品卡片、相关产品、询盘预填、SEO、canonical、hreflang、Open Graph 和 Product JSON-LD。
- v2 详情页图库采用"1=cover + 2/3/4=gallery-01/02/03"4 张命名模板，与 endless、transmission-flat-belt、fire-resistant-conveyor-belt 等近期上线产品保持一致。
- 4 张 PNG 全部来自 OVBEL 用户自有提供的实物照片：1.png 立式主图、2.png 堆叠展示、3.png 现场安装、4.png 床体全景。版权归 OVBEL 自有素材范围，已授权使用。
- 缓冲条尺寸（50/75/100 mm 高 × 100 mm 宽 × 1200–2000 mm 长）、UHMWPE 12.5 mm 厚度、T-bolt M16×45 固定套件、产品编号 9216348/9216547/9216545/9216548/9216549 均来自 h-col-128 页面规格表图片；未编造承重、认证、价格、库存等未给出数据。
- 点击图库主图进入全屏灯箱；支持键盘 Esc 退出、左右箭头切换；无放大镜装饰图标。

## 资料纪律
- 严格区分 v1（respowerbelt.com 已下线素材，已清理）与 v2（用户提供实物照片）。
- 文案（`description` / `applicationIntro` / `features` / `specifications` 等）未做任何编辑性改写。
- 未编造任何未列于来源页的标准、认证、价格、库存、应用承诺。
- 未引入新组件、未修改代理 / middleware / 已废弃警告。

## 仍待业务确认
- 缓冲条橡胶硬度、UHMWPE 牌号与颜色选项。
- 铝/钢型材的具体牌号与截面尺寸。
- 床体支撑架材质、调节行程与安装孔位。
- 适用认证（CE、ATEX、MSHA 等）。
- 产品编号与长度的完整对应关系及可定制范围。
- 库存、交期、MOQ、价格与保修条款。
