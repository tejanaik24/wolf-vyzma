import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import { Button } from "./button";
import { VIDEO_LINKS } from "@/constants";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const [currentIndex] = useState(1);
  const [hasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const nextVideoRef = useRef<HTMLVideoElement>(null);

  const totalVideos = 4;

  const VIDEO_KEYS = ["hero1", "hero2", "hero3", "hero4"] as const;
  const getVideoSrc = (i: number) => {
    const key = VIDEO_KEYS[i - 1]; // Subtract 1 because the array is 0-indexed, but the video indices are 1-based
    return VIDEO_LINKS[key];
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prevVideos) => prevVideos + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 2) setIsLoading(false);
  }, [loadedVideos]);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            void nextVideoRef.current?.play();
          },
        });

        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <section id="hero" className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-100 h-dvh w-screen overflow-hidden bg-[#0A0A0D]">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="bg-blue-75 relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
      >
        <div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="special-font hero-heading text-white absolute right-5 bottom-5 z-40">
          V<b>y</b>zma
        </h1>

        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              A<b>I</b>
            </h1>

            <p className="font-robert-regular mb-5 max-w-64 text-blue-100">
              Intelligence. Automation. Growth. —<br />
              Built for businesses that refuse to stay still.
            </p>

            <Button
              id="watch-trailer"
              leftIcon={TiLocationArrow}
              containerClass="bg-[#3DA3FF] text-white flex-center gap-1"
            >
              Start Your AI Journey
            </Button>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute right-5 bottom-5 brand-gradient-text">
        V<b>y</b>zma
      </h1>
    </section>
  );
};
