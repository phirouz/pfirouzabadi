import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { reflections } from "@/lib/resume";

const paragraphs = reflections.split("\n\n");

export function Reflections() {
  return (
    <Section id="reflections" eyebrow="Reflections" title="What I've learned">
      <div className="space-y-6">
        {paragraphs.map((paragraph, i) => (
          <Reveal key={i} delayMs={i * 80}>
            <p className="text-base leading-relaxed text-foreground-muted sm:text-lg">
              {paragraph}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
