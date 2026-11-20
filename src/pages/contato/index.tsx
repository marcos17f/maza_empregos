import {
  CheckCircle2,
  Clock,
  Globe,
  Mail,
  MessageCircle,
  ShieldAlert,
} from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { MAZA_CONTACT, SPECIALIST_MESSAGE, whatsappLink } from "@/utils/contact";
import { maskPhone } from "@/utils/mask";

export default function ContactPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [perfil, setPerfil] = useState<"Empresa" | "Candidato">("Empresa");
  const [mensagem, setMensagem] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !email.trim() || !mensagem.trim()) return;
    setSent(true);
  };

  return (
    <section className="space-y-8 pt-4">
      <Head>
        <title>Fale Conosco | MaZa Empregos</title>
        <meta
          name="description"
          content="Entre em contato com a MaZa Empregos pelos canais oficiais: e-mail contato@mazaempregos.com.br e WhatsApp (17) 99703-2045."
        />
      </Head>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Informações oficiais */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">
              Canais Oficiais MaZa Empregos
            </span>
            <h1 className="mt-1 text-3xl font-bold text-[#18181B] lg:text-4xl">
              Entre em Contato
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-[#4c4c4c] md:text-base">
              Nosso atendimento é 100% online para oferecer agilidade a empresas e candidatos em São
              José do Rio Preto, região e todo o Brasil.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-card border border-[#ededed] bg-white p-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-brand">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-base font-bold text-[#18181B]">E-mail Oficial</h2>
                <p className="text-sm text-[#4c4c4c]">{MAZA_CONTACT.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-card border border-[#ededed] bg-white p-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#0EA57A]">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-base font-bold text-[#18181B]">WhatsApp de Atendimento</h2>
                <p className="text-sm text-[#4c4c4c]">
                  {MAZA_CONTACT.whatsappPrimaryDisplay} / {MAZA_CONTACT.whatsappSecondaryDisplay}
                </p>
                <a
                  href={whatsappLink(SPECIALIST_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-xs font-bold text-[#0EA57A] hover:underline"
                >
                  Iniciar conversa no WhatsApp →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-card border border-[#ededed] bg-white p-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-brand">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-base font-bold text-[#18181B]">Horário de Atendimento</h2>
                <p className="text-sm text-[#4c4c4c]">{MAZA_CONTACT.businessHours}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-card border border-[#ededed] bg-white p-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-brand">
                <Globe className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-base font-bold text-[#18181B]">Atuação & Formato</h2>
                <p className="text-sm text-[#4c4c4c]">
                  {MAZA_CONTACT.region}. {MAZA_CONTACT.serviceMode} (não realizamos atendimento
                  presencial para entrega de currículos).
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-card border border-amber-200 bg-amber-50 p-4 text-xs text-[#4c4c4c]">
            <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden="true" />
            <p>
              <strong>Candidatos:</strong> não envie currículos por e-mail. Para concorrer às vagas
              com segurança e proteção LGPD, utilize nossa página de{" "}
              <Link href="/cadastrar-curriculo" className="font-bold text-brand underline">
                Cadastro Gratuito de Currículo
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Formulário */}
        <div className="rounded-card border border-[#ededed] bg-white p-6 shadow-sm md:p-8">
          {sent ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-[#0EA57A]" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-bold text-[#18181B]">Mensagem enviada!</h2>
              <p className="mt-2 text-sm text-[#4c4c4c]">
                Obrigado pelo contato, <strong>{nome}</strong>. Nossa equipe responderá em breve no
                e-mail informado.
              </p>
              <button
                type="button"
                onClick={() => {
                  setNome("");
                  setEmail("");
                  setTelefone("");
                  setMensagem("");
                  setSent(false);
                }}
                className="mt-6 rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-white"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-bold text-[#18181B]">Envie sua mensagem</h2>

              <div className="grid grid-cols-2 gap-2">
                {(["Empresa", "Candidato"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setPerfil(option)}
                    className={`rounded-lg border py-2.5 text-sm font-semibold transition ${
                      perfil === option
                        ? "border-brand bg-brand text-white"
                        : "border-[#E6DFDF] bg-surface-light text-[#171717]"
                    }`}
                  >
                    Sou {option}
                  </button>
                ))}
              </div>

              <div>
                <label htmlFor="c-nome" className="mb-1 block text-sm font-semibold text-[#171717]">
                  Nome completo *
                </label>
                <input
                  id="c-nome"
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-email" className="mb-1 block text-sm font-semibold text-[#171717]">
                    E-mail *
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
                <div>
                  <label htmlFor="c-tel" className="mb-1 block text-sm font-semibold text-[#171717]">
                    WhatsApp
                  </label>
                  <input
                    id="c-tel"
                    type="tel"
                    inputMode="tel"
                    value={telefone}
                    onChange={(e) => setTelefone(maskPhone(e.target.value))}
                    placeholder="(17) 99999-9999"
                    className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="c-msg" className="mb-1 block text-sm font-semibold text-[#171717]">
                  Como podemos ajudar? *
                </label>
                <textarea
                  id="c-msg"
                  rows={5}
                  required
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  placeholder="Descreva sua dúvida ou necessidade de Recrutamento / Consultoria..."
                  className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-brand py-3 text-sm font-bold text-white shadow-sm transition hover:bg-brand-dark"
              >
                Enviar mensagem
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
