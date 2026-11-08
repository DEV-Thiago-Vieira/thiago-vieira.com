// Dados do site usados em SEO (metadata, Open Graph, sitemap, robots e JSON-LD).
// A URL pode ser sobrescrita pela variável de ambiente NEXT_PUBLIC_SITE_URL.
export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://thiago-vieira.com").replace(/\/$/, ""),
  name: "Thiago Vieira",
  shortName: "Thiago",
  title: "Thiago Vieira | Desenvolvedor Full Stack",
  jobTitle: "Desenvolvedor Full Stack",
  description:
    "Thiago Vieira, desenvolvedor full stack com 4+ anos de experiência em React, Next.js, Vue, TypeScript e Spring Boot. Aberto a vagas de front-end, back-end e full stack.",
  locale: "pt_BR",
  location: { city: "Pacatuba", region: "CE", country: "BR" },
  keywords: [
    "Thiago Vieira",
    "desenvolvedor full stack",
    "desenvolvedor front-end",
    "desenvolvedor back-end",
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Java",
    "Spring Boot",
    "portfólio",
    "Pacatuba",
    "Fortaleza",
    "Ceará",
  ],
  // Cores da identidade (bege extraído da foto + quase preto)
  colors: { dark: "#18181b", sand: "#d5b59c", sandLight: "#e2d2c4", sandDark: "#b08b6e" },
};
