import { getTechIcon } from "../techIcons";

export default function TechTag({ name }: { name: string }) {
  const tech = getTechIcon(name);
  const Icon = tech?.icon;

  return (
    <li className="flex items-center gap-1.5 rounded-full border border-zinc-200 px-2.5 py-1 text-xs font-medium dark:border-zinc-700">
      {Icon && (
        <Icon
          className="size-3.5 shrink-0"
          style={tech?.color ? { color: tech.color } : undefined}
          aria-hidden="true"
        />
      )}
      {name}
    </li>
  );
}
