import { LuMapPin } from "react-icons/lu";
import { contact, whatsappUrl } from "@/config/contact";
import EmailCard from "./EmailCard";
import WhatsAppCard from "./WhatsAppCard";

const roles = ["Front-end", "Back-end", "Full stack"];

export default function ContactCard() {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl bg-zinc-900 p-5 text-white sm:p-10 lg:p-14">
      {/* Forma decorativa bege, ecoando a foto da Home */}
      <div
        className="absolute -top-32 -right-24 -z-10 size-96 rounded-[45%_55%_60%_40%] bg-sand-300/15 blur-3xl"
        aria-hidden="true"
      />

      {/* min-w-0 nas colunas impede que o conteúdo force o card a ficar mais largo que a tela */}
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[0.8125rem] font-medium whitespace-nowrap sm:text-sm">
            <span className="relative flex size-2.5" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-green-500" />
            </span>
            Disponível para novas oportunidades
          </span>

          <h3 className="mt-6 text-[1.75rem] leading-tight sm:text-3xl font-bold tracking-tight sm:text-4xl">
            Procurando um dev para somar ao seu{" "}
            <span className="text-sand-300">time</span>?
          </h3>

          <p className="mt-4 max-w-lg text-lg leading-relaxed text-zinc-300">
            Estou aberto a vagas como desenvolvedor front-end, back-end ou full stack. Me chame
            no WhatsApp ou por e-mail e respondo o quanto antes.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Vagas de interesse">
            {roles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-white/15 px-3 py-1 text-sm text-zinc-200"
              >
                {role}
              </li>
            ))}
            <li className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-sm text-zinc-200">
              <LuMapPin className="size-3.5 text-sand-300" aria-hidden="true" />
              Remoto · Pacatuba, CE
            </li>
          </ul>
        </div>

        <div className="flex min-w-0 flex-col gap-4">
          <WhatsAppCard href={whatsappUrl} display={contact.whatsapp.display} />
          <EmailCard email={contact.email} />
        </div>
      </div>
    </div>
  );
}
