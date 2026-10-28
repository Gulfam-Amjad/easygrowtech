"use client";

import { Mail, MessageCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { industries } from "@/data/industries";
import { mailtoLink, site, whatsappLink } from "@/data/site";

export function ContactForm() {
  const params = useSearchParams();
  const preset = params.get("industry") ?? "";
  const [industry, setIndustry] = useState(industries.some((item) => item.slug === preset) ? preset : "");
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const industryName = useMemo(
    () => industries.find((item) => item.slug === industry)?.name ?? "my business",
    [industry],
  );

  function body() {
    return [
      `Hi ${site.name}, I'd like a free demo.`,
      "",
      `Name: ${name}`,
      `Business: ${business}`,
      `Industry: ${industryName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      message || "Please show me how my business could look online.",
    ].join("\n");
  }

  function validate() {
    if (!name.trim() || !business.trim()) {
      setError("Add your name and business name so we know who the demo is for.");
      return false;
    }
    setError("");
    return true;
  }

  function onWhatsApp(event: FormEvent) {
    event.preventDefault();
    if (!validate()) return;
    window.open(whatsappLink(body()), "_blank", "noopener,noreferrer");
  }

  function onEmail(event: FormEvent) {
    event.preventDefault();
    if (!validate()) return;
    window.location.href = mailtoLink(`Free demo for ${business}`, body());
  }

  const field = "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-brand-500";

  return (
    <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8" onSubmit={onWhatsApp}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink-900">
          Your name
          <input className={`${field} mt-1.5`} value={name} onChange={(event) => setName(event.target.value)} required />
        </label>
        <label className="block text-sm font-medium text-ink-900">
          Business name
          <input className={`${field} mt-1.5`} value={business} onChange={(event) => setBusiness(event.target.value)} required />
        </label>
        <label className="block text-sm font-medium text-ink-900">
          Industry
          <select className={`${field} mt-1.5`} value={industry} onChange={(event) => setIndustry(event.target.value)}>
            <option value="">Select one</option>
            {industries.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-ink-900">
          Email
          <input type="email" className={`${field} mt-1.5`} value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label className="block text-sm font-medium text-ink-900 sm:col-span-2">
          Phone / WhatsApp
          <input className={`${field} mt-1.5`} value={phone} onChange={(event) => setPhone(event.target.value)} />
        </label>
        <label className="block text-sm font-medium text-ink-900 sm:col-span-2">
          What should the demo show?
          <textarea className={`${field} mt-1.5 min-h-28 resize-y`} value={message} onChange={(event) => setMessage(event.target.value)} />
        </label>
      </div>
      {error ? <p className="mt-4 text-sm text-rose-600">{error}</p> : null}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="submit" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white">
          <MessageCircle className="h-4 w-4" />
          Send on WhatsApp
        </button>
        <button type="button" onClick={onEmail} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-ink-900">
          <Mail className="h-4 w-4" />
          Send by email
        </button>
      </div>
      <p className="mt-4 text-center text-xs text-slate-500">Opens WhatsApp or your email app with the message ready. Nothing is stored on this site.</p>
    </form>
  );
}
