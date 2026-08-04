import { MotionLink } from "@/components/motion-link";
import { btnMotion, btnPrimaryClass, btnSecondaryClass } from "@/lib/ui";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm font-medium uppercase tracking-widest text-accent">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-foreground-muted sm:text-lg">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <MotionLink href="/" className={btnPrimaryClass} {...btnMotion}>
          Back to home
        </MotionLink>
        <MotionLink href="/#projects" className={btnSecondaryClass} {...btnMotion}>
          View projects
        </MotionLink>
      </div>
    </main>
  );
}
