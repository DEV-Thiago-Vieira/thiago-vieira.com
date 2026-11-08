import type { Skill } from "../data";

export default function SkillTile({ name, icon: Icon, color, core = false }: Skill) {
  return (
    <li
      className={`group flex items-center gap-3 rounded-xl border px-4 py-3 transition-all hover:-translate-y-0.5 hover:shadow-md ${
        core
          ? "border-sand-300 bg-sand-50 dark:border-sand-500/50 dark:bg-zinc-900"
          : "border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
      }`}
    >
      <Icon
        className="size-6 shrink-0 transition-transform group-hover:scale-110"
        style={color ? { color } : undefined}
        aria-hidden="true"
      />
      <span className="min-w-0 truncate text-sm font-medium">{name}</span>
      {core && (
        <span
          className="ml-auto size-2 shrink-0 rounded-full bg-sand-500 dark:bg-sand-300"
          title="Em uso no cargo atual"
          aria-label="Em uso no cargo atual"
        />
      )}
    </li>
  );
}
