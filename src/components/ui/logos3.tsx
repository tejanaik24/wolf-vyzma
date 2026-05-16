import AutoScroll from "embla-carousel-auto-scroll";
import {
  SiOpenai, SiVercel, SiSlack, SiWhatsapp, SiInstagram,
  SiZapier, SiNotion, SiHubspot, SiMake, SiAnthropic,
  SiPerplexity, SiYoutube, SiTelegram, SiGooglegemini,
} from "react-icons/si";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const LOGOS = [
  { id: "1",  Icon: SiOpenai,       label: "ChatGPT" },
  { id: "2",  Icon: SiAnthropic,    label: "Claude" },
  { id: "3",  Icon: SiGooglegemini, label: "Gemini" },
  { id: "4",  Icon: SiPerplexity,   label: "Perplexity" },
  { id: "5",  Icon: SiWhatsapp,     label: "WhatsApp" },
  { id: "6",  Icon: SiInstagram,    label: "Instagram" },
  { id: "7",  Icon: SiYoutube,      label: "YouTube" },
  { id: "8",  Icon: SiTelegram,     label: "Telegram" },
  { id: "9",  Icon: SiSlack,        label: "Slack" },
  { id: "10", Icon: SiZapier,       label: "Zapier" },
  { id: "11", Icon: SiMake,         label: "Make" },
  { id: "12", Icon: SiNotion,       label: "Notion" },
  { id: "13", Icon: SiHubspot,      label: "HubSpot" },
  { id: "14", Icon: SiVercel,       label: "Vercel" },
];

interface Logos3Props {
  heading?: string;
}

const Logos3 = ({ heading = "Platforms we automate for you" }: Logos3Props) => {
  return (
    <section className="py-16 bg-black border-t border-white/[0.06]">
      <div className="flex flex-col items-center text-center mb-10 px-6">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/35 mb-3">Integrations</p>
        <h2 className="font-zentry text-2xl font-bold brand-gradient-text lg:text-3xl">
          {heading}
        </h2>
      </div>
      <div className="relative mx-auto flex items-center justify-center max-w-5xl">
        <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true, speed: 1.5 })]}>
          <CarouselContent className="ml-0">
            {LOGOS.map(({ id, Icon, label }) => (
              <CarouselItem key={id} className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                <div className="mx-8 flex shrink-0 flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <Icon className="text-white text-3xl" />
                  <span className="text-white/60 text-[10px] uppercase tracking-widest">{label}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export { Logos3 };
