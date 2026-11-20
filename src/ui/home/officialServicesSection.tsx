import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { OFFICIAL_SERVICES, OFFICIAL_SERVICES_INTRO } from "@/data/mazaOfficial";
import { QUOTE_MESSAGE, whatsappLink } from "@/utils/contact";

type Props = {
  showHeadingLink?: boolean;
};

export default function OfficialServicesSection({ showHeadingLink = true }: Props) {
  return (
    <section
      id="servicos-maza"
      aria-labelledby="official-services-title"
      className="mx-auto w-full font-WorkSans"
    >
      <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
            Serviços MaZa Empregos
          </span>
          <h2
            id="official-services-title"
            className="mt-2 text-2xl font-bold text-[#18181B] lg:text-[32px]"
          >
            Soluções em Recrutamento, Consultoria e Testes
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#4c4c4c] md:text-base">
            {OFFICIAL_SERVICES_INTRO}
          </p>
        </div>

        {showHeadingLink && (
          <Link
            href="/servicos"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#18181B] px-5 py-2.5 text-sm font-bold text-[#18181B] transition hover:bg-[#991016] hover:text-white"
          >
            Ver página de Serviços
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {OFFICIAL_SERVICES.map((service, index) => (
          <article
            key={service.id}
            className="group flex h-full flex-col overflow-hidden rounded-card border border-[#ECE5E5] bg-white shadow-sm transition hover:border-brand/40 hover:shadow-homeProductCard"
          >
            <div className="relative flex h-44 w-full items-center justify-center border-b border-[#ECE5E5] bg-[linear-gradient(135deg,#FAF6F6_0%,#F8E5E6_100%)] p-6">
              <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#18181B] text-sm font-black text-white shadow-sm">
                {index + 1}
              </span>
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-[#e2e8f0] bg-white p-4 shadow-sm transition-transform duration-200 group-hover:scale-105">
                <div className="relative h-14 w-14">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="56px"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold text-[#18181B]">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4c4c4c]">{service.description}</p>

              <ul className="mt-4 space-y-2 border-t border-[#F3ECEC] pt-4 text-xs text-[#303030]">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#0EA57A]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
                <a
                  href={whatsappLink(
                    `Olá, MaZa Empregos! Gostaria de mais informações sobre o serviço: ${service.title}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#C8161D] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#991016] sm:text-sm"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Solicitar no WhatsApp
                </a>
                {service.id === "recrutamento-e-selecao" && (
                  <Link
                    href="/servicos/recrutamento-e-selecao"
                    className="inline-flex items-center justify-center rounded-full border border-[#C8161D] px-4 py-2.5 text-xs font-bold text-[#C8161D] transition hover:bg-primary-50"
                  >
                    Abrir vaga
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {!showHeadingLink && (
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-card bg-[#18181B] p-6 text-white sm:flex-row sm:items-center sm:p-8">
          <div>
            <h3 className="text-xl font-bold">Quer contratar a MaZa para sua empresa?</h3>
            <p className="mt-1 text-sm text-white/85">
              Fale com nossa equipe pelo WhatsApp ou preencha o briefing online de Recrutamento e
              Seleção.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/servicos/recrutamento-e-selecao"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#18181B] hover:bg-neutral-100"
            >
              Solicitar Recrutamento
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={whatsappLink(QUOTE_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#1ebe5d]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Comercial
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
