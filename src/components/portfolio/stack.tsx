"use client";

import { motion } from "framer-motion";
import {
  SiFigma,
  SiCanva,
  SiFramer,
  SiWebflow,
  SiStorybook,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiVercel,
  SiPython,
  SiOpenai,
  SiPytorch,
  SiTensorflow,
  SiLangchain,
  SiHuggingface,
  SiSupabase,
  SiThreedotjs,
  SiGit,
} from "react-icons/si";
import { SectionHeading } from "./section-heading";

const ease = [0.16, 1, 0.3, 1] as const;

const STACK: { Icon: React.ElementType; name: string; color: string }[] = [
  { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
  { Icon: SiCanva, name: "Canva", color: "#00C4CC" },
  { Icon: SiFramer, name: "Framer", color: "#0055FF" },
  { Icon: SiWebflow, name: "Webflow", color: "#4353FF" },
  { Icon: SiStorybook, name: "Storybook", color: "#FF4785" },
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { Icon: SiNodedotjs, name: "Node.js", color: "#5FA04E" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { Icon: SiPrisma, name: "Prisma", color: "#5A67D8" },
  { Icon: SiVercel, name: "Vercel", color: "#FFFFFF" },
  { Icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
  { Icon: SiPython, name: "Python", color: "#FFD43B" },
  { Icon: SiOpenai, name: "OpenAI", color: "#10A37F" },
  { Icon: SiPytorch, name: "PyTorch", color: "#EE4C2C" },
  { Icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
  { Icon: SiLangchain, name: "LangChain", color: "#1FB6A6" },
  { Icon: SiHuggingface, name: "Hugging Face", color: "#FFD21E" },
  { Icon: SiThreedotjs, name: "Three.js", color: "#FFFFFF" },
  { Icon: SiGit, name: "Git", color: "#F05032" },
];

export function Stack() {
  return (
    <section id="stack" className="relative px-4 sm:px-5 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04 / Toolkit"
          title={
            <>
              The tools
              <br />
              behind the craft.
            </>
          }
          subtitle="A curated, battle-tested stack — chosen for speed, type-safety, and the kind of polish that holds up under scale."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-12 sm:mt-14 flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-2xl sm:max-w-3xl mx-auto"
        >
          {STACK.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, ease, delay: (i % 10) * 0.03 }}
              className="group relative aspect-square w-12 h-12 sm:w-[4.5rem] sm:h-[4.5rem] grid place-items-center rounded-2xl glass-subtle hover:glass hover:bg-white/[0.07] transition-all duration-300"
              title={t.name}
              style={{ boxShadow: `inset 0 0 0 1px ${t.color}1a` }}
            >
              <t.Icon
                className="h-5 w-5 sm:h-8 sm:w-8 transition-transform duration-300 group-hover:scale-110"
                style={{ color: t.color }}
              />
              <span
                className="pointer-events-none absolute inset-x-0 -bottom-1 mx-auto w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: t.color }}
              />
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md glass-strong px-2 py-1 text-[9px] sm:text-[10px] text-foreground opacity-0 group-hover:opacity-100 group-hover:-bottom-7 transition-all duration-200 z-20">
                {t.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
