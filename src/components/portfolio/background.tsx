"use client";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-obsidian pointer-events-none">
      {/* Deep base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,oklch(0.2_0.012_270)_0%,oklch(0.09_0.005_270)_55%,oklch(0.06_0.003_270)_100%)]" />

      {/* Aurora blobs — positioned behind content so glass blurs visible light */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[40rem] w-[52rem] rounded-full bg-[radial-gradient(ellipse,oklch(0.66_0.07_280_/_0.42),transparent_65%)] blur-3xl animate-aurora" />
      <div
        className="absolute top-[30%] -left-24 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,oklch(0.64_0.06_235_/_0.3),transparent_62%)] blur-3xl animate-aurora"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute top-[55%] -right-24 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,oklch(0.6_0.06_315_/_0.28),transparent_62%)] blur-3xl animate-aurora"
        style={{ animationDelay: "-12s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,oklch(0.62_0.05_260_/_0.24),transparent_62%)] blur-3xl animate-aurora"
        style={{ animationDelay: "-3s" }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(100% 60% at 50% 0%, black 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(100% 60% at 50% 0%, black 0%, transparent 80%)",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_50%,transparent_40%,oklch(0.05_0.003_270_/_0.8)_100%)]" />
    </div>
  );
}
