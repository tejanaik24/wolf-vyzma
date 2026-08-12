# Vyzma AI — Website

Next-generation AI platform landing page built with React, GSAP, Three.js, and Tailwind CSS.

## Tech Stack

- React 19 + TypeScript
- Vite 8
- GSAP 3.14 (ScrollTrigger, useGSAP)
- Tailwind CSS v4
- React Icons

## Dev

```bash
npm install --legacy-peer-deps
npm run dev        # local dev at http://localhost:5173
npm run build      # production build
npm run preview    # preview production build
```

## Structure

| Path | Description |
|---|---|
| `src/components/` | All page sections (hero, about, features, story, contact, footer) |
| `src/constants/index.ts` | Nav items, social links, video URLs |
| `src/index.css` | Tailwind theme, fonts, utility classes, animations |
| `public/videos/` | Custom video assets (vyzma hero, wolf) |
| `src/lib/utils.ts` | `cn()` helper (clsx + tailwind-merge) |

## Sections (top to bottom)

1. **Navbar** — Sticky nav with audio toggle, scroll hide/show
2. **Hero** — Full-screen video carousel with clip-path reveal
3. **About** — "The future of intelligence is here" with scroll-expanding clip mask (wolf video)
4. **Features** — Bento grid with 3D tilt hover (automate, reason, create, connect)
5. **Story** — 3D perspective image + animated title
6. **Contact** — CTA section
7. **Footer** — Social links, privacy, terms

## Key Customizations

- Brand: vyzma AI
- Hero videos: local `/videos/vyzma-hero-1.mp4` (#1 of 4)
- About background: `/videos/wolf-hero.mp4`

## Deploy

Vercel token is stored in `.env` as `VERCEL_TOKEN` (not committed to git).

```powershell
npm run build
vercel --prod --token $env:VERCEL_TOKEN
```

## Active tasks
See `VYZMA_CITY_SEO_STRATEGY.md` and `VYZMA_MEMORY.md` in this repo for the current SEO/content roadmap.

## Do not touch
This is the live production site (`vyzma.in`) for the business — always verify changes locally before deploying.

## Last session notes
_Auto-updated by nightly-update.ps1 on 2026-08-12_

**Last 5 commits:**
```
6c8931f feat(seo): homepage internal authority links for Google AI Hub Vizag and Best AI Agency India
77342f0 docs: update dependencies and folder structure in README
aaf28d1 feat(growth): indexnow auto-ping, sticky conversion CTA, and canonical schema phone fixes
ec1b2b6 feat(seo): dual-dispatch lead capture, 112-url sitemap, comparison pages and research reports
527ac1d Add Gmail signature image assets
```

**TODO/FIXME found:**
```
None found.
```

**Last modified file:** wolf-vyzma\src\pages\HomePage.tsx (modified 2026-08-12 02:12)
