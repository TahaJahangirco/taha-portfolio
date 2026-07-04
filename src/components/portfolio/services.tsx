"use client";

import { motion } from "framer-motion";
import {
  SiFigma,
  SiSketch,
  SiWebflow,
  SiBlender,
  SiFramer,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiOpenai,
  SiCanva,
} from "react-icons/si";
import { PenTool, Code2, BrainCircuit } from "lucide-react";
import { SectionHeading } from "./section-heading";

const ease = [0.16, 1, 0.3, 1] as const;

type Tool = {
  Icon?: React.ElementType;
  img?: string;
  name: string;
  color: string;
};

const SERVICES = [
  {
    icon: PenTool,
    no: "01",
    title: "Design",
    tagline: "Identity & interface",
    description:
      "Brand systems, product UI, and motion that make products feel inevitable. I design for clarity, hierarchy, and the kind of detail that gets bookmarked.",
    tools: [
      { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
      { Icon: SiCanva, name: "Canva", color: "#00C4CC" },
      { Icon: SiFramer, name: "Framer", color: "#0055FF" },
      { Icon: SiSketch, name: "Sketch", color: "#FDB300" },
      { Icon: SiWebflow, name: "Webflow", color: "#4353FF" },
      { Icon: SiBlender, name: "Blender", color: "#EA7600" },
    ] as Tool[],
  },
  {
    icon: Code2,
    no: "02",
    title: "Development",
    tagline: "Design engineering",
    description:
      "Production-grade interfaces built with React, Next.js & TypeScript. Pixel-precise, performant, and animated with intent — the bridge between Figma and reality.",
    tools: [
      { Icon: SiReact, name: "React", color: "#61DAFB" },
      { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
      { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
      { Icon: SiNodedotjs, name: "Node.js", color: "#5FA04E" },
    ] as Tool[],
  },
  {
    icon: BrainCircuit,
    no: "03",
    title: "Artificial Intelligence",
    tagline: "Applied ML & LLMs",
    description:
      "From RAG pipelines to agentic workflows and custom model fine-tuning — I turn research-grade AI into products people actually want to use every day.",
    tools: [
      { Icon: SiPython, name: "Python", color: "#FFD43B" },
      { Icon: SiOpenai, name: "OpenAI", color: "#10A37F" },
      { img: "/images/ai-logos/claude.png", name: "Claude", color: "#D97757" },
      { img: "/images/ai-logos/gemini.webp", name: "Gemini", color: "#4285F4" },
      { img: "/images/ai-logos/cursor.png", name: "Cursor", color: "#FFFFFF" },
      { img: "/images/ai-logos/higgsfield.png", name: "Higgsfield", color: "#00D4AA" },
    ] as Tool[],
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-4 sm:px-5 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01 / Services"
          title={
            <>
              Three disciplines.
              <br />
              One standard.
            </>
          }
          subtitle="I work across the full arc of a product — from the first sketch to the shipped model — so the vision never gets lost in translation."
        />

        <div className="mt-12 sm:mt-14 grid gap-4 sm:gap-5 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease, delay: i * 0.08 }}
              className="group relative glass border-gradient rounded-3xl p-5 sm:p-7 flex flex-col h-full overflow-hidden hover:bg-white/[0.06] transition-colors duration-500"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -top-24 -right-16 h-48 w-48 rounded-full bg-white/[0.06] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <div className="grid place-items-center h-10 w-10 sm:h-11 sm:w-11 rounded-xl glass-strong text-foreground">
                  <s.icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[11px] text-muted-foreground/50">
                  {s.no}
                </span>
              </div>

              <div className="flex items-baseline gap-2 sm:gap-2.5 mb-3">
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
                  {s.title}
                </h3>
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60">
                  {s.tagline}
                </span>
              </div>

              <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-muted-foreground mb-6 sm:mb-7">
                {s.description}
              </p>

              {/* Tool logos — colorful */}
              <div className="mt-auto pt-5 border-t border-white/5">
                <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground/50 mb-3">
                  Toolkit
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {s.tools.map(({ Icon, img, name, color }) => (
                    <span
                      key={name}
                      title={name}
                      className="group/tool grid place-items-center h-8 w-8 sm:h-9 sm:w-9 rounded-lg glass-subtle hover:scale-110 hover:bg-white/[0.08] transition-all duration-300"
                      style={{ boxShadow: `inset 0 0 0 1px ${color}22` }}
                    >
                      {img ? (
                        <img
                          src={img}
                          alt={name}
                          className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] object-contain transition-transform duration-300 group-hover/tool:scale-110"
                        />
                      ) : (
                        <Icon
                          className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] transition-transform duration-300"
                          style={{ color }}
                        />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
