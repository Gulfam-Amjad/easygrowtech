import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { SiteMock } from "@/components/mockups";
import { PageHero } from "@/components/page-hero";
import { projects } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Concept demos of websites, Shopify stores and AI assistants built by EasyGrowTech.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Direction you can show a client before the full build."
        subtitle="Styled previews in the same spirit as the free demo we prepare for a real business — your name, your services, your booking flow."
      />
      <section className="container-x grid gap-8 py-16 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.slug} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
            <SiteMock kind={project.mock} className="rounded-none border-0 shadow-none" />
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{project.type}</p>
                <p className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{project.result}</p>
              </div>
              <h2 className="mt-3 text-2xl font-bold">{project.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.summary}</p>
              <Link href={`/industries/${project.industrySlug}`} className="mt-4 inline-block text-sm font-semibold text-ink-900">
                {project.industry} page →
              </Link>
            </div>
          </article>
        ))}
      </section>
      <CtaBand title="Want a demo with your business name on it?" />
    </>
  );
}
