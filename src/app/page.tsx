import { BackToTop } from "@/components/back-to-top";
import { NavBar } from "@/components/nav-bar";
import { About } from "@/components/sections/about";
import { Career } from "@/components/sections/career";
import { Goals } from "@/components/sections/goals";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Reflections } from "@/components/sections/reflections";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Career />
        <Projects />
        <Reflections />
        <Goals />
      </main>
      <BackToTop />
    </>
  );
}
