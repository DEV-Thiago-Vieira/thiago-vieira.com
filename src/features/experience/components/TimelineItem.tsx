import type { Role } from "../data";

export default function TimelineItem({
  chapter,
  title,
  level,
  period,
  duration,
  location,
  client,
  description,
  skills,
  current = false,
}: Role) {
  return (
    <li className="relative">
      {/* Marcador da linha do tempo; o cargo atual ganha destaque com animação */}
      <span className="absolute top-1 -left-[2.4rem] flex size-3" aria-hidden="true">
        {current && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-sand-500 opacity-60 dark:bg-sand-300" />
        )}
        <span
          className={`relative inline-flex size-3 rounded-full ring-4 ring-sand-50 dark:ring-zinc-900 ${
            current ? "bg-sand-500 dark:bg-sand-300" : "bg-sand-300 dark:bg-zinc-600"
          }`}
        />
      </span>

      <p className="text-xs font-semibold tracking-widest text-sand-500 uppercase dark:text-sand-300">
        {chapter}
      </p>

      <h4 className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xl font-semibold">
        {title}
        {level && <span className="font-normal text-zinc-500">({level})</span>}
        {current && (
          <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/40 dark:text-green-300">
            Atual
          </span>
        )}
      </h4>

      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
        {period}
        {duration && ` · ${duration}`}
        {location && ` · ${location}`}
      </p>

      {client && (
        <p className="mt-3 inline-flex items-center gap-2 rounded-lg border border-sand-200 bg-white px-3 py-1.5 text-sm dark:border-zinc-700 dark:bg-zinc-950">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 shrink-0 text-sand-500 dark:text-sand-300"
            aria-hidden="true"
          >
            <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
          </svg>
          <span>
            Serviço terceirizado para a <strong className="font-semibold">{client}</strong>
          </span>
        </p>
      )}

      <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologias e competências">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-sand-200 bg-white px-3 py-1 text-xs font-medium dark:border-zinc-700 dark:bg-zinc-950"
          >
            {skill}
          </li>
        ))}
      </ul>
    </li>
  );
}
