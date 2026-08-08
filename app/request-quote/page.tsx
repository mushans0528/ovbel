import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Request a Quote", description: "Send OVBEL an industrial product inquiry." };

export default async function RequestQuotePage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const { product = "" } = await searchParams;
  return (
    <><section className="page-hero"><div className="shell"><p className="eyebrow eyebrow-light">Request a quote</p><h1>Share the details you already have.</h1><p>A product name, model, drawing or application is enough to start the conversation.</p></div></section>
    <section className="section shell quote-grid"><div><p className="eyebrow">Inquiry checklist</p><h2>Useful information</h2><ul className="check-list"><li>Product or equipment reference</li><li>Dimensions and construction</li><li>Material or performance requirement</li><li>Quantity and destination</li><li>Photos, drawings or existing datasheets</li></ul></div><InquiryForm defaultProduct={product.replaceAll("-", " ")} /></section></>
  );
}
