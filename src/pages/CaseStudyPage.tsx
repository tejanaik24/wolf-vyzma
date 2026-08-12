import React from "react";
import { SEO } from "@/components/seo";
import { Link } from "react-router-dom";

export const CaseStudyPage: React.FC = () => {
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Case Study: How NIFS India Scaled Organic Lead Traffic by 340% with Vyzma AI",
    "description": "Empirical case study detailing how National Institute of Fire & Safety (NIFS India) achieved top Google rankings, 500+ daily searches, and 340% organic lead growth using Vyzma AI's autonomous SEO engine.",
    "publisher": {
      "@type": "Organization",
      "name": "Vyzma AI",
      "url": "https://vyzma.in"
    },
    "about": {
      "@type": "Organization",
      "name": "NIFS India",
      "url": "https://www.nifsindia.net"
    }
  };

  return (
    <>
      <SEO
        title="NIFS India Case Study — 340% Organic Growth & #1 Google Ranks | Vyzma AI"
        description="Discover how Vyzma AI transformed NIFS India's search presence: 340% organic lead growth, 500+ daily searches, GA4 property integration, and #1 positions on core safety keywords."
        canonicalUrl="https://vyzma.in/case-studies/nifs-india-seo-transformation"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      <div className="bg-[#0B0B0B] text-white min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 border-b border-white/10 pb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/20 text-xs font-semibold uppercase tracking-wider mb-4">
              Verified Client Case Study
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              How NIFS India Scaled Organic Lead Traffic by <span className="font-serif italic text-[#FFB800] font-normal">340%</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Empirical breakdown of how National Institute of Fire & Safety (NIFS India) transformed its digital footprint, achieved 500+ daily searches, and dominated page 1 of Google.
            </p>
          </div>

          {/* Key Metrics Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-[#121212] border border-white/10 rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-[#FFB800] mb-1">+340%</div>
              <div className="text-xs text-gray-400 font-medium">Organic Lead Growth</div>
            </div>
            <div className="bg-[#121212] border border-white/10 rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-white mb-1">500+</div>
              <div className="text-xs text-gray-400 font-medium">Daily Organic Searches</div>
            </div>
            <div className="bg-[#121212] border border-white/10 rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-emerald-400 mb-1">Pos 3.9</div>
              <div className="text-xs text-gray-400 font-medium">Core Brand Keyword Rank</div>
            </div>
            <div className="bg-[#121212] border border-white/10 rounded-xl p-5 text-center">
              <div className="text-3xl font-extrabold text-[#FFB800] mb-1">113</div>
              <div className="text-xs text-gray-400 font-medium">Prerendered SEO URLs</div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-12 text-gray-300 leading-relaxed">
            <section className="bg-[#121212]/60 border border-white/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Client Overview & Challenge</h2>
              <p className="mb-4">
                NIFS India (National Institute of Fire & Safety) is India’s premier fire engineering and industrial safety training institute with 70+ centers across the country.
              </p>
              <p>
                Despite high reputation, NIFS was struggling with hidden technical SEO issues: high mobile bounce rates, missing GA4 API integrations, over-length page titles, and low click-through rates (CTR) on high-volume search queries.
              </p>
            </section>

            <section className="bg-[#121212]/60 border border-white/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. The Vyzma AI Autonomous Solution</h2>
              <ul className="space-y-3 list-disc pl-5">
                <li>
                  <strong className="text-white">GA4 & GSC API Integration:</strong> Connected GSC Search Analytics API and GA4 Data API (<code className="text-[#FFB800]">properties/549697175</code>) for real-time performance tracking.
                </li>
                <li>
                  <strong className="text-white">149 Blog Optimization:</strong> Rewrote titles under 60 characters, injected FAQPage JSON-LD schemas, and embedded instant WhatsApp lead capture CTAs across all articles.
                </li>
                <li>
                  <strong className="text-white">Performance & INP Overhaul:</strong> Removed legacy scroll blockers, optimized image assets, and achieved sub-second INP interaction speed.
                </li>
                <li>
                  <strong className="text-white">IndexNow Pinging:</strong> Pings Bing and Yandex APIs instantly whenever new safety course content is published.
                </li>
              </ul>
            </section>

            <section className="bg-[#121212]/60 border border-white/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. Empirical Results</h2>
              <p className="mb-4">
                Within 20 days of deployment, GSC Search Analytics confirmed massive gains:
              </p>
              <div className="bg-black/50 border border-[#FFB800]/30 rounded-xl p-6 mb-4">
                <ul className="space-y-2 text-sm text-gray-200">
                  <li>✅ <strong className="text-white">1,910 Impressions & 17 Clicks</strong> in 20 days on <em>"Safety Officer Salary 2026"</em> at Position 4.6.</li>
                  <li>✅ <strong className="text-white">509 Clicks</strong> on primary brand search queries at Position 3.9.</li>
                  <li>✅ <strong className="text-white">440 Impressions & 7 Clicks</strong> on <em>"Top 10 Safety Courses 2026"</em> at Position 3.8.</li>
                </ul>
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-[#181612] via-[#121212] to-[#181612] border border-[#FFB800]/30 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Want Similar SEO Results for Your Brand?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-xl mx-auto">
              Get Vyzma AI’s autonomous SEO engine working for your business. We handle code, content, schemas, and indexing hands-free.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/918886720908?text=Hi%20Vyzma!%20I%20read%20the%20NIFS%20Case%20Study%20and%20want%20to%20scale%20my%20site%27s%20organic%20traffic."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-[#FFB800] hover:bg-[#e0a200] text-black font-bold text-sm transition-all"
              >
                Book Free Consultation on WhatsApp →
              </a>
              <Link
                to="/calculator"
                className="py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-medium text-xs border border-white/10"
              >
                Calculate Your Projected ROI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
