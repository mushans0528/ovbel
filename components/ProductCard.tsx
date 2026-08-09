import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ProductVisual } from "@/components/ProductVisual";
import { getLocalizedCategory, type Locale, type Product } from "@/lib/products";
import { ui } from "@/lib/i18n";

export function ProductCard({ product, locale = "en" }: { product: Product; locale?: Locale }) {
  const category = getLocalizedCategory(product.category, locale);
  return (
    <article className="product-card">
      {product.media?.cover ? (
        <div className="product-visual product-visual-cover">
          <Image src={product.media.cover} alt={locale === "zh" ? `${product.name}封面图` : `${product.name} cover image`} fill sizes="(max-width: 720px) 100vw, 50vw" />
        </div>
      ) : (
        <ProductVisual category={category} label={product.eyebrow} productSlug={product.slug} />
      )}
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
