import type { ReactNode } from "react";

interface GlowingShadowProps {
  children: ReactNode;
  className?: string;
}

// All CSS lives in index.css (style jsx is Next.js only; Vite uses global CSS)
export function GlowingShadow({ children, className = "" }: GlowingShadowProps) {
  return (
    <div className={`glow-container ${className}`} role="button">
      <span className="glow" />
      <div className="glow-content">{children}</div>
    </div>
  );
}
