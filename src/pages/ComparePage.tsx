import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { COMPARISONS } from "@/lib/compare-data";
import { ContactSection } from "@/components/contact-section";
import { FaCheck, FaXmark } from "react-icons/fa6";

export const ComparePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = COMPARISONS.find((c) => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (item) {
      document.title = item.metaTitle;
    }
  }, [item]);

  if (!item) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Comparison Page Not Found</h1>
        <p className="text-white/60 mb-6">The comparison you requested does not exist.</p>
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
        <div className="inline-block px-3 py-1 bg-[#3DA3FF]/10 border border-[#3DA3FF]/30 text-[#3DA3FF] text-xs font-mono tracking-widest uppercase rounded-full mb-4">
          {item.badge}
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4 leading-tight">
          {item.title}
        </h1>
        <p className="text-white/60 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
          {item.subtitle}
        </p>

        {/* Option A vs Option B Cards */}
        <div className="grid md:grid-cols-2 gap-6 my-10">
          <div className="bg-[#101116] border-2 border-[#3DA3FF]/40 rounded-2xl p-6 sm:p-8 relative">
            <span className="absolute top-4 right-4 bg-[#3DA3FF] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
              Recommended
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{item.optionA.name}</h3>
            <p className="text-[#3DA3FF] text-xs font-medium mb-4">{item.optionA.tagline}</p>
            <p className="text-white/60 text-sm leading-relaxed">{item.optionA.description}</p>
          </div>

          <div className="bg-[#101116] border border-white/10 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white/80 mb-2">{item.optionB.name}</h3>
            <p className="text-white/40 text-xs font-medium mb-4">{item.optionB.tagline}</p>
            <p className="text-white/50 text-sm leading-relaxed">{item.optionB.description}</p>
          </div>
        </div>
      </section>

      {/* Feature Matrix Table */}
      <section className="px-5 sm:px-8 md:px-10 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold uppercase mb-6 text-white border-l-4 border-[#3DA3FF] pl-4">
          Head-to-Head Feature Comparison
        </h2>
        <div className="overflow-x-auto border border-white/10 rounded-2xl bg-[#101116]">
          <table className="w-full text-left text-sm">
            <thead className="bg-white/[0.04] text-white/80 uppercase text-xs tracking-wider border-b border-white/10">
              <tr>
                <th className="p-4 sm:p-5">Feature</th>
                <th className="p-4 sm:p-5 text-[#3DA3FF] font-bold">{item.optionA.name}</th>
                <th className="p-4 sm:p-5 text-white/60">{item.optionB.name}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {item.matrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition">
                  <td className="p-4 sm:p-5 font-medium text-white/90">{row.feature}</td>
                  <td className="p-4 sm:p-5 text-white bg-[#3DA3FF]/5 font-medium">
                    <span className="flex items-center gap-2">
                      <FaCheck className="text-[#3DA3FF] text-xs shrink-0" />
                      {row.optionAValue}
                    </span>
                  </td>
                  <td className="p-4 sm:p-5 text-white/50">
                    <span className="flex items-center gap-2">
                      {row.winner === "optionA" ? (
                        <FaXmark className="text-red-400/60 text-xs shrink-0" />
                      ) : (
                        <FaCheck className="text-green-400/60 text-xs shrink-0" />
                      )}
                      {row.optionBValue}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>


      {/* Highlights */}
      <section className="px-5 sm:px-8 md:px-10 py-12 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {item.highlights.map((h, i) => (
            <div key={i} className="bg-[#101116] border border-white/10 rounded-xl p-6">
              <div className="text-[#3DA3FF] font-mono text-sm mb-2">0{i + 1}</div>
              <h4 className="text-white font-bold text-base mb-2">{h.title}</h4>
              <p className="text-white/60 text-xs leading-relaxed">{h.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-8 md:px-10 py-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold uppercase mb-6 text-white">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {item.faq.map((f, i) => (
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
