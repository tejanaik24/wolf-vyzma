import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

const faqs = [
  {
    q: "How much does an AI chatbot cost in India?",
    a: "Most agencies charge \u20B915,000 to \u20B950,000 per month. At Vyzma, a complete AI chatbot with WhatsApp integration and monthly management starts at \u20B94,999/month \u2014 with full setup included. No setup fee. No hidden charges.",
  },
  {
    q: "How long does setup take?",
    a: "7 days for most setups. We have done some in 3 days when clients needed it urgently. We do not believe in AI projects that drag on for months.",
  },
  {
    q: "Do I need any technical knowledge?",
    a: "None. Zero. You approve what the chatbot says \u2014 we build everything else. If anything goes wrong, you call us. Not a chatbot.",
  },
  {
    q: "What is AEO and why does my business need it?",
    a: "AEO means getting your business cited as an answer in ChatGPT, Perplexity, and Google AI. By 2026, 40% of searches happen on AI tools. We include AEO in every plan because your competitors have not discovered it yet.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts. No cancellation fees. If we are not delivering results, you should not pay. That is our honest policy.",
  },
  {
    q: "Do you work with businesses outside Bangalore and Vizag?",
    a: "Yes \u2014 we serve businesses all across India. Everything is delivered remotely in 7 days regardless of your city.",
  },
  {
    q: "What makes Vyzma different from other digital marketing agencies?",
    a: "Three things \u2014 transparent pricing shown on the website, AI-first services not old-school SEO, and we combine AI tools with marketing under one affordable plan. Most agencies offer one or the other. We do both.",
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="font-zentry font-black uppercase text-center text-[clamp(2rem,8vw,80px)] leading-[0.9] hero-gradient mb-16">
        QUESTIONS YOU'RE<br />PROBABLY THINKING<br />RIGHT NOW
      </h2>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left text-white font-medium text-sm md:text-base hover:bg-white/5 transition"
              >
                <span>{faq.q}</span>
                <LuChevronDown className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="px-5 pb-5 text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
