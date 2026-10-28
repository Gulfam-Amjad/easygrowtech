import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ChatWidget } from "@/components/chat-widget";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "EasyGrowTech — Websites, Shopify & AI Automation",
    template: "%s · EasyGrowTech",
  },
  description: site.description,
  keywords: [
    "EasyGrowTech",
    "business website",
    "Shopify store",
    "AI chatbot",
    "WhatsApp automation",
    "local SEO",
    "dental website",
    "restaurant website",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "EasyGrowTech — Websites, Shopify & AI Automation",
    description: site.description,
    url: site.url,
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: site.name,
            url: site.url,
            email: site.email,
            telephone: site.phoneHref,
            description: site.description,
            areaServed: "Worldwide",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lahore",
              addressCountry: "PK",
            },
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ChatWidget />
        <WhatsAppButton />
      </body>
    </html>
  );
}
