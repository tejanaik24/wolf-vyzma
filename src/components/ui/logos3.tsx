import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
}

const Logos3 = ({
  heading = "Platforms we automate for you",
  logos = [
    { id: "logo-1",  description: "ChatGPT",    image: "https://cdn.simpleicons.org/openai/ffffff",     className: "h-7 w-auto" },
    { id: "logo-2",  description: "Vercel",      image: "https://cdn.simpleicons.org/vercel/ffffff",     className: "h-6 w-auto" },
    { id: "logo-3",  description: "Slack",       image: "https://cdn.simpleicons.org/slack/ffffff",      className: "h-7 w-auto" },
    { id: "logo-4",  description: "WhatsApp",    image: "https://cdn.simpleicons.org/whatsapp/ffffff",   className: "h-7 w-auto" },
    { id: "logo-5",  description: "Instagram",   image: "https://cdn.simpleicons.org/instagram/ffffff",  className: "h-7 w-auto" },
    { id: "logo-6",  description: "n8n",         image: "https://cdn.simpleicons.org/n8n/ffffff",        className: "h-7 w-auto" },
    { id: "logo-7",  description: "Make",        image: "https://cdn.simpleicons.org/make/ffffff",       className: "h-7 w-auto" },
    { id: "logo-8",  description: "Zapier",      image: "https://cdn.simpleicons.org/zapier/ffffff",     className: "h-6 w-auto" },
    { id: "logo-9",  description: "Notion",      image: "https://cdn.simpleicons.org/notion/ffffff",     className: "h-7 w-auto" },
    { id: "logo-10", description: "HubSpot",     image: "https://cdn.simpleicons.org/hubspot/ffffff",    className: "h-7 w-auto" },
    { id: "logo-11", description: "Anthropic",   image: "https://cdn.simpleicons.org/anthropic/ffffff",  className: "h-7 w-auto" },
    { id: "logo-12", description: "Perplexity",  image: "https://cdn.simpleicons.org/perplexity/ffffff", className: "h-7 w-auto" },
  ],
}: Logos3Props) => {
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
            {logos.map((logo) => (
              <CarouselItem key={logo.id} className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                <div className="mx-8 flex shrink-0 items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img src={logo.image} alt={logo.description} className={logo.className} />
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
