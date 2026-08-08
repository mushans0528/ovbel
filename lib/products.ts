export type Specification = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  category: string;
  eyebrow: string;
  summary: string;
  description: string;
  features: string[];
  applications: string[];
  specifications: Specification[];
};

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  index: string;
  summary: string;
  color: string;
};

export const categories: Category[] = [
  {
    slug: "conveyor-belts",
    name: "Conveyor Belts",
    shortName: "Belting",
    index: "01",
    summary: "Engineered belt constructions for inclined, high-wear and general material handling.",
    color: "blue",
  },
  {
    slug: "power-transmission-belts",
    name: "Power Transmission Belts",
    shortName: "Transmission",
    index: "02",
    summary: "Flat and profile belts for dependable mechanical power transfer across industrial equipment.",
    color: "orange",
  },
  {
    slug: "conveyor-components",
    name: "Conveyor Components",
    shortName: "Components",
    index: "03",
    summary: "Impact protection, elevator components and hardware that keep conveyor systems productive.",
    color: "steel",
  },
  {
    slug: "rubber-products-hoses",
    name: "Rubber Products & Hoses",
    shortName: "Rubber & Hose",
    index: "04",
    summary: "Industrial rubber sheet, sealing and hose products configured for demanding service conditions.",
    color: "slate",
  },
  {
    slug: "crusher-mining-parts",
    name: "Crusher & Mining Parts",
    shortName: "Mining Parts",
    index: "05",
    summary: "Wear and screening parts selected for quarry, aggregate and mineral-processing equipment.",
    color: "copper",
  },
  {
    slug: "motors-drive-equipment",
    name: "Motors & Drive Equipment",
    shortName: "Drive Equipment",
    index: "06",
    summary: "Rotating and drive components for industrial machinery, conveyors and processing systems.",
    color: "navy",
  },
];

export const products: Product[] = [
  {
    slug: "chevron-conveyor-belt",
    name: "Chevron Conveyor Belt",
    category: "conveyor-belts",
    eyebrow: "Inclined conveying",
    summary: "Patterned belting for stable transport of powder, granules and bulk material on slopes.",
    description: "Chevron conveyor belts use an integrally vulcanized profile to improve grip and drainage while reducing material rollback on inclined conveyors.",
    features: ["Anti-slip profiles vulcanized with the top cover", "Multiple profile geometries", "Custom pattern design available"],
    applications: ["Mining and aggregate", "Grain and bulk handling", "Packaging and processing"],
    specifications: [
      { label: "Carcass options", value: "CC, CP, NN, EP" },
      { label: "Reference width", value: "300–800 mm" },
      { label: "Profile height", value: "5 / 10 / 15 / 20 mm" },
      { label: "Reference inclination", value: "0–40°" },
    ],
  },
  {
    slug: "rough-top-conveyor-belt",
    name: "Rough Top Conveyor Belt",
    category: "conveyor-belts",
    eyebrow: "Package handling",
    summary: "High-grip top cover for boxes, sacks and parcels on horizontal or inclined conveyors.",
    description: "A textured wear-resistant rubber surface cushions light goods, absorbs vibration and helps prevent slipping during handling.",
    features: ["2 or 3 ply EP construction", "Available with bottom cover or bare back", "Cushioning, high-grip top surface"],
    applications: ["Warehousing", "Parcel handling", "Bag and carton conveying"],
    specifications: [
      { label: "Construction", value: "2 or 3 ply EP fabric" },
      { label: "Top cover reference", value: "3.2 mm" },
      { label: "Bottom", value: "1.6 mm or bare back" },
      { label: "Reference inclination", value: "Up to 35°" },
    ],
  },
  {
    slug: "transmission-flat-belt",
    name: "Transmission Flat Belt",
    category: "power-transmission-belts",
    eyebrow: "Mechanical power transfer",
    summary: "Canvas-reinforced flat rubber belting for industrial and agricultural transmission systems.",
    description: "A traditional flat transmission belt built around cotton canvas skeleton layers for reliable power transfer across processing equipment.",
    features: ["Cut-edge and round-edge constructions", "Multiple ounce grades", "Flexible custom sizing"],
    applications: ["Factories and terminals", "Grain processing", "Irrigation and woodworking equipment"],
    specifications: [
      { label: "Reference grades", value: "28 / 30 / 32 / 34 / 36 OZ" },
      { label: "Reinforcement", value: "Cotton canvas" },
      { label: "Edge options", value: "Cut edge / Round edge" },
    ],
  },
  {
    slug: "industrial-v-belt",
    name: "Industrial V-Belt",
    category: "power-transmission-belts",
    eyebrow: "Compact drive systems",
    summary: "Industrial V-belt solutions selected for pulleys, motors and machinery drive arrangements.",
    description: "OVBEL supplies V-belt configurations for industrial equipment. Profiles, lengths and reinforcement can be matched to the drive arrangement and operating environment.",
    features: ["Application-matched profiles", "Drive-system sizing support", "Custom supply programs"],
    applications: ["Industrial machinery", "Conveyor drives", "Processing equipment"],
    specifications: [
      { label: "Profile", value: "Selected to application" },
      { label: "Length", value: "Custom supply range" },
      { label: "Construction", value: "Wrapped or raw-edge options" },
    ],
  },
  {
    slug: "impact-bed",
    name: "Impact Bed & Bar",
    category: "conveyor-components",
    eyebrow: "Loading-zone protection",
    summary: "Low-friction impact support for conveyor loading and transfer points.",
    description: "Impact bars combine rubber, a steel or aluminum frame and UHMWPE to absorb loading energy, stabilize the belt and reduce spillage.",
    features: ["Low-friction sliding surface", "No moving parts or lubrication", "Reduces belt wear and maintenance"],
    applications: ["Transfer points", "Crusher discharge", "Heavy bulk loading zones"],
    specifications: [
      { label: "Top layer", value: "UHMWPE" },
      { label: "Cushion", value: "Impact-absorbing rubber" },
      { label: "Frame", value: "Steel or aluminum" },
    ],
  },
  {
    slug: "elevator-buckets",
    name: "Elevator Buckets",
    category: "conveyor-components",
    eyebrow: "Vertical material handling",
    summary: "A broad bucket range for grain, food, agricultural and industrial elevator systems.",
    description: "More than 12 bucket models and nearly 400 size references support different materials, capacities and mounting layouts.",
    features: ["HDPE, nylon and PU material options", "Custom mounting holes", "Application-based spacing guidance"],
    applications: ["Grain elevators", "Food processing", "Industrial bulk handling"],
    specifications: [
      { label: "Models", value: "12+ reference families" },
      { label: "Sizes", value: "Nearly 400 references" },
      { label: "Materials", value: "HDPE / Nylon / PU" },
    ],
  },
  {
    slug: "industrial-rubber-sheet",
    name: "Industrial Rubber Sheet",
    category: "rubber-products-hoses",
    eyebrow: "Sealing and protection",
    summary: "General-purpose rubber sheet supplied in standard or customer-specified dimensions.",
    description: "Black industrial rubber sheet for technical, protective and fabrication applications, cut or supplied to project dimensions.",
    features: ["Standard sheet supply", "Cut-to-size service", "Broad thickness range"],
    applications: ["Gaskets and pads", "Workshop lining", "General industrial fabrication"],
    specifications: [
      { label: "Color", value: "Black" },
      { label: "Reference thickness", value: "1–100 mm" },
      { label: "Dimensions", value: "Standard or custom" },
    ],
  },
  {
    slug: "hydraulic-hose",
    name: "Hydraulic Hose",
    category: "rubber-products-hoses",
    eyebrow: "Fluid power",
    summary: "Hydraulic hose supply configured around pressure, temperature, medium and fitting requirements.",
    description: "OVBEL supports industrial hydraulic hose sourcing for mobile and fixed machinery. Final construction is selected from the working conditions supplied with the inquiry.",
    features: ["Pressure-based selection", "Hose and fitting coordination", "Application review support"],
    applications: ["Mining machinery", "Industrial hydraulics", "Mobile equipment"],
    specifications: [
      { label: "Diameter", value: "Selected to system flow" },
      { label: "Pressure class", value: "Selected to working pressure" },
      { label: "Connections", value: "Hose-only or fitted assembly" },
    ],
  },
  {
    slug: "crusher-hammer",
    name: "Crusher Hammer",
    category: "crusher-mining-parts",
    eyebrow: "Wear parts",
    summary: "Replacement hammer supply matched to crusher type, drawing and wear conditions.",
    description: "Crusher hammers can be sourced against equipment information, dimensions or drawings, with material selection aligned to impact and abrasion conditions.",
    features: ["Drawing-based matching", "Material options by wear duty", "Export packaging support"],
    applications: ["Hammer crushers", "Aggregate processing", "Mineral processing"],
    specifications: [
      { label: "Compatibility", value: "Matched to equipment or drawing" },
      { label: "Material", value: "Selected to wear duty" },
      { label: "Dimensions", value: "Customer-specified" },
    ],
  },
  {
    slug: "mine-screen-mesh",
    name: "Mine Screen Mesh",
    category: "crusher-mining-parts",
    eyebrow: "Screening media",
    summary: "Screening mesh configured around aperture, wire, panel size and material duty.",
    description: "Industrial screen mesh for classification and separation in mining, quarrying and aggregate operations.",
    features: ["Application-specific apertures", "Multiple edge configurations", "Size and material customization"],
    applications: ["Quarry screens", "Aggregate sizing", "Mineral classification"],
    specifications: [
      { label: "Aperture", value: "Specified by application" },
      { label: "Panel size", value: "Custom" },
      { label: "Edge", value: "Matched to screen deck" },
    ],
  },
  {
    slug: "industrial-electric-motor",
    name: "Industrial Electric Motor",
    category: "motors-drive-equipment",
    eyebrow: "Prime mover",
    summary: "Electric motor supply aligned to power, speed, voltage, mounting and protection requirements.",
    description: "OVBEL supports motor selection for conveyors and industrial equipment, with electrical and mechanical configuration confirmed before quotation.",
    features: ["Application-based selection", "Export voltage options", "Mounting and protection coordination"],
    applications: ["Conveyor drives", "Processing machinery", "Industrial equipment"],
    specifications: [
      { label: "Power", value: "Selected to application" },
      { label: "Voltage / frequency", value: "Market-specific" },
      { label: "Mounting", value: "Matched to equipment" },
    ],
  },
  {
    slug: "industrial-bearing",
    name: "Industrial Bearing",
    category: "motors-drive-equipment",
    eyebrow: "Rotating equipment",
    summary: "Bearing supply matched by designation, dimensions, load, speed or equipment position.",
    description: "Industrial bearing sourcing for conveyors, crushers and rotating machinery, including cross-reference support where identifiers are available.",
    features: ["Designation and dimension matching", "Sealed and open options", "Cross-reference support"],
    applications: ["Conveyor pulleys", "Crusher assemblies", "Industrial drive systems"],
    specifications: [
      { label: "Type", value: "Selected to load and speed" },
      { label: "Dimensions", value: "Matched to equipment" },
      { label: "Seal", value: "Open / shielded / sealed options" },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((product) => product.category === categorySlug);
}

export function getProduct(categorySlug: string, productSlug: string) {
  return products.find((product) => product.category === categorySlug && product.slug === productSlug);
}

const zhCategories: Record<string, Pick<Category, "name" | "shortName" | "summary">> = {
  "conveyor-belts": { name: "输送带", shortName: "输送带", summary: "适用于倾斜输送、高磨损工况和通用物料输送的工程输送带。" },
  "power-transmission-belts": { name: "动力传动带", shortName: "传动带", summary: "为各类工业设备提供稳定机械动力传递的平带和型带。" },
  "conveyor-components": { name: "输送机配件", shortName: "输送配件", summary: "用于冲击防护、斗式提升和维持输送系统高效运行的配件与五金。" },
  "rubber-products-hoses": { name: "橡胶制品与胶管", shortName: "橡胶与胶管", summary: "适用于严苛工况的工业橡胶板、密封件和胶管产品。" },
  "crusher-mining-parts": { name: "破碎机与矿山配件", shortName: "矿山配件", summary: "面向采石、骨料和矿物加工设备的耐磨件与筛分配件。" },
  "motors-drive-equipment": { name: "电机与驱动设备", shortName: "驱动设备", summary: "适用于工业机械、输送机和加工系统的旋转与驱动部件。" },
};

const zhProducts: Record<string, Omit<Product, "slug" | "category">> = {
  "chevron-conveyor-belt": { name: "花纹输送带", eyebrow: "倾斜输送", summary: "用于在斜坡上稳定输送粉状、颗粒状和块状物料的花纹输送带。", description: "花纹输送带采用与上覆盖胶整体硫化的凸起花纹，提高抓附与排水能力，并减少物料在倾斜输送过程中的回落。", features: ["防滑花纹与上覆盖胶整体硫化", "多种花纹结构可选", "支持客户定制花纹"], applications: ["矿山与砂石骨料", "粮食与散料输送", "包装与加工"], specifications: [{ label: "带芯选择", value: "CC、CP、NN、EP" }, { label: "参考宽度", value: "300–800 mm" }, { label: "花纹高度", value: "5 / 10 / 15 / 20 mm" }, { label: "参考倾角", value: "0–40°" }] },
  "rough-top-conveyor-belt": { name: "粗面输送带", eyebrow: "包装输送", summary: "高摩擦上覆盖层，适合在水平或倾斜输送机上输送纸箱、袋装货物和包裹。", description: "耐磨纹理橡胶表面可缓冲轻型货物、吸收振动，并在输送过程中帮助防止打滑。", features: ["2 层或 3 层 EP 结构", "可选底覆盖胶或裸背", "缓冲型高摩擦表面"], applications: ["仓储物流", "包裹处理", "袋装与箱装货物输送"], specifications: [{ label: "结构", value: "2 层或 3 层 EP 织物" }, { label: "上覆盖胶参考值", value: "3.2 mm" }, { label: "底部", value: "1.6 mm 或裸背" }, { label: "参考倾角", value: "最大约 35°" }] },
  "transmission-flat-belt": { name: "平型传动带", eyebrow: "机械动力传递", summary: "用于工业和农业传动系统的帆布增强平型橡胶带。", description: "以棉帆布为骨架层的传统平型传动带，可在各类加工设备中稳定传递动力。", features: ["切边与包边结构", "多种盎司等级", "支持灵活定制尺寸"], applications: ["工厂与码头", "粮食加工", "灌溉与木工设备"], specifications: [{ label: "参考等级", value: "28 / 30 / 32 / 34 / 36 OZ" }, { label: "增强层", value: "棉帆布" }, { label: "边缘选择", value: "切边 / 包边" }] },
  "industrial-v-belt": { name: "工业 V 带", eyebrow: "紧凑型驱动系统", summary: "根据带轮、电机和机械设备驱动结构选配的工业 V 带。", description: "OVBEL 为工业设备提供多种 V 带方案，可根据驱动结构和工作环境匹配带型、长度与增强结构。", features: ["按应用匹配带型", "提供驱动系统选型支持", "支持定制供货方案"], applications: ["工业机械", "输送机驱动", "加工设备"], specifications: [{ label: "带型", value: "根据应用选择" }, { label: "长度", value: "支持定制供货" }, { label: "结构", value: "包布或切边结构" }] },
  "impact-bed": { name: "缓冲床与缓冲条", eyebrow: "落料区防护", summary: "用于输送机落料点和转运点的低摩擦冲击支撑装置。", description: "缓冲条由橡胶、钢或铝框架及超高分子量聚乙烯组成，可吸收落料冲击、稳定皮带并减少撒料。", features: ["低摩擦滑动表面", "无运动部件，无需润滑", "减少皮带磨损与维护"], applications: ["转运点", "破碎机出料口", "重型散料落料区"], specifications: [{ label: "表层", value: "UHMWPE" }, { label: "缓冲层", value: "吸能橡胶" }, { label: "框架", value: "钢或铝" }] },
  "elevator-buckets": { name: "提升机料斗", eyebrow: "垂直物料输送", summary: "适用于粮食、食品、农业和工业提升系统的多系列料斗。", description: "超过 12 个料斗系列、近 400 个尺寸参考，可适配不同物料、输送能力和安装孔位。", features: ["HDPE、尼龙和 PU 材料", "支持定制安装孔", "按应用提供间距建议"], applications: ["粮食提升机", "食品加工", "工业散料输送"], specifications: [{ label: "系列", value: "12+ 个参考系列" }, { label: "尺寸", value: "近 400 个参考规格" }, { label: "材料", value: "HDPE / 尼龙 / PU" }] },
  "industrial-rubber-sheet": { name: "工业橡胶板", eyebrow: "密封与防护", summary: "可按标准规格或客户尺寸供应的通用工业橡胶板。", description: "适用于技术、防护和加工用途的黑色工业橡胶板，可按项目尺寸裁切或整卷供应。", features: ["标准板材供应", "按尺寸裁切", "宽厚度范围"], applications: ["垫片与衬垫", "车间铺垫", "通用工业加工"], specifications: [{ label: "颜色", value: "黑色" }, { label: "参考厚度", value: "1–100 mm" }, { label: "尺寸", value: "标准或定制" }] },
  "hydraulic-hose": { name: "液压胶管", eyebrow: "流体动力", summary: "根据压力、温度、介质和接头要求配置的液压胶管。", description: "OVBEL 为移动和固定式机械提供工业液压胶管选型支持，最终结构依据询盘中的工作条件确定。", features: ["按压力等级选型", "胶管与接头配套", "提供应用审核支持"], applications: ["矿山机械", "工业液压系统", "移动设备"], specifications: [{ label: "直径", value: "根据系统流量选择" }, { label: "压力等级", value: "根据工作压力选择" }, { label: "连接形式", value: "胶管或带接头总成" }] },
  "crusher-hammer": { name: "破碎机锤头", eyebrow: "耐磨件", summary: "根据破碎机类型、图纸和磨损工况匹配的替换锤头。", description: "可依据设备信息、尺寸或图纸供应破碎机锤头，并结合冲击和磨蚀工况选择材料。", features: ["按图纸匹配", "按磨损工况选择材料", "支持出口包装"], applications: ["锤式破碎机", "骨料加工", "矿物加工"], specifications: [{ label: "适配方式", value: "按设备或图纸匹配" }, { label: "材料", value: "根据磨损工况选择" }, { label: "尺寸", value: "客户指定" }] },
  "mine-screen-mesh": { name: "矿用筛网", eyebrow: "筛分介质", summary: "根据孔径、丝径、网片尺寸和物料工况配置的筛网。", description: "用于矿山、采石和骨料作业中分级与分离的工业筛网。", features: ["按应用选择孔径", "多种边缘形式", "尺寸与材料可定制"], applications: ["采石筛分", "骨料分级", "矿物分选"], specifications: [{ label: "孔径", value: "根据应用指定" }, { label: "网片尺寸", value: "定制" }, { label: "边缘", value: "与筛机匹配" }] },
  "industrial-electric-motor": { name: "工业电机", eyebrow: "动力源", summary: "根据功率、转速、电压、安装和防护要求配置的工业电机。", description: "OVBEL 为输送机和工业设备提供电机选型支持，在报价前确认电气和机械配置。", features: ["按应用选型", "支持出口市场电压", "安装与防护配置协调"], applications: ["输送机驱动", "加工机械", "工业设备"], specifications: [{ label: "功率", value: "根据应用选择" }, { label: "电压 / 频率", value: "按目标市场配置" }, { label: "安装方式", value: "与设备匹配" }] },
  "industrial-bearing": { name: "工业轴承", eyebrow: "旋转设备", summary: "可根据型号、尺寸、载荷、转速或设备位置匹配供应的轴承。", description: "为输送机、破碎机和旋转机械提供工业轴承采购与型号交叉匹配支持。", features: ["型号与尺寸匹配", "开式、带防尘盖和密封型可选", "支持型号交叉查询"], applications: ["输送机滚筒", "破碎机总成", "工业驱动系统"], specifications: [{ label: "类型", value: "根据载荷与转速选择" }, { label: "尺寸", value: "与设备匹配" }, { label: "密封形式", value: "开式 / 防尘盖 / 密封" }] },
};

export type Locale = "en" | "zh";

export function getCategories(locale: Locale = "en"): Category[] {
  if (locale === "en") return categories;
  return categories.map((category) => ({ ...category, ...zhCategories[category.slug] }));
}

export function getProducts(locale: Locale = "en"): Product[] {
  if (locale === "en") return products;
  return products.map((product) => ({ ...product, ...zhProducts[product.slug] }));
}

export function getLocalizedCategory(slug: string, locale: Locale = "en") {
  return getCategories(locale).find((category) => category.slug === slug);
}

export function getLocalizedProductsByCategory(categorySlug: string, locale: Locale = "en") {
  return getProducts(locale).filter((product) => product.category === categorySlug);
}

export function getLocalizedProduct(categorySlug: string, productSlug: string, locale: Locale = "en") {
  return getProducts(locale).find((product) => product.category === categorySlug && product.slug === productSlug);
}
