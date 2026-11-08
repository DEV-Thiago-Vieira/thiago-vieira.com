export default function AvailabilityBadge() {
  return (
    <span className="inline-flex items-center gap-3 rounded-full bg-sand-100 px-4 py-2 text-sm font-medium sm:text-base dark:bg-zinc-800">
      <span className="size-2.5 rounded-full bg-green-500" aria-hidden="true" />
      Disponível para trabalho
    </span>
  );
}
