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
    { id: "logo-1", description: "OpenAI", image: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", className: "h-8 w-auto brightness-0 invert" },
    { id: "logo-2", description: "Google", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", className: "h-7 w-auto brightness-0 invert" },
    { id: "logo-3", description: "Meta", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", className: "h-7 w-auto brightness-0 invert" },
    { id: "logo-4", description: "WhatsApp", image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", className: "h-8 w-auto brightness-0 invert" },
    { id: "logo-5", description: "Instagram", image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", className: "h-8 w-auto brightness-0 invert" },
    { id: "logo-6", description: "LinkedIn", image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png", className: "h-8 w-auto brightness-0 invert" },
    { id: "logo-7", description: "YouTube", image: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg", className: "h-6 w-auto brightness-0 invert" },
    { id: "logo-8", description: "Notion", image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png", className: "h-8 w-auto brightness-0 invert" },
    { id: "logo-9", description: "Slack", image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg", className: "h-7 w-auto brightness-0 invert" },
    { id: "logo-10", description: "Zapier", image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zapier_logo.svg", className: "h-6 w-auto brightness-0 invert" },
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
