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
    accent: "#3DA3FF",
  },
  {
    num: "02",
    title: "We Do 100% of the Work",
    body: "You don't need a tech team. You don't need to understand AI. You approve — we build, run, and manage everything for you from day one.",
    accent: "#8A5CFF",
  },
  {
    num: "03",
    title: "AI + Marketing Under One Roof",
    body: "Most agencies do either AI or marketing. We do both. One team handles your chatbot, Google ads, Instagram reels, and SEO. One invoice. No confusion.",
    accent: "#3DA3FF",
  },
  {
    num: "04",
    title: "AEO + GEO — The Future of Search",
    body: "We don't just rank you on Google. We get your business cited in ChatGPT, Perplexity, and Google AI Overviews. Your competitors haven't discovered this yet.",
    accent: "#FFB547",
  },
  {
    num: "05",
    title: "We Understand Indian Businesses",
    body: "Diwali campaigns. Regional languages. WhatsApp-first customers. Indian pricing. We're from Bangalore and Vizag — your customers are our neighbors.",
    accent: "#3DA3FF",
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
    const cardEls = gsap.utils.toArray<HTMLElement>(".peel-card");
    const dotEls  = gsap.utils.toArray<HTMLElement>(".prog-dot");

    // Stack: cards below peek out with slight offset + scale down
    cardEls.forEach((card, i) => {
      if (i === 0) return;
      gsap.set(card, { y: i * 12, scale: 1 - i * 0.03 });
    });

    // Initial dot states
    dotEls.forEach((dot, i) => {
      if (i !== 0) gsap.set(dot, { scale: 0.55, opacity: 0.25 });
    });

    // 3D perspective on the container
    gsap.set(".peel-cards-wrap", { perspective: 1400 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: () => `+=${(cardEls.length - 1) * window.innerHeight}`,
        scrub: 0.7,
      },
    });

    cardEls.forEach((card, i) => {
      if (i === cardEls.length - 1) return;
      const nextCards = cardEls.slice(i + 1);

      // Top card peels up and away (3D flip at top edge)
      tl.to(card, {
        y: "-118%",
        rotationX: -14,
        opacity: 0,
        transformOrigin: "50% 0%",
        duration: 1,
        ease: "none",
      });

      // Next card rises to full size
      tl.to(nextCards[0], {
        y: 0,
        scale: 1,
        duration: 1,
        ease: "none",
      }, "<");

      // Remaining cards shift up in the stack
      nextCards.slice(1).forEach((futureCard, j) => {
        tl.to(futureCard, {
          y: (j + 1) * 12,
          scale: 1 - (j + 1) * 0.03,
          duration: 1,
          ease: "none",
        }, "<");
      });

      // Progress dot update
      tl.to(dotEls[i],     { scale: 0.55, opacity: 0.25, duration: 0.4 }, "<");
      tl.to(dotEls[i + 1], { scale: 1,    opacity: 1,    duration: 0.4 }, "<");
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-[#0C0C0C] flex flex-col items-center justify-start pt-16 overflow-hidden"
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
        className="peel-cards-wrap relative w-full max-w-3xl mx-auto px-4 sm:px-6 flex-1"
        style={{ maxHeight: "calc(100vh - 240px)" }}
      >
        {cards.map((card, i) => (
          <div
            key={card.num}
            className="peel-card absolute inset-0 rounded-3xl"
            style={{ zIndex: cards.length - i }}
          >
            {/* Card surface */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "linear-gradient(145deg, #161616 0%, #111111 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 40px 80px rgba(0,0,0,0.6)",
              }}
            />

            {/* Top glow accent line */}
            <div
              className="absolute top-0 left-10 right-10 h-px rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${card.accent}99, transparent)`,
              }}
            />

            {/* Left accent bar */}
            <div
              className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full"
              style={{ background: card.accent, opacity: 0.8 }}
            />

            {/* Faded background number */}
            <div
              className="absolute right-6 bottom-2 font-zentry font-black select-none pointer-events-none leading-none"
              style={{
                fontSize: "clamp(7rem, 18vw, 12rem)",
                color: card.accent,
                opacity: 0.045,
              }}
            >
              {card.num}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center px-10 sm:px-14 py-10">
              <Icon num={card.num} accent={card.accent} />

              <h3
                className="font-zentry font-black uppercase text-white mt-6 mb-4 leading-[1.05]"
                style={{ fontSize: "clamp(1.4rem, 3.2vw, 2.2rem)" }}
              >
                {card.title}
              </h3>

              <p className="text-white/55 text-sm sm:text-[15px] leading-relaxed max-w-lg">
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

      {/* Progress dots — right side */}
      <div className="absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-[10px] z-30">
        {cards.map((card, i) => (
          <div
            key={i}
            className="prog-dot rounded-full"
            style={{
              width: 8,
              height: 8,
              background: card.accent,
            }}
          />
        ))}
      </div>

      {/* Scroll hint — fades out after first card peels */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-40">
        <p className="text-white text-[10px] uppercase tracking-[0.3em]">Scroll</p>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
};
