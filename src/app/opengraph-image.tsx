import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/config/site";

// Necessário para a exportação estática (output: "export")
export const dynamic = "force-static";

// Imagem exibida ao compartilhar o link (LinkedIn, WhatsApp, Slack...).
// Gerada no build a partir da foto original (PNG, formato suportado pelo gerador).
export const alt = `${site.name} — ${site.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const assets = join(process.cwd(), "assets");
const photo = await readFile(join(assets, "originals/improved-thiago.png"), "base64");
const photoSrc = `data:image/png;base64,${photo}`;
// Mesma fonte do site (Geist, licença OFL), para o texto ter o peso correto
const geistRegular = await readFile(join(assets, "fonts/Geist-400.ttf"));
const geistBold = await readFile(join(assets, "fonts/Geist-800.ttf"));

export default function OpengraphImage() {
  const { colors } = site;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#faf6f2",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 0 0 72px",
            width: 620,
            height: "100%",
          }}
        >
          <div style={{ display: "flex", fontSize: 44, fontWeight: 800, color: colors.dark }}>
            T<span style={{ color: colors.sandDark }}>/</span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 36,
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -3,
              color: colors.dark,
            }}
          >
            {site.name}
          </div>
          <div style={{ display: "flex", marginTop: 16, fontSize: 40, fontWeight: 700, color: colors.sandDark }}>
            {site.jobTitle}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 26, color: "#52525b" }}>
            React · Next.js · Vue · Spring Boot
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 40,
              padding: "12px 22px",
              borderRadius: 999,
              background: colors.dark,
              color: "#ffffff",
              fontSize: 24,
              alignSelf: "flex-start",
            }}
          >
            <div
              style={{ display: "flex", width: 14, height: 14, borderRadius: 999, background: "#22c55e", marginRight: 12 }}
            />
            Aberto a novas oportunidades
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element -- elemento do gerador de imagem, não do DOM */}
        <img
          src={photoSrc}
          alt=""
          width={622}
          height={557}
          style={{ position: "absolute", right: 0, bottom: 0 }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
        { name: "Geist", data: geistBold, weight: 800, style: "normal" },
      ],
    },
  );
}
