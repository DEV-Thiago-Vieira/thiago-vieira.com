import { LuArrowDown } from "react-icons/lu";

// Indicador de rolagem no desktop: a Home ocupa a tela inteira, então sinalizamos que há
// mais conteúdo. Fica alinhado à coluna de texto para não sobrepor a foto.
export default function ScrollCue() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 hidden xl:block">
      <div className="mx-auto max-w-7xl px-12">
        <a
          href="#sobre"
          className="group pointer-events-auto inline-flex items-center gap-3 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          <span className="grid size-9 place-items-center rounded-full border border-zinc-300 transition-colors group-hover:border-zinc-900 dark:border-zinc-700 dark:group-hover:border-white">
            <LuArrowDown className="size-4 animate-bounce motion-reduce:animate-none" aria-hidden="true" />
          </span>
          Role para ver mais
        </a>
      </div>
    </div>
  );
}
