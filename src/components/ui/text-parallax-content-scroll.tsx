import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface SlideData {
  imgUrl: string;
  caption: string;
  sub: string;
}

const SLIDES: SlideData[] = [
  {
    imgUrl: "/img/slide-1.png",
    sub: "Always watching. Always working.",
    caption:
      "Our AI agents run 24/7 — qualifying leads, responding to messages, and updating your CRM while you sleep.",
  },
  {
    imgUrl: "/img/slide-3.png",
    sub: "The upgrade is non-negotiable.",
    caption:
      "Traditional marketing burns budget with guesswork. AI Digital Marketing targets precisely, moves fast, and compounds results every month.",
  },
  {
    imgUrl: "/img/slide-4.png",
    sub: "Stand out or fade out.",
    caption:
      "In a market full of noise, we make your brand the signal — unmistakable, memorable, and built to dominate its niche.",
  },
  {
    imgUrl: "/img/slide-2.png",
    sub: "You focus on the business.",
    caption:
      "Hand us the marketing wheel. Strategy, content, ads, and automation — fully managed so you never have to think about it again.",
  },
];

const PAD = 12;

const ParallaxSlide = ({ imgUrl, caption, sub }: SlideData) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      const outer = outerRef.current;
      const cap = captionRef.current;
      if (!card || !outer || !cap) return;

      // ── 3D entrance — NO opacity change, images always fully bright ──────
      // Only scale + rotationX for the floating depth feel
      gsap.fromTo(
        card,
        {
          scale: 0.92,
          rotationX: 12,
          transformPerspective: 1000,
          transformOrigin: "50% 50%",
        },
        {
          scale: 1,
          rotationX: 0,
          ease: "none",
          scrollTrigger: {
            trigger: outer,
            start: "top 90%",   // starts the moment card appears from below
            end: "top 10%",     // fully in by the time it's near the top
            scrub: 0.6,         // fast, locked to scroll
          },
        }
      );

      // ── Subtle exit — scale down only, no opacity (keeps images visible) ─
      gsap.to(card, {
        scale: 0.88,
        ease: "none",
        scrollTrigger: {
          trigger: outer,
          start: "bottom 90%",  // card starts shrinking as next slide comes
          end: "bottom 20%",
          scrub: 0.6,
        },
      });

      // ── Caption floats up ─────────────────────────────────────────────────
      gsap.fromTo(
        cap,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: cap,
            start: "top 100%",
            end: "top 60%",
            scrub: 0.6,
          },
        }
      );
    },
    { scope: outerRef }
  );

  return (
    // 110vh: sticky card pins for ~10vh, entrance/exit tied to viewport edges
    <div ref={outerRef} style={{ minHeight: "110vh" }}>
      <div style={{ paddingLeft: PAD, paddingRight: PAD }}>
        <div
          className="sticky overflow-hidden rounded-3xl bg-[#0A0A0D]"
          style={{ top: PAD, height: `calc(100vh - ${PAD * 2}px)` }}
        >
          <div
            ref={cardRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img
              src={imgUrl}
              alt=""
              className="h-full w-full object-contain"
            />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/[0.06] pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Caption — tight strip below image, no dead space */}
      <div
        ref={captionRef}
        className="mx-auto max-w-2xl px-6 py-4 text-center"
      >
        <p className="font-general mb-1 text-[10px] uppercase tracking-[0.3em] text-[#3DA3FF]">
          {sub}
        </p>
        <p className="font-circular-web text-sm leading-relaxed text-[#D0D2D6] md:text-base">
          {caption}
        </p>
      </div>
    </div>
  );
};

export const VyzmaParallaxSlides = () => {
  return (
    <div className="bg-[#0A0A0D]">
      {SLIDES.map((slide) => (
        <ParallaxSlide key={slide.imgUrl} {...slide} />
      ))}
    </div>
  );
};
