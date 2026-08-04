import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { goals } from "@/lib/resume";
import { cardClass } from "@/lib/ui";

export function Goals() {
  return (
    <Section id="goals" eyebrow="Goals" title="Where I'm headed">
      <div className="grid gap-6 sm:grid-cols-2">
        <Reveal>
          <div className={cardClass}>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent">
              Near-term
            </p>
            <p className="text-sm leading-relaxed text-foreground-muted sm:text-base">
              {goals.nearTerm}
            </p>
          </div>
        </Reveal>
        <Reveal delayMs={80}>
          <div className={cardClass}>
            <p className="mb-3 font-mono text-xs font-medium uppercase tracking-widest text-accent">
              Long-term
            </p>
            <p className="text-sm leading-relaxed text-foreground-muted sm:text-base">
              {goals.longTerm}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
