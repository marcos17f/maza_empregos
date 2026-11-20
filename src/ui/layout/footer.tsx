import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { ArrowRight, Globe, Linkedin, Lock, ShieldCheck } from "lucide-react";
import localFont from "next/font/local";
import { COVERAGE_REGIONS } from "@/data/catalog";
import { MAZA_CONTACT } from "@/utils/contact";
import MazaLogo from "@/ui/brand/MazaLogo";
import BlogHighlights from "@/ui/layout/blogHighlights";
import { Reveal } from "@/ui/related/reveal";

const openSansItalic = localFont({
  src: [
    { path: "../../fonts/open-sans/open-sans-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../../fonts/open-sans/open-sans-600-italic.woff2", weight: "600", style: "italic" },
    { path: "../../fonts/open-sans/open-sans-700-italic.woff2", weight: "700", style: "italic" },
  ],
  display: "swap",
  preload: false,
});

type FooterLink = { label: string; href: string; external?: boolean };

const linkColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Sobre a MaZa",
    links: [
      { label: "Vagas Abertas", href: "/vagas" },
      { label: "Serviços (Recrutamento, Consulting e Testes)", href: "/servicos" },
      { label: "Solicitar Recrutamento", href: "/servicos/recrutamento-e-selecao" },
      { label: "Como funciona", href: "/como-funciona" },
    ],
  },
  {
    title: "Para Candidatos & LGPD",
    links: [
      { label: "Portal do Candidato (Grátis)", href: MAZA_CONTACT.candidatePortal, external: true },
      { label: "Grupo de Vagas no WhatsApp", href: MAZA_CONTACT.whatsappGroupUrl, external: true },
      { label: "Área da Empresa", href: MAZA_CONTACT.companyPortal, external: true },
      { label: "Política de Privacidade (LGPD)", href: "/politica-de-privacidade" },
    ],
  },
  {
    title: "Atendimento MaZa",
    links: [
      { label: "Dúvidas Frequentes (FAQ)", href: "/faq" },
      { label: "Fale Conosco", href: "/contato" },
      { label: "Avaliações no Facebook", href: MAZA_CONTACT.facebookReviews, external: true },
    ],
  },
];

const socialNetworks: { name: string; icon: string; href: string }[] = [
  { name: "Instagram", icon: "/footer/instagram.png", href: MAZA_CONTACT.instagram },
  { name: "Facebook", icon: "/footer/facebook.png", href: MAZA_CONTACT.facebook },
  { name: "YouTube", icon: "/footer/youtube.png", href: MAZA_CONTACT.youtube },
];

const headingClass = "text-sm font-semibold leading-4 tracking-[0.16px] text-[#303030]";
const linkClass =
  "inline-block pb-1 pt-2 text-sm leading-[21px] tracking-[0.16px] text-[#171a1c] hover:text-brand hover:underline";

export default function Footer() {
  const { pathname } = useRouter();

  return (
    <>
      {pathname === "/" ? (
        <section
          aria-labelledby="footer-blog-title"
          className={`${openSansItalic.className} mb-section w-full bg-white italic text-black`}
        >
          <div className="mx-auto w-full max-w-page px-gutter py-10 lg:py-[57px]">
            <h2 id="footer-blog-title" className="text-2xl font-semibold text-[#18181B] lg:text-[32px]">
              Carreira & Gestão — Conteúdos MaZa
            </h2>
            <BlogHighlights />
            <p className="mt-8 text-base">
              Dicas práticas para candidatos evoluírem na carreira e empresas contratarem melhor.{" "}
              <a
                href={MAZA_CONTACT.candidatePortal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-brand underline-offset-4 hover:underline"
              >
                Cadastre seu currículo gratuitamente
                <ArrowRight aria-hidden="true" className="h-5 w-5" strokeWidth={2} />
              </a>
            </p>
          </div>
        </section>
      ) : null}

      <Reveal width="100%">
        <footer className="w-full border-t border-[#ededed] bg-[#fafafa] font-OpenSans">
          <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-16">
            <div className="flex flex-col gap-8 py-9 lg:flex-row lg:justify-between">
              <div className="max-w-xs">
                <MazaLogo />
                <p className="mt-3 text-sm leading-relaxed text-[#4c4c4c]">
                  Mais do que uma agência de empregos. Conectando talentos a oportunidades em São
                  José do Rio Preto, região e todo o Brasil. Atendimento 100% online.
                </p>
              </div>

              <nav
                aria-label="Links do rodapé"
                className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:gap-x-12"
              >
                {linkColumns.map((column) => (
                  <div key={column.title}>
                    <h3 className={`${headingClass} pb-3`}>{column.title}</h3>
                    <ul>
                      {column.links.map((link) => (
                        <li key={link.label}>
                          {link.external ? (
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={linkClass}
                            >
                              {link.label}
                            </a>
                          ) : (
                            <Link href={link.href} className={linkClass}>
                              {link.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>

              <div>
                <h3 className={`${headingClass} pb-4`}>MaZa nas Redes</h3>
                <div className="flex items-center gap-4">
                  {socialNetworks.map(({ name, icon, href }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} da MaZa Empregos (abre em nova aba)`}
                      className="opacity-80 transition hover:opacity-100"
                    >
                      <Image src={icon} alt={name} width={24} height={24} />
                    </a>
                  ))}
                  <a
                    href={MAZA_CONTACT.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn da MaZa Empregos (abre em nova aba)"
                    className="text-[#303030] transition hover:text-brand"
                  >
                    <Linkedin className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </a>
                </div>
                <div className="mt-4 space-y-1 text-xs text-[#4c4c4c]">
                  <p>
                    <strong>E-mail:</strong> {MAZA_CONTACT.email}
                  </p>
                  <p>
                    <strong>WhatsApp:</strong> {MAZA_CONTACT.whatsappPrimaryDisplay} /{" "}
                    {MAZA_CONTACT.whatsappSecondaryDisplay}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#dedede] py-9">
              <h3 className={`${headingClass} pb-4`}>Áreas de atuação e cobertura</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
                {COVERAGE_REGIONS.map((item) => (
                  <div key={item.region}>
                    <h4 className="pb-2 text-sm font-semibold leading-4 tracking-[0.16px] text-[#C8161D]">
                      {item.region}
                    </h4>
                    <ul className="space-y-1.5 pt-1">
                      {item.cities.map((city) => (
                        <li
                          key={city}
                          className="text-sm leading-[21px] tracking-[0.16px] text-[#171a1c]"
                        >
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 border-t border-[#dedede] py-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-brand">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#171717]">Conformidade LGPD</p>
                  <p className="text-xs text-[#666]">Lei nº 13.709/2018 • Dados protegidos</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-[#0EA57A]">
                  <Lock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#171717]">Cadastro 100% Gratuito</p>
                  <p className="text-xs text-[#666]">
                    Nunca solicitamos dados bancários para candidatos
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-brand">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#171717]">Atendimento Digital</p>
                  <p className="text-xs text-[#666]">
                    Envio de currículos exclusivamente pela plataforma
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#ececec] py-5 text-center text-xs leading-5 tracking-[0.16px] text-[#777]">
              <p>
                © {new Date().getFullYear()} MaZa Empregos — Recrutamento, Seleção e Consultoria de
                RH • São José do Rio Preto/SP e Região • mazaempregos.com.br
              </p>
            </div>
          </div>
        </footer>
      </Reveal>
    </>
  );
}
