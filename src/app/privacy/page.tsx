import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles information shared through this website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy" subtitle="This site is a brochure. The demo form does not store what you type." />
      <article className="container-x max-w-3xl space-y-6 py-16 text-slate-700">
        <p>
          {site.name} uses this website to explain our services. When you use the contact form, your browser opens WhatsApp or your email app with a message you can review before sending. We do not run a database on this site and we do not save form entries on our servers.
        </p>
        <p>
          If you email or message us, we use that information only to reply, prepare a demo and, if you hire us, deliver the project. We do not sell contact details.
        </p>
        <p>
          The site may be hosted on Vercel, which processes basic request logs such as IP address and browser type to keep the site online and secure. We do not use advertising cookies.
        </p>
        <p>
          Questions about your information: <a className="font-semibold text-brand-700" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </article>
    </>
  );
}
