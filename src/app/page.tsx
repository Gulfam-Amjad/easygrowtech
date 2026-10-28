import { ArrowRight, BadgeCheck, Clock, MessagesSquare, Sparkles } from "lucide-react";
import Link from "next/link";
import { IndustryCard, ServiceCard } from "@/components/cards";
import { CtaBand } from "@/components/cta-band";
import { Stats } from "@/components/counters";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { SiteMock } from "@/components/mockups";
import { Reveal } from "@/components/reveal";
import { TestimonialSlider } from "@/components/testimonials";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { faqs } from "@/data/faq";
import { industries } from "@/data/industries";
import { packages } from "@/data/pricing";
import { processSteps } from "@/data/process";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { projects } from "@/data/work";

const reasons = [
  { icon: Sparkles, title: "Free demo first", text: "You see a concept for your business before you pay. No commitment if it isn't right." },
  { icon: MessagesSquare, title: "Plain language", text: "We talk about bookings, replies and sales — not frameworks and jargon." },
  { icon: Clock, title: "Fast, fixed timelines", text: "Most sites launch in 5–10 days, with a written quote and no surprise fees." },
  { icon: BadgeCheck, title: "Built for local business", text: "Dentists, salons, cafes, clinics, gyms and shops — each page speaks to that customer." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }}
      />

      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="pointer-events-none absolute inset-0 grid-bg" />
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 animate-blob rounded-full bg-brand-500/25 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-24 h-80 w-80 animate-blob rounded-full bg-accent-500/20 blur-3xl" />
        <div className="container-x relative grid items-center gap-14 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-brand-200">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              Free demo first — no payment, no commitment
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-white sm:text-6xl">
              Websites & AI that bring local businesses <span className="text-gradient">more customers.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              EasyGrowTech designs modern websites, Shopify stores and 24/7 AI assistants for dentists, clinics, salons, cafes and service businesses. You see it before you buy it.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">
                Get your free demo <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="/work" variant="outlineLight">
                See the work
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-slate-400">{site.serviceArea}</p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <SiteMock kind="dental" className="animate-float" />
            <div className="absolute -bottom-6 -left-2 max-w-[240px] animate-float-slow rounded-2xl border border-white/10 bg-ink-800/90 p-3 text-xs leading-relaxed text-slate-200 shadow-2xl backdrop-blur sm:-left-8">
              <p className="font-semibold text-brand-300">AI front desk</p>
              <p className="mt-1">Teeth whitening starts at $149. Saturday is open. Want me to book 11 AM?</p>
            </div>
          </div>
        </div>
        <div className="relative border-t border-white/10 py-4">
          <div className="mask-fade-x overflow-hidden">
            <div className="flex w-max animate-marquee gap-10 px-6 text-sm font-medium tracking-wide text-slate-400 uppercase">
              {[...industries, ...industries].map((industry, index) => (
                <span key={`${industry.slug}-${index}`} className="whitespace-nowrap">
                  {industry.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Everything a local business needs to look sharp and reply fast."
            subtitle="Websites, stores, chatbots, automation and the care to keep them growing."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Industries"
              title="A page you can send to any niche."
              subtitle="Each industry gets its own story, pain points and demo link — useful when you reach out one business at a time."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Why EasyGrowTech"
              title="A software studio that stays practical."
              subtitle="We focus on local businesses and Shopify sellers. The goal is more trust, more enquiries and faster replies."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-3xl border border-slate-200 p-5">
                <reason.icon className="h-5 w-5 text-brand-600" />
                <h3 className="mt-3 text-lg font-bold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="How we work" title="Six steps. You stay in control." />
          </Reveal>
          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <li key={step.step} className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="font-display text-sm font-bold text-brand-600">{step.step}</p>
                <h3 className="mt-2 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink-950 py-16">
        <div className="container-x">
          <Stats />
        </div>
      </section>

      <section className="container-x py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Concept demos that show the direction."
            subtitle="A look at the websites and assistants we design for clinics, cafes, salons and stores."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <article key={project.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <SiteMock kind={project.mock} className="rounded-none border-0 shadow-none" />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{project.type}</p>
                <h3 className="mt-1 text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.summary}</p>
                <p className="mt-4 text-sm font-semibold text-ink-900">{project.result}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <ButtonLink href="/work" variant="outline">
            View all work
          </ButtonLink>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading eyebrow="Reviews" title="What owners say after launch." />
          </Reveal>
          <div className="mt-8">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Packages"
            title="Simple starting points. A clear quote after the demo."
            subtitle="Exact pricing depends on pages, products and chatbot depth. No hidden fees."
          />
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {packages.map((item) => (
            <article
              key={item.slug}
              className={`flex flex-col rounded-3xl border p-6 ${item.highlighted ? "border-brand-400 bg-ink-950 text-white shadow-xl" : "border-slate-200 bg-white"}`}
            >
              <h3 className="text-lg font-bold">{item.name}</h3>
              <p className={`mt-3 font-display text-4xl font-bold ${item.highlighted ? "text-white" : "text-ink-900"}`}>{item.price}</p>
              <p className={`text-xs ${item.highlighted ? "text-slate-400" : "text-slate-500"}`}>{item.cadence}</p>
              <p className={`mt-3 flex-1 text-sm ${item.highlighted ? "text-slate-300" : "text-slate-600"}`}>{item.bestFor}</p>
              <Link href="/pricing" className={`mt-6 text-sm font-semibold ${item.highlighted ? "text-brand-300" : "text-brand-700"}`}>
                See what's included
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-x max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Questions we hear before the first demo." />
          </Reveal>
          <div className="mt-10">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
