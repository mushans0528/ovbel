"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale } from "@/lib/products";

export function ProductGallery({ images, productName, locale }: { images: string[]; productName: string; locale: Locale }) {
  const [activeImage, setActiveImage] = useState(0);
  const imageLabel = (index: number) => locale === "zh" ? `${productName}产品图片 ${index + 1}` : `${productName} product image ${index + 1}`;

  return (
    <div className="product-gallery">
      <div className="product-gallery-main">
        <Image src={images[activeImage]} alt={imageLabel(activeImage)} fill priority sizes="(max-width: 720px) 100vw, 50vw" />
        <span>{String(activeImage + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
      </div>
      <div className="product-gallery-thumbnails" aria-label={locale === "zh" ? "产品图库" : "Product gallery"}>
        {images.map((image, index) => (
          <button key={image} type="button" className={activeImage === index ? "active" : ""} onClick={() => setActiveImage(index)} aria-label={imageLabel(index)} aria-pressed={activeImage === index}>
            <Image src={image} alt="" fill sizes="90px" />
          </button>
        ))}
      </div>
    </div>
  );
}
