export const PilotOffer = () => {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <div className="slide-glow-border rounded-3xl max-w-2xl mx-auto">
        <div className="bg-[#0C0C0C] m-[2px] rounded-[22px] p-10 sm:p-14 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#FFB547] font-medium">
            LIMITED OFFER
          </span>
          <h2 className="font-zentry font-black text-white text-[clamp(2rem,6vw,3.5rem)] uppercase leading-[0.9] mt-4 mb-4">
            Start With a FREE<br />Pilot Project
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-md mx-auto mb-6">
            Not ready to commit? We offer 3 pilot projects every month \u2014 a fully built
            chatbot or campaign delivered free so you can see results before you pay.
          </p>
          <p className="text-[#FFB547] text-sm font-medium mb-8">
            3 spots available this month.
          </p>
          <a
            href="#contact"
            className="bg-[#FFB547] text-[#0C0C0C] rounded-full px-8 py-3 font-medium text-sm uppercase tracking-wider inline-block hover:opacity-90 transition"
          >
            Apply for a Pilot Project \u2192
          </a>
          <p className="text-white/40 text-xs mt-4">
            Applications reviewed within 24 hours.
            We only accept pilots where we're confident we can deliver.
          </p>
        </div>
      </div>
    </section>
  );
};
