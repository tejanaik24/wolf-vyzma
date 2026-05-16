import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText = ({ text, className = "" }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const characters = text.split("");

  return (
    <p ref={ref} className={`relative ${className}`}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = (i + 1) / characters.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        if (char === " ") {
          return <span key={i}>&nbsp;</span>;
        }

        return (
          <span key={i} className="relative inline-block">
            <span className="invisible">{char}</span>
            <motion.span
              className="absolute inset-0"
              style={{ opacity }}
            >
              {char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};
