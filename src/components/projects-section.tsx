import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "@/components/ui/fade-in";
import { LiveProjectButton } from "@/components/ui/live-project-button";
import { PROJECTS } from "@/constants";

const ProjectCard = ({ project, index }: { project: typeof PROJECTS[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const totalCards = PROJECTS.length;
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="h-[85vh] sticky top-24 md:top-32 flex items-start" style={{ top: `${index * 28}px` }}>
      <motion.div
        style={{ scale }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
      >
        <div className="flex items-start justify-between mb-6">
          <span className="text-[#D7E2EA] font-black leading-none text-[clamp(3rem,10vw,140px)]">
            {project.number}
          </span>
          <div className="text-right">
            <p className="text-[#D7E2EA] text-sm opacity-60 uppercase tracking-widest mb-1">
              {project.category}
            </p>
            <h3 className="text-[#D7E2EA] text-xl md:text-2xl font-medium">
              {project.name}
            </h3>
          </div>
          <LiveProjectButton className="hidden lg:block" />
        </div>

        <div className="flex gap-3">
          <div className="w-[40%] flex flex-col gap-3">
            <img
              src={project.col1Image1}
              alt=""
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: "clamp(130px, 16vw, 230px)" }}
            />
            <img
              src={project.col1Image2}
              alt=""
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
              style={{ height: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          <div className="w-[60%]">
            <img
              src={project.col2Image}
              alt=""
              className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] object-cover"
            />
          </div>
        </div>

        <LiveProjectButton className="mt-4 lg:hidden" />
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  return (
    <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pb-20">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-gradient font-black uppercase text-center text-[clamp(3rem,12vw,160px)] pt-20 pb-16">
          Project
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};
