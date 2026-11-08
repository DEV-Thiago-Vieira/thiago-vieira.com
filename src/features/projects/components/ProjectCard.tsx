import { LuArrowUpRight, LuCheck, LuHammer } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import type { Project } from "../data";
import ProjectCover from "./ProjectCover";
import ProjectLink from "./ProjectLink";
import TechTag from "./TechTag";

export default function ProjectCard({
  title,
  category,
  status,
  description,
  highlights,
  stack,
  icon,
  image,
  repoUrl,
  demoUrl,
}: Project) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
      <ProjectCover title={title} status={status} icon={icon} image={image} />

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold tracking-widest text-sand-500 uppercase dark:text-sand-300">
          {category}
        </p>
        <h3 className="mt-2 text-xl font-bold tracking-tight">{title}</h3>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{description}</p>

        <ul className="mt-5 space-y-2 text-sm">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <LuCheck className="mt-0.5 size-4 shrink-0 text-sand-500 dark:text-sand-300" aria-hidden="true" />
              <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias">
          {stack.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </ul>

        {/* mt-auto mantém o rodapé alinhado na base de todos os cards */}
        <div className="mt-auto pt-6">
          {repoUrl || demoUrl ? (
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {repoUrl && <ProjectLink href={repoUrl} label="Código" icon={SiGithub} />}
              {demoUrl && (
                <ProjectLink href={demoUrl} label="Ver demo" icon={LuArrowUpRight} variant="primary" />
              )}
            </div>
          ) : (
            <p className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-zinc-300 px-4 py-2.5 text-sm font-medium text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
              <LuHammer className="size-4" aria-hidden="true" />
              Código e demo em breve
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
