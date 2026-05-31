import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    num: "01",
    title: "Prices You Can See Before You Call",
    body: "₹4,999/month. Right here on the website. No 'contact us for pricing.' No surprise invoices. No 6-month contracts. Pay monthly, cancel anytime.",
    accent: "#60C0FF",
    bg: "linear-gradient(135deg, #0A1F6E 0%, #0D3DB5 50%, #1A6FFF 100%)",
    peek: "#1A6FFF",
  },
  {
    num: "02",
    title: "We Do 100% of the Work",
    body: "You don't need a tech team. You don't need to understand AI. You approve — we build, run, and manage everything for you from day one.",
    accent: "#C9A6FF",
    bg: "linear-gradient(135deg, #1A0545 0%, #4A10C4 50%, #8A2BE2 100%)",
    peek: "#8A2BE2",
  },
  {
    num: "03",
    title: "AI + Marketing Under One Roof",
    body: "Most agencies do either AI or marketing. We do both. One team handles your chatbot, Google ads, Instagram reels, and SEO. One invoice. No confusion.",
    accent: "#6EEEFF",
    bg: "linear-gradient(135deg, #052535 0%, #0A5A7A 50%, #0EA5C9 100%)",
    peek: "#0EA5C9",
  },
  {
    num: "04",
    title: "AEO + GEO — The Future of Search",
    body: "We don't just rank you on Google. We get your business cited in ChatGPT, Perplexity, and Google AI Overviews. Your competitors haven't discovered this yet.",
    accent: "#FFD97A",
    bg: "linear-gradient(135deg, #3D1A00 0%, #A04A00 50%, #F07D00 100%)",
    peek: "#F07D00",
  },
  {
    num: "05",
    title: "We Understand Indian Businesses",
    body: "Diwali campaigns. Regional languages. WhatsApp-first customers. Indian pricing. We're from Bangalore and Vizag — your customers are our neighbors.",
    accent: "#6EFFC9",
    bg: "linear-gradient(135deg, #012A18 0%, #056A3A 50%, #10B981 100%)",
    peek: "#10B981",
  },
];

// Premium SVG icons — no emojis
const Icon = ({ num, accent }: { num: string; accent: string }) => {
  const s = { stroke: accent, strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (num === "01") return (
    <svg viewBox="0 0 52 52" fill="none" className="w-12 h-12">
      <rect x="1" y="1" width="50" height="50" rx="13" stroke={accent} strokeWidth="1.5"/>
      <path d="M26 14v2M26 36v2" {...s}/>
      <path d="M19 22c0-2.8 3.1-4 7-4s7 1.2 7 3-2.5 3-7 3-7 1.2-7 4 3.1 5 7 5 7-1.2 7-3" {...s}/>
    </svg>
  );
  if (num === "02") return (
    <svg viewBox="0 0 52 52" fill="none" className="w-12 h-12">
      <rect x="1" y="1" width="50" height="50" rx="13" stroke={accent} strokeWidth="1.5"/>
      <path d="M16 26l7 7 13-13" {...s}/>
      <circle cx="26" cy="26" r="13" stroke={accent} strokeWidth="1.5"/>
    </svg>
  );
  if (num === "03") return (
    <svg viewBox="0 0 52 52" fill="none" className="w-12 h-12">
      <rect x="1" y="1" width="50" height="50" rx="13" stroke={accent} strokeWidth="1.5"/>
      <circle cx="21" cy="26" r="8" stroke={accent} strokeWidth="1.5"/>
      <circle cx="31" cy="26" r="8" stroke={accent} strokeWidth="1.5"/>
    </svg>
  );
  if (num === "04") return (
    <svg viewBox="0 0 52 52" fill="none" className="w-12 h-12">
      <rect x="1" y="1" width="50" height="50" rx="13" stroke={accent} strokeWidth="1.5"/>
      <circle cx="23" cy="24" r="8" stroke={accent} strokeWidth="1.5"/>
      <path d="M29 30l8 8" {...s}/>
      <path d="M20 20l6 8M20 28l6-8" {...s} strokeWidth={1}/>
    </svg>
  );
  return (
    <svg viewBox="0 0 52 52" fill="none" className="w-12 h-12">
      <rect x="1" y="1" width="50" height="50" rx="13" stroke={accent} strokeWidth="1.5"/>
      <path d="M26 16c0 0-6 4-6 10s6 10 6 10M26 16c0 0 6 4 6 10s-6 10-6 10" {...s}/>
      <path d="M16 26h20" {...s}/>
      <circle cx="26" cy="26" r="11" stroke={accent} strokeWidth="1.5"/>
    </svg>
  );
};

export const WhyVyzma = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const cardEls = gsap.utils.toArray<HTMLElement>(".peel-card");
    const dotEls  = gsap.utils.toArray<HTMLElement>(".prog-dot");
    if (!cardEls.length) return;

    // Same peel effect on ALL screen sizes
    cardEls.forEach((card, i) => {
      if (i === 0) return;
      gsap.set(card, { y: i * 22, scale: 1 - i * 0.025 });
    });

    dotEls.forEach((dot, i) => {
      if (i !== 0) gsap.set(dot, { scale: 0.55, opacity: 0.25 });
    });

    gsap.set(".peel-card", { transformPerspective: 1400 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: () => `+=${(cardEls.length - 1) * window.innerHeight}`,
        scrub: 0.7,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);

    cardEls.forEach((card, i) => {
      if (i === cardEls.length - 1) return;
      const nextCards = cardEls.slice(i + 1);

      tl.to(card, {
        y: "-118%", rotationX: -14, opacity: 0,
        transformOrigin: "50% 0%", duration: 1, ease: "none",
      });
      tl.to(nextCards[0], { y: 0, scale: 1, duration: 1, ease: "none" }, "<");
      nextCards.slice(1).forEach((futureCard, j) => {
        if (!futureCard) return;
        tl.to(futureCard, {
          y: (j + 1) * 22, scale: 1 - (j + 1) * 0.025,
          duration: 1, ease: "none",
        }, "<");
      });
      tl.to(dotEls[i],     { scale: 0.55, opacity: 0.25, duration: 0.4 }, "<");
      tl.to(dotEls[i + 1], { scale: 1,    opacity: 1,    duration: 0.4 }, "<");
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="why-vyzma"
      className="relative h-[100dvh] bg-[#0C0C0C] flex flex-col items-center justify-start pt-8 sm:pt-16 overflow-hidden"
    >
      {/* Heading */}
      <div className="relative z-10 text-center px-4 mb-10 shrink-0">
        <p className="text-white/30 text-[10px] uppercase tracking-[0.35em] mb-3">
          Why choose us
        </p>
        <h2 className="font-zentry font-black uppercase text-white text-[clamp(1.8rem,5.5vw,58px)] leading-[0.9]">
          WHY SMART BUSINESSES<br />CHOOSE VYZMA
        </h2>
      </div>

      {/* Card stack */}
      <div
        className="peel-cards-wrap relative w-full max-w-3xl mx-auto px-4 sm:px-6"
        style={{ height: "calc(100dvh - 200px)", overflow: "visible" }}
      >
        {cards.map((card, i) => (
          <div
            key={card.num}
            className="peel-card absolute inset-0 rounded-3xl overflow-hidden peel-card-item"
            style={{ zIndex: cards.length - i }}
          >
            {/* Card surface — bold vibrant gradient */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: card.bg,
                boxShadow: `0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.10)`,
              }}
            />

            {/* Noise texture overlay for depth */}
            <div
              className="absolute inset-0 rounded-3xl opacity-[0.03]"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                backgroundSize: "128px",
              }}
            />

            {/* Top shine */}
            <div
              className="absolute top-0 left-0 right-0 h-32 rounded-t-3xl"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)",
              }}
            />

            {/* Faded background number */}
            <div
              className="absolute right-6 bottom-2 font-zentry font-black select-none pointer-events-none leading-none"
              style={{
                fontSize: "clamp(7rem, 18vw, 12rem)",
                color: "white",
                opacity: 0.07,
              }}
            >
              {card.num}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-14 py-6 sm:py-10">
              <Icon num={card.num} accent={card.accent} />

              <h3
                className="font-zentry font-black uppercase text-white mt-6 mb-4 leading-[1.05]"
                style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.2rem)" }}
              >
                {card.title}
              </h3>

              <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed max-w-lg">
                {card.body}
              </p>

              {/* Bottom accent dash */}
              <div
                className="mt-8 h-[2px] w-10 rounded-full"
                style={{ background: card.accent }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Progress dots — right side, hidden on mobile */}
      <div className="hidden sm:flex absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 flex-col gap-[10px] z-30">
        {cards.map((card, i) => (
          <div
            key={i}
            className="prog-dot rounded-full"
            style={{
              width: 8,
              height: 8,
              background: card.peek,
            }}
          />
        ))}
      </div>

      {/* Scroll hint — fades out after first card peels */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-40 hidden sm:flex">
        <p className="text-white text-[10px] uppercase tracking-[0.3em]">Scroll</p>
        <div className="w-px h-8 bg-white/30" />
      </div>

    </section>
  );
};
