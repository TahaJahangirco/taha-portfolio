"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

const ease = [0.16, 1, 0.3, 1] as const;

const FACTS = [
  { k: "6+ yrs", v: "Crafting & shipping" },
  { k: "30+", v: "Products shipped" },
  { k: "£500k+", v: "Client revenue" },
];

export function About() {
  return (
    <section id="about" className="relative px-4 sm:px-5 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Heading + bio */}
          <div className="lg:col-span-7">
            <SectionHeading
              index="05 / About"
              title={
                <>
                  Designer who codes.
                  <br />
                  Engineer who designs.
                </>
              }
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="mt-5 sm:mt-7 space-y-4 sm:space-y-5 text-[13px] sm:text-[14px] leading-relaxed text-muted-foreground max-w-xl"
            >
              <p>
                I&apos;m{" "}
                <span className="text-foreground">Taha Jahangir</span> — a
                multidisciplinary designer and engineer working at the
                intersection of{" "}
                <span className="font-serif italic text-foreground/90">
                  design
                </span>
                ,{" "}
                <span className="font-serif italic text-foreground/90">
                  code
                </span>
                , and{" "}
                <span className="font-serif italic text-foreground/90">AI</span>.
                For six years I&apos;ve helped founders and studios turn
                ambitious ideas into products that feel considered, fast, and
                unmistakably premium.
              </p>
              <p>
                My approach is simple: design is decision-making, engineering is
                craft, and AI is leverage. I move across all three so the work
                stays coherent from the first sketch to the final deploy — no
                handoffs, no detail lost in translation.
              </p>
              <p>
                When I&apos;m not shipping, I&apos;m writing about design
                engineering, training small models, and over-analysing typography
                in restaurant menus.
              </p>
            </motion.div>
          </div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="lg:col-span-5 grid grid-cols-3 lg:grid-cols-1 gap-3 lg:pt-16"
          >
            {FACTS.map((f, i) => (
              <div
                key={f.v}
                className="glass-subtle rounded-2xl p-4 sm:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-0 hover:bg-white/[0.05] transition-colors"
              >
                <div className="text-[9px] sm:text-[10.5px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-muted-foreground/70 font-mono">
                  0{i + 1}
                </div>
                <div className="lg:text-right">
                  <div className="text-xl sm:text-3xl font-medium tracking-tight text-gradient">
                    {f.k}
                  </div>
                  <div className="text-[9px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.16em] text-muted-foreground/70 mt-0.5 sm:mt-1">
                    {f.v}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
