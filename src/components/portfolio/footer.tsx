"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto relative border-t border-white/5 px-4 sm:px-5 pt-10 sm:pt-14 pb-8 sm:pb-10">
      <div className="mx-auto max-w-6xl">
        {/* Brand */}
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-foreground text-background text-[11px] font-semibold">
              TJ
            </span>
            <span className="text-[13px] font-medium tracking-tight">
              Taha Jahangir
            </span>
          </div>
          <p className="text-[12px] sm:text-[12.5px] leading-relaxed text-muted-foreground">
            Design · Development · Artificial Intelligence. Building premium
            digital products for founders who refuse to look ordinary.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[10.5px] sm:text-[11px] text-muted-foreground/60 font-mono text-center sm:text-left">
            © {new Date().getFullYear()} Taha Jahangir — Crafted with intent.
          </p>
          <div className="flex items-center gap-4 sm:gap-5 text-[10.5px] sm:text-[11px] text-muted-foreground/60">
            <a
              href="#top"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              Back to top
              <ArrowUp className="h-3 w-3" />
            </a>
            <span className="hidden sm:inline">·</span>
            <span>Islamabad, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
