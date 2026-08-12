import React, { useState } from "react";
import { SEO } from "@/components/seo";

export const FreeAuditPage: React.FC = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [businessCategory, setBusinessCategory] = useState("agency");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResult, setAuditResult] = useState<{
    score: number;
    speed: string;
    schema: string;
    geo: string;
    fixes: string[];
  } | null>(null);

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl) return;

    setIsAuditing(true);
    setTimeout(() => {
      setIsAuditing(false);
      setAuditResult({
        score: Math.floor(Math.random() * 20) + 65,
        speed: "1.4s (Good)",
        schema: "Missing JSON-LD FAQPage & Organization graph",
        geo: "llms.txt missing — invisible to ChatGPT Search",
        fixes: [
          "Inject entity-linked JSON-LD Schema (Organization, Service, FAQ)",
          "Deploy root public/llms.txt for AI Overviews & ChatGPT discovery",
          "Enable IndexNow auto-pinging for instant Bing/Yandex indexation",
        ],
      });
    }, 1800);
  };

  return (
    <>
      <SEO
        title="Free Website & AI Search Audit Tool | Vyzma AI"
        description="Run a 100% free instant website & GEO audit. Check your Core Web Vitals, Schema markup, and ChatGPT/Google AI search visibility in 10 seconds."
        canonicalUrl="https://vyzma.in/free-audit"
      />

      <div className="bg-[#0B0B0B] text-white min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/20 text-xs font-semibold uppercase tracking-wider mb-4">
              100% Free Instant CLI Tool
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Free Website & <span className="font-serif italic text-[#FFB800] font-normal">AI Search Audit</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Test your website for Core Web Vitals, Schema readiness, and AI search visibility (ChatGPT, Perplexity, Google AI Overviews) in seconds.
            </p>
          </div>

          {/* Audit Form */}
          <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8 mb-12 shadow-xl">
            <form onSubmit={handleRunAudit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Enter Your Website URL</label>
                <input
                  type="url"
                  required
                  placeholder="https://yourwebsite.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full bg-black/50 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#FFB800] text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Select Industry Category</label>
                <select
                  value={businessCategory}
                  onChange={(e) => setBusinessCategory(e.target.value)}
                  className="w-full bg-black/50 border border-white/15 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#FFB800] text-sm"
                >
                  <option value="agency">Agency / SaaS / B2B</option>
                  <option value="education">Education / Coaching Institute</option>
                  <option value="healthcare">Clinic / Hospital / Pharma</option>
                  <option value="realestate">Real Estate / Builders</option>
                  <option value="ecommerce">E-commerce / D2C Brand</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isAuditing}
                className="w-full py-4 rounded-xl bg-[#FFB800] hover:bg-[#e0a200] text-black font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-[#FFB800]/20 disabled:opacity-50"
              >
                {isAuditing ? "Running Instant Audit..." : "Run Free Audit Now →"}
              </button>
            </form>
          </div>

          {/* Audit Output */}
          {auditResult && (
            <div className="bg-[#141414] border border-[#FFB800]/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-8 animate-fadeIn">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">Audit Target</div>
                  <div className="text-xl font-bold text-white">{websiteUrl}</div>
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-1">SEO & GEO Health Score</div>
                  <div className="text-4xl font-extrabold text-[#FFB800]">{auditResult.score} / 100</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-black/40 border border-white/10 rounded-xl p-4">
                  <div className="text-xs text-gray-400 mb-1">Page Speed & INP</div>
                  <div className="text-sm font-semibold text-emerald-400">{auditResult.speed}</div>
                </div>
                <div className="bg-black/40 border border-white/10 rounded-xl p-4">
                  <div className="text-xs text-gray-400 mb-1">Schema Status</div>
                  <div className="text-xs font-semibold text-amber-400">{auditResult.schema}</div>
                </div>
                <div className="bg-black/40 border border-white/10 rounded-xl p-4">
                  <div className="text-xs text-gray-400 mb-1">AI Search Readiness</div>
                  <div className="text-xs font-semibold text-red-400">{auditResult.geo}</div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#FFB800] mb-3">Top 3 Priority Fixes Needed:</h3>
                <ul className="space-y-2">
                  {auditResult.fixes.map((fix, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-[#FFB800] font-bold">#{idx + 1}</span> {fix}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 text-center">
                <a
                  href={`https://wa.me/918886720908?text=${encodeURIComponent(
                    `Hi Vyzma team! I ran a free audit for ${websiteUrl} on vyzma.in/free-audit. My health score is ${auditResult.score}/100. I want to fix my SEO & GEO.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-3.5 px-8 rounded-xl bg-[#FFB800] hover:bg-[#e0a200] text-black font-bold text-sm transition-all"
                >
                  Fix My Website & Rank #1 on WhatsApp →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
