"use client";

import { useState } from "react";
import { SkillTag } from "@/components/skill-tag";
import type { Project } from "@/lib/resume";

export function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-lg font-semibold text-foreground">
          {project.kind === "award" && (
            <span className="mr-2 text-accent" aria-hidden="true">
              ★
            </span>
          )}
          {project.title}
        </h4>
        <span className="font-mono text-xs text-foreground-muted">
          {project.date}
        </span>
      </div>

      {project.kind === "course" && (
        <span className="mt-2 inline-block rounded-md border border-accent/30 bg-accent/10 px-2 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide text-accent">
          Course Project
        </span>
      )}

      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <SkillTag key={tag} label={tag} />
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="mt-4 flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
      >
        {open ? "Hide details" : "Show details"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`size-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out ${
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="min-h-0 space-y-2">
          {project.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2 text-sm leading-relaxed text-foreground-muted"
            >
              <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
