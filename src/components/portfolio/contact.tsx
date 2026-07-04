"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone, Check } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { SectionHeading } from "./section-heading";

const WHATSAPP_LINK =
  "https://api.whatsapp.com/message/QLK2E7IVOVVYH1?autoload=1&app_absent=0";

const ease = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  return (
    <section id="contact" className="relative px-4 sm:px-5 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] glass-strong border-gradient p-5 sm:p-12 lg:p-16">
          {/* ambient glow */}
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full bg-[radial-gradient(circle,oklch(0.7_0.02_270_/_0.16),transparent_70%)] blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left copy */}
            <div>
              <SectionHeading
                index="06 / Contact"
                title={
                  <>
                    Let&apos;s build
                    <br />
                    something rare.
                  </>
                }
              />
              <p className="mt-5 sm:mt-6 text-[13px] sm:text-[14px] leading-relaxed text-muted-foreground max-w-md">
                I take on a handful of projects each quarter. If you&apos;re
                building something that deserves more than a template, I&apos;d
                love to hear about it.
              </p>

              <div className="mt-7 sm:mt-9 flex flex-col gap-2.5 sm:gap-3 text-[12px] sm:text-[13px]">
                <a
                  href="mailto:tahajahangirco@gmail.com"
                  className="group inline-flex items-center gap-2.5 sm:gap-3 text-muted-foreground hover:text-foreground transition-colors break-all"
                >
                  <span className="grid place-items-center h-8 w-8 sm:h-9 sm:w-9 shrink-0 rounded-full glass-subtle">
                    <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                  <span className="min-w-0">tahajahangirco@gmail.com</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
                <a
                  href="tel:+923395326090"
                  className="group inline-flex items-center gap-2.5 sm:gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="grid place-items-center h-8 w-8 sm:h-9 sm:w-9 shrink-0 rounded-full glass-subtle">
                    <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                  +92 339 532 6090
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
                <div className="inline-flex items-center gap-2.5 sm:gap-3 text-muted-foreground">
                  <span className="grid place-items-center h-8 w-8 sm:h-9 sm:w-9 shrink-0 rounded-full glass-subtle">
                    <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                  Based in Islamabad, Pakistan
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 sm:mt-9 inline-flex items-center justify-center gap-2.5 rounded-full px-5 sm:px-6 py-3 text-[12px] sm:text-[13px] font-medium text-foreground transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.72 0.19 150) 0%, oklch(0.65 0.17 150) 100%)",
                  boxShadow:
                    "0 8px 28px -8px oklch(0.72 0.19 150 / 0.5), inset 0 1px 0 0 oklch(1 0 0 / 0.25)",
                }}
              >
                <SiWhatsapp className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                Message on WhatsApp
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70 -translate-x-0.5 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
              </a>
              <p className="mt-2.5 text-[10.5px] sm:text-[11px] text-muted-foreground/60 text-left">
                Fastest reply · usually within a few hours
              </p>
            </div>

            {/* Right form */}
            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="glass rounded-2xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4"
            >
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <Field name="name" label="Name" placeholder="Your name" />
                <Field
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="you@company.com"
                />
              </div>
              <Field
                name="company"
                label="Company"
                placeholder="Optional"
                required={false}
              />
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-muted-foreground/70">
                  Project brief
                </label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="What are you building?"
                  className="resize-none rounded-xl bg-white/[0.03] border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-[12px] sm:text-[13px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-white/25 focus:bg-white/[0.05] transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending" || status === "done"}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-5 sm:px-6 py-2.5 sm:py-3 text-[12px] sm:text-[13px] font-medium hover:bg-foreground/90 transition-colors disabled:opacity-70"
              >
                {status === "sending" && "Sending…"}
                {status === "done" && (
                  <>
                    <Check className="h-4 w-4" /> Message sent
                  </>
                )}
                {status === "error" && "Try again"}
                {status === "idle" && "Send brief"}
              </button>
              {status === "done" && (
                <div className="flex flex-col gap-2">
                  <p className="text-[11.5px] text-emerald-400/80">
                    Thanks — I&apos;ll reply within 24 hours.
                  </p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11.5px] text-muted-foreground hover:text-foreground transition-colors w-fit"
                  >
                    <SiWhatsapp className="h-3.5 w-3.5" style={{ color: "#25D366" }} />
                    Or message me on WhatsApp for a faster reply
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              )}
              {status === "error" && (
                <p className="text-[11.5px] text-red-400/80">
                  Something went wrong. Email me directly.
                </p>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required = true,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.18em] text-muted-foreground/70">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl bg-white/[0.03] border border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 text-[12px] sm:text-[13px] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-white/25 focus:bg-white/[0.05] transition-colors"
      />
    </div>
  );
}
