"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#career", label: "Career" },
  { href: "#projects", label: "Projects" },
  { href: "#goals", label: "Goals" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-heading text-sm font-semibold tracking-tight text-foreground">
          S.Parsa<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`relative py-1 text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-accent ${
                  isActive ? "text-accent after:scale-x-100" : "text-foreground-muted"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-all duration-200 hover:border-accent hover:text-accent active:scale-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              className="size-4.5"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out sm:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden border-b border-border bg-background px-6 pb-6">
          <div className="flex flex-col gap-4 pt-2">
            {links.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-accent ${
                    isActive ? "text-accent" : "text-foreground-muted"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
