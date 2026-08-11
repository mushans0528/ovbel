export type Specification = { label: string; value: string };

export type ProductPattern = {
  name: string;
  description: string;
};

export type ProductSeo = {
  title: string;
  description: string;
};

export type ProductMedia = {
  gallery: string[];
  cover?: string;
  patternImages?: string[];
  constructionImage?: string;
  technicalImages?: string[];
};

export type ProductLayer = {
  name: string;
  material: string;
  purpose: string;
};

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
  applicationIntro?: string;
  featureHeading?: string;
  patterns?: ProductPattern[];
  precautions?: string[];
  inquiryChecklist?: string[];
  seo?: ProductSeo;
  sourceUrl?: string;
  media?: ProductMedia;
  layers?: ProductLayer[];
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
    summary: "Patterned conveyor belting for stable handling of powder, granules and bulk material on inclined systems.",
    description: "Raised profiles are vulcanized together with the top cover to improve grip, support drainage and reduce material rollback. Profile geometry can be selected or designed around the material and conveying conditions.",
    applicationIntro: "Chevron conveyor belts are used where a smooth belt may allow powdery, granular or block materials to slide or roll back. The 0–40° reference range is confirmed against the material, moisture, particle size, belt speed and loading method before quotation.",
    featureHeading: "Profiles matched to the conveying duty.",
    features: [
      "Anti-slip raised profiles improve material grip on inclined conveyors",
      "Profiles and the top cover are vulcanized as an integral construction",
      "Profile shape, angle and spacing can be selected around the application",
      "The patterned surface supports effective drainage",
      "Custom profile designs are available for suitable projects",
    ],
    applications: ["Mining and aggregate handling", "Grain and agricultural products", "Powder and granular materials", "Bagged and packaged goods", "General bulk-material conveying"],
    patterns: [
      { name: "Herringbone", description: "A directional profile for controlled material movement." },
      { name: "Figure 8", description: "A linked profile layout for distributed grip." },
      { name: "Fishbone", description: "Angled branches that guide and retain material." },
      { name: "U-shaped", description: "Open profiles selected around flow and drainage." },
      { name: "Cylindrical", description: "Raised contact points for application-specific handling." },
      { name: "Hemp-faced", description: "A textured surface for added contact and traction." },
    ],
    specifications: [
      { label: "Carcass options", value: "Cotton canvas (CC), polyester-cotton (CP), nylon (NN), polyester (EP)" },
      { label: "Reference belt width", value: "300–800 mm" },
      { label: "Profile height", value: "5 / 10 / 15 / 20 mm" },
      { label: "Reference inclination", value: "0–40°" },
      { label: "Profile geometry", value: "Standard options or custom design" },
    ],
    precautions: [
      "Keep the belt clean during transport and storage",
      "Protect it from direct sunlight, rain and snow",
      "Avoid contact with acids, alkalis, oils and organic solvents",
      "Store the belt at least one metre away from heating equipment",
    ],
    inquiryChecklist: ["Conveyed material", "Conveyor inclination", "Belt width and length", "Preferred profile and height", "Carcass and cover requirement", "Quantity and destination"],
    seo: {
      title: "Chevron Conveyor Belt for Inclined Material Handling",
      description: "Chevron conveyor belts with CC, CP, NN or EP carcass options, 300–800 mm reference widths and customizable profiles for inclined bulk-material handling.",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-114.html",
    media: {
      gallery: [
        "/products/chevron-conveyor-belt/production-line.webp",
        "/products/chevron-conveyor-belt/factory-roll.webp",
        "/products/chevron-conveyor-belt/profile-detail.webp",
        "/products/chevron-conveyor-belt/finished-rolls.webp",
      ],
      patternImages: [
        "/products/chevron-conveyor-belt/pattern-01.webp",
        "/products/chevron-conveyor-belt/pattern-02.webp",
        "/products/chevron-conveyor-belt/pattern-03.webp",
        "/products/chevron-conveyor-belt/pattern-04.webp",
        "/products/chevron-conveyor-belt/pattern-05.webp",
        "/products/chevron-conveyor-belt/pattern-06.webp",
      ],
    },
  },
  {
    slug: "elevator-conveyor-belt",
    name: "Elevator Conveyor Belt",
    category: "conveyor-belts",
    eyebrow: "Vertical conveying",
    summary: "Rubber elevator belting that carries mounted buckets for the vertical lifting of grain, aggregates, ores and other bulk materials.",
    description: "The belt acts as the traction and carrying element of a bucket elevator, lifting bulk material vertically in mounted buckets. High-strength, low-elongation constructions support continuous elevator duty, with antistatic (ISO 284), oil-resistant and ATEX (Ex II 2 GD c) design options available on request.",
    applicationIntro: "In a bucket elevator, material is lifted in buckets bolted to the belt: a head section with the drive pulley, a boot section with the take-up pulley and an intermediate casing, together with drive, backstop and braking devices. The source product information covers powdery, granular and small-lump materials with a bulk density below 1.5 t/m³, such as coal, grain and coke breeze. Belt construction and hole pattern are confirmed against bucket weight, spacing and lifting capacity before quotation.",
    featureHeading: "Engineered for continuous vertical lifting.",
    features: [
      "High load capacity with low elongation for stable vertical lifting",
      "Low energy consumption in continuous elevator duty",
      "Antistatic construction per ISO 284 and oil-resistant options",
      "ATEX (Ex II 2 GD c) design option for dust-exposed installations",
      "In-house belt perforation matched to bucket mounting",
    ],
    applications: ["Grain elevators and silos", "Mining and ore processing", "Aggregates and construction materials", "Coal and coke breeze handling", "Agricultural processing"],
    specifications: [
      { label: "Construction", value: "Rubber belt with mounted elevator buckets" },
      { label: "Reference bulk density", value: "Below 1.5 t/m³" },
      { label: "Perforation, belts up to 6 mm", value: "Holes 3–16 mm in 1 mm steps; 16–30 mm in 2 mm steps" },
      { label: "Perforation, belts 6.1–9 mm", value: "Holes 3–15 mm in 1 mm steps" },
      { label: "Antistatic", value: "ISO 284 construction option" },
      { label: "Typical materials", value: "Coal, grain, coke breeze and similar bulk solids" },
    ],
    inquiryChecklist: ["Conveyed material and bulk density", "Lifting height and capacity", "Belt width and length", "Bucket model and spacing", "Hole diameter and perforation pattern", "Quantity and destination"],
    seo: {
      title: "Elevator Conveyor Belt for Vertical Bulk-Material Lifting",
      description: "Bucket elevator belts with high load capacity, low elongation, ISO 284 antistatic and oil-resistant options, plus in-house perforation for bucket mounting.",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-120.html",
    media: {
      cover: "/products/elevator-conveyor-belt/cover.jpg",
      gallery: [
        "/products/elevator-conveyor-belt/elevator-head-pulley-buckets.webp",
        "/products/elevator-conveyor-belt/buckets-mounted-on-belt.webp",
        "/products/elevator-conveyor-belt/bucket-mounting-detail.webp",
        "/products/elevator-conveyor-belt/perforated-belt-roll-factory.webp",
      ],
    },
  },
  {
    slug: "rough-top-conveyor-belt",
    name: "Rough Top Conveyor Belt",
    category: "conveyor-belts",
    eyebrow: "Light-duty inclined conveying",
    summary: "A textured-surface rubber belt for stable handling of cartons, sacks and parcels on horizontal or inclined conveyors.",
    description: "The rough top cover provides traction for light goods while the EP fabric carcass delivers dimensional stability and load support across inclined lines.",
    applicationIntro: "Rough top belts are selected where a smooth cover would let bags, boxes or parcel loads slide on a slope. The reference inclination range applies to typical light-pack loads and is confirmed against the actual product, surface, belt speed and loading method before quotation.",
    featureHeading: "Engineered for grip, cushioning and quiet running.",
    features: [
      "Textured rubber top cover grips cartons, sacks and parcel loads",
      "2 or 3 ply EP fabric carcass for dimensional stability",
      "Cushioning surface helps absorb minor impact at transfer points",
      "Available with a bottom cover or as a bare-back slider-bed belt",
      "Cut edges with consistent thickness for reliable splice preparation",
      "Stable performance across horizontal and inclined conveying runs",
    ],
    applications: [
      "Warehouse and distribution conveying",
      "Parcel and courier handling",
      "Bagged goods and carton lines",
      "Postal and logistics sortation",
      "Light packaging transfer points",
    ],
    specifications: [
      { label: "Construction", value: "2 or 3 ply EP fabric carcass, cut edges" },
      { label: "Top cover", value: "Textured rubber, 1/8\" (3.2 mm) reference" },
      { label: "Bottom option", value: "1/16\" (1.6 mm) cover or bare back" },
      { label: "Ply options", value: "2 ply or 3 ply" },
      { label: "Edge type", value: "Cut edge (C/E)" },
      { label: "Reference inclination", value: "Typically 25–30°, up to ~35° for light loads" },
      { label: "Belt width", value: "Confirmed against the conveyor and load" },
      { label: "Suitable for", value: "Sacks, boxes, parcels and similar light goods" },
    ],
    precautions: [
      "Store rolls off the ground in a clean, dry, ventilated area",
      "Keep the belt away from direct sunlight, heat sources and ozone-generating devices",
      "Avoid contact with oils, solvents, acids and other chemicals that may attack rubber",
      "Handle rolls with suitable lifting equipment; do not drop, drag or bend sharply",
      "Keep protective wrapping in place until installation",
    ],
    inquiryChecklist: [
      "Conveyed goods (type, weight and dimensions)",
      "Conveyor length, width and inclination",
      "Belt speed and loading method",
      "Required ply count and bottom-cover preference",
      "Operating environment and temperature",
      "Quantity, destination and required delivery",
    ],
    seo: {
      title: "Rough Top Conveyor Belt for Light-Duty Inclined Conveying",
      description: "Textured-surface rough top conveyor belt with 2 or 3 ply EP construction, cut edges, optional bottom cover or bare back, for cartons, sacks and parcels.",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-123.html",
    media: {
      cover: "/products/rough-top-conveyor-belt/cover.webp",
      gallery: [
        "/products/rough-top-conveyor-belt/surface-texture.webp",
        "/products/rough-top-conveyor-belt/factory-rolling.webp",
        "/products/rough-top-conveyor-belt/cross-section.webp",
      ],
    },
  },
  {
    slug: "sidewall-conveyor-belt",
    name: "Sidewall Conveyor Belt",
    category: "conveyor-belts",
    eyebrow: "Steep-angle conveying",
    summary: "Corrugated sidewall and cleated belt for elevating bulk materials at steep angles in a compact footprint.",
    description: "A base belt with corrugated sidewalls and moulded or extruded cleats forms a continuous pocket that lifts bulk solids at steep inclines with no transfer points and minimal footprint.",
    applicationIntro: "Sidewall belts are selected where vertical lift or steep conveying is needed but space is limited. Final selection is confirmed against material characteristics, lump size, moisture, required capacity, lift height and belt speed before quotation.",
    featureHeading: "Engineered for steep lift and compact layouts.",
    features: [
      "Corrugated sidewalls and cleats form stable material pockets",
      "Conveys at steep angles, reducing transfer points and footprint",
      "Moulded cleats for large profiles, extruded cleats for smaller profiles",
      "Available cover grades include abrasion, oil/fat, heat, flame retardant",
      "Can be built into a complete transportation system for the application",
      "Base belt, sidewall and cleat combinations selected to the duty",
    ],
    applications: [
      "Mining and quarry incline conveying",
      "Coal and aggregate loading",
      "Cement and construction materials",
      "Recycling and waste handling",
      "Agricultural grain and bulk solids",
    ],
    specifications: [
      { label: "Base belt width", value: "300–1800 mm (from reference tables)" },
      { label: "Sidewall height H", value: "40–500 mm" },
      { label: "Cleat height Ch", value: "35–460 mm" },
      { label: "Sidewall profiles", value: "S, HDS, XHDS" },
      { label: "Cleat types", value: "C, TC, T, MTC, TC-XS" },
      { label: "Cover qualities", value: "Abrasion, oil/fat resistant, 100°C heat, 130°C high heat, flame retardant" },
      { label: "Min pulley diameter", value: "100–1000 mm, depends on profile" },
      { label: "Cleat lengths", value: "Moulded 2.5 m; extruded 3 m / 5 m" },
      { label: "Reinforcement option", value: "Fabric reinforced sidewall/cleat available (specs marked *)" },
    ],
    precautions: [
      "Store rolls off the ground in a clean, dry, ventilated area",
      "Keep away from direct sunlight, heat sources and ozone-generating devices",
      "Avoid contact with oils, solvents, acids and alkalis that may attack rubber",
      "Handle with suitable lifting equipment; do not drop, drag or bend sharply",
      "Keep protective cartons and wrapping in place until installation",
    ],
    inquiryChecklist: [
      "Conveyed material, bulk density and lump size",
      "Required capacity, lift height and conveying angle",
      "Base belt width preference or constraint",
      "Sidewall height and cleat type required",
      "Cover grade (abrasion/oil/heat/flame retardant)",
      "Operating temperature and environment",
      "Quantity, destination port and delivery schedule",
    ],
    seo: {
      title: "Sidewall Conveyor Belt for Steep-Angle Bulk Conveying",
      description: "Corrugated sidewall and cleated conveyor belt with S/HDS/XHDS sidewalls and C/TC/T/MTC cleats, base widths 300–1800 mm, for steep-angle material handling.",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-118.html",
    media: {
      cover: "/products/sidewall-conveyor-belt/cover.webp",
      gallery: [
        "/products/sidewall-conveyor-belt/cover.webp",
        "/products/sidewall-conveyor-belt/factory-overview.webp",
        "/products/sidewall-conveyor-belt/long-belt-line.webp",
        "/products/sidewall-conveyor-belt/large-rolls-stored.webp",
        "/products/sidewall-conveyor-belt/rolled-product.webp",
      ],
      technicalImages: [
        "/products/sidewall-conveyor-belt/sidewall-types-spec.webp",
        "/products/sidewall-conveyor-belt/combination-spec.webp",
        "/products/sidewall-conveyor-belt/cleat-types-spec.webp",
      ],
    },
    patterns: [
      { name: "S type sidewall", description: "Standard corrugated sidewall for general-purpose steep conveying." },
      { name: "HDS type sidewall", description: "Heavy-duty sidewall profile for higher loads and larger lump sizes." },
      { name: "XHDS type sidewall", description: "Extra heavy-duty sidewall with fabric reinforcement for extreme duty." },
      { name: "C type cleat", description: "Basic C-shaped cleat for light to medium conveying." },
      { name: "TC type cleat", description: "T-C combination cleat offering larger pocket capacity." },
      { name: "T type cleat", description: "T-shaped cleat for medium-load steep conveying." },
      { name: "MTC type cleat", description: "Moulded T-C cleat for heavy-duty applications." },
      { name: "TC-XS type cleat", description: "Extra-strength TC cleat profile for high-density materials." },
    ],
  },
  {
    slug: "solid-woven-conveyor-belt",
    name: "Solid Woven Conveyor Belt",
    category: "conveyor-belts",
    eyebrow: "PVC / PVG flame-retardant",
    summary: "High-strength solid woven carcass belt with PVC or PVG covers for mining and industrial conveying, especially underground coal mines.",
    description: "A solid woven carcass made from high-tenacity synthetic and cotton fibres is impregnated and coated to produce a thin, light, impact-resistant belt. PVC solid woven belts suit dry conditions up to 16° incline; PVG rubber-faced belts suit wet conditions up to 20° incline, with flame-retardant and static-conductive properties for safe underground operation.",
    applicationIntro: "Solid woven belts are selected where flame retardancy, static conductivity, light weight and high strength are required. Typical duties include underground coal transport, mining inclines and material handling in wet or dusty conditions. Confirm belt type, strength grade, width, cover grade and joint method before quotation.",
    featureHeading: "Flame-retardant, static-conductive and built for demanding mining duty.",
    features: [
      "Solid woven carcass with high strength and low elongation",
      "Lightweight, impact resistant and good tear resistance",
      "Flame-retardant and static-conductive for underground safety",
      "Good troughability and low heat generation under load",
      "PVC type for dry conditions, PVG type for wet conditions",
      "Long service life and reliable safety performance",
    ],
    applications: [
      "Underground coal mine conveying",
      "Mining and quarry material transport",
      "Port and terminal bulk handling",
      "Wet or damp inclined conveying",
      "General industrial bulk material systems",
    ],
    specifications: [
      { label: "Product types", value: "PVC solid woven / PVG rubber-faced solid woven" },
      { label: "Reference standards", value: "MT914, BS3289, HG2805" },
      { label: "Longitudinal tensile strength", value: "680S to 2500S (680–2500 N/mm)" },
      { label: "Transverse tensile strength", value: "265–450 N/mm" },
      { label: "Longitudinal elongation at break", value: "≥ 15%" },
      { label: "Transverse elongation at break", value: "≥ 18%" },
      { label: "Top/bottom cover thickness", value: "≥ 1.0 mm" },
      { label: "PVC type inclination", value: "≤ 16°, dry conditions" },
      { label: "PVG type inclination", value: "< 20°, wet conditions" },
      { label: "PVG cover thickness range", value: "1–8 mm" },
      { label: "PVC cover thickness range", value: "0.5–4 mm" },
    ],
    patterns: [
      { name: "PVC solid woven type", description: "Fully plastic solid carcass belt used in dry conditions at inclinations up to 16°." },
      { name: "PVG rubber-faced type", description: "Rubber-covered solid carcass belt used in wet conditions at inclinations up to 20°." },
      { name: "680S grade", description: "680 N/mm longitudinal tensile strength for light-duty mining and conveying." },
      { name: "800S–1250S grades", description: "Mid-range strength grades for general mining and industrial applications." },
      { name: "1400S–2000S grades", description: "Higher strength grades for heavy-duty conveying." },
      { name: "2240S–2500S grades", description: "Top-end strength grades for the most demanding loads and long centres." },
    ],
    precautions: [
      "Store rolls off the ground in a clean, dry, ventilated place away from direct sunlight",
      "Keep away from heat sources, ozone-generating devices and open flames",
      "Avoid contact with oils, solvents, acids and alkalis that may attack rubber or PVC",
      "Handle with suitable lifting equipment; do not drop, drag or bend sharply",
      "Protective wrapping should remain in place until the belt is installed",
    ],
    inquiryChecklist: [
      "Belt type required: PVC or PVG",
      "Strength grade (e.g., 680S, 1000S, 1600S, 2500S)",
      "Required belt width and length",
      "Top/bottom cover thickness or grade",
      "Operating inclination and wet/dry conditions",
      "Flame-retardant / static-conductive requirements and applicable standard",
      "Jointing method and quantity required",
      "Destination port and delivery schedule",
    ],
    seo: {
      title: "Solid Woven Conveyor Belt (PVC/PVG) for Mining and Underground Use",
      description: "Flame-retardant solid woven conveyor belt with PVC or PVG covers, strength grades 680S–2500S, compliant with MT914/BS3289/HG2805, for underground coal mines and industrial conveying.",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-119.html",
    media: {
      cover: "/products/solid-woven-conveyor-belt/cover.webp",
      gallery: [
        "/products/solid-woven-conveyor-belt/cover.webp",
        "/products/solid-woven-conveyor-belt/cross-section-stack.webp",
        "/products/solid-woven-conveyor-belt/cross-section-folded.webp",
        "/products/solid-woven-conveyor-belt/cross-section-flat.webp",
        "/products/solid-woven-conveyor-belt/cross-section-angle.webp",
      ],
      technicalImages: [
        "/products/solid-woven-conveyor-belt/tensile-spec-table.webp",
      ],
    },
  },
  {
    slug: "white-conveyor-belt",
    name: "White Conveyor Belt",
    category: "conveyor-belts",
    eyebrow: "Food-grade hygienic conveying",
    summary: "White rubber food-grade conveyor belt for clean, non-marking conveying of bulk food products through sugar, grain, dock-side and processing lines.",
    description: "A smooth white rubber cover combined with a fabric-reinforced carcass gives a clean, non-marking conveying surface for bulk food products. The construction is engineered for hygienic duties where standard black belts are not acceptable, and for long, continuous service between routine wash-downs.",
    applicationIntro: "White conveyor belts are specified where a clean, smooth, non-marking surface is required to move bulk food products without contamination, staining or taint. Selection is confirmed against the conveyed product, contact temperature, cleaning method and operating duty before quotation.",
    featureHeading: "Built for clean, food-grade material handling.",
    features: [
      "Smooth white rubber cover supports hygienic, non-marking conveying of food products",
      "Stain-resistant surface helps keep the line clean between wash cycles",
      "High-strength fabric carcass supports long, continuous conveying runs",
      "Odorless, tasteless and non-toxic rubber compound for sensitive food-contact duties",
      "Durable construction for long service life and economical operation",
      "Smooth cover assists wash-down and routine sanitation",
    ],
    applications: [
      "Sugar and grain handling",
      "Dock-side bulk food transfer",
      "Silo and storage loading",
      "Food processing and packaging lines",
      "General hygienic bulk-material conveying",
    ],
    specifications: [
      { label: "Top cover–carcass adhesion (min)", value: "12 N/mm" },
      { label: "Inter-layer adhesion (min)", value: "12 N/mm" },
      { label: "Bottom cover–carcass adhesion (min)", value: "12 N/mm" },
      { label: "Tensile strength (min)", value: "15 MPa" },
      { label: "Elongation at break (min)", value: "350%" },
      { label: "Abrasion", value: "≤ 250 mm³" },
      { label: "Hardness", value: "60–65 Shore A" },
      { label: "Extension ratio", value: "0.5–1%" },
      { label: "Tear resistance", value: "Good" },
      { label: "Ross flexing", value: "Good" },
      { label: "Oil resistance", value: "Poor (not recommended)" },
      { label: "Acid–alkaline resistance", value: "Poor (not recommended)" },
      { label: "Operating temperature (max)", value: "80 °C" },
    ],
    layers: [
      { name: "Top cover", material: "White rubber compound", purpose: "The smooth food-contact conveying surface." },
      { name: "Carcass", material: "Fabric reinforcement", purpose: "Provides tensile strength and dimensional stability; inter-layer adhesion ≥ 12 N/mm." },
      { name: "Bottom cover", material: "White rubber compound", purpose: "The pulley-side running surface." },
    ],
    precautions: [
      "Store rolls off the ground in a clean, dry, ventilated place away from direct sunlight",
      "Keep away from heat sources, ozone-generating devices and open flames",
      "Avoid contact with oils, solvents, acids and alkalis that may attack the rubber cover",
      "Handle with suitable lifting equipment; do not drop, drag or bend sharply",
      "Keep protective wrapping in place until the belt is installed",
    ],
    inquiryChecklist: [
      "Conveyed food product and any contact-temperature sensitivity",
      "Required belt width and length",
      "Belt speed and operating inclination",
      "Cleaning method and frequency (wash-down, dry wipe, etc.)",
      "Carcass construction and cover thickness preference",
      "Required quantity and destination",
    ],
    seo: {
      title: "White Conveyor Belt for Food-Grade and Hygienic Material Handling",
      description: "White rubber food-grade conveyor belt with a smooth non-marking cover, high tensile strength and good tear resistance, used for sugar, grain, dock-side transfer and food processing lines.",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-115.html",
    media: {
      cover: "/products/white-conveyor-belt/cover.webp",
      gallery: [
        "/products/white-conveyor-belt/cover.webp",
        "/products/white-conveyor-belt/factory-overview.webp",
        "/products/white-conveyor-belt/production-line.webp",
        "/products/white-conveyor-belt/belt-detail.webp",
      ],
      technicalImages: [
        "/products/white-conveyor-belt/spec-table.webp",
      ],
    },
  },
  {
    slug: "steel-cord-conveyor-belt",
    name: "Steel Cord Conveyor Belt",
    category: "conveyor-belts",
    eyebrow: "High-strength long-haul conveying",
    summary: "Steel-cable reinforced conveyor belt for heavy-load, long-distance bulk material transport with high tensile strength and low elongation.",
    description: "A new-type steel cable serves as the tension element, with transverse steel reinforcing layers laid perpendicular to the longitudinal cables on one or both sides. The construction provides high tensile strength, low extensibility, small transmission pulley diameters, uniform cable tension, excellent troughability and good adhesion between rubber and steel wire.",
    applicationIntro: "Steel cord conveyor belts are selected for heavy-load, long-distance, high-capacity conveying where low elongation and high strength are required. Belt construction, cover type and standard specification are confirmed against the material, tonnage and operating conditions before quotation.",
    featureHeading: "Steel-cable reinforcement for heavy-load, long-haul duty.",
    features: [
      "New-type steel cable tension elements with transverse steel reinforcement",
      "High tensile strength with low extensibility for long centres",
      "Smaller transmission pulley diameters than fabric carcass equivalents",
      "Uniform steel wire rope tension and excellent troughability",
      "Good adhesion between rubber and steel wire",
      "Available with general, flame-retardant, cold-resistant, wear-resistant, heat-resistant, oil-resistant and acid/alkali-resistant covers",
    ],
    applications: [
      "Mining and quarrying",
      "Ports and terminals",
      "Metallurgical industry",
      "Cement industry",
      "Power industries",
      "Chemical industries",
    ],
    specifications: [
      { label: "Tension element", value: "New-type steel cable" },
      { label: "Reinforcement", value: "Transverse steel cable layer(s) perpendicular to longitudinal cables" },
      { label: "Key properties", value: "High tensile strength, low extensibility, uniform tension, excellent troughability" },
      { label: "Cover types", value: "General, fire-retardant for coal mines, general-purpose fire-retardant, cold-resistant, wear-resistant, heat-resistant, oil-resistant, acid/alkali-resistant" },
      { label: "Standard references", value: "GB9770-2001 and DIN22131 cover-grade and adhesion indexes (see technical images)" },
    ],
    patterns: [
      { name: "General type", description: "Standard cover for general conveying duties." },
      { name: "Fire-retardant type for coal mines", description: "Flame-retardant cover for underground coal mine service." },
      { name: "General-purpose fire-retardant type", description: "Flame-retardant cover for general industrial applications." },
      { name: "Cold-resistant type", description: "Cover formulated for low-temperature operation." },
      { name: "Wear-resistant type", description: "Cover for abrasive bulk material handling." },
      { name: "Heat-resistant type", description: "Cover for elevated-temperature materials." },
      { name: "Oil-resistant type", description: "Cover resistant to oil and grease." },
      { name: "Acid/alkali-resistant type", description: "Cover resistant to acid and alkali attack." },
    ],
    precautions: [
      "Store coils off the floor in a clean, dry, ventilated place away from direct sunlight",
      "Keep away from heat sources, ozone-generating equipment and open flames",
      "Avoid contact with oils, solvents, acids, alkalis or other chemicals that may attack rubber",
      "Handle with suitable lifting equipment; do not throw, drag or bend sharply",
      "Check tension, splices and pulley alignment during installation and initial running",
    ],
    inquiryChecklist: [
      "Conveyed material and lump size",
      "Required belt width, length and strength grade (St)",
      "Number of steel cords and adhesion requirements",
      "Cover grade (general / flame-retardant / cold-resistant / heat-resistant / oil-resistant / acid-alkali-resistant)",
      "Operating environment, temperature and fire-resistance requirements",
      "Quantity and destination port",
    ],
    seo: {
      title: "Steel Cord Conveyor Belt — Heavy-load Long-distance Conveying",
      description: "Steel-cable reinforced conveyor belt with high tensile strength and low elongation for mining, ports, metallurgy, cement, power and chemical industries. Cover types include flame-retardant, cold-resistant, wear-resistant and heat-resistant.",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-136.html",
    media: {
      cover: "/products/steel-cord-conveyor-belt/cover.webp",
      gallery: [
        "/products/steel-cord-conveyor-belt/cover.webp",
        "/products/steel-cord-conveyor-belt/belt-structure.webp",
        "/products/steel-cord-conveyor-belt/construction.webp",
        "/products/steel-cord-conveyor-belt/belt-roll.webp",
      ],
      technicalImages: [
        "/products/steel-cord-conveyor-belt/steel-cords-spec.webp",
        "/products/steel-cord-conveyor-belt/standard-belt-spec.webp",
        "/products/steel-cord-conveyor-belt/cover-grades-spec.webp",
        "/products/steel-cord-conveyor-belt/adhesion-spec.webp",
      ],
    },
  },
  {
    slug: "anti-tear-conveyor-belt",
    name: "Anti-Tear Conveyor Belt",
    category: "conveyor-belts",
    eyebrow: "Weft-reinforced impact and tear resistance",
    summary: "Anti-tear conveyor belt with transverse steel or polyester cord reinforcement for impact-prone bulk material handling.",
    description: "The weft reinforced anti-tear conveyor belt has highly extensible transverse steel cords or polyester cords evenly arranged in the top cover (or both top and bottom cover) of the steel-cord or fabric carcass, to reinforce the impact resistance and tear resistance of the belt.",
    applicationIntro: "Anti-tear conveyor belts are selected where falling lumps, sharp edges or heavy impacts can initiate tears in the carcass. Construction, reinforcement material and cover grade are matched to the conveyed material and duty before quotation.",
    featureHeading: "Weft reinforcement protects the carcass against impact and tearing.",
    features: [
      "Transverse steel cords or polyester cords arranged in the cover as weft reinforcement",
      "Reinforcement placed in the top cover or both top and bottom cover",
      "Improves impact resistance against lump drop and sharp material edges",
      "Improves tear resistance to limit damage propagation in the carcass",
      "Compatible with steel-cord or multi-ply fabric carcass constructions",
      "Cover grade selected for the material abrasiveness and operating conditions",
    ],
    applications: [
      "Mining and quarrying",
      "Ports and terminals",
      "Metallurgical industry",
      "Power industry",
      "Coal mining and handling",
      "Cement industry",
      "Chemical industry",
      "Casting industry",
    ],
    specifications: [
      { label: "Reinforcement", value: "Transverse steel cords or polyester cords evenly arranged in the top cover or in both top and bottom cover" },
      { label: "Carcass compatibility", value: "Steel-cord or fabric carcass" },
      { label: "Performance", value: "Reinforces impact resistance and tear resistance of the belt" },
      { label: "Specification", value: "Belt width, reinforcement layout and cover grade confirmed against material and duty before quotation" },
    ],
    patterns: [
      { name: "Steel cord reinforcement", description: "Transverse steel cords used as weft reinforcement for high-strength tear resistance." },
      { name: "Polyester cord reinforcement", description: "Transverse polyester cords used as weft reinforcement for flexible anti-tear protection." },
      { name: "Single-side cover reinforcement", description: "Reinforcement layer arranged in the carrying cover only." },
      { name: "Both-side cover reinforcement", description: "Reinforcement layers arranged in both the carrying and return covers." },
    ],
    precautions: [
      "Store rolls off the ground in a clean, dry, ventilated place away from direct sunlight",
      "Keep away from heat sources, ozone-generating devices and open flames",
      "Avoid contact with oils, solvents, acids and alkalis that may attack the rubber",
      "Handle with suitable lifting equipment; do not drop, drag or bend sharply",
      "Check belt tension, splices and pulley alignment during installation and initial running",
    ],
    inquiryChecklist: [
      "Conveyed material, lump size and abrasiveness",
      "Required belt width, length and carcass construction",
      "Reinforcement material (steel cord or polyester cord) and cover layers",
      "Operating environment, temperature and any fire-retardant requirement",
      "Expected impact height and severity",
      "Quantity required and destination",
    ],
    seo: {
      title: "Anti-Tear Conveyor Belt for Impact and Tear-Prone Bulk Handling",
      description: "Weft-reinforced anti-tear conveyor belt with transverse steel or polyester cords for mining, port, metallurgy, power, coal, cement, chemical and casting applications.",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-143.html",
    media: {
      cover: "/products/anti-tear-conveyor-belt/cover.webp",
      gallery: [
        "/products/anti-tear-conveyor-belt/cover.webp",
        "/products/anti-tear-conveyor-belt/belt-edge-closeup.webp",
        "/products/anti-tear-conveyor-belt/belt-edge-detail.webp",
        "/products/anti-tear-conveyor-belt/belt-section-samples.webp",
        "/products/anti-tear-conveyor-belt/carcass-exploded-view.webp",
      ],
      technicalImages: [
        "/products/anti-tear-conveyor-belt/belt-carcass-structure-diagram.webp",
        "/products/anti-tear-conveyor-belt/cover-thickness-spec-table.webp",
      ],
    },
  },
  {
    slug: "transmission-flat-belt",
    name: "Transmission Flat Belt",
    category: "power-transmission-belts",
    eyebrow: "Mechanical power transfer",
    summary: "Canvas-reinforced flat rubber belting for industrial and agricultural transmission systems.",
    description: "A traditional flat transmission belt built around high-quality cotton canvas skeleton layers for reliable mechanical power transfer. Suitable for ordinary machinery drives and higher-power grain processing, irrigation, wood-cutting and other agricultural or industrial power-transmitting equipment.",
    applicationIntro: "Flat transmission belts are used where a durable, flexible flat belt transfers mechanical power between pulleys. The construction, ounce grade and edge type are selected around the driven equipment, power transmitted, pulley arrangement and operating environment before quotation.",
    featureHeading: "Cotton-canvas construction for dependable power transfer.",
    features: [
      "High-quality cotton canvas skeleton layers for strength and stability",
      "Cut-edge and round-edge constructions for different pulley arrangements",
      "Grades from 28 OZ to 36 OZ to match the transmission duty",
      "Flexible custom sizing for belt width and length",
      "Suitable for factory, mine, terminal and metallurgical applications",
      "Widely used in grain processing, irrigation and wood-cutting drives",
    ],
    applications: [
      "Factories, mines and terminals",
      "Metallurgical industry equipment",
      "Grain processing machinery (rice and wheat)",
      "Irrigation equipment",
      "Wood-cutting and power-transmitting equipment",
      "General agricultural and industrial drives",
    ],
    specifications: [
      { label: "Reference grades", value: "28 OZ / 30 OZ / 32 OZ / 34 OZ / 36 OZ" },
      { label: "Skeleton layer", value: "High-quality cotton canvas" },
      { label: "Edge options", value: "Cut edge / Round edge" },
      { label: "Cut-edge construction", value: "Full-width canvas layers bonded and cut to width; cut surfaces coated with rubber paste" },
      { label: "Round-edge construction", value: "The outer ply or plies of canvas are folded so the belt sides form curved surfaces" },
    ],
    patterns: [
      { name: "Cut edge flat belt", description: "Layers of full-width canvas are bonded together and cut to width, with the cut edge surfaces coated with rubber paste." },
      { name: "Round edge flat belt", description: "The outer ply or plies of canvas are folded over so the belt sides form curved surfaces." },
    ],
    precautions: [
      "Store rolls off the ground in a clean, dry, ventilated place away from direct sunlight",
      "Keep away from heat sources, ozone-generating devices and open flames",
      "Avoid contact with oils, solvents, acids and alkalis that may attack the rubber cover",
      "Handle with suitable lifting equipment; do not drop, drag or bend sharply",
      "Check belt tension and pulley alignment during installation and initial running",
    ],
    inquiryChecklist: [
      "Ounce grade required (28 / 30 / 32 / 34 / 36 OZ)",
      "Edge type: cut edge or round edge",
      "Required belt width and length",
      "Driven equipment and power transmitted",
      "Pulley diameters and centre distance",
      "Quantity required and destination",
    ],
    seo: {
      title: "Transmission Flat Belt (28–36 OZ) with Cotton Canvas Skeleton",
      description: "Cotton-canvas flat transmission belts in 28–36 OZ grades with cut-edge and round-edge constructions for factory, mine, terminal, grain-processing, irrigation and wood-cutting drives.",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-121.html",
    media: {
      cover: "/products/transmission-flat-belt/cover.webp",
      gallery: [
        "/products/transmission-flat-belt/cover.webp",
        "/products/transmission-flat-belt/cut-edge.webp",
        "/products/transmission-flat-belt/round-edge.webp",
        "/products/transmission-flat-belt/belt-roll.webp",
      ],
      technicalImages: [
        "/products/transmission-flat-belt/ounce-grades-table.webp",
      ],
    },
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
    summary: "A full-width impact support system engineered to protect conveyor belts at demanding loading and transfer points.",
    description: "Replace impact idlers with a stable, low-friction support surface. Modular impact bars combine UHMWPE, resilient rubber and a reinforced metal profile to absorb loading energy, control belt sag and help keep the sealing line closed.",
    applicationIntro: "Impact beds support the belt continuously through the loading zone, where falling material, belt deflection and skirt-board leakage are most severe. Bed width, bar configuration and rubber grade are matched to belt width, drop height, lump size and operating duty.",
    featureHeading: "Control impact at the point where it enters the system.",
    features: [
      "Continuous support helps prevent belt sag between conventional idlers",
      "Low-friction UHMWPE top layer allows the belt to run smoothly",
      "High-elasticity rubber absorbs impact energy and reduces belt damage",
      "Modular bars can be inspected and replaced individually",
      "No rotating parts or lubrication points inside the loading zone",
      "Adjustable support frames simplify alignment with skirt-board sealing",
    ],
    applications: ["Primary crusher discharge", "Mine and quarry transfer points", "High-drop loading zones", "Heavy or sharp bulk material", "Skirt-board sealing zones", "Ports and bulk terminals"],
    specifications: [
      { label: "Sliding layer", value: "Low-friction UHMWPE" },
      { label: "Impact cushion", value: "High-elasticity rubber" },
      { label: "Reinforcement", value: "Aluminum or steel profile" },
      { label: "Bar construction", value: "Three-layer vulcanized assembly" },
      { label: "Bed arrangement", value: "Fixed or adjustable support frame" },
      { label: "Dimensions", value: "Configured to belt width and loading duty" },
    ],
    layers: [
      { name: "Sliding surface", material: "UHMWPE", purpose: "Reduces running friction and heat at the belt interface." },
      { name: "Energy absorber", material: "Rubber", purpose: "Deflects under impact to protect the belt carcass." },
      { name: "Structural rail", material: "Aluminum / steel", purpose: "Locks the bar securely to the support frame." },
    ],
    precautions: [
      "Confirm the center and wing-bar heights before commissioning",
      "Maintain a clean, continuous contact line without excessive belt pressure",
      "Inspect fasteners and bar wear after the initial operating period",
      "Replace damaged bars before the reinforcement profile is exposed",
    ],
    inquiryChecklist: ["Belt width and speed", "Material and maximum lump size", "Drop height", "Loading-zone length", "Existing idler arrangement", "Site photos or drawings"],
    seo: {
      title: "Conveyor Impact Bed & Impact Bars for Loading Zones",
      description: "Impact beds and three-layer UHMWPE rubber impact bars configured for conveyor loading zones, transfer points and heavy bulk-material handling.",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-128.html",
    media: {
      gallery: [
        "/images/products/impact-bed/impact-bed-installed.webp",
        "/images/products/impact-bed/impact-bed-set.webp",
        "/images/products/impact-bed/impact-bar-black.webp",
      ],
      constructionImage: "/images/products/impact-bed/impact-bar-red.webp",
      technicalImages: [
        "/images/products/impact-bed/technical-drawing.png",
        "/images/products/impact-bed/specification-table.png",
        "/images/products/impact-bed/specification-notes.png",
      ],
    },
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
  "chevron-conveyor-belt": {
    name: "花纹输送带",
    eyebrow: "倾斜输送",
    summary: "用于在倾斜输送系统中稳定输送粉状、颗粒状和块状物料的花纹输送带。",
    description: "凸起花纹与上覆盖胶整体硫化，可增强抓附、改善排水并减少物料回落。花纹结构可根据物料特性和输送工况选择或定制。",
    applicationIntro: "当光面输送带可能导致粉状、颗粒状或块状物料下滑或回滚时，可以使用花纹输送带。0–40° 为参考范围，报价前需结合物料、含水率、粒径、带速和装载方式确认。",
    featureHeading: "围绕输送工况匹配花纹结构。",
    features: [
      "凸起防滑花纹增强倾斜输送时的物料抓附",
      "花纹与上覆盖胶采用整体硫化结构",
      "可根据应用选择花纹形状、角度和间距",
      "花纹表面具有良好的排水性能",
      "合适的项目支持定制花纹设计",
    ],
    applications: ["矿山与砂石骨料", "粮食与农产品", "粉状与颗粒物料", "袋装与包装货物", "通用散料输送"],
    patterns: [
      { name: "人字形", description: "用于控制物料移动的定向花纹。" },
      { name: "8 字形", description: "通过连续结构分散抓附区域。" },
      { name: "鱼骨形", description: "倾斜分支有助于引导和保持物料。" },
      { name: "U 形", description: "围绕物料流动与排水要求选择。" },
      { name: "圆柱形", description: "按应用配置凸起接触点。" },
      { name: "麻面", description: "通过纹理表面增加接触和摩擦。" },
    ],
    specifications: [
      { label: "带芯选择", value: "棉帆布（CC）、涤棉帆布（CP）、尼龙（NN）、聚酯帆布（EP）" },
      { label: "参考带宽", value: "300–800 mm" },
      { label: "花纹高度", value: "5 / 10 / 15 / 20 mm" },
      { label: "参考倾角", value: "0–40°" },
      { label: "花纹结构", value: "常规选项或定制设计" },
    ],
    precautions: [
      "运输和储存期间保持输送带清洁",
      "避免阳光直射以及雨雪侵袭",
      "避免接触酸、碱、油和有机溶剂",
      "与加热装置保持至少一米距离",
    ],
    inquiryChecklist: ["输送物料", "输送倾角", "带宽与带长", "花纹类型与高度", "带芯与覆盖胶要求", "数量与目的地"],
    seo: {
      title: "倾斜物料输送用花纹输送带",
      description: "提供 CC、CP、NN、EP 带芯选择、300–800 mm 参考带宽和可定制花纹结构的倾斜物料输送带。",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-114.html",
  },
  "elevator-conveyor-belt": {
    name: "斗式提升机输送带",
    eyebrow: "垂直提升输送",
    summary: "以橡胶带为牵引承载件、安装料斗垂直提升粮食、砂石、矿石等散状物料的提升机输送带。",
    description: "胶带作为斗式提升机的牵引与承载部件，配合安装料斗实现散状物料的垂直提升。高强力、低延伸结构适用于连续提升工况；可按需提供防静电（ISO 284）、耐油和 ATEX（Ex II 2 GD c）设计选项。",
    applicationIntro: "斗式提升机通过螺栓固定在胶带上的料斗提升物料：上部为驱动滚筒区段，下部为张紧滚筒区段，中间为机壳，并配有驱动装置、逆止器和制动装置。原产品资料适用于堆密度小于 1.5 t/m³ 的粉状、颗粒状及小块状物料，如煤、粮食和焦炭粉尘。带体结构与打孔方案需在报价前结合料斗重量、安装间距和提升能力确认。",
    featureHeading: "为连续垂直提升工况而设计。",
    features: [
      "高承载能力、低延伸率，保证垂直提升运行稳定",
      "连续提升工况下能耗较低",
      "提供符合 ISO 284 的防静电结构和耐油选项",
      "提供适用于粉尘环境的 ATEX（Ex II 2 GD c）设计选项",
      "自有皮带打孔服务，孔位与料斗安装匹配",
    ],
    applications: ["粮食提升机与筒仓", "矿山与矿石加工", "砂石与建筑材料", "煤炭与焦炭粉尘处理", "农产品加工"],
    specifications: [
      { label: "结构", value: "橡胶带配装提升料斗" },
      { label: "参考物料堆密度", value: "小于 1.5 t/m³" },
      { label: "打孔范围（≤6 mm 带体）", value: "孔径 3–16 mm，按 1 mm 递增；16–30 mm，按 2 mm 递增" },
      { label: "打孔范围（6.1–9 mm 带体）", value: "孔径 3–15 mm，按 1 mm 递增" },
      { label: "防静电", value: "符合 ISO 284 的结构选项" },
      { label: "典型物料", value: "煤、粮食、焦炭粉尘等散状物料" },
    ],
    inquiryChecklist: ["输送物料与堆密度", "提升高度与输送量", "带宽与带长", "料斗型号与安装间距", "孔径与打孔布置", "数量与目的地"],
    seo: {
      title: "垂直散料提升用斗式提升机输送带",
      description: "高承载、低延伸的斗式提升机输送带，提供 ISO 284 防静电、耐油选项及与料斗安装匹配的自有打孔服务。",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-120.html",
  },
  "rough-top-conveyor-belt": { name: "粗面输送带", eyebrow: "轻型倾斜输送", summary: "适用于在水平或倾斜输送机上稳定输送纸箱、袋装货物与包裹的纹理橡胶输送带。", description: "粗糙纹理上覆盖胶为轻型货物提供摩擦力，EP 织物带芯保证尺寸稳定性与承载能力，适用于连续倾斜输送工况。", applicationIntro: "在光面输送带易导致袋装、箱装或包裹货物下滑的工况下，可选用粗面输送带。参考倾角范围适用于典型轻型包装货物，最终选型需结合实际物料、表面、带速和装载方式在报价前确认。", featureHeading: "围绕抓附、缓冲与平稳运行设计。", features: ["纹理橡胶上覆盖胶为纸箱、袋装和包裹货物提供稳定抓附", "2 层或 3 层 EP 织物带芯，保证尺寸稳定", "缓冲型表面可吸收转载点的轻微冲击", "可配底覆盖胶，也可供应裸背滑床型", "切边结构与稳定厚度便于接头准备", "在水平与倾斜输送中均可保持稳定运行"], applications: ["仓储与配送输送", "快递与包裹处理", "袋装与箱装货物产线", "邮政与物流分拣", "轻型包装转载点"], specifications: [{ label: "结构", value: "2 层或 3 层 EP 织物带芯，切边" }, { label: "上覆盖胶", value: "纹理橡胶，1/8″（3.2 mm）参考" }, { label: "底部选项", value: "1/16″（1.6 mm）覆盖胶或裸背" }, { label: "层数选项", value: "2 层或 3 层" }, { label: "边缘形式", value: "切边（C/E）" }, { label: "参考倾角", value: "通常 25–30°，轻型货物可达约 35°" }, { label: "带宽", value: "结合输送机和负载确认" }, { label: "适用货物", value: "袋装、箱装、包裹等轻型货物" }], precautions: ["卷装应离地存放于清洁、干燥、通风处", "避免阳光直射，远离热源和臭氧发生装置", "避免接触油品、溶剂、酸碱等可能侵蚀橡胶的化学品", "使用合适的吊装设备，禁止抛掷、拖拽和剧烈弯折", "安装前保留原厂包装与防护"], inquiryChecklist: ["输送货物（类型、重量和尺寸）", "输送机长度、宽度与倾角", "带速与装载方式", "所需层数与底部覆盖胶选择", "工作环境与温度", "数量、目的港与交付要求"], seo: { title: "轻型倾斜输送用粗面输送带", description: "纹理表面粗面输送带，2 层或 3 层 EP 结构，切边，可选底覆盖胶或裸背，适用于纸箱、袋装货物与包裹输送。" }, sourceUrl: "https://www.respowerbelt.com/h-col-123.html" },
  "sidewall-conveyor-belt": { name: "挡边输送带", eyebrow: "大倾角输送", summary: "波纹挡边配横隔板输送带，可在紧凑空间内大倾角提升散状物料。", description: "基带两侧配有波纹挡边，并安装模压或挤出横隔板形成连续料斗，可在陡峭倾角下输送散状固体，无需转运点且占地小。", applicationIntro: "挡边输送带适用于空间有限但需要垂直或大倾角提升的场合。最终选型需结合物料特性、块度、水分、输送量、提升高度和带速，在报价前确认。", featureHeading: "为大倾角提升和紧凑布局而设计。", features: ["波纹挡边与横隔板形成稳定料斗", "可实现大倾角输送，减少转运点与占地", "大截面横隔板采用模压、小截面采用挤出成型", "可选耐磨、耐油、耐热（100°C/130°C）、阻燃等覆盖胶等级", "可按应用组合成完整输送系统", "基带、挡边与横隔板按工况组合"], applications: ["矿山与采石场大倾角输送", "煤炭与骨料装载", "水泥与建材", "回收与废弃物处理", "粮食等散料输送"], specifications: [{ label: "基带宽度", value: "300–1800 mm（参考表范围）" }, { label: "挡边高度 H", value: "40–500 mm" }, { label: "横隔板高度 Ch", value: "35–460 mm" }, { label: "挡边型式", value: "S、HDS、XHDS" }, { label: "横隔板型式", value: "C、TC、T、MTC、TC-XS" }, { label: "覆盖胶等级", value: "耐磨、耐油、耐热 100°C、耐高温 130°C、阻燃" }, { label: "最小带轮直径", value: "100–1000 mm，视型式而定" }, { label: "横隔板长度", value: "模压型 2.5 m；挤出型 3 m / 5 m" }, { label: "增强选项", value: "部分挡边/横隔板可带织物增强（标 *）" }], precautions: ["卷装应离地存放于清洁、干燥、通风处", "避免阳光直射，远离热源和臭氧发生装置", "避免接触油品、溶剂、酸碱等可能侵蚀橡胶的化学品", "使用合适的吊装设备，禁止抛掷、拖拽和剧烈弯折", "安装前保留防护包装和纸箱"], inquiryChecklist: ["输送物料、堆积密度与块度", "输送量、提升高度与倾角", "基带宽度的限制或偏好", "挡边高度与横隔板型式", "覆盖胶等级（耐磨/耐油/耐热/阻燃）", "工作温度与环境", "数量、目的港与交付周期"], seo: { title: "大倾角散料输送用挡边输送带", description: "波纹挡边配横隔板输送带，S/HDS/XHDS 挡边与 C/TC/T/MTC 横隔板，基带宽度 300–1800 mm，适用于大倾角物料输送。" }, sourceUrl: "https://www.respowerbelt.com/h-col-118.html", media: { cover: "/products/sidewall-conveyor-belt/cover.webp", gallery: ["/products/sidewall-conveyor-belt/cover.webp", "/products/sidewall-conveyor-belt/factory-overview.webp", "/products/sidewall-conveyor-belt/long-belt-line.webp", "/products/sidewall-conveyor-belt/large-rolls-stored.webp", "/products/sidewall-conveyor-belt/rolled-product.webp"], technicalImages: ["/products/sidewall-conveyor-belt/sidewall-types-spec.webp", "/products/sidewall-conveyor-belt/combination-spec.webp", "/products/sidewall-conveyor-belt/cleat-types-spec.webp"] }, patterns: [{ name: "S 型挡边", description: "标准波纹挡边，适用于一般大倾角输送。" }, { name: "HDS 型挡边", description: "重载挡边型式，适合较大负荷与块度。" }, { name: "XHDS 型挡边", description: "超重型挡边，带织物增强，用于极端工况。" }, { name: "C 型横隔板", description: "基础 C 型横隔板，适用于轻中负荷输送。" }, { name: "TC 型横隔板", description: "T-C 组合横隔板，提供更大料斗容量。" }, { name: "T 型横隔板", description: "T 型横隔板，适用于中负荷大倾角输送。" }, { name: "MTC 型横隔板", description: "模压 T-C 横隔板，用于重载场合。" }, { name: "TC-XS 型横隔板", description: "加强型 TC 横隔板，适合高密度物料。" }] },
  "transmission-flat-belt": {
    name: "平型传动带",
    eyebrow: "机械动力传递",
    summary: "用于工业和农业传动系统的帆布增强平型橡胶带。",
    description: "以优质棉帆布为骨架层的传统平型传动带，可在普通机械动力传递及稻米、小麦等粮食大功率加工中稳定传递动力，也适用于灌溉、木材切割等农业及其他行业的动力传递设备。",
    applicationIntro: "平型传动带适用于在带轮之间传递机械动力的场合。最终选型需结合被驱动设备、传递功率、带轮布置和运行环境，在报价前确认。",
    featureHeading: "以棉帆布骨架实现可靠的动力传递。",
    features: [
      "优质棉帆布骨架层，强度高、运行稳定",
      "切边与圆边两种结构，适配不同带轮布置",
      "28 OZ 至 36 OZ 多个等级，匹配不同传动负荷",
      "带宽与带长支持灵活定制",
      "适用于工厂、矿山、码头及冶金行业设备",
      "广泛用于粮食加工、灌溉和木材切割等传动",
    ],
    applications: [
      "工厂、矿山与码头",
      "冶金行业设备",
      "粮食加工机械（稻米、小麦）",
      "灌溉设备",
      "木材切割与动力传递设备",
      "农业及一般工业传动",
    ],
    specifications: [
      { label: "参考等级", value: "28 OZ / 30 OZ / 32 OZ / 34 OZ / 36 OZ" },
      { label: "骨架层", value: "优质棉帆布" },
      { label: "边缘选择", value: "切边 / 圆边" },
      { label: "切边结构", value: "多层全幅帆布粘合后裁切，切面涂覆胶浆" },
      { label: "圆边结构", value: "外层或数层帆布翻折，带侧形成圆弧面" },
    ],
    patterns: [
      { name: "切边平带", description: "多层全幅帆布粘合后按宽度裁切，切面涂覆胶浆。" },
      { name: "圆边平带", description: "外层或数层帆布翻折，使带侧形成圆弧面。" },
    ],
    precautions: [
      "卷装应离地存放于清洁、干燥、通风处，避免阳光直射",
      "远离热源、臭氧发生装置和明火",
      "避免接触油品、溶剂、酸碱等可能侵蚀橡胶的化学品",
      "使用合适的吊装设备，禁止抛掷、拖拽和剧烈弯折",
      "安装与初期运行时检查张紧与带轮对中",
    ],
    inquiryChecklist: [
      "所需盎司等级（28 / 30 / 32 / 34 / 36 OZ）",
      "边缘类型：切边或圆边",
      "所需带宽与带长",
      "被驱动设备与传递功率",
      "带轮直径与中心距",
      "需求量与目的港",
    ],
    seo: {
      title: "平型传动带（28–36 OZ）— 棉帆布骨架",
      description: "棉帆布骨架平型传动带，28–36 OZ 多等级，切边与圆边两种结构，适用于工厂、矿山、码头、粮食加工、灌溉及木材切割传动。",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-121.html",
  },
  "industrial-v-belt": { name: "工业 V 带", eyebrow: "紧凑型驱动系统", summary: "根据带轮、电机和机械设备驱动结构选配的工业 V 带。", description: "OVBEL 为工业设备提供多种 V 带方案，可根据驱动结构和工作环境匹配带型、长度与增强结构。", features: ["按应用匹配带型", "提供驱动系统选型支持", "支持定制供货方案"], applications: ["工业机械", "输送机驱动", "加工设备"], specifications: [{ label: "带型", value: "根据应用选择" }, { label: "长度", value: "支持定制供货" }, { label: "结构", value: "包布或切边结构" }] },
  "impact-bed": {
    name: "缓冲床与缓冲条",
    eyebrow: "落料区冲击防护",
    summary: "为高冲击输送机落料点和转运点提供全宽、稳定的皮带支撑。",
    description: "以稳定的低摩擦支撑面替代落料区缓冲托辊。模块化缓冲条由超高分子量聚乙烯、高弹橡胶和增强金属型材组成，可吸收冲击、控制皮带下垂，并帮助裙板保持连续密封。",
    applicationIntro: "缓冲床在落料区连续支撑皮带，重点解决物料冲击、皮带下垂和裙板漏料。床体宽度、缓冲条配置和橡胶等级需结合带宽、落差、最大块度及运行工况确定。",
    featureHeading: "从冲击进入系统的位置开始控制能量。",
    features: ["连续支撑，减少皮带在托辊间的下垂", "低摩擦 UHMWPE 表层保证皮带平稳运行", "高弹橡胶吸收冲击能量并降低带体损伤", "模块化缓冲条可单独检查和更换", "落料区内无旋转部件和润滑点", "可调支撑架便于与裙板密封线对齐"],
    applications: ["初级破碎机出料口", "矿山与采石场转运点", "高落差落料区", "重型或尖锐散料", "裙板密封区", "港口与散料码头"],
    specifications: [{ label: "滑动层", value: "低摩擦 UHMWPE" }, { label: "缓冲层", value: "高弹吸能橡胶" }, { label: "增强层", value: "铝或钢型材" }, { label: "缓冲条结构", value: "三层整体硫化结构" }, { label: "床体形式", value: "固定式或可调式支撑架" }, { label: "尺寸", value: "根据带宽与冲击工况配置" }],
    layers: [{ name: "滑动表层", material: "UHMWPE", purpose: "降低皮带接触面的运行摩擦与热量。" }, { name: "吸能缓冲层", material: "高弹橡胶", purpose: "受冲击时弹性变形，保护输送带带芯。" }, { name: "结构导轨", material: "铝 / 钢", purpose: "将缓冲条可靠固定到支撑架上。" }],
    precautions: ["调试前确认中部与翼部缓冲条高度", "保持连续、清洁的接触线，避免对皮带过度压紧", "初期运行后检查紧固件和缓冲条磨损", "在金属增强层暴露前更换损坏的缓冲条"],
    inquiryChecklist: ["带宽与带速", "物料及最大块度", "落差", "落料区长度", "现有托辊布置", "现场照片或图纸"],
    seo: { title: "输送机落料区缓冲床与缓冲条", description: "为输送机落料区、转运点和重型散料工况配置的缓冲床及 UHMWPE 三层橡胶缓冲条。" },
    sourceUrl: "https://www.respowerbelt.com/h-col-128.html",
  },
  "elevator-buckets": { name: "提升机料斗", eyebrow: "垂直物料输送", summary: "适用于粮食、食品、农业和工业提升系统的多系列料斗。", description: "超过 12 个料斗系列、近 400 个尺寸参考，可适配不同物料、输送能力和安装孔位。", features: ["HDPE、尼龙和 PU 材料", "支持定制安装孔", "按应用提供间距建议"], applications: ["粮食提升机", "食品加工", "工业散料输送"], specifications: [{ label: "系列", value: "12+ 个参考系列" }, { label: "尺寸", value: "近 400 个参考规格" }, { label: "材料", value: "HDPE / 尼龙 / PU" }] },
  "industrial-rubber-sheet": { name: "工业橡胶板", eyebrow: "密封与防护", summary: "可按标准规格或客户尺寸供应的通用工业橡胶板。", description: "适用于技术、防护和加工用途的黑色工业橡胶板，可按项目尺寸裁切或整卷供应。", features: ["标准板材供应", "按尺寸裁切", "宽厚度范围"], applications: ["垫片与衬垫", "车间铺垫", "通用工业加工"], specifications: [{ label: "颜色", value: "黑色" }, { label: "参考厚度", value: "1–100 mm" }, { label: "尺寸", value: "标准或定制" }] },
  "hydraulic-hose": { name: "液压胶管", eyebrow: "流体动力", summary: "根据压力、温度、介质和接头要求配置的液压胶管。", description: "OVBEL 为移动和固定式机械提供工业液压胶管选型支持，最终结构依据询盘中的工作条件确定。", features: ["按压力等级选型", "胶管与接头配套", "提供应用审核支持"], applications: ["矿山机械", "工业液压系统", "移动设备"], specifications: [{ label: "直径", value: "根据系统流量选择" }, { label: "压力等级", value: "根据工作压力选择" }, { label: "连接形式", value: "胶管或带接头总成" }] },
  "crusher-hammer": { name: "破碎机锤头", eyebrow: "耐磨件", summary: "根据破碎机类型、图纸和磨损工况匹配的替换锤头。", description: "可依据设备信息、尺寸或图纸供应破碎机锤头，并结合冲击和磨蚀工况选择材料。", features: ["按图纸匹配", "按磨损工况选择材料", "支持出口包装"], applications: ["锤式破碎机", "骨料加工", "矿物加工"], specifications: [{ label: "适配方式", value: "按设备或图纸匹配" }, { label: "材料", value: "根据磨损工况选择" }, { label: "尺寸", value: "客户指定" }] },
  "mine-screen-mesh": { name: "矿用筛网", eyebrow: "筛分介质", summary: "根据孔径、丝径、网片尺寸和物料工况配置的筛网。", description: "用于矿山、采石和骨料作业中分级与分离的工业筛网。", features: ["按应用选择孔径", "多种边缘形式", "尺寸与材料可定制"], applications: ["采石筛分", "骨料分级", "矿物分选"], specifications: [{ label: "孔径", value: "根据应用指定" }, { label: "网片尺寸", value: "定制" }, { label: "边缘", value: "与筛机匹配" }] },
  "industrial-electric-motor": { name: "工业电机", eyebrow: "动力源", summary: "根据功率、转速、电压、安装和防护要求配置的工业电机。", description: "OVBEL 为输送机和工业设备提供电机选型支持，在报价前确认电气和机械配置。", features: ["按应用选型", "支持出口市场电压", "安装与防护配置协调"], applications: ["输送机驱动", "加工机械", "工业设备"], specifications: [{ label: "功率", value: "根据应用选择" }, { label: "电压 / 频率", value: "按目标市场配置" }, { label: "安装方式", value: "与设备匹配" }] },
  "industrial-bearing": { name: "工业轴承", eyebrow: "旋转设备", summary: "可根据型号、尺寸、载荷、转速或设备位置匹配供应的轴承。", description: "为输送机、破碎机和旋转机械提供工业轴承采购与型号交叉匹配支持。", features: ["型号与尺寸匹配", "开式、带防尘盖和密封型可选", "支持型号交叉查询"], applications: ["输送机滚筒", "破碎机总成", "工业驱动系统"], specifications: [{ label: "类型", value: "根据载荷与转速选择" }, { label: "尺寸", value: "与设备匹配" }, { label: "密封形式", value: "开式 / 防尘盖 / 密封" }] },
  "solid-woven-conveyor-belt": {
    name: "整芯输送带",
    eyebrow: "PVC / PVG 阻燃型",
    summary: "采用 PVC 或 PVG 覆盖胶的高强度整体编织带芯输送带，适用于煤矿井下及工业物料输送。",
    description: "以高强合成纤维和棉纤维加捻编织成整体带芯，经浸渍、涂覆和塑化/硫化制成薄型、轻量、抗冲击的输送带。PVC 全塑整芯型适用于干燥条件、倾角不超过 16° 的场合；PVG 橡胶面整芯型适用于潮湿条件、倾角不超过 20° 的场合，兼具阻燃与抗静电性能，适合井下安全运行。",
    applicationIntro: "整芯输送带适用于对阻燃、抗静电、轻量和高强度有要求的场合。典型用途包括煤矿井下运输、矿山斜井提升以及潮湿或多尘工况的散料输送。报价前请确认带型、强度等级、带宽、覆盖胶等级和接头方式。",
    featureHeading: "阻燃抗静电，为严苛矿山工况设计。",
    features: [
      "整体编织带芯，高强度、低伸长",
      "带体轻量、抗冲击、抗撕裂",
      "阻燃、抗静电，满足井下安全要求",
      "成槽性好，负载下生热低",
      "PVC 型适用于干燥环境，PVG 型适用于潮湿环境",
      "使用寿命长，安全性能可靠",
    ],
    applications: ["煤矿井下输送", "矿山与采石场物料运输", "港口与码头散料装卸", "潮湿工况的倾斜输送", "一般工业散料输送系统"],
    specifications: [
      { label: "产品类型", value: "PVC 全塑整芯 / PVG 橡胶面整芯" },
      { label: "参考标准", value: "MT914、BS3289、HG2805" },
      { label: "纵向拉伸强度", value: "680S 至 2500S（680–2500 N/mm）" },
      { label: "横向拉伸强度", value: "265–450 N/mm" },
      { label: "纵向断裂伸长率", value: "≥ 15%" },
      { label: "横向断裂伸长率", value: "≥ 18%" },
      { label: "上下覆盖层厚度", value: "≥ 1.0 mm" },
      { label: "PVC 型适用倾角", value: "≤ 16°，干燥条件" },
      { label: "PVG 型适用倾角", value: "< 20°，潮湿条件" },
      { label: "PVG 覆盖胶厚度范围", value: "1–8 mm" },
      { label: "PVC 覆盖胶厚度范围", value: "0.5–4 mm" },
    ],
    patterns: [
      { name: "PVC 全塑整芯型", description: "整体编织带芯经 PVC 塑化，适用于倾角不超过 16° 的干燥条件。" },
      { name: "PVG 橡胶面整芯型", description: "在 PVC 整芯基础上挂胶硫化，适用于倾角不超过 20° 的潮湿条件。" },
      { name: "680S 等级", description: "纵向拉伸强度 680 N/mm，适用于轻型矿山及一般输送。" },
      { name: "800S–1250S 等级", description: "中强度等级，适用于常规矿山及工业输送。" },
      { name: "1400S–2000S 等级", description: "较高强度等级，适用于重载输送工况。" },
      { name: "2240S–2500S 等级", description: "高强度等级，适用于大载荷和长距离输送。" },
    ],
    precautions: [
      "储存时卷筒应离地，置于清洁、干燥、通风处，避免阳光直射",
      "远离热源、臭氧发生源和明火",
      "避免接触油类、溶剂、酸、碱等可能侵蚀橡胶或 PVC 的物质",
      "使用合适起重设备搬运，避免摔落、拖拽或急剧弯折",
      "安装前保持防护包装完整",
    ],
    inquiryChecklist: [
      "所需带型：PVC 或 PVG",
      "强度等级（如 680S、1000S、1600S、2500S）",
      "所需带宽与带长",
      "上下覆盖胶厚度或等级",
      "运行倾角及干燥/潮湿条件",
      "阻燃/抗静电要求及适用标准",
      "接头方式与需求量",
      "目的港与交货时间",
    ],
    seo: {
      title: "整芯输送带（PVC/PVG）— 煤矿井下与工业输送",
      description: "提供 PVC/PVG 整芯输送带，强度等级 680S–2500S，符合 MT914、BS3289、HG2805，阻燃抗静电，适用于煤矿井下及工业散料输送。",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-119.html",
  },
  "white-conveyor-belt": {
    name: "白色输送带",
    eyebrow: "食品级洁净输送",
    summary: "用于糖类、粮食、码头及筒仓等散装食品物料洁净输送的白色橡胶食品级输送带。",
    description: "白色橡胶覆盖胶配合织物增强带芯，提供光滑、不易留痕的输送面，适合对洁净度和无异味有要求的散装食品物料输送。",
    applicationIntro: "在需要以洁净、不易污染、无异味方式输送散装食品的工况下，可选用白色食品级输送带。最终选型需结合被输送物料、接触温度、清洁方式和运行工况在报价前确认。",
    featureHeading: "围绕洁净输送与食品级工况设计。",
    features: [
      "光滑白色覆盖胶为散装食品提供洁净、不易留痕的输送面",
      "抗污表面便于在两次清洁之间保持生产线整洁",
      "高强度织物带芯支持长距离连续运行",
      "无异味、无味道、无毒性的橡胶配方，适用于敏感食品接触工况",
      "耐用结构带来较长使用寿命与经济运行",
      "平滑覆盖胶便于冲洗和日常清洁",
    ],
    applications: [
      "糖类与粮食输送",
      "码头散装食品转运",
      "筒仓与储料装载",
      "食品加工与包装生产线",
      "一般洁净要求的散装物料输送",
    ],
    specifications: [
      { label: "上覆盖胶与带芯粘合力（最小）", value: "12 N/mm" },
      { label: "带芯层间粘合力（最小）", value: "12 N/mm" },
      { label: "下覆盖胶与带芯粘合力（最小）", value: "12 N/mm" },
      { label: "拉伸强度（最小）", value: "15 MPa" },
      { label: "扯断伸长率（最小）", value: "350%" },
      { label: "磨耗", value: "≤ 250 mm³" },
      { label: "硬度", value: "60–65 Shore A" },
      { label: "拉伸比", value: "0.5–1%" },
      { label: "抗撕裂性", value: "良好" },
      { label: "抗屈挠性", value: "良好" },
      { label: "耐油性", value: "较差（不建议）" },
      { label: "耐酸碱性", value: "较差（不建议）" },
      { label: "工作温度（最高）", value: "80 °C" },
    ],
    layers: [
      { name: "上覆盖胶", material: "白色橡胶配方", purpose: "与食品接触的光滑输送面。" },
      { name: "带芯", material: "织物增强层", purpose: "提供拉伸强度与尺寸稳定性，层间粘合力 ≥ 12 N/mm。" },
      { name: "下覆盖胶", material: "白色橡胶配方", purpose: "与滚筒接触的运行面。" },
    ],
    precautions: [
      "卷装应离地存放于清洁、干燥、通风处，避免阳光直射",
      "远离热源、臭氧发生装置和明火",
      "避免接触油品、溶剂、酸碱等可能侵蚀橡胶覆盖胶的化学品",
      "使用合适的吊装设备，禁止抛掷、拖拽和剧烈弯折",
      "安装前保留原厂包装与防护",
    ],
    inquiryChecklist: [
      "被输送食品物料及接触温度敏感性",
      "所需带宽与带长",
      "带速与运行倾角",
      "清洁方式与频率（冲洗、干擦等）",
      "带芯结构与覆盖胶厚度偏好",
      "需求量与目的港",
    ],
    seo: {
      title: "食品级白色输送带 — 洁净物料输送",
      description: "白色橡胶食品级输送带，光滑不易留痕，拉伸强度高，抗撕裂性好，适用于糖、粮食、码头转运及食品加工生产线。",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-115.html",
  },
  "steel-cord-conveyor-belt": {
    name: "钢丝绳芯输送带",
    eyebrow: "高强度长距离输送",
    summary: "以钢丝绳为张力元件的高强度输送带，适用于重载、长距离散料输送，拉伸强度高、伸长率低。",
    description: "采用新型钢丝绳作为张力元件，在平行于纵向钢丝绳的一侧或两侧均匀铺设横向钢丝增强层。该结构具有高拉伸强度、低伸长率、可用较小传动滚筒直径、钢丝绳张力均匀、成槽性优异及橡胶与钢丝绳粘合良好等特性。",
    applicationIntro: "钢丝绳芯输送带适用于对低伸长和高强度有要求的重载、长距离、大运量输送工况。带体结构、覆盖胶类型与标准规格需结合物料、运量和运行条件在报价前确认。",
    featureHeading: "以钢丝绳增强应对重载与长距离输送。",
    features: [
      "新型钢丝绳张力元件，带横向钢丝增强层",
      "高拉伸强度、低伸长率，适用于长距离输送",
      "可采用较织物芯带更小的传动滚筒直径",
      "钢丝绳张力均匀，成槽性优异",
      "橡胶与钢丝绳粘合良好",
      "可选通用、煤矿阻燃、通用阻燃、耐寒、耐磨、耐热、耐油、耐酸碱等覆盖胶",
    ],
    applications: [
      "矿山与采石场",
      "港口与码头",
      "冶金行业",
      "水泥行业",
      "电力行业",
      "化工行业",
    ],
    specifications: [
      { label: "张力元件", value: "新型钢丝绳" },
      { label: "增强层", value: "垂直于纵向钢丝绳铺设的横向钢丝增强层（单侧或双侧）" },
      { label: "主要性能", value: "高拉伸强度、低伸长率、张力均匀、成槽性优异" },
      { label: "覆盖胶类型", value: "通用型、煤矿用阻燃型、通用阻燃型、耐寒型、耐磨型、耐热型、耐油型、耐酸碱型" },
      { label: "参照标准", value: "GB9770-2001、DIN22131 覆盖胶与粘合力指标（见技术图片）" },
    ],
    patterns: [
      { name: "通用型", description: "适用于一般输送工况的标准覆盖胶。" },
      { name: "煤矿用阻燃型", description: "用于煤矿井下服务的阻燃覆盖胶结构。" },
      { name: "通用阻燃型", description: "用于一般工业场合的阻燃覆盖胶。" },
      { name: "耐寒型", description: "适用于低温运行环境的覆盖胶。" },
      { name: "耐磨型", description: "用于磨蚀性物料输送的耐磨覆盖胶。" },
      { name: "耐热型", description: "适用于高温工况的覆盖胶。" },
      { name: "耐油型", description: "耐油品侵蚀的覆盖胶。" },
      { name: "耐酸碱型", description: "耐酸碱侵蚀的覆盖胶。" },
    ],
    precautions: [
      "卷装应离地存放于清洁、干燥、通风处，避免阳光直射",
      "远离热源、臭氧发生装置和明火",
      "避免接触油品、溶剂、酸碱等可能侵蚀橡胶的化学品",
      "使用合适的吊装设备，禁止抛掷、拖拽和剧烈弯折",
      "安装与初期运行时检查张紧、接头与带轮对中",
    ],
    inquiryChecklist: [
      "被输送物料与块度",
      "所需带宽、带长与强度等级（St）",
      "钢丝绳根数与粘合力要求",
      "覆盖胶类型（通用/阻燃/耐寒/耐热/耐油/耐酸碱等）",
      "运行环境、温度与阻燃要求",
      "需求量与目的港",
    ],
    seo: {
      title: "钢丝绳芯输送带 — 重载长距离输送",
      description: "钢丝绳增强输送带，高拉伸强度、低伸长率，适用于煤矿、矿石港口、冶金、电力与化工行业，提供通用、阻燃、耐寒、耐热等覆盖胶类型。",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-136.html",
  },
  "anti-tear-conveyor-belt": {
    name: "防撕裂输送带",
    eyebrow: "纬向增强，抗冲击抗撕裂",
    summary: "在钢丝绳芯或织物芯输送带覆盖层中设置横向钢绳或聚酯绳作为纬向增强层，提高抗冲击与抗撕裂能力。",
    description: "防撕裂输送带在钢丝绳芯或织物芯的覆盖层（或上、下覆盖层）中均匀铺设横向钢绳或聚酯绳作为纬向增强层，以增强胶带抗冲击和抗撕裂性能。",
    applicationIntro: "防撕裂输送带适用于物料跌落、尖锐棱角或强冲击可能导致带芯撕裂的场合。增强材料、覆盖层结构与等级需结合物料特性和工况在报价前确认。",
    featureHeading: "纬向增强层保护带芯免受冲击与撕裂。",
    features: [
      "以横向钢绳或聚酯绳作为纬向增强层",
      "增强层可设置于上覆盖层，也可设置于上、下两个覆盖层",
      "提高抗跌落料块和尖锐边缘冲击的能力",
      "提高抗撕裂能力，抑制带芯损伤扩展",
      "可与钢丝绳芯或多层织物芯结构配套",
      "覆盖胶等级根据物料磨蚀性和工况选择",
    ],
    applications: [
      "矿山与采石场",
      "港口与码头",
      "冶金行业",
      "电力行业",
      "煤矿开采与输送",
      "水泥行业",
      "化工行业",
      "铸造行业",
    ],
    specifications: [
      { label: "增强层", value: "横向钢绳或聚酯绳，均匀铺设于上覆盖层或上、下两个覆盖层" },
      { label: "带芯配套", value: "钢丝绳芯或织物芯" },
      { label: "性能", value: "增强胶带抗冲击与抗撕裂性能" },
      { label: "规格确认", value: "带宽、增强层布局及覆盖胶等级需结合物料和工况在报价前确认" },
    ],
    patterns: [
      { name: "钢绳纬向增强", description: "采用横向钢绳作为纬向增强层。" },
      { name: "聚酯绳纬向增强", description: "采用横向聚酯绳作为纬向增强层。" },
      { name: "单侧覆盖层增强", description: "增强层仅设置于上覆盖层。" },
      { name: "双侧覆盖层增强", description: "增强层设置于上、下两个覆盖层。" },
    ],
    precautions: [
      "卷装应离地存放于清洁、干燥、通风处，避免阳光直射",
      "远离热源、臭氧发生装置和明火",
      "避免接触油品、溶剂、酸碱等可能侵蚀橡胶的化学品",
      "使用合适的吊装设备，禁止抛掷、拖拽和剧烈弯折",
      "安装与初期运行时检查张紧、接头与带轮对中",
    ],
    inquiryChecklist: [
      "被输送物料、块度与磨蚀性",
      "所需带宽、带长与带芯结构",
      "增强材料（钢绳或聚酯绳）与覆盖层布置",
      "运行环境、温度与阻燃要求",
      "预期的跌落高度与冲击强度",
      "需求量与目的港",
    ],
    seo: {
      title: "防撕裂输送带 — 抗冲击抗撕裂重载输送",
      description: "纬向增强防撕裂输送带，采用横向钢绳或聚酯绳增强，适用于矿山、港口、冶金、电力、煤炭、水泥、化工、铸造等行业的散料输送。",
    },
    sourceUrl: "https://www.respowerbelt.com/h-col-143.html",
  },
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
