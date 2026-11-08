import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import { LuCode, LuInfinity, LuPlug, LuServer, LuShieldCheck, LuWrench } from "react-icons/lu";
import {
  SiCss,
  SiCypress,
  SiDocker,
  SiElectron,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiRobotframework,
  SiSelenium,
  SiSpringboot,
  SiTypescript,
  SiVuedotjs,
  SiVuetify,
} from "react-icons/si";

export type Skill = {
  name: string;
  icon: IconType;
  // Cor da marca; sem cor = usa a cor do texto (adapta ao tema escuro)
  color?: string;
  // Em uso no cargo atual (Front-end Pleno)
  core?: boolean;
};

export type SkillCategory = {
  title: string;
  description: string;
  icon: IconType;
  skills: Skill[];
};

// Todas as tecnologias abaixo vêm da trajetória descrita na seção de Experiência.
export const frontEnd: SkillCategory = {
  title: "Front-end",
  description: "Minha principal área de atuação, do primeiro layout à arquitetura da aplicação.",
  icon: LuCode,
  skills: [
    { name: "React", icon: SiReact, color: "#149ECA", core: true },
    { name: "Next.js", icon: SiNextdotjs, core: true },
    { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6", core: true },
    { name: "JavaScript", icon: SiJavascript, color: "#E8C400" },
    { name: "Vuetify", icon: SiVuetify, color: "#1867C0" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss, color: "#663399" },
    { name: "Electron", icon: SiElectron, color: "#47848F" },
  ],
};

export const categories: SkillCategory[] = [
  {
    title: "Back-end",
    description: "APIs e regras de negócio em aplicações completas.",
    icon: LuServer,
    skills: [
      { name: "Java", icon: FaJava, color: "#E76F00" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "APIs REST", icon: LuPlug },
    ],
  },
  {
    title: "Testes e qualidade",
    description: "Automação de testes para entregar com segurança.",
    icon: LuShieldCheck,
    skills: [
      { name: "Cypress", icon: SiCypress },
      { name: "Jest", icon: SiJest, color: "#C21325", core: true },
      { name: "Robot Framework", icon: SiRobotframework },
      { name: "Selenium", icon: SiSelenium, color: "#43B02A" },
    ],
  },
  {
    title: "Ferramentas e DevOps",
    description: "Do design ao deploy.",
    icon: LuWrench,
    skills: [
      { name: "Docker", icon: SiDocker, color: "#2496ED", core: true },
      { name: "CI/CD", icon: LuInfinity, core: true },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];

// Lista plana de todas as tecnologias (usada para contagem e para buscar ícones por nome)
export const allSkills: Skill[] = [frontEnd, ...categories].flatMap((category) => category.skills);
