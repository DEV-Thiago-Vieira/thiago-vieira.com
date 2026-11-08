import { SiGithub } from "react-icons/si";
import Section from "@/components/Section";
import { contact } from "@/config/contact";
import ProjectCard from "./components/ProjectCard";
import { projects } from "./data";

export default function Projects() {
  return (
    <Section id="projetos" eyebrow="Portfólio" title="Projetos" muted>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Projetos pessoais para colocar meu stack em prática: dois full stack, com ecossistemas
          diferentes, e um com foco em back-end. O primeiro já está em construção; acompanhe
          pelo GitHub.
        </p>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-2 self-start rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white sm:self-auto dark:border-zinc-700 dark:hover:bg-zinc-800"
        >
          <SiGithub className="size-4" aria-hidden="true" />
          Ver GitHub
        </a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
