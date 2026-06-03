const fs = require("fs");
const path = require("path");

const SITE_URL = "https://vyzma.in";
const OG_FALLBACK = `${SITE_URL}/og-homepage.png`;

const CITIES = [
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra", tagline: "India's Financial & Commercial Capital", population: "12.6M+" },
  { slug: "delhi", name: "Delhi", state: "Delhi NCR", tagline: "India's Capital & Political Hub", population: "19M+" },
  { slug: "bangalore", name: "Bengaluru", state: "Karnataka", tagline: "India's Silicon Valley & Tech Capital", population: "8.4M+" },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana", tagline: "The City of Pearls & Tech Innovation", population: "6.9M+" },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu", tagline: "India's Manufacturing & Auto Hub", population: "7.1M+" },
  { slug: "kolkata", name: "Kolkata", state: "West Bengal", tagline: "The City of Joy — Eastern India's Business Hub", population: "4.5M+" },
  { slug: "pune", name: "Pune", state: "Maharashtra", tagline: "India's Education & Automotive Hub", population: "3.1M+" },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat", tagline: "India's Commercial & Industrial Powerhouse", population: "5.6M+" },
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

const BLOG_POSTS = [
  {
    slug: "what-is-vyzma-ai",
    title: "What is Vyzma AI? India's Premier AI Agency — Services, Locations & Results",
    metaTitle: "What is Vyzma AI? India's Premier AI Agency | Vyzma AI",
    metaDescription: "Vyzma AI is India's premier AI agency based in Visakhapatnam & Bangalore. We build AI chatbots, automation, SEO, and performance marketing for Indian businesses. Learn about our services and results.",
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
    metaTitle: "Google AI Hub Vizag Businesses 2026 | Vyzma AI",
    metaDescription: "Google AI Hub Vizag businesses 2026 guide. Learn how Vizag companies leverage Gemini, AI Overviews and Google Cloud AI for growth. Practical insights from Rushikonda IT corridor to Madhurawada tech parks.",
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
    metaTitle: "AI Automation Vizag 2026 | Workflow Automation Guide | Vyzma AI",
    metaDescription: "AI automation Vizag businesses in 2026: Complete guide to workflow automation for logistics, retail, and manufacturing. Real ROI data from Gajuwaka, MVP Colony, and Pendurthi companies.",
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
    metaTitle: "AI Chatbots Visakhapatnam 2026 | Business Guide | Vyzma AI",
    metaDescription: "AI chatbots Visakhapatnam 2026: Complete guide for local businesses. Learn how clinics in MVP Colony, resorts in Rushikonda, and e-commerce stores in Dwaraka Nagar use AI chatbots.",
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
    metaTitle: "AI for Real Estate Vizag 2026 | Vyzma AI",
    metaDescription: "Explore how AI for real estate Vizag 2026 helps builders and agents automate lead scoring, schedule site visits, and run 24/7 property chatbots across Rushikonda, Madhurawada, and Kommadi.",
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
    metaTitle: "SEO Agency Visakhapatnam 2026 | AI-Powered Search Optimization | Vyzma AI",
    metaDescription: "Top SEO agency Visakhapatnam 2026 offering AI-driven local SEO, technical SEO, and GEO services. Helping Vizag businesses rank #1 on Google.",
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
    metaTitle: "WhatsApp Marketing Vizag 2026 | Vyzma AI",
    metaDescription: "Complete guide to WhatsApp marketing Vizag 2026. Learn how Vizag businesses use AI chatbots, broadcast campaigns, and WhatsApp Business API to grow revenue.",
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
    metaTitle: "Best AI Agency in India 2026 | Vyzma AI",
    metaDescription: "Best AI agency in India 2026 guide. Compare enterprise giants, AI-native startups, mid-market agencies, and affordable full-service options. Real scenarios and pricing comparison.",
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
