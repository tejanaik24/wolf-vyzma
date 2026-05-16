import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoMenu, IoClose } from "react-icons/io5";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";

import { LINKS, NAV_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";

import { Button } from "./button";

export const Navbar = () => {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { y: currentScrollY } = useWindowScroll();

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prevAudioPlaying) => !prevAudioPlaying);
    setIsIndicatorActive((prevIndicatorActive) => !prevIndicatorActive);
  };

  useEffect(() => {
    if (isAudioPlaying) void audioElementRef.current?.play();
    else audioElementRef.current?.pause();
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <header
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <div className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <a href="#hero" className="transition hover:opacity-75">
              <img src="/img/vyzma-logo.png" alt="Vyzma" className="h-16 w-auto" />
            </a>

            <Button
              id="product-button"
              rightIcon={TiLocationArrow}
              containerClass="bg-[#3DA3FF] text-white md:flex hidden items-center justify-center gap-1"
            >
              Book Free Call
            </Button>
          </div>

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {NAV_ITEMS.map(({ label, href }) => (
                <a key={href} href={href} className="nav-hover-btn">
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 text-white"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <IoClose className="size-5" /> : <IoMenu className="size-5" />}
              </button>

              <button
                onClick={toggleAudioIndicator}
                className="ml-10 flex items-center space-x-1 p-2 transition hover:opacity-75"
                title="Play Audio"
              >
                <audio
                  ref={audioElementRef}
                  src="/audio/loop.mp3"
                  className="hidden"
                  loop
                />

                {Array(4)
                  .fill("")
                  .map((_, i) => {
                    return (
                      <div
                        key={i + 1}
                        className={cn(
                          "indicator-line",
                          isIndicatorActive && "active"
                        )}
                        style={{ animationDelay: `${(i + 1) * 0.1}s` }}
                      />
                    );
                  })}
              </button>

              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="transition hover:opacity-75"
                title="WhatsApp"
              >
                <FaWhatsapp className="size-5 text-white" />
              </a>
            </div>
          </div>
        </nav>
      </div>

      {isMobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 md:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMobileOpen(false)}
                className="text-white text-lg uppercase tracking-wider font-medium hover:text-[#3DA3FF] transition"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileOpen(false)}
              className="bg-[#3DA3FF] text-white rounded-full px-8 py-3 font-medium text-sm uppercase tracking-wider mt-4"
            >
              Book Free Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
