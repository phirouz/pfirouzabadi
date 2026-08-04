import { CircuitBackground } from "@/components/circuit-background";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/resume";
import { btnPrimaryClass, btnSecondaryClass } from "@/lib/ui";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] scroll-mt-20 flex-col items-start justify-center overflow-hidden px-6"
    >
      <CircuitBackground />

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 font-mono text-xs font-medium text-accent">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            Currently: AI Solutions Developer @ Aecon Group
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <h1 className="font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
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
            <a href="#career" className={btnPrimaryClass}>
              View my career
            </a>
            <a href={`mailto:${profile.email}`} className={btnSecondaryClass}>
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
