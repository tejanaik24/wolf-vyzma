# Vyzma AI — City SEO & GEO Strategy

## Goal
Rank #1 for AI agency, website building, and social media management services across all Tier 1 and Tier 2 Indian cities — both in Google search AND AI search (ChatGPT, Perplexity, AI Overviews).

---

## 1. City Targeting Plan

### Tier 1 (8 Metros — Launch First)
| City | State | Search Volume* |
|------|-------|---------------|
| Mumbai | Maharashtra | Highest |
| Delhi | Delhi | Highest |
| Bengaluru | Karnataka | Highest |
| Hyderabad | Telangana | High |
| Chennai | Tamil Nadu | High |
| Kolkata | West Bengal | High |
| Pune | Maharashtra | High |
| Ahmedabad | Gujarat | High |

### Tier 2 (30+ Cities — Phase 2)
Jaipur, Lucknow, Surat, Kochi, Bhopal, Indore, Chandigarh, Nagpur, Visakhapatnam, Vadodara, Thane, Agra, Nashik, Faridabad, Meerut, Rajkot, Varanasi, Srinagar, Aurangabad, Dhanbad, Amritsar, Allahabad (Prayagraj), Ranchi, Howrah, Coimbatore, Jabalpur, Gwalior, Vijayawada, Jodhpur, Madurai, Raipur, Kota, Guwahati, Mysore, Bhubaneswar, Tiruchirappalli

---

## 2. Service Lines (per city)

| Service | Slug | Target Keywords |
|---------|------|----------------|
| AI Agency | `/ai-agency-city` | "best AI agency in [city]" |
| Website Design | `/website-design-city` | "website design company in [city]" |
| Social Media Management | `/social-media-management-city` | "social media marketing agency [city]" |
| SEO Services | `/seo-services-city` | "SEO agency in [city]" |
| Digital Marketing | `/digital-marketing-city` | "digital marketing agency [city]" |
| Google Ads | `/google-ads-city` | "Google Ads agency [city]" |
| AI Chatbots | `/ai-chatbots-city` | "AI chatbot development [city]" |
| WhatsApp Marketing | `/whatsapp-marketing-city` | "WhatsApp marketing agency [city]" |

---

## 3. URL Structure

```
vyzma.in/
├── mumbai/
│   ├── ai-agency
│   ├── website-design
│   ├── social-media-management
│   ├── seo-services
│   ├── digital-marketing
│   ├── google-ads
│   ├── ai-chatbots
│   └── whatsapp-marketing
├── bangalore/
│   └── (same pattern)
└── hyderabad/
    └── (same pattern)
```

Total: 8 cities x 8 services = 64 pages (Phase 1)

---

## 4. Content Template (per city-service page)

### Uniqueness Rules
- **60%+ unique content per page** — city name swap alone is NOT enough
- Each page must include:
  - City-specific stats (local business density, digital adoption rate)
  - Local competitor landscape (other agencies in that city)
  - Local testimonials or case studies
  - City-specific challenges & solutions
  - Local pricing context or packages
  - Area-specific FAQ

### Page Structure (min 800 words)
```
H1: [Service] in [City] — Vyzma AI
Meta: Best [service] company in [city]. [Unique value prop]. Get a free consultation.

1. Intro (100 words) — City context + service relevance
2. Why [city] businesses need [service] (150 words) — Local data point
3. Our [service] approach (200 words) — Methodology adapted for local needs
4. Local success stories / case studies (150 words)
5. Why Vyzma AI for [city] businesses (100 words)
6. [Service] packages for [city] (100 words)
7. FAQ (3-5 city-specific questions)
8. CTA — Contact / Book consultation
```

---

## 5. Schema Strategy

### Per city-service page
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service] in [City]",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Vyzma AI",
    "url": "https://vyzma.in",
    "areaServed": {
      "@type": "City",
      "name": "[City]",
      "sameAs": "https://en.wikipedia.org/wiki/[City]"
    }
  },
  "areaServed": "[City], [State], India"
}
```

### City landing page
```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "AI & Digital Services in [City]",
  "itemListElement": [
    {"@type": "SiteNavigationElement", "name": "Website Design", "url": "..."},
    {"@type": "SiteNavigationElement", "name": "SEO Services", "url": "..."}
  ]
}
```

---

## 6. GEO / AI Search Strategy

### Citability Blocks (134-167 words each)
Every city page must contain 2-3 self-contained answer blocks that AI systems can cite directly. Format:

**"What is the best [service] agency in [city]?"** — 140 word block answering this

### Brand Mention Signals
- Create Wikipedia-style entity for Vyzma AI
- Get listed on: Justdial, Sulekha, UrbanPro, IndiaMART for each city
- Get mentioned in "top [service] in [city]" listicles

### ChatGPT Optimization
- Bing Places listing (powers ChatGPT search)
- YouTube channel with city-specific content
- Reddit presence in r/[city] subreddits

---

## 7. Internal Linking Architecture

```
Homepage
├── /mumbai (city hub)
│   ├── /mumbai/ai-agency
│   ├── /mumbai/website-design
│   └── ...
├── /bangalore (city hub)
│   └── ...
└── /blog (linking to city pages from relevant articles)
```

- Each city hub links to all 8 service pages
- Each service page cross-links to same service in nearby cities
- Blog posts link to relevant city-service pages
- Breadcrumbs: Home > [City] > [Service]

---

## 8. Implementation Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Migrate to Next.js (SSR for per-page OG tags, schema, meta)
- [ ] Create city data source (CSV: city name, state, population, stats, image)
- [ ] Build page template component
- [ ] Deploy Mumbai + Bengaluru city hubs (test)

### Phase 2: Tier 1 Launch (Week 3-4)
- [ ] All 8 metros x 8 services = 64 pages live
- [ ] City-specific OG images
- [ ] Sitemap update with all city URLs
- [ ] IndexNow submission for Bing/ChatGPT
- [ ] Submit to Justdial, Sulekha, UrbanPro for each city

### Phase 3: Tier 2 Expansion (Week 5-8)
- [ ] 30+ Tier 2 cities x top 4 services = 120+ pages
- [ ] Local citations and directory submissions
- [ ] City-specific blog content (10+ posts)
- [ ] Monitor indexing in GSC

### Phase 4: Authority (Month 3-6)
- [ ] Backlink building from city-specific directories
- [ ] "Best of" list placement strategy
- [ ] YouTube content per city
- [ ] ChatGPT/Perplexity citation tracking
- [ ] GEO score improvement

---

## 9. Quality Gates

| Check | Threshold | Action |
|-------|-----------|--------|
| Unique content per page | <60% | ❌ Block — rewrite template |
| Word count | <600 words | ⚠️ Add more city-specific content |
| Schema | Missing | ❌ Auto-generate from data |
| OG image | Missing/generic | ⚠️ Generate city-specific OG |
| Canonical | Not self-referencing | ❌ Fix template |
| City stats | Placeholder | ⚠️ Research real data |
| LCP | >4s mobile | ⚠️ Optimize images/lazy-load |

---

## 10. KPI Targets

| Metric | 3 Month | 6 Month | 12 Month |
|--------|---------|---------|----------|
| Indexed city pages | 50 | 150 | 300+ |
| City keyword rankings (top 10) | 20 | 80 | 200+ |
| Organic traffic (monthly) | +200% | +500% | +1000% |
| AI citations (ChatGPT/Perplexity) | 5 | 25 | 100+ |
| Domain Rating | 10 | 25 | 40+ |
| City-page conversion rate | 2% | 4% | 6% |

---

## 11. Directory Submission List (per city)

| Platform | Type | Priority |
|----------|------|----------|
| Justdial | Local directory | Critical |
| Sulekha | Local directory | Critical |
| UrbanPro | Service listing | High |
| IndiaMART | B2B directory | High |
| Google Business Profile | Local SEO | Critical |
| Bing Places | ChatGPT visibility | Critical |
| Apple Business Connect | Apple Maps | Medium |
| Practo (healthcare) | Vertical | If applicable |

---

## 12. Monthly SEO Workflow

| Week | Tasks |
|------|-------|
| 1 | Publish 10 new city pages + update sitemap |
| 2 | Submit to 5 local directories per new city + blog post |
| 3 | Monitor rankings in GSC, fix indexing issues |
| 4 | Performance audit, refresh stale pages, plan next batch |
