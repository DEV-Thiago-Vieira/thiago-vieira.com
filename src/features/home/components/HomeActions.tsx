// Celular: tamanho fluido para os dois botões caberem lado a lado até em telas de 320px.
// Tablet: botões menores para caber na coluna de texto. Desktop: tamanho cheio.
const base =
  "flex items-center gap-2 rounded-full px-[clamp(0.75rem,4vw,1.5rem)] py-3 text-[clamp(0.75rem,3.6vw,1rem)] font-medium whitespace-nowrap transition-colors sm:gap-3 sm:px-9 sm:py-4 sm:text-lg md:px-4 md:py-3 md:text-[0.9375rem] lg:px-7 lg:py-3.5 lg:text-lg xl:px-9 xl:py-4";

export default function HomeActions() {
  return (
    <div className="mt-6 flex flex-wrap gap-[clamp(0.5rem,3vw,0.75rem)] sm:mt-10 sm:gap-8 md:mt-8 md:gap-3 lg:gap-6 xl:mt-12 xl:gap-8">
      <a
        href="#projetos"
        className={`${base} bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200`}
      >
        Ver Projetos
        <span aria-hidden="true">→</span>
      </a>
      <a
        href="#contato"
        className={`${base} border border-zinc-400 hover:bg-zinc-100 dark:border-zinc-600 dark:hover:bg-zinc-800`}
      >
        Vamos Conversar
      </a>
    </div>
  );
}
