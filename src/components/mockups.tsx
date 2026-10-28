import type { MockKind } from "@/data/work";

const themes: Record<MockKind, { bar: string; accent: string; soft: string; title: string; url: string }> = {
  dental: { bar: "bg-sky-600", accent: "text-sky-700", soft: "bg-sky-50", title: "BrightSmile Dental", url: "brightsmile.dental" },
  cafe: { bar: "bg-amber-700", accent: "text-amber-800", soft: "bg-amber-50", title: "The Daily Grind", url: "dailygrind.cafe" },
  salon: { bar: "bg-rose-500", accent: "text-rose-600", soft: "bg-rose-50", title: "Bloom Beauty", url: "bloombeauty.studio" },
  shop: { bar: "bg-ink-900", accent: "text-ink-900", soft: "bg-slate-50", title: "Luna Apparel", url: "lunaapparel.com" },
  chat: { bar: "bg-brand-600", accent: "text-brand-700", soft: "bg-brand-50", title: "CarePlus", url: "careplus.clinic" },
  home: { bar: "bg-orange-600", accent: "text-orange-700", soft: "bg-orange-50", title: "Brooks HVAC", url: "brookshvac.com" },
};

export function SiteMock({ kind, className = "" }: { kind: MockKind; className?: string }) {
  const theme = themes[kind];

  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl shadow-ink-950/10 ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
        <span className="ml-2 truncate rounded-full bg-white px-3 py-0.5 text-[11px] text-slate-400">{theme.url}</span>
      </div>
      {kind === "chat" ? <ChatScreen /> : <SiteScreen theme={theme} kind={kind} />}
    </div>
  );
}

function SiteScreen({
  theme,
  kind,
}: {
  theme: (typeof themes)[MockKind];
  kind: MockKind;
}) {
  return (
    <div className="bg-white p-4">
      <div className="flex items-center justify-between">
        <p className={`text-sm font-bold ${theme.accent}`}>{theme.title}</p>
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold text-white ${theme.bar}`}>Book</span>
      </div>
      <div className={`mt-3 rounded-xl ${theme.soft} p-4`}>
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
          {kind === "shop" ? "New collection" : kind === "cafe" ? "Today's menu" : "Now booking"}
        </p>
        <p className="mt-1 font-display text-lg font-bold leading-tight text-ink-900">
          {kind === "shop" ? "Summer linen, quietly priced." : kind === "cafe" ? "Coffee, cakes & a table with your name." : kind === "home" ? "Cooling fixed today." : "Look sharper. Book faster."}
        </p>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["Services", "Gallery", "Reviews"].map((label) => (
          <div key={label} className="rounded-lg border border-slate-100 p-2">
            <div className={`mb-2 h-8 rounded-md ${theme.soft}`} />
            <p className="text-[10px] font-medium text-slate-500">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatScreen() {
  return (
    <div className="space-y-2 bg-slate-50 p-4">
      <p className="text-xs font-semibold text-ink-900">CarePlus Assistant</p>
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-xs leading-relaxed text-slate-600 shadow-sm">
        Hi! I can help with timings, fees and appointments.
      </div>
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-ink-900 px-3 py-2 text-xs text-white">
        Is Dr. Sara free tomorrow evening?
      </div>
      <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-xs leading-relaxed text-slate-600 shadow-sm">
        Yes — 5 PM to 8 PM. I can hold 6 PM for you.
      </div>
    </div>
  );
}
