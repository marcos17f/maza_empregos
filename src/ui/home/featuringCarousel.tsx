import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SPECIALIST_MESSAGE, whatsappLink } from "@/utils/contact";
import useScrollbarWidth from "@/utils/hooks/useScrollbarWidth";
import MazaLogo from "@/ui/brand/MazaLogo";
import HeroCarousel from "./heroCarousel";
import TalentSearchCard from "./talentSearchCard";

const specialistHref = whatsappLink(SPECIALIST_MESSAGE);
const HERO_TITLE =
  "MaZa Empregos: o talento certo para sua empresa e a vaga certa para sua carreira.";

type HeroSlideContent = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  primaryCta: { label: string; href: string };
  image: string;
  imageAlt: string;
  bgClass: string;
  tagClass: string;
};

const slides: HeroSlideContent[] = [
  {
    id: "recrutamento-e-vagas",
    eyebrow: "Desde 2011 • São José do Rio Preto e todo o Brasil",
    title: (
      <>
        O talento certo para sua empresa.{" "}
        <strong className="font-black text-[#FCA5A5]">A vaga certa para você.</strong>
      </>
    ),
    subtitle:
      "Recrutamento e Seleção, MaZa Consulting e Aplicação de Testes. Cadastro 100% gratuito para candidatos e vagas abertas em Rio Preto e região.",
    primaryCta: { label: "Ver vagas disponíveis", href: "/vagas" },
    image: "/images/vagas/vaga-comercial-b2b.jpg",
    imageAlt: "Equipe de recrutamento e empresas parceiras MaZa Empregos",
    bgClass: "bg-[linear-gradient(110deg,#16080A_0%,#7A0D12_52%,#B9141B_100%)]",
    tagClass: "bg-brand",
  },
  {
    id: "maza-consulting",
    eyebrow: "Serviços MaZa • Recrutamento, Consulting e Testes",
    title: (
      <>
        Contrate com assertividade e{" "}
        <strong className="font-black text-[#FCA5A5]">desenvolva sua equipe.</strong>
      </>
    ),
    subtitle:
      "Recrutamento e Seleção, MaZa Consulting (Avaliação de Cargo, Treinamentos, Pesquisa de Clima, Avaliação 360°, Perfil Comportamental e Desligamento) e Aplicação de Testes.",
    primaryCta: { label: "Conhecer Serviços", href: "/servicos" },
    image: "/images/career-growth.jpg",
    imageAlt: "Consultoria de RH e mentoria de carreira MaZa Empregos",
    bgClass: "bg-[linear-gradient(110deg,#18181B_0%,#4A0B10_52%,#991016_100%)]",
    tagClass: "bg-[#C8161D]",
  },
];

function HeroCtas({
  stacked,
  primaryCta,
}: {
  stacked: boolean;
  primaryCta: { label: string; href: string };
}) {
  const base =
    "inline-flex min-h-[46px] items-center justify-center whitespace-nowrap rounded-full px-6 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:text-base";
  return (
    <div
      className={
        stacked
          ? "flex w-full flex-col gap-3 sm:flex-row sm:justify-center"
          : "flex flex-wrap gap-3"
      }
    >
      <Link href={primaryCta.href} className={`${base} bg-white text-[#18181B] hover:bg-neutral-100`}>
        {primaryCta.label}
      </Link>
      <a
        href={specialistHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border-2 border-white/85 text-white hover:bg-white/10`}
      >
        Falar com especialista
        <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
      </a>
    </div>
  );
}

function MobileSlide({ slide, priority }: { slide: HeroSlideContent; priority: boolean }) {
  return (
    <section
      className={`relative flex min-h-[460px] flex-col justify-between overflow-hidden px-gutter pb-10 pt-7 text-white md:min-h-[420px] md:justify-center ${slide.bgClass}`}
    >
      <div className="absolute inset-0 opacity-20">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="relative z-10 mx-auto flex max-w-[480px] flex-col items-center text-center md:max-w-[640px]">
        <MazaLogo variant="white" className="mb-3" />
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white/95">
          {slide.eyebrow}
        </span>
        <h2 className="mt-3 text-[clamp(1.6rem,5.5vw,2.35rem)] font-bold leading-tight">
          {slide.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-white/90 md:text-base">{slide.subtitle}</p>
        <div className="mt-5 w-full max-w-[360px] sm:max-w-none">
          <HeroCtas stacked primaryCta={slide.primaryCta} />
        </div>
      </div>
    </section>
  );
}

function DesktopSlide({ slide, priority }: { slide: HeroSlideContent; priority: boolean }) {
  return (
    <section
      className={`relative min-h-[500px] w-full overflow-hidden text-white xl:min-h-[540px] ${slide.bgClass}`}
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[62%] opacity-45">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority={priority}
          sizes="65vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#16080A] via-[#16080A]/70 to-[#16080A]/30" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[500px] max-w-page grid-cols-[minmax(0,1fr)_minmax(340px,430px)] items-center gap-10 px-gutter py-12 lg:px-16 xl:min-h-[540px]">
        <div className="max-w-[640px]">
          <div className="flex flex-wrap items-center gap-3">
            <MazaLogo
              variant="white"
              className="rounded-2xl bg-white px-4 py-2 shadow-lg ring-1 ring-black/10"
            />
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white/95 backdrop-blur-sm">
              {slide.eyebrow}
            </span>
          </div>
          <h2 className="mt-5 text-[clamp(2rem,3vw,3.1rem)] font-bold leading-[1.12] tracking-tight">
            {slide.title}
          </h2>
          <p className="mt-4 max-w-[540px] text-base leading-relaxed text-white/90">
            {slide.subtitle}
          </p>
          <div className="mt-7">
            <HeroCtas stacked={false} primaryCta={slide.primaryCta} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-white/80">
            <span>• Cadastro gratuito para candidatos</span>
            <span>• Atendimento 100% online</span>
            <span>• Conformidade total com a LGPD</span>
          </div>
        </div>

        <div>
          <TalentSearchCard variant="desktop" tagClassName={slide.tagClass} />
        </div>
      </div>
    </section>
  );
}

export default function FeaturingCarousel() {
  useScrollbarWidth();

  return (
    <>
      <h1 className="sr-only">{HERO_TITLE}</h1>
      <div className="lg:hidden">
        <HeroCarousel
          label="Banner principal"
          stretch
          showArrows={false}
          slides={slides.map((slide, index) => (
            <MobileSlide key={slide.id} slide={slide} priority={index === 0} />
          ))}
        />
        <div className="px-gutter">
          <TalentSearchCard variant="mobile" className="mt-section" />
        </div>
      </div>
      <div className="hidden lg:block">
        <HeroCarousel
          label="Banner principal"
          slides={slides.map((slide, index) => (
            <DesktopSlide key={slide.id} slide={slide} priority={index === 0} />
          ))}
        />
      </div>
    </>
  );
}
