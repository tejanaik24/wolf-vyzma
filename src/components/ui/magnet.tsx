import { useRef, useState, type ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  className?: string;
  padding?: number;
  strength?: number;
}

export const Magnet = ({
  children,
  className = "",
  padding = 150,
  strength = 3,
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = Math.abs(e.clientX - centerX);
    const distY = Math.abs(e.clientY - centerY);
    if (distX > padding || distY > padding) {
      setTransform("");
      return;
    }
    const deltaX = (e.clientX - centerX) / strength;
    const deltaY = (e.clientY - centerY) / strength;
    setTransform(`translate3d(${deltaX}px, ${deltaY}px, 0)`);
  };

  const handleMouseLeave = () => {
    setTransform("");
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        willChange: "transform",
        transition: transform ? "transform 0.3s ease-out" : "transform 0.6s ease-in-out",
      }}
    >
      {children}
    </div>
  );
};
