import type { IconType } from "react-icons";
import {
  SiFlyway,
  SiJunit5,
  SiPinia,
  SiPrisma,
  SiRabbitmq,
  SiRedis,
  SiSpringsecurity,
  SiSwagger,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { allSkills } from "@/features/skills/data";

type TechIcon = { icon: IconType; color?: string };

// Tecnologias usadas nos projetos que não estão na seção de Habilidades
// (sem cor = usa a cor do texto, adaptando ao tema escuro)
const extraTech: Record<string, TechIcon> = {
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  Prisma: { icon: SiPrisma },
  Vercel: { icon: SiVercel },
  Pinia: { icon: SiPinia, color: "#E8B500" },
  "Spring Security": { icon: SiSpringsecurity, color: "#6DB33F" },
  Flyway: { icon: SiFlyway, color: "#CC0200" },
  RabbitMQ: { icon: SiRabbitmq, color: "#FF6600" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  JUnit: { icon: SiJunit5, color: "#25A162" },
  Swagger: { icon: SiSwagger, color: "#85EA2D" },
};

// Busca o ícone de uma tecnologia pelo nome; retorna undefined se não houver
export function getTechIcon(name: string): TechIcon | undefined {
  const skill = allSkills.find((s) => s.name === name);
  if (skill) return { icon: skill.icon, color: skill.color };
  return extraTech[name];
}
