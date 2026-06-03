# Vyzma AI — Project Memory

## Overview
Vyzma AI is India's premier AI agency website. The live site at **vyzma.in** is a **Vite SPA** (React 19, TypeScript, Vite 8, GSAP, Tailwind CSS v4).

There are two codebases:
- **`new vyzma/`** — Vite SPA (LIVE at vyzma.in, deployed via Vercel project `vyzma-ai`)
- **`vyzma-next/`** — Next.js 16.2.3 app (NOT deployed, has full SSR, OG images, blog, services)

---

## Live Site: `new vyzma/` (Vite SPA)

### Tech Stack
- React 19 + TypeScript + Vite 8
- GSAP 3.14 (ScrollTrigger, useGSAP) + Framer Motion
- Tailwind CSS v4 + PostCSS
- React Router DOM v7 (client-side routing)
- Embla Carousel, Lucide React

### Page Routes (client-side, same static shell)
| Route | Component |
|-------|-----------|
| `/` | HomePage (14 sections) |
| `/blog` | BlogListingPage |
| `/blog/:slug` | BlogPostPage (15 posts) |

### HomePage Sections
1. Hero — Full-screen video carousel with clip-path reveal
2. TrustBar — Social proof/trust indicators
3. About — Wolf video clip mask "The future of intelligence is here"
4. Logos3 — Auto-scrolling logo carousel
5. VyzmaParallaxSlides — 4 slides with glow borders, 3D scroll parallax
6. PainPointsSection — Customer pain points
7. ServicesSection — AI services list
8. IndustriesSection — Target industries
9. HowItWorks — Process explanation
10. WhyVyzma — Differentiators
11. AboutSection — Company info
12. FaqSection — FAQ accordion
13. ContactSection — Contact form/CTA
14. Offices — Office locations (Visakhapatnam, Bangalore)

### Key Files
| File | Purpose |
|------|---------|
| `src/pages/HomePage.tsx` | All sections |
| `src/pages/BlogPostPage.tsx` | Blog post with dynamic OG + FAQPage/BlogPosting/BreadcrumbList schema |
| `src/pages/BlogListingPage.tsx` | Blog list with dynamic meta |
| `src/constants/index.ts` | Nav items, services data, social links, video URLs |
| `src/lib/blog-data.ts` | 15 blog posts with full content, FAQ data |
| `index.html` | Static shell with OG tags, schema.org JSON-LD, canonical, Twitter Cards |

---

## SEO & GEO Status (Cross-checked against live 2026-06-04)

### Working Well

| Feature | Status | Notes |
|---------|--------|-------|
| Blog post prerendering | ✅ | `prerender.cjs` generates unique HTML per blog with correct title, OG, canonical, schema |
| BlogPostPage title/desc/OG/canonical | ✅ | Unique per post in prerendered HTML |
| BreadcrumbList schema | ✅ | Already on every blog post |
| FAQPage schema | ✅ | Already on blog posts |
| BlogPosting schema | ✅ | Already present |
| Organization + WebSite + LocalBusiness schema | ✅ | In index.html shell — repeats on every page (minor duplication) |
| robots.txt | ✅ | Allows all major AI crawlers |
| Sitemap.xml | ✅ | 17 URLs (home + blog + 15 posts) |
| llms.txt | ✅ | Configured for AI crawlers |
| pricing.md | ✅ | Available for AI agents |
| GA4 tracking | ✅ | G-XCZLBPQYX6 active |

### Confirmed Gaps (Verified live)

| Gap | Severity | Detail |
|-----|----------|--------|
| OG image generic on ALL pages | 🔴 High | All blog posts + homepage use same `og-homepage.png` → kills social share CTR |
| No social media profiles | 🔴 High | sameAs only has GitHub. No LinkedIn/Twitter/Instagram/Facebook |
| Zero external backlinks | 🔴 High | Only Sulekha directory. No domain authority signals |
| Sitemap only 17 URLs | 🔴 High | No service pages, about, contact in sitemap |
| No metro city content | 🔴 High | Only Vizag + Bangalore. Missing: Mumbai, Delhi, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad |
| `/about`, `/contact`, `/services/*` are SPA shells | 🟡 Medium | Routes work in React but HTML shell has homepage OG — social crawlers see wrong data |
| No Service schema | 🟡 Medium | Only Organization/WebSite/LocalBusiness — missing Service type for offerings |
| No Bing IndexNow | 🟡 Medium | IndexNow speeds up Bing crawl — not set up |
| No hreflang en-IN | 🟡 Medium | lang="en" set but no en-IN locale signal |
| No /terms, /privacy pages | 🟡 Medium | Missing trust signal pages |

### SPA Limitation Details
- **Blog posts**: prerender.cjs generates unique static HTML per blog — correct title, OG, canonical, schema. Google and social crawlers see correct metadata.
- **Non-blog routes** (`/about`, `/contact`, `/services/*`): Serve the same `index.html` shell. Google renders JS and sees React content; social crawlers see homepage OG for all.
- Fix: deploy `vyzma-next/` (Next.js app with full SSR).

---

## Deployment

### Vercel Project
- **Project name:** `vyzma-ai`
- **Team:** `tejasolryder24-4493s-projects`
- **Domain:** vyzma.in
- **Alias:** https://vyzma.in
- **GitHub:** Not connected (manual `vercel --prod` from local)
- **Build:** `npm run build` (tsc + vite)
- **Output dir:** `dist`

### Deploy command
```powershell
cd "C:\claude code\new vyzma"
vercel --prod
```

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Audio Assets
- `public/audio/` — Loop audio files  
- `public/videos/` — Hero videos (hero-1.mp4 through hero-4.mp4), service-wolf.mp4  
- `public/img/` — 33 images (service icons, logos, wolf assets, project images)

---

## vyzma-next/ (Next.js 16.2.3 - NOT LIVE)

### What it has that the SPA doesn't
- Full SSR with per-page metadata, OG tags, OG images
- 15 blog posts + 7 service pages + about + contact + terms + privacy
- 27 OG images (5 user-created from Downloads + service/built-in)
- Organization + LocalBusiness + WebSite schema in root layout
- Custom sitemap.ts
- llms.txt with all real pages

### Deployment
- Vercel project: `vyzma-next` (id `prj_06AIOo0meHchJ2EJv319AFR8fmFa`)
- GitHub remote: `https://github.com/tejanaik24/vyzma-next.git`
- **Domain NOT assigned** — was briefly deployed (2026-06-03) then reverted back to Vite SPA

---

## What's Pending / Future Work

### High Priority
- [ ] Deploy Next.js app to vyzma.in for proper per-page OG tags, SSR, and blog indexing
- [ ] Add OG images for blog posts (currently just uses homepage OG image)
- [ ] Add /terms and /privacy pages (5 OG images exist in Downloads but no routed pages)

### Medium Priority
- [ ] Connect GitHub repo to Vercel for auto-deploy
- [ ] Add Google Search Console verification
- [ ] Add Google Analytics / tracking
- [ ] Set up IndexNow for Bing

### Low Priority / Nice to Have
- [ ] Blog archive/pagination for 15+ posts
- [ ] Author pages in blog
- [ ] Category/Tag filtering on blog
- [ ] Service pages with detailed descriptions
- [ ] Case studies / portfolio pages

### City SEO (see VYZMA_CITY_SEO_STRATEGY.md)
- [ ] Phase 1: Launch Mumbai + Bengaluru city hubs (8 services each)
- [ ] Phase 2: All 8 metros x 8 services = 64 pages
- [ ] Phase 3: 30+ Tier 2 cities x top 4 services = 120+ pages
- [ ] Submit to Justdial, Sulekha, UrbanPro per city
- [ ] Bing Places + Google Business Profile per metro
- [ ] City-specific OG images for all pages
- [ ] Monthly blog posts targeting city + service keywords

---

## City SEO & GEO Strategy (for blog/content writers)

**Full plan:** `VYZMA_CITY_SEO_STRATEGY.md`

Every blog post should reference **one or more target cities** and **one or more services** from the city strategy.

### Target Cities (8 Metros + 30+ Tier 2)
| Tier | Cities |
|------|--------|
| Tier 1 (Metros) | Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad |
| Tier 2 | Jaipur, Lucknow, Surat, Kochi, Bhopal, Indore, Chandigarh, Nagpur, Visakhapatnam, Vadodara, Thane, Agra, Nashik, Faridabad, Meerut, Rajkot, Varanasi, Srinagar, Aurangabad, Dhanbad, Amritsar, Prayagraj, Ranchi, Howrah, Coimbatore, Jabalpur, Gwalior, Vijayawada, Jodhpur, Madurai, Raipur, Kota, Guwahati, Mysore, Bhubaneswar, Tiruchirappalli |

### Services to cross-link per blog
- AI Agency, Website Design, Social Media Management, SEO, Digital Marketing, Google Ads, AI Chatbots, WhatsApp Marketing

### Blog → City SEO Rules
1. Every blog must mention at least 1-2 cities naturally in content
2. Link to the corresponding city-service page (e.g. `/mumbai/website-design`)
3. Include a 134-167 word "answer block" AI systems can cite (question-based H2)
4. Add city-specific data point (stat, local trend, local reference)
5. Internal link to 2-3 related city pages

### Phase 1 Cities (focus blog content on these first)
Mumbai, Bengaluru, Hyderabad, Pune, Delhi, Chennai

---

## OG Images (User-Created, in Downloads)
| File | Destination Page | Status |
|------|-----------------|--------|
| `about vyzma.png` | `/about` | ❌ No route in SPA |
| `contact vyzma.png` | `/contact` | ❌ No route in SPA |
| `terms of service.png` | `/terms` | ❌ No route in SPA |
| `privacy policy.png` | `/privacy` | ❌ No route in SPA |
| `vyzma ai blog.png` | `/blog` | ❌ SPA shares homepage OG |
| Files also copied to `vyzma-next/public/og-*.png` | | ✅ Available for Next.js deploy |
