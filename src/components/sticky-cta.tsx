import { useState, useEffect } from "react";
import { MessageSquare, ArrowRight, X, Sparkles } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible || isClosed) return null;

  const handleWhatsApp = () => {
    window.open("https://wa.me/918886720908?text=Hi%20Vyzma%20AI!%20I%20want%20a%20free%20AI%20%26%20SEO%20audit%20for%20my%20business.", "_blank");
  };

  const handleAuditClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 animate-fade-in">
      {/* Floating Pill Banner */}
      <div className="flex items-center gap-2 p-2.5 pl-4 bg-[#090D16]/90 backdrop-blur-xl border border-white/15 rounded-full shadow-2xl shadow-cyan-500/10 text-white">
        <div className="hidden sm:flex items-center gap-2 pr-2 border-r border-white/10 text-xs font-medium text-slate-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Get Free AI & SEO Audit</span>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 text-xs font-semibold rounded-full transition-all border border-emerald-500/30"
          title="WhatsApp Us"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp</span>
        </button>

        {/* Claim Audit CTA */}
        <button
          onClick={handleAuditClick}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold rounded-full shadow-lg shadow-cyan-500/25 transition-all"
        >
          <span>Claim Audit</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {/* Close Button */}
        <button
          onClick={() => setIsClosed(true)}
          className="p-1 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
