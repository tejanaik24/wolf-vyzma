import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Free Strategy Call (Day 1)",
    body: "Tell us about your business. We ask questions, understand your problems, and tell you exactly what we'll build. No technical talk. No pressure. Just honest advice in 30 minutes.",
    color: "#3DA3FF",
  },
  {
    num: "02",
    title: "We Build Everything (Days 2\u20136)",
    body: "Our team builds your chatbot, sets up your ads, or designs your website. You don't touch any technology. You approve the messages and design. We handle 100%.",
    color: "#8A5CFF",
  },
  {
    num: "03",
    title: "You Go Live and Grow (Day 7+)",
    body: "Everything goes live. Leads start coming in. We send you a simple monthly report \u2014 what worked, what improved, what's coming next. No jargon. Just results.",
    color: "#FFB547",
  },
];

export const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".how-step",
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative">
      <h2 className="font-zentry font-black uppercase text-center text-[clamp(2.5rem,8vw,80px)] leading-[0.9] hero-gradient mb-2">
        LIVE IN 7 DAYS
      </h2>
      <p className="text-white/60 text-center text-sm mb-20">
        Here's Exactly How It Works
      </p>

      <div className="max-w-4xl mx-auto relative">
        <div className="hidden md:block absolute top-16 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px bg-white/10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((step) => (
            <div key={step.num} className="how-step text-center md:text-left">
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

      <div className="flex justify-center mt-16">
        <a
          href="#contact"
          className="bg-[#3DA3FF] text-white rounded-full px-8 py-3 font-medium text-sm uppercase tracking-wider hover:bg-[#3DA3FF]/90 transition"
        >
          Book Your Free Call \u2192
        </a>
      </div>
    </section>
  );
};
