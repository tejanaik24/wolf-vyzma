import { FadeIn } from "@/components/ui/fade-in";
import { AnimatedText } from "@/components/ui/animated-text";

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden">
      <FadeIn delay={0.1} x={-80} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]">
        <div className="w-[120px] sm:w-[160px] md:w-[210px] aspect-square rounded-full bg-gradient-to-br from-[#3DA3FF]/15 to-[#8A5CFF]/15 blur-sm" />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
        <div className="w-[100px] sm:w-[140px] md:w-[180px] aspect-square rounded-2xl bg-gradient-to-tr from-[#FFB547]/10 to-[#FF5CA8]/10 blur-sm rotate-12" />
      </FadeIn>

      <FadeIn delay={0.15} x={80} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]">
        <div className="w-[120px] sm:w-[160px] md:w-[210px] aspect-square rounded-full bg-gradient-to-bl from-[#8A5CFF]/15 to-[#3DA3FF]/15 blur-sm" />
      </FadeIn>

      <FadeIn delay={0.3} x={80} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]">
        <div className="w-[130px] sm:w-[170px] md:w-[220px] aspect-square rounded-3xl bg-gradient-to-tl from-[#00E6C7]/10 to-[#3DA3FF]/10 blur-sm -rotate-12" />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 z-10">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-gradient font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            ABOUT VYZMA
          </h2>
        </FadeIn>

        <AnimatedText
          text="We started Vyzma because we were frustrated. Every time a small business owner in India wanted AI, they were quoted ₹50,000/month and handed a 40-page proposal. The gym owner, the clinic doctor, the restaurant family — they deserved better. Vyzma is the answer. We are a team of AI engineers, marketers, and designers based in Bangalore and Vizag. We build the same AI tools that Fortune 500 companies use — and we make them affordable for every Indian business. Starting ₹4,999/month. 50+ projects delivered. 2 offices. 1 mission: AI for every business."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
        />

        <div className="mt-16 sm:mt-20 md:mt-24">
          <a
            href="#contact"
            className="rounded-full px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 text-xs sm:text-sm md:text-base font-medium text-white uppercase tracking-widest inline-block"
            style={{
              background: "linear-gradient(135deg, #3DA3FF, #8A5CFF)",
            }}
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
};
