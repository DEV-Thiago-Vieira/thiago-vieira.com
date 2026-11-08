type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl border border-zinc-200 px-2 py-5 text-center sm:p-6 dark:border-zinc-800">
      <dt className="text-xs leading-snug text-zinc-500 sm:text-sm dark:text-zinc-400">{label}</dt>
      <dd className="order-first text-3xl font-bold sm:text-4xl">{value}</dd>
    </div>
  );
}
