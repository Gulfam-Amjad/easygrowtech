import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { mailtoLink, site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a free EasyGrowTech demo by WhatsApp or email. No payment and no commitment.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { icon: MessageCircle, label: "WhatsApp", value: site.phoneDisplay, href: whatsappLink() },
  { icon: Mail, label: "Email", value: site.email, href: mailtoLink() },
  { icon: Phone, label: "Phone", value: site.phoneDisplay, href: `tel:${site.phoneHref}` },
  { icon: MapPin, label: "Studio", value: site.location, href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free demo"
        title="Tell us the business. We'll show you the direction."
        subtitle={`${site.responseTime}. ${site.hours}.`}
      />
      <section className="container-x grid gap-10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          {channels.map((channel) => {
            const inner = (
              <>
                <channel.icon className="h-5 w-5 text-brand-600" />
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">{channel.label}</span>
                  <span className="font-semibold text-ink-900">{channel.value}</span>
                </span>
              </>
            );
            const className = "flex items-center gap-3 rounded-2xl border border-slate-200 p-4";
            return channel.href ? (
              <a key={channel.label} href={channel.href} className={className} target={channel.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {inner}
              </a>
            ) : (
              <div key={channel.label} className={className}>
                {inner}
              </div>
            );
          })}
          <p className="text-sm leading-relaxed text-slate-500">{site.serviceArea}</p>
        </div>
        <Suspense fallback={<div className="h-96 rounded-3xl bg-slate-100" />}>
          <ContactForm />
        </Suspense>
      </section>
    </>
  );
}
