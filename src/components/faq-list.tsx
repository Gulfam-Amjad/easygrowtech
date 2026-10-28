"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-base font-semibold text-ink-900 sm:text-lg">{item.q}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen ? <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6 sm:text-base">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
