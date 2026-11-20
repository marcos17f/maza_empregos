import { CheckCircle2, ShieldAlert, ShieldCheck, Upload } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SEGMENTS } from "@/data/catalog";
import { MAZA_CONTACT } from "@/utils/contact";
import { maskPhone } from "@/utils/mask";

const areas = SEGMENTS.filter((s) => s.category === "vagas");

export default function CadastrarCurriculoPage() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("São José do Rio Preto - SP");
  const [area, setArea] = useState(areas[0]?.name ?? "Administrativo");
  const [objetivo, setObjetivo] = useState("");
  const [resumo, setResumo] = useState("");
  const [arquivo, setArquivo] = useState("");
  const [lgpdAccepted, setLgpdAccepted] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof router.query.vaga === "string" && router.query.vaga) {
      setObjetivo(router.query.vaga);
    }
  }, [router.query.vaga]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      setError("Preencha nome completo, e-mail e WhatsApp.");
      return;
    }
    if (!lgpdAccepted) {
      setError("É necessário autorizar o tratamento dos dados conforme a LGPD.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 pt-4">
      <Head>
        <title>Cadastrar Currículo Gratuitamente | MaZa Empregos</title>
        <meta
          name="description"
          content="Cadastre seu currículo gratuitamente na MaZa Empregos. Conformidade LGPD, envio 100% online e oportunidades em Rio Preto, região e todo o Brasil."
        />
      </Head>

      <div className="rounded-card bg-[linear-gradient(100deg,#18181B_0%,#C8161D_100%)] p-6 text-white md:p-9">
        <span className="inline-block rounded-full bg-[#0EA57A] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          100% Gratuito para Candidatos
        </span>
        <h1 className="mt-3 text-2xl font-bold md:text-4xl">Cadastre seu currículo na MaZa</h1>
        <p className="mt-2 max-w-2xl text-sm text-white/90 md:text-base">
          Conecte seu perfil profissional às vagas das empresas parceiras da MaZa Empregos em São
          José do Rio Preto, região e oportunidades remotas em todo o Brasil.
        </p>
      </div>

      {/* Aviso de segurança oficial MaZa */}
      <div className="flex items-start gap-3 rounded-card border border-emerald-200 bg-emerald-50 p-4 text-sm text-[#18181B]">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#0EA57A]" aria-hidden="true" />
        <div>
          <p className="font-bold">Aviso de Segurança e LGPD</p>
          <p className="mt-0.5 text-xs text-[#303030] sm:text-sm">
            A MaZa Empregos <strong>nunca cobra taxas</strong> de candidatos,{" "}
            <strong>não solicita dados bancários</strong> e não recebe currículos por e-mail. Todo
            o processo acontece exclusivamente pela plataforma oficial.
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="rounded-card border border-emerald-200 bg-white p-8 text-center shadow-sm">
          <CheckCircle2 className="mx-auto h-12 w-12 text-[#0EA57A]" aria-hidden="true" />
          <h2 className="mt-4 text-2xl font-bold text-[#18181B]">
            Currículo cadastrado com sucesso!
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-[#4c4c4c]">
            Obrigado, <strong>{nome}</strong>! Seus dados foram registrados no banco de talentos da{" "}
            <strong>MaZa Empregos</strong> para a área de <strong>{area}</strong>. Você também
            pode acompanhar candidaturas no portal oficial do candidato.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/vagas"
              className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-dark"
            >
              Explorar vagas abertas
            </Link>
            <a
              href={MAZA_CONTACT.candidatePortal}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-brand px-6 py-3 text-sm font-bold text-brand hover:bg-primary-50"
            >
              Ir ao Portal do Candidato
            </a>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-card border border-[#ededed] bg-white p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="cv-nome" className="mb-1.5 block text-sm font-semibold text-[#171717]">
                Nome completo *
              </label>
              <input
                id="cv-nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome completo"
                className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>
            <div>
              <label htmlFor="cv-email" className="mb-1.5 block text-sm font-semibold text-[#171717]">
                E-mail *
              </label>
              <input
                id="cv-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>
            <div>
              <label htmlFor="cv-tel" className="mb-1.5 block text-sm font-semibold text-[#171717]">
                WhatsApp / Telefone *
              </label>
              <input
                id="cv-tel"
                type="tel"
                inputMode="tel"
                value={telefone}
                onChange={(e) => setTelefone(maskPhone(e.target.value))}
                placeholder="(17) 99999-9999"
                className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>
            <div>
              <label htmlFor="cv-cidade" className="mb-1.5 block text-sm font-semibold text-[#171717]">
                Cidade / Estado
              </label>
              <input
                id="cv-cidade"
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>
            <div>
              <label htmlFor="cv-area" className="mb-1.5 block text-sm font-semibold text-[#171717]">
                Área de interesse
              </label>
              <select
                id="cv-area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full rounded-lg border border-[#E2DBDB] bg-white px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              >
                {areas.map((item) => (
                  <option key={item.slug} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="cv-obj" className="mb-1.5 block text-sm font-semibold text-[#171717]">
                Cargo ou vaga desejada
              </label>
              <input
                id="cv-obj"
                type="text"
                value={objetivo}
                onChange={(e) => setObjetivo(e.target.value)}
                placeholder="Ex: Analista Administrativo, Vendedor..."
                className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </div>
          </div>

          <div>
            <label htmlFor="cv-resumo" className="mb-1.5 block text-sm font-semibold text-[#171717]">
              Resumo profissional e experiências
            </label>
            <textarea
              id="cv-resumo"
              rows={4}
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
              placeholder="Conte brevemente sobre sua formação, últimas experiências e diferenciais..."
              className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
          </div>

          <div>
            <label
              htmlFor="cv-file"
              className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#cbd5e1] bg-surface-light px-4 py-6 text-center transition hover:border-brand"
            >
              <Upload className="h-6 w-6 text-brand" aria-hidden="true" />
              <span className="mt-2 text-sm font-semibold text-[#18181B]">
                {arquivo ? `Arquivo selecionado: ${arquivo}` : "Anexar currículo em PDF ou DOCX (opcional)"}
              </span>
              <span className="mt-1 text-xs text-[#666]">Tamanho máximo recomendado: 5 MB</span>
              <input
                id="cv-file"
                type="file"
                accept=".pdf,.doc,.docx"
                className="sr-only"
                onChange={(e) => setArquivo(e.target.files?.[0]?.name ?? "")}
              />
            </label>
          </div>

          <label className="flex items-start gap-2.5 text-xs text-[#4c4c4c]">
            <input
              type="checkbox"
              checked={lgpdAccepted}
              onChange={(e) => setLgpdAccepted(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-[#cbd5e1] text-brand focus:ring-brand"
            />
            <span>
              Concordo com a{" "}
              <Link href="/politica-de-privacidade" className="font-semibold text-brand underline">
                Política de Privacidade (LGPD)
              </Link>{" "}
              e autorizo a MaZa Empregos a utilizar meus dados exclusivamente para processos
              seletivos e oportunidades de carreira.
            </span>
          </label>

          {error && (
            <p role="alert" className="text-xs font-semibold text-error">
              {error}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#666]">
              <ShieldCheck className="h-4 w-4 text-[#0EA57A]" aria-hidden="true" />
              Seus dados são protegidos pela Lei nº 13.709/2018.
            </span>
            <button
              type="submit"
              className="rounded-full bg-brand px-8 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-dark"
            >
              Enviar currículo gratuitamente
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
