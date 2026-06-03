const fs = require("fs");
const path = require("path");

const DIR = path.join(__dirname, "..", "public", "blog-images", "how-to-choose-ai-agency-india-2026");
fs.mkdirSync(DIR, { recursive: true });

const images = [
  {
    name: "hero",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2e"/><stop offset="100%" style="stop-color:#16213e"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <circle cx="200" cy="150" r="180" fill="#0f3460" opacity="0.6"/>
  <circle cx="1000" cy="450" r="220" fill="#0f3460" opacity="0.4"/>
  <circle cx="600" cy="315" r="120" fill="#e94560" opacity="0.15"/>
  <text x="600" y="220" font-family="Arial,sans-serif" font-size="52" font-weight="bold" fill="#ffffff" text-anchor="middle">Choose Your AI Agency</text>
  <text x="600" y="290" font-family="Arial,sans-serif" font-size="32" fill="#a0aec0" text-anchor="middle">India 2026: Honest SMB Guide</text>
  <text x="600" y="350" font-family="Arial,sans-serif" font-size="20" fill="#718096" text-anchor="middle">Vizag · Bangalore · Hyderabad · Mumbai · Delhi</text>
  <rect x="480" y="420" width="240" height="50" rx="25" fill="#e94560"/>
  <text x="600" y="452" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">Free Consultation →</text>
</svg>`
  },
  {
    name: "framework",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <defs><linearGradient id="g2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2e"/><stop offset="100%" style="stop-color:#16213e"/></linearGradient></defs>
  <rect width="800" height="500" fill="url(#g2)"/>
  <text x="400" y="50" font-family="Arial,sans-serif" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">5-Point Decision Framework</text>
  <g transform="translate(80,90)">
    <circle cx="30" cy="0" r="20" fill="#e94560"/><text x="30" y="5" font-family="Arial,sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">1</text>
    <text x="65" y="5" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#ffffff">Portfolio Depth</text>
    <text x="65" y="28" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">Have they built real AI systems, not just websites?</text>
  </g>
  <g transform="translate(80,170)">
    <circle cx="30" cy="0" r="20" fill="#e94560"/><text x="30" y="5" font-family="Arial,sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">2</text>
    <text x="65" y="5" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#ffffff">Technical Depth</text>
    <text x="65" y="28" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">Can they build AI agents, RAG, voice AI — or just chatbots?</text>
  </g>
  <g transform="translate(80,250)">
    <circle cx="30" cy="0" r="20" fill="#e94560"/><text x="30" y="5" font-family="Arial,sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">3</text>
    <text x="65" y="5" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#ffffff">Industry Fit</text>
    <text x="65" y="28" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">Do they understand YOUR business sector deeply?</text>
  </g>
  <g transform="translate(80,330)">
    <circle cx="30" cy="0" r="20" fill="#e94560"/><text x="30" y="5" font-family="Arial,sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">4</text>
    <text x="65" y="5" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#ffffff">Pricing Transparency</text>
    <text x="65" y="28" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">Are they upfront about costs or hiding them?</text>
  </g>
  <g transform="translate(80,410)">
    <circle cx="30" cy="0" r="20" fill="#e94560"/><text x="30" y="5" font-family="Arial,sans-serif" font-size="16" font-weight="bold" fill="#fff" text-anchor="middle">5</text>
    <text x="65" y="5" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#ffffff">Post-Launch Support</text>
    <text x="65" y="28" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">Will they be there after the system goes live?</text>
  </g>
</svg>`
  },
  {
    name: "cities",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <defs><linearGradient id="g3" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2e"/><stop offset="100%" style="stop-color:#16213e"/></linearGradient></defs>
  <rect width="800" height="500" fill="url(#g3)"/>
  <text x="400" y="45" font-family="Arial,sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">AI Agencies Across India — City Guide</text>
  <g transform="translate(60, 90)">
    <rect width="320" height="70" rx="10" fill="#0f3460"/><text x="20" y="30" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#e94560">Visakhapatnam (Vizag)</text>
    <text x="20" y="52" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">Growing tech hub · Rushikonda, Madhurawada · Affordable AI talent</text>
  </g>
  <g transform="translate(420, 90)">
    <rect width="320" height="70" rx="10" fill="#0f3460"/><text x="20" y="30" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#e94560">Bangalore</text>
    <text x="20" y="52" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">India's AI capital · Koramangala, Whitefield · Premium pricing</text>
  </g>
  <g transform="translate(60, 190)">
    <rect width="320" height="70" rx="10" fill="#0f3460"/><text x="20" y="30" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#e94560">Hyderabad</text>
    <text x="20" y="52" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">Hitech City · Pharma & biotech AI · Growing AI ecosystem</text>
  </g>
  <g transform="translate(420, 190)">
    <rect width="320" height="70" rx="10" fill="#0f3460"/><text x="20" y="30" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#e94560">Mumbai</text>
    <text x="20" y="52" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">BFSI · Fintech · Enterprise-scale AI projects</text>
  </g>
  <g transform="translate(60, 290)">
    <rect width="320" height="70" rx="10" fill="#0f3460"/><text x="20" y="30" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#e94560">Delhi NCR</text>
    <text x="20" y="52" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">Gurugram, Noida · Startup-heavy · Competitive pricing</text>
  </g>
  <g transform="translate(420, 290)">
    <rect width="320" height="70" rx="10" fill="#0f3460"/><text x="20" y="30" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#e94560">Pune</text>
    <text x="20" y="52" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">Engineering talent pool · Auto & manufacturing AI</text>
  </g>
</svg>`
  },
  {
    name: "budget-chart",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <defs><linearGradient id="g4" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2e"/><stop offset="100%" style="stop-color:#16213e"/></linearGradient></defs>
  <rect width="800" height="500" fill="url(#g4)"/>
  <text x="400" y="45" font-family="Arial,sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">AI Agency Budgets for SMBs (2026)</text>
  <g transform="translate(100,100)">
    <rect x="0" y="0" width="180" height="40" rx="6" fill="#e94560"/><text x="90" y="25" font-family="Arial,sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">Under ₹1 Lakh</text>
    <text x="90" y="65" font-family="Arial,sans-serif" font-size="12" fill="#a0aec0" text-anchor="middle">Single chatbot<br/>Basic automation<br/>WhatsApp bot</text>
  </g>
  <g transform="translate(310,100)">
    <rect x="0" y="0" width="180" height="40" rx="6" fill="#e94560"/><text x="90" y="25" font-family="Arial,sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">₹1-5 Lakhs</text>
    <text x="90" y="65" font-family="Arial,sans-serif" font-size="12" fill="#a0aec0" text-anchor="middle">Multi-channel AI<br/>Workflow automation<br/>SEO + GEO package</text>
  </g>
  <g transform="translate(520,100)">
    <rect x="0" y="0" width="180" height="40" rx="6" fill="#e94560"/><text x="90" y="25" font-family="Arial,sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">₹5 Lakhs+</text>
    <text x="90" y="65" font-family="Arial,sans-serif" font-size="12" fill="#a0aec0" text-anchor="middle">Full AI transformation<br/>Custom development<br/>Enterprise integration</text>
  </g>
</svg>`
  },
  {
    name: "red-flags",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <defs><linearGradient id="g5" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2e"/><stop offset="100%" style="stop-color:#16213e"/></linearGradient></defs>
  <rect width="800" height="500" fill="url(#g5)"/>
  <text x="400" y="45" font-family="Arial,sans-serif" font-size="26" font-weight="bold" fill="#ffffff" text-anchor="middle">Red Flags When Choosing an AI Agency</text>
  <g transform="translate(60,80)">
    <text x="0" y="20" font-family="Arial,sans-serif" font-size="18" fill="#e94560">🚩</text><text x="35" y="20" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#ffffff">No portfolio you can verify</text>
    <text x="35" y="42" font-family="Arial,sans-serif" font-size="14" fill="#a0aec0">If every case study is "confidential," something is wrong.</text>
  </g>
  <g transform="translate(60,140)">
    <text x="0" y="20" font-family="Arial,sans-serif" font-size="18" fill="#e94560">🚩</text><text x="35" y="20" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#ffffff">Claims to be the "best" at everything</text>
    <text x="35" y="42" font-family="Arial,sans-serif" font-size="14" fill="#a0aec0">No agency excels at everything. Specialists outperform generalists.</text>
  </g>
  <g transform="translate(60,200)">
    <text x="0" y="20" font-family="Arial,sans-serif" font-size="18" fill="#e94560">🚩</text><text x="35" y="20" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#ffffff">No pricing on website</text>
    <text x="35" y="42" font-family="Arial,sans-serif" font-size="14" fill="#a0aec0">If you have to "book a call" to see any pricing, expect surprises.</text>
  </g>
  <g transform="translate(60,260)">
    <text x="0" y="20" font-family="Arial,sans-serif" font-size="18" fill="#e94560">🚩</text><text x="35" y="20" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#ffffff">Promises AGI or "fully autonomous" AI</text>
    <text x="35" y="42" font-family="Arial,sans-serif" font-size="14" fill="#a0aec0">Real AI agencies are honest about what AI can and cannot do.</text>
  </g>
  <g transform="translate(60,320)">
    <text x="0" y="20" font-family="Arial,sans-serif" font-size="18" fill="#e94560">🚩</text><text x="35" y="20" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="#ffffff">No post-launch support plan</text>
    <text x="35" y="42" font-family="Arial,sans-serif" font-size="14" fill="#a0aec0">AI systems need monitoring. If there's no retainer option, run.</text>
  </g>
</svg>`
  },
  {
    name: "workflow",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
  <defs><linearGradient id="g6" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2e"/><stop offset="100%" style="stop-color:#16213e"/></linearGradient></defs>
  <rect width="800" height="400" fill="url(#g6)"/>
  <text x="400" y="40" font-family="Arial,sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">How a Professional AI Agency Works</text>
  <g transform="translate(40,80)">
    <rect width="130" height="80" rx="10" fill="#0f3460"/>
    <text x="65" y="35" font-family="Arial,sans-serif" font-size="14" font-weight="bold" fill="#e94560" text-anchor="middle">1. Discovery</text>
    <text x="65" y="55" font-family="Arial,sans-serif" font-size="11" fill="#a0aec0" text-anchor="middle">Understand your</text>
    <text x="65" y="68" font-family="Arial,sans-serif" font-size="11" fill="#a0aec0" text-anchor="middle">business & goals</text>
  </g>
  <text x="190" y="120" font-family="Arial,sans-serif" font-size="24" fill="#e94560">→</text>
  <g transform="translate(220,80)">
    <rect width="130" height="80" rx="10" fill="#0f3460"/>
    <text x="65" y="35" font-family="Arial,sans-serif" font-size="14" font-weight="bold" fill="#e94560" text-anchor="middle">2. Strategy</text>
    <text x="65" y="55" font-family="Arial,sans-serif" font-size="11" fill="#a0aec0" text-anchor="middle">AI roadmap +</text>
    <text x="65" y="68" font-family="Arial,sans-serif" font-size="11" fill="#a0aec0" text-anchor="middle">tech architecture</text>
  </g>
  <text x="370" y="120" font-family="Arial,sans-serif" font-size="24" fill="#e94560">→</text>
  <g transform="translate(400,80)">
    <rect width="130" height="80" rx="10" fill="#0f3460"/>
    <text x="65" y="35" font-family="Arial,sans-serif" font-size="14" font-weight="bold" fill="#e94560" text-anchor="middle">3. Build</text>
    <text x="65" y="55" font-family="Arial,sans-serif" font-size="11" fill="#a0aec0" text-anchor="middle">Develop, test,</text>
    <text x="65" y="68" font-family="Arial,sans-serif" font-size="11" fill="#a0aec0" text-anchor="middle">and deploy</text>
  </g>
  <text x="550" y="120" font-family="Arial,sans-serif" font-size="24" fill="#e94560">→</text>
  <g transform="translate(580,80)">
    <rect width="130" height="80" rx="10" fill="#0f3460"/>
    <text x="65" y="35" font-family="Arial,sans-serif" font-size="14" font-weight="bold" fill="#e94560" text-anchor="middle">4. Support</text>
    <text x="65" y="55" font-family="Arial,sans-serif" font-size="11" fill="#a0aec0" text-anchor="middle">Monitor, optimize,</text>
    <text x="65" y="68" font-family="Arial,sans-serif" font-size="11" fill="#a0aec0" text-anchor="middle">and iterate</text>
  </g>
</svg>`
  },
  {
    name: "roi",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
  <defs><linearGradient id="g7" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2e"/><stop offset="100%" style="stop-color:#16213e"/></linearGradient></defs>
  <rect width="800" height="400" fill="url(#g7)"/>
  <text x="400" y="45" font-family="Arial,sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">Real ROI from AI for Indian SMBs</text>
  <g transform="translate(60, 80)">
    <rect width="320" height="110" rx="10" fill="#0f3460"/>
    <text x="20" y="30" font-family="Arial,sans-serif" font-size="16" font-weight="bold" fill="#e94560">Chatbots</text>
    <text x="20" y="55" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">• 80% of routine inquiries automated</text>
    <text x="20" y="75" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">• 3x more leads captured after hours</text>
    <text x="20" y="95" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">• 40-60% reduction in support costs</text>
  </g>
  <g transform="translate(420, 80)">
    <rect width="320" height="110" rx="10" fill="#0f3460"/>
    <text x="20" y="30" font-family="Arial,sans-serif" font-size="16" font-weight="bold" fill="#e94560">Workflow Automation</text>
    <text x="20" y="55" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">• 50% reduction in ops time</text>
    <text x="20" y="75" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">• 35% faster lead-to-close cycle</text>
    <text x="20" y="95" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">• 99% reduction in data entry errors</text>
  </g>
  <g transform="translate(60, 220)">
    <rect width="320" height="110" rx="10" fill="#0f3460"/>
    <text x="20" y="30" font-family="Arial,sans-serif" font-size="16" font-weight="bold" fill="#e94560">SEO + GEO</text>
    <text x="20" y="55" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">• 200%+ organic traffic growth in 6 months</text>
    <text x="20" y="75" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">• Featured in AI search responses</text>
    <text x="20" y="95" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">• Cost per lead drops 60-80%</text>
  </g>
  <g transform="translate(420, 220)">
    <rect width="320" height="110" rx="10" fill="#0f3460"/>
    <text x="20" y="30" font-family="Arial,sans-serif" font-size="16" font-weight="bold" fill="#e94560">Voice AI + Ads</text>
    <text x="20" y="55" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">• 24/7 voice agent handling calls</text>
    <text x="20" y="75" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">• 3x ROAS on AI-optimized ad campaigns</text>
    <text x="20" y="95" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0">• Pay-per-lead vs pay-per-click savings</text>
  </g>
</svg>`
  },
  {
    name: "team",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="400" viewBox="0 0 800 400">
  <defs><linearGradient id="g8" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2e"/><stop offset="100%" style="stop-color:#16213e"/></linearGradient></defs>
  <rect width="800" height="400" fill="url(#g8)"/>
  <text x="400" y="40" font-family="Arial,sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">What a Full-Service AI Agency Looks Like</text>
  <g transform="translate(100,70)">
    <circle cx="40" cy="40" r="35" fill="#0f3460"/><text x="40" y="45" font-family="Arial,sans-serif" font-size="12" fill="#e94560" text-anchor="middle">AI/ML</text>
    <text x="40" y="95" font-family="Arial,sans-serif" font-size="13" fill="#ffffff" text-anchor="middle">AI Engineers</text>
  </g>
  <g transform="translate(280,70)">
    <circle cx="40" cy="40" r="35" fill="#0f3460"/><text x="40" y="45" font-family="Arial,sans-serif" font-size="12" fill="#e94560" text-anchor="middle">Dev</text>
    <text x="40" y="95" font-family="Arial,sans-serif" font-size="13" fill="#ffffff" text-anchor="middle">Developers</text>
  </g>
  <g transform="translate(460,70)">
    <circle cx="40" cy="40" r="35" fill="#0f3460"/><text x="40" y="45" font-family="Arial,sans-serif" font-size="12" fill="#e94560" text-anchor="middle">SEO</text>
    <text x="40" y="95" font-family="Arial,sans-serif" font-size="13" fill="#ffffff" text-anchor="middle">SEO Specialists</text>
  </g>
  <g transform="translate(640,70)">
    <circle cx="40" cy="40" r="35" fill="#0f3460"/><text x="40" y="45" font-family="Arial,sans-serif" font-size="12" fill="#e94560" text-anchor="middle">Ads</text>
    <text x="40" y="95" font-family="Arial,sans-serif" font-size="13" fill="#ffffff" text-anchor="middle">Ads Managers</text>
  </g>
  <g transform="translate(190,200)">
    <circle cx="40" cy="40" r="35" fill="#0f3460"/><text x="40" y="45" font-family="Arial,sans-serif" font-size="12" fill="#e94560" text-anchor="middle">PM</text>
    <text x="40" y="95" font-family="Arial,sans-serif" font-size="13" fill="#ffffff" text-anchor="middle">Project Mgrs</text>
  </g>
  <g transform="translate(370,200)">
    <circle cx="40" cy="40" r="35" fill="#0f3460"/><text x="40" y="45" font-family="Arial,sans-serif" font-size="12" fill="#e94560" text-anchor="middle">UX</text>
    <text x="40" y="95" font-family="Arial,sans-serif" font-size="13" fill="#ffffff" text-anchor="middle">Designers</text>
  </g>
  <g transform="translate(550,200)">
    <circle cx="40" cy="40" r="35" fill="#0f3460"/><text x="40" y="45" font-family="Arial,sans-serif" font-size="12" fill="#e94560" text-anchor="middle">Sup</text>
    <text x="40" y="95" font-family="Arial,sans-serif" font-size="13" fill="#ffffff" text-anchor="middle">Support</text>
  </g>
</svg>`
  },
  {
    name: "pricing-table",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <defs><linearGradient id="g9" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2e"/><stop offset="100%" style="stop-color:#16213e"/></linearGradient></defs>
  <rect width="800" height="500" fill="url(#g9)"/>
  <text x="400" y="40" font-family="Arial,sans-serif" font-size="24" font-weight="bold" fill="#ffffff" text-anchor="middle">AI Agency Pricing Comparison</text>
  <g transform="translate(60,70)">
    <rect x="0" y="0" width="200" height="35" rx="6" fill="#e94560"/><text x="100" y="23" font-family="Arial,sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">Service</text>
    <rect x="0" y="45" width="200" height="35" rx="4" fill="#0f3460"/><text x="15" y="67" font-family="Arial,sans-serif" font-size="13" fill="#fff">AI Chatbot Setup</text>
    <rect x="0" y="90" width="200" height="35" rx="4" fill="#0f3460"/><text x="15" y="112" font-family="Arial,sans-serif" font-size="13" fill="#fff">Workflow Automation</text>
    <rect x="0" y="135" width="200" height="35" rx="4" fill="#0f3460"/><text x="15" y="157" font-family="Arial,sans-serif" font-size="13" fill="#fff">SEO + GEO Package</text>
    <rect x="0" y="180" width="200" height="35" rx="4" fill="#0f3460"/><text x="15" y="202" font-family="Arial,sans-serif" font-size="13" fill="#fff">Voice AI Agent</text>
    <rect x="0" y="225" width="200" height="35" rx="4" fill="#0f3460"/><text x="15" y="247" font-family="Arial,sans-serif" font-size="13" fill="#fff">Google Ads Management</text>
    <rect x="0" y="270" width="200" height="35" rx="4" fill="#0f3460"/><text x="15" y="292" font-family="Arial,sans-serif" font-size="13" fill="#fff">Website + AI</text>
  </g>
  <g transform="translate(300,70)">
    <rect x="0" y="0" width="200" height="35" rx="6" fill="#e94560"/><text x="100" y="23" font-family="Arial,sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">Enterprise Agency</text>
    <rect x="0" y="45" width="200" height="35" rx="4" fill="#0f3460"/><text x="100" y="67" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0" text-anchor="middle">₹3-10 Lakhs</text>
    <rect x="0" y="90" width="200" height="35" rx="4" fill="#0f3460"/><text x="100" y="112" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0" text-anchor="middle">₹5-20 Lakhs</text>
    <rect x="0" y="135" width="200" height="35" rx="4" fill="#0f3460"/><text x="100" y="157" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0" text-anchor="middle">₹2-8 Lakhs/mo</text>
    <rect x="0" y="180" width="200" height="35" rx="4" fill="#0f3460"/><text x="100" y="202" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0" text-anchor="middle">₹5-15 Lakhs</text>
    <rect x="0" y="225" width="200" height="35" rx="4" fill="#0f3460"/><text x="100" y="247" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0" text-anchor="middle">₹1-5 Lakhs/mo</text>
    <rect x="0" y="270" width="200" height="35" rx="4" fill="#0f3460"/><text x="100" y="292" font-family="Arial,sans-serif" font-size="13" fill="#a0aec0" text-anchor="middle">₹5-15 Lakhs</text>
  </g>
  <g transform="translate(540,70)">
    <rect x="0" y="0" width="200" height="35" rx="6" fill="#e94560"/><text x="100" y="23" font-family="Arial,sans-serif" font-size="14" font-weight="bold" fill="#fff" text-anchor="middle">Vyzma AI (SMB)</text>
    <rect x="0" y="45" width="200" height="35" rx="4" fill="#1a3a5c"/><text x="100" y="67" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#4ade80" text-anchor="middle">₹50K-1L</text>
    <rect x="0" y="90" width="200" height="35" rx="4" fill="#1a3a5c"/><text x="100" y="112" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#4ade80" text-anchor="middle">₹75K-5L</text>
    <rect x="0" y="135" width="200" height="35" rx="4" fill="#1a3a5c"/><text x="100" y="157" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#4ade80" text-anchor="middle">₹15K-35K/mo</text>
    <rect x="0" y="180" width="200" height="35" rx="4" fill="#1a3a5c"/><text x="100" y="202" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#4ade80" text-anchor="middle">₹50K-2L</text>
    <rect x="0" y="225" width="200" height="35" rx="4" fill="#1a3a5c"/><text x="100" y="247" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#4ade80" text-anchor="middle">₹15K-50K/mo</text>
    <rect x="0" y="270" width="200" height="35" rx="4" fill="#1a3a5c"/><text x="100" y="292" font-family="Arial,sans-serif" font-size="13" font-weight="bold" fill="#4ade80" text-anchor="middle">₹35K-1.5L</text>
  </g>
</svg>`
  },
  {
    name: "cta",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="400" viewBox="0 0 1200 400">
  <defs><linearGradient id="g10" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1a1a2e"/><stop offset="100%" style="stop-color:#16213e"/></linearGradient></defs>
  <rect width="1200" height="400" fill="url(#g10)"/>
  <circle cx="300" cy="200" r="250" fill="#0f3460" opacity="0.4"/>
  <circle cx="900" cy="200" r="200" fill="#0f3460" opacity="0.3"/>
  <text x="600" y="150" font-family="Arial,sans-serif" font-size="42" font-weight="bold" fill="#ffffff" text-anchor="middle">Ready to Choose Your AI Agency?</text>
  <text x="600" y="200" font-family="Arial,sans-serif" font-size="20" fill="#a0aec0" text-anchor="middle">Book a free consultation. No pressure. Just honest advice.</text>
  <rect x="430" y="250" width="340" height="55" rx="27" fill="#e94560"/>
  <text x="600" y="284" font-family="Arial,sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">📞 +91-8886720908</text>
  <text x="600" y="340" font-family="Arial,sans-serif" font-size="14" fill="#718096" text-anchor="middle">Or email vyzmaai.in@gmail.com · Offices in Vizag & Bangalore</text>
</svg>`
  }
];

for (const img of images) {
  const filePath = path.join(DIR, `${img.name}.svg`);
  fs.writeFileSync(filePath, img.svg);
  console.log(`  OK  ${img.name}.svg`);
}

console.log(`\nDone — ${images.length} images generated in ${DIR}`);
