import React, { useState } from "react";
import { ArrowLeft, CheckCircle2, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/utils/contact";
import { maskPhone } from "@/utils/mask";

type FormDataState = {
  cargo: string;
  area: string;
  modelo: string;
  quantidade: string;
  cidade: string;
  faixaSalarial: string;
  requisitos: string;
  empresa: string;
  responsavel: string;
  whatsapp: string;
  email: string;
};

const INITIAL_STATE: FormDataState = {
  cargo: "",
  area: "Administrativo",
  modelo: "Presencial",
  quantidade: "1",
  cidade: "São José do Rio Preto - SP",
  faixaSalarial: "",
  requisitos: "",
  empresa: "",
  responsavel: "",
  whatsapp: "",
  email: "",
};

const AREAS = [
  "Administrativo",
  "Comercial",
  "Tecnologia / TI",
  "Indústria",
  "Logística",
  "Liderança",
  "Financeiro / RH",
  "Atendimento",
];

const MODELOS = ["Presencial", "Híbrido", "100% Remoto", "A combinar"];

interface Props {
  theme?: "light" | "dark";
}

export default function RecruitmentForm({ theme = "light" }: Props) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormDataState>(INITIAL_STATE);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isDark = theme === "dark";

  const labelClass = isDark
    ? "block text-sm font-semibold text-white mb-1.5"
    : "block text-sm font-semibold text-[#171717] mb-1.5";

  const inputClass = isDark
    ? "w-full rounded-lg border border-white/35 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/60 focus:border-white focus:bg-white/15 focus:outline-none"
    : "w-full rounded-lg border border-[#E2DBDB] bg-white px-3.5 py-2.5 text-sm text-[#171717] placeholder:text-[#777] focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

  const updateField = <K extends keyof FormDataState>(key: K, value: FormDataState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError("");
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 0 && !form.cargo.trim()) {
      setError("Informe o título do cargo que deseja recrutar.");
      return;
    }
    if (step === 1 && !form.cidade.trim()) {
      setError("Informe a cidade ou região da vaga.");
      return;
    }
    if (step === 2) {
      if (!form.empresa.trim() || !form.responsavel.trim() || !form.whatsapp.trim()) {
        setError("Preencha empresa, responsável e WhatsApp para receber o retorno.");
        return;
      }
      setSubmitted(true);
      return;
    }
    setStep((prev) => prev + 1);
  };

  const whatsappSummary = whatsappLink(
    `Olá, equipe MaZa Empregos! Gostaria de abrir um processo de Recrutamento e Seleção:\n` +
      `• Empresa: ${form.empresa}\n` +
      `• Responsável: ${form.responsavel} (${form.whatsapp})\n` +
      `• Cargo: ${form.cargo} (${form.quantidade} vaga(s))\n` +
      `• Área: ${form.area} | Modelo: ${form.modelo}\n` +
      `• Cidade: ${form.cidade}\n` +
      `• Faixa salarial: ${form.faixaSalarial || "A combinar"}\n` +
      `• Requisitos: ${form.requisitos || "Alinhar na reunião"}`,
  );

  if (submitted) {
    return (
      <div
        className={cn(
          "rounded-xl border p-6",
          isDark
            ? "border-white/25 bg-white/10 text-white backdrop-blur-md"
            : "border-[#F3C6C8] bg-white text-[#171717] shadow-sm",
        )}
      >
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#0EA57A]" aria-hidden="true" />
          <div>
            <h3 className="text-lg font-bold">Briefing registrado com sucesso!</h3>
            <p className={cn("mt-1 text-sm", isDark ? "text-white/85" : "text-[#4c4c4c]")}>
              Recebemos as informações da vaga <strong>{form.cargo}</strong> para{" "}
              <strong>{form.empresa}</strong>. Você também pode agilizar o atendimento enviando o
              resumo direto no nosso WhatsApp comercial.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={whatsappSummary}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0EA57A] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0b8c67]"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Enviar resumo no WhatsApp
              </a>
              <button
                type="button"
                onClick={() => {
                  setForm(INITIAL_STATE);
                  setStep(0);
                  setSubmitted(false);
                }}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-semibold transition",
                  isDark
                    ? "border-white/50 text-white hover:bg-white/10"
                    : "border-[#E2DBDB] text-[#171717] hover:bg-neutral-100",
                )}
              >
                Abrir nova solicitação
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleNext}
      className={cn(
        "w-full rounded-xl border p-4 sm:p-6",
        isDark
          ? "border-white/25 bg-white/10 text-white backdrop-blur-md"
          : "border-[#E6DFDF] bg-white text-[#171717] shadow-sm",
      )}
    >
      {/* Indicador de etapas */}
      <div className="mb-5 flex items-center justify-between gap-2 text-xs font-semibold">
        {["1. Cargo e Área", "2. Modelo e Perfil", "3. Dados da Empresa"].map((title, index) => (
          <div
            key={title}
            className={cn(
              "flex-1 rounded-full px-3 py-1.5 text-center transition",
              index === step
                ? "bg-brand text-white"
                : index < step
                  ? "bg-[#0EA57A]/15 text-[#0EA57A]"
                  : isDark
                    ? "bg-white/10 text-white/65"
                    : "bg-surface-muted text-[#666]",
            )}
          >
            {title}
          </div>
        ))}
      </div>

      {step === 0 && (
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-[1fr_130px]">
            <div>
              <label htmlFor="rs-cargo" className={labelClass}>
                Qual cargo deseja recrutar? *
              </label>
              <input
                id="rs-cargo"
                type="text"
                value={form.cargo}
                onChange={(e) => updateField("cargo", e.target.value)}
                placeholder="Ex: Analista Financeiro, Vendedor B2B..."
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="rs-qtd" className={labelClass}>
                Nº de vagas
              </label>
              <input
                id="rs-qtd"
                type="number"
                min={1}
                max={99}
                value={form.quantidade}
                onChange={(e) => updateField("quantidade", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <span className={labelClass}>Área de atuação</span>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {AREAS.map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => updateField("area", area)}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-xs font-semibold transition",
                    form.area === area
                      ? "border-brand bg-brand text-white"
                      : isDark
                        ? "border-white/30 bg-white/5 text-white hover:bg-white/15"
                        : "border-[#E6DFDF] bg-surface-light text-[#171717] hover:border-brand",
                  )}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <div>
            <span className={labelClass}>Modelo de trabalho</span>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {MODELOS.map((modelo) => (
                <button
                  key={modelo}
                  type="button"
                  onClick={() => updateField("modelo", modelo)}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-xs font-semibold transition",
                    form.modelo === modelo
                      ? "border-brand bg-brand text-white"
                      : isDark
                        ? "border-white/30 bg-white/5 text-white hover:bg-white/15"
                        : "border-[#E6DFDF] bg-surface-light text-[#171717] hover:border-brand",
                  )}
                >
                  {modelo}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="rs-cidade" className={labelClass}>
                Cidade / Estado *
              </label>
              <input
                id="rs-cidade"
                type="text"
                value={form.cidade}
                onChange={(e) => updateField("cidade", e.target.value)}
                placeholder="Ex: São José do Rio Preto - SP"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="rs-salario" className={labelClass}>
                Faixa salarial prevista
              </label>
              <input
                id="rs-salario"
                type="text"
                value={form.faixaSalarial}
                onChange={(e) => updateField("faixaSalarial", e.target.value)}
                placeholder="Ex: R$ 3.500 a R$ 4.500"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="rs-req" className={labelClass}>
              Principais requisitos ou observações
            </label>
            <textarea
              id="rs-req"
              rows={3}
              value={form.requisitos}
              onChange={(e) => updateField("requisitos", e.target.value)}
              placeholder="Experiência desejada, ferramentas, horário ou urgência..."
              className={inputClass}
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="rs-empresa" className={labelClass}>
              Nome da empresa *
            </label>
            <input
              id="rs-empresa"
              type="text"
              value={form.empresa}
              onChange={(e) => updateField("empresa", e.target.value)}
              placeholder="Razão social ou nome fantasia"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="rs-resp" className={labelClass}>
              Seu nome *
            </label>
            <input
              id="rs-resp"
              type="text"
              value={form.responsavel}
              onChange={(e) => updateField("responsavel", e.target.value)}
              placeholder="Nome do gestor ou RH"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="rs-whats" className={labelClass}>
              WhatsApp para retorno *
            </label>
            <input
              id="rs-whats"
              type="tel"
              inputMode="tel"
              value={form.whatsapp}
              onChange={(e) => updateField("whatsapp", maskPhone(e.target.value))}
              placeholder="(17) 99999-9999"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="rs-email" className={labelClass}>
              E-mail corporativo
            </label>
            <input
              id="rs-email"
              type="email"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="rh@suaempresa.com.br"
              className={inputClass}
            />
          </div>
        </div>
      )}

      {error && (
        <p role="alert" className="mt-3 text-xs font-semibold text-error">
          {error}
        </p>
      )}

      <div className="mt-6 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((prev) => prev - 1)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition",
              isDark ? "text-white hover:bg-white/10" : "text-[#4c4c4c] hover:bg-neutral-100",
            )}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar
          </button>
        ) : (
          <span className={cn("text-xs", isDark ? "text-white/75" : "text-[#666]")}>
            Dados protegidos conforme LGPD.
          </span>
        )}

        <button
          type="submit"
          className="rounded-full bg-brand px-7 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-dark"
        >
          {step < 2 ? "Continuar" : "Enviar solicitação"}
        </button>
      </div>
    </form>
  );
}
