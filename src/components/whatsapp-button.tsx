import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-900/30 transition hover:brightness-110"
      aria-label="Chat on WhatsApp"
    >
      <span className="relative grid h-5 w-5 place-items-center">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-white/70" />
        <MessageCircle className="relative h-5 w-5" />
      </span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
