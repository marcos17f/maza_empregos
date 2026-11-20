import {
  ArrowLeft,
  Briefcase,
  CheckCircle2,
  Clock,
  Heart,
  MapPin,
  ShieldCheck,
  Star,
} from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import {
  getOpportunityByHandle,
  OPPORTUNITIES,
} from "@/data/catalog";
import { whatsappLink } from "@/utils/contact";
import { formatCurrency } from "@/utils/mask";
import { useProposals } from "@/ui/context/proposalContext";
import OpportunityCards from "@/ui/home/opportunityCards";
import { useFavorites } from "@/ui/home/opportunityCard";

export default function OpportunityDetailPage() {
  const router = useRouter();
  const handle = typeof router.query.handle === "string" ? router.query.handle : "";
  const item = useMemo(() => getOpportunityByHandle(handle), [handle]);
  const { addItem, setIsDrawerOpen } = useProposals();
  const { favorites, toggleFavorite } = useFavorites();

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!router.isReady) {
    return (
      <div className="py-16 text-center text-sm text-[#666]">Carregando detalhes...</div>
    );
  }

  if (!item) {
    return (
      <div className="mx-auto max-w-xl py-16 text-center">
        <h1 className="text-2xl font-bold text-[#18181B]">Oportunidade não encontrada</h1>
        <p className="mt-2 text-sm text-[#4c4c4c]">
          Esta vaga ou solução pode ter sido encerrada ou movida.
        </p>
        <Link
          href="/vagas"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-white"
        >
          Ver oportunidades abertas
        </Link>
      </div>
    );
  }

  const activeVariant = item.variants[selectedVariantIndex] ?? item.variants[0];
  const isFavorite = favorites.includes(item.handle);
  const related = OPPORTUNITIES.filter(
    (other) => other.handle !== item.handle && other.type === item.type,
  ).slice(0, 3);

  const handleAddToProposal = () => {
    addItem({
      handle: item.handle,
      title: item.title,
      type: item.type,
      variantLabel: activeVariant.label,
      quantity,
      unitPrice: activeVariant.price,
      image: item.image,
    });
    setIsDrawerOpen(true);
  };

  const waHref = whatsappLink(
    `Olá, MaZa Empregos! Tenho interesse em: ${item.title} (${activeVariant.label}).`,
  );

  return (
    <div className="space-y-10 pt-4">
      <Head>
        <title>{item.title} | MaZa Empregos</title>
        <meta name="description" content={item.summary} />
      </Head>

      <Link
        href={item.type === "vaga" ? "/vagas" : "/consultoria"}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4c4c4c] hover:text-brand"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Voltar para {item.type === "vaga" ? "Vagas" : "MaZa Consulting"}
      </Link>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
        {/* Foto / cartão visual */}
        <div className="relative overflow-hidden rounded-card border border-[#ededed] bg-surface-light">
          <div className="relative aspect-[4/4] w-full max-h-[520px]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <button
            type="button"
            onClick={() => toggleFavorite(item.handle)}
            aria-label={isFavorite ? "Remover dos favoritos" : "Salvar nos favoritos"}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
          >
            <Heart
              className={`h-5 w-5 ${isFavorite ? "fill-brand text-brand" : "text-[#4c4c4c]"}`}
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Informações e ações */}
        <div className="flex flex-col">
          <span className="w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-brand">
            {item.badge}
          </span>

          <h1 className="mt-3 text-2xl font-bold text-[#18181B] sm:text-3xl lg:text-4xl">
            {item.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[#4c4c4c]">
            <span className="inline-flex items-center gap-1 font-semibold text-[#C8161D]">
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
              {item.rating.toFixed(1)} ({item.reviewCount} avaliações)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
              {item.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-brand" aria-hidden="true" />
              {item.regime}
            </span>
          </div>

          <p className="mt-4 text-base leading-relaxed text-[#303030]">{item.description}</p>

          {/* Preço ou faixa salarial */}
          <div className="mt-6 rounded-card border border-[#e2e8f0] bg-[#FAF8F8] p-5">
            {item.type === "vaga" ? (
              <>
                <p className="text-xs font-bold uppercase tracking-wider text-[#0EA57A]">
                  Candidatura 100% Gratuita • LGPD
                </p>
                <p className="mt-1 text-2xl font-black text-[#18181B]">
                  {item.salaryRange ?? "A combinar"}
                </p>
                <p className="mt-1 text-xs text-[#4c4c4c]">{item.sla}</p>
              </>
            ) : (
              <>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#666]">
                  Selecione o formato / porte
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.variants.map((variant, idx) => (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`rounded-lg border px-3.5 py-2 text-xs font-semibold transition ${
                        idx === selectedVariantIndex
                          ? "border-brand bg-brand text-white"
                          : "border-[#E2DBDB] bg-white text-[#171717] hover:border-brand"
                      }`}
                    >
                      {variant.label}
                    </button>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap items-baseline justify-between gap-4">
                  <div>
                    <p className="text-2xl font-black text-[#0EA57A]">
                      {formatCurrency(activeVariant.price * quantity)}
                    </p>
                    <p className="text-xs text-[#666]">{activeVariant.note}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#4c4c4c]">Qtd:</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="flex h-8 w-8 items-center justify-center rounded border border-[#E2DBDB] bg-white font-bold"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-sm font-bold">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="flex h-8 w-8 items-center justify-center rounded border border-[#E2DBDB] bg-white font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Botões de ação */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {item.type === "vaga" ? (
              <>
                <Link
                  href={`/cadastrar-curriculo?vaga=${encodeURIComponent(item.title)}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-dark"
                >
                  <Briefcase className="h-4 w-4" aria-hidden="true" />
                  Candidatar-se gratuitamente
                </Link>
                <button
                  type="button"
                  onClick={handleAddToProposal}
                  className="inline-flex items-center justify-center rounded-full border border-brand px-6 py-3.5 text-sm font-bold text-brand transition hover:bg-primary-50"
                >
                  Salvar na lista
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleAddToProposal}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-dark"
                >
                  <Briefcase className="h-4 w-4" aria-hidden="true" />
                  Adicionar à solicitação
                </button>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#0EA57A] bg-emerald-50 px-6 py-3.5 text-sm font-bold text-[#0b805e] transition hover:bg-emerald-100"
                >
                  Falar no WhatsApp
                </a>
              </>
            )}
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs text-[#666]">
            <ShieldCheck className="h-4 w-4 shrink-0 text-[#0EA57A]" aria-hidden="true" />
            <span>
              Atendimento 100% online em conformidade com a LGPD. Nunca pedimos dados bancários de
              candidatos.
            </span>
          </div>
        </div>
      </section>

      {/* Requisitos / Entregáveis e Benefícios */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-card border border-[#ededed] bg-white p-6">
          <h2 className="text-lg font-bold text-[#18181B]">
            {item.type === "vaga" ? "Requisitos e perfil desejado" : "O que está incluído na entrega"}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-[#303030]">
            {item.requirements.map((req) => (
              <li key={req} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-card border border-[#ededed] bg-white p-6">
          <h2 className="text-lg font-bold text-[#18181B]">
            {item.type === "vaga" ? "Benefícios e diferenciais" : "Resultados para sua empresa"}
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-[#303030]">
            {item.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#0EA57A]"
                  aria-hidden="true"
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Relacionados */}
      {related.length > 0 && (
        <section className="pt-4">
          <h2 className="mb-4 text-2xl font-semibold text-[#18181B]">
            {item.type === "vaga" ? "Outras vagas abertas" : "Outras soluções MaZa Consulting"}
          </h2>
          <OpportunityCards items={related} />
        </section>
      )}
    </div>
  );
}
