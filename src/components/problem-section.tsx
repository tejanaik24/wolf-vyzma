import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { IoTimeOutline, IoCashOutline, IoFlashOutline } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: IoTimeOutline,
    title: "Missed Calls = Lost Revenue",
    body: "of customer inquiries happen outside business hours. Without AI, every missed call is a customer who went to your competitor instead.",
    stat: 67,
    statSuffix: "%",
    color: "#1E90FF",
  },
  {
    icon: IoCashOutline,
    title: "Enterprise AI Was Too Expensive",
    body: "Big agencies charge ₹50,000–₹1,50,000/month. So most small businesses did nothing — and fell behind competitors who could afford to move faster.",
    stat: null,
    statSuffix: "",
    color: "#7B2FBE",
  },
  {
    icon: IoFlashOutline,
    title: "We Fixed Both Problems",
    body: "Vyzma brings enterprise-level AI to every Indian business. Starting ₹4,999/month. Live in 7 days. No technical knowledge needed.",
    stat: null,
    statSuffix: "",
    color: "#FFB800",
  },
];

// Armor plate SVG — angular geometric lines
const ArmorTexture = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    style={{ pointerEvents: "none", zIndex: 0 }}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern id="armor" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
        <line x1="0"  y1="60" x2="60" y2="0"  stroke="rgba(30,144,255,0.05)" strokeWidth="1"/>
        <line x1="0"  y1="30" x2="30" y2="0"  stroke="rgba(30,144,255,0.04)" strokeWidth="0.8"/>
        <line x1="30" y1="60" x2="60" y2="30" stroke="rgba(30,144,255,0.04)" strokeWidth="0.8"/>
        <line x1="0"  y1="0"  x2="20" y2="60" stroke="rgba(30,144,255,0.03)" strokeWidth="0.6"/>
        <line x1="20" y1="0"  x2="60" y2="50" stroke="rgba(30,144,255,0.03)" strokeWidth="0.6"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#armor)" />
  </svg>
);

const ProblemCard = ({
  icon: Icon, title, body, stat, statSuffix, color, index,
}: typeof problems[0] & { index: number }) => {
  const cardRef   = useRef<HTMLDivElement>(null);
  const statRef   = useRef<HTMLSpanElement>(null);
  const countObj  = useRef({ val: 0 });

  useGSAP(() => {
    const card = cardRef.current;
    if (!card) return;

    // Card entrance
    gsap.fromTo(card,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.7, ease: "power3.out",
        delay: index * 0.15,
        scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
      }
    );

    // Count-up for stat numbers
    if (stat !== null && statRef.current) {
      gsap.to(countObj.current, {
        val: stat,
        duration: 1.5,
        ease: "power2.out",
        snap: { val: 1 },
        scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
        onUpdate: () => {
          if (statRef.current) statRef.current.textContent = Math.round(countObj.current.val) + statSuffix;
        },
      });
    }

    // Hover lift
    const onEnter = () => gsap.to(card, { y: -6, duration: 0.25, ease: "power2.out",
      boxShadow: `0 -6px 35px rgba(30,144,255,0.55), 0 20px 40px rgba(0,0,0,0.5)` });
    const onLeave = () => gsap.to(card, { y: 0,  duration: 0.25, ease: "power2.out",
      boxShadow: `0 -6px 25px rgba(30,144,255,0.35), 0 10px 20px rgba(0,0,0,0.3)` });

    card.addEventListener("mouseenter", onEnter);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mouseenter", onEnter);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, { scope: cardRef });

  return (
    <div
      ref={cardRef}
      className="relative rounded-2xl p-8 h-full overflow-hidden"
      style={{
        background: "var(--card-bg, rgba(255,255,255,0.03))",
        backgroundColor: "#0e0b1a",
        borderTop: "2px solid #1E90FF",
        border: "1px solid var(--card-border, rgba(30,144,255,0.15))",
        borderTopWidth: "2px",
        borderTopColor: "#1E90FF",
        boxShadow: "0 -6px 25px rgba(30,144,255,0.35), 0 10px 20px rgba(0,0,0,0.3)",
      }}
    >
      <ArmorTexture />

      <div className="relative z-10">
        <Icon className="text-3xl mb-5" style={{ color }} />

        {stat !== null && (
          <div className="mb-3">
            <span
              ref={statRef}
              className="text-5xl font-black"
              style={{ color, fontFamily: "'Bebas Neue', cursive" }}
            >
              0{statSuffix}
            </span>
          </div>
        )}

        <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
        <p className="text-white/55 text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
};

export const ProblemSection = () => {
  const sectionRef  = useRef<HTMLElement>(null);
  const headingRef  = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const words = headingRef.current?.querySelectorAll(".word-span");
    if (!words?.length) return;

    gsap.fromTo(words,
      { opacity: 0, y: 40, skewX: 5 },
      {
        opacity: 1, y: 0, skewX: 0,
        duration: 0.7, ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: headingRef.current, start: "top 75%", toggleActions: "play none none none" },
      }
    );
  }, { scope: sectionRef });

  const headingText = "YOUR COMPETITORS ARE GETTING AI LEADS WHILE YOU SLEEP";
  const words = headingText.split(" ");

  // Group words into lines
  const lines = [
    words.slice(0, 3),   // YOUR COMPETITORS ARE
    words.slice(3, 6),   // GETTING AI LEADS
    words.slice(6),      // WHILE YOU SLEEP
  ];

  return (
    <section
      ref={sectionRef}
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 overflow-hidden"
      style={{ background: "#06010F" }}
    >
      {/* Corner glows */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(circle at 0% 100%, rgba(30,144,255,0.08) 0%, transparent 60%)"
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(circle at 100% 0%, rgba(123,47,190,0.08) 0%, transparent 60%)"
      }} />

      <h2
        ref={headingRef}
        className="font-zentry font-black uppercase text-center text-[clamp(2.5rem,10vw,120px)] leading-[0.9] hero-gradient mb-16 sm:mb-20"
      >
        {lines.map((line, li) => (
          <span key={li} className="block">
            {line.map((word, wi) => (
              <span key={wi} className="word-span inline-block mr-[0.25em]">{word}</span>
            ))}
          </span>
        ))}
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <ProblemCard key={p.title} {...p} index={i} />
        ))}
      </div>
    </section>
  );
};
