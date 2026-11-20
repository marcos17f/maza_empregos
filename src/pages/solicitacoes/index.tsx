import { ArrowRight, Briefcase, Trash2 } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useProposals } from "@/ui/context/proposalContext";
import { formatCurrency } from "@/utils/mask";

export default function SolicitacoesPage() {
  const { items, subtotal, removeItem, updateQuantity } = useProposals();

  return (
    <section className="space-y-6 pt-4">
      <Head>
        <title>Minhas Solicitações | MaZa Empregos</title>
      </Head>

      <h1 className="text-2xl font-bold text-[#18181B] md:text-3xl">Minhas Solicitações</h1>

      {items.length === 0 ? (
        <div className="rounded-card border border-[#ededed] bg-surface-light p-10 text-center">
          <Briefcase className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
          <p className="mt-3 text-lg font-bold text-[#18181B]">Nenhum item adicionado ainda</p>
          <p className="mt-1 text-sm text-[#4c4c4c]">
            Explore nossas vagas abertas ou soluções corporativas do MaZa Consulting.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/vagas"
              className="rounded-full bg-brand px-6 py-2.5 text-sm font-bold text-white"
            >
              Ver vagas
            </Link>
            <Link
              href="/consultoria"
              className="rounded-full border border-brand px-6 py-2.5 text-sm font-bold text-brand"
            >
              Ver MaZa Consulting
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="divide-y divide-[#ededed] rounded-card border border-[#ededed] bg-white p-5">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-surface-light">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <Link
                    href={`/oportunidade/${item.handle}`}
                    className="font-bold text-[#18181B] hover:underline"
                  >
                    {item.title}
                  </Link>
                  <p className="text-xs text-[#666]">{item.variantLabel}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="h-8 w-8 rounded border border-[#d8d8d8] font-bold"
                  >
                    -
                  </button>
                  <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-8 w-8 rounded border border-[#d8d8d8] font-bold"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold text-[#0EA57A]">
                    {item.unitPrice === 0
                      ? "Gratuito"
                      : formatCurrency(item.unitPrice * item.quantity)}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remover ${item.title}`}
                    className="text-[#888] hover:text-error"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-card border border-[#ededed] bg-surface-light p-6">
            <h2 className="text-lg font-bold text-[#18181B]">Resumo</h2>
            <div className="mt-4 flex justify-between text-base font-bold text-[#171717]">
              <span>Estimativa</span>
              <span>{subtotal === 0 ? "Gratuito" : formatCurrency(subtotal)}</span>
            </div>
            <p className="mt-2 text-xs text-[#4c4c4c]">
              Candidaturas são sempre gratuitas. Para serviços corporativos, nossa equipe confirma
              escopo, prazo e condições de faturamento.
            </p>
            <Link
              href="/checkout"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3 text-sm font-bold text-white hover:bg-brand-dark"
            >
              Finalizar solicitação <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}
