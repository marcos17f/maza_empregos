import { ArrowRight, CheckCircle2, ExternalLink, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MAZA_ABOUT_INFO } from "@/data/mazaOfficial";
import { MAZA_CONTACT } from "@/utils/contact";

export default function AboutMazaSection() {
  return (
    <section
      id="sobre-a-maza"
      aria-labelledby="about-maza-title"
      className="overflow-hidden rounded-card border border-[#ECE5E5] bg-white p-6 font-WorkSans shadow-sm sm:p-8 lg:p-10"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div>
          <span className="inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
            Sobre a MaZa Empregos
          </span>
          <h2
            id="about-maza-title"
            className="mt-3 text-2xl font-bold leading-tight text-[#18181B] sm:text-3xl lg:text-[34px]"
          >
            {MAZA_ABOUT_INFO.title}
          </h2>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#4c4c4c] sm:text-base">
            {MAZA_ABOUT_INFO.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-[#FAF6F6] p-4">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#18181B]">
                <CheckCircle2 className="h-4 w-4 text-[#0EA57A]" aria-hidden="true" />
                Nossa Missão
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-[#4c4c4c]">
                {MAZA_ABOUT_INFO.mission}
              </p>
            </div>
            <div className="rounded-xl bg-[#FAF6F6] p-4">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#18181B]">
                <CheckCircle2 className="h-4 w-4 text-brand" aria-hidden="true" />
                Nossa Visão
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-[#4c4c4c]">
                {MAZA_ABOUT_INFO.vision}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={MAZA_CONTACT.candidatePortal}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#C8161D] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#991016]"
            >
              <UserPlus className="h-4 w-4" aria-hidden="true" />
              Cadastre seu Currículo
              <ExternalLink className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
            </a>
            <Link
              href="/como-funciona"
              className="inline-flex items-center gap-2 rounded-full border border-[#18181B] px-6 py-3 text-sm font-bold text-[#18181B] transition hover:bg-primary-50"
            >
              Como funciona
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 h-56 overflow-hidden rounded-2xl bg-surface-light sm:h-64">
            <Image
              src={MAZA_ABOUT_INFO.bannerImage}
              alt="MaZa Empregos em São José do Rio Preto"
              fill
              sizes="(min-width: 1024px) 480px, 95vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-44 overflow-hidden rounded-2xl bg-surface-light">
            <Image
              src={MAZA_ABOUT_INFO.founderImage}
              alt="Marina Zanurço — MaZa Empregos"
              fill
              sizes="(min-width: 1024px) 240px, 48vw"
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-between rounded-2xl bg-[linear-gradient(145deg,#18181B_0%,#C8161D_100%)] p-5 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FCA5A5]">
              Rio Preto & Brasil
            </span>
            <div>
              <p className="font-DMSerif text-3xl leading-none">+85</p>
              <p className="mt-1 text-xs text-white/85">Avaliações no Facebook</p>
              <p className="mt-3 font-DMSerif text-2xl leading-none">+62</p>
              <p className="mt-1 text-xs text-white/85">Empresas parceiras</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
