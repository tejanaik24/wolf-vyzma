import { useState, useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export const ServicesSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [rowsHeight, setRowsHeight] = useState(0);

  const sectionRef    = useRef<HTMLElement>(null);
  const wolfRef       = useRef<HTMLDivElement>(null);
  const rowsRef       = useRef<HTMLDivElement>(null);
  const previewRef    = useRef<HTMLDivElement>(null);
  const previewImgRef = useRef<HTMLImageElement>(null);
  const isVisible     = useRef(false);

  useLayoutEffect(() => {
    const measure = () => {
      if (rowsRef.current) setRowsHeight(rowsRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* ── Preview show / hide / crossfade ─────────────────────────── */
  useEffect(() => {
    const preview = previewRef.current;
    const img     = previewImgRef.current;
    if (!preview || !img) return;

    if (hovered !== null) {
      if (isVisible.current) {
        /* Already showing — just crossfade image */
        gsap.to(img, {
          opacity: 0, duration: 0.1, ease: "power2.in",
          onComplete: () => {
            img.src = SERVICES[hovered].image;
            gsap.to(img, { opacity: 1, duration: 0.1, ease: "power2.out" });
          },
        });
      } else {
        /* First hover — set image then animate in */
        img.src = SERVICES[hovered].image;
        gsap.set(img, { opacity: 1 });
        isVisible.current = true;
        gsap.fromTo(preview,
          { opacity: 0, scale: 0.6, y: 40, filter: "blur(10px)" },
          { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 0.5, ease: "back.out(1.7)" }
        );
      }
    } else {
      isVisible.current = false;
      gsap.to(preview, {
        opacity: 0, scale: 0.7, y: 20, filter: "blur(8px)",
        duration: 0.3, ease: "power2.in",
      });
    }
  }, [hovered]);

  /* ── Scroll animations ────────────────────────────────────────── */
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
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0,
          duration: 1.2, ease: "power4.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%", toggleActions: "play none none none" },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "#06010F", padding: "60px 40px" }}
    >
      {/* Ambient bg glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 70% 50%, rgba(30,144,255,0.05) 0%, transparent 65%)",
      }} />

      {/* ── Heading ── */}
      <div className="relative z-10 text-center mb-8">
        <h2 style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(2rem, 5vw, 52px)",
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

      {/* ── 2-col layout ── */}
      <div className="relative z-10 mx-auto flex gap-10 items-start" style={{ maxWidth: "1200px" }}>

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
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: isHovered ? "10px 12px" : "10px 0",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  borderLeft: isHovered ? "3px solid #1E90FF" : "3px solid transparent",
                  background: isHovered ? "rgba(30,144,255,0.04)" : "transparent",
                  transition: "all 0.3s ease",
                  textDecoration: "none", position: "relative",
                }}
              >
                <span style={{
                  fontFamily: "'Bebas Neue', cursive", fontSize: "32px", lineHeight: 1,
                  color: isHovered ? "#1E90FF" : "rgba(255,255,255,0.07)",
                  transition: "color 0.3s", minWidth: "44px", flexShrink: 0,
                }}>
                  {service.number}
                </span>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <h3 style={{
                      fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "17px", margin: 0,
                      ...(isHovered
                        ? { background: "linear-gradient(90deg, #FFFFFF 0%, #1E90FF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }
                        : { color: "rgba(255,255,255,0.6)" }),
                      transition: "color 0.3s",
                    }}>
                      {service.name}
                    </h3>
                    <ArrowUpRight size={18} style={{
                      color: "#1E90FF",
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered ? "translate(0,0)" : "translate(-6px, 6px)",
                      transition: "opacity 0.3s ease, transform 0.3s ease",
                      flexShrink: 0,
                    }} />
                  </div>

                  <div style={{ maxHeight: isHovered ? "60px" : "0", opacity: isHovered ? 1 : 0, overflow: "hidden", transition: "max-height 0.3s ease, opacity 0.3s ease" }}>
                    <p style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "15px", color: "#A0A0B8", margin: 0, lineHeight: "1.5" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
        </div>

        {/* ── RIGHT: Wolf (45%) ── */}
        <div style={{ flex: "0 0 45%", alignSelf: "flex-start" }}>
          <div
            ref={wolfRef}
            style={{
              width: "100%",
              height: rowsHeight || "auto",
              position: "relative",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              background: "transparent",
            }}
          >
            {/* Wolf image */}
            <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
              <img
                src="/img/service-wolf.png"
                alt="Vyzma Service Wolf"
                style={{
                  width: "100%", height: "100%",
                  objectFit: "contain", objectPosition: "center top",
                  mixBlendMode: "screen",
                  filter: "brightness(1.3) contrast(1.1) saturate(1.2)",
                  display: "block",
                }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(ellipse at 50% 40%, rgba(30,144,255,0.12) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "200px",
                background: "linear-gradient(to top, #06010F 0%, transparent 100%)",
                pointerEvents: "none",
              }} />
            </div>

            {/* ── SVG connecting line: hand → preview ── */}
            <svg
              style={{
                position: "absolute", top: 0, left: 0,
                width: "100%", height: "100%",
                pointerEvents: "none", zIndex: 5, overflow: "visible",
              }}
              preserveAspectRatio="none"
            >
              <line
                x1="62%" y1="38%"
                x2="52%" y2="22%"
                stroke="#1E90FF"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity={hovered !== null ? 0.4 : 0}
                className="svc-marching-ants"
                style={{ transition: "opacity 0.3s ease" }}
              />
            </svg>

            {/* ── Floating preview card ── */}
            <div
              ref={previewRef}
              style={{
                position: "absolute",
                right: "28%",
                top: "8%",
                width: "220px",
                height: "150px",
                zIndex: 10,
                pointerEvents: "none",
                opacity: 0,
              }}
            >
              {/* Card */}
              <div style={{
                position: "relative",
                width: "100%", height: "100%",
                borderRadius: "12px",
                border: "1px solid rgba(30,144,255,0.6)",
                boxShadow: "0 0 30px rgba(30,144,255,0.5), 0 0 60px rgba(30,144,255,0.2), 0 20px 40px rgba(0,0,0,0.5)",
                overflow: "hidden",
              }}>
                <img
                  ref={previewImgRef}
                  src={SERVICES[0].image}
                  alt="Service preview"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                {/* Colour overlay */}
                <div style={{
                  position: "absolute", inset: 0, pointerEvents: "none",
                  background: "linear-gradient(135deg, rgba(30,144,255,0.2), rgba(123,47,190,0.2))",
                }} />
              </div>

              {/* Energy pulse */}
              <div style={{
                width: "80px", height: "8px",
                background: "radial-gradient(ellipse, rgba(30,144,255,0.8) 0%, transparent 70%)",
                borderRadius: "50%",
                margin: "8px auto 0",
                animation: "svcEnergyPulse 1.5s ease infinite",
              }} />
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes svcEnergyPulse {
          0%, 100% { transform: scaleX(1);   opacity: 0.8; }
          50%       { transform: scaleX(1.5); opacity: 0.25; }
        }
        @keyframes svcMarchingAnts {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -16; }
        }
        .svc-marching-ants {
          animation: svcMarchingAnts 0.5s linear infinite;
        }
        @media (max-width: 768px) {
          .services-wolf-col { display: none; }
        }
      `}</style>
    </section>
  );
};
