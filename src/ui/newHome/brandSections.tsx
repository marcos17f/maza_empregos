import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PARTNER_COMPANIES } from "@/data/mazaOfficial";
import { MAZA_CONTACT, QUOTE_MESSAGE, whatsappLink } from "@/utils/contact";

const whatsappHref = whatsappLink(QUOTE_MESSAGE);

export default function BrandSections() {
  return (
    <section
      id="empresas-parceiras"
      aria-labelledby="trusted-companies-title"
      className="mx-auto w-full font-WorkSans text-neutral-900"
    >
      <div className="mb-5">
        <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
          +62 Empresas Parceiras
        </span>
        <h2
          id="trusted-companies-title"
          className="mt-2 text-2xl font-bold text-[#18181B] lg:text-[32px]"
        >
          Empresas que confiam em nosso trabalho
        </h2>
        <p className="mt-1 text-sm text-[#4c4c4c] md:text-base">
          Atendemos diversas empresas que acreditam e confiam na MaZa Empregos.
        </p>
      </div>

      <div
        role="region"
        aria-label="Carrossel contínuo de empresas que confiam na MaZa Empregos"
        className="relative overflow-hidden py-1"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent sm:w-14"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-14"
        />

        <div className="partner-marquee-track flex w-max">
          {[0, 1].map((loopIndex) => (
            <div
              key={loopIndex}
              aria-hidden={loopIndex === 1}
              className="flex shrink-0 items-center gap-3 pr-3 lg:gap-4 lg:pr-4"
            >
              {PARTNER_COMPANIES.map(({ name, logo }) => (
                <div
                  key={`${loopIndex}-${name}`}
                  title={name}
                  className="flex h-[112px] w-[160px] shrink-0 flex-col items-center justify-center rounded-card border border-[#ECE5E5] bg-white p-4 shadow-sm transition hover:border-brand/40 hover:shadow-homeProductCard sm:w-[180px] lg:h-[124px] lg:w-[200px]"
                >
                  <div className="relative h-16 w-full">
                    <Image
                      src={logo}
                      alt={
                        loopIndex === 0
                          ? `Logo ${name} — empresa parceira da MaZa Empregos`
                          : ""
                      }
                      fill
                      sizes="200px"
                      className="object-contain"
                    />
                  </div>
                  {loopIndex === 0 && <span className="sr-only">{name}</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Banner institucional de Segurança e LGPD */}
      <Link
        href="/politica-de-privacidade"
        className="mt-section flex flex-col justify-between gap-5 rounded-card border border-[#F6D5D6] bg-[linear-gradient(95deg,#18181B_0%,#C8161D_65%,#B9141B_100%)] p-6 text-white transition hover:brightness-105 md:flex-row md:items-center md:px-10 md:py-9"
      >
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-[#FCA5A5]">
            <ShieldCheck className="h-7 w-7" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#FCA5A5]">
              Compromisso MaZa • Transparência e LGPD
            </p>
            <h3 className="mt-1 text-xl font-bold md:text-2xl">
              Cadastro gratuito para candidatos e proteção total dos seus dados.
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-white/85">
              A MaZa Empregos não cobra taxas de candidatos, não solicita informações bancárias e
              recebe currículos exclusivamente pela plataforma oficial.
            </p>
          </div>
        </div>
        <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#18181B]">
          Ver Política LGPD <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </span>
      </Link>

      {/* Banner Atendimento WhatsApp + Grupo de Vagas */}
      <div className="mt-section flex flex-col justify-between gap-5 rounded-card bg-surface-light p-6 text-[#171717] md:flex-row md:items-center md:px-10 md:py-9">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-sm">
            <MessageCircle className="h-7 w-7" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#0EA57A]">
              Atendimento Online • WhatsApp Oficial
            </p>
            <h3 className="mt-1 text-xl font-bold text-[#18181B] md:text-2xl">
              Receba vagas com prioridade ou fale com a equipe MaZa.
            </h3>
            <p className="mt-1 text-sm text-[#4c4c4c]">
              Atendimento pelos números{" "}
              <strong>{MAZA_CONTACT.whatsappPrimaryDisplay}</strong> e{" "}
              <strong>{MAZA_CONTACT.whatsappSecondaryDisplay}</strong> ou direto no Grupo Oficial
              de Vagas Exclusivas.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={MAZA_CONTACT.whatsappGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#1ebe5d]"
          >
            Grupo de Vagas <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-[#18181B] bg-white px-5 py-3 text-sm font-bold text-[#18181B] transition hover:bg-[#991016] hover:text-white"
          >
            Falar com a MaZa
          </a>
        </div>
      </div>
    </section>
  );
}
