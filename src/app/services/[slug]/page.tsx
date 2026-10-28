import { Check } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { FaqList } from "@/components/faq-list";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui";
import { industries } from "@/data/industries";
import { processSteps } from "@/data/process";
import { getService, services } from "@/data/services";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = industries.filter((industry) => industry.services.includes(service.slug)).slice(0, 4);

  return (
    <>
      <PageHero eyebrow="Service" title={service.headline} subtitle={service.description}>
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href={`/contact?service=${service.slug}`}>Get a free demo</ButtonLink>
          <p className="text-sm text-slate-300">
            From <span className="font-semibold text-white">{service.startingPrice}</span> · {service.timeline}
          </p>
        </div>
      </PageHero>

      <section className="container-x grid gap-10 py-16 lg:grid-cols-[1.4fr_0.8fr]">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
              <Icon name={service.icon} className="h-6 w-6" />
            </span>
            <h2 className="text-3xl font-bold">{service.title}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <article key={feature.title} className="rounded-3xl border border-slate-200 p-5">
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
        <aside className="h-fit rounded-3xl bg-ink-950 p-6 text-white">
          <p className="text-sm font-semibold text-brand-300">You get</p>
          <ul className="mt-4 space-y-3">
            {service.deliverables.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-slate-200">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs uppercase tracking-wide text-slate-400">Best for</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {service.bestFor.map((item) => (
              <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs">
                {item}
              </span>
            ))}
          </div>
        </aside>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container-x">
          <h2 className="text-3xl font-bold">How this project runs</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {processSteps.map((step) => (
              <li key={step.step} className="rounded-3xl bg-white p-5">
                <p className="text-sm font-bold text-brand-600">{step.step}</p>
                <h3 className="mt-1 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="container-x py-16">
          <h2 className="text-2xl font-bold">Popular with</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {related.map((industry) => (
              <ButtonLink key={industry.slug} href={`/industries/${industry.slug}`} variant="outline">
                {industry.name}
              </ButtonLink>
            ))}
          </div>
        </section>
      ) : null}

      <section className="container-x max-w-3xl pb-8">
        <h2 className="mb-6 text-3xl font-bold">Questions</h2>
        <FaqList items={service.faqs} />
      </section>
      <CtaBand title={`Want a ${service.title.toLowerCase()} demo?`} href={`/contact?service=${service.slug}`} />
    </>
  );
}
