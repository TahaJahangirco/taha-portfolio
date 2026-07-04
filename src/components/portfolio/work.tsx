"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./section-heading";

const ease = [0.16, 1, 0.3, 1] as const;

type Project = {
  title: string;
  year: string;
  blurb: string;
  image: string;
  tags: string[];
};

type WorkSection = {
  label: string;
  no: string;
  blurb: string;
  projects: Project[];
};

const SECTIONS: WorkSection[] = [
  {
    label: "Design",
    no: "02.1",
    blurb: "Brand systems, identity, and visual language.",
    projects: [
      {
        title: "MAERIS",
        year: "2025",
        blurb:
          "An old-money apparel brand bringing Italian taste to Pakistan — a full identity system built on restrained typography, muted tones, and a sense of inherited luxury.",
        image: "/images/work-maeris.png",
        tags: ["Brand Identity", "Apparel", "Luxury"],
      },
      {
        title: "Eleventhour",
        year: "2023",
        blurb:
          "Pakistan's premier event management company — a bold, high-energy identity system designed to feel like the moment before the lights drop.",
        image: "/images/work-eleventhour.png",
        tags: ["Brand Identity", "Events", "Art Direction"],
      },
      {
        title: "Gambit",
        year: "2025",
        blurb:
          "A leather product brand — a tactile, heritage-led identity built around craft, grain, and the quiet confidence of objects made to last decades.",
        image: "/images/work-gambit.png",
        tags: ["Brand Identity", "Leather", "Craft"],
      },
      {
        title: "Sparklin",
        year: "2024",
        blurb:
          "A daily-use household product store — a clean, approachable identity and packaging system that makes the everyday feel a little brighter.",
        image: "/images/work-sparklin.png",
        tags: ["Brand Identity", "Household", "Packaging"],
      },
    ],
  },
  {
    label: "CRMs",
    no: "02.2",
    blurb: "Dashboards, SaaS, and internal intelligence tools.",
    projects: [
      {
        title: "VOID",
        year: "2025",
        blurb:
          "A lead intelligence CRM with AI-powered lead discovery, scoring, and outreach — connecting to data sources via AI connectors to keep the pipeline self-filling.",
        image: "/images/work-void.png",
        tags: ["Lead Intel", "AI", "Pipeline"],
      },
      {
        title: "Ledgerly",
        year: "2025",
        blurb:
          "An accounts & finance CRM — invoicing, cash flow, payroll, and tax in one place, with live KPIs for revenue, net income, and outstanding receivables.",
        image: "/images/work-ledgerly.png",
        tags: ["Finance", "Accounting", "SaaS"],
      },
      {
        title: "Nexora",
        year: "2024",
        blurb:
          "A warehouse & inventory management system — real-time stock levels across 18 stores, damaged-unit tracking, stock value by location, and a live UK distribution map.",
        image: "/images/work-nexora.png",
        tags: ["WMS", "Inventory", "Logistics"],
      },
      {
        title: "Door Attendance",
        year: "2024",
        blurb:
          "A kiosk-based job time tracker for worker entry & exit — a door-mounted touchscreen where staff check in and out by code, with attendance logs and live shift tracking.",
        image: "/images/work-attendance.png",
        tags: ["Attendance", "Kiosk", "Time Tracking"],
      },
    ],
  },
  {
    label: "Websites",
    no: "02.3",
    blurb: "Editorial, commerce, and marketing sites that convert.",
    projects: [
      {
        title: "MAERIS",
        year: "2025",
        blurb:
          "The digital home of the old-money apparel house — a slow, editorial storefront built on typography, negative space, and the quiet confidence of inherited luxury.",
        image: "/images/web-maeris.png",
        tags: ["E-commerce", "Editorial", "Web"],
      },
      {
        title: "Ledgerly",
        year: "2025",
        blurb:
          "The marketing site for the finance CRM — a clean, conversion-led landing experience that turns a complex SaaS into a one-read pitch.",
        image: "/images/web-ledgerly.png",
        tags: ["SaaS", "Marketing", "Web"],
      },
      {
        title: "Gambit",
        year: "2025",
        blurb:
          "A tactile commerce site for the leather brand — grain-forward product stories, heritage copy, and a checkout that feels like unwrapping the object itself.",
        image: "/images/web-gambit.png",
        tags: ["E-commerce", "Brand", "Web"],
      },
      {
        title: "Sparklin",
        year: "2024",
        blurb:
          "A bright, accessible storefront for the household product store — fast browsing, clear categories, and an everyday checkout that stays frictionless.",
        image: "/images/web-sparklin.png",
        tags: ["E-commerce", "Retail", "Web"],
      },
    ],
  },
];

export function Work() {
  return (
    <section id="work" className="relative px-4 sm:px-5 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02 / Selected Work"
          title={
            <>
              Work that
              <br />
              earns attention.
            </>
          }
          subtitle="A selection of recent projects, organised by discipline — from brand identity to dashboards to shipping websites."
        />

        <div className="mt-12 sm:mt-16 flex flex-col gap-12 sm:gap-16 sm:gap-20">
          {SECTIONS.map((section) => (
            <div key={section.label} className="flex flex-col gap-4 sm:gap-6">
              {/* Sub-heading */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease }}
                className="flex items-end justify-between gap-3 border-b border-white/5 pb-3 sm:pb-4"
              >
                <div className="flex items-baseline gap-3 sm:gap-4">
                  <span className="font-mono text-[10px] sm:text-[11px] text-muted-foreground/50">
                    {section.no}
                  </span>
                  <h3 className="font-serif text-[clamp(1.4rem,6vw,2.4rem)] leading-none tracking-[-0.02em] text-gradient">
                    {section.label}
                  </h3>
                </div>
                <p className="hidden sm:block text-[12px] text-muted-foreground/70 max-w-xs text-right">
                  {section.blurb}
                </p>
              </motion.div>

              {/* Grid */}
              <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                {section.projects.map((p, i) => (
                  <motion.a
                    href="#contact"
                    key={p.title}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, ease, delay: i * 0.08 }}
                    className="group relative overflow-hidden rounded-3xl glass border-gradient flex flex-col"
                  >
                    <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-obsidian-deep">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/70 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 glass-strong rounded-full px-2 py-0.5 text-[9px] sm:text-[10px] uppercase tracking-[0.14em] sm:tracking-[0.18em] text-foreground/80">
                        {section.label}
                      </span>
                      <span className="absolute top-3 right-3 grid place-items-center h-7 w-7 sm:h-8 sm:w-8 rounded-full glass-strong text-foreground opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                        <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </span>
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-[14px] sm:text-[15px] font-medium tracking-tight">
                          {p.title}
                        </h4>
                        <span className="text-[10px] sm:text-[11px] text-muted-foreground/60 font-mono">
                          {p.year}
                        </span>
                      </div>
                      <p className="text-[12px] sm:text-[12.5px] leading-relaxed text-muted-foreground mb-3 sm:mb-4">
                        {p.blurb}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-white/[0.04] border border-white/5 px-2 py-0.5 text-[10px] sm:text-[10.5px] text-muted-foreground/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
