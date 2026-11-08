/*
 * Imagem pré-otimizada em public/images (AVIF + WebP em 320, 480, 640 e 792px).
 * O navegador escolhe o formato suportado e a largura ideal com base em `sizes`,
 * sem processamento de imagem em tempo de execução.
 */
const widths = [320, 480, 640, 792];
const srcSet = (format: "avif" | "webp") =>
  widths.map((w) => `/images/thiago-${w}.${format} ${w}w`).join(", ");

// Celular: largura total. Tablet: coluna da direita (~47%). Desktop: até 55%.
const sizes = "(min-width: 1280px) 55vw, (min-width: 768px) 47vw, 100vw";

export default function HomeImage() {
  return (
    // Celular: ocupa o espaço restante da seção (flex-1).
    // Tablet: coluna da direita, com proporção fixa, encostada na base.
    // Desktop: posicionada no canto inferior direito.
    <div className="relative mt-4 min-h-0 w-full flex-1 sm:mt-6 [@media(max-height:600px)]:aspect-[792/709] [@media(max-height:600px)]:flex-none md:mt-0 md:aspect-[792/709] md:flex-none md:self-end xl:absolute xl:right-0 xl:bottom-0 xl:h-[92%] xl:w-auto xl:max-w-[55%]">
      <picture>
        <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
        <img
          src="/images/thiago-792.webp"
          srcSet={srcSet("webp")}
          sizes={sizes}
          width={792}
          height={709}
          alt="Foto de Thiago usando um notebook"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 size-full object-contain object-bottom xl:object-right-bottom"
        />
      </picture>
    </div>
  );
}
