import type { Project } from "../data";

const statusLabel = {
  planejado: { text: "Planejado", dot: "bg-zinc-400" },
  "em-desenvolvimento": { text: "Em desenvolvimento", dot: "bg-amber-500" },
  concluido: { text: "Concluído", dot: "bg-green-500" },
} as const;

type ProjectCoverProps = Pick<Project, "title" | "status" | "icon" | "image">;

export default function ProjectCover({ title, status, icon: Icon, image }: ProjectCoverProps) {
  const label = statusLabel[status];

  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-sand-100 to-sand-200 dark:from-zinc-800 dark:to-zinc-900">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element -- prints otimizados manualmente em /public
        <img
          src={image}
          alt={`Captura de tela do projeto ${title}`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <>
          {/* Padrão pontilhado decorativo enquanto não há imagem */}
          <div
            className="absolute inset-0 opacity-40 [background-image:radial-gradient(var(--color-sand-500)_1px,transparent_1px)] [background-size:16px_16px] dark:opacity-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid size-16 place-items-center rounded-2xl bg-white text-sand-600 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 dark:bg-zinc-950 dark:text-sand-300">
              <Icon className="size-8" aria-hidden="true" />
            </span>
          </div>
        </>
      )}

      <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-zinc-900 shadow-sm backdrop-blur dark:bg-zinc-950/90 dark:text-zinc-100">
        <span className={`size-1.5 rounded-full ${label.dot}`} aria-hidden="true" />
        {label.text}
      </span>
    </div>
  );
}
