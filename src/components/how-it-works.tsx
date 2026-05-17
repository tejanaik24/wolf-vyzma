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

// Ambient crawl claws — slow upward drift, different sizes / positions / glows
const ambientClaws = [
  // Left side
  { left: "-7%",  w: 560, opacity: 0.13, rotate: -22, duration: 20, delay:   0, glow: "#3DA3FF" },
  { left:  "4%",  w: 320, opacity: 0.08, rotate: -18, duration: 24, delay: -11, glow: "#3DA3FF" },
  // Center — the "tearing through" claws (new)
  { left: "36%",  w: 480, opacity: 0.13, rotate: -14, duration: 22, delay:  -6, glow: "#3DA3FF" },
  { left: "50%",  w: 300, opacity: 0.09, rotate: -10, duration: 18, delay:  -2, glow: "#8A5CFF" },
  // Right side
  { right: "-5%", w: 380, opacity: 0.10, rotate:  18, duration: 26, delay:  -9, glow: "#8A5CFF" },
  { right: "14%", w: 450, opacity: 0.11, rotate:  11, duration: 23, delay:  -5, glow: "#FFB547" },
  { left:  "75%", w: 210, opacity: 0.06, rotate: -30, duration: 19, delay: -18, glow: "#3DA3FF" },
];

export const HowItWorks = () => {
  const containerRef  = useRef<HTMLDivElement>(null);
  const mouseLayerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax — each slash claw shifts at a different depth rate
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
    // ── SCROLL ENTRANCE TIMELINE ──────────────────────────────────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 68%",
        toggleActions: "play none none reverse",
      },
    });

    // Heading slams down with slight over-scale
    tl.fromTo(".hiw-title",
      { opacity: 0, y: -70, scale: 1.12 },
      { opacity: 1,  y:   0, scale: 1,    duration: 0.85, ease: "expo.out" }
    );
    tl.fromTo(".hiw-sub",
      { opacity: 0 },
      { opacity: 1, duration: 0.35 },
      "-=0.25"
    );

    // SLASH 1 — tears in from top-left corner
    tl.fromTo(".slash-1",
      { x: "-160%", y: "-160%", rotation: -55, opacity: 0, scale: 2.8 },
      { x: "0%",    y: "0%",    rotation: -22, opacity: 1, scale: 1,
        duration: 0.65, ease: "expo.out" },
      "-=0.05"
    );
    tl.fromTo(".how-step-0",
      { opacity: 0, x: -50 },
      { opacity: 1,  x:   0, duration: 0.5, ease: "power3.out" },
      "-=0.35"
    );

    // SLASH 2 — tears in from right
    tl.fromTo(".slash-2",
      { x: "180%", y:  "40%", rotation:  55, opacity: 0, scale: 2.2 },
      { x:   "0%", y:   "0%", rotation:  18, opacity: 1, scale: 1,
        duration: 0.65, ease: "expo.out" },
      "-=0.1"
    );
    tl.fromTo(".how-step-1",
      { opacity: 0, y: 50 },
      { opacity: 1,  y:  0, duration: 0.5, ease: "power3.out" },
      "-=0.35"
    );

    // SLASH 3 — tears in from bottom-left
    tl.fromTo(".slash-3",
      { x: "-100%", y: "180%", rotation: -45, opacity: 0, scale: 1.9 },
      { x:    "0%", y:   "0%", rotation:  -8, opacity: 1, scale: 1,
        duration: 0.65, ease: "expo.out" },
      "-=0.1"
    );
    tl.fromTo(".how-step-2",
      { opacity: 0, x: 50 },
      { opacity: 1,  x:  0, duration: 0.5, ease: "power3.out" },
      "-=0.35"
    );

    // Button
    tl.fromTo(".hiw-btn",
      { opacity: 0, y: 24 },
      { opacity: 1,  y:  0, duration: 0.45, ease: "power3.out" },
      "-=0.1"
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* ── AMBIENT CRAWL LAYER ─────────────────────────────────────── */}
      <div className="claw-bg-layer absolute inset-0 pointer-events-none select-none overflow-hidden">
        {ambientClaws.map((c, i) => (
          <div
            key={i}
            className={`${i === 2 || i === 3 ? "claw-crawl-tear" : "claw-crawl"} absolute`}
            style={{
              left:             "left"  in c ? (c as any).left  : undefined,
              right:            "right" in c ? (c as any).right : undefined,
              width:            c.w,
              animationDuration: `${c.duration}s`,
              animationDelay:    `${c.delay}s`,
            }}
          >
            <img
              src={CLAW}
              alt=""
              className="w-full"
              style={{
                opacity: c.opacity,
                transform: `rotate(${c.rotate}deg)`,
                filter: `drop-shadow(0 0 28px ${c.glow}) drop-shadow(0 0 60px ${c.glow}55)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* ── ENTRANCE SLASH + MOUSE-PARALLAX LAYER ───────────────────── */}
      <div ref={mouseLayerRef} className="absolute inset-0 pointer-events-none select-none">
        {/* Slash 1 — blue, top-left, depth 2 (moves most with mouse) */}
        <div
          className="slash-1 slash-claw-glow absolute w-[460px]"
          data-depth="2"
          style={{
            left: "0%", top: "0%",
            opacity: 0,
            filter: "drop-shadow(0 0 50px #3DA3FF) drop-shadow(0 0 100px #1A6FFF) drop-shadow(0 0 160px #0A3FFF)",
          }}
        >
          <img src={CLAW} alt="" className="w-full" style={{ transform: "rotate(-22deg)" }} />
        </div>

        {/* Slash 2 — purple, right side, depth 1.3 */}
        <div
          className="slash-2 slash-claw-glow absolute w-[320px]"
          data-depth="1.3"
          style={{
            right: "3%", top: "28%",
            opacity: 0,
            filter: "drop-shadow(0 0 40px #8A5CFF) drop-shadow(0 0 80px #6A3CFF)",
          }}
        >
          <img src={CLAW} alt="" className="w-full" style={{ transform: "rotate(18deg)" }} />
        </div>

        {/* Slash 3 — amber, bottom-left, depth 0.7 (moves least) */}
        <div
          className="slash-3 slash-claw-glow absolute w-[250px]"
          data-depth="0.7"
          style={{
            left: "22%", bottom: "6%",
            opacity: 0,
            filter: "drop-shadow(0 0 30px #FFB547) drop-shadow(0 0 60px #FF8A0088)",
          }}
        >
          <img src={CLAW} alt="" className="w-full" style={{ transform: "rotate(-8deg)" }} />
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
