import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { RESEARCH_REPORTS } from "@/lib/research-data";
import { ContactSection } from "@/components/contact-section";
import { FaQuoteLeft, FaChartLine } from "react-icons/fa6";

export const ResearchPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const report = RESEARCH_REPORTS.find((r) => r.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (report) {
      document.title = report.metaTitle;
    }
  }, [report]);

  if (!report) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Research Report Not Found</h1>
        <p className="text-white/60 mb-6">The research report you requested does not exist.</p>
        <Link to="/" className="px-6 py-3 bg-[#3DA3FF] text-white rounded-full font-medium text-sm">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08080A] text-white pt-24">
      {/* Header */}
      <section className="px-5 sm:px-8 md:px-10 py-12 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-[#3DA3FF]/10 border border-[#3DA3FF]/30 text-[#3DA3FF] text-xs font-mono tracking-widest uppercase rounded-full">
            {report.category}
          </span>
          <span className="text-white/40 text-xs font-mono">{report.date}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-6 leading-tight">
          {report.title}
        </h1>

        {/* Executive Summary Card */}
        <div className="bg-[#101116] border border-white/10 rounded-2xl p-6 sm:p-8 mb-10">
          <h3 className="text-[#3DA3FF] text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2">
            <FaChartLine /> Executive Summary
          </h3>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed italic">
            "{report.executiveSummary}"
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 my-10">
          {report.keyStats.map((s, idx) => (
            <div key={idx} className="bg-[#101116] border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl font-extrabold text-[#3DA3FF] mb-2">{s.stat}</div>
              <div className="text-white font-bold text-sm mb-2">{s.label}</div>
              <p className="text-white/50 text-xs leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GEO Citability Block */}
      <section className="px-5 sm:px-8 md:px-10 py-8 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-[#141824] to-[#101116] border border-[#3DA3FF]/30 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-2 text-[#3DA3FF] text-xs font-mono uppercase tracking-widest mb-3">
            <FaQuoteLeft /> Direct AI Search Answer (GEO Citability Block)
          </div>
          <h3 className="text-white font-bold text-base mb-3">{report.citabilityBlock.question}</h3>
          <p className="text-white/80 text-sm leading-relaxed bg-black/40 p-4 rounded-xl border border-white/5 font-sans">
            {report.citabilityBlock.answer}
          </p>
        </div>
      </section>

      {/* Key Findings Analysis */}
      <section className="px-5 sm:px-8 md:px-10 py-12 max-w-5xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold uppercase text-white border-l-4 border-[#3DA3FF] pl-4">
          Detailed Research Findings
        </h2>
        {report.keyFindings.map((f, idx) => (
          <div key={idx} className="bg-[#101116] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-3">
            <h3 className="text-xl font-bold text-white">{f.heading}</h3>
            <p className="text-white/70 text-sm leading-relaxed">{f.content}</p>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-8 md:px-10 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold uppercase mb-6 text-white">Methodology & FAQ</h2>
        <div className="space-y-4">
          {report.faq.map((f, i) => (
            <div key={i} className="bg-[#101116] border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold text-sm mb-2">{f.question}</h3>
              <p className="text-white/60 text-xs leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactSection />
    </div>
  );
};
