import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Quality Control", description: "OVBEL quality and specification-control approach." };

export default function QualityPage() {
  return (
    <><section className="page-hero"><div className="shell"><p className="eyebrow eyebrow-light">Quality control</p><h1>Quality begins before production.</h1><p>Clear specifications, relevant checks and shipment documentation reduce risk across the industrial supply process.</p></div></section>
    <section className="section shell editorial-grid"><div><p className="eyebrow">Quality first</p><h2>Control the details that affect fit, duty and service life.</h2></div><div className="prose"><p>OVBEL uses the application and agreed specification as the basis for supply. Material, dimensions, construction, performance requirements and packaging should be confirmed before an order enters production.</p><p>Inspection points vary by product. They may include dimensional checks, visual inspection, material or hardness records, belt construction, pressure class, markings and packing verification.</p></div></section>
    <section className="section section-gray"><div className="shell quality-grid"><article><span>01</span><h3>Specification review</h3><p>Confirm product identity, application and critical technical values.</p></article><article><span>02</span><h3>Production control</h3><p>Coordinate agreed materials, construction and process requirements.</p></article><article><span>03</span><h3>Inspection</h3><p>Apply product-appropriate dimensional, visual and document checks.</p></article><article><span>04</span><h3>Packing review</h3><p>Verify markings, protection and export packing before dispatch.</p></article></div></section>
    <section className="cta-section"><div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">Quality requirements</p><h2>Include standards and inspection needs in the inquiry.</h2></div><Link className="button" href="/request-quote">Send requirements</Link></div></section></>
  );
}
