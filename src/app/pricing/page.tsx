import { Check } from "lucide-react";
import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui";
import { carePlan, comparison, packages } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Starting prices for EasyGrowTech websites, Shopify stores, AI chatbots and care plans. Fixed quote after a free demo.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear starting prices. A fixed quote after you see the demo."
        subtitle="Numbers below are starting points. Final scope depends on pages, products and how deep the chatbot goes — and we write it down before you pay."
      />
      <section className="container-x grid gap-5 py-16 lg:grid-cols-4">
        {packages.map((item) => (
          <article
            key={item.slug}
            className={`flex flex-col rounded-3xl border p-6 ${item.highlighted ? "border-brand-400 bg-ink-950 text-white lg:-mt-4 lg:mb-4" : "border-slate-200 bg-white"}`}
          >
            {item.highlighted ? <p className="text-xs font-semibold uppercase tracking-wide text-brand-300">Most popular</p> : null}
            <h2 className="mt-1 text-xl font-bold">{item.name}</h2>
            <p className="mt-4 font-display text-4xl font-bold">{item.price}</p>
            <p className={`text-xs ${item.highlighted ? "text-slate-400" : "text-slate-500"}`}>{item.cadence}</p>
            <p className={`mt-3 text-sm ${item.highlighted ? "text-slate-300" : "text-slate-600"}`}>{item.description}</p>
            <ul className="mt-5 flex-1 space-y-2">
              {item.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm">
                  <Check className={`mt-0.5 h-4 w-4 shrink-0 ${item.highlighted ? "text-brand-300" : "text-brand-600"}`} />
                  {feature}
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" variant={item.highlighted ? "primary" : "outline"} className="mt-6">
              Request this
            </ButtonLink>
          </article>
        ))}
      </section>

      <section className="container-x pb-16">
        <div className="overflow-x-auto rounded-3xl border border-slate-200">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-slate-50 text-ink-900">
              <tr>
                <th className="px-4 py-4 font-semibold">Compare</th>
                {packages.map((item) => (
                  <th key={item.slug} className="px-4 py-4 font-semibold">
                    {item.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-t border-slate-100">
                  <th className="px-4 py-3 font-medium text-slate-500">{row.label}</th>
                  {row.values.map((value, index) => (
                    <td key={`${row.label}-${index}`} className="px-4 py-3 text-ink-900">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container-x pb-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-slate-50 p-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-brand-700">Optional</p>
            <h2 className="mt-1 text-2xl font-bold">{carePlan.name}</h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600">{carePlan.description}</p>
            <p className="mt-3 font-display text-3xl font-bold">
              {carePlan.price}
              <span className="text-base font-medium text-slate-500">{carePlan.cadence}</span>
            </p>
          </div>
          <ul className="space-y-2">
            {carePlan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-brand-600" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand title="Not sure which package fits? Start with the free demo." />
    </>
  );
}
