import type { Metadata } from "next";
import { ServiceCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Websites, Shopify stores, AI chatbots, automation, local SEO and website care from EasyGrowTech.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Practical digital products for businesses that sell offline and online."
        subtitle="Pick one service or combine them. Every project starts with a free demo so you can see the direction first."
      />
      <section className="container-x py-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
