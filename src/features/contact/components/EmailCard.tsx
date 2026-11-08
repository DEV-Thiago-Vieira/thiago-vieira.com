"use client";

import { useEffect, useState } from "react";
import { LuCheck, LuCopy, LuMail, LuSend } from "react-icons/lu";

type EmailCardProps = {
  email: string;
};

export default function EmailCard({ email }: EmailCardProps) {
  const [copied, setCopied] = useState(false);
  const [user, domain] = email.split("@");

  // Volta ao estado inicial depois de 2s
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Sem acesso à área de transferência: abre o app de e-mail como alternativa
      window.location.href = `mailto:${email}`;
    }
  }

  const action =
    "flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors sm:flex-none";

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sand-200 text-zinc-900 sm:size-12">
          <LuMail className="size-5 sm:size-6" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-medium text-zinc-400">E-mail</p>
          {/* Se não couber, quebra a linha logo após o "@" (contact@ / thiago-vieira.com) */}
          <p className="text-[clamp(0.875rem,4.4vw,1.125rem)] font-bold tracking-tight sm:text-xl">
            <span className="whitespace-nowrap">{user}@</span>
            <wbr />
            <span className="whitespace-nowrap">{domain}</span>
          </p>
        </div>
      </div>

      {/* Telas muito estreitas: botões empilhados */}
      <div className="mt-4 flex flex-col gap-2 min-[400px]:flex-row">
        <button
          type="button"
          onClick={copy}
          className={`${action} ${
            copied ? "bg-green-500/15 text-green-300" : "bg-white/10 text-white hover:bg-white/15"
          }`}
        >
          {copied ? (
            <LuCheck className="size-4" aria-hidden="true" />
          ) : (
            <LuCopy className="size-4" aria-hidden="true" />
          )}
          {copied ? "Copiado!" : "Copiar"}
        </button>
        <a
          href={`mailto:${email}`}
          className={`${action} bg-sand-200 text-zinc-900 hover:bg-sand-300`}
        >
          <LuSend className="size-4" aria-hidden="true" />
          Enviar e-mail
        </a>
      </div>

      <span className="sr-only" aria-live="polite">
        {copied ? "E-mail copiado para a área de transferência" : ""}
      </span>
    </div>
  );
}
