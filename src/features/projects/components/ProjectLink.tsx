import type { IconType } from "react-icons";

type ProjectLinkProps = {
  href: string;
  label: string;
  icon: IconType;
  variant?: "primary" | "secondary";
};

export default function ProjectLink({ href, label, icon: Icon, variant = "secondary" }: ProjectLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
      : "border border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors ${styles}`}
    >
      <Icon className="size-4" aria-hidden="true" />
      {label}
    </a>
  );
}
