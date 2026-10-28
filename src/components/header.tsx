"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { Logo } from "./logo";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/80 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-gradient-to-r from-brand-400 to-accent-400 px-4 py-2 text-sm font-semibold text-ink-950 sm:inline-flex"
          >
            Free demo
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-white/10 bg-ink-950 px-5 py-4 md:hidden" aria-label="Mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 block rounded-full bg-gradient-to-r from-brand-400 to-accent-400 px-4 py-3 text-center text-sm font-semibold text-ink-950"
            onClick={() => setOpen(false)}
          >
            Get a free demo
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
