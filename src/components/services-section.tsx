import { FadeIn } from "@/components/ui/fade-in";
import { SERVICES } from "@/constants";

export const ServicesSection = () => {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={20}>
            <div className="flex gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.15)] last:border-b-0">
              <span className="text-[#0C0C0C] font-black leading-none text-[clamp(3rem,10vw,140px)] shrink-0">
                {service.number}
              </span>
              <div className="flex flex-col justify-center">
                <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                  {service.name}
                </h3>
                <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
