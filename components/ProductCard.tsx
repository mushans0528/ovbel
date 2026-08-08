import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ProductVisual } from "@/components/ProductVisual";
import { getCategory, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);
  return (
    <article className="product-card">
      <ProductVisual category={category} label={product.eyebrow} />
      <div className="product-card-body">
        <p className="eyebrow">{category?.name}</p>
        <h3>{product.name}</h3>
        <p>{product.summary}</p>
        <Link className="text-link" href={`/products/${product.category}/${product.slug}`}>
          View product <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
