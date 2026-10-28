import type { Metadata } from "next";
import { IndustryCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description: "Websites and AI automation for dentists, clinics, salons, restaurants, gyms, home services and more.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built around how your customers actually decide."
        subtitle="Send a niche page in a cold message. It speaks to that business — their problem, the offer, and a free demo."
      />
      <section className="container-x py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
