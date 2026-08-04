"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/section";
import { TabbedProjectCard } from "@/components/tabbed-project-card";
import { projects } from "@/lib/resume";
import { subheadingClass } from "@/lib/ui";

const professionalProjects = projects.filter((project) => project.kind !== "course");
const courseProjects = projects.filter((project) => project.kind === "course");

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 30 },
  },
};

function ProjectGrid({ items }: { items: typeof projects }) {
  return (
    <motion.div
      className="grid gap-6 sm:grid-cols-2"
      variants={gridVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {items.map((project) => (
        <motion.div key={project.title} variants={cardVariants} className="min-w-0">
          {project.code ? (
            <TabbedProjectCard project={project} />
          ) : (
            <ProjectCard project={project} />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="What I've built">
      <Reveal>
        <h3 className={subheadingClass}>Professional &amp; Independent Work</h3>
      </Reveal>
      <div className="mb-16">
        <ProjectGrid items={professionalProjects} />
      </div>

      <Reveal>
        <h3 className={subheadingClass}>Course Projects</h3>
      </Reveal>
      <ProjectGrid items={courseProjects} />
    </Section>
  );
}
