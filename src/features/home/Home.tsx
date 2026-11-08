import SocialLinks from "@/components/SocialLinks";
import AvailabilityBadge from "./components/AvailabilityBadge";
import HomeActions from "./components/HomeActions";
import HomeImage from "./components/HomeImage";
import ScrollCue from "./components/ScrollCue";

/*
 * Layout responsivo da Home:
 * - Celular (< md): ocupa a altura visível menos o header e uma "espiadinha" (~10% da tela),
 *   para o início da próxima seção aparecer e indicar que há mais conteúdo.
 *   Texto, botões e redes sociais mantêm o tamanho e a imagem ocupa o espaço que sobra.
 *   Em telas muito baixas (< 600px de altura) a seção usa altura automática para a foto
 *   não ficar minúscula.
 * - Tablet (md até xl): seção compacta em duas colunas (altura pelo conteúdo),
 *   deixando a próxima seção aparecer na primeira tela.
 * - Desktop (xl+): tela cheia, texto à esquerda e imagem no canto inferior direito,
 *   com um indicador "Role para ver mais" (ScrollCue) sinalizando o conteúdo abaixo.
 */
export default function Home() {
  return (
    <section
      id="inicio"
      className="relative flex h-[calc(100svh-5rem-clamp(3.5rem,10svh,6rem))] min-h-[26rem] [@media(max-height:600px)]:h-auto flex-col overflow-hidden md:grid md:h-auto md:min-h-0 md:grid-cols-[1.15fr_1fr] md:items-end xl:block xl:h-[calc(100svh-5rem)] xl:min-h-[40rem]"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl shrink-0 items-center px-5 pt-2 sm:px-6 sm:pt-6 md:self-center md:py-14 md:pr-4 md:pl-12 xl:h-full xl:px-12 xl:pt-0 xl:pb-20">
        <div className="flex w-full flex-col items-start xl:max-w-xl">
          <AvailabilityBadge />

          {/* Tamanho fluido: limitado pela largura e pela altura da tela */}
          <h1 className="mt-4 text-[min(calc(19vw-8px),8.5svh,5.5rem)] leading-[0.95] font-bold tracking-tighter sm:mt-8 md:mt-6 md:text-[min(8vw,5rem)] xl:mt-8 xl:text-[min(7.5rem,13svh)]">
            <span className="whitespace-nowrap">Olá, eu sou</span>
            <br />
            <span className="text-sand-500 dark:text-sand-300">Thiago.</span>
          </h1>

          <p className="mt-4 max-w-lg text-lg leading-snug [@media(max-height:700px)]:text-base text-zinc-600 sm:mt-6 sm:text-2xl md:text-xl lg:text-2xl xl:mt-8 xl:max-w-md dark:text-zinc-400">
            Desenvolvedor de Software Full-Stack construindo aplicações web
            escaláveis.
          </p>

          <HomeActions />

          <SocialLinks className="mt-10 hidden md:flex xl:mt-12" />
        </div>
      </div>

      <HomeImage />

      <SocialLinks className="shrink-0 justify-center py-4 sm:py-8 md:hidden" />

      <ScrollCue />
    </section>
  );
}
