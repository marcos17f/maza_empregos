import { CheckCircle2, MessageCircle } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { whatsappLink } from "@/utils/contact";

export default function PedidoFinalizadoPage() {
  const router = useRouter();
  const protocolo = typeof router.query.protocolo === "string" ? router.query.protocolo : "MZ-2026";
  const nome = typeof router.query.nome === "string" ? router.query.nome : "";

  const waHref = whatsappLink(
    `Olá, MaZa Empregos! Acabei de enviar a solicitação ${protocolo} pelo site e gostaria de confirmar o atendimento.`,
  );

  return (
    <section className="mx-auto max-w-2xl py-12 text-center">
      <Head>
        <title>Solicitação Confirmada | MaZa Empregos</title>
      </Head>

      <div className="rounded-card border border-emerald-200 bg-white p-8 shadow-sm">
        <CheckCircle2 className="mx-auto h-14 w-14 text-[#0EA57A]" aria-hidden="true" />
        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-brand">
          Protocolo {protocolo}
        </p>
        <h1 className="mt-2 text-2xl font-bold text-[#18181B] md:text-3xl">
          Solicitação registrada com sucesso!
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-[#4c4c4c]">
          {nome ? `Obrigado, ${nome}! ` : ""}Nossa equipe de especialistas da{" "}
          <strong>MaZa Empregos</strong> recebeu seus dados e entrará em contato em horário
          comercial para dar sequência ao seu atendimento.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white hover:bg-[#1ebe5d]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Acompanhar pelo WhatsApp
          </a>
          <Link
            href="/"
            className="rounded-full border border-[#E2DBDB] px-6 py-3 text-sm font-bold text-[#18181B] hover:bg-surface-light"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}
