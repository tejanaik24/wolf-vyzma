export const TrustBar = () => {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "₹4,999/mo", label: "Starting Price" },
    { value: "48hr", label: "Strategy Turnaround" },
    { value: "7-Day", label: "Delivery" },
    { value: "Bangalore", label: "& Vizag" },
  ];

  return (
    <section className="w-full bg-[#14151A] border-y border-white/10 py-4 overflow-hidden">
      <div className="hidden sm:flex items-center justify-center gap-8 md:gap-12 mx-auto max-w-5xl px-5">
        {stats.map((stat, i) => (
          <div key={stat.label} className="flex items-center gap-8 md:gap-12">
            <div className="text-center shrink-0">
              <span className="text-[#3DA3FF] font-semibold text-sm uppercase">
                {stat.value}
              </span>
              <span className="text-white/60 text-xs uppercase ml-1.5">
                {stat.label}
              </span>
            </div>
            {i < stats.length - 1 && (
              <div className="w-px h-4 bg-white/10" />
            )}
          </div>
        ))}
      </div>
      <div className="flex sm:hidden overflow-x-auto gap-6 px-5 scrollbar-none snap-x">
        {stats.map((stat) => (
          <span key={stat.label} className="text-xs text-white/60 whitespace-nowrap shrink-0 snap-center">
            <span className="text-[#3DA3FF] font-semibold">{stat.value}</span> {stat.label}
          </span>
        ))}
      </div>
    </section>
  );
};
