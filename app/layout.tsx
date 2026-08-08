import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  metadataBase: new URL("https://ovbel.com"),
  title: {
    default: "OVBEL | Industrial Machinery Parts & Conveyor Solutions",
    template: "%s | OVBEL",
  },
  description: "Conveyor belts, power transmission products, conveyor components, rubber products and mining parts for demanding industrial applications.",
  openGraph: {
    title: "OVBEL Industrial Machinery Parts",
    description: "Reliable industrial parts and conveyor solutions for global supply chains.",
    type: "website",
    url: "https://ovbel.com",
    siteName: "OVBEL",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
