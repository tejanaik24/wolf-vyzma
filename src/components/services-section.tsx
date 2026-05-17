import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    if (videoRef.current) {
      gsap.fromTo(videoRef.current,
        { opacity: 0, scale: 1.05 },
        {
          opacity: 1, scale: 1,
          duration: 1.4, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ background: "#06010F", width: "100%", overflow: "hidden" }}
    >
      {/* ── Heading — sits in its own dark band, no video behind it ── */}
      <div style={{ textAlign: "center", padding: "60px 40px 40px" }}>
        <h2 style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(2.5rem, 6vw, 64px)",
          lineHeight: 1, letterSpacing: "0.02em",
          margin: "0 0 16px",
          background: "linear-gradient(90deg, #1E90FF 0%, #7B2FBE 50%, #FFB800 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        }}>
          WHAT THE PACK DELIVERS
        </h2>
        <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "18px", color: "#A0A0B8", margin: 0 }}>
          9 weapons. One pack. Zero excuses.
        </p>
      </div>

      {/* ── Full-width wolf video below the heading ── */}
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            opacity: 0,
          }}
        >
          <source src="/img/service-wolf.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};
