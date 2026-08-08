import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ProductCard } from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

export const metadata: Metadata = { title: "Industrial Products", description: "Explore OVBEL conveyor, transmission, rubber, mining and drive products." };

export default function ProductsPage() {
  return (
    <>
      <section className="page-hero"><div className="shell"><p className="eyebrow eyebrow-light">Product center</p><h1>Industrial products organized around your system.</h1><p>Browse six product families, then send the specification or operating conditions needed for quotation.</p></div></section>
      <section className="section shell">
        <div className="category-strip">
          {categories.map((category) => <Link href={`/products/${category.slug}`} key={category.slug}><span>{category.index}</span>{category.name}<ArrowIcon /></Link>)}
        </div>
        <div className="section-heading"><p className="eyebrow">Launch catalog</p><h2>12 products across six categories.</h2></div>
        <div className="product-grid">{products.map((product) => <ProductCard product={product} key={product.slug} />)}</div>
      </section>
    </>
  );
}
