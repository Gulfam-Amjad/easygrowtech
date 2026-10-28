import Link from "next/link";

export function Mark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-accent-400 text-ink-950 shadow-lg shadow-brand-500/20 ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="h-[58%] w-[58%]" fill="none">
        <path d="M4 16.5 9.2 11l3.1 3.2L20 6.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 6.5H20V12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="EasyGrowTech home">
      <Mark />
      <span className={`font-display text-lg font-bold tracking-tight ${tone === "light" ? "text-white" : "text-ink-900"}`}>
        Easy<span className={tone === "light" ? "text-brand-300" : "text-brand-600"}>Grow</span>Tech
      </span>
    </Link>
  );
}
