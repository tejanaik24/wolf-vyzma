import { FadeIn } from "@/components/ui/fade-in";

const reasons = [
  {
    emoji: "\uD83D\uDCB0",
    title: "Prices You Can See Before You Call",
    body: "\u20B94,999/month. Right here on the website. No 'contact us for pricing.' No surprise invoices. No 6-month contracts. Pay monthly, cancel anytime.",
  },
  {
    emoji: "\uD83D\uDD27",
    title: "We Do 100% of the Work",
    body: "You don't need a tech team. You don't need to understand AI. You approve \u2014 we build, run, and manage everything for you from day one.",
  },
  {
    emoji: "\uD83C\uDFAF",
    title: "AI + Marketing Under One Roof",
    body: "Most agencies do either AI or marketing. We do both. One team handles your chatbot, Google ads, Instagram reels, and SEO. One invoice. No confusion.",
  },
  {
    emoji: "\uD83D\uDD2E",
    title: "AEO + GEO \u2014 The Future of Search",
    body: "We don't just rank you on Google. We get your business cited in ChatGPT, Perplexity, and Google AI Overviews. Your competitors haven't discovered this yet.",
  },
  {
    emoji: "\uD83C\uDDEE\uD83C\uDDF3",
    title: "We Understand Indian Businesses",
    body: "Diwali campaigns. Regional languages. WhatsApp-first customers. Indian pricing. We're from Bangalore and Vizag \u2014 your customers are our neighbors.",
  },
];

export const WhyVyzma = () => {
  return (
    <section className="bg-[#F2F4F7] rounded-t-[60px] -mt-14 z-10 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="text-[#0C0C0C] font-zentry font-black uppercase text-center text-[clamp(2.5rem,10vw,100px)] leading-[0.9] mb-16 sm:mb-20">
        WHY SMART BUSINESSES<br />CHOOSE VYZMA
      </h2>

      <div className="max-w-3xl mx-auto space-y-10">
        {reasons.map((r, i) => (
          <FadeIn key={r.title} delay={i * 0.1} y={20}>
            <div className="flex gap-5 items-start">
              <span className="text-3xl shrink-0 mt-1">{r.emoji}</span>
              <div>
                <h3 className="text-[#0C0C0C] font-semibold text-lg mb-2">{r.title}</h3>
                <p className="text-[#0C0C0C]/60 text-sm leading-relaxed">{r.body}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
