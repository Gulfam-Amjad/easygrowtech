import Link from "next/link";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { site, mailtoLink, whatsappLink } from "@/data/site";
import { Logo } from "./logo";
import { SocialLinks } from "./socials";

export function Footer() {
  return (
    <footer className="bg-ink-950 text-slate-300">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">{site.tagline}</p>
          <p className="mt-4 text-sm text-slate-400">{site.serviceArea}</p>
          <SocialLinks className="mt-6" />
        </div>
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold text-white">Services</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="text-sm font-semibold text-white">Industries</p>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <Link href={`/industries/${industry.slug}`} className="hover:text-white">
                  {industry.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={mailtoLink()} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="hover:text-white">
                WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>{site.location}</li>
            <li>{site.hours}</li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Request a free demo
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About the team
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-300">Privacy</Link>
            <Link href="/terms" className="hover:text-slate-300">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
