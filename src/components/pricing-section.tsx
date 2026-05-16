import { FadeIn } from "@/components/ui/fade-in";
import { LuCheck } from "react-icons/lu";

const plans = [
  {
    name: "STARTER AI PACK",
    price: "₹4,999",
    bestFor: "Local businesses, clinics, shops, restaurants",
    color: "#3DA3FF",
    borderColor: "border-[#3DA3FF]/30",
    btnClass: "bg-[#3DA3FF] text-white",
    features: [
      "AI Chatbot for website or WhatsApp",
      "Website Design",
      "SEO + AEO + GEO Setup",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    name: "GROWTH PACK",
    price: "₹9,999",
    bestFor: "Businesses ready to get more customers",
    color: "#8A5CFF",
    borderColor: "border-[#8A5CFF]",
    btnClass: "bg-[#8A5CFF] text-white",
    badge: "Most Popular",
    features: [
      "Everything in Starter, plus:",
      "Meta Ads (Facebook + Instagram)",
      "Google Performance Marketing",
      "AI Voice Agent",
      "AI Social Media Content",
      "Bi-weekly strategy call",
      "Priority WhatsApp support",
    ],
  },
  {
    name: "FULL AI PACK",
    price: "₹19,999",
    bestFor: "Complete AI transformation",
    color: "#FFB547",
    borderColor: "border-[#FFB547]/30",
    btnClass: "bg-[#FFB547] text-[#0C0C0C]",
    features: [
      "Everything in Growth, plus:",
      "AI Film Making (4 reels/month)",
      "Workflow Automation",
      "Full Digital Marketing Management",
      "Weekly strategy calls",
      "Custom AI solutions",
      "Dedicated account manager",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="bg-[#F2F4F7] rounded-t-[60px] -mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(2.5rem,10vw,100px)] leading-[0.9] mb-4">
        Simple Plans.<br />Honest Prices.<br />No Surprises.
      </h2>
      <p className="text-[#0C0C0C]/60 text-center text-sm sm:text-base mb-16 max-w-xl mx-auto">
        Pick your plan. We handle everything else.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan, i) => (
          <FadeIn key={plan.name} delay={i * 0.15} y={30}>
            <div className={`relative bg-white rounded-2xl p-8 border-2 ${plan.borderColor} ${i === 1 ? 'md:-mt-4' : ''}`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8A5CFF] text-white text-[10px] uppercase tracking-widest font-medium px-4 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-[#0C0C0C] font-semibold text-lg uppercase">{plan.name}</h3>
              <p className="text-[#0C0C0C]/50 text-xs mt-1 mb-4">{plan.bestFor}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-[#0C0C0C]">{plan.price}</span>
                <span className="text-[#0C0C0C]/50 text-sm">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#0C0C0C]/70">
                    <LuCheck className="mt-0.5 shrink-0" style={{ color: plan.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full rounded-full px-6 py-3 font-medium text-sm uppercase tracking-wider ${plan.btnClass}`}>
                {i === 0 ? "Get Started" : i === 1 ? "Scale My Business" : "Transform My Business"}
              </button>
            </div>
          </FadeIn>
        ))}
      </div>

      <p className="text-center text-[#0C0C0C]/50 text-sm mt-12">
        Not sure which plan?{" "}
        <a href="#contact" className="text-[#3DA3FF] font-medium hover:underline">
          Book a free call
        </a>{" "}
        — we'll honestly tell you which one fits. No pressure.
      </p>
    </section>
  );
};
