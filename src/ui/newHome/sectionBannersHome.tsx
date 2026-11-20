import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SEGMENTS } from "@/data/catalog";
import HomeBannerCarousel from "./homeBannerCarousel";

const hiringBenefits = [
  "Alinhamento do perfil com a cultura da empresa",
  "Triagem técnica e entrevistas por competências",
  "Banco de talentos ativo desde 2011",
  "Atuação regional em Rio Preto e alcance nacional",
  "Conformidade total com a LGPD",
];

const categories = SEGMENTS.filter((item) => item.category === "vagas");

export default function SectionBannersHome() {
  return (
    <section
      aria-label="Encontre profissionais e vagas por área"
      className="mx-auto w-full font-OpenSans text-neutral-900"
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(240px,1fr)] lg:gap-6">
        <div className="flex overflow-hidden rounded-card bg-promo-surface">
          <HomeBannerCarousel />
        </div>

        <aside
          aria-labelledby="hiring-promise-title"
          className="flex flex-col rounded-card bg-surface-light px-[22px] py-6 text-[#1a1a1a]"
        >
          <h2 id="hiring-promise-title" className="leading-tight text-[#18181B]">
            <span className="block text-2xl font-semibold xl:text-[26px]">Contrate com</span>
            <span className="block text-3xl font-black xl:text-[32px]">assertividade</span>
          </h2>
          <p className="mt-3 text-sm font-semibold leading-5 text-[#303030] xl:text-base">
            Da abertura da vaga à aprovação dos finalistas.
          </p>
          <ul className="mb-5 mt-5 list-none space-y-3.5 text-sm font-normal leading-5 text-[#232323] xl:text-[15px]">
            {hiringBenefits.map((benefit) => (
              <li key={benefit} className="flex gap-2">
                <span aria-hidden="true" className="font-bold text-brand">
                  •
                </span>
                {benefit}
              </li>
            ))}
          </ul>
          <Link
            href="/servicos/recrutamento-e-selecao"
            className="mt-auto inline-flex items-center gap-1 self-start text-[15px] font-semibold text-brand transition-colors hover:text-brand-dark hover:underline"
          >
            Solicitar recrutamento
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </aside>
      </div>

      <nav aria-label="Explorar por área de atuação" className="mt-section">
        <ul className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ name, slug, image }) => (
            <li key={slug}>
              <Link
                href={`/vagas/${slug}#segmentos`}
                className="group flex h-[133px] items-center justify-between overflow-hidden rounded-[20px] bg-surface-light pl-[22px] transition-colors hover:bg-[#F6E7E8]"
              >
                <div className="flex flex-col gap-1.5 text-base font-semibold leading-5 tracking-[0.01em]">
                  <h3 className="text-[#18181B]">{name}</h3>
                  <span className="text-sm font-medium text-[#C8161D] group-hover:underline">
                    Ver oportunidades
                  </span>
                </div>
                <div className="relative mr-3 h-[108px] w-[124px] shrink-0 self-end overflow-hidden rounded-t-xl shadow-sm">
                  <Image
                    src={image}
                    alt={`Área de ${name}`}
                    fill
                    sizes="124px"
                    className="pointer-events-none object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/vagas"
          aria-label="Ver todas as áreas de atuação"
          className="mx-auto mt-5 flex h-[45px] w-44 items-center justify-center gap-2 rounded-[24px] border border-[#18181B] bg-white text-sm font-bold uppercase tracking-[0.04em] text-[#18181B] transition-colors hover:bg-[#991016] hover:text-white"
        >
          Ver todos
          <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
        </Link>
      </nav>
    </section>
  );
}
