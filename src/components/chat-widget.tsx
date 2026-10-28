"use client";

import { Bot, Send, X } from "lucide-react";
import { useMemo, useState } from "react";
import { site, whatsappLink } from "@/data/site";

type Message = { from: "bot" | "user"; text: string };

const starters = ["What do you offer?", "How much?", "Is the demo free?", "Which industries?"];

function replyTo(input: string) {
  const text = input.toLowerCase();
  if (/price|cost|how much|pricing/.test(text)) {
    return "Starter websites begin at $299, Shopify at $499, and AI chatbots at $199. After a free demo we send a fixed quote — no hidden fees.";
  }
  if (/demo|free/.test(text)) {
    return "Yes. The demo is free, with no payment and no commitment. If you like it, we build the full version. Tap WhatsApp and tell us your business name.";
  }
  if (/industr|dentist|salon|cafe|restaurant|gym|shopify|clinic/.test(text)) {
    return "We work with dentists, clinics, salons, restaurants, cafes, gyms, auto shops, home services, law firms, real estate, hotels and retail brands.";
  }
  if (/whatsapp|chatbot|bot|ai/.test(text)) {
    return "Our AI assistant answers prices, hours and bookings 24/7 on your website and WhatsApp, then hands complex chats to a human.";
  }
  if (/time|long|how fast/.test(text)) {
    return "Most websites launch in 5–10 days. Shopify stores take 7–14 days, and chatbots 3–7 days.";
  }
  return `We build websites, Shopify stores and AI automation for local businesses. Tell us your business type, or message ${site.name} on WhatsApp for a free demo.`;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi, I'm the EasyGrowTech demo assistant. Ask me about websites, Shopify, AI chatbots or a free demo.",
    },
  ]);

  const suggestions = useMemo(() => (messages.length < 3 ? starters : []), [messages.length]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((current) => [...current, { from: "user", text: trimmed }, { from: "bot", text: replyTo(trimmed) }]);
    setInput("");
  }

  return (
    <div className="fixed bottom-20 right-5 z-40 sm:bottom-24">
      {open ? (
        <div className="mb-3 flex h-[min(70vh,460px)] w-[min(calc(100vw-2.5rem),360px)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-ink-950 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-400 text-ink-950">
                <Bot className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold">EasyGrowTech AI</p>
                <p className="text-[11px] text-brand-200">Demo · scripted replies</p>
              </div>
            </div>
            <button type="button" aria-label="Close chat" onClick={() => setOpen(false)} className="rounded-full p-1 hover:bg-white/10">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((message, index) => (
              <p
                key={`${message.from}-${index}`}
                className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  message.from === "bot" ? "bg-white text-slate-700 shadow-sm" : "ml-auto bg-ink-900 text-white"
                }`}
              >
                {message.text}
              </p>
            ))}
            {suggestions.length > 0 ? (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => send(item)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:border-brand-400"
                  >
                    {item}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <form
            className="flex items-center gap-2 border-t border-slate-100 p-3"
            onSubmit={(event) => {
              event.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about a free demo"
              className="h-10 flex-1 rounded-full border border-slate-200 px-3 text-sm outline-none focus:border-brand-400"
              aria-label="Message"
            />
            <button type="submit" className="grid h-10 w-10 place-items-center rounded-full bg-ink-900 text-white" aria-label="Send">
              <Send className="h-4 w-4" />
            </button>
          </form>
          <a href={whatsappLink("Hi EasyGrowTech! I'd like a free demo.")} target="_blank" rel="noreferrer" className="border-t border-slate-100 px-4 py-2 text-center text-xs font-semibold text-brand-700">
            Continue on WhatsApp
          </a>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="ml-auto flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-ink-900 shadow-xl"
        aria-expanded={open}
      >
        <Bot className="h-5 w-5 text-brand-600" />
        Ask AI
      </button>
    </div>
  );
}
