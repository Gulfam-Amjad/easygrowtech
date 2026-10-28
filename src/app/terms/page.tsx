import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms for using the ${site.name} website and requesting a demo.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms" subtitle="How to read the prices, demos and content on this site." />
      <article className="container-x max-w-3xl space-y-6 py-16 text-slate-700">
        <p>
          Package prices are starting points, not a binding offer. Scope, timeline and the final price are confirmed in writing after a demo or discovery chat. A free demo is a concept, not the finished website, and it does not create an obligation to buy.
        </p>
        <p>
          Project work begins after you approve a written quote. Ownership of domains, content and design assets is set out in that quote. Care plans are month to month unless a quote says otherwise.
        </p>
        <p>
          Case studies on this site illustrate the kind of outcomes we aim for. Individual results depend on the business, the market and how the site is used after launch.
        </p>
        <p>
          The website content is owned by {site.name}. You may share links. You may not copy the design or copy for another agency without permission.
        </p>
        <p>
          Questions: <a className="font-semibold text-brand-700" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </article>
    </>
  );
}
