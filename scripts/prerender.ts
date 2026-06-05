import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { BLOG_POSTS } from '../src/lib/blog-data';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const siteUrl = 'https://vyzma.in';

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeAttr(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Vyzma AI',
  alternateName: 'Vyzma',
  url: siteUrl,
  description: 'AI and Digital Marketing Agency based in Visakhapatnam (Vizag) and Bangalore, India. We build AI chatbots, workflow automation, SEO, voice AI, and performance marketing systems for Indian businesses.',
  foundingDate: '2024',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8886720908',
    contactType: 'sales',
    email: 'vyzmaai.in@gmail.com',
    availableLanguage: ['English', 'Hindi', 'Telugu'],
  },
  address: [
    { '@type': 'PostalAddress', addressLocality: 'Visakhapatnam', addressRegion: 'Andhra Pradesh', addressCountry: 'IN' },
    { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' },
  ],
  sameAs: ['https://instagram.com/vyzmaai', 'https://linkedin.com/company/vyzmaai', 'https://youtube.com/@vyzmaai'],
};

function stripDefaultMeta(html: string): string {
  return html
    .replace(/<title>.*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*\/?>/g, '')
    .replace(/<link rel="canonical"[^>]*\/?>/g, '')
    .replace(/<meta property="og:[^"]*"[^>]*\/?>/g, '')
    .replace(/<meta name="twitter:[^"]*"[^>]*\/?>/g, '')
    .replace(/<meta name="robots"[^>]*\/?>/g, '');
}

function buildMetaTags(title: string, description: string, url: string, ogType = 'website'): string {
  return `
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeAttr(description)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:title" content="${escapeAttr(title)}" />
    <meta property="og:description" content="${escapeAttr(description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="${ogType}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(title)}" />
    <meta name="twitter:description" content="${escapeAttr(description)}" />`;
}

function jsonLdScript(schema: Record<string, unknown>): string {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

function injectIntoTemplate(template: string, headInjection: string, bodyContent: string): string {
  let html = stripDefaultMeta(template);
  html = html.replace(
    '</head>',
    `${headInjection}\n</head>`
  );
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${bodyContent}</div>`
  );
  return html;
}

/* ─── HOMEPAGE ─── */

function buildHomepage(template: string): string {
  const headInjection = `
    ${buildMetaTags(
      "Vyzma AI | India's Premier AI Agency — Vizag & Bangalore",
      "Vyzma AI is India's most affordable AI agency. AI chatbots, voice agents, workflow automation, SEO, and performance marketing for Indian businesses. Starting at ₹4,999/month. Based in Vizag and Bangalore.",
      siteUrl
    )}
    ${jsonLdScript(organizationSchema)}
  `;

  const bodyContent = `
<header class="fixed inset-x-0 top-4 z-50 h-16 border-none sm:inset-x-6" style="opacity:1;transform:translateY(0)">
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
</header>
<main>
  <section class="relative min-h-screen flex items-center justify-center bg-[#0C0C0C] overflow-hidden px-6">
    <div class="relative z-10 text-center max-w-4xl">
      <p class="text-[#3DA3FF] font-general text-[10px] uppercase tracking-[0.3em] mb-4">Next-Generation AI Platform</p>
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6">VYZMA <b>AI</b></h1>
      <p class="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">Intelligent agents, seamless automation, limitless possibilities. India's most affordable AI agency — starting at ₹4,999/month.</p>
      <div class="flex flex-wrap items-center justify-center gap-4">
        <a href="/#contact" class="inline-flex items-center justify-center rounded-lg bg-[#3DA3FF] px-8 py-3 text-sm font-semibold text-white">Book Free Call</a>
        <a href="/blog" class="inline-flex items-center justify-center rounded-lg border border-white/20 px-8 py-3 text-sm font-semibold text-white">Read Our Blog</a>
      </div>
    </div>
  </section>

  <section class="border-t border-white/[0.06] px-6 py-20 md:px-10 bg-[#0C0C0C]">
    <div class="mx-auto max-w-5xl text-center">
      <p class="text-[10px] font-general uppercase tracking-widest text-[#3DA3FF] mb-2">Trusted By</p>
      <h2 class="text-2xl font-bold text-white mb-8">Businesses Across India</h2>
      <div class="flex flex-wrap justify-center gap-8 text-white/30 text-sm">
        <span>Clinics & Hospitals</span><span>Restaurants & Cafes</span><span>Gyms & Fitness</span>
        <span>Coaching Institutes</span><span>Real Estate</span><span>E-commerce</span><span>Retail & Shops</span>
      </div>
    </div>
  </section>

  <section class="px-6 py-24 md:px-10 bg-[#0C0C0C] border-t border-white/[0.06]">
    <div class="mx-auto max-w-5xl">
      <p class="text-[10px] font-general uppercase tracking-widest text-[#3DA3FF] mb-2">About</p>
      <h2 class="text-3xl md:text-5xl font-black text-white mb-6">THE FUTURE OF INTELLIGENCE IS HERE</h2>
      <p class="text-white/60 text-lg max-w-3xl leading-relaxed">Vyzma AI is India's premier AI agency headquartered in Visakhapatnam and Bangalore. We build AI chatbots, workflow automation, SEO, voice AI, and performance marketing systems for Indian businesses. Our mission is to make AI accessible and affordable for every Indian business.</p>
    </div>
  </section>

  <section class="px-6 py-24 md:px-10 bg-[#0C0C0C] border-t border-white/[0.06]" id="services">
    <div class="mx-auto max-w-5xl">
      <p class="text-[10px] font-general uppercase tracking-widest text-[#3DA3FF] mb-2">Services</p>
      <h2 class="text-3xl md:text-5xl font-black text-white mb-12">WHAT WE BUILD</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-8">
          <h3 class="text-xl font-bold text-white mb-3">AI Chatbots</h3>
          <p class="text-white/50 leading-relaxed">Custom AI chatbots for customer support, lead generation, and engagement. Powered by Gemini, ChatGPT, and open-source LLMs. Starting at ₹4,999/month.</p>
        </div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-8">
          <h3 class="text-xl font-bold text-white mb-3">AI Voice Agents</h3>
          <p class="text-white/50 leading-relaxed">Voice AI agents that handle calls, appointment booking, and customer inquiries 24/7. Supports English, Hindi, and Telugu.</p>
        </div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-8">
          <h3 class="text-xl font-bold text-white mb-3">Workflow Automation</h3>
          <p class="text-white/50 leading-relaxed">Automate repetitive tasks, document processing, and business workflows. Reduce manual work by up to 80%.</p>
        </div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-8">
          <h3 class="text-xl font-bold text-white mb-3">SEO + GEO + AEO</h3>
          <p class="text-white/50 leading-relaxed">Rank in Google AI Overviews, ChatGPT Search, and Perplexity. Modern AI search optimization for Indian businesses.</p>
        </div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-8">
          <h3 class="text-xl font-bold text-white mb-3">Website Design</h3>
          <p class="text-white/50 leading-relaxed">Modern, fast, SEO-optimized websites built with React, GSAP, and Tailwind CSS. Prerendered for AI crawler visibility.</p>
        </div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-8">
          <h3 class="text-xl font-bold text-white mb-3">Digital Marketing</h3>
          <p class="text-white/50 leading-relaxed">Meta Ads, Google Ads, Instagram marketing, and content strategy. Performance-driven campaigns for Indian audiences.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="px-6 py-24 md:px-10 bg-[#0C0C0C] border-t border-white/[0.06]" id="industries">
    <div class="mx-auto max-w-5xl">
      <p class="text-[10px] font-general uppercase tracking-widest text-[#3DA3FF] mb-2">Industries</p>
      <h2 class="text-3xl md:text-5xl font-black text-white mb-6">WHO WE SERVE</h2>
      <p class="text-white/60 mb-10">We help businesses across industries in Vizag, Bangalore, and across India.</p>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5 text-center"><p class="text-white font-medium">Clinics & Hospitals</p><p class="text-white/40 text-sm mt-1">AI patient engagement</p></div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5 text-center"><p class="text-white font-medium">Restaurants & Cafes</p><p class="text-white/40 text-sm mt-1">AI ordering & marketing</p></div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5 text-center"><p class="text-white font-medium">Gyms & Fitness</p><p class="text-white/40 text-sm mt-1">AI lead gen & retention</p></div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5 text-center"><p class="text-white font-medium">Coaching Institutes</p><p class="text-white/40 text-sm mt-1">AI enrollment & support</p></div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5 text-center"><p class="text-white font-medium">Real Estate</p><p class="text-white/40 text-sm mt-1">AI lead qualification</p></div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5 text-center"><p class="text-white font-medium">D2C & E-commerce</p><p class="text-white/40 text-sm mt-1">AI customer automation</p></div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5 text-center"><p class="text-white font-medium">Retail & Shops</p><p class="text-white/40 text-sm mt-1">AI inventory & CRM</p></div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-5 text-center"><p class="text-white font-medium">Professional Services</p><p class="text-white/40 text-sm mt-1">AI workflow automation</p></div>
      </div>
    </div>
  </section>

  <section class="px-6 py-24 md:px-10 bg-[#0C0C0C] border-t border-white/[0.06]">
    <div class="mx-auto max-w-5xl">
      <p class="text-[10px] font-general uppercase tracking-widest text-[#3DA3FF] mb-2">Why Vyzma</p>
      <h2 class="text-3xl md:text-5xl font-black text-white mb-6">WHY CHOOSE US</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-8 text-center">
          <p class="text-3xl font-black text-[#3DA3FF] mb-2">₹4,999</p>
          <p class="text-white font-semibold mb-2">Starting Price</p>
          <p class="text-white/50 text-sm">Most affordable AI agency in India. No hidden costs.</p>
        </div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-8 text-center">
          <p class="text-3xl font-black text-[#3DA3FF] mb-2">2 Cities</p>
          <p class="text-white font-semibold mb-2">Vizag + Bangalore</p>
          <p class="text-white/50 text-sm">On-ground presence in both cities for local support.</p>
        </div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-8 text-center">
          <p class="text-3xl font-black text-[#3DA3FF] mb-2">24/7</p>
          <p class="text-white font-semibold mb-2">AI That Never Sleeps</p>
          <p class="text-white/50 text-sm">Your AI agents work round the clock, every day.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="px-6 py-24 md:px-10 bg-[#0C0C0C] border-t border-white/[0.06]">
    <div class="mx-auto max-w-3xl">
      <p class="text-[10px] font-general uppercase tracking-widest text-[#3DA3FF] mb-2">FAQ</p>
      <h2 class="text-3xl md:text-5xl font-black text-white mb-8">FREQUENTLY ASKED QUESTIONS</h2>
      <div class="space-y-4">
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
          <h3 class="text-white font-semibold mb-2">What does Vyzma AI do?</h3>
          <p class="text-white/50 text-sm leading-relaxed">Vyzma AI builds AI chatbots, voice agents, workflow automation, websites, and digital marketing systems for Indian businesses. We make AI accessible and affordable — starting at ₹4,999/month.</p>
        </div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
          <h3 class="text-white font-semibold mb-2">Where are you located?</h3>
          <p class="text-white/50 text-sm leading-relaxed">We have offices in Visakhapatnam (Vizag) and Bangalore. We serve clients all across India remotely and on-site in both cities.</p>
        </div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
          <h3 class="text-white font-semibold mb-2">How much does it cost?</h3>
          <p class="text-white/50 text-sm leading-relaxed">Our AI chatbot and automation packages start at ₹4,999/month. Website design starts at ₹9,999. Digital marketing packages are customized based on ad spend. Book a free call for a custom quote.</p>
        </div>
        <div class="rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
          <h3 class="text-white font-semibold mb-2">Do I need technical skills to use your AI solutions?</h3>
          <p class="text-white/50 text-sm leading-relaxed">No. We handle all setup, configuration, and maintenance. You just need to tell us what you want your AI to do. We make it work and keep it running.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="px-6 py-24 md:px-10 bg-[#0C0C0C] border-t border-white/[0.06]" id="contact">
    <div class="mx-auto max-w-3xl text-center">
      <p class="text-[10px] font-general uppercase tracking-widest text-[#3DA3FF] mb-2">Contact</p>
      <h2 class="text-3xl md:text-5xl font-black text-white mb-6">START WITH AI TODAY</h2>
      <p class="text-white/60 mb-8 max-w-xl mx-auto">Book a free 15-minute call to discuss your business needs. No commitment. No hard sell. Just honest advice on how AI can help your business grow.</p>
      <a href="https://wa.me/918886720908" class="inline-flex items-center justify-center rounded-lg bg-[#3DA3FF] px-8 py-3 text-sm font-semibold text-white">WhatsApp Us</a>
      <p class="text-white/30 text-sm mt-4">📞 8886720908 | 📧 vyzmaai.in@gmail.com</p>
    </div>
  </section>
</main>
<footer class="bg-[#0A0A0D] border-t border-white/5 px-5 sm:px-8 md:px-10 pt-16 pb-8">
  <div class="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
    <div>
      <img src="/img/vyzma-logo.png" alt="Vyzma" width="96" height="48" class="h-12 w-auto mb-4" />
      <p class="text-white/40 text-sm leading-relaxed mb-6">India's most affordable AI agency.<br />Helping businesses grow with AI.<br />Starting at ₹4,999/month.</p>
      <div class="flex gap-3">
        <a href="https://instagram.com/vyzmaai" target="_blank" rel="noopener noreferrer" class="text-white/30 hover:text-white transition text-lg">Instagram</a>
        <a href="https://linkedin.com/company/vyzmaai" target="_blank" rel="noopener noreferrer" class="text-white/30 hover:text-white transition text-lg">LinkedIn</a>
        <a href="https://youtube.com/@vyzmaai" target="_blank" rel="noopener noreferrer" class="text-white/30 hover:text-white transition text-lg">YouTube</a>
      </div>
    </div>
    <div>
      <h4 class="text-white font-medium text-sm uppercase tracking-wider mb-5">Services</h4>
      <ul class="space-y-2.5 text-white/40 text-sm">
        <li>AI Chatbots</li><li>AI Voice Agents</li><li>Workflow Automation</li>
        <li>Website Design</li><li>SEO + GEO + AEO</li><li>Meta Ads</li><li>Google Ads</li><li>Digital Marketing</li>
      </ul>
    </div>
    <div>
      <h4 class="text-white font-medium text-sm uppercase tracking-wider mb-5">Industries</h4>
      <ul class="space-y-2.5 text-white/40 text-sm">
        <li>Clinics & Hospitals</li><li>Restaurants & Cafes</li><li>Gyms & Fitness</li>
        <li>Coaching Institutes</li><li>Real Estate</li><li>E-commerce</li><li>Retail & Shops</li>
      </ul>
    </div>
    <div>
      <h4 class="text-white font-medium text-sm uppercase tracking-wider mb-5">Company</h4>
      <ul class="space-y-2.5 text-white/40 text-sm">
        <li>About Vyzma</li><li>Pricing</li><li>Contact Us</li><li>Bangalore Office</li><li>Vizag Office</li>
      </ul>
    </div>
  </div>
  <div class="max-w-5xl mx-auto border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
    <p class="text-white/30 text-xs">© 2026 Vyzma AI. All rights reserved.</p>
    <p class="text-white/30 text-xs">📱 8886720908 | 📧 vyzmaai.in@gmail.com</p>
  </div>
</footer>`;

  return injectIntoTemplate(template, headInjection, bodyContent);
}

/* ─── BLOG LISTING ─── */

function buildBlogListing(template: string): string {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
    ],
  };

  const headInjection = `
    ${buildMetaTags(
      "Blog — Vyzma AI | SEO, GEO, AEO & AI Automation Insights for Indian Businesses",
      "Practical SEO, GEO, AEO, and AI automation insights for Indian businesses. Learn how to rank in Google AI Overviews, ChatGPT Search, and grow with AI-powered marketing.",
      `${siteUrl}/blog`
    )}
    ${jsonLdScript(breadcrumbSchema)}
  `;

  const categoryColors: Record<string, string> = {
    'SEO': 'text-blue-400 bg-blue-400/10',
    'GEO': 'text-purple-400 bg-purple-400/10',
    'AEO': 'text-green-400 bg-green-400/10',
    'Strategy': 'text-yellow-400 bg-yellow-400/10',
    'Local SEO': 'text-orange-400 bg-orange-400/10',
    'AI Automation': 'text-cyan-400 bg-cyan-400/10',
  };

  const postCards = BLOG_POSTS.map((post) => {
    const colorClass = categoryColors[post.category] ?? 'text-white/50 bg-white/10';
    return `
    <a href="/blog/${post.slug}" class="group flex flex-col rounded-lg border border-white/[0.08] bg-white/[0.02] p-6 transition-all hover:border-white/[0.16] hover:bg-white/[0.04]">
      <div class="mb-3 flex items-center gap-2">
        <span class="rounded-full px-2.5 py-0.5 text-[10px] font-general font-medium ${colorClass}">${escapeHtml(post.category)}</span>
        <span class="text-xs text-white/30">${escapeHtml(post.readTime)}</span>
      </div>
      <h2 class="mb-2 text-lg font-semibold leading-snug text-white group-hover:text-[#3DA3FF] transition-colors">${escapeHtml(post.title)}</h2>
      <p class="mb-4 flex-1 text-sm text-white/50 leading-relaxed">${escapeHtml(post.excerpt)}</p>
      <div class="flex items-center justify-between">
        <span class="text-xs text-white/30">${formatDate(post.date)}</span>
        <span class="text-xs font-medium text-[#3DA3FF] group-hover:underline font-general uppercase tracking-widest">Read →</span>
      </div>
    </a>`;
  }).join('\n');

  const bodyContent = `
<main class="pt-24 min-h-screen bg-[#0C0C0C] text-white">
  <section class="border-b border-white/[0.06] px-6 py-20 md:px-10">
    <div class="mx-auto max-w-4xl">
      <p class="mb-4 font-general text-[10px] tracking-widest text-[#3DA3FF] uppercase">Vyzma AI — Insights</p>
      <h1 class="text-4xl md:text-6xl font-black tracking-tight text-white">BL<b>O</b>G</h1>
      <p class="mt-4 max-w-xl text-white/50 text-sm leading-relaxed">SEO, GEO, AEO, and AI automation — practical insights for Indian businesses ready to grow smarter.</p>
    </div>
  </section>

  <section class="px-6 py-16 md:px-10">
    <div class="mx-auto max-w-4xl">
      <div class="grid gap-6 md:grid-cols-2">
        ${postCards}
      </div>
    </div>
  </section>

  <section class="border-t border-white/[0.06] px-6 py-16 md:px-10">
    <div class="mx-auto max-w-4xl text-center">
      <p class="mb-2 font-general text-[10px] tracking-widest text-[#3DA3FF] uppercase">Ready to grow?</p>
      <h2 class="mb-6 text-2xl font-black text-white uppercase">Let Vyzma AI build your strategy</h2>
      <a href="/#contact" class="inline-flex items-center justify-center rounded-lg bg-[#3DA3FF] px-6 py-3 text-sm font-semibold text-white">Start a Project →</a>
    </div>
  </section>
</main>`;

  return injectIntoTemplate(template, headInjection, bodyContent);
}

/* ─── BLOG POST ─── */

function renderContent(content: string): string {
  const blocks = content.split('\n\n');
  return blocks.map((block) => {
    if (block.startsWith('## ')) {
      return `<h2 class="mt-10 mb-4 text-2xl font-bold text-white">${escapeHtml(block.slice(3))}</h2>`;
    }
    if (block.startsWith('### ')) {
      return `<h3 class="mt-6 mb-3 text-lg font-semibold text-white">${escapeHtml(block.slice(4))}</h3>`;
    }
    const imgMatch = block.match(/^!\[(.+?)\]\((.+?)\)/);
    if (imgMatch) {
      return `<div class="my-8 overflow-hidden rounded-lg border border-white/[0.08]"><img src="${escapeAttr(imgMatch[2])}" alt="${escapeAttr(imgMatch[1])}" class="w-full object-cover" loading="lazy" /><p class="px-3 py-2 text-xs text-white/30 italic">${escapeHtml(imgMatch[1])}</p></div>`;
    }
    if (block.includes('|') && block.includes('---')) {
      const lines = block.split('\n').filter(Boolean);
      const headers = lines[0].split('|').filter(Boolean).map((c) => c.trim());
      const rows = lines.slice(2).map((line) => line.split('|').filter(Boolean).map((c) => c.trim()));
      let table = '<div class="my-6 overflow-x-auto"><table class="w-full border-collapse text-sm text-white/80"><thead><tr class="border-b border-white/10">';
      for (const h of headers) table += `<th class="px-3 py-2 text-left font-semibold text-white">${escapeHtml(h)}</th>`;
      table += '</tr></thead><tbody>';
      for (const row of rows) {
        table += '<tr class="border-b border-white/5">';
        for (const cell of row) table += `<td class="px-3 py-2 text-white/70">${escapeHtml(cell)}</td>`;
        table += '</tr>';
      }
      table += '</tbody></table></div>';
      return table;
    }
    if (block.startsWith('1. ') || block.startsWith('- ')) {
      const items = block.split('\n').filter(Boolean);
      const tag = block.startsWith('1. ') ? 'ol' : 'ul';
      const cls = block.startsWith('1. ') ? 'list-decimal' : 'list-disc';
      let list = `<${tag} class="my-4 space-y-2 pl-6 ${cls}">`;
      for (const item of items) {
        const text = item.replace(/^[\d]+\. /, '').replace(/^- /, '');
        list += `<li class="text-white/70 leading-relaxed pl-2">${renderInline(text)}</li>`;
      }
      list += `</${tag}>`;
      return list;
    }
    if (block.match(/^\[(.+?)\]\((.+?)\)$/)) {
      const match = block.match(/^\[(.+?)\]\((.+?)\)$/);
      if (match) {
        return `<div class="my-8"><a href="${escapeAttr(match[2])}" class="inline-flex items-center justify-center rounded-lg bg-[#3DA3FF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#3DA3FF]/90 transition-colors">${escapeHtml(match[1])}</a></div>`;
      }
    }
    if (block.trim()) {
      return `<p class="my-4 text-white/70 leading-relaxed">${renderInline(block)}</p>`;
    }
    return '';
  }).filter(Boolean).join('\n');
}

function renderInline(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-[#3DA3FF] hover:underline">$1</a>');
}

function buildBlogPost(template: string, post: (typeof BLOG_POSTS)[0]): string {
  const contentHtml = renderContent(post.content);
  const pageUrl = `${siteUrl}/blog/${post.slug}`;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Vyzma AI' },
    publisher: { '@type': 'Organization', name: 'Vyzma AI', url: siteUrl },
    url: pageUrl,
  };

  const headInjection = `
    ${buildMetaTags(post.metaTitle, post.metaDescription, pageUrl, 'article')}
    <meta property="og:image" content="${siteUrl}/og-blog-${BLOG_POSTS.indexOf(post) + 1}.png" />
    ${jsonLdScript(articleSchema)}
    ${jsonLdScript(faqSchema)}
  `;

  const breadcrumbHtml = `
    <nav class="flex items-center gap-2 text-[10px] font-general uppercase tracking-widest text-white/30">
      <a href="/" class="hover:text-white transition-colors">Home</a>
      <span>/</span>
      <a href="/blog" class="hover:text-white transition-colors">Blog</a>
      <span>/</span>
      <span class="text-white/50 truncate max-w-[200px]">${escapeHtml(post.title)}</span>
    </nav>`;

  const bodyContent = `
    <main class="pt-24 min-h-screen bg-[#0C0C0C] text-white">
      <div class="border-b border-white/[0.06] px-6 py-4 md:px-10">
        <div class="mx-auto max-w-3xl">
          ${breadcrumbHtml}
        </div>
      </div>
      <article class="px-6 py-16 md:px-10">
        <div class="mx-auto max-w-3xl">
          <div class="mb-6 flex items-center gap-3">
            <span class="rounded-full border border-[#3DA3FF]/30 px-3 py-0.5 text-[10px] font-general uppercase tracking-widest text-[#3DA3FF]">${escapeHtml(post.category)}</span>
            <span class="text-xs text-white/30">${escapeHtml(post.readTime)}</span>
            <span class="text-xs text-white/30">·</span>
            <span class="text-xs text-white/30">${escapeHtml(formatDate(post.date))}</span>
          </div>
          <h1 class="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">${escapeHtml(post.title)}</h1>
          <p class="mb-10 text-lg text-white/50 leading-relaxed border-l-2 border-[#3DA3FF] pl-4">${escapeHtml(post.excerpt)}</p>
          <div class="prose-content">${contentHtml}</div>
          <div class="mt-12 border-t border-white/[0.06] pt-8 text-center">
            <p class="mb-2 text-[10px] font-general uppercase tracking-widest text-white/40">Published by</p>
            <p class="font-semibold text-white">Vyzma AI</p>
            <p class="text-xs text-white/30">India's Premier AI Agency · Bangalore & Vizag</p>
          </div>
        </div>
      </article>
    </main>`;

  let html = injectIntoTemplate(template, headInjection, bodyContent);

  return html;
}

function main() {
  const template = readFileSync(join(distDir, 'index.html'), 'utf-8');

  /* 1. Homepage */
  const homepageHtml = buildHomepage(template);
  writeFileSync(join(distDir, 'index.html'), homepageHtml, 'utf-8');
  console.log('  ✓ Prerendered / (homepage)');

  /* 2. Blog listing */
  const blogListingHtml = buildBlogListing(template);
  const blogDir = join(distDir, 'blog');
  mkdirSync(blogDir, { recursive: true });
  writeFileSync(join(blogDir, 'index.html'), blogListingHtml, 'utf-8');
  console.log('  ✓ Prerendered /blog (listing)');

  /* 3. Individual blog posts */
  for (const post of BLOG_POSTS) {
    const dir = join(distDir, 'blog', post.slug);
    mkdirSync(dir, { recursive: true });
    const html = buildBlogPost(template, post);
    writeFileSync(join(dir, 'index.html'), html, 'utf-8');
    console.log(`  ✓ Prerendered /blog/${post.slug}`);
  }
}

main();
