import {
  Banknote,
  Clock,
  ExternalLink,
  Eye,
  MapPin,
  Share2,
  UserPlus,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  buildVacancyWhatsAppShareUrl,
  type RealVacancy,
} from "@/data/realVacancies";
import { resolveVacancyCategoryName, resolveVacancyImage } from "@/lib/vacancyMedia";

type Props = {
  vacancy: RealVacancy;
  onViewDetails: (vacancy: RealVacancy) => void;
};

export default function RealVacancyCard({ vacancy, onViewDetails }: Props) {
  const shareUrl = buildVacancyWhatsAppShareUrl(vacancy);
  const coverImage = resolveVacancyImage(vacancy);
  const categoryLabel = resolveVacancyCategoryName(vacancy);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-[#ECE5E5] bg-white font-OpenSans text-[#303030] shadow-sm transition hover:border-brand/40 hover:shadow-homeProductCard">
      {/* Imagem contextual da vaga */}
      <div className="relative h-44 w-full overflow-hidden bg-surface-light">
        <Image
          src={coverImage}
          alt={`${vacancy.title} — ${categoryLabel}`}
          fill
          sizes="(min-width: 1280px) 380px, (min-width: 640px) 48vw, 95vw"
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#18181B]/80 via-[#18181B]/25 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#18181B] shadow-sm">
          {categoryLabel}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-[#0EA57A] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
          Grátis
        </span>
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="line-clamp-2 text-base font-bold leading-snug text-white drop-shadow-sm">
            {vacancy.title}
          </h3>
        </div>
      </div>

      {/* Informações organizadas */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="space-y-1.5 text-xs text-[#4c4c4c]">
          <p className="flex items-start gap-1.5">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
            <span className="line-clamp-1 font-medium text-[#1f2937]">{vacancy.location}</span>
          </p>
          <p className="flex items-start gap-1.5">
            <Banknote className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0EA57A]" aria-hidden="true" />
            <span className="line-clamp-1 font-semibold text-[#0b805e]">{vacancy.salary}</span>
          </p>
          <p className="flex items-start gap-1.5">
            <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#64748b]" aria-hidden="true" />
            <span className="line-clamp-1">{vacancy.schedule}</span>
          </p>
        </div>

        <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-[#555]">
          {vacancy.summary}
        </p>

        <button
          type="button"
          onClick={() => onViewDetails(vacancy)}
          className="mt-3 inline-flex w-fit items-center gap-1 text-xs font-bold text-brand hover:underline"
        >
          <Eye className="h-3.5 w-3.5" aria-hidden="true" />
          Ver descrição completa da vaga
        </button>

        {/* Botões principais: Cadastrar/Candidatar-se + Compartilhar no WhatsApp */}
        <div className="mt-auto grid grid-cols-1 gap-2 pt-4">
          <a
            href={vacancy.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-lg bg-[#C8161D] px-4 py-2 text-center text-xs font-bold text-white transition hover:bg-[#991016] sm:text-sm"
          >
            <UserPlus className="h-4 w-4 shrink-0" aria-hidden="true" />
            Cadastrar / Candidatar-se
            <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden="true" />
          </a>

          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-lg border border-[#25D366] bg-[#25D366]/10 px-4 py-2 text-center text-xs font-bold text-[#128C43] transition hover:bg-[#25D366] hover:text-white sm:text-sm"
          >
            <Share2 className="h-4 w-4 shrink-0" aria-hidden="true" />
            Compartilhar no WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
