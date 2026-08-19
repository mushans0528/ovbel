import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact", description: "Contact OVBEL for industrial machinery parts and conveyor products." };

export default function ContactPage() {
  return (
    <><section className="page-hero"><div className="shell"><p className="eyebrow eyebrow-light">Contact</p><h1>Start an industrial product conversation.</h1><p>Share the product, equipment or operating condition. We will help organize the information needed for quotation.</p></div></section>
    <section className="section shell contact-grid"><div><p className="eyebrow">Company</p><h2>Shandong Ovbel Industrial Co., Ltd.</h2><p>Linyi, Shandong Province, China</p><div className="contact-block"><span>Planned sales email</span><a href="mailto:info@ovbel.com">info@ovbel.com</a></div><div className="contact-block"><span>Website</span><a href="https://ovbel.com">ovbel.com</a></div><p className="muted">Telephone, WhatsApp and full address will be added after company confirmation.</p></div><div className="contact-panel"><h2>For a faster response</h2><ul className="check-list"><li>Product name, model or OEM number</li><li>Dimensions, material or drawing</li><li>Application and operating conditions</li><li>Required quantity and destination country</li></ul><Link className="button" href="/request-quote">Prepare an inquiry</Link></div></section></>
  );
}
