import type { MetadataRoute } from "next";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["", "/services", "/industries", "/work", "/pricing", "/about", "/contact", "/privacy", "/terms"];
  return [
    ...staticPaths.map((path) => ({ url: `${site.url}${path}`, lastModified: now })),
    ...services.map((service) => ({ url: `${site.url}/services/${service.slug}`, lastModified: now })),
    ...industries.map((industry) => ({ url: `${site.url}/industries/${industry.slug}`, lastModified: now })),
  ];
}
