/**
 * Team members. Replace names, roles and bios with your real team.
 * Optional `image`: put a photo in /public/team/ and set e.g. "/team/gulfam.jpg".
 */
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image?: string;
  linkedin?: string;
};

export const team: TeamMember[] = [
  {
    name: "Gulfam Amjad",
    role: "Founder & CEO",
    bio: "Leads strategy and client success. Obsessed with helping local businesses grow with technology.",
    skills: ["Strategy", "AI Solutions", "Growth"],
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Ahmed Raza",
    role: "Lead Full-Stack Developer",
    bio: "Builds fast, scalable websites and web apps with Next.js, React and Node.",
    skills: ["Next.js", "React", "Node.js"],
  },
  {
    name: "Sara Khan",
    role: "AI & Automation Engineer",
    bio: "Designs AI chatbots and automation workflows that save clients hours every week.",
    skills: ["OpenAI", "n8n", "Python"],
  },
  {
    name: "Hamza Ali",
    role: "UI/UX Designer",
    bio: "Crafts clean, conversion-focused designs that make brands look premium.",
    skills: ["Figma", "Branding", "UX Research"],
  },
  {
    name: "Ayesha Malik",
    role: "Shopify Specialist",
    bio: "Launches and optimises Shopify stores that look trustworthy and convert.",
    skills: ["Shopify", "Liquid", "CRO"],
  },
  {
    name: "Bilal Hassan",
    role: "Client Success & SEO",
    bio: "Your point of contact — keeps projects on time and grows your Google presence.",
    skills: ["Local SEO", "Support", "Analytics"],
  },
];
