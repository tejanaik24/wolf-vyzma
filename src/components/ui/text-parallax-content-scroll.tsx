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

const PAD = 14;

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

      // Single timeline covering full visibility window (container top→bottom crossing viewport)
      // "top bottom" → "bottom top" = 230vh total (130vh container + 100vh viewport)
      // Sticky is active ~43%–57% of that range — entrance/exit bracket it neatly
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: outer,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      });

      // 0–35%: card rises from depth
      tl.fromTo(
        card,
        {
          scale: 0.84,
          rotationX: 16,
          opacity: 0,
          transformPerspective: 1100,
          transformOrigin: "50% 50%",
        },
        {
          scale: 1,
          rotationX: 0,
          opacity: 1,
          ease: "power1.out",
        },
        0
      );

      // 65–100%: card recedes into depth after sticky unpins
      tl.to(
        card,
        {
          scale: 0.84,
          rotationX: -10,
          opacity: 0,
          ease: "power1.in",
        },
        0.65
      );

      // Caption fades up
      gsap.fromTo(
        cap,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: cap,
            start: "top 100%",
            end: "top 55%",
            scrub: 0.9,
          },
        }
      );
    },
    { scope: outerRef }
  );

  return (
    // 130vh: sticky pins for ~30vh, timeline entrance/exit fill the rest
    <div ref={outerRef} style={{ minHeight: "130vh" }}>
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

      {/* Caption — sits flush after sticky, no travel div */}
      <div
        ref={captionRef}
        className="mx-auto max-w-2xl px-6 py-5 text-center"
      >
        <p className="font-general mb-1.5 text-[10px] uppercase tracking-[0.3em] text-[#3DA3FF]">
          {sub}
        </p>
        <p className="font-circular-web text-base leading-relaxed text-[#D0D2D6] md:text-lg">
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
