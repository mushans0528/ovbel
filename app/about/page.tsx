import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About Us", description: "Learn about OVBEL and Shandong Respower Industrial Co., Ltd." };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero"><div className="shell"><p className="eyebrow eyebrow-light">About OVBEL</p><h1>An industrial product partner based in Linyi, China.</h1><p>OVBEL connects product knowledge, manufacturing coordination and export support for industrial buyers worldwide.</p></div></section>
      <section className="section shell editorial-grid"><div><p className="eyebrow">Our company</p><h2>Quality first. Practical support. Long-term cooperation.</h2></div><div className="prose"><p>OVBEL is operated by Shandong Respower Industrial Co., Ltd., an industrial enterprise located in Linyi, Shandong Province, China.</p><p>The company works across product design, manufacturing coordination, marketing, installation and commissioning. Its product scope covers conveyor belts, conveyor components, industrial rubber products, hoses, crusher and mining spares, motors and drive equipment.</p><p>Production, testing and control capabilities are supported by teams spanning research and development, production, sales and service. OEM and ODM supply is available for suitable products and project requirements.</p></div></section>
      <section className="section section-gray"><div className="shell value-grid value-grid-wide"><article><strong>01</strong><h3>Product understanding</h3><p>Start from application, equipment, dimensions or a reference part.</p></article><article><strong>02</strong><h3>Supply coordination</h3><p>Match materials, construction and commercial requirements before production.</p></article><article><strong>03</strong><h3>Export support</h3><p>Documentation and packaging coordination for international shipments.</p></article><article><strong>04</strong><h3>Customer range</h3><p>Support for end users, traders, wholesalers, distributors and importers.</p></article></div></section>
      <section className="cta-section"><div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">Work with OVBEL</p><h2>Build a dependable industrial supply relationship.</h2></div><Link className="button" href="/contact">Contact our team</Link></div></section>
    </>
  );
}
