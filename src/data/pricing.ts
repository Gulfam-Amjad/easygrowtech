export type Package = {
  slug: string;
  name: string;
  price: string;
  cadence: string;
  description: string;
  bestFor: string;
  features: string[];
  highlighted?: boolean;
};

export const packages: Package[] = [
  {
    slug: "starter-website",
    name: "Starter Website",
    price: "$299",
    cadence: "starting from",
    description: "A professional, mobile-ready website with contact and WhatsApp.",
    bestFor: "A sharp online presence",
    features: [
      "Up to 5 custom pages",
      "Mobile-first design",
      "Contact form & click-to-call",
      "WhatsApp button",
      "Map, hours & reviews section",
      "Basic SEO setup",
      "14-day launch support",
    ],
  },
  {
    slug: "shopify-grow",
    name: "Shopify Grow",
    price: "$499",
    cadence: "starting from",
    description: "A premium Shopify store setup or redesign that converts better.",
    bestFor: "Selling online properly",
    features: [
      "New store or full redesign",
      "Premium theme styling",
      "Up to 25 products set up",
      "Mobile checkout polish",
      "Collections, banners & trust blocks",
      "Speed & app cleanup",
      "Store training",
    ],
  },
  {
    slug: "ai-reply-bot",
    name: "AI Reply Bot",
    price: "$199",
    cadence: "starting from",
    description: "A chatbot trained on your FAQs, on your site and WhatsApp.",
    bestFor: "Faster replies, fewer missed leads",
    features: [
      "Trained on your business info",
      "Website chat widget",
      "WhatsApp auto-replies",
      "Lead capture (name & number)",
      "Human handover",
      "Booking link integration",
      "Small monthly AI usage fee",
    ],
  },
  {
    slug: "business-bundle",
    name: "Business Bundle",
    price: "$699",
    cadence: "starting from",
    description: "Website or Shopify store plus an AI chatbot — the full system.",
    bestFor: "Online presence + auto-replies",
    highlighted: true,
    features: [
      "Everything in Starter or Shopify",
      "AI chatbot included",
      "Lead notifications",
      "Booking or order flow",
      "On-page SEO",
      "Priority build slot",
      "30-day support window",
    ],
  },
];

export const carePlan = {
  name: "Care & Growth",
  price: "$39",
  cadence: "/ month",
  description: "Hosting, edits, backups and a monthly health check. Cancel anytime.",
  features: ["Managed hosting & SSL", "Content updates", "Backups & monitoring", "Monthly performance report", "Priority WhatsApp support"],
};

export const comparison: { label: string; values: [string, string, string, string] }[] = [
  { label: "Best for", values: ["New websites", "Online stores", "Auto replies", "The full setup"] },
  { label: "Pages or store", values: ["Up to 5 pages", "Shopify store", "Chat only", "Site or store"] },
  { label: "WhatsApp button", values: ["Yes", "Yes", "Yes", "Yes"] },
  { label: "AI chatbot", values: ["Add-on", "Add-on", "Included", "Included"] },
  { label: "SEO setup", values: ["Included", "Basic", "—", "Included"] },
  { label: "Timeline", values: ["5–10 days", "7–14 days", "3–7 days", "7–14 days"] },
  { label: "Support", values: ["14 days", "14 days", "30 days", "30 days"] },
];
