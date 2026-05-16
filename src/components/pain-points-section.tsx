import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  PhoneMissed,
  Bot,
  Inbox,
  UserX,
  Trophy,
  RefreshCw,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── Card data ─────────────────────────────────────────────── */
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
    icon: Inbox,
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
    icon: Trophy,
    title: "Competitors Look More Professional",
    body: "That clinic with instant WhatsApp replies, auto-booking, and AI follow-ups? They're eating your customers. Right now.",
  },
  {
    icon: RefreshCw,
    title: "Same Problems Every Month",
    body: "Every month review has the same issues: missed leads, slow response, manual reports. AI removes all three permanently.",
  },
];

/* ── Single card ────────────────────────────────────────────── */
const PainCard = ({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ElementType;
  title: string;
  body: string;
}) => (
  <div
    className="pain-card relative overflow-hidden"
    style={{
      width: "100%",
      marginBottom: "16px",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(30,144,255,0.15)",
      borderRadius: "12px",
      padding: "24px",
    }}
  >
    {/* inner corner shimmer */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 0% 0%, rgba(30,144,255,0.05) 0%, transparent 60%)",
      }}
    />
    <div className="relative z-10">
      <Icon
        size={28}
        style={{ color: "#1E90FF", marginBottom: "12px" }}
      />
      <h3
        style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontWeight: 700,
          fontSize: "18px",
          color: "#ffffff",
          marginBottom: "8px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: "14px",
          color: "#A0A0B8",
          lineHeight: "1.65",
          margin: 0,
        }}
      >
        {body}
      </p>
    </div>
  </div>
);

/* ── Main section ───────────────────────────────────────────── */
export const PainPointsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const wolfRef    = useRef<HTMLDivElement>(null);
  const leftRef    = useRef<HTMLDivElement>(null);
  const rightRef   = useRef<HTMLDivElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wolf       = wolfRef.current;
      const leftCards  = leftRef.current?.querySelectorAll(".pain-card");
      const rightCards = rightRef.current?.querySelectorAll(".pain-card");

      if (!wolf) return;

      /* Wolf entrance — scale + opacity */
      gsap.fromTo(
        wolf,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wolf,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      /* Wolf infinite float */
      gsap.to(wolf, {
        y: -15,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      /* Left cards — slide from left, after wolf */
      if (leftCards?.length) {
        gsap.fromTo(
          leftCards,
          { opacity: 0, x: -80 },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.15,
            delay: 0.3,
            scrollTrigger: {
              trigger: leftRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      /* Right cards — slide from right, after wolf */
      if (rightCards?.length) {
        gsap.fromTo(
          rightCards,
          { opacity: 0, x: 80 },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            ease: "power3.out",
            stagger: 0.15,
            delay: 0.3,
            scrollTrigger: {
              trigger: rightRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      /* CTA fade up */
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#06010F", padding: "100px 40px" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(30,144,255,0.04) 0%, transparent 65%)",
        }}
      />

      {/* ── Section heading ── */}
      <div className="relative z-10 text-center mb-16">
        <h2
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(2.5rem, 6vw, 64px)",
            color: "#ffffff",
            lineHeight: 1.05,
            letterSpacing: "0.02em",
            margin: "0 0 16px",
          }}
        >
          WHILE YOU SLEEP,
          <br />
          YOUR BUSINESS LOSES
        </h2>
        <p
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "18px",
            color: "#A0A0B8",
            margin: 0,
          }}
        >
          Every minute without AI is revenue walking out the door
        </p>
      </div>

      {/* ── 3-column grid ── */}
      <div
        className="relative z-10 mx-auto grid items-center"
        style={{
          maxWidth: "1200px",
          gridTemplateColumns: "1fr 380px 1fr",
          gap: "32px",
        }}
      >
        {/* Left cards */}
        <div ref={leftRef}>
          {LEFT_CARDS.map((c) => (
            <PainCard key={c.title} {...c} />
          ))}
        </div>

        {/* Wolf center */}
        <div
          ref={wolfRef}
          className="flex items-center justify-center"
          style={{ position: "relative" }}
        >
          {/* Blue glow behind wolf */}
          <div
            style={{
              position: "absolute",
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(circle, rgba(30,144,255,0.15) 0%, transparent 70%)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
            }}
          />
          <img
            src="/img/wolf-hero.png"
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
          {RIGHT_CARDS.map((c) => (
            <PainCard key={c.title} {...c} />
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div ref={ctaRef} className="relative z-10 text-center mt-16">
        <p
          style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: "20px",
            color: "#ffffff",
            marginBottom: "24px",
          }}
        >
          Vyzma fixes all 6. Live in 7 days. Starting ₹4,999/month.
        </p>
        <a
          href="#contact"
          style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #1E90FF, #7B2FBE)",
            color: "#ffffff",
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            borderRadius: "8px",
            padding: "14px 32px",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Fix This Now →
        </a>
      </div>

      {/* ── Mobile overrides ── */}
      <style>{`
        @media (max-width: 768px) {
          .pain-grid {
            grid-template-columns: 1fr !important;
          }
          .pain-wolf-img {
            max-width: 300px !important;
            margin: 0 auto 32px;
            display: block;
          }
        }
      `}</style>
    </section>
  );
};
