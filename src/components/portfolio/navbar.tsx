"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={`flex items-center justify-between gap-6 rounded-full px-3 py-2 pl-5 transition-all duration-500 w-full max-w-3xl ${
            scrolled ? "glass-strong shadow-2xl shadow-black/40" : "glass-subtle"
          }`}
        >
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative grid place-items-center h-8 w-8 rounded-lg bg-foreground text-background text-[11px] font-semibold tracking-tight">
              TJ
              <span className="absolute inset-0 rounded-lg ring-1 ring-white/20" />
            </span>
            <span className="text-[13px] font-medium tracking-tight text-foreground/90 hidden sm:block">
              Taha Jahangir
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 text-[12.5px] text-muted-foreground">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-1.5 rounded-full hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-1.5 text-[12.5px] font-medium hover:bg-foreground/90 transition-colors"
            >
              Let&apos;s talk
            </a>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden grid place-items-center h-9 w-9 rounded-full glass"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-obsidian-deep/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 220 }}
              className="absolute right-0 top-0 h-full w-[78%] max-w-sm glass-strong p-7 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-sm font-medium">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid place-items-center h-9 w-9 rounded-full glass"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <ul className="flex flex-col gap-1 text-2xl font-medium tracking-tight">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-auto inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium"
              >
                Start a project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
