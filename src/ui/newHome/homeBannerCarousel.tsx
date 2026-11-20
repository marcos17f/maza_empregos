import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_DELAY_MS = 4500;

export const homeBannerSlides = [
  {
    id: "vaga-demorando",
    tag: "Para Empresas",
    title: "Seu RH está demorando para fechar uma vaga importante?",
    description:
      "Processos seletivos longos geram sobrecarga na equipe e perda de receita. A MaZa faz a triagem técnica e comportamental com agilidade.",
    ctaLabel: "Abrir vaga agora",
    ctaHref: "/servicos/recrutamento-e-selecao",
    image: "/images/vagas/vaga-comercial-b2b.jpg",
    theme: "from-[#18181B] to-[#C8161D] text-white",
  },
  {
    id: "cadastro-gratuito",
    tag: "Para Candidatos • 100% Grátis",
    title: "Cadastre seu currículo na MaZa e conecte-se às melhores empresas.",
    description:
      "Atuamos como Job Hunter aproximando profissionais qualificados de vagas operacionais, administrativas, comerciais, TI e liderança.",
    ctaLabel: "Cadastrar currículo grátis",
    ctaHref: "/cadastrar-curriculo",
    image: "/images/career-growth.jpg",
    theme: "from-[#18181B] to-[#0EA57A] text-white",
  },
  {
    id: "maza-consulting",
    tag: "MaZa Consulting",
    title: "Pesquisa de Clima, Avaliação 360° e Perfil Comportamental.",
    description:
      "Decisões de gente e gestão baseadas em dados reais para reduzir turnover, desenvolver líderes e fortalecer sua cultura organizacional.",
    ctaLabel: "Conhecer Serviços",
    ctaHref: "/servicos",
    image: "/images/vagas/vaga-administrativo-fiscal.jpg",
    theme: "from-[#271012] to-[#6B0E14] text-white",
  },
  {
    id: "testes-tecnicos",
    tag: "Aplicação de Testes",
    title: "Aplicação de testes para avaliação da conduta e qualificação profissional.",
    description:
      "A partir dos testes é possível analisar o comportamento e desempenho para apoiar contratações mais assertivas.",
    ctaLabel: "Ver serviços oficiais",
    ctaHref: "/servicos",
    image: "/images/vagas/vaga-contabilidade.jpg",
    theme: "from-[#C8161D] to-[#991016] text-white",
  },
] as const;

export function wrapIndex(index: number, total: number): number {
  return ((index % total) + total) % total;
}

export default function HomeBannerCarousel() {
  const total = homeBannerSlides.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(
      () => setCurrent((index) => wrapIndex(index + 1, total)),
      AUTOPLAY_DELAY_MS,
    );
    return () => window.clearTimeout(timer);
  }, [current, paused, total]);

  return (
    <div
      role="group"
      aria-roledescription="carrossel"
      aria-label="Destaques e soluções MaZa"
      className="relative min-h-[340px] w-full overflow-hidden rounded-card bg-promo-surface sm:min-h-[380px] lg:h-full lg:min-h-[420px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {homeBannerSlides.map((slide, index) => {
        const isCurrent = index === current;
        return (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} de ${total}`}
            aria-hidden={!isCurrent}
            className={`absolute inset-0 grid bg-gradient-to-br transition-opacity duration-300 ease-out md:grid-cols-[1.25fr_0.85fr] ${
              slide.theme
            } ${isCurrent ? "z-10 opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <div className="flex flex-col justify-center p-6 pb-16 sm:p-8 sm:pb-16 lg:p-10 lg:pb-16">
              <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                {slide.tag}
              </span>
              <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-[34px]">
                {slide.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">
                {slide.description}
              </p>
              <div className="mt-6">
                <Link
                  href={slide.ctaHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#18181B] shadow-sm transition hover:bg-neutral-100"
                >
                  {slide.ctaLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="relative hidden md:block">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(min-width: 1024px) 480px, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
            </div>
          </div>
        );
      })}

      <div className="absolute bottom-4 left-6 z-20 flex items-center gap-2 lg:left-10">
        {homeBannerSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`Ir para destaque ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current ? "w-7 bg-white" : "w-2 bg-white/45 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-3.5 right-4 z-20 flex items-center gap-2">
        <button
          type="button"
          aria-label="Banner anterior"
          onClick={() => setCurrent((index) => wrapIndex(index - 1, total))}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-[#991016]"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Próximo banner"
          onClick={() => setCurrent((index) => wrapIndex(index + 1, total))}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/45 text-white shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-[#991016]"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
