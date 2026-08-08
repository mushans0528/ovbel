import type { Category } from "@/lib/products";

export function ProductVisual({ category, label, productSlug }: { category?: Category; label: string; productSlug?: string }) {
  const isChevron = productSlug === "chevron-conveyor-belt";

  return (
    <div className={`product-visual tone-${category?.color ?? "navy"}${isChevron ? " chevron-product-visual" : ""}`} role="img" aria-label={label}>
      {isChevron ? (
        <div className="chevron-belt" aria-hidden="true">
          {Array.from({ length: 7 }, (_, index) => <i key={index}><b /><b /></i>)}
        </div>
      ) : (
        <>
          <div className="belt-loop belt-loop-one" />
          <div className="belt-loop belt-loop-two" />
        </>
      )}
      <span>{category?.index ?? "OV"}</span>
      <small>{label}</small>
    </div>
  );
}
