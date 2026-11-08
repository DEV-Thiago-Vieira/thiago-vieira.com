import type { SkillCategory } from "../data";
import SkillTile from "./SkillTile";

type SkillCategoryCardProps = SkillCategory & {
  // Classes do grid de tiles (a categoria principal usa mais colunas)
  gridClassName?: string;
  className?: string;
};

export default function SkillCategoryCard({
  title,
  description,
  icon: Icon,
  skills,
  gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-1",
  className = "",
}: SkillCategoryCardProps) {
  return (
    <article
      className={`rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950 ${className}`}
    >
      <header className="flex items-start gap-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-zinc-900 text-sand-200 dark:bg-sand-200 dark:text-zinc-900">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
        </div>
      </header>

      <ul className={`mt-6 grid gap-3 ${gridClassName}`}>
        {skills.map((skill) => (
          <SkillTile key={skill.name} {...skill} />
        ))}
      </ul>
    </article>
  );
}
