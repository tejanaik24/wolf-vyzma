import { VIDEO_LINKS } from "@/constants";
import { PropsWithChildren, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { VyzmaParallaxSlides } from "@/components/ui/text-parallax-content-scroll";

interface BentoTiltProps {
  className?: string;
}

const BentoTilt = ({
  children,
  className = "",
}: PropsWithChildren<BentoTiltProps>) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description?: string;
}

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return (
    <article className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute top-0 left-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="tetx-xl mt-3 max-w-64 md:text-base">{description}</p>
          )}
        </div>
      </div>
    </article>
  );
};

export const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Intelligent Capabilities
          </p>

          <p className="font-circular-web max-w-md text-lg text-blue-50 opacity-50">
            From AI chatbots to workflow automation — deploy intelligent systems
            that work 24/7 so your business runs smarter, faster, with less effort.
          </p>
        </div>

        <VyzmaParallaxSlides />

        <div
          id="nexus"
          className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7"
        >
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src={VIDEO_LINKS.feature2}
              title={
                <>
                  re<b>a</b>son
                </>
              }
              description="Advanced AI reasoning that analyzes your data, surfaces insights, and makes decisions in real-time."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src={VIDEO_LINKS.feature3}
              title={
                <>
                  cre<b>a</b>te
                </>
              }
              description="Generate content, campaigns, and code with AI trained on your brand voice and business context."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src={VIDEO_LINKS.feature4}
              title={
                <>
                  c<b>o</b>nnect
                </>
              }
              description="Seamlessly integrate with your existing tools — WhatsApp, Instagram, CRMs, and more. Zero disruption."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-gradient-to-br from-[#3DA3FF] via-[#8A5CFF] to-[#FFB547] p-5">
              <h1 className="bento-title special-font max-w-64 text-white">
                M<b>o</b>re co<b>m</b>ing so<b>o</b>n!
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end text-white" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src={VIDEO_LINKS.feature5}
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};
