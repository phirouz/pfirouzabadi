import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { aboutMe } from "@/lib/resume";

const paragraphs = aboutMe.split("\n\n");

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Who I am">
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
