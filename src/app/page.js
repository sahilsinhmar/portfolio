import Skills from "@/components/Skills";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col items-center" id="home">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
