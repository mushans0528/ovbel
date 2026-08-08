import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ProductVisual } from "@/components/ProductVisual";
import { getLocalizedCategory, type Locale, type Product } from "@/lib/products";
import { ui } from "@/lib/i18n";

export function ProductCard({ product, locale = "en" }: { product: Product; locale?: Locale }) {
  const category = getLocalizedCategory(product.category, locale);
  return (
    <article className="product-card">
      <ProductVisual category={category} label={product.eyebrow} productSlug={product.slug} />
      <div className="product-card-body">
        <p className="eyebrow">{category?.name}</p>
        <h3>{product.name}</h3>
        <p>{product.summary}</p>
        <Link className="text-link" href={`/${locale}/products/${product.category}/${product.slug}`}>
          {ui[locale].viewProduct} <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
