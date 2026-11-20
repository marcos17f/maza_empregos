import { ArrowRight, Filter, X } from "lucide-react";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import {
  OPPORTUNITIES,
  SEGMENTS,
  type OpportunityType,
} from "@/data/catalog";
import { SPECIALIST_MESSAGE, whatsappLink } from "@/utils/contact";
import OpportunityCard, { useFavorites } from "@/ui/home/opportunityCard";

type Props = {
  mode: "vagas" | "consultoria";
  slug?: string;
};

export default function CatalogTemplate({ mode, slug = "" }: Props) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);
  const { favorites, toggleFavorite } = useFavorites();

  const segments = useMemo(
    () => SEGMENTS.filter((item) => item.category === mode),
    [mode],
  );

  const opportunityType: OpportunityType = mode === "vagas" ? "vaga" : "consultoria";

  const filteredItems = useMemo(() => {
    return OPPORTUNITIES.filter((item) => {
      if (item.type !== opportunityType) return false;
      if (slug && item.segmentSlug !== slug) return false;
      return true;
    });
  }, [opportunityType, slug]);

  const activeSegment = segments.find((item) => item.slug === slug);
  const basePath = mode === "vagas" ? "/vagas" : "/consultoria";
  const displayedItems = filteredItems.slice(0, visibleCount);

  return (
    <div className="space-y-6 pt-4 font-WorkSans lg:space-y-8">
      {/* Banner interno */}
      <div className="overflow-hidden rounded-card bg-[linear-gradient(100deg,#18181B_0%,#C8161D_60%,#C8161D_100%)] px-6 py-8 text-white md:px-10 md:py-10">
        <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FCA5A5]">
          {mode === "vagas" ? "Portal de Vagas MaZa • 100% Gratuito" : "MaZa Consulting • Soluções de RH"}
        </span>
        <h1 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">
          {activeSegment
            ? activeSegment.name
            : mode === "vagas"
              ? "Encontre sua próxima oportunidade profissional"
              : "Consultoria de RH e Recrutamento sob medida"}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-white/90 md:text-base">
          {activeSegment
            ? activeSegment.description
            : mode === "vagas"
              ? "Oportunidades em São José do Rio Preto, região e vagas remotas para todo o Brasil. Cadastro gratuito e protegido pela LGPD."
              : "Soluções completas para atrair, selecionar, desenvolver e reter talentos na sua empresa com metodologia aplicada desde 2011."}
        </p>
      </div>

      {/* Área de segmentos + grid + banner lateral */}
      <section
        id="segmentos"
        className="relative grid min-h-fit scroll-mt-24 gap-6 lg:grid-cols-[230px_1fr_210px]"
      >
        {/* Botão mobile de filtro */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-[#E4DDDD] bg-surface-light px-4 py-2.5 text-sm font-semibold text-[#18181B]"
          >
            <Filter className="h-4 w-4" aria-hidden="true" />
            Filtrar por área {activeSegment ? `(${activeSegment.name})` : ""}
          </button>
        </div>

        {/* Sidebar desktop */}
        <aside className="hidden lg:block">
          <h2 className="pb-3 text-lg font-bold text-[#18181B]">
            {mode === "vagas" ? "Áreas de Atuação" : "Soluções de RH"}
          </h2>
          <div className="flex flex-col gap-2.5 border-t border-neutral-platinum pt-4">
            <Link
              href={`${basePath}#segmentos`}
              className={`text-sm transition hover:text-brand ${
                !slug ? "font-bold text-brand" : "text-[#4c4c4c]"
              }`}
            >
              {mode === "vagas" ? "Todas as áreas" : "Todas as soluções"}
            </Link>
            {segments.map((segment) => (
              <Link
                key={segment.slug}
                href={`${basePath}/${segment.slug}#segmentos`}
                className={`text-sm transition hover:text-brand ${
                  slug === segment.slug ? "font-bold text-brand" : "text-[#4c4c4c]"
                }`}
              >
                {segment.name}
              </Link>
            ))}
          </div>
        </aside>

        {/* Modal filtro mobile */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 flex bg-black/45 lg:hidden">
            <div className="flex h-full w-4/5 max-w-xs flex-col bg-white p-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#ededed] pb-4">
                <h2 className="text-lg font-bold text-[#18181B]">Filtrar por área</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  aria-label="Fechar filtros"
                  className="rounded-full p-1 text-[#555] hover:bg-neutral-100"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-4 flex flex-col gap-3">
                <Link
                  href={`${basePath}#segmentos`}
                  onClick={() => setMobileFiltersOpen(false)}
                  className={`text-base ${!slug ? "font-bold text-brand" : "text-[#303030]"}`}
                >
                  {mode === "vagas" ? "Todas as áreas" : "Todas as soluções"}
                </Link>
                {segments.map((segment) => (
                  <Link
                    key={segment.slug}
                    href={`${basePath}/${segment.slug}#segmentos`}
                    onClick={() => setMobileFiltersOpen(false)}
                    className={`text-base ${
                      slug === segment.slug ? "font-bold text-brand" : "text-[#303030]"
                    }`}
                  >
                    {segment.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Grade de cards */}
        <div>
          {displayedItems.length === 0 ? (
            <div className="rounded-card border border-[#ededed] bg-surface-light p-8 text-center">
              <p className="text-lg font-bold text-[#18181B]">
                Nenhuma oportunidade listada nesta categoria no momento.
              </p>
              <p className="mt-2 text-sm text-[#4c4c4c]">
                Cadastre seu currículo gratuitamente para ser avisado(a) assim que novas vagas
                abrirem, ou fale com nosso time.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Link
                  href={basePath}
                  className="rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white"
                >
                  Ver todas
                </Link>
                <Link
                  href="/cadastrar-curriculo"
                  className="rounded-full border border-brand px-5 py-2.5 text-sm font-bold text-brand"
                >
                  Cadastrar currículo
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {displayedItems.map((item) => (
                  <OpportunityCard
                    key={item.handle}
                    size="compact"
                    item={item}
                    isFavorite={favorites.includes(item.handle)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>

              {filteredItems.length > visibleCount && (
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="mx-auto mt-6 block rounded-full border border-[#E2DBDB] bg-white px-8 py-2.5 text-sm font-semibold text-[#18181B] transition hover:bg-surface-light"
                >
                  Carregar mais
                </button>
              )}
            </>
          )}
        </div>

        {/* Side banner desktop */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 flex flex-col justify-between rounded-card bg-[#18181B] p-5 text-white">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FCA5A5]">
                Atendimento Consultivo
              </span>
              <h3 className="mt-2 text-lg font-bold leading-snug">
                {mode === "vagas"
                  ? "Não encontrou sua vaga ideal?"
                  : "Precisa de um projeto sob medida?"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/85">
                {mode === "vagas"
                  ? "Cadastre seu currículo gratuitamente no banco de talentos MaZa e entre no radar de empresas parceiras."
                  : "Nossa equipe monta um plano de Recrutamento ou Consultoria de RH sob medida para sua operação."}
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2.5">
              <Link
                href={mode === "vagas" ? "/cadastrar-curriculo" : "/servicos/recrutamento-e-selecao"}
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#18181B] transition hover:bg-neutral-100"
              >
                {mode === "vagas" ? "Cadastrar currículo" : "Abrir vaga"}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
              <a
                href={whatsappLink(SPECIALIST_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/10"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
