"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col items-center justify-start sm:justify-center px-5 pt-28 pb-16 sm:pt-28 sm:pb-20 gap-0"
    >
      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease, delay: 0.18 }}
        className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] sm:tracking-[0.32em] text-muted-foreground/70 mt-4 mb-5 sm:mb-7 text-center"
      >
        Design — Development — Artificial Intelligence
      </motion.p>

      {/* Name */}
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.26 }}
          className="font-serif text-[clamp(2.8rem,13vw,9.5rem)] leading-[0.9] tracking-[-0.03em] text-gradient"
        >
          Taha
          <br />
          Jahangir
        </motion.h1>
      </div>

      {/* Sub copy */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.42 }}
        className="mt-6 sm:mt-9 max-w-xl text-center text-[13px] sm:text-[14.5px] leading-relaxed text-muted-foreground text-balance px-2"
      >
        A multidisciplinary designer & engineer building{" "}
        <span className="text-foreground/90 font-serif italic">
          premium digital products
        </span>{" "}
        at the intersection of design, code, and intelligent systems — for
        founders who refuse to look ordinary.
      </motion.p>

      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.7 }}
        className="mt-auto sm:mt-14 pt-8 sm:pt-0 w-full max-w-md sm:absolute sm:bottom-8 sm:left-1/2 sm:-translate-x-1/2 sm:w-[min(92%,46rem)] sm:max-w-none glass rounded-2xl px-2 py-2 grid grid-cols-3 divide-x divide-white/5"
      >
        {[
          { k: "6+ yrs", v: "Crafting" },
          { k: "30+", v: "Shipped" },
          { k: "£500k+", v: "Revenue" },
        ].map((s) => (
          <div key={s.v} className="px-2 sm:px-4 py-2 text-center">
            <div className="text-base sm:text-lg font-medium tracking-tight text-foreground">
              {s.k}
            </div>
            <div className="text-[9px] sm:text-[10.5px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-muted-foreground/70 mt-0.5">
              {s.v}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
