import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SLIDES = [
  {
    imgUrl: "/img/slide-1.png",
    sub: "Always watching. Always working.",
    caption: "Our AI agents run 24/7 — qualifying leads, responding to messages, and updating your CRM while you sleep.",
  },
  {
    imgUrl: "/img/slide-3.png",
    sub: "The upgrade is non-negotiable.",
    caption: "Traditional marketing burns budget with guesswork. AI Digital Marketing targets precisely, moves fast, and compounds results every month.",
  },
  {
    imgUrl: "/img/slide-4.png",
    sub: "Stand out or fade out.",
    caption: "In a market full of noise, we make your brand the signal — unmistakable, memorable, and built to dominate its niche.",
  },
  {
    imgUrl: "/img/slide-2.png",
    sub: "You focus on the business.",
    caption: "Hand us the marketing wheel. Strategy, content, ads, and automation — fully managed so you never have to think about it again.",
  },
];

export const VyzmaParallaxSlides = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const cardEls = gsap.utils.toArray<HTMLElement>(".vps-card");
    const captEls = gsap.utils.toArray<HTMLElement>(".vps-caption");
    if (!cardEls.length) return;

    // Stack cards behind each other — same as WhyVyzma peel effect
    cardEls.forEach((card, i) => {
      if (i === 0) return;
      gsap.set(card, { y: i * 20, scale: 1 - i * 0.03 });
    });

    // Show only first caption at start
    captEls.forEach((cap, i) => {
      if (i !== 0) gsap.set(cap, { opacity: 0, y: 12 });
    });

    gsap.set(".vps-card", { transformPerspective: 1400 });

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

      // Current card peels away
      tl.to(card, {
        y: "-118%", rotationX: -14, opacity: 0,
        transformOrigin: "50% 0%", duration: 1, ease: "none",
      });

      // Next card comes to front
      tl.to(nextCards[0], { y: 0, scale: 1, duration: 1, ease: "none" }, "<");

      // Remaining cards shift up in the stack
      nextCards.slice(1).forEach((futureCard, j) => {
        if (!futureCard) return;
        tl.to(futureCard, {
          y: (j + 1) * 20, scale: 1 - (j + 1) * 0.03,
          duration: 1, ease: "none",
        }, "<");
      });

      // Caption cross-fade
      tl.to(captEls[i],     { opacity: 0, y: -10, duration: 0.4 }, "<");
      tl.to(captEls[i + 1], { opacity: 1, y: 0,   duration: 0.4 }, "<0.1");
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="slides"
      className="relative h-screen bg-[#0A0A0D] flex flex-col items-center justify-start pt-8 sm:pt-12"
      style={{ overflow: "hidden" }}
    >
      {/* Heading */}
      <div className="relative z-10 text-center px-4 mb-6 sm:mb-8 shrink-0">
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#3DA3FF]/60 mb-2">
          What we do
        </p>
        <h2 className="font-zentry font-black uppercase text-white text-[clamp(1.6rem,4.5vw,48px)] leading-[0.92]">
          INTELLIGENCE IN ACTION
        </h2>
      </div>

      {/* Card stack — explicitly sized so inset-0 children have a real height */}
      <div
        className="relative w-full max-w-5xl mx-auto px-3 sm:px-6 min-h-0 flex-1"
      >
        <div className="absolute inset-0 mx-3 sm:mx-6">
          {SLIDES.map((slide, i) => (
            <div
              key={slide.imgUrl}
              className="vps-card absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden"
              style={{ zIndex: SLIDES.length - i }}
            >
              <img
                src={slide.imgUrl}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              {/* Bottom gradient so caption is readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Caption — sits below the card stack, cross-fades per slide */}
      <div className="relative z-20 w-full max-w-2xl mx-auto px-6 py-4 text-center shrink-0" style={{ height: 80 }}>
        {SLIDES.map((slide) => (
          <div
            key={slide.imgUrl}
            className="vps-caption absolute inset-0 flex flex-col items-center justify-center px-6"
          >
            <p className="font-general text-[10px] uppercase tracking-[0.3em] text-[#3DA3FF] mb-1">
              {slide.sub}
            </p>
            <p className="font-circular-web text-xs sm:text-sm leading-relaxed text-[#D0D2D6] max-w-lg">
              {slide.caption}
            </p>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 opacity-30 hidden sm:flex">
        <p className="text-white text-[10px] uppercase tracking-[0.3em]">Scroll</p>
        <div className="w-px h-6 bg-white/30" />
      </div>
    </section>
  );
};
