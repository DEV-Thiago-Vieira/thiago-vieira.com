import type { IconType } from "react-icons";

type QuickFactProps = {
  icon: IconType;
  label: string;
  value: string;
};

export default function QuickFact({ icon: Icon, label, value }: QuickFactProps) {
  return (
    <div className="flex items-center gap-4 px-5 py-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sand-100 text-sand-600 dark:bg-zinc-800 dark:text-sand-300">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <dt className="text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
          {label}
        </dt>
        <dd className="font-medium">{value}</dd>
      </div>
    </div>
  );
}
