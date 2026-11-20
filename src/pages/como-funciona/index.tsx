import { ArrowRight, Building2, UserCheck } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const companySteps = [
  {
    number: "1.",
    title: "Alinhamento do perfil e cultura",
    description:
      "Você preenche o briefing online ou conversa com um especialista MaZa para mapear requisitos técnicos, comportamentais e culturais da vaga.",
    tags: ["Operacional", "Administrativo", "Comercial", "Liderança"],
  },
  {
    number: "2.",
    title: "Divulgação multicanal e Job Hunting",
    description:
      "Ativamos nosso banco de talentos (construído desde 2011) e realizamos busca ativa de profissionais qualificados em Rio Preto, região e Brasil.",
    tags: ["Banco de Talentos", "Hunting Ativo"],
  },
  {
    number: "3.",
    title: "Triagem técnica e comportamental",
    description:
      "Realizamos entrevistas por competências, avaliação de perfil comportamental e aplicação de testes técnicos conforme a necessidade do cargo.",
    tags: ["Entrevista por Competências", "Testes & DISC"],
  },
  {
    number: "4.",
    title: "Apresentação dos finalistas",
    description:
      "Você recebe uma shortlist enxuta e qualificada com parecer detalhado de cada candidato, pronta para as entrevistas finais com seus gestores.",
    tags: ["Shortlist Qualificada", "Parecer Técnico"],
  },
  {
    number: "5.",
    title: "Aprovação, acompanhamento e LGPD",
    description:
      "Acompanhamos o fechamento da contratação e oferecemos serviços do MaZa Consulting para retenção, clima organizacional e desenvolvimento.",
    tags: ["Conformidade LGPD", "Apoio Contínuo"],
  },
];

const candidateSteps = [
  {
    number: "1.",
    title: "Cadastre seu currículo gratuitamente",
    description:
      "Preencha seu cadastro online diretamente pela plataforma oficial da MaZa Empregos. Não recebemos currículos por e-mail e nunca cobramos taxas.",
    tags: ["100% Gratuito", "Sem Dados Bancários"],
  },
  {
    number: "2.",
    title: "Explore vagas por área ou cidade",
    description:
      "Use a busca inteligente ou os filtros por segmento para encontrar vagas presenciais, híbridas ou remotas compatíveis com o seu momento profissional.",
    tags: ["Rio Preto e Região", "Vagas Remotas"],
  },
  {
    number: "3.",
    title: "Candidate-se diretamente na vaga",
    description:
      "Selecione as oportunidades alinhadas ao seu perfil e acompanhe seu cadastro pelo Portal do Candidato.",
    tags: ["Candidatura Online", "Dados Protegidos"],
  },
  {
    number: "4.",
    title: "Triagem e apoio Job Hunter",
    description:
      "Nossa equipe avalia a aderência do seu perfil às vagas abertas e aproxima talentos das empresas contratantes de forma transparente.",
    tags: ["Transparência", "Apoio em Processos"],
  },
  {
    number: "5.",
    title: "Entrevista e recolocação",
    description:
      "Os perfis selecionados avançam para entrevista com os recrutadores ou diretamente com a empresa contratante.",
    tags: ["Crescimento Profissional", "Recolocação"],
  },
];

export default function ComoFuncionaPage() {
  const [audience, setAudience] = useState<"empresas" | "candidatos">("empresas");
  const steps = audience === "empresas" ? companySteps : candidateSteps;

  return (
    <section className="space-y-8 pt-4">
      <Head>
        <title>Como Funciona | MaZa Empregos</title>
        <meta
          name="description"
          content="Entenda passo a passo como funciona o Recrutamento e Seleção para empresas e o cadastro gratuito de currículos para candidatos na MaZa Empregos."
        />
      </Head>

      <div className="flex flex-col items-start justify-between gap-4 rounded-card bg-surface-light p-6 md:flex-row md:items-center md:p-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand">
            Passo a Passo MaZa Empregos
          </span>
          <h1 className="mt-1 text-2xl font-bold text-[#18181B] md:text-4xl">
            Como funciona na prática
          </h1>
          <p className="mt-1 text-sm text-[#4c4c4c]">
            Escolha abaixo se você representa uma empresa ou é candidato(a).
          </p>
        </div>

        <div className="inline-flex rounded-full border border-[#E6DFDF] bg-white p-1">
          <button
            type="button"
            onClick={() => setAudience("empresas")}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
              audience === "empresas"
                ? "bg-brand text-white"
                : "text-[#4c4c4c] hover:text-[#991016]"
            }`}
          >
            <Building2 className="h-4 w-4" aria-hidden="true" />
            Para Empresas
          </button>
          <button
            type="button"
            onClick={() => setAudience("candidatos")}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
              audience === "candidatos"
                ? "bg-[#0EA57A] text-white"
                : "text-[#4c4c4c] hover:text-[#991016]"
            }`}
          >
            <UserCheck className="h-4 w-4" aria-hidden="true" />
            Para Candidatos
          </button>
        </div>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative aspect-[4/4] overflow-hidden rounded-card bg-surface-light lg:sticky lg:top-28">
          <Image
            src={
              audience === "empresas"
                ? "/images/recruitment-specialist.jpg"
                : "/images/career-growth.jpg"
            }
            alt={
              audience === "empresas"
                ? "Consultoria e Recrutamento para Empresas MaZa"
                : "Jornada do Candidato MaZa Empregos"
            }
            fill
            sizes="(min-width: 1024px) 540px, 100vw"
            className="object-cover object-top"
          />
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-[56px_1fr] gap-x-4 rounded-card border border-[#ededed] bg-white p-5 shadow-sm"
            >
              <span className="font-DMSerif text-5xl leading-none text-brand/30">
                {step.number}
              </span>
              <div>
                <h2 className="text-lg font-bold text-[#18181B]">{step.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-[#4c4c4c]">
                  {step.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-light px-3 py-1 text-xs font-semibold text-[#C8161D]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="pt-2">
            <Link
              href={
                audience === "empresas"
                  ? "/servicos/recrutamento-e-selecao"
                  : "/cadastrar-curriculo"
              }
              className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-dark"
            >
              {audience === "empresas"
                ? "Solicitar Recrutamento e Seleção"
                : "Cadastrar meu currículo grátis"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
