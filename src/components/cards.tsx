import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Industry } from "@/data/industries";
import type { Service } from "@/data/services";
import { Icon } from "./icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-500/10"
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-700">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.short}</p>
      <div className="mt-6 flex items-center justify-between text-sm font-semibold">
        <span className="text-ink-900">From {service.startingPrice}</span>
        <span className="inline-flex items-center gap-1 text-brand-700">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href={`/industries/${industry.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
    >
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink-950 text-brand-300">
        <Icon name={industry.icon} className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-lg font-bold">{industry.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{industry.headline}</p>
      <span className="mt-4 text-sm font-semibold text-brand-700">See the page</span>
    </Link>
  );
}
