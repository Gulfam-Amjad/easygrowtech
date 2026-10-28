/** Client reviews. Replace with real reviews as you collect them. */
export type Testimonial = {
  name: string;
  role: string;
  business: string;
  location: string;
  quote: string;
  rating: number;
  result: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Imran Qureshi",
    role: "Owner",
    business: "BrightSmile Dental",
    location: "Houston, USA",
    quote:
      "They showed us a free demo before we paid anything. The new website and AI assistant now book appointments while we sleep. Our front desk finally has time to breathe.",
    rating: 5,
    result: "+42% online bookings",
  },
  {
    name: "Maria Gonzalez",
    role: "Founder",
    business: "Bloom Beauty Studio",
    location: "Miami, USA",
    quote:
      "Clients kept asking for prices on Instagram. Now the chatbot answers instantly and sends them to book. It feels like having an extra receptionist.",
    rating: 5,
    result: "3x faster replies",
  },
  {
    name: "Omar Siddiqui",
    role: "Manager",
    business: "The Daily Grind Cafe",
    location: "London, UK",
    quote:
      "Our menu, hours and reservations are finally online and look amazing. We started getting table bookings from Google Maps within the first week.",
    rating: 5,
    result: "+60 reservations / month",
  },
  {
    name: "Jessica Taylor",
    role: "Co-founder",
    business: "Luna Apparel",
    location: "Toronto, Canada",
    quote:
      "EasyGrowTech redesigned our Shopify store and the difference was instant. Product pages look premium and our conversion rate almost doubled.",
    rating: 5,
    result: "1.9x conversion rate",
  },
  {
    name: "Kevin Brooks",
    role: "Owner",
    business: "Brooks HVAC & Plumbing",
    location: "Phoenix, USA",
    quote:
      "I used to miss calls when I was on jobs. Now the AI captures every lead with the address and problem. Best investment I've made for my business.",
    rating: 5,
    result: "Zero missed leads",
  },
  {
    name: "Fatima Noor",
    role: "Director",
    business: "CarePlus Medical Centre",
    location: "Dubai, UAE",
    quote:
      "Professional team, clear communication and no tech jargon. Patients tell us our website is the easiest clinic site they've used.",
    rating: 5,
    result: "-35% no-shows",
  },
];
