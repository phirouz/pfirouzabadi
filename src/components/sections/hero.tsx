"use client";

import { motion } from "framer-motion";
import { CircuitBackground } from "@/components/circuit-background";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/resume";
import { btnMotion, btnPrimaryClass, btnSecondaryClass } from "@/lib/ui";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] scroll-mt-20 flex-col items-start justify-center overflow-hidden px-6"
    >
      <CircuitBackground />

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-mono text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_2px_rgba(16,185,129,0.6)]" />
            </span>
            Currently: AI Solutions Developer @ Aecon Group
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Electrical Engineering student building AI agents and automation
            systems.
          </h1>
        </Reveal>

        <Reveal delayMs={160}>
          <p className="mt-6 text-lg font-medium text-foreground sm:text-xl">
            {profile.name}
          </p>
          <p className="mt-1 max-w-xl text-base text-foreground-muted sm:text-lg">
            Blending hardware fundamentals with applied AI — from FPGA logic
            to RAG-based enterprise agents.
          </p>
        </Reveal>

        <Reveal delayMs={240}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a href="#career" className={btnPrimaryClass} {...btnMotion}>
              View my career
            </motion.a>
            <motion.a
              href={`mailto:${profile.email}`}
              className={btnSecondaryClass}
              {...btnMotion}
            >
              Get in touch
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
