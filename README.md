<div align="center">

<img src="public/images/thiago-480.webp" alt="Thiago Vieira" width="220" />

# Thiago Vieira · Portfólio

**Desenvolvedor Full Stack** — React · Next.js · Vue · TypeScript · Spring Boot

[![Site](https://img.shields.io/badge/Site-thiago--vieira.com-b08b6e?style=for-the-badge&logo=googlechrome&logoColor=white)](https://thiago-vieira.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-dev--thiago--vieira-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dev-thiago-vieira/)

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

</div>

---

## ✨ Destaques

- ⚡ **100% estático** — `output: "export"` gera HTML/CSS/JS puros em `out/`, hospedável em qualquer lugar.
- 📝 **Conteúdo orientado a dados** — projetos, habilidades e experiência são objetos TypeScript tipados.
- 🔍 **SEO completo** — metadata, Open Graph gerado no build, sitemap, robots e JSON-LD.
- 🌗 **Tema claro/escuro**, layout responsivo e imagens otimizadas em AVIF/WebP.

## 🚀 Como rodar

Pré-requisitos: **Node.js 20.9+** e **pnpm**.

```bash
git clone https://github.com/DEV-Thiago-Vieira/portfolio.git
cd portfolio
pnpm install
pnpm dev        # http://localhost:3000
```

| Comando | Descrição |
|---|---|
| `pnpm dev` | Servidor de desenvolvimento |
| `pnpm build` | Gera o site estático em `out/` |
| `pnpm lint` | Executa o ESLint |

> Opcional: defina `NEXT_PUBLIC_SITE_URL` no `.env.local` para alterar a URL usada no SEO (padrão: `https://thiago-vieira.com`).

## ✏️ Editando o conteúdo

| Para alterar… | Edite |
|---|---|
| Nome, cargo, descrição e SEO | [`src/config/site.ts`](src/config/site.ts) |
| E-mail, redes sociais e WhatsApp | [`src/config/contact.ts`](src/config/contact.ts) |
| Projetos | [`src/features/projects/data.ts`](src/features/projects/data.ts) |
| Habilidades | [`src/features/skills/data.ts`](src/features/skills/data.ts) |
| Experiência | [`src/features/experience/data.ts`](src/features/experience/data.ts) |

Cada seção do site fica em sua própria pasta dentro de [`src/features/`](src/features/).

## 🌐 Deploy

Rode `pnpm build` e envie o conteúdo de `out/` para o `public_html/` da hospedagem (Hostinger). O [`.htaccess`](public/.htaccess) incluído força HTTPS, configura a página 404 e o cache do navegador.

---

<div align="center">

📬 **Aberto a novas oportunidades** — [contact@thiago-vieira.com](mailto:contact@thiago-vieira.com)

<sub>© Thiago Vieira. O código é público para referência; o conteúdo pessoal (fotos e textos) pertence ao autor.</sub>

</div>
