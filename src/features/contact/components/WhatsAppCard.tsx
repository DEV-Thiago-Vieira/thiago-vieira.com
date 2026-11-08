import { LuArrowUpRight } from "react-icons/lu";
import { SiWhatsapp } from "react-icons/si";

type WhatsAppCardProps = {
  href: string;
  display: string;
};

// Canal preferencial: o card inteiro é clicável e tem o maior destaque visual.
export default function WhatsAppCard({ href, display }: WhatsAppCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conversar no WhatsApp (contato preferencial): ${display}`}
      className="group relative flex items-center gap-3 rounded-2xl bg-[#25D366] p-4 text-zinc-950 shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#25D366]/30 sm:gap-4 sm:p-6"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-zinc-950/10 sm:size-12">
        <SiWhatsapp className="size-5 sm:size-6" aria-hidden="true" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium">
          WhatsApp
          <span className="rounded-full bg-zinc-950 px-2 py-0.5 text-[0.625rem] font-semibold tracking-wider text-[#25D366] uppercase">
            Preferencial
          </span>
        </span>
        {/* Tamanho fluido no celular para o número caber inteiro em uma linha */}
        <span className="mt-0.5 block text-[clamp(0.875rem,4.4vw,1.125rem)] font-bold tracking-tight whitespace-nowrap sm:text-xl lg:text-lg xl:text-xl">
          {display}
        </span>
      </span>

      {/* Texto "Conversar" só quando há espaço; senão, apenas a seta */}
      <span className="hidden items-center gap-1 text-sm font-semibold sm:flex lg:hidden xl:flex">
        Conversar
        <LuArrowUpRight
          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
      <LuArrowUpRight
        className="hidden size-5 shrink-0 min-[400px]:block sm:hidden lg:block xl:hidden"
        aria-hidden="true"
      />
    </a>
  );
}
