import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "OEM & Custom Service", description: "OVBEL custom industrial parts sourcing and OEM support." };

const steps = [
  ["01", "Share the requirement", "Send a drawing, dimensions, reference product, equipment model or operating conditions."],
  ["02", "Review and clarify", "We identify missing technical details and align material, construction, quantity and documentation."],
  ["03", "Sample or quotation", "The appropriate route is confirmed—standard supply, sample verification or custom production."],
  ["04", "Production and delivery", "Quality points, packaging and shipment requirements are coordinated before dispatch."],
];

export default function OemPage() {
  return (
    <><section className="page-hero"><div className="shell"><p className="eyebrow eyebrow-light">OEM & custom</p><h1>From a reference part to a supply-ready specification.</h1><p>Use drawings, measurements, samples or equipment information to start a custom industrial-parts inquiry.</p></div></section>
    <section className="section shell"><div className="section-heading"><p className="eyebrow">Working process</p><h2>A clear path from inquiry to delivery.</h2></div><div className="process-grid">{steps.map(([number, title, copy]) => <article key={number}><strong>{number}</strong><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="inline-cta"><div><h2>Have a drawing or sample?</h2><p>Send the information you have. We will identify what is still needed.</p></div><Link className="button" href="/request-quote">Start a custom inquiry</Link></div></section></>
  );
}
