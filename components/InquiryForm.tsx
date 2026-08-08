"use client";

import { FormEvent, useState } from "react";

export function InquiryForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [status, setStatus] = useState("");

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`OVBEL inquiry: ${data.get("product") || "Industrial parts"}`);
    const body = encodeURIComponent([
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      `Country: ${data.get("country")}`,
      `Product: ${data.get("product")}`,
      "",
      String(data.get("message") || ""),
    ].join("\n"));
    setStatus("Your email application is opening with the inquiry details.");
    window.location.href = `mailto:sales@ovbel.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="inquiry-form" onSubmit={submitInquiry}>
      <div className="form-row"><label>Full name<input name="name" autoComplete="name" required /></label><label>Company<input name="company" autoComplete="organization" required /></label></div>
      <div className="form-row"><label>Business email<input name="email" type="email" autoComplete="email" required /></label><label>Country / region<input name="country" autoComplete="country-name" required /></label></div>
      <label>Product or part reference<input name="product" defaultValue={defaultProduct} placeholder="Product, model, OEM number or drawing reference" /></label>
      <label>Requirements<textarea name="message" rows={6} required placeholder="Describe dimensions, quantity, material, application and operating conditions." /></label>
      <button className="button" type="submit">Prepare inquiry email</button>
      <p className="form-note">This first version prepares an email to sales@ovbel.com. Secure form delivery will be connected when the company mailbox is activated.</p>
      <p className="form-status" role="status">{status}</p>
    </form>
  );
}
