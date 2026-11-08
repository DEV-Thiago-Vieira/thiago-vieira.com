import { contact } from "@/config/contact";
import { site } from "@/config/site";
import { company } from "@/features/experience/data";
import { allSkills } from "@/features/skills/data";

// Dados estruturados (schema.org/Person) para o Google entender quem é o dono do site
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/opengraph-image`,
  jobTitle: site.jobTitle,
  description: site.description,
  email: `mailto:${contact.email}`,
  worksFor: { "@type": "Organization", name: company.name },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location.city,
    addressRegion: site.location.region,
    addressCountry: site.location.country,
  },
  knowsAbout: allSkills.map((skill) => skill.name),
  sameAs: [contact.github, contact.linkedin],
};

export default function PersonJsonLd() {
  return (
    <script
      type="application/ld+json"
      // Escapa "<" para evitar injeção de HTML dentro do JSON
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
