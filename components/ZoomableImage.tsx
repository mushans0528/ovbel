"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function ZoomableImage({ src, alt, sizes, closeLabel }: { src: string; alt: string; sizes: string; closeLabel: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const enlargeLabel = closeLabel === "关闭大图" ? `${alt} — 点击放大` : `${alt} — click to enlarge`;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button type="button" className="pattern-image zoomable-image" onClick={() => setIsOpen(true)} aria-label={enlargeLabel}>
        <Image src={src} alt={alt} fill sizes={sizes} />
        <b aria-hidden="true">⌕</b>
      </button>
      {isOpen ? (
        <div className="product-lightbox" role="dialog" aria-modal="true" aria-label={alt} onMouseDown={(event) => { if (event.target === event.currentTarget) setIsOpen(false); }}>
          <button ref={closeButtonRef} type="button" className="product-lightbox-close" onClick={() => setIsOpen(false)} aria-label={closeLabel}>×</button>
          <div className="product-lightbox-image">
            <Image src={src} alt={alt} fill priority sizes="100vw" />
          </div>
          <div className="product-lightbox-footer product-lightbox-footer-single"><p>{alt}</p></div>
        </div>
      ) : null}
    </>
  );
}
