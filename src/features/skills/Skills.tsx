import Section from "@/components/Section";
import SkillCategoryCard from "./components/SkillCategoryCard";
import { categories, frontEnd } from "./data";

export default function Skills() {
  return (
    <Section id="habilidades" eyebrow="Habilidades" title="Stack e competências">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Tecnologias consolidadas em mais de 4 anos de experiência — da visão full stack à
          especialização em front-end.
        </p>
        <p className="flex shrink-0 items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="size-2 rounded-full bg-sand-500 dark:bg-sand-300" aria-hidden="true" />
          Em uso no cargo atual
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <SkillCategoryCard
          {...frontEnd}
          className="lg:col-span-3"
          gridClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
        />
        {categories.map((category) => (
          <SkillCategoryCard key={category.title} {...category} />
        ))}
      </div>
    </Section>
  );
}
