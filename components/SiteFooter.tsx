import Link from "next/link";
import { categories } from "@/lib/products";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <span className="footer-brand">OVBEL</span>
          <p>Industrial machinery parts and conveyor solutions for global buyers, distributors and equipment teams.</p>
          <Link className="button button-outline-light" href="/request-quote">Request a quote</Link>
        </div>
        <div>
          <h3>Products</h3>
          {categories.slice(0, 4).map((category) => (
            <Link href={`/products/${category.slug}`} key={category.slug}>{category.name}</Link>
          ))}
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about">About OVBEL</Link>
          <Link href="/quality">Quality control</Link>
          <Link href="/oem-service">OEM service</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h3>Legal company</h3>
          <p>Shandong Respower Industrial Co., Ltd.</p>
          <p>Linyi, Shandong Province, China</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} OVBEL. All rights reserved.</span>
        <span>ovbel.com</span>
      </div>
    </footer>
  );
}
