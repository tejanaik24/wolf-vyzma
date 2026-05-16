import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PhoneMissed, Bot, Inbox, UserX, Trophy, RefreshCw } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── Data ──────────────────────────────────────────────────────── */
const LEFT_CARDS = [
  { icon: PhoneMissed, title: "Calls Go Unanswered",       body: "Customers call after hours, on weekends, during lunch. No answer means no sale — they call your competitor next.",                        num: "01" },
  { icon: Bot,         title: "Your Team Does Robot Work", body: "Your staff spends hours answering the same questions, copy-pasting data, sending follow-ups. That's AI's job, not theirs.",              num: "02" },
  { icon: Inbox,       title: "Leads Die In Your Inbox",   body: "A lead who doesn't hear back in 5 minutes is 80% less likely to convert. Your inbox is a graveyard of lost revenue.",                   num: "03" },
];

const RIGHT_CARDS = [
  { icon: UserX,     title: "Paying Staff For Nothing Smart",         body: "You're paying human salaries for tasks a ₹4,999/month AI handles better, faster, 24 hours a day — without sick days.",       num: "04" },
  { icon: Trophy,    title: "Competitors Look More Professional",     body: "That clinic with instant WhatsApp replies, auto-booking, and AI follow-ups? They're eating your customers. Right now.",        num: "05" },
  { icon: RefreshCw, title: "Same Problems Every Month",              body: "Every month review has the same issues: missed leads, slow response, manual reports. AI removes all three permanently.",      num: "06" },
];

/* ── Card ──────────────────────────────────────────────────────── */
const PainCard = ({
  icon: Icon, title, body, num,
  cardRef,
}: {
  icon: React.ElementType; title: string; body: string; num: string;
  cardRef?: (el: HTMLDivElement | null) => void;
}) => (
  <div
    ref={cardRef}
    className="pain-card relative overflow-hidden"
    style={{
      width: "100%",
      marginBottom: "16px",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(30,144,255,0.12)",
      borderLeft: "2px solid rgba(30,144,255,0.5)",
      borderRadius: "12px",
      padding: "24px",
    }}
  >
    {/* Top-left corner shimmer */}
    <div className="absolute inset-0 pointer-events-none" style={{
      background: "radial-gradient(circle at 0% 0%, rgba(30,144,255,0.05) 0%, transparent 60%)",
    }} />

    {/* Bottom inner glow */}
    <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{
      height: "60px",
      background: "linear-gradient(to top, rgba(30,144,255,0.08) 0%, transparent 100%)",
      borderRadius: "inherit",
    }} />

    {/* Ghost number */}
    <div className="absolute pointer-events-none select-none" style={{
      bottom: "-10px", right: "-10px",
      fontFamily: "'Bebas Neue', cursive",
      fontSize: "120px",
      color: "#1E90FF",
      opacity: 0.04,
      lineHeight: 1,
      zIndex: 0,
    }}>
      {num}
    </div>

    {/* Content */}
    <div className="relative" style={{ zIndex: 1 }}>
      <Icon size={28} style={{ color: "#1E90FF", marginBottom: "12px" }} />
      <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "18px", color: "#ffffff", marginBottom: "8px" }}>
        {title}
      </h3>
      <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "14px", color: "#A0A0B8", lineHeight: "1.65", margin: 0 }}>
        {body}
      </p>
    </div>
  </div>
);

/* ── SVG line data type ─────────────────────────────────────────── */
interface LineCoord { x1: number; y1: number; x2: number; y2: number; }

/* ── Section ───────────────────────────────────────────────────── */
export const PainPointsSection = () => {
  const sectionRef  = useRef<HTMLElement>(null);
  const wolfRef     = useRef<HTMLDivElement>(null);
  const wolfImgRef  = useRef<HTMLImageElement>(null);
  const leftRef     = useRef<HTMLDivElement>(null);
  const rightRef    = useRef<HTMLDivElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const svgRef      = useRef<SVGSVGElement>(null);
  const lineRefs    = useRef<(SVGLineElement | null)[]>([]);
  const dotRefs     = useRef<(SVGCircleElement | null)[]>([]);
  const cardEls     = useRef<(HTMLDivElement | null)[]>([]);

  /* Track SVG size for viewBox */
  const [svgSize, setSvgSize] = useState({ w: 1200, h: 800 });
  const [lineCoords, setLineCoords] = useState<LineCoord[]>([]);

  /* Calculate line coords from real DOM positions */
  const recalcLines = () => {
    const section = sectionRef.current;
    const wolfImg = wolfImgRef.current;
    if (!section || !wolfImg) return;

    const sRect = section.getBoundingClientRect();
    const wRect = wolfImg.getBoundingClientRect();
    const wolfCx = wRect.left + wRect.width / 2 - sRect.left;
    const wolfCy = wRect.top  + wRect.height / 2 - sRect.top;

    setSvgSize({ w: sRect.width, h: sRect.height });

    const coords = cardEls.current.map((card) => {
      if (!card) return { x1: wolfCx, y1: wolfCy, x2: wolfCx, y2: wolfCy };
      const cRect = card.getBoundingClientRect();
      // Connect to nearest horizontal edge of card
      const isLeft = cRect.left < sRect.left + sRect.width / 2;
      const cx = isLeft
        ? cRect.right - sRect.left          // right edge of left card
        : cRect.left  - sRect.left;         // left edge of right card
      const cy = cRect.top + cRect.height / 2 - sRect.top;
      return { x1: wolfCx, y1: wolfCy, x2: cx, y2: cy };
    });
    setLineCoords(coords);
  };

  useEffect(() => {
    // Recalc after fonts/images load and on resize
    const id = requestAnimationFrame(() => setTimeout(recalcLines, 300));
    window.addEventListener("resize", recalcLines);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", recalcLines);
    };
  }, []);

  /* GSAP animations */
  useGSAP(() => {
    const wolf      = wolfRef.current;
    const leftCards  = leftRef.current?.querySelectorAll(".pain-card");
    const rightCards = rightRef.current?.querySelectorAll(".pain-card");
    if (!wolf) return;

    /* Wolf entrance */
    gsap.fromTo(wolf,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: wolf, start: "top 80%", toggleActions: "play none none none" },
        onComplete: recalcLines,
      }
    );

    /* Wolf float */
    gsap.to(wolf, { y: -15, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });

    /* Left cards */
    if (leftCards?.length) {
      gsap.fromTo(leftCards, { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.65, ease: "power3.out", stagger: 0.15, delay: 0.3,
          scrollTrigger: { trigger: leftRef.current, start: "top 80%", toggleActions: "play none none none" } }
      );
    }

    /* Right cards */
    if (rightCards?.length) {
      gsap.fromTo(rightCards, { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 0.65, ease: "power3.out", stagger: 0.15, delay: 0.3,
          scrollTrigger: { trigger: rightRef.current, start: "top 80%", toggleActions: "play none none none" } }
      );
    }

    /* CTA */
    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current, { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: ctaRef.current, start: "top 90%", toggleActions: "play none none none" } }
      );
    }
  }, { scope: sectionRef });

  /* Animate SVG lines once coords are set */
  useEffect(() => {
    if (!lineCoords.length) return;

    lineRefs.current.forEach((line, i) => {
      if (!line) return;
      const len = line.getTotalLength?.() ?? 200;
      gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(line, {
        strokeDashoffset: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: i * 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none none" },
      });
    });

    dotRefs.current.forEach((dot, i) => {
      if (!dot) return;
      gsap.fromTo(dot, { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.3, delay: i * 0.1 + 1.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none none" } }
      );
    });
  }, [lineCoords]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#06010F", padding: "100px 40px" }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(circle at 50% 50%, rgba(30,144,255,0.04) 0%, transparent 65%)",
      }} />

      {/* FIX 3 — SVG connecting lines overlay */}
      <svg
        ref={svgRef}
        className="absolute top-0 left-0 pointer-events-none"
        style={{ zIndex: 2, width: "100%", height: "100%" }}
        viewBox={`0 0 ${svgSize.w} ${svgSize.h}`}
        preserveAspectRatio="none"
      >
        {lineCoords.map((lc, i) => (
          <g key={i}>
            <line
              ref={(el) => { lineRefs.current[i] = el; }}
              x1={lc.x1} y1={lc.y1} x2={lc.x2} y2={lc.y2}
              stroke="#1E90FF" strokeWidth="1" opacity="0.2"
              strokeDasharray="0" strokeDashoffset="0"
            />
            <circle
              ref={(el) => { dotRefs.current[i] = el; }}
              cx={lc.x2} cy={lc.y2} r="3"
              fill="#1E90FF" opacity="0.7"
            />
          </g>
        ))}
      </svg>

      {/* FIX 2 — Gradient heading */}
      <div className="relative z-10 text-center mb-16">
        <h2
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(2.625rem, 6vw, 72px)",
            lineHeight: 1.05,
            letterSpacing: "0.02em",
            margin: "0 0 16px",
            background: "linear-gradient(90deg, #1E90FF 0%, #7B2FBE 40%, #C026D3 70%, #FFB800 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          WHILE YOU SLEEP,
          <br />
          YOUR BUSINESS LOSES
        </h2>
        <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "18px", color: "#A0A0B8", margin: 0 }}>
          Every minute without AI is revenue walking out the door
        </p>
      </div>

      {/* 3-col grid */}
      <div
        className="relative z-10 mx-auto grid items-center"
        style={{ maxWidth: "1200px", gridTemplateColumns: "1fr 380px 1fr", gap: "32px" }}
      >
        {/* Left cards */}
        <div ref={leftRef}>
          {LEFT_CARDS.map((c, i) => (
            <PainCard
              key={c.title} {...c}
              cardRef={(el) => { cardEls.current[i] = el; }}
            />
          ))}
        </div>

        {/* FIX 1 + FIX 5 — Wolf center */}
        <div
          ref={wolfRef}
          className="flex items-center justify-center"
          style={{ position: "relative", background: "transparent" }}
        >
          {/* Blue radial glow */}
          <div style={{
            position: "absolute", width: "400px", height: "400px",
            background: "radial-gradient(circle, rgba(30,144,255,0.15) 0%, transparent 70%)",
            top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            pointerEvents: "none",
          }} />

          {/* FIX 1 — isolation wrapper */}
          <div style={{ background: "transparent", isolation: "isolate", position: "relative" }}>
            <img
              ref={wolfImgRef}
              src="/img/wolf-hero.png"
              alt="Vyzma AI Wolf"
              style={{
                width: "100%", maxWidth: "380px", height: "auto",
                mixBlendMode: "lighten",
                filter: "contrast(1.05) brightness(1.05)",
                display: "block",
                position: "relative", zIndex: 1,
              }}
            />

            {/* FIX 5 — Scanline hologram overlay */}
            <div style={{
              position: "absolute", top: 0, left: 0,
              width: "100%", height: "100%",
              pointerEvents: "none", zIndex: 2,
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(30,144,255,0.03) 2px, rgba(30,144,255,0.03) 4px)",
              animation: "scanMove 3s linear infinite",
            }} />
          </div>
        </div>

        {/* Right cards */}
        <div ref={rightRef}>
          {RIGHT_CARDS.map((c, i) => (
            <PainCard
              key={c.title} {...c}
              cardRef={(el) => { cardEls.current[i + 3] = el; }}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div ref={ctaRef} className="relative z-10 text-center mt-16">
        <p style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "20px", color: "#ffffff", marginBottom: "24px" }}>
          Vyzma fixes all 6. Live in 7 days. Starting ₹4,999/month.
        </p>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #1E90FF, #7B2FBE)",
            color: "#ffffff",
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 600, fontSize: "16px",
            letterSpacing: "0.08em", textTransform: "uppercase",
            borderRadius: "8px", padding: "14px 32px",
            textDecoration: "none", transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Fix This Now →
        </a>
      </div>

      {/* Scanline keyframe + mobile */}
      <style>{`
        @keyframes scanMove {
          0%   { background-position: 0 0; }
          100% { background-position: 0 100px; }
        }
        @media (max-width: 768px) {
          .pain-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
