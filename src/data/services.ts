import type { IconName } from "@/components/icon";

export type Service = {
  slug: string;
  icon: IconName;
  title: string;
  short: string;
  headline: string;
  description: string;
  startingPrice: string;
  timeline: string;
  features: { title: string; description: string }[];
  deliverables: string[];
  bestFor: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "business-websites",
    icon: "globe",
    title: "Business Websites",
    short: "Fast, modern, mobile-first websites that turn visitors into calls, bookings and enquiries.",
    headline: "A website that makes customers choose you — not the business next door.",
    description:
      "Most customers check online before they call, visit or book. We design and build clean, lightning-fast websites that show who you are, what you offer and make it effortless to contact or book you — on every device.",
    startingPrice: "$299",
    timeline: "5 – 10 days",
    features: [
      { title: "Premium custom design", description: "A unique look built around your brand, photos and colours — never a cheap template feel." },
      { title: "Mobile-first & fast", description: "Over 70% of local searches happen on phones. Your site loads in under 2 seconds." },
      { title: "Booking & enquiry flows", description: "Online booking links, enquiry forms and click-to-call buttons on every page." },
      { title: "WhatsApp click-to-chat", description: "Customers message you in one tap — no copying numbers, no friction." },
      { title: "Google-ready SEO setup", description: "Titles, meta tags, schema, sitemap and Google Maps so people actually find you." },
      { title: "Easy to update", description: "Change prices, menus, services and photos without calling a developer." },
    ],
    deliverables: [
      "Up to 5 pages (Home, About, Services/Menu, Gallery, Contact)",
      "Responsive design for mobile, tablet & desktop",
      "Contact form, WhatsApp & call buttons",
      "Location map, opening hours & reviews section",
      "Basic on-page SEO + Google Search Console",
      "Free SSL, hosting setup & domain connection",
      "1 round of revisions + launch training",
    ],
    bestFor: ["Dentists & clinics", "Salons & spas", "Restaurants & cafes", "Gyms", "Law firms", "Home services"],
    faqs: [
      { q: "Do I need to provide content?", a: "Just your logo (if you have one), photos and basic info. We write professional, conversion-focused copy for you." },
      { q: "Can I see it before I pay?", a: "Yes. We build a free demo concept of your homepage first. You only pay if you love it." },
      { q: "Who owns the website?", a: "You do. Domain, content and design assets are handed over as agreed in your quote." },
    ],
  },
  {
    slug: "shopify-stores",
    icon: "shoppingBag",
    title: "Shopify Stores",
    short: "Shopify setup, redesigns and conversion polish so your store looks premium and sells more.",
    headline: "A Shopify store that looks trustworthy and sells while you sleep.",
    description:
      "Whether you're launching your first store or your current one isn't converting, we design premium Shopify experiences — from product pages to checkout — that build trust and increase sales.",
    startingPrice: "$499",
    timeline: "7 – 14 days",
    features: [
      { title: "New store setup", description: "Theme, payments, shipping, taxes, domains and policies — fully configured." },
      { title: "Premium theme design", description: "A clean, brand-matched look that makes shoppers trust you instantly." },
      { title: "High-converting product pages", description: "Better layouts, images, reviews and urgency elements that lift add-to-cart." },
      { title: "Mobile checkout optimisation", description: "Fewer steps and faster loading — fewer abandoned carts." },
      { title: "Collections & trust sections", description: "Smart navigation, banners, badges, FAQs and social proof." },
      { title: "Apps & speed cleanup", description: "We remove bloat, set up essential apps and make the store fast." },
    ],
    deliverables: [
      "Shopify store setup or full redesign",
      "Up to 25 products uploaded & optimised",
      "Collections, menus & homepage sections",
      "Reviews, WhatsApp & social integration",
      "Abandoned cart & order email setup",
      "Speed & mobile performance cleanup",
      "Store training video for your team",
    ],
    bestFor: ["Fashion & beauty brands", "Food & bakery brands", "Dropshippers", "Retail shops going online", "Jewellery stores"],
    faqs: [
      { q: "I already have a Shopify store. Can you improve it?", a: "Absolutely. We audit it, then redesign the sections that hurt sales — product pages, homepage and checkout flow." },
      { q: "Do you work with other platforms?", a: "Shopify is our specialty, but we also build custom Next.js and WooCommerce stores when it's a better fit." },
      { q: "Can you add an AI chatbot to my store?", a: "Yes — our Business Bundle combines a store with an AI assistant that answers product, shipping and order questions." },
    ],
  },
  {
    slug: "ai-chatbots",
    icon: "bot",
    title: "AI Chatbots",
    short: "24/7 AI assistants that answer FAQs, capture leads and book appointments on your site and WhatsApp.",
    headline: "Never miss a customer message again — even at 2 AM.",
    description:
      "Your AI assistant is trained on your business — prices, hours, services, delivery and policies. It replies instantly on your website and WhatsApp, captures names and numbers, and hands complex chats to a human.",
    startingPrice: "$199",
    timeline: "3 – 7 days",
    features: [
      { title: "Trained on your business", description: "Answers questions about your services, prices, hours, location and policies accurately." },
      { title: "Website & WhatsApp", description: "Works as a website chat widget and WhatsApp-style auto replies — wherever your customers are." },
      { title: "Lead capture", description: "Collects name, phone, email and enquiry details, then sends them straight to you." },
      { title: "Appointment booking", description: "Guides customers to book a slot through your calendar or booking system." },
      { title: "Human handover", description: "Complex or sensitive chats are passed to you or your team instantly." },
      { title: "Multilingual", description: "Replies in English, Urdu, Arabic, Spanish and more — automatically." },
    ],
    deliverables: [
      "Custom AI assistant trained on your FAQs",
      "Website chat widget installation",
      "WhatsApp auto-reply setup (as agreed)",
      "Lead notifications via email / WhatsApp",
      "Booking link or calendar integration",
      "Monthly accuracy review & improvements",
    ],
    bestFor: ["Busy clinics & dentists", "Restaurants taking orders", "Salons", "Shopify stores", "Real estate agencies", "Hotels"],
    faqs: [
      { q: "Will the chatbot give wrong answers?", a: "It only answers from the information you approve. Anything outside that is politely handed to a human." },
      { q: "Do I need a website for the chatbot?", a: "No. It can run on WhatsApp alone, but it works best combined with a website." },
      { q: "Is there a monthly cost?", a: "There's a small monthly fee to cover AI usage, hosting and improvements. You'll see it clearly in your quote." },
    ],
  },
  {
    slug: "ai-automation",
    icon: "workflow",
    title: "AI Automation",
    short: "Automate follow-ups, reminders, reviews and lead handling so your team saves hours every week.",
    headline: "Let automation handle the repetitive work. You focus on customers.",
    description:
      "We connect your website, WhatsApp, email, Google Sheets, calendars and CRM into smart workflows. Leads get followed up instantly, appointments get reminders, and happy customers get asked for reviews — automatically.",
    startingPrice: "$249",
    timeline: "5 – 10 days",
    features: [
      { title: "Instant lead follow-up", description: "Every new enquiry gets a personalised reply within seconds — by WhatsApp or email." },
      { title: "Booking reminders", description: "Automatic reminders cut no-shows for clinics, salons and service businesses." },
      { title: "Google review requests", description: "Ask happy customers for reviews at the perfect moment and grow your rating." },
      { title: "CRM & Sheets sync", description: "All leads land in Google Sheets, HubSpot or your CRM — organised and searchable." },
      { title: "AI email & message drafts", description: "AI drafts replies, quotes and follow-ups for you to send in one click." },
      { title: "Reports on autopilot", description: "Weekly summaries of leads, bookings and messages delivered to your inbox." },
    ],
    deliverables: [
      "Workflow audit & automation roadmap",
      "Up to 5 automated workflows",
      "Integrations (WhatsApp, Gmail, Sheets, Calendar, CRM)",
      "AI-powered reply & follow-up templates",
      "Documentation & team walkthrough",
      "30 days monitoring & fixes",
    ],
    bestFor: ["Clinics with no-shows", "Home service businesses", "Agencies & consultants", "Real estate", "E-commerce brands"],
    faqs: [
      { q: "What tools do you use?", a: "Make, Zapier, n8n, OpenAI and custom code — whatever is reliable and cost-effective for you." },
      { q: "Will it work with my existing tools?", a: "Most likely. We integrate with Gmail, Outlook, WhatsApp Business, Google Workspace, Calendly, HubSpot and more." },
      { q: "How much time will this save?", a: "Our clients typically save 8–15 hours a week on repetitive messaging and admin." },
    ],
  },
  {
    slug: "local-seo",
    icon: "search",
    title: "Local SEO & Google Profile",
    short: "Show up on Google Maps and local search when customers near you are ready to buy.",
    headline: "Be the first business customers find on Google Maps.",
    description:
      "We optimise your Google Business Profile, website and local citations so you rank higher in \"near me\" searches — bringing more calls, direction requests and walk-ins.",
    startingPrice: "$149",
    timeline: "Ongoing / monthly",
    features: [
      { title: "Google Business Profile", description: "Fully optimised profile — categories, services, photos, posts and Q&A." },
      { title: "Local keyword strategy", description: "Target the exact searches your customers use, like \"dentist near me\"." },
      { title: "On-page SEO", description: "Fast pages, schema markup and content that Google loves." },
      { title: "Review strategy", description: "Systems to collect more 5-star reviews and reply to them professionally." },
      { title: "Citations & listings", description: "Consistent business details across directories to build local trust." },
      { title: "Monthly reporting", description: "Clear reports on rankings, calls and website visits." },
    ],
    deliverables: [
      "Google Business Profile optimisation",
      "Local keyword research",
      "On-page SEO for key pages",
      "Schema & sitemap setup",
      "Review generation system",
      "Monthly performance report",
    ],
    bestFor: ["Dentists", "Clinics", "Restaurants", "Home services", "Law firms", "Auto shops"],
    faqs: [
      { q: "How fast will I see results?", a: "Profile improvements often show within weeks; stronger rankings usually build over 2–4 months." },
      { q: "Do you guarantee #1 rankings?", a: "No honest agency can. We guarantee proven best practices and transparent monthly reporting." },
    ],
  },
  {
    slug: "care-plans",
    icon: "lifeBuoy",
    title: "Website Care & Growth",
    short: "Hosting, updates, backups, security and monthly improvements — so your site keeps growing.",
    headline: "Your website, always fast, secure and up to date.",
    description:
      "Launch is just the beginning. Our care plans keep your website and chatbot running smoothly, with monthly content updates, performance checks and growth recommendations.",
    startingPrice: "$39/mo",
    timeline: "Monthly",
    features: [
      { title: "Managed hosting", description: "Fast, secure hosting with SSL and 99.9% uptime monitoring." },
      { title: "Content updates", description: "Send us new prices, menus or photos — we update them for you." },
      { title: "Backups & security", description: "Regular backups and security monitoring to keep you safe." },
      { title: "Performance checks", description: "Speed and SEO health checks every month." },
      { title: "Chatbot tuning", description: "We review chatbot conversations and improve answers." },
      { title: "Priority support", description: "WhatsApp support with fast response times." },
    ],
    deliverables: [
      "Hosting & SSL management",
      "Monthly content edits",
      "Uptime & security monitoring",
      "Monthly performance report",
      "Priority WhatsApp support",
    ],
    bestFor: ["Every EasyGrowTech client", "Businesses without an in-house developer"],
    faqs: [
      { q: "Is the care plan required?", a: "No, it's optional. Many clients choose it so they never have to worry about their website." },
      { q: "Can I cancel anytime?", a: "Yes. Care plans are month-to-month with no lock-in." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
