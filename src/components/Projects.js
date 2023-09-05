import ProjectCard from "./ProjectCard";
import { projectData } from "../data/projectData.js";

export default function Projects() {
  const allProjects = projectData.map((project) => (
    <ProjectCard {...project} key={project.name} />
  ));

  return (
    <>
      <section
        id="projects"
        className="w-11/12 mx-auto mt-6 sm:w-3/4 lg:w-11/12 xl:w-3/4 2xl:w-[64rem] "
      >
        <h1 className="capitalize text-4xl font-semibold mb-8 text-center dark:text-[#ffb703] text-[#3a4151]">
          my <span className="text-green dark:text-white">projects</span>
        </h1>
        <div className="flex flex-col justify-center items-center">
          {allProjects}
        </div>
      </section>
      <a
        href="https://github.com/sahilsinhmar"
        target="_blank"
        rel="noreferrer"
        className="block text-center w-28 mx-auto mb-8 py-2 rounded-full border-2 border-gray-700 text-[17px] font-medium hover:bg-gray-700 hover:text-white transition-all duration-200 dark:border-mustard dark:text-mustard dark:hover:bg-mustard dark:hover:text-white dark:bg-[#ffb703]  "
      >
        See All
      </a>
    </>
  );
}
