type CompanyHeaderProps = {
  name: string;
  since: string;
  workMode: string;
};

export default function CompanyHeader({ name, since, workMode }: CompanyHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <span
        className="grid size-14 shrink-0 place-items-center rounded-2xl bg-zinc-900 text-lg font-bold text-sand-200 dark:bg-sand-200 dark:text-zinc-900"
        aria-hidden="true"
      >
        AL
      </span>
      <div>
        <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {since} · {workMode}
        </p>
      </div>
    </div>
  );
}
