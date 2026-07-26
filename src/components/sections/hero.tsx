import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/resume";

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[100dvh] scroll-mt-20 flex-col items-start justify-center px-6"
    >
      <div className="mx-auto w-full max-w-3xl">
        <Reveal>
          <p className="mb-4 font-mono text-sm text-accent">Hi, I&apos;m</p>
        </Reveal>
        <Reveal delayMs={80}>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {profile.name}
          </h1>
        </Reveal>
        <Reveal delayMs={160}>
          <p className="mt-4 max-w-xl text-lg text-foreground-muted sm:text-xl">
            {profile.role} — building at the intersection of electrical
            engineering and applied AI.
          </p>
        </Reveal>
        <Reveal delayMs={240}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#career"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              View my career
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
