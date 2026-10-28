/**
 * Central company configuration.
 * Edit the values below and the whole website updates automatically.
 */
export const site = {
  name: "EasyGrowTech",
  legalName: "EasyGrowTech",
  tagline: "Websites, Shopify stores & AI automation that grow local businesses.",
  description:
    "EasyGrowTech builds modern websites, high-converting Shopify stores, and AI chatbots & automations for dentists, clinics, salons, restaurants, cafes, gyms and local service businesses. See a free demo first — no payment, no commitment.",
  // Change to your real domain once connected in Vercel.
  url: "https://easygrowtech.vercel.app",

  email: "hello@easygrowtech.com",
  // International format, digits only (used for wa.me links). Example: 923001234567
  whatsapp: "923000000000",
  // Human readable phone number shown on the site.
  phoneDisplay: "+92 300 0000000",
  phoneHref: "+923000000000",

  location: "Lahore, Pakistan",
  serviceArea: "Serving clients worldwide — USA, UK, Canada, Australia, UAE & Pakistan",
  hours: "Mon – Sat, 9:00 AM – 8:00 PM",
  responseTime: "Usually replies within 1 hour",
  foundedYear: 2023,

  socials: {
    linkedin: "https://www.linkedin.com/company/easygrowtech",
    instagram: "https://www.instagram.com/easygrowtech",
    facebook: "https://www.facebook.com/easygrowtech",
    x: "https://x.com/easygrowtech",
    github: "https://github.com/Gulfam-Amjad",
  },

  stats: [
    { value: 120, suffix: "+", label: "Projects delivered" },
    { value: 15, suffix: "+", label: "Industries served" },
    { value: 98, suffix: "%", label: "Client satisfaction" },
    { value: 24, suffix: "/7", label: "AI replies, never offline" },
  ],
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
] as const;

export function whatsappLink(message?: string) {
  const text = message ?? `Hi ${site.name}! I'd like a free demo for my business.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  params.set("subject", subject ?? `Free demo request — ${site.name}`);
  if (body) params.set("body", body);
  return `mailto:${site.email}?${params.toString().replace(/\+/g, "%20")}`;
}
