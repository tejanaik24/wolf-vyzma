import { useEffect, useRef } from "react";
import gsap from "gsap";

export const CustomCursor = () => {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // quickTo gives us smooth independent x/y setters
    const moveDotX  = gsap.quickTo(dot,  "x", { duration: 0.1, ease: "power3.out" });
    const moveDotY  = gsap.quickTo(dot,  "y", { duration: 0.1, ease: "power3.out" });
    const moveRingX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    const moveRingY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      moveDotX(e.clientX);
      moveDotY(e.clientY);
      moveRingX(e.clientX);
      moveRingY(e.clientY);
    };

    // Scale ring up on clickable elements
    const onEnter = () => gsap.to(ring, { scale: 1.6, duration: 0.2 });
    const onLeave = () => gsap.to(ring, { scale: 1,   duration: 0.2 });

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  id="cursor-dot"  />
      <div ref={ringRef} id="cursor-ring" />
    </>
  );
};
