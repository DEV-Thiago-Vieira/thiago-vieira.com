import type { MetadataRoute } from "next";
import { site } from "@/config/site";

// Necessário para a exportação estática (output: "export")
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
