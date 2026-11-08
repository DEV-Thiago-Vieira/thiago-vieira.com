"use client";

import { useEffect, useState } from "react";
import { navLinks } from "./navLinks";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Trava o scroll da página, fecha com Esc e fecha ao chegar no breakpoint desktop
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onBreakpoint = () => desktop.matches && setOpen(false);

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  const bar =
    "absolute left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-in-out";

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="menu-mobile"
        className="relative z-10 grid size-11 cursor-pointer place-items-center rounded-full"
      >
        <span className="relative block h-5 w-7" aria-hidden="true">
          <span className={`${bar} ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`} />
          <span
            className={`${bar} top-1/2 -translate-y-1/2 ${open ? "scale-x-0 opacity-0" : "opacity-100"}`}
          />
          <span
            className={`${bar} ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[calc(100%-2px)]"}`}
          />
        </span>
      </button>

      {/* Fica atrás do conteúdo do header (z negativo), cobrindo a tela inteira */}
      <nav
        id="menu-mobile"
        aria-label="Menu mobile"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 -z-10 flex items-center justify-center bg-white transition-opacity duration-300 dark:bg-zinc-950 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              style={{ transitionDelay: open ? `${100 + index * 60}ms` : "0ms" }}
              className={`transition-all duration-500 ease-out ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-4xl font-bold tracking-tight transition-colors hover:text-sand-500 dark:hover:text-sand-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
