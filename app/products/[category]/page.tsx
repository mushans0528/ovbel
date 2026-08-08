import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { categories, getCategory, getProductsByCategory } from "@/lib/products";

export function generateStaticParams() { return categories.map((category) => ({ category: category.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  return category ? { title: category.name, description: category.summary } : {};
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const categoryProducts = getProductsByCategory(slug);
  return (
    <>
      <section className={`page-hero category-hero tone-${category.color}`}><div className="shell"><p className="eyebrow eyebrow-light">Products / {category.index}</p><h1>{category.name}</h1><p>{category.summary}</p></div></section>
      <section className="section shell">
        <div className="section-heading split-heading"><div><p className="eyebrow">Available range</p><h2>Start with a product family.</h2></div><p>Need a different construction or model? Send your specification, drawing or equipment reference for review.</p></div>
        <div className="product-grid product-grid-two">{categoryProducts.map((product) => <ProductCard product={product} key={product.slug} />)}</div>
        <div className="inline-cta"><div><h2>Not seeing the exact part?</h2><p>OVBEL supports custom and cross-reference inquiries.</p></div><Link className="button" href="/request-quote">Request a match</Link></div>
      </section>
    </>
  );
}
