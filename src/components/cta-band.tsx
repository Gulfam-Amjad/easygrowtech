import { ArrowRight } from "lucide-react";
import { ButtonLink } from "./ui";

export function CtaBand({
  title = "See your business online before you spend a dollar.",
  subtitle = "We'll prepare a free demo concept. No payment, no commitment. If you like it, we build the full version.",
  href = "/contact",
}: {
  title?: string;
  subtitle?: string;
  href?: string;
}) {
  return (
    <section className="container-x pb-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-14 text-center sm:px-12">
        <div className="pointer-events-none absolute -left-16 top-0 h-56 w-56 animate-blob rounded-full bg-brand-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 animate-blob rounded-full bg-accent-500/30 blur-3xl" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={href}>
              Get your free demo <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink href="/pricing" variant="outlineLight">
              View packages
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
