import { Reveal } from "@/components/reveal";
import { SkillTag } from "@/components/skill-tag";
import { withBasePath } from "@/lib/base-path";
import { education, experience } from "@/lib/resume";
import { btnPrimaryClass, cardClass, subheadingClass } from "@/lib/ui";

export function Career() {
  return (
    <section id="career" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="mb-12">
            <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-accent">
              Career
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Where I&apos;ve been
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <h3 className={subheadingClass}>Education</h3>
        </Reveal>
        <div className="mb-16 space-y-6">
          {education.map((item, i) => (
            <Reveal key={item.school} delayMs={i * 80}>
              <div className={cardClass}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    {item.degree}
                  </h4>
                  <span className="font-mono text-xs text-foreground-muted">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-foreground-muted">{item.school}</p>
                <p className="mt-1 text-sm text-accent">{item.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <SkillTag key={course} label={course} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className={subheadingClass}>Experience</h3>
        </Reveal>
        <div className="mb-16 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={`${job.role}-${job.org}`} delayMs={i * 80}>
              <div className={cardClass}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="font-heading text-lg font-semibold text-foreground">
                    {job.role}
                  </h4>
                  <span className="font-mono text-xs text-foreground-muted">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-accent">{job.org}</p>
                <ul className="mt-4 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-relaxed text-foreground-muted"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {job.tools && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tools.map((tool) => (
                      <SkillTag key={tool} label={tool} />
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className={subheadingClass}>Resume</h3>
          <div className={`${cardClass} flex flex-wrap items-center justify-between gap-4`}>
            <div>
              <p className="font-medium text-foreground">Full resume, one PDF.</p>
              <p className="mt-1 text-sm text-foreground-muted">
                Education, experience, projects, and skills in a single document.
              </p>
            </div>
            <a
              href={withBasePath("/resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              download
              className={`shrink-0 ${btnPrimaryClass}`}
            >
              Download Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
