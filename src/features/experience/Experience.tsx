import Section from "@/components/Section";
import CompanyHeader from "./components/CompanyHeader";
import TimelineItem from "./components/TimelineItem";
import { company, roles } from "./data";

export default function Experience() {
  return (
    <Section id="experiencia" eyebrow="Carreira" title="Minha trajetória" muted>
      <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        Uma história construída em um só lugar: entrei na {company.name} como estagiário em
        2022 e, a cada etapa, assumi mais responsabilidade — da visão full stack à
        especialização em front-end.
      </p>

      <div className="mt-12 max-w-3xl">
        <CompanyHeader {...company} />

        <ol className="mt-8 ml-1.5 space-y-12 border-l border-sand-200 pl-8 dark:border-zinc-700">
          {roles.map((role) => (
            <TimelineItem key={`${role.title}-${role.period}`} {...role} />
          ))}
        </ol>
      </div>
    </Section>
  );
}
