import { SOCIAL_LINKS } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-screen bg-[#0A0A0D] py-4 text-[#D0D2D6] border-t border-white/10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-8 md:flex-row">
        <div className="flex flex-col gap-1">
          <p className="text-center text-sm md:text-left">
            &copy; <strong className="font-semibold">Vyzma AI</strong>{" "}
            {new Date().getFullYear()}. All rights reserved.
          </p>
          <p className="text-center text-xs text-[#D0D2D6]/50 md:text-left">
            Intelligence · Automation · Growth
          </p>
        </div>

        <div className="flex justify-center gap-4 md:justify-start">
          {SOCIAL_LINKS.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#D0D2D6] transition-colors duration-500 ease-in-out hover:text-[#3DA3FF]"
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <a
            href="#"
            className="text-center text-sm transition hover:underline hover:opacity-75 md:text-right"
          >
            Privacy Policy
          </a>

          <b>|</b>

          <a
            href="#"
            className="text-center text-sm transition hover:underline hover:opacity-75 md:text-right"
          >
            Terms &amp; Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};
