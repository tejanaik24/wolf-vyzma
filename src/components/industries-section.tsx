import { FadeIn } from "@/components/ui/fade-in";

const industries = [
  {
    emoji: "\uD83C\uDFE5",
    name: "Clinics & Hospitals",
    pain: "Patients call at 10pm for appointments. Your staff has gone home.",
    result: "AI answers, books, and follows up — zero missed patients",
  },
  {
    emoji: "\uD83C\uDF7D\uFE0F",
    name: "Restaurants & Cafes",
    pain: "WhatsApp orders pile up during peak hours. Staff can't keep up.",
    result: "AI takes orders, confirms bookings, sends daily specials automatically",
  },
  {
    emoji: "\uD83D\uDCAA",
    name: "Gyms & Fitness Studios",
    pain: "67% of gym inquiries come after 6pm when nobody is at the desk.",
    result: "AI responds instantly, shares plans, books trial sessions 24/7",
  },
  {
    emoji: "\uD83D\uDCDA",
    name: "Coaching Institutes & EdTech",
    pain: "Students ask about your course at 10pm — you miss the admission.",
    result: "AI explains, answers objections, sends payment link automatically",
  },
  {
    emoji: "\uD83C\uDFE0",
    name: "Real Estate",
    pain: "Property inquiries come at all hours. You can't follow up on all of them.",
    result: "AI captures every lead, qualifies them, books site visits automatically",
  },
  {
    emoji: "\uD83D\uDECD\uFE0F",
    name: "D2C & E-commerce",
    pain: "Abandoned carts, unanswered product questions, no repeat orders.",
    result: "AI recovers carts, answers questions, drives repeat purchases 24/7",
  },
  {
    emoji: "\uD83C\uDFEA",
    name: "Retail & Local Shops",
    pain: "Your WhatsApp is full of the same questions asked 20 times a day.",
    result: "AI answers every question, takes orders, brings customers back",
  },
];

export const IndustriesSection = () => {
  return (
    <section id="industries" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="font-zentry font-black uppercase text-center text-[clamp(2.5rem,10vw,120px)] leading-[0.9] hero-gradient mb-4">
        WE KNOW<br />YOUR BUSINESS
      </h2>
      <p className="text-white/60 text-center text-sm mb-16 max-w-xl mx-auto">
        When you see your industry below, you'll understand
        why 50+ businesses chose Vyzma over bigger agencies.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {industries.map((ind, i) => (
          <FadeIn key={ind.name} delay={i * 0.1} y={30}>
            <div className="bg-[#14151A] border border-white/10 rounded-2xl p-6 hover:border-[#3DA3FF] transition-colors duration-300 h-full">
              <span className="text-3xl mb-3 block">{ind.emoji}</span>
              <h3 className="text-white font-semibold text-lg mb-2">{ind.name}</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">{ind.pain}</p>
              <p className="text-[#3DA3FF] text-xs font-medium">{ind.result}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
