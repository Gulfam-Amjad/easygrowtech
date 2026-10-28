"use client";

import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useRef } from "react";
import { testimonials } from "@/data/testimonials";

export function TestimonialSlider() {
  const scroller = useRef<HTMLDivElement>(null);

  function move(direction: number) {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: direction * Math.min(node.clientWidth * 0.9, 420), behavior: "smooth" });
  }

  return (
    <div>
      <div className="mb-4 flex justify-end gap-2">
        <button type="button" aria-label="Previous reviews" onClick={() => move(-1)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button type="button" aria-label="Next reviews" onClick={() => move(1)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div ref={scroller} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((item) => (
          <figure key={item.name} className="w-[min(100%,380px)] shrink-0 snap-start rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <Quote className="h-6 w-6 text-brand-500" />
            <div className="mt-3 flex gap-0.5 text-amber-400" aria-label={`${item.rating} star rating`}>
              {Array.from({ length: item.rating }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">{item.quote}</blockquote>
            <figcaption className="mt-6 flex items-end justify-between gap-3">
              <div>
                <p className="font-semibold text-ink-900">{item.name}</p>
                <p className="text-xs text-slate-500">
                  {item.role}, {item.business}
                </p>
                <p className="text-xs text-slate-400">{item.location}</p>
              </div>
              <p className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{item.result}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
