import Image from "next/image";
import Link from "next/link";

const nav = [
  ["Products", "/products"],
  ["Industries", "/industries"],
  ["OEM Service", "/oem-service"],
  ["Quality", "/quality"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  return (
    <>
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>Linyi, Shandong, China</span>
          <span>Industrial parts for global supply chains</span>
          <Link href="/request-quote">Start an inquiry ↗</Link>
        </div>
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <Link className="brand" href="/" aria-label="OVBEL home">
            <Image src="/brand/ovbel-logo.png" alt="OVBEL" width={230} height={72} priority />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </nav>
          <Link className="button button-small" href="/request-quote">Get a quote</Link>
          <details className="mobile-nav">
            <summary>Menu</summary>
            <div>
              {nav.map(([label, href]) => (
                <Link href={href} key={href}>{label}</Link>
              ))}
              <Link href="/request-quote">Get a quote</Link>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
