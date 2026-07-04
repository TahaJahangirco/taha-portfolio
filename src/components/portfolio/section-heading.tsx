"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1] as const;

export function SectionHeading({
  index,
  title,
  subtitle,
  className,
  align = "left",
}: {
  index: string;
  title: React.ReactNode;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease }}
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] uppercase tracking-[0.24em] sm:tracking-[0.3em] text-muted-foreground/60">
        <span className="font-mono text-foreground/50">{index}</span>
        <span className="h-px w-6 sm:w-8 bg-foreground/20" />
      </div>
      <h2 className="font-serif text-[clamp(1.75rem,7vw,3.5rem)] leading-[1.02] tracking-[-0.02em] text-gradient max-w-2xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-[13px] sm:text-[14px] leading-relaxed text-muted-foreground max-w-md mt-1",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
