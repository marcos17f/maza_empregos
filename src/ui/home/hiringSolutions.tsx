import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { OPPORTUNITIES } from "@/data/catalog";
import { SPECIALIST_MESSAGE, whatsappLink } from "@/utils/contact";
import OpportunityCards from "./opportunityCards";
import HeroCarousel from "./heroCarousel";

const solutionItems = OPPORTUNITIES.filter((item) => item.featuredGroup === "solutions");

const benefits = [
  {
    title: "Triagem rigorosa e alinhada à cultura",
    description:
      "Cada candidato passa por análise curricular, entrevista por competências e verificação de aderência ao perfil da empresa.",
  },
  {
    title: "Cadastro 100% gratuito para candidatos",
    description:
      "Transparência total: candidatos nunca pagam taxas e jamais solicitamos informações bancárias na plataforma.",
  },
  {
    title: "Atuação desde 2011 em Rio Preto e Brasil",
    description:
      "Mais de uma década de relacionamento com empresas contratantes e banco de talentos continuamente atualizado.",
  },
  {
    title: "MaZa Consulting completo para o seu RH",
    description:
      "Análise comportamental, pesquisa de clima, avaliação 360°, perfil de cargos, testes técnicos e treinamentos.",
  },
  {
    title: "Atendimento ágil e 100% online",
    description:
      "Processos digitais descomplicados tanto para gestores quanto para profissionais em busca de recolocação.",
  },
  {
    title: "Conformidade integral com a LGPD",
    description:
      "Seus dados corporativos e curriculares tratados com sigilo, ética e segurança jurídica.",
  },
];

const carouselSlides = [
  {
    title: "Dificuldade para encontrar profissionais qualificados?",
    subtitle: "Fale com um especialista da MaZa e estruture seu processo seletivo hoje mesmo.",
    cta: "Falar no WhatsApp",
    href: whatsappLink(SPECIALIST_MESSAGE),
    external: true,
    bg: "bg-[linear-gradient(95deg,#18181B_0%,#C8161D_100%)]",
    icon: Users,
  },
  {
    title: "Em transição de carreira ou busca do primeiro emprego?",
    subtitle: "Atuamos como Job Hunter aproximando o seu currículo das vagas certas no mercado.",
    cta: "Cadastrar currículo grátis",
    href: "/cadastrar-curriculo",
    external: false,
    bg: "bg-[linear-gradient(95deg,#0C6B53_0%,#0EA57A_100%)]",
    icon: TrendingUp,
  },
  {
    title: "Alta rotatividade impactando os resultados da equipe?",
    subtitle: "Resolva com Pesquisa de Clima, Análise Comportamental e Entrevista de Desligamento.",
    cta: "Conhecer MaZa Consulting",
    href: "/consultoria",
    external: false,
    bg: "bg-[linear-gradient(95deg,#1E293B_0%,#C8161D_100%)]",
    icon: Sparkles,
  },
];

export default function HiringSolutions() {
  return (
    <div id="solucoes-e-profissionais" className="w-full">
      <section aria-label="Soluções para empresas e candidatos" className="flex flex-col gap-3">
        {/* Banner 1 */}
        <Link
          href="/servicos/recrutamento-e-selecao"
          className="group flex flex-col justify-between gap-4 rounded-card bg-[#18181B] px-6 py-7 text-white transition hover:bg-[#C8161D] md:flex-row md:items-center md:px-10"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FCA5A5]">
              Recrutamento & Seleção MaZa
            </span>
            <h3 className="mt-1 text-2xl font-bold md:text-3xl">
              Conectamos sua empresa aos profissionais certos, sem burocracia.
            </h3>
            <p className="mt-1 text-sm text-white/85 md:text-base">
              Perfis operacionais, administrativos, comerciais, TI e liderança com parecer completo.
            </p>
          </div>
          <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#18181B] transition group-hover:scale-[1.02]">
            Solicitar agora <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </Link>

        {/* Carrossel intermediário */}
        <HeroCarousel
          label="Soluções da MaZa Empregos"
          slides={carouselSlides.map(({ title, subtitle, cta, href, external, bg, icon: Icon }) => {
            const content = (
              <div
                className={`flex min-h-[168px] flex-col justify-between gap-4 rounded-card px-6 py-7 text-white md:flex-row md:items-center md:px-14 ${bg}`}
              >
                <div className="flex items-start gap-4">
                  <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 sm:flex">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
                    <p className="mt-1 max-w-2xl text-sm text-white/90 md:text-base">{subtitle}</p>
                  </div>
                </div>
                <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/80 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#991016]">
                  {cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            );

            return external ? (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer" className="block">
                {content}
              </a>
            ) : (
              <Link key={title} href={href} className="block">
                {content}
              </Link>
            );
          })}
        />

        {/* Banner 3 */}
        <Link
          href="/cadastrar-curriculo"
          className="group flex flex-col justify-between gap-4 rounded-card border border-[#F6D5D6] bg-[#FDF2F2] px-6 py-6 text-[#18181B] transition hover:bg-[#F6D5D6]/60 md:flex-row md:items-center md:px-10"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#0EA57A]" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-bold md:text-xl">
                Está buscando uma nova oportunidade? Cadastre seu currículo gratuitamente.
              </h3>
              <p className="mt-0.5 text-sm text-[#4c4c4c]">
                Envio 100% online pelo site oficial • Não aceitamos currículos por e-mail •
                Protegido pela LGPD.
              </p>
            </div>
          </div>
          <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#18181B] px-5 py-2.5 text-sm font-bold text-white">
            Cadastrar currículo <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </Link>
      </section>

      <section aria-labelledby="solutions-grid-title" className="mt-section">
        <h2
          id="solutions-grid-title"
          className="mb-4 font-OpenSans text-2xl font-semibold text-[#18181B] lg:text-[28px]"
        >
          Soluções de RH e carreiras em destaque
        </h2>
        <OpportunityCards items={solutionItems} />
        <div className="mt-section flex justify-center">
          <Link
            href="/consultoria"
            className="flex h-[45px] w-48 items-center justify-center gap-2 rounded-[24px] border border-[#18181B] bg-white text-sm font-bold uppercase tracking-[0.04em] text-[#18181B] transition-colors hover:bg-[#991016] hover:text-white"
          >
            Ver soluções <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.2} />
          </Link>
        </div>
      </section>

      <section
        aria-label="Benefícios da MaZa Empregos"
        className="mt-section rounded-card bg-[#FAF8F8] px-5 py-7 lg:px-10 lg:py-9"
      >
        <ul className="grid list-disc gap-6 pl-4 marker:text-brand sm:grid-cols-2 lg:w-full lg:grid-cols-3 lg:gap-x-10 lg:gap-y-8">
          {benefits.map(({ title, description }) => (
            <li key={title} className="pl-1">
              <h3 className="text-sm font-bold uppercase leading-relaxed tracking-wide text-[#18181B]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4c4c4c]">{description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
