import { Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui";
import { getIndustry, industries } from "@/data/industries";
import { getService } from "@/data/services";
import { whatsappLink } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: `${industry.name} websites & AI`,
    description: `${industry.headline} ${industry.problem}`,
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const related = industry.services.map((item) => getService(item)).filter((item) => item !== undefined);
  const demoHref = `/contact?industry=${industry.slug}`;
  const wa = whatsappLink(
    `Hi EasyGrowTech! I run a ${industry.name.toLowerCase()} business and I'd like a free demo.`,
  );

  return (
    <>
      <PageHero eyebrow={industry.name} title={industry.headline} subtitle={industry.problem}>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={demoHref}>Get a free demo</ButtonLink>
          <ButtonLink href={wa} variant="outlineLight">
            WhatsApp us
          </ButtonLink>
        </div>
      </PageHero>

      <section className="container-x grid gap-8 py-16 lg:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink-950 text-brand-300">
              <Icon name={industry.icon} className="h-6 w-6" />
            </span>
            <h2 className="text-3xl font-bold">What {industry.plural} lose without a proper site</h2>
          </div>
          <ul className="space-y-3">
            {industry.painPoints.map((point) => (
              <li key={point} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-slate-50 p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">What we build</p>
          <p className="mt-2 text-lg font-semibold text-ink-900">We {industry.offer}.</p>
          <div className="mt-6 space-y-4">
            {industry.solutions.map((solution) => (
              <article key={solution.title}>
                <h3 className="font-bold text-ink-900">{solution.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{solution.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-950 py-16 text-white">
        <div className="container-x grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-brand-300">See the assistant in action</p>
            <h2 className="mt-2 text-3xl font-bold text-white">A reply your {industry.audience} would actually get.</h2>
            <p className="mt-3 text-slate-300">Trained on your prices, hours and services — then handed to a human when it should be.</p>
          </div>
          <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="ml-auto max-w-[90%] rounded-2xl bg-white px-4 py-3 text-sm text-ink-900">{industry.chatExample.q}</p>
            <p className="max-w-[90%] rounded-2xl bg-brand-400 px-4 py-3 text-sm font-medium text-ink-950">{industry.chatExample.a}</p>
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="text-2xl font-bold">What we include for {industry.plural}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industry.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium">
              <Check className="h-4 w-4 text-brand-600" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          {related.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold hover:border-brand-400">
              {service.title}
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title={`A free demo for ${industry.plural}.`}
        subtitle="Share your name and we'll sketch how the site and assistant could look. No payment until you say yes."
        href={demoHref}
      />
    </>
  );
}
