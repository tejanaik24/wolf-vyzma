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
_Auto-updated by nightly-update.ps1 on 2026-08-11_

**Last 5 commits:**
```
527ac1d Add Gmail signature image assets
279f524 feat: add UI/UX Design Agency in India blog post + update sitemap and llms.txt
c4b7920 SEO: fix keyword cannibalization + add UI/UX Design service
aaee58e fix: add Content-Security-Policy header (self + fonts + pexels)
399c64c fix: redirect www.vyzma.in root path to apex (catch-all missed bare /)
```

**TODO/FIXME found:**
```
None found.
```

**Last modified file:** wolf-vyzma\CLAUDE.md (modified 2026-08-10 23:01)
