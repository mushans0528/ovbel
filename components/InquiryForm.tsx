"use client";

import { FormEvent, useState } from "react";

export function InquiryForm({ defaultProduct = "", locale = "en" }: { defaultProduct?: string; locale?: "en" | "zh" }) {
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
    setStatus(locale === "zh" ? "正在打开邮件应用并写入询盘内容。" : "Your email application is opening with the inquiry details.");
    window.location.href = `mailto:sales@ovbel.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="inquiry-form" onSubmit={submitInquiry}>
      <div className="form-row"><label>{locale === "zh" ? "姓名" : "Full name"}<input name="name" autoComplete="name" required /></label><label>{locale === "zh" ? "公司" : "Company"}<input name="company" autoComplete="organization" required /></label></div>
      <div className="form-row"><label>{locale === "zh" ? "商务邮箱" : "Business email"}<input name="email" type="email" autoComplete="email" required /></label><label>{locale === "zh" ? "国家 / 地区" : "Country / region"}<input name="country" autoComplete="country-name" required /></label></div>
      <label>{locale === "zh" ? "产品或零件参考" : "Product or part reference"}<input name="product" defaultValue={defaultProduct} placeholder={locale === "zh" ? "产品、型号、OEM 编号或图纸编号" : "Product, model, OEM number or drawing reference"} /></label>
      <label>{locale === "zh" ? "需求说明" : "Requirements"}<textarea name="message" rows={6} required placeholder={locale === "zh" ? "请说明尺寸、数量、材料、用途和工作条件。" : "Describe dimensions, quantity, material, application and operating conditions."} /></label>
      <button className="button" type="submit">{locale === "zh" ? "生成询盘邮件" : "Prepare inquiry email"}</button>
      <p className="form-note">{locale === "zh" ? "当前版本会生成一封发送至 sales@ovbel.com 的邮件。公司邮箱启用后将接入安全表单提交。" : "This first version prepares an email to sales@ovbel.com. Secure form delivery will be connected when the company mailbox is activated."}</p>
      <p className="form-status" role="status">{status}</p>
    </form>
  );
}
