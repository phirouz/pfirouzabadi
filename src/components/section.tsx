import { Reveal } from "@/components/reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="mb-12">
            <p className="mb-2 font-mono text-sm font-medium uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h2>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
