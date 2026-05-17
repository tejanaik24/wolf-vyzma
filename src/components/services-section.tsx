import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export const ServicesSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const sectionRef    = useRef<HTMLElement>(null);
  const videoRef      = useRef<HTMLVideoElement>(null);
  const rowsRef       = useRef<HTMLDivElement>(null);
  const previewRef    = useRef<HTMLDivElement>(null);
  const previewImgRef = useRef<HTMLImageElement>(null);
  const isVisible     = useRef(false);

  /* ── Preview card show / hide / crossfade ── */
  useEffect(() => {
    const preview = previewRef.current;
    const img     = previewImgRef.current;
    if (!preview || !img) return;

    if (hovered !== null) {
      if (isVisible.current) {
        gsap.to(img, {
          opacity: 0, duration: 0.1, ease: "power2.in",
          onComplete: () => {
            img.src = SERVICES[hovered].image;
            gsap.to(img, { opacity: 1, duration: 0.1, ease: "power2.out" });
          },
        });
      } else {
        img.src = SERVICES[hovered].image;
        gsap.set(img, { opacity: 1 });
        isVisible.current = true;
        gsap.fromTo(preview,
          { opacity: 0, scale: 0.6, y: 30, filter: "blur(10px)" },
          { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 0.45, ease: "back.out(1.7)" }
        );
      }
    } else {
      isVisible.current = false;
      gsap.to(preview, {
        opacity: 0, scale: 0.8, filter: "blur(6px)",
        duration: 0.25, ease: "power2.in",
      });
    }
  }, [hovered]);

  /* ── Scroll animations ── */
  useGSAP(() => {
    const rows = rowsRef.current?.querySelectorAll(".svc-row");
    if (rows?.length) {
      gsap.fromTo(rows,
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0,
          stagger: 0.07, ease: "power3.out", duration: 0.55,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
        }
      );
    }
    if (videoRef.current) {
      gsap.fromTo(videoRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: 1.2, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ position: "relative", width: "100%", background: "#06010F", overflow: "hidden" }}
    >
      {/* ── Heading band — clean dark, no video behind ── */}
      <div style={{ textAlign: "center", padding: "60px 40px 32px", position: "relative", zIndex: 10 }}>
        <h2 style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(2.5rem, 6vw, 64px)",
          lineHeight: 1, letterSpacing: "0.02em",
          margin: "0 0 14px",
          background: "linear-gradient(90deg, #1E90FF 0%, #7B2FBE 50%, #FFB800 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        }}>
          WHAT THE PACK DELIVERS
        </h2>
        <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "18px", color: "#A0A0B8", margin: 0 }}>
          9 weapons. One pack. Zero excuses.
        </p>
      </div>

      {/* ── Video + service cards overlay ── */}
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>

        {/* Full-screen wolf video */}
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

        {/* Dark overlay on left so cards are readable */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(6,1,15,0.82) 0%, rgba(6,1,15,0.55) 38%, transparent 60%)",
          pointerEvents: "none", zIndex: 1,
        }} />

        {/* ── 9 Service cards — left side (red box area) ── */}
        <div
          ref={rowsRef}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "42%",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "16px 40px 16px",
          }}
        >
          {SERVICES.map((service, index) => {
            const isHovered = hovered === index;
            return (
              <a
                key={service.number}
                href="#contact"
                className="svc-row"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: isHovered ? "10px 12px" : "10px 0",
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  borderLeft: isHovered ? "3px solid #1E90FF" : "3px solid transparent",
                  background: isHovered ? "rgba(6,1,15,0.6)" : "transparent",
                  backdropFilter: isHovered ? "blur(8px)" : "none",
                  WebkitBackdropFilter: isHovered ? "blur(8px)" : "none",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
              >
                <span style={{
                  fontFamily: "'Bebas Neue', cursive", fontSize: "36px", lineHeight: 1,
                  color: isHovered ? "#1E90FF" : "rgba(255,255,255,0.35)",
                  transition: "color 0.3s", minWidth: "48px", flexShrink: 0,
                }}>
                  {service.number}
                </span>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <h3 style={{
                      fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "22px", margin: 0,
                      ...(isHovered
                        ? { background: "linear-gradient(90deg,#FFFFFF,#1E90FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }
                        : { color: "rgba(255,255,255,0.8)" }),
                    }}>
                      {service.name}
                    </h3>
                    <ArrowUpRight size={16} style={{
                      color: "#1E90FF",
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "translate(0,0)" : "translate(-4px,4px)",
                      transition: "opacity 0.3s, transform 0.3s",
                      flexShrink: 0,
                    }} />
                  </div>
                  <div style={{ maxHeight: isHovered ? "50px" : "0", opacity: isHovered ? 1 : 0, overflow: "hidden", transition: "max-height 0.3s, opacity 0.3s" }}>
                    <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "13px", color: "#A0A0B8", margin: "3px 0 0", lineHeight: 1.4 }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }} />
        </div>

        {/* ── Hover preview card — at wolf's hand / green box area ── */}
        <div
          ref={previewRef}
          style={{
            position: "absolute",
            left: "42%",
            top: "12%",
            width: "210px",
            height: "145px",
            zIndex: 10,
            pointerEvents: "none",
            opacity: 0,
          }}
        >
          <div style={{
            position: "relative", width: "100%", height: "100%",
            borderRadius: "12px",
            border: "1px solid rgba(30,144,255,0.65)",
            boxShadow: "0 0 28px rgba(30,144,255,0.55), 0 0 60px rgba(30,144,255,0.2), 0 16px 40px rgba(0,0,0,0.6)",
            overflow: "hidden",
          }}>
            <img
              ref={previewImgRef}
              src={SERVICES[0].image}
              alt="Service preview"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, rgba(30,144,255,0.2), rgba(123,47,190,0.2))",
              pointerEvents: "none",
            }} />
          </div>
          <div style={{
            width: "70px", height: "7px",
            background: "radial-gradient(ellipse, rgba(30,144,255,0.85) 0%, transparent 70%)",
            borderRadius: "50%", margin: "7px auto 0",
            animation: "svcPulse 1.5s ease infinite",
          }} />
        </div>

      </div>

      <style>{`
        @keyframes svcPulse {
          0%,100% { transform: scaleX(1);   opacity: 0.85; }
          50%      { transform: scaleX(1.5); opacity: 0.25; }
        }
      `}</style>
    </section>
  );
};
