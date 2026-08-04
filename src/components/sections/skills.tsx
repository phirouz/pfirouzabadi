"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/animated-counter";
import { Section } from "@/components/section";
import { SkillTag } from "@/components/skill-tag";
import { projects, skillGroups } from "@/lib/resume";
import { cardClass, cardHoverMotion } from "@/lib/ui";

const totalSkills = skillGroups.reduce((sum, group) => sum + group.skills.length, 0);
const competitionWins = projects.filter((p) => p.kind === "award").length;
const projectsShipped = projects.length;

const metrics = [
  { label: "Competition Wins", value: competitionWins, suffix: "" },
  { label: "Projects Shipped", value: projectsShipped, suffix: "" },
  { label: "Co-op Program", value: 16, suffix: "mo" },
  { label: "Technologies", value: totalSkills, suffix: "+" },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <motion.div
          className={`${cardClass} sm:col-span-2 lg:row-span-2`}
          {...cardHoverMotion}
        >
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-foreground-muted">
            {skillGroups[0].label}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {skillGroups[0].skills.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </motion.div>

        {metrics.map((metric) => (
          <motion.div
            key={metric.label}
            className={`${cardClass} flex flex-col justify-center`}
            {...cardHoverMotion}
          >
            <p className="text-3xl font-bold text-accent sm:text-4xl">
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-foreground-muted">
              {metric.label}
            </p>
          </motion.div>
        ))}

        <motion.div className={`${cardClass} sm:col-span-2`} {...cardHoverMotion}>
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-foreground-muted">
            {skillGroups[1].label}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {skillGroups[1].skills.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </motion.div>

        <motion.div className={cardClass} {...cardHoverMotion}>
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-foreground-muted">
            {skillGroups[2].label}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {skillGroups[2].skills.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </motion.div>

        <motion.div className={cardClass} {...cardHoverMotion}>
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-foreground-muted">
            {skillGroups[3].label}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {skillGroups[3].skills.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
