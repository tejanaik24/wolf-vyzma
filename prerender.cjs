const fs = require("fs");
const path = require("path");

const SITE_URL = "https://vyzma.in";
const OG_FALLBACK = `${SITE_URL}/og-homepage.png`;

const cityOg = (slug) => {
  const svg = path.join(__dirname, "public", `og-${slug}.svg`);
  return fs.existsSync(svg) ? `${SITE_URL}/og-${slug}.svg` : OG_FALLBACK;
};

// Keep in sync with src/lib/city-data.ts
const CITIES = [
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra", tagline: "India's Financial & Commercial Capital", population: "12.6M+" },
  { slug: "delhi", name: "Delhi", state: "Delhi NCR", tagline: "India's Capital & Political Hub", population: "19M+" },
  { slug: "bangalore", name: "Bengaluru", state: "Karnataka", tagline: "India's Silicon Valley & Tech Capital", population: "8.4M+" },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", tagline: "The City of Pearls & Tech Innovation", population: "6.9M+" },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu", tagline: "India's Manufacturing & Auto Hub", population: "7.1M+" },
  { slug: "kolkata", name: "Kolkata", state: "West Bengal", tagline: "The City of Joy — Eastern India's Business Hub", population: "4.5M+" },
  { slug: "pune", name: "Pune", state: "Maharashtra", tagline: "India's Education & Automotive Hub", population: "3.1M+" },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", tagline: "India's Commercial & Industrial Powerhouse", population: "5.6M+" },
  { slug: "vizag", name: "Visakhapatnam", state: "Andhra Pradesh", tagline: "The City of Destiny — Emerging Tech Hub", population: "2.0M+" },
  { slug: "jaipur", name: "Jaipur", state: "Rajasthan", tagline: "The Pink City — Rajasthan's Business Capital", population: "3.0M+" },
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh", tagline: "The City of Nawabs — Uttar Pradesh's Growth Engine", population: "2.8M+" },
  { slug: "surat", name: "Surat", state: "Gujarat", tagline: "India's Diamond & Textile Capital", population: "4.5M+" },
  { slug: "kochi", name: "Kochi", state: "Kerala", tagline: "The Queen of the Arabian Sea — Kerala's Tech Hub", population: "2.1M+" },
  { slug: "bhopal", name: "Bhopal", state: "Madhya Pradesh", tagline: "The City of Lakes — Central India's Tech Hub", population: "1.8M+" },
  { slug: "indore", name: "Indore", state: "Madhya Pradesh", tagline: "India's Cleanest City & Commercial Hub", population: "2.0M+" },
  { slug: "chandigarh", name: "Chandigarh", state: "Chandigarh", tagline: "India's Best Planned City — IT & Innovation Hub", population: "1.0M+" },
  { slug: "nagpur", name: "Nagpur", state: "Maharashtra", tagline: "The Orange City — India's Geographic Center", population: "2.4M+" },
  { slug: "coimbatore", name: "Coimbatore", state: "Tamil Nadu", tagline: "The Manchester of South India", population: "1.0M+" },
  { slug: "bhubaneswar", name: "Bhubaneswar", state: "Odisha", tagline: "The Temple City — Eastern India's Tech Hub", population: "1.0M+" },
  { slug: "guwahati", name: "Guwahati", state: "Assam", tagline: "The Gateway to Northeast India", population: "1.0M+" },
];

const CITY_SERVICES = [
  { slug: "ai-agency", name: "AI Agency Services", shortName: "AI Agency", keywords: "AI agency, artificial intelligence" },
  { slug: "website-design", name: "Website Design & Development", shortName: "Website Design", keywords: "website design, web development" },
  { slug: "social-media-management", name: "Social Media Management", shortName: "Social Media Management", keywords: "social media management" },
  { slug: "seo-services", name: "SEO & AI Search Optimization", shortName: "SEO Services", keywords: "SEO services" },
  { slug: "digital-marketing", name: "Digital Marketing", shortName: "Digital Marketing", keywords: "digital marketing" },
  { slug: "google-ads", name: "Google Ads Management", shortName: "Google Ads", keywords: "Google Ads" },
  { slug: "ai-chatbots", name: "AI Chatbots & Automation", shortName: "AI Chatbots", keywords: "AI chatbots" },
  { slug: "whatsapp-marketing", name: "WhatsApp Marketing", shortName: "WhatsApp Marketing", keywords: "WhatsApp marketing" },
];

const SERVICE_PAGES = [
  { slug: "ai-chatbots", name: "AI Chatbots", description: "Custom AI chatbot development for Indian businesses. Website chatbots, WhatsApp bots, and AI-powered customer support automation." },
  { slug: "workflow-automation", name: "Workflow Automation", description: "AI-powered workflow automation for Indian businesses. Automate repetitive tasks, connect tools, and scale operations." },
  { slug: "voice-ai", name: "Voice AI", description: "Voice AI solutions for Indian businesses. Multi-language voice assistants, IVR replacement, and AI phone agents." },
  { slug: "seo", name: "SEO & AI Search", description: "SEO and AI search optimization for Indian businesses. Rank in Google, AI Overviews, ChatGPT, and Perplexity." },
  { slug: "website-design", name: "Website Design", description: "Next.js website design and development for Indian businesses. High-performance, AI-powered websites." },
  { slug: "google-ads", name: "Google Ads", description: "Google Ads management for Indian businesses. AI-optimized PPC campaigns, Local Services Ads, and smart bidding." },
  { slug: "whatsapp-marketing", name: "WhatsApp Marketing", description: "WhatsApp marketing for Indian businesses. AI-powered broadcast campaigns, chatbots, and Business API integration." },
  { slug: "performance-marketing", name: "Performance Marketing", description: "Performance marketing for Indian businesses. Meta Ads, Google Ads, and AI-optimized digital advertising." },
];

const BLOG_POSTS = [
  {
    slug: "what-is-vyzma-ai",
    title: "Vyzma AI Review 2026: India's Best AI Agency or Just Hype?",
    metaTitle: "Vyzma AI Review 2026: India's Best AI Agency? | Vyzma AI",
    metaDescription: "Honest Vyzma AI review 2026. Services, pricing, real results, and how Vyzma compares to other Indian AI agencies serving Vizag, Bangalore, and beyond.",
    date: "2026-05-16",
    category: "About Vyzma AI",
    faq: [
      { question: "What is Vyzma AI?", answer: "Vyzma AI is India's premier AI agency headquartered in Visakhapatnam (Vizag) and Bangalore. Vyzma AI builds AI chatbots, workflow automation, SEO and AI search optimisation, voice AI agents, custom AI development, website design, Google Ads, and Meta Ads for Indian businesses." },
      { question: "Where is Vyzma AI located?", answer: "Vyzma AI has offices in Visakhapatnam (Vizag), Andhra Pradesh, and Bangalore, Karnataka. The company serves clients across India remotely with deep local knowledge of both these markets." },
      { question: "What services does Vyzma AI offer?", answer: "Vyzma AI offers eight services: AI chatbots, workflow automation, SEO and AI search (AEO/GEO), voice AI, custom AI development, website design with Next.js, Google Ads management, and Meta Ads (Facebook & Instagram advertising)." },
      { question: "How much does Vyzma AI charge?", answer: "Vyzma AI pricing varies by service. AI chatbot setup starts from Rs 50,000 one-time with monthly retainers based on usage. Workflow automation projects range from Rs 75,000 to Rs 5L depending on complexity. SEO and ads are monthly retainers." },
      { question: "How do I contact Vyzma AI?", answer: "You can contact Vyzma AI via the website at vyzma.in, by email at vyzmaai.in@gmail.com, or by WhatsApp at +91-8886720908." }
    ]
  },
  {
    slug: "google-ai-hub-vizag-businesses-2026",
    title: "Google AI Hub Vizag 2026: Latest Announcement, Location & What It Means for Local Businesses",
    metaTitle: "Google AI Hub Vizag 2026: Latest Announcement & Location | Vyzma AI",
    metaDescription: "Google AI Hub Vizag 2026 announcement: Location in Rushikonda IT corridor, what it offers Vizag businesses, and how your company can leverage Gemini AI, Cloud credits, and Google's infrastructure.",
    date: "2026-05-12",
    category: "AI Technology",
    faq: [
      { question: "What exactly is Google AI Hub Vizag?", answer: "Google AI Hub Vizag is Google's initiative to make AI infrastructure, tools, and expertise accessible to businesses in Visakhapatnam." },
      { question: "How can small businesses in Vizag afford Google AI tools?", answer: "Google AI tools operate on pay-as-you-go pricing with no upfront costs. Small businesses can start with Gemini API for as little as Rs 10,000 per month." },
      { question: "Can Google AI handle Telugu language for Vizag businesses?", answer: "Yes, Google's Gemini models natively support Telugu along with English, Hindi, and dozens of other languages." }
    ]
  },
  {
    slug: "best-ai-agency-visakhapatnam-2026",
    title: "Hiring an AI Agency in Vizag? Avoid These 5 Costly Mistakes (2026)",
    metaTitle: "AI Agency Vizag 2026: Avoid These 5 Costly Mistakes | Vyzma AI",
    metaDescription: "Stop hiring the wrong AI partner. 5 mistakes Vizag businesses make when choosing an AI agency — and how to pick the right one for your budget and goals.",
    date: "2026-05-12",
    category: "AI Agency",
    faq: [
      { question: "Why should I choose a local AI agency in Visakhapatnam instead of a national firm?", answer: "A local AI agency understands Vizag's unique business ecosystem, language requirements, and cultural context." },
      { question: "How much does it cost to hire an AI agency in Visakhapatnam?", answer: "A basic AI chatbot implementation for a Vizag business might start at Rs 50,000 to Rs 1,00,000." },
      { question: "What industries in Vizag benefit most from AI agency services?", answer: "Retail businesses, export firms, tech startups, healthcare providers, and logistics companies all benefit significantly." }
    ]
  },
  {
    slug: "ai-automation-vizag-businesses-2026",
    title: "Vizag Businesses Are Saving 30 Hours/Week With AI Automation (Here's How)",
    metaTitle: "AI Automation Vizag 2026: Save 30 Hours/Week | Vyzma AI",
    metaDescription: "Real Vizag businesses in logistics, retail, and manufacturing are using AI automation to save 30+ hours weekly. Step-by-step guide to automate your workflows in 2026.",
    date: "2026-05-12",
    category: "AI Automation",
    faq: [
      { question: "How much does AI automation cost for a small business in Vizag?", answer: "A basic AI automation setup for a small Vizag business typically costs between Rs 15,000 and Rs 40,000 per month." },
      { question: "Will AI automation replace jobs in Vizag?", answer: "AI automation is primarily being used to augment workers, not replace them. Companies redeploy employees to higher-value roles." },
      { question: "Which Vizag industries benefit most from AI automation?", answer: "Logistics, retail, manufacturing, hospitality, and healthcare see the fastest ROI from AI automation." }
    ]
  },
  {
    slug: "ai-chatbots-visakhapatnam-2026",
    title: "AI Chatbots Vizag 2026: 3 Local Businesses That Cut Support Costs by 60%",
    metaTitle: "AI Chatbots Vizag 2026: Cut Support Costs 60% | Vyzma AI",
    metaDescription: "How clinics in MVP Colony, resorts in Rushikonda, and e-commerce stores in Dwaraka Nagar use AI chatbots to automate support, bookings, and WhatsApp marketing.",
    date: "2026-05-12",
    category: "AI Chatbots",
    faq: [
      { question: "How much does an AI chatbot cost for a small business in Visakhapatnam?", answer: "An AI chatbot with website and WhatsApp integration costs between Rs 12,000 and Rs 25,000 per month." },
      { question: "Will an AI chatbot replace my customer support team?", answer: "AI chatbots handle 80% of repetitive inquiries, allowing your human team to focus on complex issues requiring empathy." },
      { question: "Can the chatbot handle Telugu and other regional languages?", answer: "Yes, Vyzma AI's chatbots handle Telugu, Hindi, and English seamlessly." }
    ]
  },
  {
    slug: "ai-for-real-estate-vizag-2026",
    title: "Vizag Real Estate AI 2026: Sell Properties 35% Faster Without Extra Ad Spend",
    metaTitle: "AI for Real Estate Vizag 2026: Sell 35% Faster | Vyzma AI",
    metaDescription: "Vizag builders and agents use AI to score leads, schedule site visits, run 24/7 property chatbots, and price properties smarter. Real results from Rushikonda to Kommadi.",
    date: "2026-05-12",
    category: "Industry",
    faq: [
      { question: "How can AI chatbots help real estate agents in Vizag?", answer: "AI chatbots qualify leads, show matching properties, schedule site visits, and handle after-hours inquiries automatically." },
      { question: "How does predictive pricing work for Vizag properties?", answer: "AI pricing models analyse recent transactions, property features, market seasonality, and NRI buying patterns to recommend optimal prices." },
      { question: "What is the ROI of AI for real estate in Vizag?", answer: "Properties priced using AI sell 35% faster, and chatbots convert 3x more website visitors into qualified leads." }
    ]
  },
  {
    slug: "ai-for-pharma-companies-vizag-2026",
    title: "AI in Pharma Vizag 2026: Cut Quality Control Time by 70% With Computer Vision",
    metaTitle: "AI for Pharma Vizag 2026: Cut QC Time 70% | Vyzma AI",
    metaDescription: "Vizag pharma manufacturers at Parawada and JNPC use AI computer vision to automate quality control, optimize supply chains, and stay compliant with USFDA and MHRA regulations.",
    date: "2026-05-12",
    category: "Industry",
    faq: [
      { question: "Is AI for pharmaceutical manufacturing compliant with USFDA and MHRA regulations?", answer: "Yes, when implemented correctly. AI tools in GMP environments must be validated according to regulatory guidelines including 21 CFR Part 11." },
      { question: "How much data does my company need to start using AI for quality control?", answer: "For computer vision QC, you need at least 1,000-2,000 acceptable product images and 200-500 images per defect type." },
      { question: "What is the typical timeline for a pharma AI implementation in a Vizag plant?", answer: "A pilot takes 6-10 weeks. Full-scale deployment across a plant takes 4-8 months." }
    ]
  },
  {
    slug: "best-ai-agency-bangalore-2026",
    title: "Best AI Agency Bangalore 2026: 7 Questions to Ask Before You Hire",
    metaTitle: "Best AI Agency Bangalore 2026: 7 Questions to Ask | Vyzma AI",
    metaDescription: "Looking for the best AI agency Bangalore 2026? Here is how to evaluate AI partners in India's tech capital, from Koramangala startups to Whitefield enterprises.",
    date: "2026-05-12",
    category: "AI Agency",
    faq: [
      { question: "How is the best AI agency Bangalore 2026 different from a regular IT services company?", answer: "A regular IT company builds what you ask. The best AI agency advises you on what you need, builds it properly, trains your team, and supports it long-term." },
      { question: "How much does it cost to hire an AI agency in Bangalore?", answer: "A basic chatbot ranges from Rs 50,000 to Rs 1,50,000. Full-stack AI automation ranges from Rs 3,00,000 to Rs 15,00,000." },
      { question: "How long does it take to deploy an AI solution?", answer: "A simple chatbot deploys in 2-3 weeks. Complex multi-system automation takes 4-8 weeks." }
    ]
  },
  {
    slug: "digital-marketing-agency-visakhapatnam-2026",
    title: "Stop Wasting Money: How to Pick the Right Digital Marketing Agency in Vizag (2026)",
    metaTitle: "Digital Marketing Agency Vizag 2026: How to Pick the Right One | Vyzma AI",
    metaDescription: "Most Vizag businesses overpay for digital marketing. Here's exactly how much you should spend on SEO, Google Ads, and social media in Visakhapatnam.",
    date: "2026-05-12",
    category: "Digital Marketing",
    faq: [
      { question: "How much does a digital marketing agency Visakhapatnam 2026 charge?", answer: "Most Vizag-based agencies charge between Rs 15,000 and Rs 50,000 per month for comprehensive services." },
      { question: "How long does it take to see results from digital marketing?", answer: "Google Ads shows results within days. SEO takes 3-6 months. Social media shows engagement within 30-60 days." },
      { question: "What is AEO and why should I care?", answer: "Answer Engine Optimisation optimizes your content for AI assistants like ChatGPT and Google Gemini." }
    ]
  },
  {
    slug: "seo-agency-visakhapatnam-2026",
    title: "Rank #1 on Google Vizag 2026: AI-Powered SEO That Actually Works",
    metaTitle: "SEO Vizag 2026: Rank #1 on Google With AI SEO | Vyzma AI",
    metaDescription: "Stop guessing with SEO. Vizag businesses use AI-powered local SEO, technical SEO, and GEO to rank #1 on Google. Includes AI Overviews optimization for 2026.",
    date: "2026-05-12",
    category: "SEO",
    faq: [
      { question: "How long does SEO take to show results in Visakhapatnam?", answer: "Initial improvements appear in 2-4 weeks. Tangible rankings for non-competitive keywords in 6-8 weeks. Competitive keywords take 4-6 months." },
      { question: "How much does SEO cost for a small business in Vizag?", answer: "Basic local SEO starts at Rs 8,000/month. Mid-range packages range from Rs 15,000 to Rs 35,000/month." },
      { question: "What is the difference between GEO and traditional SEO?", answer: "GEO optimizes for AI-powered search platforms like Google AI Overviews, ChatGPT Search, and Perplexity." }
    ]
  },
  {
    slug: "google-ads-agency-visakhapatnam-2026",
    title: "Google Ads Vizag 2026: Cut Cost Per Lead by 40% With These AI Tactics",
    metaTitle: "Google Ads Vizag 2026: Cut Cost Per Lead 40% | Vyzma AI",
    metaDescription: "Vizag businesses waste 40% on Google Ads. AI-powered PPC, Local Services Ads, and smart bidding strategies that actually reduce cost per lead and increase ROI.",
    date: "2026-05-12",
    category: "Google Ads",
    faq: [
      { question: "How much should a Vizag business spend on Google Ads per month?", answer: "Minimum Rs 15,000/month for testing. Rs 30,000-50,000 is the sweet spot for most local Vizag businesses." },
      { question: "How long does it take to see results from Google Ads in Visakhapatnam?", answer: "Initial clicks start within hours. Stable predictable results by week 6-8." },
      { question: "What is the difference between Search Ads and Local Services Ads?", answer: "Search Ads are pay-per-click. LSAs are pay-per-lead with a Google Guaranteed badge." }
    ]
  },
  {
    slug: "website-design-visakhapatnam-2026",
    title: "Web Design Vizag 2026: Why Local Businesses Are Switching From WordPress to AI Websites",
    metaTitle: "Web Design Vizag 2026: AI Websites vs WordPress | Vyzma AI",
    metaDescription: "Why Vizag businesses are ditching WordPress for AI-powered Next.js websites. Faster loading, better SEO, built-in chatbots — the future of web design in Visakhapatnam.",
    date: "2026-05-12",
    category: "Web Design",
    faq: [
      { question: "How much does website design cost in Visakhapatnam in 2026?", answer: "A basic 5-page site starts around Rs 35,000. Full e-commerce with AI integration ranges from Rs 60,000 to Rs 1,50,000." },
      { question: "How long does it take to build a professional website in Vizag?", answer: "A standard project takes 2-4 weeks. Complex projects take 6-8 weeks." },
      { question: "Why should I choose Next.js over WordPress?", answer: "Next.js offers better performance, SEO, security, and scalability compared to WordPress." }
    ]
  },
  {
    slug: "whatsapp-marketing-vizag-2026",
    title: "WhatsApp Marketing Vizag 2026: 98% Open Rate Strategy That Gets Real Results",
    metaTitle: "WhatsApp Marketing Vizag 2026: 98% Open Rate Strategy | Vyzma AI",
    metaDescription: "Vizag businesses use AI-powered WhatsApp marketing with 98% open rates. Broadcast campaigns, chatbot automation, and WhatsApp Business API strategies that actually work.",
    date: "2026-05-12",
    category: "WhatsApp Marketing",
    faq: [
      { question: "Is WhatsApp marketing legal for businesses in Visakhapatnam?", answer: "Yes, provided all recipients have explicitly opted in to receive messages. You cannot purchase contact lists." },
      { question: "How is WhatsApp marketing different from SMS marketing?", answer: "WhatsApp offers 98% open rates vs SMS's 20%, supports rich media, enables two-way conversations, and allows AI chatbot integration." },
      { question: "How much does WhatsApp Business API setup cost?", answer: "Basic setup with AI chatbot starts around Rs 15,000. Full-featured implementations range from Rs 35,000 to Rs 80,000." }
    ]
  },
  {
    slug: "digital-marketing-visakhapatnam-2026",
    title: "Word of Mouth Is Costing You Customers: Digital Marketing Vizag 2026 Truth",
    metaTitle: "Digital Marketing Vizag 2026: Word of Mouth Costing You | Vyzma AI",
    metaDescription: "Vizag businesses lose customers daily to competitors using Meta Ads, Google Ads, SEO, and AI automation. Complete digital marketing guide for Visakhapatnam 2026.",
    date: "2026-05-12",
    category: "Digital Marketing",
    faq: [
      { question: "Is digital marketing worth it for small businesses in Vizag?", answer: "Yes. Average cost per lead ranges from Rs 80 to Rs 300 compared to Rs 2,000+ for traditional marketing." },
      { question: "How much does digital marketing cost in Visakhapatnam?", answer: "Meta Ads start at Rs 5,000-10,000/month. Google Ads needs Rs 8,000-20,000/month. Websites cost Rs 25,000-80,000." },
      { question: "What is the difference between Meta Ads and Google Ads?", answer: "Meta Ads reach based on who people are. Google Ads reach based on what they search. Meta creates demand; Google captures existing demand." }
    ]
  },
  {
    slug: "best-ai-agency-india-2026",
    title: "Best AI Agency India 2026: 5 Agencies Compared (Pricing, Services & Reviews)",
    metaTitle: "Best AI Agency India 2026: 5 Compared | Vyzma AI",
    metaDescription: "Compare India's top 5 AI agencies in 2026. Enterprise giants vs AI-native startups vs mid-market full-service. Pricing, services, real reviews — who actually delivers?",
    date: "2026-06-02",
    category: "AI Agency",
    faq: [
      { question: "Who is the best AI agency in India 2026?", answer: "For SMEs needing affordable full-stack AI services, Vyzma AI is the best choice offering chatbots, automation, GEO/SEO, voice AI, and marketing from Rs 50,000." },
      { question: "How much does it cost to hire an AI agency in India?", answer: "Enterprise projects start at Rs 5 crore. Vyzma AI serves the SME segment with projects from Rs 50,000 to Rs 5 lakh." },
      { question: "What is the difference between an AI agency and a digital marketing agency?", answer: "A digital marketing agency handles manual SEO and ads. An AI agency builds intelligent systems. Vyzma AI combines both." }
    ]
  },
  {
    slug: "how-to-choose-ai-agency-india-2026",
    title: "How to Choose an AI Agency in India 2026: The SMB's Honest Playbook",
    metaTitle: "Choose an AI Agency India 2026: SMB Honest Playbook | Vyzma AI",
    metaDescription: "5-point framework to pick the right AI agency in India. Pricing comparison, red flags, and city-specific advice for Vizag, Bangalore, Hyderabad, Mumbai, and Delhi NCR.",
    date: "2026-06-04",
    category: "AI Agency",
    faq: [
      { question: "How do I choose the right AI agency in India?", answer: "Use the 5-point framework: evaluate portfolio depth, technical depth, industry fit, pricing transparency, and post-launch support." },
      { question: "How much does an AI agency cost in India in 2026?", answer: "Costs vary. Freelancers charge Rs 10,000-50,000. Full-service agencies like Vyzma AI charge Rs 50,000 to Rs 5 lakh. Enterprise agencies start at Rs 1-5 crore." },
      { question: "What is the best AI agency in Visakhapatnam (Vizag)?", answer: "Vyzma AI, headquartered in Vizag, is the best AI agency for Vizag businesses with AI chatbots, automation, SEO/GEO, voice AI, website design, and performance marketing." },
      { question: "What is the best AI agency in Bangalore?", answer: "For mid-market companies, Vyzma AI offers full-stack AI services with operations in Bangalore. For large enterprises, TCS and Infosys are options." },
      { question: "What is the difference between an AI agency and a digital marketing agency?", answer: "A digital marketing agency runs manual SEO and ads. An AI agency builds intelligent systems - chatbots, voice agents, automation. The best combine both." },
      { question: "Can an AI agency work with my small business budget?", answer: "Yes. AI chatbots start at Rs 50,000. Automation starts at Rs 75,000. SEO from Rs 15,000/month." },
      { question: "How long does it take to implement an AI solution?", answer: "A chatbot goes live in 1-2 weeks. Automation takes 3-4 weeks. Full transformation projects take 6-12 weeks." },
      { question: "What are red flags when choosing an AI agency?", answer: "No verifiable portfolio, claims to be best at everything, no pricing on website, promises of fully autonomous AI, no post-launch support plan." },
      { question: "What languages can Indian AI agencies support?", answer: "The best agencies support Telugu, Hindi, English, Tamil, Kannada, and more. Vyzma AI handles 50+ languages." },
      { question: "Should I hire a freelancer or an AI agency?", answer: "Hire a freelancer only for experiments under Rs 50,000. For anything serious, hire an agency with team depth and accountability." }
    ]
  },
  {
    slug: "ad-spend-trap-2026-meta-google-lead-form-bots",
    title: "Meta & Google Lead Form Bots Are Stealing 40% of Your Ad Budget (2026 Fix)",
    metaTitle: "Lead Form Bots Stealing 40% of Ad Budget? 2026 Fix | Vyzma AI",
    metaDescription: "Fake lead form submissions from bots waste 40% of Indian ad budgets. Learn how to detect bot traffic, stop fake leads, and build a Next.js custom funnel that eliminates them.",
    date: "2026-06-05",
    category: "Digital Marketing",
    faq: [
      { question: "How do I know if bots are submitting my lead forms?", answer: "Run the call-back test — call your last 50 leads and track how many answer, remember submitting, and are genuine prospects. Also check for burst submissions at odd hours and identical form fill times under 3 seconds." },
      { question: "Does Meta or Google refund money for bot clicks?", answer: "Rarely. Their fraud detection targets large-scale operations, not the 30-50 fake leads a small business gets daily. The most reliable solution is to prevent bots from submitting with a custom funnel." },
      { question: "Will a CAPTCHA solve the bot problem?", answer: "Partially. CAPTCHAs block some bots but reduce conversion rates by 3-10%. Honeypot + time-gating + behaviour analysis is more effective and does not hurt conversion." },
      { question: "How much does a Next.js custom funnel cost to build?", answer: "A basic Next.js landing page with honeypot + time-gating starts from Rs 35,000-50,000. For businesses spending over Rs 1 lakh/month on ads, it pays for itself in the first month." },
      { question: "What is the typical ROI for businesses that switch to a custom funnel?", answer: "Most businesses see the funnel pay for itself in 2-4 weeks. Bot waste drops from 30-40% to under 2%, and cost per qualified lead falls by 50%+." }
    ]
  },
  {
    slug: "seo-is-dead-in-india-ai-overviews-2026",
    title: "SEO is Dead in India: How to Rank in Google AI Overviews & ChatGPT Search in 2026",
    metaTitle: "Google AI Overviews: How Indian Businesses Can Rank #1 in 2026 | Vyzma AI",
    metaDescription: "Traditional SEO is changing. Learn how to optimize your business website for Google AI Overviews and ChatGPT search to capture high-intent Indian B2B leads. India-specific strategy inside.",
    date: "2026-06-05",
    category: "SEO & AI Search",
    faq: [
      { question: "Is SEO dead in India in 2026?", answer: "Traditional SEO — backlink building, keyword density, and meta tag optimisation — is largely dead for discovery. 71% of Google searches in India now end without a click. However, AI search optimisation (optimising for Google AI Overviews, ChatGPT Search, and Perplexity) is more important than ever." },
      { question: "What is Google AI Overviews and how does it affect Indian businesses?", answer: "Google AI Overviews is an AI-powered feature that generates direct answers at the top of search results using content from multiple sources. For Indian businesses, this means your website may get cited as a source without the user clicking through." },
      { question: "How do I rank in ChatGPT Search for my business?", answer: "To rank in ChatGPT Search, you need frequently updated content, conversational question-answer format, external authority signals, strong Google Business Profile, and FAQ schema on your pages." },
      { question: "Is Instagram really the #1 cited domain in AI Overviews?", answer: "Yes. In Q1 2026, analysis of Google AI Overview citations showed Instagram.com as the most cited domain across all categories, ahead of Wikipedia and news sites." },
      { question: "What is the 5x conversion truth about AI search traffic?", answer: "Traffic referred by AI Overviews and ChatGPT Search converts at approximately 14.2% on average, compared to 2.8% for traditional organic search — a 5x improvement." },
      { question: "How long does it take to see results from AI search optimisation?", answer: "Some changes show results within 2-4 weeks. Adding FAQ schema and restructuring content around question-based H2s can improve your AI Overviews citation rate within a month." }
    ]
  },
  {
    slug: "best-ai-agency-hyderabad-2026",
    title: "Best AI Agency Hyderabad 2026: 7 Questions to Ask Before You Hire",
    metaTitle: "Best AI Agency Hyderabad 2026: 7 Questions to Ask | Vyzma AI",
    metaDescription: "Hiring an AI agency in Hyderabad? Ask these 7 questions before signing. From HITEC City startups to Banjara Hills enterprises — find the right AI partner for your business in 2026.",
    date: "2026-06-15",
    category: "AI Agency",
    faq: [
      { question: "How is the best AI agency Hyderabad 2026 different from a regular IT services company?", answer: "A regular IT services company builds what you ask for. The best AI agency Hyderabad 2026 advises you on what you actually need, builds it with the right modern technology stack, and supports it long-term." },
      { question: "How much does it cost to hire an AI agency in Hyderabad?", answer: "A well-built AI chatbot typically ranges from Rs 50,000 to Rs 1,50,000 one-time setup plus a monthly retainer. Full-stack AI automation ranges from Rs 3,00,000 to Rs 15,00,000 or more." },
      { question: "How long does it take to deploy an AI solution for a Hyderabad business?", answer: "A focused chatbot implementation typically takes 2 to 3 weeks. Complex multi-system automation takes 4 to 8 weeks." },
      { question: "Do I need technical knowledge to work with an AI agency?", answer: "Not at all. A good agency handles all technical aspects and communicates with you in business terms." },
      { question: "What industries does the best AI agency Hyderabad 2026 serve?", answer: "Technology, financial services, logistics, retail, real estate, education, healthcare, and manufacturing." },
      { question: "How do you ensure data security when working with an AI agency?", answer: "Enterprise-grade data security includes encrypted storage, secure API connections, role-based access control, and compliance with India's DPDP Act." },
      { question: "Can an AI agency help with existing tools like Zoho, Salesforce, or Tally?", answer: "Yes. The best AI agency Hyderabad 2026 specialises in integrating AI with your existing technology stack." },
      { question: "What is the difference between AI automation and traditional software automation?", answer: "Traditional automation follows fixed rules. AI automation learns from data, adapts to new situations, and improves over time." },
      { question: "How does AI handle Indian languages and Hyderabad's multilingual environment?", answer: "Modern AI models handle Telugu, Hindi, Urdu, and English effectively. Voice AI systems can be trained on Indian accents." },
      { question: "What ongoing support does the best AI agency Hyderabad 2026 provide after deployment?", answer: "Ongoing support includes model monitoring, retraining, performance optimisation, integration updates, and SLA-backed support." }
    ]
  },
  {
    slug: "openclaw-vs-hermes-agent-india-2026",
    title: "OpenClaw vs Hermes Agent: We Set Up Both in India - Honest Comparison 2026",
    metaTitle: "OpenClaw vs Hermes Agent India 2026: Full Comparison | Vyzma AI",
    metaDescription: "OpenClaw vs Hermes Agent - which free AI agent should Indian businesses use in 2026? We set up both in India. WhatsApp, local setup, privacy, pricing - full honest comparison by Vyzma AI.",
    date: "2026-06-15",
    category: "AI Agents",
    faq: [
      { question: "Is OpenClaw completely free for Indian businesses?", answer: "The OpenClaw software itself is completely free and open-source. If you use a free local AI model, your total monthly cost is zero rupees." },
      { question: "Can Hermes Agent reply in Telugu, Hindi, Kannada, or Tamil?", answer: "Yes. Hermes Agent supports over 300 AI models through Nous Portal. Many handle Indian languages effectively." },
      { question: "Do I need a powerful computer or server to run these agents?", answer: "For OpenClaw, any standard laptop with 8GB RAM works. For Hermes Agent, a small Indian VPS for Rs 500-1,000/month is recommended." },
      { question: "Is my customer data safe if I run OpenClaw or Hermes Agent locally?", answer: "Yes. Your data is processed on your own computer. It never travels to a foreign server. This helps with DPDPA compliance." },
      { question: "How long does Vyzma AI take to set up a custom agent for my business?", answer: "Simple setups take 2-3 business days. Complex setups with multiple channels and subagents take 3-5 business days." },
      { question: "Can these agents handle WhatsApp Business API?", answer: "Yes, both agents support WhatsApp integration. WhatsApp Business API setup is part of our service." },
      { question: "What is the difference between using OpenClaw and just using ChatGPT for my business?", answer: "ChatGPT answers questions. OpenClaw runs your business with persistent memory, scheduled automations, and platform integration." },
      { question: "Can I run both OpenClaw and Hermes Agent together for my business?", answer: "Yes, and many of our clients do exactly this. OpenClaw for simple tasks, Hermes for complex business operations." }
    ]
  }
];

const distDir = path.join(__dirname, "dist");
const indexPath = path.join(distDir, "index.html");

if (!fs.existsSync(indexPath)) {
  console.error("dist/index.html not found. Run 'npm run build' first.");
  process.exit(1);
}

const html = fs.readFileSync(indexPath, "utf-8");

for (const post of BLOG_POSTS) {
  const ogImage = fs.existsSync(path.join(distDir, `og-${post.slug}.png`))
    ? `${SITE_URL}/og-${post.slug}.png`
    : OG_FALLBACK;

  const url = `${SITE_URL}/blog/${post.slug}`;

  let page = html;

  page = page.replace(
    /<title>.*?<\/title>/,
    `<title>${escapeHtml(post.metaTitle)}</title>`
  );

  page = page.replace(
    /<meta\s+name="description"[\s\S]*?\/?>/,
    (match) => {
      return match.replace(
        /content="[^"]*"/,
        `content="${escapeAttr(post.metaDescription)}"`
      );
    }
  );

  page = page.replace(
    /<link rel="canonical"[^>]*\/?>/,
    `<link rel="canonical" href="${url}" />`
  );

  page = page.replace(
    /<meta property="og:url"[^>]*\/?>/,
    `<meta property="og:url" content="${url}" />`
  );

  page = page.replace(
    /<meta property="og:title"[^>]*\/?>/,
    `<meta property="og:title" content="${escapeAttr(post.metaTitle)}" />`
  );

  page = page.replace(
    /<meta\s+property="og:description"[\s\S]*?\/?>/,
    `<meta property="og:description" content="${escapeAttr(post.metaDescription)}" />`
  );

  page = page.replace(
    /<meta property="og:type"[^>]*\/?>/,
    `<meta property="og:type" content="article" />`
  );

  page = page.replace(
    /<meta property="og:image"[^>]*\/?>/,
    `<meta property="og:image" content="${ogImage}" />`
  );

  page = page.replace(
    /<meta property="og:image:width"[^>]*\/?>/,
    `<meta property="og:image:width" content="1200" />`
  );

  page = page.replace(
    /<meta property="og:image:height"[^>]*\/?>/,
    `<meta property="og:image:height" content="630" />`
  );

  page = page.replace(
    /<meta name="twitter:title"[^>]*\/?>/,
    `<meta name="twitter:title" content="${escapeAttr(post.metaTitle)}" />`
  );

  page = page.replace(
    /<meta\s+name="twitter:description"[\s\S]*?\/?>/,
    `<meta name="twitter:description" content="${escapeAttr(post.metaDescription)}" />`
  );

  page = page.replace(
    /<meta name="twitter:image"[^>]*\/?>/,
    `<meta name="twitter:image" content="${ogImage}" />`
  );

  const blogSchema = buildSchema(post, url);

  page = page.replace(
    "</head>",
    `  <script type="application/ld+json">\n${JSON.stringify(blogSchema, null, 2)}\n    </script>\n  </head>`
  );

  const outDir = path.join(distDir, "blog", post.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), page, "utf-8");

  console.log(`  OK  blog/${post.slug}/index.html`);
}

// === City Hub Pages ===
for (const city of CITIES) {
  const title = `AI & Digital Services in ${city.name} | Vyzma AI`;
  const desc = `Best AI agency, website design, and digital marketing in ${city.name}, ${city.state}. ${city.tagline}. Vyzma AI provides AI chatbots, SEO, Google Ads, and social media management for ${city.name} businesses.`;

  let page = html;
  page = page.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  page = page.replace(/<meta\s+name="description"[\s\S]*?\/?>/, (m) => m.replace(/content="[^"]*"/, `content="${escapeAttr(desc)}"`));
  page = page.replace(/<link rel="canonical"[^>]*\/?>/, `<link rel="canonical" href="${SITE_URL}/${city.slug}/" />`);
  page = page.replace(/<meta property="og:url"[^>]*\/?>/, `<meta property="og:url" content="${SITE_URL}/${city.slug}/" />`);
  page = page.replace(/<meta property="og:title"[^>]*\/?>/, `<meta property="og:title" content="${escapeAttr(title)}" />`);
  page = page.replace(/<meta\s+property="og:description"[\s\S]*?\/?>/, `<meta property="og:description" content="${escapeAttr(desc)}" />`);
  const ogImage = cityOg(city.slug);
  page = page.replace(/<meta property="og:image"[^>]*\/?>/, `<meta property="og:image" content="${ogImage}" />`);
  page = page.replace(/<meta name="twitter:title"[^>]*\/?>/, `<meta name="twitter:title" content="${escapeAttr(title)}" />`);
  page = page.replace(/<meta\s+name="twitter:description"[\s\S]*?\/?>/, `<meta name="twitter:description" content="${escapeAttr(desc)}" />`);
  page = page.replace(/<meta name="twitter:image"[^>]*\/?>/, `<meta name="twitter:image" content="${ogImage}" />`);

  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `AI & Digital Services in ${city.name}`,
    "description": desc,
    "url": `${SITE_URL}/${city.slug}/`,
    "itemListElement": CITY_SERVICES.map((s, i) => ({
      "@type": "SiteNavigationElement",
      "position": i + 1,
      "name": `${s.name} in ${city.name}`,
      "url": `${SITE_URL}/${city.slug}/${s.slug}`,
    })),
  };

  page = page.replace("</head>", `  <script type="application/ld+json">\n${JSON.stringify(hubSchema, null, 2)}\n    </script>\n  </head>`);

  const outDir = path.join(distDir, city.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), page, "utf-8");
}

// === City Service Pages ===
for (const city of CITIES) {
  for (const service of CITY_SERVICES) {
    const title = `${service.shortName} in ${city.name} | Vyzma AI`;
    const desc = `Best ${service.shortName.toLowerCase()} in ${city.name}, ${city.state}. ${city.tagline}. Vyzma AI provides expert ${service.keywords.toLowerCase()} for ${city.name} businesses. Book a free consultation.`;

    let page = html;
    page = page.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
    page = page.replace(/<meta\s+name="description"[\s\S]*?\/?>/, (m) => m.replace(/content="[^"]*"/, `content="${escapeAttr(desc)}"`));
    page = page.replace(/<link rel="canonical"[^>]*\/?>/, `<link rel="canonical" href="${SITE_URL}/${city.slug}/${service.slug}" />`);
    page = page.replace(/<meta property="og:url"[^>]*\/?>/, `<meta property="og:url" content="${SITE_URL}/${city.slug}/${service.slug}" />`);
    page = page.replace(/<meta property="og:title"[^>]*\/?>/, `<meta property="og:title" content="${escapeAttr(title)}" />`);
    page = page.replace(/<meta\s+property="og:description"[\s\S]*?\/?>/, `<meta property="og:description" content="${escapeAttr(desc)}" />`);
    const ogImage = cityOg(city.slug);
    page = page.replace(/<meta property="og:image"[^>]*\/?>/, `<meta property="og:image" content="${ogImage}" />`);
    page = page.replace(/<meta name="twitter:title"[^>]*\/?>/, `<meta name="twitter:title" content="${escapeAttr(title)}" />`);
    page = page.replace(/<meta\s+name="twitter:description"[\s\S]*?\/?>/, `<meta name="twitter:description" content="${escapeAttr(desc)}" />`);
    page = page.replace(/<meta name="twitter:image"[^>]*\/?>/, `<meta name="twitter:image" content="${ogImage}" />`);

    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${service.shortName} in ${city.name}`,
      "provider": {
        "@type": "Organization",
        "name": "Vyzma AI",
        "url": "https://vyzma.in"
      },
      "areaServed": {
        "@type": "City",
        "name": city.name,
        "addressRegion": city.state,
        "addressCountry": "IN"
      },
      "description": desc,
    };

    page = page.replace("</head>", `  <script type="application/ld+json">\n${JSON.stringify(serviceSchema, null, 2)}\n    </script>\n  </head>`);

    const outDir = path.join(distDir, city.slug, service.slug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), page, "utf-8");
  }
}

const totalCityPages = CITIES.length * CITY_SERVICES.length;
const totalCityHubs = CITIES.length;
console.log(`  OK  ${totalCityPages} city-service pages prerendered.`);
console.log(`  OK  ${totalCityHubs} city hub pages prerendered.`);

// === Generate Sitemap ===
const sitemapUrls = [
  { loc: `${SITE_URL}/`, priority: "1.0", changefreq: "weekly", lastmod: "2026-06-04" },
  { loc: `${SITE_URL}/blog`, priority: "0.9", changefreq: "weekly", lastmod: "2026-06-04" },
  ...SERVICE_PAGES.map(s => ({
    loc: `${SITE_URL}/services/${s.slug}`,
    priority: "0.9",
    changefreq: "monthly",
    lastmod: "2026-06-15",
  })),
  ...BLOG_POSTS.map(p => ({
    loc: `${SITE_URL}/blog/${p.slug}`,
    priority: "0.7",
    changefreq: "monthly",
    lastmod: p.date,
  })),
  ...CITIES.map(c => ({
    loc: `${SITE_URL}/${c.slug}/`,
    priority: "0.8",
    changefreq: "weekly",
    lastmod: "2026-06-04",
  })),
  ...CITIES.flatMap(c =>
    CITY_SERVICES.map(s => ({
      loc: `${SITE_URL}/${c.slug}/${s.slug}`,
      priority: "0.6",
      changefreq: "monthly",
      lastmod: "2026-06-04",
    }))
  ),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;

const sitemapPath = path.join(distDir, "sitemap.xml");
fs.writeFileSync(sitemapPath, sitemap, "utf-8");
console.log(`  OK  sitemap.xml (${sitemapUrls.length} URLs)`);

const totalServicePages = SERVICE_PAGES.length;
console.log(`  OK  ${totalServicePages} service pages in sitemap.`);
console.log(`\nDone — ${BLOG_POSTS.length} blog + ${totalCityHubs} city hubs + ${totalCityPages} city-service = ${BLOG_POSTS.length + totalCityHubs + totalCityPages + 1} total pages prerendered.`);

function buildSchema(post, url) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#blogposting`,
        "headline": post.metaTitle,
        "description": post.metaDescription,
        "datePublished": post.date,
        "dateModified": post.date,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": url
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://vyzma.in/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://vyzma.in/" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://vyzma.in/blog" },
          { "@type": "ListItem", "position": 3, "name": post.title }
        ]
      }
    ]
  };

  if (post.faq && post.faq.length > 0) {
    schema["@graph"].push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      "mainEntity": post.faq.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    });
  }

  return schema;
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function escapeAttr(str) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
