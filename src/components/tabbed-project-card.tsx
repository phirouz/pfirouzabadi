"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { SkillTag } from "@/components/skill-tag";
import { SpotlightCard } from "@/components/spotlight-card";
import { highlightPython } from "@/lib/highlight";
import type { Project } from "@/lib/resume";
import { accentTextClass, cardClass } from "@/lib/ui";

const TABS = ["Overview", "Architecture", "Code"] as const;
type Tab = (typeof TABS)[number];

export function TabbedProjectCard({ project }: { project: Project }) {
  const [tab, setTab] = useState<Tab>("Overview");
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    if (!project.code) return;
    try {
      await navigator.clipboard.writeText(project.code.snippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard permission denied or unavailable, silently ignore.
    }
  }

  const tokens = project.code ? highlightPython(project.code.snippet) : [];

  return (
    <SpotlightCard className={cardClass}>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
        <span className="font-mono text-xs text-foreground-muted">{project.date}</span>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
        {project.description}
      </p>

      <div className="mt-4 flex gap-1 rounded-lg border border-border bg-background-alt p-1">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className="relative flex-1 rounded-md px-3 py-1.5 text-xs font-medium transition-colors"
          >
            {tab === t && (
              <motion.span
                layoutId={`tab-pill-${project.title}`}
                className="absolute inset-0 rounded-md bg-accent"
                transition={{ type: "spring", stiffness: 500, damping: 35 }}
              />
            )}
            <span
              className={`relative ${tab === t ? accentTextClass : "text-foreground-muted hover:text-foreground"}`}
            >
              {t}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-4 min-h-[220px]">
        <AnimatePresence mode="wait">
          {tab === "Overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              <ul className="space-y-2">
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
            </motion.div>
          )}

          {tab === "Architecture" && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              <p className="text-sm leading-relaxed text-foreground-muted">
                {project.architecture}
              </p>
            </motion.div>
          )}

          {tab === "Code" && project.code && (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide text-zinc-300">
                      {project.code.language}
                    </span>
                    <span className="font-mono text-xs text-zinc-400">
                      {project.code.filename}
                    </span>
                  </div>
                  <motion.button
                    type="button"
                    onClick={copyCode}
                    whileTap={{ scale: 0.92 }}
                    className="flex items-center gap-1.5 rounded px-2 py-1 font-mono text-xs text-zinc-300 transition-colors hover:text-white"
                  >
                    {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                    {copied ? "Copied" : "Copy"}
                  </motion.button>
                </div>
                <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-zinc-300">
                  <code>
                    {tokens.map((token, i) =>
                      token.className ? (
                        <span key={i} className={token.className}>
                          {token.text}
                        </span>
                      ) : (
                        <span key={i}>{token.text}</span>
                      ),
                    )}
                  </code>
                </pre>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <SkillTag key={tag} label={tag} />
        ))}
      </div>
    </SpotlightCard>
  );
}
