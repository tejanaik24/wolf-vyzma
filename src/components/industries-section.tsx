import { useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    icon: "🏥",
    title: "Clinics",
    problem: "Patients call at 10pm for appointments. Your staff has gone home.",
    solution: "AI answers, books, follows up — zero missed patients",
    left: "10%", top: "5%",
  },
  {
    icon: "📚",
    title: "EdTech",
    problem: "Students ask about your course at 10pm — you miss the admission.",
    solution: "AI explains, answers objections, sends payment link automatically",
    left: "73%", top: "5%",
  },
  {
    icon: "🍽️",
    title: "Restaurants",
    problem: "WhatsApp orders pile up during peak hours. Staff can't keep up.",
    solution: "AI takes orders, confirms bookings, sends daily specials automatically",
    left: "19%", top: "21%",
  },
  {
    icon: "🏠",
    title: "Real Estate",
    problem: "Property inquiries come at all hours. You can't follow up on all of them.",
    solution: "AI captures every lead, qualifies them, books site visits automatically",
    left: "65%", top: "21%",
  },
  {
    icon: "💪",
    title: "Gyms",
    problem: "67% of gym inquiries come after 6pm when nobody is at the desk.",
    solution: "AI responds instantly, shares plans, books trial sessions 24/7",
    left: "1%", top: "38%",
  },
  {
    icon: "🛍️",
    title: "E-commerce",
    problem: "Abandoned carts, unanswered product questions, no repeat orders.",
    solution: "AI recovers carts, answers questions, drives repeat purchases 24/7",
    left: "84%", top: "38%",
  },
  {
    icon: "🏪",
    title: "Retail",
    problem: "Your WhatsApp is full of same questions asked 20 times a day.",
    solution: "AI answers every question, takes orders, brings customers back",
    left: "13%", top: "66%",
  },
  {
    icon: "🚀",
    title: "Startups",
    problem: "Moving fast but losing leads because your team is too small.",
    solution: "AI handles support, follow-ups and onboarding so team focuses on growth",
    left: "69%", top: "66%",
  },
];

const HEX_W = 120;
const HEX_H = 138;
const VB    = "0 0 120 138";
const OUTER = "60,1 119,31 119,107 60,137 1,107 1,31";
const INNER = "60,5 115,33 115,105 60,133 5,105 5,33";

const PARTICLE_DIRS = [
  [50, 0], [25, -43], [-25, -43],
  [-50, 0], [-25, 43], [25, 43],
];

type Industry = typeof industries[0];

const IndustryHex = ({ item, index }: { item: Industry; index: number }) => {
  const id        = `ihex-${index}`;
  const borderRef = useRef<SVGPolygonElement>(null);
  const innerRef  = useRef<SVGPolygonElement>(null);
  const r1Ref     = useRef<SVGPolygonElement>(null);
  const r2Ref     = useRef<SVGPolygonElement>(null);
  const tooltipRef= useRef<HTMLDivElement>(null);
  const iconRef   = useRef<HTMLSpanElement>(null);
  const pRefs     = useRef<(SVGCircleElement | null)[]>(Array(6).fill(null));
  const setPRef   = (i: number) => (el: SVGCircleElement | null) => { pRefs.current[i] = el; };

  const killAll = useCallback(() => {
    [borderRef, innerRef, r1Ref, r2Ref, iconRef].forEach(r => {
      if (r.current) gsap.killTweensOf(r.current);
    });
    pRefs.current.forEach(p => { if (p) gsap.killTweensOf(p); });
    if (tooltipRef.current) gsap.killTweensOf(tooltipRef.current);

    if (borderRef.current)  gsap.set(borderRef.current,  { opacity: 1,    filter: "none" });
    if (innerRef.current)   gsap.set(innerRef.current,   { fillOpacity: 0 });
    if (r1Ref.current)      gsap.set(r1Ref.current,      { scale: 1, opacity: 0, transformOrigin: "60px 69px" });
    if (r2Ref.current)      gsap.set(r2Ref.current,      { scale: 1, opacity: 0, transformOrigin: "60px 69px" });
    if (iconRef.current)    gsap.set(iconRef.current,    { scale: 1, filter: "none" });
    pRefs.current.forEach(p => { if (p) gsap.set(p, { opacity: 0, cx: 60, cy: 69 }); });
    if (tooltipRef.current) gsap.set(tooltipRef.current, { opacity: 0, y: 15, scale: 0.9 });
  }, []);

  const runEnter = useCallback(() => {
    // Electric border glow
    gsap.to(borderRef.current, {
      filter: "drop-shadow(0 0 12px #1E90FF) drop-shadow(0 0 25px #1E90FF)",
      duration: 0.3, ease: "power2.out",
    });

    // Inner fill pulse
    gsap.to(innerRef.current, { fillOpacity: 0.18, duration: 0.3 });

    // Icon glow + scale
    gsap.to(iconRef.current, {
      scale: 1.25,
      filter: "drop-shadow(0 0 10px rgba(30,144,255,0.9))",
      duration: 0.3, ease: "back.out(1.5)",
    });

    // Ripple rings
    const ripple = gsap.timeline({ repeat: -1 });
    ripple.fromTo(r1Ref.current,
      { scale: 1, opacity: 0.8, transformOrigin: "60px 69px" },
      { scale: 1.6, opacity: 0, duration: 0.9, ease: "power2.out" }, 0
    );
    ripple.fromTo(r2Ref.current,
      { scale: 1, opacity: 0.8, transformOrigin: "60px 69px" },
      { scale: 1.6, opacity: 0, duration: 0.9, ease: "power2.out" }, 0.22
    );

    // Particle burst
    const ptl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    pRefs.current.forEach((p, i) => {
      if (!p) return;
      const [dx, dy] = PARTICLE_DIRS[i];
      ptl.fromTo(p,
        { opacity: 0.9, cx: 60, cy: 69 },
        { opacity: 0, cx: 60 + dx, cy: 69 + dy, duration: 0.6, ease: "power2.out" },
        i * 0.05
      );
    });

    // Tooltip
    gsap.fromTo(tooltipRef.current,
      { opacity: 0, y: 15, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "back.out(1.5)" }
    );
  }, []);

  const handleEnter = () => { killAll(); requestAnimationFrame(runEnter); };
  const handleLeave = () => {
    killAll();
    gsap.to(tooltipRef.current, { opacity: 0, y: 10, duration: 0.2 });
  };

  return (
    <div
      style={{
        position: "absolute",
        left: item.left,
        top: item.top,
        width: HEX_W,
        height: HEX_H,
        cursor: "pointer",
        zIndex: 3,
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* SVG hexagon */}
      <svg viewBox={VB} width={HEX_W} height={HEX_H} style={{ display: "block", overflow: "visible" }}>
        <defs>
          <linearGradient id={`${id}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#1E90FF" />
            <stop offset="40%"  stopColor="#7B2FBE" />
            <stop offset="70%"  stopColor="#FF4500" />
            <stop offset="100%" stopColor="#FFB800" />
          </linearGradient>
        </defs>

        {/* Ripple rings — expand on hover */}
        <polygon ref={r1Ref} points={OUTER} fill="none" stroke="#1E90FF" strokeWidth="1" opacity="0" />
        <polygon ref={r2Ref} points={OUTER} fill="none" stroke="#FFB800" strokeWidth="1" opacity="0" />

        {/* Main border — full opacity, gradient */}
        <polygon
          ref={borderRef}
          points={OUTER}
          fill="none"
          stroke={`url(#${id}-grad)`}
          strokeWidth="1.5"
          opacity="1"
        />

        {/* Inner fill — transparent default, blue tint on hover */}
        <polygon ref={innerRef} points={INNER} fill="#1E90FF" fillOpacity="0" />

        {/* Particles */}
        {Array.from({ length: 6 }).map((_, i) => (
          <circle key={i} ref={setPRef(i)} cx="60" cy="69" r="1.5" fill="#1E90FF" opacity="0" />
        ))}
      </svg>

      {/* Icon + label — always visible inside hexagon */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 2,
      }}>
        <span ref={iconRef} style={{ fontSize: 28, lineHeight: 1, display: "block" }}>
          {item.icon}
        </span>
        <p style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: 700,
          fontSize: 11,
          color: "#ffffff",
          textAlign: "center",
          margin: "5px 0 0",
          lineHeight: 1.2,
          textShadow: "0 0 8px rgba(30,144,255,0.8)",
        }}>
          {item.title}
        </p>
      </div>

      {/* Tooltip — appears above on hover */}
      <div
        ref={tooltipRef}
        style={{
          position: "absolute",
          bottom: "calc(100% + 10px)",
          left: "50%",
          transform: "translateX(-50%)",
          width: 200,
          background: "rgba(6,1,15,0.96)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(30,144,255,0.4)",
          borderTop: "2px solid #1E90FF",
          borderRadius: 12,
          padding: "16px 20px",
          zIndex: 10,
          opacity: 0,
          pointerEvents: "none",
          whiteSpace: "normal",
        }}
      >
        <div style={{ fontSize: 22, marginBottom: 6 }}>{item.icon}</div>
        <p style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 17, color: "#fff", margin: "0 0 6px", lineHeight: 1.2 }}>
          {item.title}
        </p>
        <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 13, color: "#A0A0B8", margin: "6px 0", lineHeight: 1.4 }}>
          {item.problem}
        </p>
        <p style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 12, color: "#1E90FF", margin: 0, lineHeight: 1.4 }}>
          {item.solution}
        </p>
      </div>
    </div>
  );
};

export const IndustriesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (bgRef.current) {
      gsap.fromTo(bgRef.current,
        { scale: 1.05 },
        {
          scale: 1, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="industries"
      style={{ background: "#06010F", padding: "100px 40px 0", overflow: "hidden" }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 60, position: "relative", zIndex: 2 }}>
        <h2 style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(44px, 6vw, 72px)",
          lineHeight: 1.05, letterSpacing: "0.02em", margin: "0 0 12px",
          background: "linear-gradient(90deg, #1E90FF 0%, #7B2FBE 50%, #FFB800 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        }}>
          WE KNOW<br />YOUR BUSINESS
        </h2>
        <div style={{
          width: 120, height: 3, margin: "12px auto 24px",
          background: "linear-gradient(90deg, #1E90FF, #7B2FBE, #FFB800)",
          borderRadius: 2,
          boxShadow: "0 0 15px rgba(255,184,0,0.4), 0 0 30px rgba(30,144,255,0.3)",
        }} />
        <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 18, color: "#A0A0B8", margin: 0 }}>
          When you see your industry below, you'll understand<br />
          why 50+ businesses chose Vyzma over bigger agencies.
        </p>
      </div>

      {/* Desktop: wolf bg + interactive hexagons */}
      <div className="industries-desktop" style={{ position: "relative", width: "100%" }}>
        <div
          ref={bgRef}
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%", /* 16:9 ratio to match image */
            backgroundImage: "url('/img/industries-wolf.png')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />

        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.2)",
          pointerEvents: "none",
        }} />

        {/* 8 interactive hexagons — % positioned over circuit line endpoints */}
        {industries.map((item, i) => (
          <IndustryHex key={item.title} item={item} index={i} />
        ))}
      </div>

      {/* Mobile: card grid */}
      <div
        className="industries-mobile"
        style={{ display: "none", gridTemplateColumns: "1fr 1fr", gap: 12, padding: "0 0 60px" }}
      >
        {industries.map((item) => (
          <div key={item.title} style={{
            position: "relative", background: "rgba(255,255,255,0.03)",
            borderRadius: 12, padding: "20px 16px", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: -1, borderRadius: 13,
              background: "linear-gradient(135deg, #FF6B35, #C026D3, #7B2FBE, #1E90FF)",
              zIndex: -1, opacity: 0.5,
            }} />
            <span style={{ fontSize: 28, marginBottom: 8, display: "block" }}>{item.icon}</span>
            <h3 style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: 16, color: "#fff", margin: "0 0 6px" }}>
              {item.title}
            </h3>
            <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 13, color: "#A0A0B8", margin: "6px 0", lineHeight: 1.4 }}>
              {item.problem}
            </p>
            <p style={{ fontFamily: "'Rajdhani',sans-serif", fontSize: 12, color: "#1E90FF", margin: 0, lineHeight: 1.4 }}>
              {item.solution}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .industries-desktop { display: none !important; }
          .industries-mobile  { display: grid !important; }
        }
      `}</style>
    </section>
  );
};
