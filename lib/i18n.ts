import type { Locale } from "@/lib/products";

export const locales: Locale[] = ["en", "zh"];
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

export function localizedPath(locale: Locale, path = "") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean === "/" ? "" : clean}`;
}

export const ui = {
  en: {
    nav: ["Products", "Industries", "OEM Service", "Quality", "About", "Contact"],
    location: "Linyi, Shandong, China", topClaim: "Industrial parts for global supply chains", inquiry: "Start an inquiry ↗",
    quote: "Get a quote", menu: "Menu", language: "中文", languageLabel: "Switch to Chinese",
    viewProduct: "View product", products: "Products", company: "Company", legal: "Legal company",
    footerCopy: "Industrial machinery parts and conveyor solutions for global buyers, distributors and equipment teams.",
    about: "About OVBEL", quality: "Quality control", oem: "OEM service", contact: "Contact", rights: "All rights reserved.",
  },
  zh: {
    nav: ["产品中心", "应用行业", "OEM 服务", "质量控制", "关于我们", "联系我们"],
    location: "中国山东临沂", topClaim: "面向全球供应链的工业机械配件", inquiry: "开始询盘 ↗",
    quote: "获取报价", menu: "菜单", language: "EN", languageLabel: "Switch to English",
    viewProduct: "查看产品", products: "产品中心", company: "公司", legal: "公司主体",
    footerCopy: "为全球采购商、经销商和设备团队提供工业机械配件与输送解决方案。",
    about: "关于 OVBEL", quality: "质量控制", oem: "OEM 服务", contact: "联系我们", rights: "保留所有权利。",
  },
} as const;
