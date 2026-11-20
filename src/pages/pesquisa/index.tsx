import { Search } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { REAL_VACANCIES, type RealVacancy } from "@/data/realVacancies";
import { MAZA_CONTACT } from "@/utils/contact";
import RealVacancyCard from "@/ui/vagas/realVacancyCard";
import { Dialog } from "@headlessui/react";
import { Banknote, Clock, ExternalLink, MapPin, Share2, UserPlus, X } from "lucide-react";
import { buildVacancyWhatsAppShareUrl } from "@/data/realVacancies";

const quickTerms = [
  "Vendedor",
  "Administrativo",
  "Auxiliar",
  "Comercial",
  "Supervisor",
  "Desenvolvedor",
  "Soldador",
  "Analista",
];

export default function SearchPage() {
  const router = useRouter();
  const rawQuery = typeof router.query.v === "string" ? router.query.v : "";
  const [activeVacancy, setActiveVacancy] = useState<RealVacancy | null>(null);

  const results = useMemo(() => {
    const q = rawQuery.trim().toLowerCase();
    if (!q) return REAL_VACANCIES.slice(0, 24);
    return REAL_VACANCIES.filter((item) => {
      const haystack = `${item.title} ${item.categoryName} ${item.location} ${item.salary} ${item.description}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [rawQuery]);

  return (
    <div className="space-y-8 pt-6 font-WorkSans">
      <Head>
        <title>
          {rawQuery ? `Pesquisa: ${rawQuery}` : "Pesquisa de Vagas"} | MaZa Empregos
        </title>
        <meta
          name="description"
          content="Pesquise vagas abertas na MaZa Empregos em São José do Rio Preto, região e todo o Brasil."
        />
      </Head>

      <div>
        <h1 className="text-2xl font-bold text-[#18181B] lg:text-3xl">
          {rawQuery ? (
            <>
              Vagas encontradas para: <span className="text-brand">{`"${rawQuery}"`}</span>
            </>
          ) : (
            "Pesquisar Vagas na MaZa Empregos"
          )}
        </h1>
        <p className="mt-2 text-sm text-[#4c4c4c]">
          Exibindo <strong>{results.length}</strong>{" "}
          {results.length === 1 ? "vaga encontrada" : "vagas encontradas"}.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-[#666]">Buscas frequentes:</span>
          {quickTerms.map((term) => (
            <Link
              key={term}
              href={{ pathname: "/pesquisa", query: { v: term } }}
              className="rounded-full border border-[#E6DFDF] bg-surface-light px-3 py-1 text-xs font-semibold text-[#18181B] transition hover:border-brand hover:bg-white"
            >
              {term}
            </Link>
          ))}
        </div>
      </div>

      {results.length === 0 ? (
        <div className="rounded-card border border-[#ededed] bg-surface-light p-10 text-center">
          <Search className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-bold text-[#18181B]">
            Nenhuma vaga encontrada para {`"${rawQuery}"`}
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-[#4c4c4c]">
            Veja todas as vagas abertas ou cadastre seu currículo gratuitamente no portal oficial
            da MaZa para participar das próximas seleções.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/vagas"
              className="rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-white"
            >
              Ver todas as vagas
            </Link>
            <a
              href={MAZA_CONTACT.candidatePortal}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand px-6 py-2.5 text-sm font-bold text-brand"
            >
              Cadastrar currículo grátis
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.slice(0, 30).map((vacancy) => (
            <RealVacancyCard
              key={vacancy.id}
              vacancy={vacancy}
              onViewDetails={setActiveVacancy}
            />
          ))}
        </div>
      )}

      <Dialog
        open={Boolean(activeVacancy)}
        onClose={() => setActiveVacancy(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/55" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {activeVacancy && (
            <Dialog.Panel className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-card bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#ECE5E5] px-5 py-4">
                <Dialog.Title className="text-lg font-bold text-[#18181B]">
                  {activeVacancy.title}
                </Dialog.Title>
                <button
                  type="button"
                  onClick={() => setActiveVacancy(null)}
                  aria-label="Fechar"
                  className="rounded-full p-1.5 text-[#555] hover:bg-neutral-100"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="flex-1 space-y-4 overflow-y-auto p-5">
                <div className="flex flex-wrap gap-4 text-xs text-[#4c4c4c]">
                  <span className="inline-flex items-center gap-1 font-semibold">
                    <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                    {activeVacancy.location}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#0b805e]">
                    <Banknote className="h-3.5 w-3.5 text-[#0EA57A]" aria-hidden="true" />
                    {activeVacancy.salary}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {activeVacancy.schedule}
                  </span>
                </div>
                <div className="whitespace-pre-line text-sm leading-relaxed text-[#303030]">
                  {activeVacancy.description}
                </div>
              </div>
              <div className="flex flex-col gap-2.5 border-t border-[#ECE5E5] bg-[#fafafa] p-4 sm:flex-row">
                <a
                  href={activeVacancy.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#C8161D] px-5 py-3 text-sm font-bold text-white hover:bg-[#991016]"
                >
                  <UserPlus className="h-4 w-4" aria-hidden="true" />
                  Cadastrar / Candidatar-se
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={buildVacancyWhatsAppShareUrl(activeVacancy)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white hover:bg-[#1ebe5d]"
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
