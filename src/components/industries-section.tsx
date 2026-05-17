import { useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    icon: "\uD83C\uDFE5",
    title: "Clinics & Hospitals",
    problem: "Patients call at 10pm for appointments. Your staff has gone home.",
    solution: "AI answers, books, follows up \u2014 zero missed patients",
  },
  {
    icon: "\uD83C\uDF7D\uFE0F",
    title: "Restaurants & Cafes",
    problem: "WhatsApp orders pile up during peak hours. Staff can't keep up.",
    solution: "AI takes orders, confirms bookings, sends daily specials automatically",
  },
  {
    icon: "\uD83D\uDCAA",
    title: "Gyms & Fitness Studios",
    problem: "67% of gym inquiries come after 6pm when nobody is at the desk.",
    solution: "AI responds instantly, shares plans, books trial sessions 24/7",
  },
  {
    icon: "\uD83D\uDCDA",
    title: "Coaching & EdTech",
    problem: "Students ask about your course at 10pm \u2014 you miss the admission.",
    solution: "AI explains, answers objections, sends payment link automatically",
  },
  {
    icon: "\uD83C\uDFE0",
    title: "Real Estate",
    problem: "Property inquiries come at all hours. You can't follow up on all of them.",
    solution: "AI captures every lead, qualifies them, books site visits automatically",
  },
  {
    icon: "\uD83D\uDECD\uFE0F",
    title: "D2C & E-commerce",
    problem: "Abandoned carts, unanswered product questions, no repeat orders.",
    solution: "AI recovers carts, answers questions, drives repeat purchases 24/7",
  },
  {
    icon: "\uD83C\uDFEA",
    title: "Retail & Local Shops",
    problem: "Your WhatsApp is full of same questions asked 20 times a day.",
    solution: "AI answers every question, takes orders, brings customers back",
  },
  {
    icon: "\uD83D\uDE80",
    title: "Startups",
    problem: "Moving fast but losing leads because your team is too small.",
    solution: "AI handles support, follow-ups and onboarding so team focuses on growth",
  },
];

const HEX_VIEWBOX = "0 0 200 230";
const OUTER_PTS = "100,2 198,52 198,178 100,228 2,178 2,52";
const INNER_PTS = "100,6 194,54 194,176 100,224 6,176 6,54";

const PARTICLE_DIRS = [
  [60, 0], [30, -52], [-30, -52],
  [-60, 0], [-30, 52], [30, 52],
];

export const IndustriesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  const animMap = useRef<Map<number, { tl: gsap.core.Timeline; kill: () => void }>>(new Map());

  const hideAllTooltips = useCallback(() => {
    document.querySelectorAll("[data-industry-tooltip]").forEach((t) => {
      gsap.killTweensOf(t);
      gsap.set(t, { opacity: 0, y: 20, scale: 0.9 });
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    hideAllTooltips();
  }, [hideAllTooltips]);

  const handleMouseLeave = useCallback((index: number) => {
    const entry = animMap.current.get(index);
    if (entry) {
      entry.kill();
      animMap.current.delete(index);
    }
    hideAllTooltips();
  }, [hideAllTooltips]);

  useGSAP(() => {
    const hexes = sectionRef.current?.querySelectorAll("[data-hex]");
    if (hexes?.length) {
      gsap.fromTo(
        hexes,
        { opacity: 0, scale: 0.8, y: 40 },
        {
          opacity: 1, scale: 1, y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, { scope: sectionRef });

  useGSAP(() => {
    const blob = blobRef.current;
    if (!blob) return;
    gsap.to(blob, {
      x: 80, y: -60,
      duration: 8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="industries"
      style={{
        background: "#06010F",
        position: "relative",
        overflow: "hidden",
        padding: "100px 40px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <img
          src="/img/wolf-hero.png"
          alt=""
          style={{ opacity: 0.03, width: "80%", maxWidth: 800, objectFit: "contain" }}
        />
      </div>

      <div
        ref={blobRef}
        style={{
          position: "absolute",
          top: "20%",
          left: "30%",
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(30,144,255,0.04), rgba(123,47,190,0.04), transparent)",
          pointerEvents: "none",
          zIndex: 0,
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(30,144,255,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0, right: 0,
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(123,47,190,0.06) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "clamp(44px, 6vw, 72px)",
              lineHeight: 1.05,
              letterSpacing: "0.02em",
              margin: "0 0 12px",
              background: "linear-gradient(90deg, #1E90FF 0%, #7B2FBE 50%, #FFB800 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            WE KNOW<br />YOUR BUSINESS
          </h2>
          <div
            style={{
              width: 120,
              height: 3,
              margin: "12px auto 40px",
              background: "linear-gradient(90deg, #1E90FF 0%, #7B2FBE 30%, #C026D3 50%, #FF4500 70%, #FFB800 100%)",
              borderRadius: 2,
              boxShadow: "0 0 15px rgba(255,184,0,0.4), 0 0 30px rgba(30,144,255,0.3)",
            }}
          />
          <p
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: 18,
              color: "#A0A0B8",
              margin: 0,
            }}
          >
            When you see your industry below, you'll understand
            <br />
            why 50+ businesses chose Vyzma over bigger agencies.
          </p>
        </div>

        <div
          className="industries-desktop-grid"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}
        >
          <div style={{ display: "flex" }}>
            {industries.slice(0, 4).map((item, i) => (
              <div key={item.title} data-hex="" style={{ opacity: 0, marginLeft: i > 0 ? -20 : 0 }}>
                <IndustryHexagon
                  item={item}
                  index={i}
                  onEnter={() => handleMouseEnter()}
                  onLeave={() => handleMouseLeave(i)}
                />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", marginLeft: 110 }}>
            {industries.slice(4).map((item, i) => {
              const idx = i + 4;
              return (
                <div key={item.title} data-hex="" style={{ opacity: 0, marginLeft: i > 0 ? -20 : 0 }}>
                  <IndustryHexagon
                    item={item}
                    index={idx}
                    onEnter={() => handleMouseEnter()}
                    onLeave={() => handleMouseLeave(idx)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="industries-mobile-grid"
          style={{ display: "none", gridTemplateColumns: "1fr 1fr", gap: 12, padding: "0 16px" }}
        >
          {industries.map((item) => (
            <div
              key={item.title}
              style={{
                position: "relative",
                background: "rgba(255,255,255,0.03)",
                borderRadius: 12,
                padding: "20px 16px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: -1,
                  borderRadius: 13,
                  background: "linear-gradient(135deg, #FF6B35, #C026D3, #7B2FBE, #1E90FF)",
                  zIndex: -1,
                  opacity: 0.5,
                }}
              />
              <span style={{ fontSize: 28, marginBottom: 8, display: "block" }}>
                {item.icon}
              </span>
              <h3
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#ffffff",
                  margin: "0 0 6px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: 13,
                  color: "#A0A0B8",
                  margin: "6px 0",
                  lineHeight: 1.4,
                }}
              >
                {item.problem}
              </p>
              <p
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontSize: 12,
                  color: "#1E90FF",
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`

        @media (max-width: 767px) {
          .industries-desktop-grid { display: none !important; }
          .industries-mobile-grid { display: grid !important; }
        }
      `}</style>
    </section>
  );
};

const IndustryHexagon = ({
  item,
  index,
  onEnter,
  onLeave,
}: {
  item: typeof industries[0];
  index: number;
  onEnter: () => void;
  onLeave: () => void;
}) => {
  const id = `hex-${index}`;

  const borderRef = useRef<SVGPolygonElement>(null);
  const innerRef = useRef<SVGPolygonElement>(null);
  const ripple1Ref = useRef<SVGPolygonElement>(null);
  const ripple2Ref = useRef<SVGPolygonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const pRefs = useRef<(SVGCircleElement | null)[]>(Array(6).fill(null));
  const setPRef = (i: number) => (el: SVGCircleElement | null) => { pRefs.current[i] = el; };

  const runAnim = useCallback(() => {
    const border = borderRef.current;
    const inner = innerRef.current;
    const r1 = ripple1Ref.current;
    const r2 = ripple2Ref.current;
    const tooltip = tooltipRef.current;
    const icon = iconRef.current;
    const particles = pRefs.current;

    if (!border || !inner || !r1 || !r2 || !icon) return;

    gsap.to(border, {
      opacity: 1,
      filter: "drop-shadow(0 0 8px #1E90FF) drop-shadow(0 0 20px #FFB800)",
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(inner, {
      fill: `url(#${id}-glow)`,
      duration: 0.3,
    });

    gsap.to(icon, {
      scale: 1.2,
      filter: "drop-shadow(0 0 12px rgba(30,144,255,0.8))",
      duration: 0.3,
      ease: "back.out(1.5)",
    });

    const ripples = gsap.timeline({ repeat: -1 });
    ripples.fromTo(r1,
      { scale: 1, opacity: 0.6, transformOrigin: "100px 115px" },
      { scale: 1.3, opacity: 0, duration: 0.8, ease: "power2.out" },
      0
    );
    ripples.fromTo(r2,
      { scale: 1, opacity: 0.6, transformOrigin: "100px 115px" },
      { scale: 1.3, opacity: 0, duration: 0.8, ease: "power2.out" },
      0.25
    );

    const particleTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.6 });
    particles.forEach((p, i) => {
      if (!p) return;
      const [dx, dy] = PARTICLE_DIRS[i];
      particleTimeline.fromTo(p,
        { opacity: 0.8, cx: 100, cy: 115 },
        { opacity: 0, cx: 100 + dx, cy: 115 + dy, duration: 0.6, ease: "power2.out" },
        i * 0.05
      );
    });

    if (tooltip) {
      gsap.fromTo(tooltip,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    }
  }, []);

  const killAnim = useCallback(() => {
    const border = borderRef.current;
    const inner = innerRef.current;
    const r1 = ripple1Ref.current;
    const r2 = ripple2Ref.current;
    const icon = iconRef.current;
    const particles = pRefs.current;
    const tooltip = tooltipRef.current;

    if (border) { gsap.killTweensOf(border); gsap.set(border, { opacity: 0.25, filter: "none" }); }
    if (inner) { gsap.killTweensOf(inner); gsap.set(inner, { fill: "#080418" }); }
    if (r1) { gsap.killTweensOf(r1); gsap.set(r1, { scale: 1, opacity: 0 }); }
    if (r2) { gsap.killTweensOf(r2); gsap.set(r2, { scale: 1, opacity: 0 }); }
    if (icon) { gsap.killTweensOf(icon); gsap.set(icon, { scale: 1, filter: "none" }); }
    particles.forEach((p) => { if (p) { gsap.killTweensOf(p); gsap.set(p, { opacity: 0, cx: 100, cy: 115 }); } });
    if (tooltip) { gsap.killTweensOf(tooltip); gsap.set(tooltip, { opacity: 0, y: 20, scale: 0.9 }); }
  }, []);

  const handleEnter = () => {
    killAnim();
    onEnter();
    requestAnimationFrame(() => runAnim());
  };

  const handleLeave = () => {
    killAnim();
    onLeave();
  };

  return (
    <div
      ref={wrapperRef}
      style={{ position: "relative", width: 200, height: 230, cursor: "pointer" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <svg viewBox={HEX_VIEWBOX} width={200} height={230} style={{ display: "block" }}>
        <defs>
          <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E90FF" />
            <stop offset="25%" stopColor="#7B2FBE" />
            <stop offset="45%" stopColor="#C026D3" />
            <stop offset="65%" stopColor="#FF4500" />
            <stop offset="80%" stopColor="#FF8C00" />
            <stop offset="100%" stopColor="#FFB800" />
          </linearGradient>
          <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(30,144,255,0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id={`${id}-shadow`}>
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#1E90FF" floodOpacity="0.5" />
            <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#FFB800" floodOpacity="0.3" />
          </filter>
        </defs>

        <polygon
          ref={ripple1Ref}
          points={OUTER_PTS}
          fill="none"
          stroke="#1E90FF"
          strokeWidth="1"
          opacity="0"
          style={{ transformOrigin: "100px 115px" }}
        />
        <polygon
          ref={ripple2Ref}
          points={OUTER_PTS}
          fill="none"
          stroke="#FFB800"
          strokeWidth="1"
          opacity="0"
          style={{ transformOrigin: "100px 115px" }}
        />

        <polygon
          ref={borderRef}
          points={OUTER_PTS}
          fill="none"
          stroke={`url(#${id}-grad)`}
          strokeWidth="1"
          opacity="0.25"
        />

        <polygon
          ref={innerRef}
          points={INNER_PTS}
          fill="#080418"
        />

        {Array.from({ length: 6 }).map((_, i) => (
          <circle
            key={i}
            ref={setPRef(i)}
            cx="100"
            cy="115"
            r="1.5"
            fill="#1E90FF"
            opacity="0"
          />
        ))}
      </svg>

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          padding: "0 16px",
          zIndex: 2,
        }}
      >
        <span
          ref={iconRef}
          style={{ fontSize: 32, marginBottom: 6, display: "block", lineHeight: 1 }}
        >
          {item.icon}
        </span>
        <p
          style={{
            fontFamily: "'Rajdhani',sans-serif",
            fontWeight: 700,
            fontSize: 13,
            color: "#ffffff",
            textAlign: "center",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {item.title}
        </p>
      </div>

      <div
        ref={tooltipRef}
        data-industry-tooltip=""
        style={{
          position: "absolute",
          bottom: "calc(100% + 12px)",
          left: "50%",
          transform: "translateX(-50%) translateY(20px) scale(0.9)",
          width: 220,
          borderRadius: 16,
          opacity: 0,
          pointerEvents: "none",
          zIndex: 20,
          background: "rgba(6,1,15,0.97)",
          border: "1px solid rgba(30,144,255,0.4)",
          borderTop: "2px solid #1E90FF",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          padding: 20,
        }}
      >
        <p style={{ fontFamily: "'Bebas Neue',cursive", fontSize: 22, color: "#fff", margin: "0 0 8px", lineHeight: 1.1 }}>
          {item.title}
        </p>
        <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 14, color: "#A0A0B8", margin: "0 0 8px", lineHeight: 1.4 }}>
          {item.problem}
        </p>
        <p style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 13, color: "#1E90FF", margin: 0, lineHeight: 1.4 }}>
          {item.solution}
        </p>
      </div>
    </div>
  );
};
