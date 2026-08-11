import { ArrowUpRight, TrendingUp, Award, BarChart3, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export function FeaturedResearchSection() {
  return (
    <section className="py-20 bg-[#02040A] relative overflow-hidden border-t border-b border-white/10">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>Featured Industry Research & Benchmarks</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Ranked & Cited Authority <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Across India</span>
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            Explore our original market benchmarks, comparison guides, and AI research reports cited by search engines and industry leaders in Vizag, Bangalore, and nationwide.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Google AI Hub Vizag */}
          <Link
            to="/blog/google-ai-hub-vizag-businesses-2026"
            className="group relative p-6 rounded-2xl bg-[#080D1A]/80 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-md border border-cyan-500/20">
                  Vizag Tech Report
                </span>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                Google AI Hub Vizag 2026
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                How local businesses in Rushikonda, Gajuwaka & Madhurawada leverage Gemini, AI Overviews & Cloud AI for growth.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold pt-4 border-t border-white/5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Read Full Report</span>
            </div>
          </Link>

          {/* Card 2: Best AI Agency India */}
          <Link
            to="/blog/best-ai-agency-india-2026"
            className="group relative p-6 rounded-2xl bg-[#080D1A]/80 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-md border border-blue-500/20">
                  National Ranking
                </span>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-2">
                Best AI Agency in India (2026)
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Comprehensive evaluation framework comparing AI chatbots, automation agencies, and Next.js tech stacks.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-blue-400 text-xs font-semibold pt-4 border-t border-white/5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Explore Rankings</span>
            </div>
          </Link>

          {/* Card 3: Next.js vs WordPress */}
          <Link
            to="/compare/nextjs-vs-wordpress-2026"
            className="group relative p-6 rounded-2xl bg-[#080D1A]/80 border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-md border border-emerald-500/20">
                  Tech Benchmark
                </span>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                Next.js vs WordPress (2026)
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Speed, 3-year TCO, security vulnerabilities, and Core Web Vitals comparison for Indian businesses.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold pt-4 border-t border-white/5">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>View Comparison</span>
            </div>
          </Link>

          {/* Card 4: Indian SMB AI Adoption Report */}
          <Link
            to="/research/indian-smb-ai-adoption-2026"
            className="group relative p-6 rounded-2xl bg-[#080D1A]/80 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 bg-purple-500/10 text-purple-400 text-xs font-semibold rounded-md border border-purple-500/20">
                  Whitepaper Data
                </span>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                Indian SMB AI Adoption Report
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Original research across 500+ Indian SMBs analyzing 62% support cost savings & 3.4x lead conversion gains.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-purple-400 text-xs font-semibold pt-4 border-t border-white/5">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Download Whitepaper</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
