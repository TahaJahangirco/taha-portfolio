"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { SectionHeading } from "./section-heading";

const ease = [0.16, 1, 0.3, 1] as const;

const STEPS = [
  {
    icon: Search,
    no: "01",
    title: "Discover",
    duration: "Week 1",
    description:
      "We dig into your goals, users, and constraints. I audit the landscape and define a sharp creative direction before a single pixel moves.",
  },
  {
    icon: PenTool,
    no: "02",
    title: "Design",
    duration: "Week 2–3",
    description:
      "From wireframe to high-fidelity prototype — a complete system of components, motion, and brand language you can feel before it ships.",
  },
  {
    icon: Code2,
    no: "03",
    title: "Build",
    duration: "Week 3–5",
    description:
      "Design engineering in Next.js & TypeScript. Pixel-true, animated, accessible, and production-ready — deployed to your stack.",
  },
  {
    icon: Rocket,
    no: "04",
    title: "Launch",
    duration: "Week 5+",
    description:
      "We ship, measure, and iterate. Post-launch I stay on for performance tuning, AI feature rollouts, and design system evolution.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative px-4 sm:px-5 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="03 / Process"
          title={
            <>
              A process built
              <br />
              for momentum.
            </>
          }
          subtitle="No black boxes. A transparent, four-stage flow that takes a product from idea to live — usually in five weeks."
        />

        <div className="mt-12 sm:mt-14 grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.08 }}
              className="relative glass border-gradient rounded-2xl p-5 sm:p-6 flex flex-col gap-4 sm:gap-5 overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-xl glass-strong text-foreground">
                  <s.icon className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px]" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] sm:text-[11px] text-muted-foreground/50">
                  {s.no}
                </span>
              </div>
              <div>
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-base sm:text-lg font-medium tracking-tight">
                    {s.title}
                  </h3>
                  <span className="text-[9px] sm:text-[10.5px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-muted-foreground/60 shrink-0">
                    {s.duration}
                  </span>
                </div>
                <p className="text-[12px] sm:text-[12.5px] leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
              {/* connector */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 h-px w-4 bg-gradient-to-r from-white/20 to-transparent z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
