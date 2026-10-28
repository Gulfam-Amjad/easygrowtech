export type MockKind = "dental" | "cafe" | "salon" | "shop" | "chat" | "home";

export type Project = {
  slug: string;
  title: string;
  industry: string;
  industrySlug: string;
  type: string;
  summary: string;
  result: string;
  mock: MockKind;
};

export const projects: Project[] = [
  {
    slug: "brightsmile-dental",
    title: "BrightSmile Dental",
    industry: "Dental",
    industrySlug: "dental",
    type: "Website + AI chatbot",
    summary: "A calm clinic site with treatments, doctor profiles and a booking assistant that answers after hours.",
    result: "+42% online bookings",
    mock: "dental",
  },
  {
    slug: "daily-grind-cafe",
    title: "The Daily Grind",
    industry: "Cafe",
    industrySlug: "restaurants-cafes",
    type: "Restaurant website",
    summary: "A warm menu site with hours, location and table reservations — so diners choose them before they arrive.",
    result: "+60 reservations / month",
    mock: "cafe",
  },
  {
    slug: "bloom-beauty",
    title: "Bloom Beauty Studio",
    industry: "Salon",
    industrySlug: "salons",
    type: "Booking website",
    summary: "Services, prices, a gallery and online booking, plus WhatsApp replies for clients who still DM.",
    result: "3× faster replies",
    mock: "salon",
  },
  {
    slug: "luna-apparel",
    title: "Luna Apparel",
    industry: "Shopify",
    industrySlug: "retail",
    type: "Shopify redesign",
    summary: "A cleaner storefront, stronger product pages and a faster mobile checkout for a fashion brand.",
    result: "1.9× conversion rate",
    mock: "shop",
  },
  {
    slug: "brooks-hvac",
    title: "Brooks HVAC",
    industry: "Home services",
    industrySlug: "home-services",
    type: "Lead site + automation",
    summary: "Service areas, a quote form and an AI dispatcher that captures jobs while the owner is on a call.",
    result: "Zero missed leads",
    mock: "home",
  },
  {
    slug: "careplus-assistant",
    title: "CarePlus Assistant",
    industry: "Clinic",
    industrySlug: "medical-clinics",
    type: "AI front desk",
    summary: "A website and WhatsApp assistant that books appointments and sends reminders to cut no-shows.",
    result: "−35% no-shows",
    mock: "chat",
  },
];
