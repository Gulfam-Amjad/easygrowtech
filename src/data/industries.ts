import type { IconName } from "@/components/icon";

export type Industry = {
  slug: string;
  icon: IconName;
  name: string;
  plural: string;
  audience: string;
  headline: string;
  problem: string;
  offer: string;
  painPoints: string[];
  solutions: { title: string; description: string }[];
  features: string[];
  chatExample: { q: string; a: string };
  services: string[];
};

export const industries: Industry[] = [
  {
    slug: "dental",
    icon: "smile",
    name: "Dental Clinics",
    plural: "dental clinics",
    audience: "patients",
    headline: "More booked appointments for your dental clinic.",
    problem:
      "Patients search online before they book — without a modern site, they often pick the clinic that looks more professional.",
    offer: "show treatments, hours, location, and online appointment booking",
    painPoints: [
      "Patients choose competitors who look more trustworthy online",
      "Front desk overloaded with the same questions about prices & timings",
      "Missed calls after hours = missed appointments",
      "No-shows waste chair time every week",
    ],
    solutions: [
      { title: "Trust-building clinic website", description: "Treatments, doctor profiles, before/after gallery, reviews and insurance info." },
      { title: "Online appointment booking", description: "Patients book a slot in seconds — day or night." },
      { title: "AI front-desk assistant", description: "Answers treatment, pricing and timing questions 24/7 on WhatsApp and web." },
      { title: "Automatic reminders", description: "WhatsApp & SMS reminders that reduce no-shows." },
    ],
    features: ["Treatment pages", "Doctor profiles", "Booking calendar", "Before/after gallery", "Google reviews", "Emergency contact"],
    chatExample: { q: "How much is teeth whitening and are you open Saturday?", a: "Teeth whitening starts from $149. Yes — we're open Saturday 10 AM to 4 PM. Want me to book you a slot?" },
    services: ["business-websites", "ai-chatbots", "ai-automation", "local-seo"],
  },
  {
    slug: "medical-clinics",
    icon: "stethoscope",
    name: "Clinics & Doctors",
    plural: "clinics",
    audience: "patients",
    headline: "Help patients find, trust and book your clinic online.",
    problem:
      "Patients Google first these days — without a website, many call a competitor who looks easier to reach.",
    offer: "show services, hours, location, and simple contact or booking",
    painPoints: [
      "Patients can't find your services, timings or doctors online",
      "Reception phones ring non-stop with repeat questions",
      "Old website looks outdated and slow on mobile",
      "No way to book after clinic hours",
    ],
    solutions: [
      { title: "Professional clinic website", description: "Services, specialists, timings and location — clear and reassuring." },
      { title: "Appointment requests", description: "Simple booking forms and WhatsApp booking for every department." },
      { title: "AI patient assistant", description: "Handles FAQs about timings, fees and reports around the clock." },
      { title: "Local SEO", description: "Rank for \"clinic near me\" and specialist searches in your area." },
    ],
    features: ["Specialist profiles", "Department pages", "Appointment form", "Timings & fees", "Map & directions", "Patient reviews"],
    chatExample: { q: "Is the skin specialist available tomorrow evening?", a: "Yes, Dr. Sara is available tomorrow from 5 PM to 8 PM. Shall I reserve a 6 PM appointment for you?" },
    services: ["business-websites", "ai-chatbots", "local-seo", "care-plans"],
  },
  {
    slug: "salons",
    icon: "scissors",
    name: "Salons, Spas & Barbers",
    plural: "salons",
    audience: "clients and bookings",
    headline: "Fill your salon chairs with online bookings.",
    problem:
      "Customers want to book online, and if you don't offer it, they'll go to a competitor.",
    offer: "show services, prices, location, and let customers book easily",
    painPoints: [
      "Clients DM on Instagram and wait hours for replies",
      "No online booking — clients go to the salon that has it",
      "Prices and services aren't clear anywhere",
      "Your beautiful work isn't showcased properly",
    ],
    solutions: [
      { title: "Stunning salon website", description: "Service menu, price list, stylist profiles and a gorgeous gallery." },
      { title: "24/7 online booking", description: "Clients pick a service, stylist and time — without calling." },
      { title: "AI booking assistant", description: "Replies to prices and availability questions instantly on WhatsApp." },
      { title: "Review & rebooking automation", description: "Ask for reviews and remind clients when it's time to rebook." },
    ],
    features: ["Service & price menu", "Stylist profiles", "Instagram gallery", "Online booking", "Gift cards", "Offers & packages"],
    chatExample: { q: "Do you have a slot for a haircut and beard trim today?", a: "We have 3:30 PM and 6:00 PM free today. Haircut + beard trim is $35. Which time works for you?" },
    services: ["business-websites", "ai-chatbots", "ai-automation"],
  },
  {
    slug: "restaurants-cafes",
    icon: "utensils",
    name: "Restaurants & Cafes",
    plural: "restaurants",
    audience: "diners and reservations",
    headline: "Turn hungry searchers into reservations and orders.",
    problem:
      "People check the menu and hours online before they visit — without a site, they often choose a place that has one.",
    offer: "show your menu, hours, location, and take reservations or orders",
    painPoints: [
      "Delivery apps take up to 30% commission on every order",
      "Customers can't find your menu, prices or hours",
      "Staff too busy to answer calls and messages during rush",
      "No direct relationship with your regular customers",
    ],
    solutions: [
      { title: "Mouth-watering restaurant website", description: "Beautiful digital menu, photos, hours, location and story." },
      { title: "Reservations & direct orders", description: "Table booking and commission-free ordering links." },
      { title: "AI order & FAQ assistant", description: "Answers menu, delivery and timing questions instantly." },
      { title: "Google Maps optimisation", description: "Show up for \"cafe near me\" and \"best biryani in town\"." },
    ],
    features: ["Digital menu", "Table reservations", "Order online", "Photo gallery", "Events & deals", "Map & hours"],
    chatExample: { q: "Do you deliver to DHA and what are your hours?", a: "Yes, we deliver to DHA in about 35 minutes. We're open 12 PM to 1 AM daily. Want me to share today's menu?" },
    services: ["business-websites", "ai-chatbots", "local-seo"],
  },
  {
    slug: "gyms-fitness",
    icon: "dumbbell",
    name: "Gyms & Fitness Studios",
    plural: "gyms",
    audience: "members and enquiries",
    headline: "Grow memberships with a gym website that sells.",
    problem:
      "Members compare options online — without a website, many join a place that looks clearer and easier to start with.",
    offer: "show classes, prices, schedule, and membership signup",
    painPoints: [
      "Prospects can't see prices, classes or schedules",
      "Trial enquiries go unanswered on social media",
      "No online signup or payment",
      "Hard to stand out from bigger chains",
    ],
    solutions: [
      { title: "High-energy gym website", description: "Classes, trainers, facilities, pricing and transformations." },
      { title: "Free trial & signup flow", description: "Capture leads and convert them to paying members." },
      { title: "AI membership assistant", description: "Answers pricing and schedule questions and books trials." },
      { title: "Follow-up automation", description: "Nurture trial leads until they join." },
    ],
    features: ["Class schedule", "Membership plans", "Trainer profiles", "Free trial form", "Transformations", "Facility tour"],
    chatExample: { q: "How much is monthly membership and do you have ladies timing?", a: "Monthly membership is $45. Ladies-only hours are 10 AM – 2 PM daily. Would you like a free trial pass?" },
    services: ["business-websites", "ai-chatbots", "ai-automation"],
  },
  {
    slug: "home-services",
    icon: "wrench",
    name: "Home Services",
    plural: "local service businesses",
    audience: "customers and quote requests",
    headline: "Win more jobs than the competitor who shows up first.",
    problem:
      "Homeowners hire whoever looks ready online — without a website, many jobs go to a competitor who shows up first.",
    offer: "show services, areas you cover, quotes, and easy contact",
    painPoints: [
      "You miss calls while you're on a job",
      "Customers want instant quotes and fast answers",
      "No proof of quality work online",
      "Leads from Google go to bigger companies",
    ],
    solutions: [
      { title: "Lead-generating service website", description: "Services, service areas, project photos, reviews and guarantees." },
      { title: "Instant quote forms", description: "Customers describe the job and get back to you fast." },
      { title: "AI dispatcher", description: "Captures job details, urgency and address 24/7 — even when you're busy." },
      { title: "Local SEO", description: "Rank for \"plumber near me\", \"HVAC repair\" and more." },
    ],
    features: ["Service areas", "Quote request", "Project gallery", "Reviews", "Emergency call button", "Financing info"],
    chatExample: { q: "My AC stopped cooling. Can someone come today?", a: "Sorry to hear that! We have a technician available after 4 PM today. Can I get your address and phone number to confirm?" },
    services: ["business-websites", "ai-chatbots", "ai-automation", "local-seo"],
  },
  {
    slug: "auto-shops",
    icon: "car",
    name: "Auto Shops & Car Care",
    plural: "auto shops",
    audience: "drivers and bookings",
    headline: "Get more drivers booking your garage.",
    problem:
      "Drivers pick shops with clear info online — without a site, many call whoever looks ready first.",
    offer: "show services, prices, location, and an easy way to contact you",
    painPoints: [
      "Drivers can't see your services or prices online",
      "Phones ring constantly with the same questions",
      "No online booking for services",
      "Competitors look more established on Google",
    ],
    solutions: [
      { title: "Professional garage website", description: "Services, pricing, certifications, reviews and location." },
      { title: "Service booking", description: "Drivers book oil changes, inspections and repairs online." },
      { title: "AI service advisor", description: "Answers price and timing questions instantly." },
      { title: "Reminder automation", description: "Service due reminders bring customers back." },
    ],
    features: ["Service menu", "Online booking", "Price estimates", "Reviews", "Certifications", "Map & hours"],
    chatExample: { q: "How much for an oil change and how long does it take?", a: "A full synthetic oil change is $59 and takes about 30 minutes. We have a slot at 11 AM tomorrow — shall I book it?" },
    services: ["business-websites", "ai-chatbots", "local-seo"],
  },
  {
    slug: "law-firms",
    icon: "scale",
    name: "Law Firms",
    plural: "law firms",
    audience: "clients and consultations",
    headline: "A law firm website that earns trust and consultations.",
    problem:
      "Clients research firms before they call — without a website, many choose someone who looks clearer and more established.",
    offer: "show practice areas, location, and consultation booking",
    painPoints: [
      "Your firm doesn't look as established online as it is",
      "Potential clients can't understand your practice areas",
      "Consultation requests come in after hours",
      "Too much time spent screening unqualified enquiries",
    ],
    solutions: [
      { title: "Authoritative firm website", description: "Practice areas, attorney profiles, case results and testimonials." },
      { title: "Consultation booking", description: "Clients request consultations with a secure form." },
      { title: "AI intake assistant", description: "Pre-qualifies enquiries and collects case details." },
      { title: "Local SEO", description: "Rank for your practice areas in your city." },
    ],
    features: ["Practice areas", "Attorney profiles", "Case results", "Consultation form", "FAQs", "Blog / insights"],
    chatExample: { q: "Do you handle property disputes?", a: "Yes, property and real estate disputes are one of our core practice areas. Would you like to book a free 15-minute consultation?" },
    services: ["business-websites", "ai-chatbots", "local-seo"],
  },
  {
    slug: "real-estate",
    icon: "building",
    name: "Real Estate Agencies",
    plural: "real estate agencies",
    audience: "buyers, sellers and enquiries",
    headline: "Showcase listings and capture serious buyers 24/7.",
    problem:
      "Buyers and renters browse online first — without a site, many inquire with an agency that already has one.",
    offer: "show listings, areas you cover, and an easy inquiry form",
    painPoints: [
      "Listings are scattered across portals and social media",
      "Leads go cold because replies are slow",
      "Hard to qualify serious buyers",
      "No branded online presence",
    ],
    solutions: [
      { title: "Listing-ready website", description: "Property listings, area guides, agent profiles and enquiry forms." },
      { title: "AI property assistant", description: "Answers questions about listings, prices and viewings instantly." },
      { title: "Lead automation", description: "Every enquiry gets instant follow-up and lands in your CRM." },
      { title: "Viewing scheduling", description: "Buyers book property viewings online." },
    ],
    features: ["Property listings", "Search & filters", "Area guides", "Agent profiles", "Viewing booking", "Lead capture"],
    chatExample: { q: "Do you have 3-bedroom apartments under $200k?", a: "Yes! We have 4 three-bedroom apartments under $200k right now. Shall I send you the listings and book a viewing?" },
    services: ["business-websites", "ai-chatbots", "ai-automation"],
  },
  {
    slug: "hotels",
    icon: "hotel",
    name: "Hotels & Guest Houses",
    plural: "hotels",
    audience: "guests and direct bookings",
    headline: "More direct bookings, fewer OTA commissions.",
    problem:
      "Guests book online — without a website, many choose another place that lets them reserve in a few taps.",
    offer: "show rooms, rates, location, and online booking",
    painPoints: [
      "Booking platforms take 15–25% commission",
      "Guests can't see rooms and amenities clearly",
      "Questions about availability go unanswered at night",
      "No direct relationship with returning guests",
    ],
    solutions: [
      { title: "Beautiful hotel website", description: "Rooms, amenities, gallery, location and guest reviews." },
      { title: "Direct booking", description: "Commission-free room booking and enquiry flows." },
      { title: "AI concierge", description: "Answers availability, check-in and amenity questions 24/7." },
      { title: "Guest automation", description: "Pre-arrival messages and review requests after checkout." },
    ],
    features: ["Room showcase", "Direct booking", "Amenities", "Photo gallery", "Location guide", "Guest reviews"],
    chatExample: { q: "Do you have a double room for this weekend with breakfast?", a: "Yes, our Deluxe Double is available Friday–Sunday at $89/night including breakfast. Shall I reserve it?" },
    services: ["business-websites", "ai-chatbots", "ai-automation"],
  },
  {
    slug: "retail",
    icon: "store",
    name: "Retail & Boutiques",
    plural: "shops",
    audience: "shoppers and enquiries",
    headline: "Bring your shop online and sell beyond your street.",
    problem:
      "Shoppers check hours and what you sell before they visit — without a site, many go to a store that shows up clearly online.",
    offer: "show products, hours, location, and an easy way to contact you",
    painPoints: [
      "Customers don't know what you stock",
      "You only sell to people who walk by",
      "Instagram DMs are hard to manage",
      "No way to take online orders",
    ],
    solutions: [
      { title: "Shopify online store", description: "Sell your products online with a premium, trustworthy store." },
      { title: "Catalog website", description: "Show collections, prices, hours and location." },
      { title: "AI shopping assistant", description: "Answers stock, size and delivery questions instantly." },
      { title: "WhatsApp ordering", description: "Customers order directly on WhatsApp in one tap." },
    ],
    features: ["Product catalog", "Online store", "WhatsApp ordering", "Offers", "Store location", "Reviews"],
    chatExample: { q: "Is this dress available in medium and how fast is delivery?", a: "Yes, medium is in stock! Delivery takes 2–3 days and it's free over $50. Want me to add it to your cart?" },
    services: ["shopify-stores", "business-websites", "ai-chatbots"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
