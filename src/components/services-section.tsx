import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export const ServicesSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const sectionRef  = useRef<HTMLElement>(null);
  const wolfRef     = useRef<HTMLDivElement>(null);
  const rowsRef     = useRef<HTMLDivElement>(null);

  /* ── GSAP animations ──────────────────────────────────────── */
  useGSAP(() => {
    const rows = rowsRef.current?.querySelectorAll(".service-row");
    const wolf = wolfRef.current;

    if (rows?.length) {
      gsap.fromTo(rows,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0,
          stagger: 0.08, ease: "power3.out", duration: 0.6,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", toggleActions: "play none none none" },
        }
      );
    }

    if (wolf) {
      gsap.fromTo(wolf,
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 1.2, ease: "power4.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none none" },
        }
      );
      /* Infinite float */
      gsap.to(wolf, { y: -12, duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1 });
    }
  }, { scope: sectionRef });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#06010F", padding: "100px 40px" }}
    >
      {/* Ambient bg glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 70% 50%, rgba(30,144,255,0.05) 0%, transparent 65%)",
      }} />

      {/* ── Heading ── */}
      <div className="relative z-10 text-center mb-16">
        <h2
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(2.75rem, 7vw, 72px)",
            lineHeight: 1,
            letterSpacing: "0.02em",
            margin: "0 0 16px",
            background: "linear-gradient(90deg, #1E90FF 0%, #7B2FBE 50%, #FFB800 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          WHAT THE PACK DELIVERS
        </h2>
        <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "18px", color: "#A0A0B8", margin: 0 }}>
          9 weapons. One pack. Zero excuses.
        </p>
      </div>

      {/* ── 2-col layout ── */}
      <div
        className="relative z-10 mx-auto flex gap-10 items-start"
        style={{ maxWidth: "1200px" }}
      >
        {/* ── LEFT: service rows (55%) ── */}
        <div ref={rowsRef} style={{ flex: "0 0 55%" }}>
          {SERVICES.map((service, index) => {
            const isHovered = hovered === index;
            return (
              <a
                key={service.number}
                href="#contact"
                className="service-row block"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  padding: isHovered ? "20px 20px 20px 20px" : "20px 0",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: isHovered ? "3px solid #1E90FF" : "3px solid transparent",
                  background: isHovered ? "rgba(30,144,255,0.04)" : "transparent",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  position: "relative",
                }}
              >
                {/* Number */}
                <span style={{
                  fontFamily: "'Bebas Neue', cursive",
                  fontSize: "48px",
                  lineHeight: 1,
                  color: isHovered ? "#1E90FF" : "rgba(255,255,255,0.07)",
                  transition: "color 0.3s",
                  minWidth: "64px",
                  flexShrink: 0,
                }}>
                  {service.number}
                </span>

                {/* Text block */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    {/* Title — gradient on hover */}
                    <h3
                      style={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontWeight: 700,
                        fontSize: "22px",
                        margin: 0,
                        ...(isHovered
                          ? {
                              background: "linear-gradient(90deg, #FFFFFF 0%, #1E90FF 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }
                          : { color: "rgba(255,255,255,0.6)" }),
                        transition: "color 0.3s",
                      }}
                    >
                      {service.name}
                    </h3>

                    {/* Arrow */}
                    <ArrowUpRight
                      size={18}
                      style={{
                        color: "#1E90FF",
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? "translate(0,0)" : "translate(-6px, 6px)",
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  {/* Description — expands on hover */}
                  <div style={{
                    maxHeight: isHovered ? "60px" : "0",
                    opacity: isHovered ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.3s ease, opacity 0.3s ease",
                  }}>
                    <p style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontSize: "15px",
                      color: "#A0A0B8",
                      margin: 0,
                      lineHeight: "1.5",
                    }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
          {/* Bottom border on last row */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
        </div>

        {/* ── RIGHT: Wolf sticky (45%) ── */}
        <div
          style={{ flex: "0 0 45%", position: "sticky", top: "10vh", alignSelf: "flex-start" }}
        >
          <div
            ref={wolfRef}
            style={{ position: "relative", display: "flex", justifyContent: "center", background: "transparent" }}
          >
            {/* Blue/purple radial glow behind wolf */}
            <div style={{
              position: "absolute",
              width: "500px", height: "600px",
              background: "radial-gradient(ellipse, rgba(30,144,255,0.2) 0%, rgba(123,47,190,0.1) 40%, transparent 70%)",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none", zIndex: 0,
            }} />

            {/* Wolf image */}
            <div style={{ background: "transparent", isolation: "isolate", position: "relative", zIndex: 1 }}>
              <img
                src="/img/wolf-hero.png"
                alt="Vyzma Service Wolf"
                style={{
                  width: "100%",
                  maxWidth: "420px",
                  height: "auto",
                  mixBlendMode: "screen",
                  filter: "brightness(1.1) contrast(1.05)",
                  display: "block",
                }}
              />
            </div>

            {/* ── Floating service preview — near wolf's top-right hand area ── */}
            <div
              style={{
                position: "absolute",
                top: "8%",
                right: "-10%",
                width: "240px",
                height: "160px",
                borderRadius: "12px",
                border: "1px solid rgba(30,144,255,0.5)",
                boxShadow: "0 0 40px rgba(30,144,255,0.3)",
                overflow: "hidden",
                opacity: hovered !== null ? 1 : 0,
                transform: hovered !== null ? "scale(1) translateY(0)" : "scale(0.9) translateY(8px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
                zIndex: 10,
                pointerEvents: "none",
              }}
            >
              {SERVICES.map((service, index) => (
                <img
                  key={service.number}
                  src={service.image}
                  alt={service.name}
                  style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    opacity: hovered === index ? 1 : 0,
                    transform: hovered === index ? "scale(1)" : "scale(1.08)",
                    filter: hovered === index ? "none" : "blur(8px)",
                    transition: "opacity 0.4s ease, transform 0.4s ease, filter 0.4s ease",
                  }}
                />
              ))}
              {/* Gradient overlay on preview */}
              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "linear-gradient(135deg, rgba(30,144,255,0.25), rgba(123,47,190,0.25))",
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 768px) {
          .services-layout { flex-direction: column !important; }
          .services-wolf-col { position: static !important; order: -1; }
          .services-wolf-col img { max-width: 320px !important; margin: 0 auto 32px; display: block; }
          .services-preview { display: none !important; }
        }
      `}</style>
    </section>
  );
};
