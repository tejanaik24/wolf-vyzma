import React from "react";
import { SEO } from "@/components/seo";

export const FreeResourcesPage: React.FC = () => {
  const freeResources = [
    {
      title: "WhatsApp Automation Playbook 2026",
      desc: "Step-by-step SOP for setting up AI chatbots, broadcast campaigns, and automated lead capture on WhatsApp Business API.",
      badge: "PDF SOP",
      link: "https://wa.me/918886720908?text=Hi%20Vyzma!%20Please%20send%20me%20the%20Free%20WhatsApp%20Automation%20Playbook%20PDF.",
    },
    {
      title: "Master AI Prompt Vault for Business Owners",
      desc: "Curated library of 50+ battle-tested prompts for ChatGPT & Gemini to write ad copy, generate leads, and automate SOPs.",
      badge: "Prompt Library",
      link: "https://wa.me/918886720908?text=Hi%20Vyzma!%20Please%20send%20me%20the%20Free%20Master%20AI%20Prompt%20Vault.",
    },
    {
      title: "90-Day SEO & GEO Audit Checklist",
      desc: "Complete checklist covering Core Web Vitals, JSON-LD Schema graphs, IndexNow setup, and llms.txt compliance.",
      badge: "Checklist",
      link: "https://wa.me/918886720908?text=Hi%20Vyzma!%20Please%20send%20me%20the%20Free%2090-Day%20SEO%20Checklist.",
    },
    {
      title: "Competitor SERP & Keyword Scraping SOP",
      desc: "How to extract missing keyword gaps, competitor word counts, and FAQ entities to outperform page 1 competitors.",
      badge: "SOP Guide",
      link: "https://wa.me/918886720908?text=Hi%20Vyzma!%20Please%20send%20me%20the%20Free%20Competitor%20Scraping%20SOP.",
    },
  ];

  return (
    <>
      <SEO
        title="Free AI & SEO Resource Vault 2026 | Vyzma AI"
        description="Download free 2026 AI automation playbooks, prompt vaults, SEO checklists, and competitor analysis SOPs for Indian business owners."
        canonicalUrl="https://vyzma.in/free-resources"
      />

      <div className="bg-[#0B0B0B] text-white min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/20 text-xs font-semibold uppercase tracking-wider mb-4">
              Free Growth Library
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Free AI & SEO <span className="font-serif italic text-[#FFB800] font-normal">Resource Vault</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Download battle-tested AI playbooks, prompt libraries, and SEO checklists built specifically for Indian businesses.
            </p>
          </div>

          {/* Grid of Free Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {freeResources.map((res, idx) => (
              <div key={idx} className="bg-[#121212] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#FFB800]/30 transition-all group">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-[#FFB800] text-[11px] font-semibold mb-3">
                    {res.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFB800] transition-colors">{res.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{res.desc}</p>
                </div>
                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#FFB800] hover:text-black text-gray-200 font-semibold text-xs text-center block transition-all border border-white/10"
                >
                  Download Free Asset on WhatsApp →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
