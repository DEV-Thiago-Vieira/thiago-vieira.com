import type { IconType } from "react-icons";
import { LuServerCog, LuSquareKanban, LuWallet } from "react-icons/lu";

export type ProjectStatus = "planejado" | "em-desenvolvimento" | "concluido";

export type Project = {
  title: string;
  category: string;
  status: ProjectStatus;
  description: string;
  highlights: string[];
  // Nomes das tecnologias; os ícones vêm da seção de Habilidades (ou de techIcons.ts)
  stack: string[];
  // Ícone exibido na capa enquanto não houver imagem
  icon: IconType;
  // Caminho em /public para um print do projeto (ex.: "/images/projects/candidaturas.webp")
  image?: string;
  repoUrl?: string;
  demoUrl?: string;
};

/*
 * Projetos do portfólio. Conforme avançarem, atualize o status
 * ("planejado" → "em-desenvolvimento" → "concluido"), repoUrl, demoUrl e image.
 */
export const projects: Project[] = [
  {
    title: "Rastreador de Candidaturas",
    category: "Full stack · Next.js",
    status: "em-desenvolvimento",
    description:
      "Aplicação para organizar candidaturas a vagas em um quadro kanban, com etapas, anotações e métricas do processo seletivo.",
    highlights: [
      "Next.js com App Router, Server Components e Server Actions",
      "Prisma + PostgreSQL, autenticação e quadro arrastável",
      "Testes E2E com Cypress, CI/CD e deploy na Vercel",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Cypress",
      "Vercel",
    ],
    icon: LuSquareKanban,
  },
  {
    title: "Controle Financeiro",
    category: "Full stack · Spring Boot + Vue",
    status: "planejado",
    description:
      "Sistema de finanças pessoais para registrar receitas e despesas, definir metas por categoria e acompanhar a evolução em gráficos.",
    highlights: [
      "Front-end em Vue 3 com Vuetify, Pinia e gráficos interativos",
      "API REST em Spring Boot com Spring Security (JWT) e PostgreSQL",
      "Ambiente completo com Docker Compose e testes com Jest",
    ],
    stack: [
      "Vue.js",
      "TypeScript",
      "Vuetify",
      "Pinia",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Docker",
    ],
    icon: LuWallet,
  },
  {
    title: "API de Pedidos e Estoque",
    category: "Back-end · Java",
    status: "planejado",
    description:
      "API para e-commerce que processa pedidos, controla estoque e dispara eventos de forma assíncrona, com foco em confiabilidade e performance.",
    highlights: [
      "Spring Boot em camadas, PostgreSQL e migrations com Flyway",
      "Mensageria com RabbitMQ e cache com Redis",
      "Testes com JUnit, documentação OpenAPI/Swagger e CI/CD",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Flyway",
      "RabbitMQ",
      "Redis",
      "JUnit",
      "Swagger",
      "Docker",
    ],
    icon: LuServerCog,
  },
];
