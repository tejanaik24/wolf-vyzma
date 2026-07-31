const fs = require("fs");
const path = require("path");

const SITE_URL = "https://vyzma.in";
const OG_FALLBACK = `${SITE_URL}/og-homepage.png`;

const CITIES = [
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra", tagline: "India's Financial & Commercial Capital", population: "12.6M+", knownFor: "Financial district, Bollywood, startups, real estate", description: "Mumbai, the city that never sleeps, is home to India's largest concentration of businesses — from Bollywood to fintech, real estate to hospitality. As the financial capital, Mumbai businesses need cutting-edge AI solutions to stay competitive in the world's most demanding market." },
  { slug: "delhi", name: "Delhi", state: "Delhi NCR", tagline: "India's Capital & Political Hub", population: "19M+", knownFor: "Government, trade, manufacturing, startups", description: "Delhi NCR, encompassing Delhi, Gurgaon, and Noida, is India's largest metropolitan region and a powerhouse of commerce, politics, and technology. From government contracts to B2B services, Delhi businesses need AI-driven efficiency to lead the national capital region." },
  { slug: "bangalore", name: "Bengaluru", state: "Karnataka", tagline: "India's Silicon Valley & Tech Capital", population: "8.4M+", knownFor: "IT parks, startups, R&D centers, innovation", description: "Bengaluru (Bangalore) is India's undisputed tech capital, home to thousands of startups, global R&D centers, and the most concentrated pool of tech talent in the country. From Koramangala to Whitefield, Bangalore businesses rely on AI to innovate faster and scale smarter." },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", tagline: "The City of Pearls & Tech Innovation", population: "6.9M+", knownFor: "Pharma, IT/ITES, biotechnology, startups", description: "Hyderabad, with its world-class HITEC City and thriving pharma ecosystem, has emerged as India's second-largest tech hub. From Gachibowli to Madhapur, Hyderabad businesses are adopting AI at scale to power everything from life sciences to enterprise software." },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu", tagline: "India's Manufacturing & Auto Hub", population: "7.1M+", knownFor: "Automotive, manufacturing, IT, healthcare", description: "Chennai, the Detroit of India, is a powerhouse of manufacturing, automotive, and IT services. From OMR to the industrial corridors, Chennai businesses are leveraging AI to optimize supply chains, improve manufacturing quality, and deliver world-class software." },
  { slug: "kolkata", name: "Kolkata", state: "West Bengal", tagline: "The City of Joy — Eastern India's Business Hub", population: "4.5M+", knownFor: "Manufacturing, IT, education, cultural industries", description: "Kolkata, the cultural and commercial capital of Eastern India, has a rich legacy of industry, trade, and intellectual capital. From Salt Lake Sector V to the CBD, Kolkata businesses are embracing AI to modernize traditional industries and drive digital transformation across the eastern corridor." },
  { slug: "pune", name: "Pune", state: "Maharashtra", tagline: "India's Education & Automotive Hub", population: "3.1M+", knownFor: "Automotive, education, IT, manufacturing", description: "Pune, the Oxford of the East, combines a thriving education ecosystem with a booming automotive and IT industry. From Hinjawadi to Kharadi, Pune businesses are leveraging AI for everything from car manufacturing to edtech, making it one of India's fastest-growing AI adoption markets." },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", tagline: "India's Commercial & Industrial Powerhouse", population: "5.6M+", knownFor: "Textiles, pharma, trading, manufacturing", description: "Ahmedabad, the commercial capital of Gujarat, is a hub of trade, textiles, pharmaceuticals, and manufacturing. From the SG Highway corridor to the GIFT City financial hub, Ahmedabad businesses are rapidly adopting AI to drive efficiency in traditional industries and build the next generation of smart enterprises." },
];

const VIZAG_OVERRIDES = {
  hub: {
    title: "Best AI Agency in Visakhapatnam (Vizag) 2026 | Vyzma AI",
    desc: "Vyzma AI is Visakhapatnam's leading AI agency. AI chatbots, SEO, digital marketing, Google Ads, WhatsApp marketing, and website design for Vizag businesses. Free consultation."
  },
  "ai-agency": {
    title: "AI Agency Visakhapatnam — AI Chatbots & Automation for Vizag Businesses | Vyzma AI",
    desc: "Best AI agency in Visakhapatnam. Vyzma AI builds AI chatbots, workflow automation, and voice AI for Vizag businesses. Starting from ₹50,000. Free demo available."
  },
  "seo-services": {
    title: "SEO Agency Visakhapatnam — Rank on Google in 90 Days | Vyzma AI",
    desc: "Best SEO agency in Visakhapatnam. AI-powered local SEO, technical SEO, and content SEO for Vizag businesses. Google rankings guaranteed in 90 days. Free audit included."
  },
  "digital-marketing": {
    title: "Digital Marketing Agency Visakhapatnam — AI-Powered Results for Vizag | Vyzma AI",
    desc: "Best digital marketing agency in Visakhapatnam. Google Ads, Meta Ads, SEO, and WhatsApp marketing for Vizag businesses. AI-powered campaigns that deliver real leads."
  },
  "social-media-management": {
    title: "Social Media Agency Visakhapatnam — Grow Instagram & Facebook Fast | Vyzma AI",
    desc: "Best social media management agency in Visakhapatnam. Vyzma AI manages Instagram, Facebook, and YouTube for Vizag businesses. Content creation, ads, and real follower growth."
  },
  "google-ads": {
    title: "Google Ads Agency Visakhapatnam — More Leads, Less Wasted Budget | Vyzma AI",
    desc: "Best Google Ads agency in Visakhapatnam. AI-optimised PPC campaigns for Vizag businesses. Stop wasting budget on fake clicks. Free Google Ads account audit."
  },
  "ai-chatbots": {
    title: "AI Chatbots Visakhapatnam — WhatsApp & Website Bots for Vizag Businesses | Vyzma AI",
    desc: "Best AI chatbot agency in Visakhapatnam. WhatsApp bots, website chatbots, and voice AI for Vizag businesses. Cut support costs by 60%. Starting from ₹12,000/month."
  },
  "whatsapp-marketing": {
    title: "WhatsApp Marketing Visakhapatnam — Get 5x More Customer Replies | Vyzma AI",
    desc: "Best WhatsApp marketing agency in Visakhapatnam. AI-powered WhatsApp broadcasts, chatbots, and Business API for Vizag businesses. More replies, more sales."
  },
  "website-design": {
    title: "Website Design Visakhapatnam — Fast Modern Websites for Vizag Businesses | Vyzma AI",
    desc: "Best website design agency in Visakhapatnam. Vyzma AI builds fast, SEO-ready Next.js websites for Vizag businesses. Google-friendly from day one. Starting from ₹35,000."
  }
};

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

const BLOG_POSTS = [
  {
    slug: "what-is-vyzma-ai",
    title: "What is Vyzma AI? India's Premier AI Agency — Services, Locations & Results",
    metaTitle: "Vyzma AI Review 2026: Is It India's Best AI Agency? (Honest Answer)",
    metaDescription: "Unbiased Vyzma AI review 2026. Services, pricing, real client results, and how Vyzma compares to other AI agencies in Vizag and Bangalore. Read before you hire.",
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
    title: "Google AI Hub Vizag: How Businesses Can Leverage AI in 2026",
    metaTitle: "Google AI Hub Vizag 2026: What It Means for Your Business (Free Access Inside)",
    metaDescription: "Google is setting up an AI Hub in Visakhapatnam. Here's exactly what it offers Vizag businesses — free Gemini credits, Cloud tools, and AI training. Full breakdown inside.",
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
    title: "Best AI Agency Visakhapatnam 2026: How to Choose the Right Partner",
    metaTitle: "Best AI Agency Visakhapatnam 2026 | Vyzma AI",
    metaDescription: "Best AI agency Visakhapatnam 2026 guide. Compare local AI agencies for Vizag businesses. See real scenarios from Jagadamba Centre retail to Gajuwaka export firms.",
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
    title: "AI Automation Vizag Businesses 2026 — The Complete Guide to Workflow Automation",
    metaTitle: "AI Automation Vizag: Save 30 Hours Every Week — Real Business Examples (2026)",
    metaDescription: "3 Vizag businesses in logistics, retail and manufacturing are saving 30+ hours every week using AI automation. See exactly what they automated and how much it cost.",
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
    title: "AI Chatbots Visakhapatnam 2026 — The Complete Guide for Local Businesses",
    metaTitle: "AI Chatbots Vizag 2026: Cut Customer Support Costs by 60% (Real Examples)",
    metaDescription: "3 Vizag businesses cut support costs by 60% using AI chatbots. Clinics, resorts, and e-commerce stores explain exactly how — with WhatsApp bot setup included.",
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
    title: "AI for Real Estate Vizag 2026: Transforming Property Sales with Intelligent Automation",
    metaTitle: "AI for Real Estate Vizag: Sell Properties 35% Faster Without Extra Ad Spend",
    metaDescription: "Vizag property dealers using AI chatbots close 35% more deals without spending more on ads. See how — WhatsApp bot, lead scoring, and follow-up automation explained.",
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
    title: "AI for Pharma Companies Vizag 2026: Accelerating R&D, Quality Control, and Compliance",
    metaTitle: "AI for Pharma Companies Vizag 2026 | Vyzma AI",
    metaDescription: "Explore how AI for pharma companies Vizag 2026 helps Vizag-based pharmaceutical manufacturers automate quality control, optimize supply chains, and ensure regulatory compliance at Parawada and JNPC.",
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
    title: "Best AI Agency Bangalore 2026: How to Choose the Right AI Partner for Your Business",
    metaTitle: "Best AI Agency Bangalore 2026 | Vyzma AI",
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
    title: "Digital Marketing Agency Visakhapatnam 2026: Why Local Businesses Need Expert Digital Marketing",
    metaTitle: "Digital Marketing Agency Visakhapatnam 2026 | Vyzma AI",
    metaDescription: "Need a digital marketing agency Visakhapatnam 2026? Local businesses in Vizag are winning with SEO, Google Ads, and social media. See how from Rushikonda to Gajuwaka.",
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
    title: "SEO Agency Visakhapatnam 2026: Why Local Businesses in Vizag Are Choosing AI-Powered Search Optimization",
    metaTitle: "Best SEO Agency Visakhapatnam 2026 — AI-Powered Results in 90 Days",
    metaDescription: "Looking for an SEO agency in Visakhapatnam? Vyzma AI uses AI-powered SEO to rank Vizag businesses on Google in 90 days. See pricing, process and real results.",
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
    title: "Google Ads Agency Visakhapatnam 2026: Maximising ROI for Vizag Businesses with AI-Powered PPC Campaigns",
    metaTitle: "Google Ads Agency Visakhapatnam 2026 | AI-Powered PPC Management | Vyzma AI",
    metaDescription: "Top Google Ads agency Visakhapatnam 2026 offering AI-driven PPC, Local Services Ads, Shopping campaigns, and remarketing for Vizag businesses.",
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
    title: "The Complete Guide to Website Design Visakhapatnam 2026: Why Your Business Needs a Modern, AI-Powered Site",
    metaTitle: "Website Design Visakhapatnam 2026 | Vyzma AI",
    metaDescription: "Complete guide to website design Visakhapatnam 2026. From AI-powered Next.js sites to SEO-first architecture — discover why Vizag businesses choose Vyzma AI.",
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
    title: "WhatsApp Marketing Vizag 2026: The Complete Guide to Growing Your Business with AI-Powered Messaging",
    metaTitle: "WhatsApp Marketing Vizag: Get 5x More Replies With AI Chatbots (2026 Guide)",
    metaDescription: "Vizag businesses using AI-powered WhatsApp marketing get 5x more customer replies than regular broadcasts. Step-by-step guide for local businesses. Free strategy inside.",
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
    title: "Digital Marketing Visakhapatnam 2026: Why Word of Mouth Is Costing You Customers",
    metaTitle: "Digital Marketing Visakhapatnam 2026 | AI-Powered Growth Guide | Vyzma AI",
    metaDescription: "Vizag businesses are losing customers to competitors using Meta Ads, Google Ads, AI automation and chatbots. Complete digital marketing guide for Visakhapatnam businesses 2026.",
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
    title: "Best AI Agency in India 2026: How to Choose the Right AI Partner for Your Business",
    metaTitle: "Best AI Agency India 2026: Top 5 Compared (Honest, No Paid Rankings)",
    metaDescription: "Honest comparison of India's best AI agencies in 2026. No paid placements. We compare pricing, services, and real results for SMEs across Vizag, Bangalore, and Hyderabad.",
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
    title: "How to Choose the Right AI Agency in India 2026 - The Honest SMB Guide",
    metaTitle: "How to Choose the Right AI Agency in India 2026 | Honest SMB Guide | Vyzma AI",
    metaDescription: "How to choose the right AI agency in India 2026 - an honest guide for SMBs. 5-point framework, pricing comparison, red flags, and city-specific advice for Vizag, Bangalore, Hyderabad, Mumbai, and Delhi NCR.",
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
    slug: "top-website-building-agency-vizag",
    title: "Top Website Building Agency in Vizag: Why Vyzma AI Builds the Best Websites",
    metaTitle: "Top Website Building Agency in Vizag | Vyzma AI Website Design",
    metaDescription: "Top website building agency in Vizag. Vyzma AI builds high-performance Next.js websites with AI integration, sub-2 second load times, and SEO-first architecture for Vizag businesses.",
    date: "2026-07-05",
    category: "Web Design",
    faq: [
      { question: "How much does a website cost in Vizag?", answer: "Website costs in Vizag vary based on complexity. A basic 5-page business website from Vyzma AI starts at Rs 35,000. E-commerce sites start at Rs 1,25,000, and corporate portals start at Rs 1,50,000+." },
      { question: "How long does it take to build a website?", answer: "A standard business website typically takes 2-4 weeks from concept to launch. E-commerce sites take 3-5 weeks, and complex corporate portals can take 6-8 weeks." },
      { question: "Why Next.js over WordPress?", answer: "Next.js offers significantly better performance, superior SEO capabilities with built-in server-side rendering, better security, and native AI integration. WordPress requires constant plugin updates and security patches." },
      { question: "Do you offer website maintenance?", answer: "Yes. Vyzma AI offers ongoing maintenance packages that include security updates, performance monitoring, content updates, SEO optimisation, and technical support." },
      { question: "Do you do SEO too?", answer: "Yes. SEO is a core part of every Vyzma AI website build. We structure every page for search engines with semantic HTML, proper heading hierarchy, schema markup, optimised meta tags, and clean URLs." }
    ]
  },
  {
    slug: "ecommerce-website-development-vizag",
    title: "E-commerce Website Development in Vizag: Build an Online Store That Actually Sells",
    metaTitle: "E-commerce Website Development Vizag | Online Store Builder | Vyzma AI",
    metaDescription: "E-commerce website development in Vizag. Vyzma AI builds online stores with WhatsApp integration, secure payments, inventory management, and AI-powered product recommendations for Vizag businesses.",
    date: "2026-07-06",
    category: "Web Design",
    faq: [
      { question: "How much does an e-commerce website cost in Vizag?", answer: "E-commerce website development in Vizag starts at Rs 1,25,000 for a standard online store. Complex stores with advanced features may range from Rs 2,00,000 to Rs 5,00,000." },
      { question: "Which payment gateways do you integrate?", answer: "Vyzma AI integrates Razorpay, PhonePe for Business, Paytm, and Cashfree — all supporting UPI, credit/debit cards, net banking, and EMI options." },
      { question: "Can you connect WhatsApp to my e-commerce store?", answer: "Yes. WhatsApp integration is a standard feature in every Vyzma AI e-commerce build via WhatsApp Business API." },
      { question: "How long does it take to build an e-commerce website?", answer: "A standard e-commerce website takes 3-5 weeks including design, development, payment integration, product upload, testing, and deployment." },
      { question: "Is the e-commerce site mobile responsive?", answer: "Absolutely. Every e-commerce site we build is mobile-first, as over 80% of e-commerce traffic in Vizag comes from mobile devices." }
    ]
  },
  {
    slug: "b2b-corporate-website-design-vizag",
    title: "B2B & Corporate Website Design in Vizag: Sites That Generate Leads, Not Just Looks",
    metaTitle: "B2B Corporate Website Design Vizag | Lead Generation Sites | Vyzma AI",
    metaDescription: "B2B and corporate website design in Vizag. Vyzma AI builds professional business websites with lead generation, CRM integration, client portals, and SEO-optimised architecture for Vizag B2B companies.",
    date: "2026-07-07",
    category: "Web Design",
    faq: [
      { question: "How much does a corporate website cost in Vizag?", answer: "Corporate website design in Vizag starts at Rs 65,000 for a standard business website. Complex sites with CRM integration and client portals range from Rs 1,50,000 to Rs 3,00,000." },
      { question: "Do you include CRM integration?", answer: "Yes. Vyzma AI integrates with Zoho CRM, Salesforce, HubSpot, Freshsales, or custom CRM systems via API." },
      { question: "Can you build client portals?", answer: "Absolutely. Vyzma AI builds secure client portals with document management, project tracking, invoice history, and messaging." },
      { question: "How long does it take to build a corporate website?", answer: "A standard corporate website with 10-15 pages takes 3-5 weeks. Complex sites take 6-8 weeks." },
      { question: "Do you include chatbot integration?", answer: "Yes. Vyzma AI includes AI chatbot integration in every corporate website for prospect qualification and lead routing." }
    ]
  },
  {
    slug: "startup-website-packages-vizag",
    title: "Startup Website Packages Vizag: All-in-One Websites for Early-Stage Companies",
    metaTitle: "Startup Website Packages Vizag | All-in-One Launch Sites | Vyzma AI",
    metaDescription: "Startup website packages Vizag for early-stage companies. All-in-one packages including branding, Next.js development, SEO setup, and AI chatbot from Rs 35,000. Launch your startup website in 2 weeks.",
    date: "2026-07-08",
    category: "Web Design",
    faq: [
      { question: "What's included in the Rs 35,000 starter package?", answer: "5 custom pages, Next.js development, mobile responsiveness, basic SEO, AI chatbot, WhatsApp integration, contact form, domain setup, and 1 month hosting. Timeline: 10-14 days." },
      { question: "Can I upgrade from Starter to Growth?", answer: "Yes. Vyzma AI builds every website with scalability in mind. Upgrades are seamless without rebuilding from scratch." },
      { question: "Do I need separate hosting?", answer: "No. All packages include hosting on Vercel's global CDN. Ongoing hosting after the included period is Rs 500-1,000 per month." },
      { question: "What about SEO for startups?", answer: "Every package includes SEO — from basic meta tags to comprehensive SEO strategies depending on the package." }
    ]
  },
  {
    slug: "nextjs-vs-wordpress-website-development",
    title: "Next.js vs WordPress 2026: Why Indian Businesses Are Switching to Modern Web Development",
    metaTitle: "Next.js vs WordPress 2026 for Indian Businesses | Vyzma AI",
    metaDescription: "Next.js vs WordPress 2026 comparison for Indian businesses. Performance, SEO, security, scalability, and cost analysis. Why Vizag and Bangalore businesses are switching from WordPress to Next.js.",
    date: "2099-01-01",
    category: "Web Design",
    faq: [
      { question: "Is WordPress dying?", answer: "No, WordPress still powers 43% of websites globally and is viable for simple sites. However, for businesses needing performance and scalability, Next.js is increasingly preferred." },
      { question: "Which is better for SEO?", answer: "Next.js has a clear SEO advantage with SSR guaranteeing Google sees complete page content immediately and superior Core Web Vitals scores." },
      { question: "Which is cheaper overall?", answer: "WordPress has lower upfront costs but over 2-3 years, Next.js often becomes cheaper due to lower hosting costs, no plugin subscriptions, and less maintenance." },
      { question: "Can I migrate from WordPress to Next.js?", answer: "Yes. Vyzma AI specialises in WordPress to Next.js migrations, preserving SEO equity and rebuilding with modern technology in 2-4 weeks." }
    ]
  },
  {
    slug: "website-design-company-visakhapatnam",
    title: "Website Design Company Visakhapatnam: Professional Web Development for Vizag Businesses",
    metaTitle: "Website Design Company Visakhapatnam | Vizag Web Development | Vyzma AI",
    metaDescription: "Website design company Visakhapatnam serving Vizag businesses. Professional web development with local SEO, WhatsApp integration, Telugu support. Serving Rushikonda, MVP Colony, Dwaraka Nagar and all Vizag areas.",
    date: "2099-01-01",
    category: "Web Design",
    faq: [
      { question: "How much does a website cost in Vizag?", answer: "Vyzma AI's Vizag website packages start from Rs 35,000 for a basic site, Rs 65,000 for a comprehensive site, and Rs 1,25,000+ for e-commerce or corporate websites." },
      { question: "Do you support Telugu language on websites?", answer: "Yes. Full Telugu content support including fonts, navigation, UI elements, and AI chatbot responses in Telugu." },
      { question: "Do you have a physical office in Visakhapatnam?", answer: "Yes. Vyzma AI has an office in Vizag available for in-person consultations and meetings." }
    ]
  },
  {
    slug: "web-development-agency-bangalore",
    title: "Web Development Agency Bangalore: Modern Websites for India's Tech Capital",
    metaTitle: "Web Development Agency Bangalore | Next.js Website Development | Vyzma AI",
    metaDescription: "Web development agency Bangalore. Vyzma AI builds high-performance Next.js websites for Bangalore startups and enterprises. AI chatbots, SEO, and conversion design. Serving Koramangala, Whitefield, Indiranagar.",
    date: "2099-01-01",
    category: "Web Design",
    faq: [
      { question: "How much does a website cost in Bangalore?", answer: "A standard 5-page site starts at Rs 35,000. Comprehensive site with blog and SEO is Rs 65,000. E-commerce starts at Rs 1,25,000 — significantly below typical Bangalore agency rates." },
      { question: "Do you work with startups?", answer: "Yes. Vyzma AI specialises in Bangalore startups at all stages with packages starting at Rs 35,000." },
      { question: "What is your tech stack?", answer: "Next.js with TypeScript, React, and Tailwind CSS. Hosted on Vercel with global CDN. AI features use GPT-4o and Claude." },
      { question: "Do you have a Bangalore office?", answer: "Yes. Vyzma AI has an Innovation Hub in Bangalore available for in-person client meetings." }
    ]
  },
  {
    slug: "web-design-real-estate-vizag",
    title: "Web Design for Real Estate in Vizag: Property Websites That Sell Homes Faster",
    metaTitle: "Web Design for Real Estate Vizag | Property Website Design | Vyzma AI",
    metaDescription: "Web design for real estate in Vizag. Vyzma AI builds property websites with virtual tours, MLS integration, lead capture, and AI chatbots. Help Vizag real estate agents and builders sell properties faster.",
    date: "2099-01-01",
    category: "Web Design",
    faq: [
      { question: "How much does a real estate website cost?", answer: "A real estate website starts at Rs 65,000 for a standard agent/builder site. Comprehensive platforms range from Rs 1,25,000 to Rs 2,50,000." },
      { question: "Can you integrate 99acres and MagicBricks?", answer: "Yes. Vyzma AI builds websites that integrate with 99acres and MagicBricks, automatically syncing property listings." },
      { question: "Do you include an AI chatbot for property enquiries?", answer: "Yes. The AI chatbot answers questions, suggests listings, qualifies leads, and schedules site visits 24/7." },
      { question: "Is the website mobile-friendly?", answer: "Absolutely. Mobile-first design recognising that most property buyers start their search on phones." }
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
    `  <meta name="author" content="Vyzma AI" />\n    <script type="application/ld+json">\n${JSON.stringify(blogSchema, null, 2)}\n    </script>\n  </head>`
  );

  const outDir = path.join(distDir, "blog", post.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), page, "utf-8");

  console.log(`  OK  blog/${post.slug}/index.html`);
}

// === Static body for city pages (SEO: H1 + content visible to crawlers) ===

const PAGE_HEADER = `
<header class="fixed inset-x-0 top-4 z-50 h-16 border-none sm:inset-x-6">
  <div class="absolute top-1/2 w-full -translate-y-1/2">
    <nav class="flex size-full items-center justify-between p-4">
      <div class="flex items-center gap-7">
        <a href="/" class="transition hover:opacity-75"><img src="/img/vyzma-logo.png" alt="Vyzma" width="128" height="128" class="h-32 w-auto" /></a>
        <a href="/#contact" class="hidden md:inline-flex items-center justify-center gap-1 rounded-full bg-[#3DA3FF] px-4 py-2 text-xs font-general uppercase tracking-widest text-white">Book Free Call</a>
      </div>
      <div class="hidden md:flex items-center gap-6 text-white/70 text-xs font-general uppercase tracking-widest">
        <a href="/" class="nav-hover-btn">Home</a>
        <a href="/blog" class="nav-hover-btn">Blog</a>
        <a href="/#services" class="nav-hover-btn">Services</a>
        <a href="/#industries" class="nav-hover-btn">Industries</a>
        <a href="/#contact" class="nav-hover-btn">Contact</a>
      </div>
    </nav>
  </div>
</header>`;

const PAGE_FOOTER = `
<footer class="bg-[#0A0A0D] border-t border-white/5 px-5 sm:px-8 md:px-10 pt-16 pb-8">
  <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
    <div>
      <img src="/img/vyzma-logo.png" alt="Vyzma" width="96" height="48" class="h-12 w-auto mb-4" />
      <p class="text-white/40 text-sm leading-relaxed mb-6">India's most affordable AI agency.<br />Helping businesses grow with AI.<br />Starting at ₹4,999/month.</p>
    </div>
    <div>
      <h4 class="text-white font-medium text-sm uppercase tracking-wider mb-5">Services</h4>
      <ul class="space-y-2.5 text-white/40 text-sm">
        <li><a href="/#services" class="hover:text-white">AI Chatbots</a></li><li>AI Voice Agents</li><li>Workflow Automation</li>
        <li><a href="/#services" class="hover:text-white">Website Design</a></li><li>SEO + GEO + AEO</li><li>Meta Ads</li><li>Google Ads</li><li>Digital Marketing</li>
      </ul>
    </div>
    <div>
      <h4 class="text-white font-medium text-sm uppercase tracking-wider mb-5">Company</h4>
      <ul class="space-y-2.5 text-white/40 text-sm">
        <li><a href="/about" class="hover:text-white">About Vyzma</a></li>
        <li><a href="/blog" class="hover:text-white">Blog</a></li>
        <li><a href="/#contact" class="hover:text-white">Contact Us</a></li>
      </ul>
    </div>
    <div>
      <h4 class="text-white font-medium text-sm uppercase tracking-wider mb-5">Get in Touch</h4>
      <ul class="space-y-2.5 text-white/40 text-sm">
        <li>📱 8886720908</li><li>📧 vyzmaai.in@gmail.com</li>
      </ul>
    </div>
  </div>
  <div class="max-w-5xl mx-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
    <p class="text-white/30 text-xs">© 2026 Vyzma AI. All rights reserved.</p>
  </div>
</footer>`;

function buildCityHubBody(city) {
  const serviceCards = CITY_SERVICES.map((s, i) => `
    <a href="/${city.slug}/${s.slug}" class="group block p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300">
      <span class="text-[10px] font-mono tracking-[0.1em] text-white/20 mb-3 block">0${i + 1}</span>
      <h3 class="text-lg font-semibold text-white group-hover:text-[#c4a05c] transition-colors mb-2">${escapeHtml(s.name)} in ${escapeHtml(city.name)}</h3>
      <p class="text-sm text-white/40 leading-relaxed">${escapeHtml(city.name)} businesses trust Vyzma AI for ${s.keywords.toLowerCase()}.</p>
    </a>`).join("\n");

  return `
${PAGE_HEADER}
<main class="min-h-screen bg-black">
  <section class="relative pt-32 pb-20 px-6 md:px-12">
    <div class="max-w-6xl mx-auto">
      <nav class="mb-6 text-sm">
        <a href="/" class="text-white/40 hover:text-white/60 transition-colors">Home</a>
        <span class="text-white/20 mx-2">/</span>
        <span class="text-white/60">${escapeHtml(city.name)}</span>
      </nav>
      <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">AI & Digital Services in <span class="text-[#c4a05c]">${escapeHtml(city.name)}</span></h1>
      <p class="text-lg text-white/50 mb-2">${escapeHtml(city.tagline)}</p>
      <p class="text-white/40 max-w-3xl mb-8">${escapeHtml(city.description)}</p>
      <div class="flex flex-wrap gap-6 mb-12 text-sm">
        <span class="text-white/40">Population: <span class="text-white/80">${escapeHtml(city.population)}</span></span>
        <span class="text-white/40">Known for: <span class="text-white/80">${escapeHtml(city.knownFor)}</span></span>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${serviceCards}
      </div>
    </div>
  </section>
  <section class="py-20 px-6 md:px-12 border-t border-white/5">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-2xl md:text-3xl font-bold text-white mb-4">Why ${escapeHtml(city.name)} Businesses Choose Vyzma AI</h2>
      <p class="text-white/50 mb-8 max-w-2xl mx-auto">We build AI-powered solutions that help ${escapeHtml(city.name)} businesses automate operations, engage customers, and drive measurable growth. From chatbots and automation to SEO, website design, and digital marketing — we deliver results.</p>
      <a href="https://wa.me/919139393097" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-4 bg-[#c4a05c] text-black font-semibold rounded-lg hover:bg-[#d4b06c] transition-colors">Book a Free Consultation</a>
    </div>
  </section>
</main>
${PAGE_FOOTER}`;
}

function buildCityServiceBody(city, service) {
  const points = [
    `${city.name} expertise — we understand local business needs`,
    `Team of AI specialists delivering results for Indian businesses`,
    `Proven track record with clients across ${city.name}`,
    `Affordable pricing built for ${city.name} businesses`,
    `Multilingual support — English, Hindi, and regional languages`,
    `End-to-end service from strategy to execution and support`,
  ].map((p) => `
      <div class="flex items-start gap-3 p-4 rounded-lg border border-white/5 bg-white/[0.02]">
        <span class="text-[#c4a05c] mt-0.5 shrink-0">◆</span>
        <span class="text-white/60 text-sm">${escapeHtml(p)}</span>
      </div>`).join("\n");

  const otherServices = CITY_SERVICES
    .filter((s) => s.slug !== service.slug)
    .map((s) => `
      <a href="/${city.slug}/${s.slug}" class="block p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 transition-all text-sm">
        <span class="text-white/80">${escapeHtml(s.name)} in ${escapeHtml(city.name)}</span>
      </a>`).join("\n");

  return `
${PAGE_HEADER}
<main class="min-h-screen bg-black">
  <section class="relative pt-32 pb-20 px-6 md:px-12">
    <div class="max-w-5xl mx-auto">
      <nav class="mb-6 text-sm">
        <a href="/" class="text-white/40 hover:text-white/60 transition-colors">Home</a>
        <span class="text-white/20 mx-2">/</span>
        <a href="/${city.slug}" class="text-white/40 hover:text-white/60 transition-colors">${escapeHtml(city.name)}</a>
        <span class="text-white/20 mx-2">/</span>
        <span class="text-white/60">${escapeHtml(service.shortName)}</span>
      </nav>
      <h1 class="text-3xl md:text-5xl font-bold text-white mb-4">${escapeHtml(service.name)} in <span class="text-[#c4a05c]">${escapeHtml(city.name)}</span></h1>
      <p class="text-white/50 text-lg mb-8">${escapeHtml(city.tagline)}</p>
      <p class="text-white/40 max-w-3xl mb-12 leading-relaxed">Vyzma AI provides expert ${escapeHtml(service.keywords.toLowerCase())} for ${escapeHtml(city.name)} businesses. ${escapeHtml(city.tagline)}. Book a free consultation.</p>
      <div class="grid md:grid-cols-2 gap-4 mb-12">
        ${points}
      </div>
      <div class="flex flex-wrap gap-4">
        <a href="https://wa.me/919139393097" target="_blank" rel="noopener noreferrer" class="px-8 py-4 bg-[#c4a05c] text-black font-semibold rounded-lg hover:bg-[#d4b06c] transition-colors">Get Started in ${escapeHtml(city.name)}</a>
        <a href="/${city.slug}" class="px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors">All ${escapeHtml(city.name)} Services</a>
      </div>
    </div>
  </section>
  <section class="py-16 px-6 md:px-12 border-t border-white/5">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-2xl font-bold text-white mb-8">Other Services in ${escapeHtml(city.name)}</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        ${otherServices}
      </div>
    </div>
  </section>
</main>
${PAGE_FOOTER}`;
}

// === City Hub Pages ===
for (const city of CITIES) {
  const hubOverride = city.slug === "vizag" ? VIZAG_OVERRIDES.hub : null;
  const title = hubOverride ? hubOverride.title : `AI & Digital Services in ${city.name} | Vyzma AI`;
  const desc = hubOverride ? hubOverride.desc : `Best AI agency, website design, and digital marketing in ${city.name}, ${city.state}. ${city.tagline}. Vyzma AI provides AI chatbots, SEO, Google Ads, and social media management for ${city.name} businesses.`;

  let page = html;
  page = page.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  page = page.replace(/<meta\s+name="description"[\s\S]*?\/?>/, (m) => m.replace(/content="[^"]*"/, `content="${escapeAttr(desc)}"`));
  page = page.replace(/<link rel="canonical"[^>]*\/?>/, `<link rel="canonical" href="${SITE_URL}/${city.slug}/" />`);
  page = page.replace(/<meta property="og:url"[^>]*\/?>/, `<meta property="og:url" content="${SITE_URL}/${city.slug}/" />`);
  page = page.replace(/<meta property="og:title"[^>]*\/?>/, `<meta property="og:title" content="${escapeAttr(title)}" />`);
  page = page.replace(/<meta\s+property="og:description"[\s\S]*?\/?>/, `<meta property="og:description" content="${escapeAttr(desc)}" />`);
  page = page.replace(/<meta property="og:image"[^>]*\/?>/, `<meta property="og:image" content="${OG_FALLBACK}" />`);
  page = page.replace(/<meta name="twitter:title"[^>]*\/?>/, `<meta name="twitter:title" content="${escapeAttr(title)}" />`);
  page = page.replace(/<meta\s+name="twitter:description"[\s\S]*?\/?>/, `<meta name="twitter:description" content="${escapeAttr(desc)}" />`);
  page = page.replace(/<meta name="twitter:image"[^>]*\/?>/, `<meta name="twitter:image" content="${OG_FALLBACK}" />`);

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

  page = page.replace('<div id="root"></div>', `<div id="root">${buildCityHubBody(city)}</div>`);

  const outDir = path.join(distDir, city.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), page, "utf-8");
  console.log(`  OK  ${city.slug}/index.html (city hub)`);
}

// === City Service Pages ===
for (const city of CITIES) {
  for (const service of CITY_SERVICES) {
    const serviceOverride = city.slug === "vizag" && VIZAG_OVERRIDES[service.slug] ? VIZAG_OVERRIDES[service.slug] : null;
    const title = serviceOverride ? serviceOverride.title : `${service.shortName} in ${city.name} | Vyzma AI`;
    const desc = serviceOverride ? serviceOverride.desc : `Best ${service.shortName.toLowerCase()} in ${city.name}, ${city.state}. ${city.tagline}. Vyzma AI provides expert ${service.keywords.toLowerCase()} for ${city.name} businesses. Book a free consultation.`;

    let page = html;
    page = page.replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
    page = page.replace(/<meta\s+name="description"[\s\S]*?\/?>/, (m) => m.replace(/content="[^"]*"/, `content="${escapeAttr(desc)}"`));
    page = page.replace(/<link rel="canonical"[^>]*\/?>/, `<link rel="canonical" href="${SITE_URL}/${city.slug}/${service.slug}" />`);
    page = page.replace(/<meta property="og:url"[^>]*\/?>/, `<meta property="og:url" content="${SITE_URL}/${city.slug}/${service.slug}" />`);
    page = page.replace(/<meta property="og:title"[^>]*\/?>/, `<meta property="og:title" content="${escapeAttr(title)}" />`);
    page = page.replace(/<meta\s+property="og:description"[\s\S]*?\/?>/, `<meta property="og:description" content="${escapeAttr(desc)}" />`);
    page = page.replace(/<meta property="og:image"[^>]*\/?>/, `<meta property="og:image" content="${OG_FALLBACK}" />`);
    page = page.replace(/<meta name="twitter:title"[^>]*\/?>/, `<meta name="twitter:title" content="${escapeAttr(title)}" />`);
    page = page.replace(/<meta\s+name="twitter:description"[\s\S]*?\/?>/, `<meta name="twitter:description" content="${escapeAttr(desc)}" />`);
    page = page.replace(/<meta name="twitter:image"[^>]*\/?>/, `<meta name="twitter:image" content="${OG_FALLBACK}" />`);

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

    page = page.replace('<div id="root"></div>', `<div id="root">${buildCityServiceBody(city, service)}</div>`);

    const outDir = path.join(distDir, city.slug, service.slug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "index.html"), page, "utf-8");
  }
}

const totalCityPages = CITIES.length * CITY_SERVICES.length;
console.log(`  OK  ${totalCityPages} city-service pages prerendered.`);
console.log(`\nDone — ${BLOG_POSTS.length} blog + ${totalCityPages} city pages prerendered.`);

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
