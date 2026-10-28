import { getIndustry, industries } from "@/data/industries";
import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "EasyGrowTech industry page";
export const dynamic = "force-static";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  return ogImage(
    industry?.headline ?? "Websites & AI for local businesses",
    industry ? `Built for ${industry.plural}. Free demo, no commitment.` : "Free demo, no commitment.",
  );
}
