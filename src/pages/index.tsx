import dynamic from "next/dynamic";
import Head from "next/head";
import { Star } from "lucide-react";
import { Reveal } from "@/ui/related/reveal";
import FeaturingCarousel from "@/ui/home/featuringCarousel";
import RecrutamentoESelecao from "@/ui/home/RecrutamentoESelecao";
import RealVacancyBoard from "@/ui/vagas/realVacancyBoard";
import OfficialServicesSection from "@/ui/home/officialServicesSection";
import AboutMazaSection from "@/ui/home/aboutMazaSection";
import { MAZA_CONTACT } from "@/utils/contact";

const DynamicSectionBannersHome = dynamic(() => import("@/ui/newHome/sectionBannersHome"));
const DynamicClientTestimonials = dynamic(
  () => import("@/ui/newHome/clientTestimonialsSection"),
);
const DynamicBrandSections = dynamic(() => import("@/ui/newHome/brandSections"));

const highlightCard =
  "flex h-[155px] flex-col items-center justify-center rounded-[20px] bg-[#FAF6F6] px-4 text-center transition hover:bg-[#F8E5E6] min-[901px]:h-[210px]";

export default function Home() {
  return (
    <div className="home-font -mt-header-gap w-full lg:mt-[calc(16px-var(--space-header))]">
      <Head>
        <title>MaZa Empregos | Agência de Empregos, Vagas, Recrutamento e Seleção</title>
        <meta
          name="description"
          content="Mais do que uma agência de empregos. Confira vagas abertas em São José do Rio Preto e região, cadastre seu currículo gratuitamente e conheça os serviços de Recrutamento, MaZa Consulting e Aplicação de Testes."
          key="desc"
        />
      </Head>

      <div className="full-bleed relative block overflow-hidden">
        <FeaturingCarousel />
      </div>

      <div className="flex flex-col gap-section pt-section">
        {/* Números e credenciais oficiais da MaZa */}
        <section
          aria-label="Números e diferenciais da MaZa Empregos"
          className="grid w-full grid-cols-2 gap-4 min-[481px]:grid-cols-3 min-[901px]:grid-cols-6"
        >
          <div className={`${highlightCard} text-[#C8161D]`}>
            <span className="font-DMSerif text-[20px] leading-none min-[901px]:text-[24px]">
              Desde
            </span>
            <span className="font-DMSerif text-[40px] leading-none min-[901px]:text-[52px]">
              2011
            </span>
          </div>

          <a
            href={MAZA_CONTACT.facebookReviews}
            target="_blank"
            rel="noopener noreferrer"
            className={`${highlightCard} text-[#C8161D]`}
          >
            <span className="font-DMSerif text-[36px] leading-none min-[901px]:text-[46px]">
              +85
            </span>
            <span className="mt-1.5 text-sm font-semibold text-[#111] min-[901px]:text-base">
              Avaliações no Facebook
            </span>
            <span
              role="img"
              aria-label="5 de 5 estrelas"
              className="mt-1.5 inline-flex gap-0.5 text-[#C8161D]"
            >
              {[0, 1, 2, 3, 4].map((star) => (
                <Star
                  key={star}
                  aria-hidden="true"
                  className="h-3.5 w-3.5 fill-current"
                  strokeWidth={0}
                />
              ))}
            </span>
          </a>

          <a href="#empresas-parceiras" className={`${highlightCard} text-[#C8161D]`}>
            <span className="font-DMSerif text-[36px] leading-none min-[901px]:text-[46px]">
              +62
            </span>
            <span className="mt-1.5 text-sm font-semibold text-[#111] min-[901px]:text-base">
              Empresas parceiras
            </span>
          </a>

          <div className={highlightCard}>
            <p className="text-[15px] font-semibold leading-[1.35] text-[#111] min-[901px]:text-[18px]">
              Cadastro 100% gratuito para candidatos
            </p>
          </div>

          <div className={highlightCard}>
            <p className="text-[15px] font-semibold leading-[1.35] text-[#111] min-[901px]:text-[18px]">
              São José do Rio Preto, região e Brasil
            </p>
          </div>

          <div className={highlightCard}>
            <p className="text-[15px] font-semibold leading-[1.35] text-[#111] min-[901px]:text-[18px]">
              Conformidade total com a LGPD
            </p>
          </div>
        </section>

        {/* Vagas reais do portal oficial da MaZa organizadas com imagem, cadastrar e WhatsApp */}
        <section id="vagas-em-destaque" aria-labelledby="home-vagas-title" className="w-full">
          <div className="mb-5">
            <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0EA57A]">
              Oportunidades Abertas • Portal Oficial MaZa
            </span>
            <h2
              id="home-vagas-title"
              className="mt-2 font-WorkSans text-2xl font-bold text-[#18181B] lg:text-[32px]"
            >
              Vagas disponíveis para você se candidatar
            </h2>
            <p className="mt-1 text-sm text-[#4c4c4c] md:text-base">
              Filtre por área, veja os detalhes completos, cadastre-se gratuitamente no portal da
              MaZa ou compartilhe a vaga no WhatsApp.
            </p>
          </div>
          <RealVacancyBoard compactHome homeLimit={6} />
        </section>

        {/* Mais do que uma agência de empregos (informações oficiais MaZa) */}
        <Reveal>
          <AboutMazaSection />
        </Reveal>

        {/* Carrossel de empresas parceiras ("Empresas que confiam em nosso trabalho") + LGPD + WhatsApp */}
        <Reveal>
          <DynamicBrandSections />
        </Reveal>

        {/* Carrossel de depoimentos em vídeo ("O que nossos clientes dizem sobre a MaZa") */}
        <Reveal>
          <DynamicClientTestimonials />
        </Reveal>

        {/* Carrossel de destaques e navegação por áreas */}
        <Reveal>
          <DynamicSectionBannersHome />
        </Reveal>

        {/* Serviços oficiais da MaZa (exatamente os 3 de mazaempregos.com.br/servicos) */}
        <Reveal>
          <OfficialServicesSection />
        </Reveal>

        {/* Briefing rápido para empresas abrirem vaga */}
        <Reveal>
          <RecrutamentoESelecao />
        </Reveal>
      </div>
    </div>
  );
}
