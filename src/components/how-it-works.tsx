import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CLAW = "/img/wolf-claw.png";

const steps = [
  {
    num: "01",
    title: "Free Strategy Call (Day 1)",
    body: "Tell us about your business. We ask questions, understand your problems, and tell you exactly what we'll build. No technical talk. No pressure. Just honest advice in 30 minutes.",
    color: "#3DA3FF",
  },
  {
    num: "02",
    title: "We Build Everything (Days 2–6)",
    body: "Our team builds your chatbot, sets up your ads, or designs your website. You don't touch any technology. You approve the messages and design. We handle 100%.",
    color: "#8A5CFF",
  },
  {
    num: "03",
    title: "You Go Live and Grow (Day 7+)",
    body: "Everything goes live. Leads start coming in. We send you a simple monthly report — what worked, what improved, what's coming next. No jargon. Just results.",
    color: "#FFB547",
  },
];

export const HowItWorks = () => {
  const containerRef  = useRef<HTMLDivElement>(null);
  const mouseLayerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax depth effect on all slash claws
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!mouseLayerRef.current) return;
      const xPct = e.clientX / window.innerWidth  - 0.5;
      const yPct = e.clientY / window.innerHeight - 0.5;
      mouseLayerRef.current
        .querySelectorAll<HTMLElement>("[data-depth]")
        .forEach((el) => {
          const d = parseFloat(el.dataset.depth ?? "1");
          gsap.to(el, { x: xPct * d * 38, y: yPct * d * 28, duration: 1.6, ease: "power2.out" });
        });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 68%",
        toggleActions: "play none none reverse",
      },
    });

    // Heading slams down
    tl.fromTo(".hiw-title",
      { opacity: 0, y: -70, scale: 1.12 },
      { opacity: 1,  y:   0, scale: 1, duration: 0.85, ease: "expo.out" }
    );
    tl.fromTo(".hiw-sub",
      { opacity: 0 },
      { opacity: 1, duration: 0.35 },
      "-=0.25"
    );

    // SLASH 1 — top-left → lands top-left (blue)
    tl.fromTo(".slash-1",
      { x: "-160%", y: "-160%", rotation: -55, opacity: 0, scale: 2.8 },
      { x: "0%",    y: "0%",    rotation: -22, opacity: 1, scale: 1, duration: 0.65, ease: "expo.out" },
      "-=0.05"
    );
    tl.fromTo(".how-step-0",
      { opacity: 0, x: -50 },
      { opacity: 1, x:   0, duration: 0.5, ease: "power3.out" },
      "-=0.35"
    );

    // SLASH 2 — right → lands right-center (purple)
    tl.fromTo(".slash-2",
      { x: "180%", y: "40%", rotation:  55, opacity: 0, scale: 2.2 },
      { x:   "0%", y:  "0%", rotation:  18, opacity: 1, scale: 1, duration: 0.65, ease: "expo.out" },
      "-=0.1"
    );
    tl.fromTo(".how-step-1",
      { opacity: 0, y: 50 },
      { opacity: 1,  y:  0, duration: 0.5, ease: "power3.out" },
      "-=0.35"
    );

    // SLASH 3 — bottom-left → lands bottom-left (amber)
    tl.fromTo(".slash-3",
      { x: "-100%", y: "180%", rotation: -45, opacity: 0, scale: 1.9 },
      { x:    "0%", y:   "0%", rotation:  -8, opacity: 1, scale: 1, duration: 0.65, ease: "expo.out" },
      "-=0.1"
    );
    tl.fromTo(".how-step-2",
      { opacity: 0, x: 50 },
      { opacity: 1, x:  0, duration: 0.5, ease: "power3.out" },
      "-=0.35"
    );

    // SLASH 4 (NEW BIG ONE) — top-center → lands center-top (blue, biggest)
    tl.fromTo(".slash-4",
      { x: "20%", y: "-220%", rotation: -60, opacity: 0, scale: 3.0 },
      { x:  "0%", y:    "0%", rotation: -16, opacity: 1, scale: 1, duration: 0.75, ease: "expo.out" },
      "-=0.5"
    );

    // Button
    tl.fromTo(".hiw-btn",
      { opacity: 0, y: 24 },
      { opacity: 1,  y:  0, duration: 0.45, ease: "power3.out" },
      "-=0.15"
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* ── 4 SLASH CLAWS — full opacity, mouse parallax depth ───────── */}
      <div ref={mouseLayerRef} className="absolute inset-0 pointer-events-none select-none">

        {/* Slash 1 — large, top-left, blue glow */}
        <div
          className="slash-1 slash-claw-glow absolute w-[500px]"
          data-depth="2"
          style={{
            left: "0%", top: "0%", opacity: 0,
            filter: "drop-shadow(0 0 50px #3DA3FF) drop-shadow(0 0 100px #1A6FFF) drop-shadow(0 0 160px #0A3FFF)",
          }}
        >
          <img src={CLAW} alt="" className="w-full" style={{ transform: "rotate(-22deg)" }} />
        </div>

        {/* Slash 2 — medium, right-center, purple glow */}
        <div
          className="slash-2 slash-claw-glow absolute w-[340px]"
          data-depth="1.3"
          style={{
            right: "3%", top: "28%", opacity: 0,
            filter: "drop-shadow(0 0 40px #8A5CFF) drop-shadow(0 0 80px #6A3CFF)",
          }}
        >
          <img src={CLAW} alt="" className="w-full" style={{ transform: "rotate(18deg)" }} />
        </div>

        {/* Slash 3 — medium, bottom-left, amber glow */}
        <div
          className="slash-3 slash-claw-glow absolute w-[270px]"
          data-depth="0.7"
          style={{
            left: "22%", bottom: "6%", opacity: 0,
            filter: "drop-shadow(0 0 30px #FFB547) drop-shadow(0 0 60px #FF8A0088)",
          }}
        >
          <img src={CLAW} alt="" className="w-full" style={{ transform: "rotate(-8deg)" }} />
        </div>

        {/* Slash 4 — BIG, center-top, blue glow (user requested) */}
        <div
          className="slash-4 slash-claw-glow absolute w-[620px]"
          data-depth="1.6"
          style={{
            left: "28%", top: "-2%", opacity: 0,
            filter: "drop-shadow(0 0 60px #3DA3FF) drop-shadow(0 0 120px #1A6FFF) drop-shadow(0 0 200px #0A3FFF)",
          }}
        >
          <img src={CLAW} alt="" className="w-full" style={{ transform: "rotate(-16deg)" }} />
        </div>
      </div>

      {/* ── CONTENT ─────────────────────────────────────────────────── */}
      <h2 className="hiw-title font-zentry font-black uppercase text-center text-[clamp(2.5rem,8vw,80px)] leading-[0.9] hero-gradient mb-2 relative z-10">
        LIVE IN 7 DAYS
      </h2>
      <p className="hiw-sub text-white/60 text-center text-sm mb-20 relative z-10" style={{ opacity: 0 }}>
        Here's Exactly How It Works
      </p>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="hidden md:block absolute top-16 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-white/10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`how-step-${i} text-center md:text-left`}
              style={{ opacity: 0 }}
            >
              <span
                className="text-[clamp(4rem,8vw,6rem)] font-black leading-none block mb-4"
                style={{ color: step.color }}
              >
                {step.num}
              </span>
              <h3 className="text-white font-medium text-lg mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hiw-btn flex justify-center mt-16 relative z-10" style={{ opacity: 0 }}>
        <a
          href="#contact"
          className="bg-[#3DA3FF] text-white rounded-full px-8 py-3 font-medium text-sm uppercase tracking-wider hover:bg-[#3DA3FF]/90 transition"
        >
          Book Your Free Call →
        </a>
      </div>
    </section>
  );
};
