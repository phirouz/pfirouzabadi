import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { projects } from "@/lib/resume";
import { subheadingClass } from "@/lib/ui";

const professionalProjects = projects.filter((project) => project.kind !== "course");
const courseProjects = projects.filter((project) => project.kind === "course");

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="What I've built">
      <Reveal>
        <h3 className={subheadingClass}>Professional &amp; Independent Work</h3>
      </Reveal>
      <div className="mb-16 grid gap-6 sm:grid-cols-2">
        {professionalProjects.map((project, i) => (
          <Reveal key={project.title} delayMs={(i % 2) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h3 className={subheadingClass}>Course Projects</h3>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        {courseProjects.map((project, i) => (
          <Reveal key={project.title} delayMs={(i % 2) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
