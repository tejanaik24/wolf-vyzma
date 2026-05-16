import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { AnimatedTitle } from "./animated-title";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mt-36 mb-8 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Why Vyzma
        </p>

        <AnimatedTitle containerClass="mt-5 !text-white text-center">
          {
            "Built For India.<br />P<b>o</b>wered By <b>A</b>I."
          }
        </AnimatedTitle>

        <div className="about-subtext">
          <p>Most AI agencies charge ₹50,000/month and take 3 months to deliver.</p>
          <p>We built Vyzma for the restaurant owner in Vizag, the gym in Bangalore,</p>
          <p>the clinic in Hyderabad — businesses that deserve enterprise AI at</p>
          <p>prices that make sense. Starting ₹4,999/month. Live in 7 days.</p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <video
            src="/videos/wolf-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
