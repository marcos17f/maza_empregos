import { Dialog } from "@headlessui/react";
import {
  ArrowRight,
  Banknote,
  Clock,
  ExternalLink,
  MapPin,
  MessageCircle,
  Search,
  Share2,
  ShieldCheck,
  UserPlus,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import {
  buildVacancyWhatsAppShareUrl,
  REAL_VACANCIES,
  type RealVacancy,
} from "@/data/realVacancies";
import { resolveVacancyImage } from "@/lib/vacancyMedia";
import { MAZA_CONTACT } from "@/utils/contact";
import RealVacancyCard from "./realVacancyCard";

const CATEGORY_OPTIONS = [
  { slug: "", label: "Todas as áreas" },
  { slug: "administrativo", label: "Administrativo" },
  { slug: "comercial-e-vendas", label: "Comercial e Vendas" },
  { slug: "industria-e-operacoes", label: "Indústria e Operações" },
  { slug: "logistica", label: "Logística" },
  { slug: "lideranca-e-rh", label: "Liderança e RH" },
  { slug: "tecnologia", label: "Tecnologia e TI" },
] as const;

type Props = {
  initialCategory?: string;
  compactHome?: boolean;
  homeLimit?: number;
};

export default function RealVacancyBoard({
  initialCategory = "",
  compactHome = false,
  homeLimit = 6,
}: Props) {
  const [vacancies, setVacancies] = useState<RealVacancy[]>(REAL_VACANCIES);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(compactHome ? homeLimit : 12);
  const [activeVacancy, setActiveVacancy] = useState<RealVacancy | null>(null);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  useEffect(() => {
    let active = true;
    fetch("/api/vagas")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { vacancies?: RealVacancy[] } | null) => {
        if (active && data?.vacancies && data.vacancies.length > 0) {
          setVacancies(data.vacancies);
        }
      })
      .catch(() => {
        // Mantém snapshot oficial local sem interromper a experiência
      });
    return () => {
      active = false;
    };
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { "": vacancies.length };
    for (const v of vacancies) {
      counts[v.categorySlug] = (counts[v.categorySlug] ?? 0) + 1;
    }
    return counts;
  }, [vacancies]);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return vacancies.filter((item) => {
      if (selectedCategory && item.categorySlug !== selectedCategory) return false;
      if (!q) return true;
      const haystack = `${item.title} ${item.categoryName} ${item.location} ${item.salary} ${item.description}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [vacancies, selectedCategory, searchQuery]);

  const displayed = compactHome
    ? filtered.slice(0, homeLimit)
    : filtered.slice(0, visibleCount);

  return (
    <div className="space-y-6 font-WorkSans">
      {!compactHome && (
        <div className="overflow-hidden rounded-card bg-[linear-gradient(100deg,#18181B_0%,#C8161D_60%,#C8161D_100%)] px-6 py-8 text-white md:px-10 md:py-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FCA5A5]">
                Portal de Vagas MaZa • {vacancies.length} vagas abertas
              </span>
              <h1 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">
                Vagas Disponíveis na MaZa Empregos
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-white/90 md:text-base">
                Confira as oportunidades atualizadas diretamente do portal oficial da MaZa. Para se
                candidatar, basta cadastrar seu currículo gratuitamente e clicar na vaga desejada.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAZA_CONTACT.candidatePortal}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#18181B] shadow-sm transition hover:bg-neutral-100"
              >
                <UserPlus className="h-4 w-4" aria-hidden="true" />
                Cadastrar Currículo (Grátis)
              </a>
              <a
                href={MAZA_CONTACT.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#1ebe5d]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Grupo de Vagas no WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Barra de busca e filtros por área */}
      <div className="space-y-4 rounded-card border border-[#ECE5E5] bg-[#FAF8F8] p-4 sm:p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(12);
              }}
              placeholder="Pesquisar vaga por cargo, cidade ou palavra-chave..."
              aria-label="Pesquisar vagas"
              className="w-full rounded-full border border-[#E4DDDD] bg-white py-2.5 pl-10 pr-4 text-sm text-[#171717] placeholder:text-[#64748b] focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>
          <p className="text-xs font-semibold text-[#4c4c4c] sm:text-sm">
            Exibindo <strong className="text-[#18181B]">{filtered.length}</strong>{" "}
            {filtered.length === 1 ? "vaga" : "vagas"}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORY_OPTIONS.map((cat) => {
            const count = categoryCounts[cat.slug] ?? 0;
            const active = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug || "all"}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.slug);
                  setVisibleCount(12);
                }}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                  active
                    ? "bg-[#C8161D] text-white shadow-sm"
                    : "border border-[#E4DDDD] bg-white text-[#303030] hover:border-brand hover:text-brand"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                    active ? "bg-white/20 text-white" : "bg-[#F3ECEC] text-[#4c4c4c]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid de cards */}
      {displayed.length === 0 ? (
        <div className="rounded-card border border-[#ECE5E5] bg-white p-8 text-center">
          <p className="text-lg font-bold text-[#18181B]">
            Nenhuma vaga encontrada com esse filtro.
          </p>
          <p className="mt-2 text-sm text-[#4c4c4c]">
            Limpe a busca ou cadastre seu currículo gratuitamente no portal oficial da MaZa para
            participar das próximas seleções.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("");
              }}
              className="rounded-full bg-[#C8161D] px-5 py-2.5 text-sm font-bold text-white"
            >
              Ver todas as vagas
            </button>
            <a
              href={MAZA_CONTACT.candidatePortal}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#C8161D] px-5 py-2.5 text-sm font-bold text-[#C8161D]"
            >
              Cadastrar currículo
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((vacancy) => (
            <RealVacancyCard
              key={vacancy.id}
              vacancy={vacancy}
              onViewDetails={setActiveVacancy}
            />
          ))}
        </div>
      )}

      {/* Ação de rodapé: Ver todas (na Home) ou Carregar mais (em /vagas) */}
      {compactHome ? (
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/vagas"
            className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-[#18181B] px-7 text-sm font-bold text-white shadow-sm transition hover:bg-[#C8161D]"
          >
            Ver todas as {vacancies.length} vagas disponíveis
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <a
            href={MAZA_CONTACT.candidatePortal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[46px] items-center justify-center gap-2 rounded-full border border-[#18181B] bg-white px-6 text-sm font-bold text-[#18181B] transition hover:bg-primary-50"
          >
            <UserPlus className="h-4 w-4" aria-hidden="true" />
            Cadastrar Currículo (Grátis)
          </a>
        </div>
      ) : (
        filtered.length > visibleCount && (
          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="inline-flex items-center gap-2 rounded-full border border-[#18181B] bg-white px-8 py-3 text-sm font-bold text-[#18181B] transition hover:bg-[#991016] hover:text-white"
            >
              Carregar mais vagas ({filtered.length - visibleCount} restantes)
            </button>
          </div>
        )
      )}

      {/* Modal de descrição completa da vaga */}
      <Dialog
        open={Boolean(activeVacancy)}
        onClose={() => setActiveVacancy(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/55 backdrop-blur-xs" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {activeVacancy && (
            <Dialog.Panel className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-card bg-white shadow-2xl">
              <div className="relative h-40 w-full shrink-0 bg-[#18181B]">
                <Image
                  src={resolveVacancyImage(activeVacancy)}
                  alt={activeVacancy.title}
                  fill
                  sizes="680px"
                  className="object-cover object-center opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-[#18181B]/55 to-transparent" />
                <button
                  type="button"
                  onClick={() => setActiveVacancy(null)}
                  aria-label="Fechar detalhes da vaga"
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#171717] shadow hover:bg-white"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="inline-block rounded-full bg-[#0EA57A] px-2.5 py-0.5 text-[11px] font-bold">
                    {activeVacancy.categoryName}
                  </span>
                  <Dialog.Title className="mt-1.5 text-xl font-bold leading-snug sm:text-2xl">
                    {activeVacancy.title}
                  </Dialog.Title>
                </div>
              </div>

              <div className="flex-1 space-y-4 overflow-y-auto p-5 sm:p-6">
                <div className="grid gap-2.5 rounded-xl bg-[#FAF6F6] p-4 text-xs sm:grid-cols-3 sm:text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    <div>
                      <p className="text-[11px] font-bold uppercase text-[#64748b]">Local</p>
                      <p className="font-semibold text-[#171717]">{activeVacancy.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Banknote
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#0EA57A]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-[11px] font-bold uppercase text-[#64748b]">Remuneração</p>
                      <p className="font-semibold text-[#0b805e]">{activeVacancy.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#64748b]" aria-hidden="true" />
                    <div>
                      <p className="text-[11px] font-bold uppercase text-[#64748b]">Horário</p>
                      <p className="font-semibold text-[#171717]">{activeVacancy.schedule}</p>
                    </div>
                  </div>
                </div>

                <div className="whitespace-pre-line text-sm leading-relaxed text-[#303030]">
                  {activeVacancy.description}
                </div>

                <div className="flex items-start gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-xs text-[#18181B]">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#0EA57A]" aria-hidden="true" />
                  <span>
                    Cadastro e candidatura <strong>100% gratuitos</strong> pelo portal oficial da
                    MaZa Empregos, em conformidade com a LGPD.
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 border-t border-[#ECE5E5] bg-[#fafafa] p-4 sm:flex-row sm:p-5">
                <a
                  href={activeVacancy.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#C8161D] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#991016]"
                >
                  <UserPlus className="h-4 w-4" aria-hidden="true" />
                  Cadastrar / Candidatar-se
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={buildVacancyWhatsAppShareUrl(activeVacancy)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1ebe5d]"
                >
                  <Share2 className="h-4 w-4" aria-hidden="true" />
                  Compartilhar no WhatsApp
                </a>
              </div>
            </Dialog.Panel>
          )}
        </div>
      </Dialog>
    </div>
  );
}
