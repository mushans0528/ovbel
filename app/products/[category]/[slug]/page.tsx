import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductVisual } from "@/components/ProductVisual";
import { categories, getCategory, getProduct, products } from "@/lib/products";

export function generateStaticParams() { return products.map((product) => ({ category: product.category, slug: product.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProduct(category, slug);
  return product ? { title: product.name, description: product.summary } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category: categorySlug, slug } = await params;
  const product = getProduct(categorySlug, slug);
  const category = getCategory(categorySlug);
  if (!product || !category) notFound();
  return (
    <>
      <section className="product-hero shell">
        <div className="breadcrumbs"><Link href="/products">Products</Link><span>/</span><Link href={`/products/${category.slug}`}>{category.name}</Link><span>/</span><strong>{product.name}</strong></div>
        <div className="product-hero-grid">
          <ProductVisual category={category} label={product.eyebrow} />
          <div className="product-summary"><p className="eyebrow">{product.eyebrow}</p><h1>{product.name}</h1><p className="lead">{product.summary}</p><p>{product.description}</p><div className="button-row"><Link className="button" href={`/request-quote?product=${product.slug}`}>Request a quote</Link><Link className="button button-outline" href="/contact">Ask a question</Link></div></div>
        </div>
      </section>
      <section className="section section-gray"><div className="shell product-detail-grid">
        <div><p className="eyebrow">Features</p><h2>Built around the application.</h2><ul className="check-list">{product.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
        <div className="spec-card"><h2>Technical overview</h2><dl>{product.specifications.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl><p className="spec-note">Final specification is confirmed against the application before quotation.</p></div>
      </div></section>
      <section className="section shell applications-block"><div><p className="eyebrow">Applications</p><h2>Where this product works.</h2></div><div className="application-tags">{product.applications.map((application) => <span key={application}>{application}</span>)}</div></section>
      <section className="cta-section"><div className="shell cta-inner"><div><p className="eyebrow eyebrow-light">Product inquiry</p><h2>Discuss {product.name.toLowerCase()} requirements.</h2></div><Link className="button" href={`/request-quote?product=${product.slug}`}>Send requirements</Link></div></section>
    </>
  );
}
