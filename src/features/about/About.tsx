import { LuArrowRight, LuBriefcase, LuMapPin, LuTarget } from "react-icons/lu";
import Section from "@/components/Section";
import { roles } from "@/features/experience/data";
import { allSkills } from "@/features/skills/data";
import QuickFact from "./components/QuickFact";
import StatCard from "./components/StatCard";

// Números derivados dos dados reais de Experiência e Habilidades
const technologyCount = allSkills.length;

const stats = [
  { value: "4+", label: "Anos de experiência" },
  { value: String(roles.length), label: "Cargos na mesma empresa" },
  { value: String(technologyCount), label: "Tecnologias no stack" },
];

const facts = [
  { icon: LuMapPin, label: "Localização", value: "Pacatuba, CE · Trabalho remoto" },
  {
    icon: LuBriefcase,
    label: "Atualmente",
    value: "Front-end Pleno na AltisLab, em serviço para a Intelbras",
  },
  { icon: LuTarget, label: "Aberto a", value: "Vagas de front-end, back-end ou full stack" },
];

export default function About() {
  return (
    <Section id="sobre" eyebrow="Sobre mim" title="Quem eu sou">
      {/* Texto curto de propósito: a trajetória completa fica na seção de Experiência */}
      <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          {/* Frase de abertura em destaque, equilibrando o peso visual com os cards ao lado */}
          <p className="text-2xl leading-snug font-medium tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
            Sou o Thiago, desenvolvedor de software de Pacatuba, no Ceará. Há mais de{" "}
            <span className="text-sand-500 dark:text-sand-300">4 anos</span> construo aplicações
            web — comecei como estagiário e hoje atuo como front-end pleno.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Me importo com código limpo, testes automatizados, performance e acessibilidade, e
            gosto de entender o produto de ponta a ponta para entregar com qualidade.
          </p>
          <a
            href="#experiencia"
            className="group mt-8 inline-flex items-center gap-2 font-semibold text-zinc-900 dark:text-white"
          >
            <span className="border-b-2 border-sand-300 pb-0.5 transition-colors group-hover:border-sand-500">
              Conheça minha trajetória
            </span>
            <LuArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <dl className="grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </dl>

          <dl className="divide-y divide-zinc-200 rounded-2xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
            {facts.map((fact) => (
              <QuickFact key={fact.label} {...fact} />
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
