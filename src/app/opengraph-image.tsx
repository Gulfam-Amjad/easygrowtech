import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "EasyGrowTech — websites, Shopify stores and AI automation for local businesses";

export default function OpenGraphImage() {
  return ogImage(
    "Websites, Shopify & AI that grow local businesses",
    "For dentists, clinics, salons, cafes, gyms and service brands.",
  );
}
