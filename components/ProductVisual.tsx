import type { Category } from "@/lib/products";

export function ProductVisual({ category, label }: { category?: Category; label: string }) {
  return (
    <div className={`product-visual tone-${category?.color ?? "navy"}`} aria-hidden="true">
      <div className="belt-loop belt-loop-one" />
      <div className="belt-loop belt-loop-two" />
      <span>{category?.index ?? "OV"}</span>
      <small>{label}</small>
    </div>
  );
}
