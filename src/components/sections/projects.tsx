import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="What I've built">
      <Reveal>
        <div className="rounded-2xl border border-dashed border-border p-10 text-center transition-colors duration-300 hover:border-accent/50">
          <p className="text-base text-foreground-muted">
            Project write-ups are on the way — check back soon.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
