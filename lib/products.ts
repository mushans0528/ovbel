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
