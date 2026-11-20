import { ShieldCheck } from "lucide-react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useProposals } from "@/ui/context/proposalContext";
import { formatCurrency, maskCnpj, maskPhone } from "@/utils/mask";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, clearItems } = useProposals();

  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [obs, setObs] = useState("");
  const [error, setError] = useState("");

  const hasCorporateItems = items.some((i) => i.type === "consultoria");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !email.trim() || !whatsapp.trim()) {
      setError("Preencha nome, e-mail e WhatsApp para concluir.");
      return;
    }
    const protocol = `MZ-${Date.now().toString().slice(-6)}`;
    clearItems();
    router.push({
      pathname: "/checkout/pedido-finalizado",
      query: { protocolo: protocol, nome },
    });
  };

  return (
    <section className="mx-auto w-full max-w-5xl space-y-6 pt-4">
      <Head>
        <title>Finalizar Solicitação | MaZa Empregos</title>
      </Head>

      <h1 className="text-2xl font-bold text-[#18181B] md:text-3xl">Finalizar Solicitação</h1>

      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.95fr]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-card border border-[#ededed] bg-white p-6 shadow-sm"
        >
          <h2 className="text-lg font-bold text-[#18181B]">Seus dados para atendimento</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="ck-nome" className="mb-1 block text-sm font-semibold">
                Nome completo *
              </label>
              <input
                id="ck-nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="ck-whats" className="mb-1 block text-sm font-semibold">
                WhatsApp *
              </label>
              <input
                id="ck-whats"
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(maskPhone(e.target.value))}
                placeholder="(17) 99999-9999"
                className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="ck-email" className="mb-1 block text-sm font-semibold">
                E-mail *
              </label>
              <input
                id="ck-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
              />
            </div>
            {hasCorporateItems && (
              <>
                <div>
                  <label htmlFor="ck-emp" className="mb-1 block text-sm font-semibold">
                    Empresa
                  </label>
                  <input
                    id="ck-emp"
                    type="text"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                    className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="ck-cnpj" className="mb-1 block text-sm font-semibold">
                    CNPJ (opcional)
                  </label>
                  <input
                    id="ck-cnpj"
                    type="text"
                    value={cnpj}
                    onChange={(e) => setCnpj(maskCnpj(e.target.value))}
                    placeholder="00.000.000/0000-00"
                    className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
                  />
                </div>
              </>
            )}
          </div>

          <div>
            <label htmlFor="ck-obs" className="mb-1 block text-sm font-semibold">
              Observações adicionais
            </label>
            <textarea
              id="ck-obs"
              rows={3}
              value={obs}
              onChange={(e) => setObs(e.target.value)}
              placeholder="Prazo desejado, detalhes do cargo ou preferência de contato..."
              className="w-full rounded-lg border border-[#E2DBDB] px-3.5 py-2.5 text-sm focus:border-brand focus:outline-none"
            />
          </div>

          {error && (
            <p role="alert" className="text-xs font-semibold text-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-full bg-brand py-3.5 text-sm font-bold text-white transition hover:bg-brand-dark"
          >
            Confirmar solicitação
          </button>

          <p className="flex items-center justify-center gap-1.5 text-xs text-[#666]">
            <ShieldCheck className="h-4 w-4 text-[#0EA57A]" aria-hidden="true" />
            Dados protegidos conforme a LGPD (Lei nº 13.709/2018).
          </p>
        </form>

        <aside className="h-fit rounded-card border border-[#ededed] bg-surface-light p-6">
          <h2 className="text-lg font-bold text-[#18181B]">Itens da solicitação</h2>
          {items.length === 0 ? (
            <p className="mt-3 text-sm text-[#666]">
              Nenhum item selecionado — você ainda pode enviar uma solicitação geral.
            </p>
          ) : (
            <ul className="mt-4 divide-y divide-[#e2e8f0] text-sm">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between gap-3 py-3">
                  <div>
                    <p className="font-semibold text-[#171717]">{item.title}</p>
                    <p className="text-xs text-[#666]">
                      {item.variantLabel} × {item.quantity}
                    </p>
                  </div>
                  <span className="shrink-0 font-bold text-[#0EA57A]">
                    {item.unitPrice === 0
                      ? "Gratuito"
                      : formatCurrency(item.unitPrice * item.quantity)}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4 flex justify-between border-t border-[#E6DFDF] pt-4 text-base font-bold text-[#18181B]">
            <span>Total estimado</span>
            <span>{subtotal === 0 ? "Gratuito" : formatCurrency(subtotal)}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
