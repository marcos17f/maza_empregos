import { ChevronDown, HelpCircle } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { FAQ_CANDIDATOS, FAQ_EMPRESAS } from "@/data/catalog";

function AccordionGroup({
  title,
  items,
  prefix,
}: {
  title: string;
  items: { question: string; answer: string }[];
  prefix: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-[#18181B] md:text-2xl">{title}</h2>
      <div className="divide-y divide-[#e5e9f0] overflow-hidden rounded-card border border-[#e5e9f0] bg-white">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={`${prefix}-${idx}`}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-[#171717] transition hover:bg-surface-light md:text-base"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brand transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isOpen && (
                <div className="border-t border-[#f0f2f5] bg-[#fafbfd] px-5 py-4 text-sm leading-relaxed text-[#4c4c4c]">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <section className="mx-auto w-full max-w-4xl space-y-10 pt-4">
      <Head>
        <title>Dúvidas Frequentes (FAQ) | MaZa Empregos</title>
        <meta
          name="description"
          content="Tire suas dúvidas sobre cadastro gratuito de currículos, candidaturas, LGPD, Recrutamento e Seleção e MaZa Consulting."
        />
      </Head>

      <div className="rounded-card bg-[linear-gradient(100deg,#18181B_0%,#C8161D_100%)] p-6 text-white md:p-10">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FCA5A5]">
          <HelpCircle className="h-4 w-4" aria-hidden="true" />
          Central de Ajuda MaZa
        </div>
        <h1 className="mt-2 text-2xl font-bold md:text-4xl">Dúvidas Frequentes</h1>
        <p className="mt-2 max-w-2xl text-sm text-white/90 md:text-base">
          Transparência total para candidatos e empresas sobre nossos processos seletivos,
          segurança de dados (LGPD) e soluções de consultoria em RH.
        </p>
      </div>

      <AccordionGroup title="Dúvidas de Candidatos" items={FAQ_CANDIDATOS} prefix="cand" />
      <AccordionGroup title="Dúvidas de Empresas & MaZa Consulting" items={FAQ_EMPRESAS} prefix="emp" />

      <div className="rounded-card bg-surface-light p-6 text-center">
        <p className="text-base font-bold text-[#18181B]">Ainda ficou com alguma dúvida?</p>
        <p className="mt-1 text-sm text-[#4c4c4c]">
          Nossa equipe atende 100% online pelos canais oficiais da MaZa Empregos.
        </p>
        <Link
          href="/contato"
          className="mt-4 inline-flex rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-dark"
        >
          Falar com o atendimento
        </Link>
      </div>
    </section>
  );
}
