"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/products";

export function ProductGallery({ images, productName, locale }: { images: string[]; productName: string; locale: Locale }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const imageLabel = (index: number) => locale === "zh" ? `${productName}产品图片 ${index + 1}` : `${productName} product image ${index + 1}`;
  const previousLabel = locale === "zh" ? "查看上一张图片" : "View previous image";
  const nextLabel = locale === "zh" ? "查看下一张图片" : "View next image";
  const closeLabel = locale === "zh" ? "关闭大图" : "Close enlarged image";
  const enlargeLabel = locale === "zh" ? "放大查看当前图片" : "Enlarge current image";
  const showPrevious = () => setActiveImage((current) => (current - 1 + images.length) % images.length);
  const showNext = () => setActiveImage((current) => (current + 1) % images.length);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsLightboxOpen(false);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, images.length]);

  return (
    <div className="product-gallery">
      <button type="button" className="product-gallery-main" onClick={() => setIsLightboxOpen(true)} aria-label={enlargeLabel}>
        <Image src={images[activeImage]} alt={imageLabel(activeImage)} fill priority sizes="(max-width: 720px) 100vw, 50vw" />
        <span>{String(activeImage + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
      </button>
      <div className="product-gallery-thumbnails" aria-label={locale === "zh" ? "产品图库" : "Product gallery"}>
        {images.map((image, index) => (
          <button key={image} type="button" className={activeImage === index ? "active" : ""} onClick={() => setActiveImage(index)} aria-label={imageLabel(index)} aria-pressed={activeImage === index}>
            <Image src={image} alt="" fill sizes="90px" />
          </button>
        ))}
      </div>
      {isLightboxOpen ? (
        <div className="product-lightbox" role="dialog" aria-modal="true" aria-label={imageLabel(activeImage)} onMouseDown={(event) => { if (event.target === event.currentTarget) setIsLightboxOpen(false); }}>
          <button ref={closeButtonRef} type="button" className="product-lightbox-close" onClick={() => setIsLightboxOpen(false)} aria-label={closeLabel}>×</button>
          {images.length > 1 ? <button type="button" className="product-lightbox-arrow product-lightbox-previous" onClick={showPrevious} aria-label={previousLabel}>‹</button> : null}
          <div className="product-lightbox-image">
            <Image src={images[activeImage]} alt={imageLabel(activeImage)} fill priority sizes="100vw" />
          </div>
          {images.length > 1 ? <button type="button" className="product-lightbox-arrow product-lightbox-next" onClick={showNext} aria-label={nextLabel}>›</button> : null}
          <div className="product-lightbox-footer">
            <p>{imageLabel(activeImage)}</p>
            <span>{activeImage + 1} / {images.length}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
