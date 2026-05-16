import { FadeIn } from "@/components/ui/fade-in";

const offices = [
  {
    emoji: "\uD83C\uDFD9\uFE0F",
    city: "Bangalore",
    sub: "Innovation Hub",
    address: "Sarjapur Road, Bangalore",
    tags: ["AI R&D", "Engineering", "Strategy"],
  },
  {
    emoji: "\uD83C\uDF0A",
    city: "Visakhapatnam",
    sub: "Growth Hub",
    address: "MVP Colony, Vizag",
    tags: ["Client Success", "Local Partnerships"],
  },
];

export const Offices = () => {
  return (
    <section className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20">
      <h2 className="font-zentry font-black uppercase text-center text-[clamp(2rem,8vw,80px)] leading-[0.9] hero-gradient mb-12">
        Two Offices.<br />All of India.
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {offices.map((office, i) => (
          <FadeIn key={office.city} delay={i * 0.15} y={30}>
            <div className="bg-[#14151A] border border-white/10 rounded-2xl p-8">
              <span className="text-3xl mb-3 block">{office.emoji}</span>
              <h3 className="text-white font-semibold text-xl">{office.city}</h3>
              <p className="text-[#3DA3FF] text-sm font-medium mb-3">{office.sub}</p>
              <p className="text-white/50 text-sm mb-4">{office.address}</p>
              <div className="flex flex-wrap gap-2">
                {office.tags.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-wider text-white/40 border border-white/10 rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
