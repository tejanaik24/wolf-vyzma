import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/constants";

export const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.12),
        y: lerp(prev.y, mousePosition.y, 0.12),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // rect offset so the fixed preview aligns with the container
  const containerRect = containerRef.current?.getBoundingClientRect();

  return (
    <section
      id="services"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      {/* Floating image preview — fixed so it's never clipped */}
      <div
        className="pointer-events-none fixed z-[999] overflow-hidden rounded-2xl shadow-2xl"
        style={{
          left: containerRect?.left ?? 0,
          top: containerRect?.top ?? 0,
          width: 260,
          height: 170,
          transform: `translate3d(${smoothPosition.x + 24}px, ${smoothPosition.y - 120}px, 0) scale(${isVisible ? 1 : 0.85})`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {SERVICES.map((service, index) => (
          <img
            key={service.number}
            src={service.image}
            alt={service.name}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity: hoveredIndex === index ? 1 : 0,
              transform: hoveredIndex === index ? "scale(1)" : "scale(1.08)",
              filter: hoveredIndex === index ? "none" : "blur(8px)",
              transition: "opacity 0.4s ease, transform 0.4s ease, filter 0.4s ease",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Headline */}
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
        Services
      </h2>

      {/* Service rows */}
      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, index) => (
          <a
            key={service.number}
            href="#contact"
            className="group block"
            onMouseEnter={() => { setHoveredIndex(index); setIsVisible(true); }}
            onMouseLeave={() => { setHoveredIndex(null); setIsVisible(false); }}
          >
            <div className="relative flex gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12 border-b border-[rgba(12,12,12,0.12)] last:border-b-0">

              {/* Hover background highlight */}
              <div
                className="absolute inset-0 -mx-4 rounded-xl bg-[#0C0C0C]/[0.04] transition-all duration-300"
                style={{ opacity: hoveredIndex === index ? 1 : 0 }}
              />

              {/* Number */}
              <span
                className="relative text-[#0C0C0C] font-black leading-none text-[clamp(3rem,10vw,140px)] shrink-0 transition-all duration-300"
                style={{ opacity: hoveredIndex === index ? 1 : 0.2 }}
              >
                {service.number}
              </span>

              {/* Text */}
              <div className="relative flex flex-col justify-center flex-1 min-w-0">
                <div className="inline-flex items-center gap-2 mb-2">
                  <h3 className="relative text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)]">
                    <span className="relative">
                      {service.name}
                      {/* Animated underline */}
                      <span
                        className="absolute left-0 -bottom-0.5 h-[2px] bg-[#0C0C0C] transition-all duration-300"
                        style={{ width: hoveredIndex === index ? "100%" : "0%" }}
                      />
                    </span>
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-[#3DA3FF] transition-all duration-300"
                    style={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      transform: hoveredIndex === index
                        ? "translate(0,0)"
                        : "translate(-6px, 6px)",
                    }}
                  />
                </div>

                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] transition-all duration-300"
                  style={{ opacity: hoveredIndex === index ? 0.7 : 0.45 }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
