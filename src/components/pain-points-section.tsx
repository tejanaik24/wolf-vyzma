import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  PhoneMissed, Bot, InboxIcon,
  UserX, Briefcase, RefreshCw,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const LEFT_CARDS = [
  {
    icon: PhoneMissed,
    title: "Calls Go Unanswered",
    body: "Customers call after hours, on weekends, during lunch. No answer means no sale — they call your competitor next.",
  },
  {
    icon: Bot,
    title: "Your Team Does Robot Work",
    body: "Your staff spends hours answering the same questions, copy-pasting data, sending follow-ups. That's AI's job, not theirs.",
  },
  {
    icon: InboxIcon,
    title: "Leads Die In Your Inbox",
    body: "A lead who doesn't hear back in 5 minutes is 80% less likely to convert. Your inbox is a graveyard of lost revenue.",
  },
];

const RIGHT_CARDS = [
  {
    icon: UserX,
    title: "Paying Staff For Nothing Smart",
    body: "You're paying human salaries for tasks a ₹4,999/month AI handles better, faster, 24 hours a day — without sick days.",
  },
  {
    icon: Briefcase,
    title: "Competitors Look More Professional",
    body: "That clinic with instant WhatsApp replies, auto-booking, and AI follow-ups? They're eating your patients. Right now.",
  },
  {
    icon: RefreshCw,
    title: "Same Problems Every Month",
    body: "Every month review has the same issues: missed leads, slow response, manual reports. AI removes all three permanently.",
  },
];

interface PainCardProps {
  icon: React.ElementType;
  title: string;
  body: string;
}

const PainCard = ({ icon: Icon, title, body }: PainCardProps) => (
  <div
    className="pain-card rounded-xl p-6 relative overflow-hidden"
    style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(30,144,255,0.15)",
      marginBottom: "16px",
    }}
  >
    {/* subtle inner corner glow */}
    <div
      className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
      style={{ background: "radial-gradient(circle at 0% 0%, rgba(30,144,255,0.06) 0%, transparent 70%)" }}
    />
    <div className="relative z-10">
      <Icon size={28} className="mb-3" style={{ color: "#1E90FF" }} />
      <h3
        className="text-white font-bold mb-2"
        style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "18px" }}
      >
        {title}
      </h3>
      <p
        style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "14px", color: "#A0A0B8", lineHeight: "1.6" }}
      >
        {body}
      </p>
    </div>
  </div>
);

export const PainPointsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wolfRef    = useRef<HTMLDivElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const wolf      = wolfRef.current;
    const leftCards  = leftRef.current?.querySelectorAll(".pain-card");
    const rightCards = rightRef.current?.querySelectorAll(".pain-card");
    const cta        = ctaRef.current;
    if (!wolf) return;

    // Wolf entrance first
    gsap.fromTo(wolf,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1, scale: 1,
        duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: wolf, start: "top 80%", toggleActions: "play none none none" },
      }
    );

    // Wolf float loop
    gsap.to(wolf, {
      y: -15,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Left cards slide in after wolf
    if (leftCards?.length) {
      gsap.fromTo(leftCards,
        { opacity: 0, x: -80 },
        {
          opacity: 1, x: 0,
          duration: 0.65, ease: "power3.out",
          stagger: 0.15,
          delay: 0.3,
          scrollTrigger: { trigger: leftRef.current, start: "top 80%", toggleActions: "play none none none" },
        }
      );
    }

    // Right cards slide in after wolf
    if (rightCards?.length) {
      gsap.fromTo(rightCards,
        { opacity: 0, x: 80 },
        {
          opacity: 1, x: 0,
          duration: 0.65, ease: "power3.out",
          stagger: 0.15,
          delay: 0.3,
          scrollTrigger: { trigger: rightRef.current, start: "top 80%", toggleActions: "play none none none" },
        }
      );
    }

    // CTA fade up
    if (cta) {
      gsap.fromTo(cta,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: cta, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#06010F", padding: "100px 40px" }}
    >
      {/* Background corner glows */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(circle at 50% 50%, rgba(30,144,255,0.04) 0%, transparent 65%)"
      }} />

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2
          className="text-white mb-4"
          style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "clamp(2.5rem, 6vw, 64px)", lineHeight: 1.05, letterSpacing: "0.02em" }}
        >
          WHILE YOU SLEEP,<br />YOUR BUSINESS LOSES
        </h2>
        <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "18px", color: "#A0A0B8" }}>
          Every minute without AI is revenue walking out the door
        </p>
      </div>

      {/* 3-col grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_380px_1fr] gap-8 items-center">

        {/* Left cards */}
        <div ref={leftRef}>
          {LEFT_CARDS.map((c) => <PainCard key={c.title} {...c} />)}
        </div>

        {/* Wolf center */}
        <div ref={wolfRef} className="flex items-center justify-center relative">
          {/* Blue radial glow behind wolf */}
          <div
            className="absolute"
            style={{
              width: "400px", height: "400px",
              background: "radial-gradient(circle, rgba(30,144,255,0.15) 0%, transparent 70%)",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
          <img
            src="/img/wolf-ai-automation.png"
            alt="Vyzma AI Wolf"
            style={{
              width: "100%",
              maxWidth: "380px",
              height: "auto",
              mixBlendMode: "lighten",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>

        {/* Right cards */}
        <div ref={rightRef}>
          {RIGHT_CARDS.map((c) => <PainCard key={c.title} {...c} />)}
        </div>
      </div>

      {/* Bottom CTA */}
      <div ref={ctaRef} className="text-center mt-16 relative z-10">
        <p
          className="text-white font-bold mb-6"
          style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "20px" }}
        >
          Vyzma fixes all 6. Live in 7 days. Starting ₹4,999/month.
        </p>
        <a
          href="#contact"
          className="inline-block text-white font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
          style={{
            background: "linear-gradient(90deg, #1E90FF, #7B2FBE)",
            borderRadius: "8px",
            padding: "14px 32px",
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "16px",
            letterSpacing: "0.08em",
          }}
        >
          Fix This Now →
        </a>
      </div>
    </section>
  );
};
