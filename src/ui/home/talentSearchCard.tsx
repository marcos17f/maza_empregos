import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const quickAreas = [
  { label: "Administrativo", slug: "administrativo" },
  { label: "Comercial", slug: "comercial-e-vendas" },
  { label: "Tecnologia", slug: "tecnologia" },
  { label: "Indústria", slug: "industria-e-operacoes" },
];

type Props = {
  variant: "desktop" | "mobile";
  className?: string;
  tagClassName?: string;
};

export default function TalentSearchCard({
  variant,
  className = "",
  tagClassName = "bg-brand",
}: Props) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchTerm.trim();
    if (query) {
      router.push({ pathname: "/pesquisa", query: { v: query } });
    }
  };

  if (variant === "mobile") {
    return (
      <div className={`rounded-card bg-surface-card p-5 ${className}`}>
        <div className="mx-auto mb-3 flex w-fit rounded-xl bg-brand px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white md:mx-0">
          MaZa Talentos
        </div>

        <h2 className="text-center text-2xl font-bold leading-[1.1] tracking-[-0.03em] text-[#171717] md:text-left">
          Encontre a vaga ou o talento que você precisa.
        </h2>

        <form
          onSubmit={handleSearch}
          role="search"
          className="mt-4 flex items-center gap-3 rounded-full border border-[#d8d8d8] bg-white px-4 py-2.5 shadow-sm"
        >
          <button type="submit" aria-label="Pesquisar" className="shrink-0 text-[#C8161D]">
            <Search className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </button>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-label="Pesquisar vagas ou serviços de RH"
            placeholder="Cargo, área ou solução de RH..."
            className="w-full border-0 bg-transparent text-base text-[#2a2a2a] placeholder:text-[#666] focus:outline-none"
          />
        </form>

        <div className="mt-4 grid auto-rows-fr grid-cols-2 gap-2.5 text-sm font-semibold">
          {quickAreas.map(({ label, slug }) => (
            <Link
              key={slug}
              href={`/vagas/${slug}`}
              className="flex items-center justify-center rounded-full bg-[#131316] px-3 py-2.5 text-white transition hover:bg-brand"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[520px] rounded-card bg-white p-6 text-[#171717] shadow-[0_18px_40px_rgba(0,0,0,0.22)] lg:px-7 lg:py-6">
      <div
        className={`mb-2.5 inline-flex rounded-full ${tagClassName} px-3.5 py-1 text-xs font-bold uppercase tracking-[0.06em] text-white`}
      >
        MaZa Talentos
      </div>

      <h2 className="text-2xl font-bold leading-[1.2] tracking-[-0.02em] text-[#18181B]">
        Encontre a vaga ou o talento que você precisa.
      </h2>

      <p className="mt-2 text-[13px] leading-snug text-[#4c4c4c]">
        Busca inteligente para candidatos se candidatarem grátis e empresas contratarem com
        assertividade e conformidade LGPD.
      </p>

      <form
        onSubmit={handleSearch}
        role="search"
        className="mt-4 flex items-center gap-3 rounded-full border border-[#d8d8d8] bg-white px-4 py-2.5 shadow-sm focus-within:border-brand focus-within:ring-1 focus-within:ring-brand"
      >
        <button type="submit" aria-label="Pesquisar" className="shrink-0 text-[#C8161D]">
          <Search className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
        </button>
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          aria-label="Pesquisar vagas ou serviços de RH"
          placeholder="Cargo, área ou solução de RH..."
          className="w-full border-0 bg-transparent text-sm text-[#2a2a2a] placeholder:text-[#666] focus:outline-none"
        />
      </form>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {quickAreas.map(({ label, slug }) => (
          <Link
            key={slug}
            href={`/vagas/${slug}`}
            className="rounded-full bg-[#131316] px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-brand"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
