import { navLinks } from "./navLinks";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 h-20 bg-white dark:bg-zinc-950">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-5 sm:px-6 md:px-12">
        <a href="#inicio" className="text-3xl font-bold tracking-tight" aria-label="Início">
          T<span className="text-sand-500 dark:text-sand-300">/</span>
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-10 text-sm text-zinc-600 dark:text-zinc-400">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-zinc-900 dark:hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
