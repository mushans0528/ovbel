import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

const industries = [
  ["Mining & Quarry", "Wear, impact and screening components for abrasive production environments."],
  ["Material Handling", "Belting and conveyor components designed around dependable material flow."],
  ["Manufacturing", "Transmission, rubber and rotating parts for processing and factory equipment."],
  ["Food & Grain", "Elevator, belting and power-transmission products for controlled handling."],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid-overlay" />
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">Industrial supply · engineered response</p>
            <h1>Industrial machinery parts built for reliable performance.</h1>
            <p className="hero-lead">Conveyor belts, power transmission products, conveyor components, rubber parts and mining spares supplied for demanding industrial applications.</p>
            <div className="button-row">
              <Link className="button" href="/products">Explore products</Link>
              <Link className="button button-outline-light" href="/request-quote">Request a quote</Link>
            </div>
          </div>
          <div className="hero-machine" aria-hidden="true">
            <div className="machine-rail rail-one"><i /><i /><i /></div>
            <div className="machine-rail rail-two"><i /><i /><i /><i /></div>
            <div className="machine-pulley pulley-one" />
            <div className="machine-pulley pulley-two" />
            <span>OV</span>
          </div>
        </div>
        <div className="shell hero-stats">
          <div><strong>06</strong><span>Product families</span></div>
          <div><strong>12</strong><span>Launch products</span></div>
          <div><strong>OEM</strong><span>Custom supply support</span></div>
          <div><strong>B2B</strong><span>Global industrial buyers</span></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Product range</p><h2>One supply partner.<br />Six industrial systems.</h2></div>
          <p>Start with the equipment, application or operating condition. We help narrow the product construction and specification for quotation.</p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link className={`category-card tone-${category.color}`} href={`/products/${category.slug}`} key={category.slug}>
              <span className="category-index">{category.index}</span>
              <div>
                <h3>{category.name}</h3>
                <p>{category.summary}</p>
              </div>
              <ArrowIcon />
            </Link>
          ))}
        </div>
      </section>

      <section className="section section-gray">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Featured products</p><h2>Ready for your next inquiry.</h2></div>
            <Link className="text-link" href="/products">View all products <ArrowIcon /></Link>
          </div>
          <div className="product-grid">
            {products.slice(0, 6).map((product) => <ProductCard product={product} key={product.slug} />)}
          </div>
        </div>
      </section>

      <section className="section industries-section">
        <div className="shell industries-grid">
          <div className="industries-intro">
            <p className="eyebrow eyebrow-light">Industry applications</p>
            <h2>Parts selected around the work they need to do.</h2>
            <p>Product selection begins with load, speed, temperature, material and maintenance expectations—not a generic catalog number.</p>
            <Link className="button" href="/industries">Explore industries</Link>
          </div>
          <div className="industry-list">
            {industries.map(([name, description], index) => (
              <article key={name}><span>0{index + 1}</span><div><h3>{name}</h3><p>{description}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell why-grid">
        <div>
          <p className="eyebrow">Why OVBEL</p>
          <h2>Practical support from product search to shipment.</h2>
        </div>
        <div className="value-grid">
          <article><strong>01</strong><h3>Broad product scope</h3><p>Belting, conveyor, rubber, mining and drive categories coordinated in one inquiry.</p></article>
          <article><strong>02</strong><h3>OEM & custom</h3><p>Supply matched to dimensions, drawings, equipment data and target operating conditions.</p></article>
          <article><strong>03</strong><h3>Quality focus</h3><p>Specification review, production coordination and documentation built into the order process.</p></article>
          <article><strong>04</strong><h3>Export experience</h3><p>Commercial and packaging support for distributors, importers and industrial project teams.</p></article>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell cta-inner">
          <div><p className="eyebrow eyebrow-light">Start with what you know</p><h2>Send a part number, drawing or application.</h2></div>
          <Link className="button" href="/request-quote">Build your inquiry <ArrowIcon /></Link>
        </div>
      </section>
    </>
  );
}
