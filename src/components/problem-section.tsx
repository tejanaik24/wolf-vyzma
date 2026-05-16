import { FadeIn } from "@/components/ui/fade-in";
import { IoTimeOutline, IoCashOutline, IoFlashOutline } from "react-icons/io5";

const problems = [
  {
    icon: IoTimeOutline,
    title: "Missed Calls = Lost Revenue",
    body: "67% of customer inquiries happen outside business hours. Without AI, every missed call is a customer who went to your competitor instead.",
    color: "#3DA3FF",
  },
  {
    icon: IoCashOutline,
    title: "Enterprise AI Was Too Expensive",
    body: "Big agencies charge ₹50,000–₹1,50,000/month. So most small businesses did nothing — and fell behind competitors who could afford to move faster.",
    color: "#8A5CFF",
  },
  {
    icon: IoFlashOutline,
    title: "We Fixed Both Problems",
    body: "Vyzma brings enterprise-level AI to every Indian business. Starting ₹4,999/month. Live in 7 days. No technical knowledge needed.",
    color: "#FFB547",
  },
];

export const ProblemSection = () => {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="font-zentry font-black uppercase text-center text-[clamp(2.5rem,10vw,120px)] leading-[0.9] hero-gradient mb-16 sm:mb-20">
        YOUR COMPETITORS ARE<br />GETTING AI LEADS<br />WHILE YOU SLEEP
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {problems.map((p, i) => {
          const Icon = p.icon;
          return (
            <FadeIn key={p.title} delay={i * 0.2} y={40}>
              <div className="bg-[#14151A] border border-white/10 rounded-2xl p-8 h-full">
                <Icon className="text-3xl mb-4" style={{ color: p.color }} />
                <h3 className="text-white font-medium text-lg mb-3">{p.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{p.body}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
};
