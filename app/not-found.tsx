import Link from "next/link";

export default function NotFound() {
  return <section className="not-found shell"><p className="eyebrow">404</p><h1>This page is not in the catalog.</h1><p>Return to the product center or start an inquiry with the part information you have.</p><div className="button-row"><Link className="button" href="/products">Browse products</Link><Link className="button button-outline" href="/request-quote">Request a quote</Link></div></section>;
}
