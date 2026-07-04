"use client";

const ITEMS = [
  "Brand Systems",
  "Product Design",
  "Web Engineering",
  "AI Integration",
  "Design Systems",
  "Motion",
  "Creative Direction",
  "LLM Applications",
  "Prototyping",
  "Design Engineering",
];

export function Marquee() {
  return (
    <div className="relative py-6 border-y border-white/5 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-obsidian to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-obsidian to-transparent z-10" />
      <div className="flex w-max animate-marquee">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-6 sm:gap-8 px-6 sm:px-8">
            <span className="text-[11px] sm:text-[13px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-muted-foreground/70 whitespace-nowrap">
              {item}
            </span>
            <span className="text-foreground/30 text-[10px] sm:text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
