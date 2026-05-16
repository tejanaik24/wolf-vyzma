interface LiveProjectButtonProps {
  className?: string;
}

export const LiveProjectButton = ({ className = "" }: LiveProjectButtonProps) => {
  return (
    <button
      className={`rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium text-[#D7E2EA] uppercase tracking-widest transition hover:bg-[#D7E2EA]/10 ${className}`}
    >
      Live Project
    </button>
  );
};
