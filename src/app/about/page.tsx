import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { team } from "@/data/team";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Meet EasyGrowTech — a studio building websites, Shopify stores and AI automation for local businesses.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Show, then sell", text: "A free demo comes before a contract. You decide with your eyes." },
  { title: "Clarity over cleverness", text: "Owners should understand the quote, the timeline and the result." },
  { title: "Craft that converts", text: "Pretty pages matter, but calls, bookings and replies matter more." },
  { title: "Stay after launch", text: "Support windows and care plans keep the site fast and current." },
];

const stack = ["Next.js", "React", "Shopify", "Tailwind", "OpenAI", "WhatsApp", "n8n", "Make", "Vercel", "Google Business"];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small studio obsessed with local businesses getting found and booked."
        subtitle={`${site.name} designs websites, stores and AI assistants that feel premium and stay simple to run. Based in ${site.location}, working with clients worldwide since ${site.foundedYear}.`}
      />
      <section className="container-x grid gap-6 py-16 md:grid-cols-2">
        {values.map((value) => (
          <article key={value.title} className="rounded-3xl border border-slate-200 p-6">
            <h2 className="text-xl font-bold">{value.title}</h2>
            <p className="mt-2 text-slate-600">{value.text}</p>
          </article>
        ))}
      </section>
      <section className="bg-slate-50 py-16">
        <div className="container-x">
          <h2 className="text-3xl font-bold">The people behind the work</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Strategy, design, engineering and client success — one team from the first demo through launch.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="rounded-3xl border border-slate-200 bg-white p-6">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-accent-400 font-display text-lg font-bold text-ink-950">
                  {initials(member.name)}
                </div>
                <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
                <p className="text-sm font-medium text-brand-700">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{member.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="container-x py-16">
        <h2 className="text-2xl font-bold">Tools we use</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {stack.map((item) => (
            <span key={item} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-ink-900">
              {item}
            </span>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
