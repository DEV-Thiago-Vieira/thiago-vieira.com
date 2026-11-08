export type Role = {
  chapter: string;
  title: string;
  level?: string;
  period: string;
  duration?: string;
  location?: string;
  // Cliente para o qual o serviço é prestado (ex.: alocação terceirizada)
  client?: string;
  description: string;
  skills: string[];
  current?: boolean;
};

export const company = {
  name: "AltisLab",
  since: "Desde jul. de 2022",
  workMode: "Remoto",
};

// Ordem cronológica: a trajetória é contada do começo até hoje.
export const roles: Role[] = [
  {
    chapter: "O começo",
    title: "Estagiário",
    period: "jul. de 2022 — dez. de 2022",
    duration: "6 meses",
    location: "Fortaleza, Ceará",
    description:
      "Meu primeiro passo profissional. Na AltisLab tive o primeiro contato com o dia a dia de um time de desenvolvimento e com a base que levo até hoje: código limpo e bem estruturado.",
    skills: ["HTML5", "Clean Code"],
  },
  {
    chapter: "Visão do todo",
    title: "Desenvolvedor Full Stack",
    level: "Júnior",
    period: "jan. de 2023 — dez. de 2023",
    duration: "1 ano",
    description:
      "Efetivado, passei a construir aplicações web completas: do design no Figma ao front-end em Vue com Vuetify, até o back-end com Spring Boot, Java e PostgreSQL. Entender o produto de ponta a ponta moldou a forma como desenvolvo.",
    skills: ["Figma", "Vue", "Vuetify", "HTML/CSS/JS", "Spring Boot", "Java", "PostgreSQL"],
  },
  {
    chapter: "Especialização",
    title: "Desenvolvedor Front-end",
    level: "Júnior",
    period: "jan. de 2024 — dez. de 2025",
    duration: "2 anos",
    description:
      "Passei a me dedicar ao front-end. Desenvolvi interfaces responsivas e novas funcionalidades com Vue.js, Electron e TypeScript, cuidei da manutenção e evolução de sistemas e automatizei processos e testes com Selenium.",
    skills: ["Vue.js", "Electron", "TypeScript", "JavaScript", "HTML5", "CSS3", "Selenium"],
  },
  {
    chapter: "Hoje",
    title: "Desenvolvedor Front-end",
    level: "Pleno",
    period: "jan. de 2026 — o momento",
    client: "Intelbras",
    description:
      "Aprofundo React, Vue, TypeScript e Next.js com foco em evolução técnica e qualidade: testes automatizados com Robot Framework, Cypress e Jest, Docker e CI/CD, performance, acessibilidade, arquitetura front-end e integração com APIs REST.",
    skills: [
      "React",
      "Next.js",
      "Vue",
      "TypeScript",
      "Cypress",
      "Jest",
      "Robot Framework",
      "Docker",
      "CI/CD",
      "Acessibilidade",
    ],
    current: true,
  },
];
