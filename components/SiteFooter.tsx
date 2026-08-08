"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ui } from "@/lib/i18n";
import { getCategories, type Locale } from "@/lib/products";
export function SiteFooter() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/zh") ? "zh" : "en";
  const text = ui[locale];
  const categories = getCategories(locale);
  const href = (path: string) => `/${locale}${path}`;
  return <footer className="site-footer"><div className="shell footer-grid">
    <div className="footer-intro"><span className="footer-brand">OVBEL</span><p>{text.footerCopy}</p><Link className="button button-outline-light" href={href("/request-quote")}>{text.quote}</Link></div>
    <div><h3>{text.products}</h3>{categories.slice(0, 4).map((category) => <Link href={href(`/products/${category.slug}`)} key={category.slug}>{category.name}</Link>)}</div>
    <div><h3>{text.company}</h3><Link href={href("/about")}>{text.about}</Link><Link href={href("/quality")}>{text.quality}</Link><Link href={href("/oem-service")}>{text.oem}</Link><Link href={href("/contact")}>{text.contact}</Link></div>
    <div><h3>{text.legal}</h3><p>Shandong Respower Industrial Co., Ltd.</p><p>{locale === "zh" ? "中国山东省临沂市" : "Linyi, Shandong Province, China"}</p></div>
  </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} OVBEL. {text.rights}</span><span>ovbel.com</span></div></footer>;
}
