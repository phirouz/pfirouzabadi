export const cardClass =
  "rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5";

export const subheadingClass =
  "mb-6 font-mono text-xs font-medium uppercase tracking-widest text-foreground-muted";

// The dark-theme accent is a bright sky-blue, so text on top of it needs to
// flip to a near-black tone in dark mode to keep AA contrast (white-on-sky
// fails at ~2:1); light mode's accent is dark enough for white text.
export const accentTextClass = "text-white dark:text-zinc-950";

export const btnPrimaryClass = `rounded-full bg-accent px-5 py-2.5 text-sm font-medium ${accentTextClass} transition-colors duration-200 hover:bg-accent-hover`;

export const btnSecondaryClass =
  "rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent";

export const cardHoverMotion = {
  whileHover: { y: -4 },
  whileTap: { scale: 0.985 },
  transition: { type: "spring" as const, stiffness: 400, damping: 25 },
};

export const btnMotion = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 400, damping: 25 },
};
