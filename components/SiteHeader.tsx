"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ui } from "@/lib/i18n";
import type { Locale } from "@/lib/products";
const paths = ["/products", "/industries", "/oem-service", "/quality", "/about", "/contact"];
export function SiteHeader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale: Locale = pathname.startsWith("/zh") ? "zh" : "en";
  const otherLocale: Locale = locale === "en" ? "zh" : "en";
  const text = ui[locale];
  const suffix = pathname.replace(/^\/(en|zh)(?=\/|$)/, "") || "";
  const query = searchParams.toString();
  const languageHref = `/${otherLocale}${suffix}${query ? `?${query}` : ""}`;
  const href = (path: string) => `/${locale}${path}`;
  return <><div className="topbar"><div className="shell topbar-inner"><span>{text.location}</span><span>{text.topClaim}</span><Link href={href("/request-quote")}>{text.inquiry}</Link></div></div><header className="site-header"><div className="shell header-inner">
    <Link className="brand" href={`/${locale}`} aria-label="OVBEL home"><Image src="/brand/ovbel-logo.png" alt="OVBEL" width={230} height={72} priority /></Link>
    <nav className="desktop-nav" aria-label="Primary navigation">{paths.map((path, index) => <Link href={href(path)} key={path}>{text.nav[index]}</Link>)}</nav>
    <div className="header-actions"><Link className="language-switch" href={languageHref} hrefLang={otherLocale} aria-label={text.languageLabel}>{text.language}</Link><Link className="button button-small" href={href("/request-quote")}>{text.quote}</Link></div>
    <details className="mobile-nav"><summary>{text.menu}</summary><div>{paths.map((path, index) => <Link href={href(path)} key={path}>{text.nav[index]}</Link>)}<Link href={languageHref}>{text.language}</Link><Link href={href("/request-quote")}>{text.quote}</Link></div></details>
  </div></header></>;
}
