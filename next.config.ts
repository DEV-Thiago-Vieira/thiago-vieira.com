import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportação estática: o build gera a pasta `out/` com HTML/CSS/JS puros,
  // pronta para subir em qualquer hospedagem (ex.: public_html da Hostinger).
  output: "export",
  experimental: {
    agentFeedback: true,
  },
  // cacheComponents/partialPrefetching foram desativados: são incompatíveis com
  // `output: "export"` e o site é 100% estático, então não há perda.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
