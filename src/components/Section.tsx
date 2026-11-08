import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  muted?: boolean;
};

export default function Section({ id, eyebrow, title, children, muted = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 pt-8 pb-16 sm:py-28 ${muted ? "bg-sand-50 dark:bg-zinc-900" : ""}`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-12">
        <p className="text-sm font-semibold tracking-widest text-sand-500 uppercase dark:text-sand-300">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
