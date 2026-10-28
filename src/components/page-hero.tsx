import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="container-x relative py-16 sm:py-20">
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-white sm:text-5xl">{title}</h1>
        {subtitle ? <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300">{subtitle}</p> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
