import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const WOLF_SLIDES = [
  {
    imgUrl: "/img/wolf-ai-automation.png",
    sub: "AI Automation",
    caption: "Intelligent workflows that run your business 24/7 — from lead nurturing to task orchestration.",
  },
  {
    imgUrl: "/img/wolf-ai-content.png",
    sub: "AI Content",
    caption: "Generate high-quality, on-brand content at scale — blogs, social, ads, and beyond.",
  },
  {
    imgUrl: "/img/wolf-ai-film-making.png",
    sub: "AI Film Making",
    caption: "Cinematic video production powered by AI — from storyboarding to final cut.",
  },
  {
    imgUrl: "/img/wolf-voice-agent.png",
    sub: "Voice Agent",
    caption: "Natural voice assistants that handle calls, qualify leads, and book appointments seamlessly.",
  },
  {
    imgUrl: "/img/wolf-chatbot.png",
    sub: "Chatbot",
    caption: "Smart conversational agents that engage visitors, answer questions, and drive conversions.",
  },
];

const PAD = 12;

const WolfSlide = ({ imgUrl, caption, sub }: typeof WOLF_SLIDES[0]) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      const outer = outerRef.current;
      const cap = captionRef.current;
      if (!card || !outer || !cap) return;

      gsap.fromTo(
        card,
        { scale: 0.92, rotationX: 12, transformPerspective: 1000, transformOrigin: "50% 50%" },
        {
          scale: 1, rotationX: 0, ease: "none",
          scrollTrigger: { trigger: outer, start: "top 90%", end: "top 10%", scrub: 0.6 },
        }
      );

      gsap.to(card, {
        scale: 0.88, ease: "none",
        scrollTrigger: { trigger: outer, start: "bottom 90%", end: "bottom 20%", scrub: 0.6 },
      });

      gsap.fromTo(
        cap,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, ease: "none", scrollTrigger: { trigger: cap, start: "top 100%", end: "top 60%", scrub: 0.6 } }
      );
    },
    { scope: outerRef }
  );

  return (
    <div ref={outerRef} style={{ minHeight: "110vh" }}>
      <div style={{ paddingLeft: PAD, paddingRight: PAD }}>
        <div className="sticky slide-glow-border rounded-3xl" style={{ top: PAD, height: `calc(100vh - ${PAD * 2}px)` }}>
          <div ref={cardRef} className="absolute inset-[2px] overflow-hidden rounded-[22px] bg-[#0A0A0D] flex items-center justify-center">
            <img src={imgUrl} alt="" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
      <div ref={captionRef} className="mx-auto max-w-2xl px-6 py-4 text-center">
        <p className="font-general mb-1 text-[10px] uppercase tracking-[0.3em] text-[#3DA3FF]">{sub}</p>
        <p className="font-circular-web text-sm leading-relaxed text-[#D0D2D6] md:text-base">{caption}</p>
      </div>
    </div>
  );
};

export const WolfSlidesSection = () => {
  return (
    <div className="bg-[#0A0A0D]">
      {WOLF_SLIDES.map((slide) => (
        <WolfSlide key={slide.imgUrl} {...slide} />
      ))}
    </div>
  );
};
