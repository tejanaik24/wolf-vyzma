import React, { useState } from "react";
import { SEO } from "@/components/seo";
import { Link } from "react-router-dom";

export const CalculatorPage: React.FC = () => {
  const [monthlySpend, setMonthlySpend] = useState<number>(50000);
  const [currentLeads, setCurrentLeads] = useState<number>(15);
  const [avgDealValue, setAvgDealValue] = useState<number>(100000);
  const [focusArea, setFocusArea] = useState<string>("all");

  // ROI calculations
  const projectedLeadGrowthMultiplier = focusArea === "seo" ? 3.4 : focusArea === "ai" ? 2.8 : focusArea === "web" ? 2.5 : 3.8;
  const projectedLeads = Math.round(currentLeads * projectedLeadGrowthMultiplier);
  const additionalLeads = projectedLeads - currentLeads;
  const projectedMonthlyRevenue = Math.round(additionalLeads * 0.2 * avgDealValue);
  const hoursSavedPerMonth = focusArea === "ai" ? 140 : focusArea === "seo" ? 90 : 110;
  const roiPercentage = Math.round(((projectedMonthlyRevenue - monthlySpend) / monthlySpend) * 100);

  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Vyzma AI Agency ROI & Organic Growth Calculator",
    "url": "https://vyzma.in/calculator",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "description": "Calculate your estimated organic traffic growth, leads, hours saved, and monthly revenue ROI using Vyzma AI's high-performance web and autonomous SEO engine.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vyzma AI",
      "url": "https://vyzma.in"
    }
  };

  return (
    <>
      <SEO
        title="AI & Web Agency ROI Calculator | Vyzma AI"
        description="Estimate your ROI, organic lead growth, hours saved, and projected revenue boost with Vyzma AI's high-performance engineering & autonomous SEO systems."
        canonicalUrl="https://vyzma.in/calculator"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />

      <div className="bg-[#0B0B0B] text-white min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/20 text-xs font-semibold uppercase tracking-wider mb-4">
              Free Interactive Tool
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
              AI Growth & <span className="font-serif italic text-[#FFB800] font-normal">ROI Calculator</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Project your estimated organic traffic increase, lead acceleration, and monthly revenue gains powered by Vyzma AI’s engineering stack.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Inputs Column */}
            <div className="lg:col-span-6 bg-[#121212] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FFB800]" />
                Your Current Metrics
              </h2>

              {/* Monthly Spend */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-300">Monthly Marketing / Tech Spend</label>
                  <span className="text-sm font-bold text-[#FFB800]">₹{monthlySpend.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="500000"
                  step="10000"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FFB800]"
                />
              </div>

              {/* Current Leads */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-300">Current Monthly Leads</label>
                  <span className="text-sm font-bold text-[#FFB800]">{currentLeads} Leads / mo</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="200"
                  step="1"
                  value={currentLeads}
                  onChange={(e) => setCurrentLeads(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FFB800]"
                />
              </div>

              {/* Avg Deal Value */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-300">Average Customer Contract Value</label>
                  <span className="text-sm font-bold text-[#FFB800]">₹{avgDealValue.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min="25000"
                  max="1000000"
                  step="25000"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FFB800]"
                />
              </div>

              {/* Focus Area */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Primary Optimization Goal</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "all", label: "Full System (Web + SEO + AI)" },
                    { id: "seo", label: "Autonomous SEO Engine" },
                    { id: "web", label: "Custom 3D Web App" },
                    { id: "ai", label: "AI Lead & Workflow Automation" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFocusArea(item.id)}
                      className={`py-2.5 px-3 rounded-lg text-xs font-semibold text-left transition-all border ${
                        focusArea === item.id
                          ? "bg-[#FFB800]/15 border-[#FFB800] text-[#FFB800]"
                          : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-6 bg-gradient-to-b from-[#181612] to-[#121212] border border-[#FFB800]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB800]/10 rounded-full blur-3xl -z-10" />

              <div>
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  Projected 90-Day Growth
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-xs font-medium text-gray-400 mb-1">Projected Monthly Leads</div>
                    <div className="text-3xl font-extrabold text-white">{projectedLeads}</div>
                    <div className="text-[11px] font-semibold text-emerald-400 mt-1">+{projectedLeadGrowthMultiplier}x Growth</div>
                  </div>

                  <div className="bg-black/40 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-xs font-medium text-gray-400 mb-1">Hours Saved / Month</div>
                    <div className="text-3xl font-extrabold text-[#FFB800]">{hoursSavedPerMonth} hrs</div>
                    <div className="text-[11px] font-semibold text-gray-400 mt-1">Automated Workflows</div>
                  </div>
                </div>

                <div className="bg-[#FFB800]/10 border border-[#FFB800]/30 rounded-xl p-6 mb-8 text-center">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#FFB800] mb-1">
                    Projected Revenue Gain / Month
                  </div>
                  <div className="text-4xl font-extrabold text-white mb-1">
                    +₹{projectedMonthlyRevenue.toLocaleString("en-IN")}
                  </div>
                  <div className="text-xs text-gray-300">
                    Estimated <span className="text-emerald-400 font-bold">+{roiPercentage}% ROI</span> over current spend
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/918886720908?text=${encodeURIComponent(
                    `Hi Vyzma team! I calculated my ROI on vyzma.in/calculator. My projected revenue gain is +₹${projectedMonthlyRevenue.toLocaleString("en-IN")}/mo. I'd like a custom strategy call.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#FFB800] hover:bg-[#e0a200] text-black font-bold text-sm text-center block transition-all shadow-lg hover:shadow-[#FFB800]/20"
                >
                  Get Custom ROI Blueprint on WhatsApp →
                </a>
                <Link
                  to="/about"
                  className="w-full py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 font-medium text-xs text-center block transition-all border border-white/10"
                >
                  Explore How Vyzma Builds High-ROI Systems
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
