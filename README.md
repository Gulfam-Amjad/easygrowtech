# EasyGrowTech

Marketing site for EasyGrowTech — websites, Shopify stores, AI chatbots and automation for local businesses.

Built with Next.js, TypeScript and Tailwind CSS. It is fully static, so Vercel detects the framework and deploys it with no environment variables.

## Edit the business details

Open [`src/data/site.ts`](src/data/site.ts) and change:

- `email`, `whatsapp` (digits only, country code, no `+`), `phoneDisplay`
- `url` once your domain is connected
- `location`, social links

Other copy lives next to it:

| File | What it controls |
| --- | --- |
| `src/data/services.ts` | Service pages |
| `src/data/industries.ts` | Niche landing pages (send these URLs in outreach) |
| `src/data/pricing.ts` | Packages and the comparison table |
| `src/data/team.ts` | People. Optional photo: put a file in `public/team` and set `image` |
| `src/data/testimonials.ts` | Reviews |
| `src/data/faq.ts` | Homepage questions |
| `src/data/work.ts` | Portfolio previews |

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy on Vercel

1. Import `Gulfam-Amjad/easygrowtech` in the Vercel dashboard.
2. Framework preset: Next.js. Leave the build command as `next build`.
3. Deploy. No env vars are required.
4. After you add a domain, set `url` in `src/data/site.ts` so sitemaps and share images use it.

The contact form opens WhatsApp (`wa.me`) or the visitor's email app with a prefilled message. It does not send mail by itself.

## Outreach links

- Dental: `/industries/dental`
- Clinics: `/industries/medical-clinics`
- Salons: `/industries/salons`
- Restaurants & cafes: `/industries/restaurants-cafes`
- Gyms: `/industries/gyms-fitness`
- Home services: `/industries/home-services`
- Auto shops: `/industries/auto-shops`
- Law firms: `/industries/law-firms`
- Real estate: `/industries/real-estate`
- Hotels: `/industries/hotels`
- Retail: `/industries/retail`

Add `?industry=dental` (or any slug above) to `/contact` to preselect that industry.
