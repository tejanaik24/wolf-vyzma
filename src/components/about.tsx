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
          Welcome to Vyzma AI
        </p>

        <AnimatedTitle containerClass="mt-5 !text-white text-center">
          {
            "The future of intell<b>i</b>gence <br /> is h<b>e</b>re"
          }
        </AnimatedTitle>

        <div className="about-subtext">
          <p>We build AI-powered workflows, automate your growth, and rank where it counts</p>
          <p>India's premier AI agency — built in Vizag &amp; Bangalore, competing globally</p>
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
