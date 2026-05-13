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
