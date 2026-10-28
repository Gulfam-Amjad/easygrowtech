"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <div className="text-center">
      <p className="font-display text-4xl font-bold text-white sm:text-5xl">
        <span ref={ref}>{display}</span>
        <span className="text-brand-300">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
      {site.stats.map((stat) => (
        <Stat key={stat.label} {...stat} />
      ))}
    </div>
  );
}
