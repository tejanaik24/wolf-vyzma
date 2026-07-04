# Vyzma AI — Wolf-Vyzma Project

## Status: LIVE
The live site at **vyzma.in** is deployed from **`C:\claude code\wolf-vyzma\`** (Vite SPA, React 19, Vite 8, GSAP, Tailwind).

## Live Site
- **Domain:** https://vyzma.in
- **Vercel project:** `vyzma-ai` (linked via CLI)
- **GitHub:** `tejanaik24/wolf-vyzma`
- **DNS:** GoDaddy nameservers, Vercel proxy

## Build & Deploy
```powershell
cd C:\claude code\wolf-vyzma
npm run build        # builds SPA + runs prerender (postbuild)
vercel --prod        # deploy to production
```

## Prerender (Postbuild)
- **Script:** `scripts/prerender.ts` — runs after `vite build`
- Generates `dist/blog/[slug]/index.html` per blog with:
  - Unique `<title>`, `<meta name="description">`
  - OG tags, Twitter cards
  - JSON-LD (Article + FAQPage + BreadcrumbList)
  - Prerendered HTML inside `<div id="root">`
- **Why:** ChatGPT's crawler doesn't run JS — prerender makes blog content visible to AI crawlers
- **Data source:** `src/lib/blog-data.ts` (single source of truth)

## Blog Posts (16 total)
| Slug | Topic |
|------|-------|
| `what-is-vyzma-ai` | Intro to Vyzma AI |
| `google-ai-hub-vizag-businesses-2026` | Google AI Hub Vizag |
| `best-ai-agency-visakhapatnam-2026` | AI Agency Vizag |
| `ai-automation-vizag-businesses-2026` | AI Automation Vizag |
| `ai-chatbots-visakhapatnam-2026` | AI Chatbots Vizag |
| `ai-for-real-estate-vizag-2026` | AI for Real Estate |
| `ai-for-pharma-companies-vizag-2026` | AI for Pharma |
| `best-ai-agency-bangalore-2026` | AI Agency Bangalore |
| `digital-marketing-agency-visakhapatnam-2026` | Digital Marketing Vizag |
| `seo-agency-visakhapatnam-2026` | SEO Agency Vizag |
| `google-ads-agency-visakhapatnam-2026` | Google Ads Vizag |
| `website-design-visakhapatnam-2026` | Web Design Vizag |
| `whatsapp-marketing-vizag-2026` | WhatsApp Marketing Vizag |
| `digital-marketing-visakhapatnam-2026` | Digital Marketing Vizag |
| `seo-is-dead-in-india-ai-overviews-2026` | SEO is Dead in India (AI Overviews) |
| `how-to-choose-ai-agency-india-2026` | How to Choose AI Agency India |

## Adding a New Blog
1. Add entry to `src/lib/blog-data.ts` (canonical source)
2. `npm run build` to test prerender
3. `vercel --prod` to deploy

## Key Files
| Path | Purpose |
|------|---------|
| `src/lib/blog-data.ts` | Blog data source of truth |
| `scripts/prerender.ts` | Postbuild prerender script |
| `src/pages/BlogPostPage.tsx` | Client-side blog renderer |
| `src/pages/BlogListingPage.tsx` | Blog listing page |
| `index.html` | SPA shell template |
| `CLAUDE.md` | Tech stack & dev instructions |

## Tech Stack
- React 19 + TypeScript + Vite 8
- GSAP 3.14 (ScrollTrigger, useGSAP)
- Tailwind CSS v4
- React Icons
