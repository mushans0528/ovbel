import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Industries", description: "OVBEL product solutions for mining, material handling, manufacturing and grain processing." };

const industries = [
  { number: "01", name: "Mining & Quarry", copy: "Wear, impact and screening components for extraction, crushing and aggregate production.", products: "Steel cord and anti-tear belts · Impact beds · Crusher hammers · Screen mesh" },
  { number: "02", name: "Material Handling & Logistics", copy: "Belting and components that support stable product flow through transfer, storage and distribution systems.", products: "Rough top belts · Rollers · Pulleys · Belt cleaners · Conveyor covers" },
  { number: "03", name: "Manufacturing & Processing", copy: "Transmission and rotating components selected for line equipment, workshop systems and process machinery.", products: "V-belts · Timing belts · Bearings · Motors · Rubber products" },
  { number: "04", name: "Food & Grain Processing", copy: "Elevator, conveying and power-transmission products for controlled handling of grain and food materials.", products: "White belts · Elevator buckets · Flat belts · Chevron belts" },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero"><div className="shell"><p className="eyebrow eyebrow-light">Industries</p><h1>Start with the operating environment.</h1><p>We organize the product conversation around material, load, duty cycle and maintenance—not just a catalog label.</p></div></section>
      <section className="section shell industry-page-grid">{industries.map((industry) => <article key={industry.name}><span>{industry.number}</span><h2>{industry.name}</h2><p>{industry.copy}</p><small>{industry.products}</small></article>)}</section>
      <section className="cta-section"><div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">Application support</p><h2>Tell us what the equipment needs to do.</h2></div><Link className="button" href="/request-quote">Discuss your application</Link></div></section>
    </>
  );
}
