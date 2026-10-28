import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-gradient-to-r from-brand-400 to-accent-400 text-ink-950 shadow-lg shadow-brand-500/25 hover:brightness-110",
  dark: "bg-white text-ink-950 hover:bg-brand-50",
  outline:
    "border border-slate-200 bg-white text-ink-900 hover:border-brand-400 hover:text-brand-700",
  outlineLight: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className={`text-sm font-semibold tracking-wide uppercase ${light ? "text-brand-300" : "text-brand-600"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-2 text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-ink-900"}`}>{title}</h2>
      {subtitle ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-slate-300" : "text-slate-600"}`}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
