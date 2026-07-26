export function SkillTag({ label }: { label: string }) {
  return (
    <span className="rounded-md border border-border bg-background-alt px-2.5 py-1 font-mono text-xs text-foreground-muted transition-colors hover:border-accent hover:text-accent">
      {label}
    </span>
  );
}
