# Vyzma AI — Project Memory

## Current Page Order (top to bottom)
1. **Navbar** — Sticky nav with audio toggle, scroll hide/show, vyzma logo
2. **Hero** — Full-screen video carousel with GSAP clip-path reveal (KEPT original)
3. **About** — Wolf video clip mask "The future of intelligence is here" (KEPT original)
4. **Logos3** — Auto-scrolling logo carousel (KEPT original)
5. **VyzmaParallaxSlides** — 4 slides with glow borders, 3D scroll parallax (KEPT original)
6. **AboutSection** — NEW from Jack design: 4 corner 3D images + animated char-by-char text + ContactButton
7. **ServicesSection** — NEW from Jack design: white bg, 5 services list (3D Modeling, Rendering, Motion Design, Branding, Web Design)
8. **ProjectsSection** — NEW from Jack design: 3 sticky-stacking project cards with images

## Components Deleted
- `features.tsx` — reason, create, connect, more coming soon (bento grid)
- `story.tsx` — entrance.webp (throne photo), 3D tilt
- `contact.tsx` — swordman images, CTA
- `footer.tsx` — copyright, social links
- `marquee-section.tsx` — was added then removed

## New Components Created
| File | Based on |
|---|---|
| `src/components/about-section.tsx` | Jack portfolio About (4 corner images + AnimatedText) |
| `src/components/services-section.tsx` | Jack portfolio Services (5 items, white bg) |
| `src/components/projects-section.tsx` | Jack portfolio Projects (3 sticky-stacking cards) |
| `src/components/wolf-slides-section.tsx` | Wolf AI parallax slides (currently NOT imported) |
| `src/components/ui/fade-in.tsx` | Framer Motion whileInView wrapper |
| `src/components/ui/magnet.tsx` | Mouse-following magnetic effect |
| `src/components/ui/animated-text.tsx` | Char-by-char scroll opacity reveal |
| `src/components/ui/contact-button.tsx` | Gradient pill button (purple/orange) |
| `src/components/ui/live-project-button.tsx` | Ghost outline pill button |

## CSS Changes
- Added Kanit font import (Google Fonts 300-900)
- Changed global background: `#0C0C0C` with Kanit as default font
- Added `.hero-gradient` class (gradient text for Jack sections)
- Preserved all original vyzma CSS classes, @theme tokens, font definitions, and animations

## Known Issues
- Wolf video GSAP scroll clip effect (about.tsx) — verify it works
- Dev server needs to be restarted to see changes
- `wolf-slides-section.tsx` exists but is NOT in app.tsx (orphaned)

## Assets Added to `public/img/`
- `wolf-ai-automation.png` — from Downloads
- `wolf-ai-content.png` — from Downloads
- `wolf-ai-film-making.png` — from Downloads
- `wolf-voice-agent.png` — from Downloads
- `wolf-chatbot.png` — from Downloads

## Vision Agent
- `C:\claude code\vision.ps1` — Uses Ollama `gemma4:e4b` to describe images
- Usage: `powershell -ExecutionPolicy Bypass -File "C:\claude code\vision.ps1" -ImagePath "<path>"`
- Can also use direct API: base64 encode image → POST to `http://localhost:11434/api/generate` with model `gemma4:e4b`
