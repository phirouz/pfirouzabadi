import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { projects } from "@/lib/resume";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="What I've built">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delayMs={(i % 2) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
