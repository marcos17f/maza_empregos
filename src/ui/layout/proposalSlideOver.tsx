import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Briefcase, Trash2, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useProposals } from "@/ui/context/proposalContext";
import { formatCurrency } from "@/utils/mask";

export default function ProposalSlideOver() {
  const {
    items,
    subtotal,
    removeItem,
    updateQuantity,
    isDrawerOpen,
    setIsDrawerOpen,
  } = useProposals();
  const router = useRouter();

  return (
    <Transition.Root show={isDrawerOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={setIsDrawerOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-250"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-250"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="flex h-full flex-col bg-white shadow-xl">
                    <div className="flex items-center justify-between border-b border-[#ededed] px-5 py-4">
                      <Dialog.Title className="flex items-center gap-2 text-base font-bold text-[#171717]">
                        <Briefcase className="h-5 w-5 text-brand" aria-hidden="true" />
                        Minhas Solicitações ({items.length})
                      </Dialog.Title>
                      <button
                        type="button"
                        className="rounded-full p-1.5 text-[#555] hover:bg-neutral-100"
                        onClick={() => setIsDrawerOpen(false)}
                        aria-label="Fechar painel"
                      >
                        <X className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="custom-scrollbar flex-1 overflow-y-auto px-5 py-4">
                      {items.length === 0 ? (
                        <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-surface-light text-brand">
                            <Briefcase className="h-7 w-7" aria-hidden="true" />
                          </div>
                          <p className="text-base font-semibold text-[#171717]">
                            Sua lista está vazia
                          </p>
                          <p className="mt-2 max-w-[260px] text-sm text-[#666]">
                            Adicione vagas para candidatura ou soluções do MaZa Consulting para
                            solicitar proposta.
                          </p>
                          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                            <Link
                              href="/vagas"
                              onClick={() => setIsDrawerOpen(false)}
                              className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
                            >
                              Explorar vagas
                            </Link>
                            <Link
                              href="/consultoria"
                              onClick={() => setIsDrawerOpen(false)}
                              className="rounded-full border border-[#d0d0d0] px-5 py-2.5 text-sm font-semibold text-[#171717] hover:bg-neutral-100"
                            >
                              MaZa Consulting
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <ul role="list" className="divide-y divide-[#ededed]">
                          {items.map((item) => (
                            <li key={item.id} className="flex gap-4 py-4">
                              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-[#ededed] bg-surface-light">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  sizes="80px"
                                  className="object-cover object-top"
                                />
                              </div>

                              <div className="flex min-w-0 flex-1 flex-col">
                                <Link
                                  href={`/oportunidade/${item.handle}`}
                                  onClick={() => setIsDrawerOpen(false)}
                                  className="truncate text-sm font-bold text-[#171717] hover:text-brand"
                                >
                                  {item.title}
                                </Link>
                                <p className="mt-0.5 text-xs text-[#666]">{item.variantLabel}</p>

                                <div className="mt-auto flex items-center justify-between pt-2">
                                  <div className="flex items-center gap-2">
                                    <button
                                      type="button"
                                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                      aria-label="Diminuir quantidade"
                                      className="flex h-6 w-6 items-center justify-center rounded border border-[#d8d8d8] text-xs font-bold hover:bg-neutral-100"
                                    >
                                      -
                                    </button>
                                    <span className="text-xs font-semibold">{item.quantity}</span>
                                    <button
                                      type="button"
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      aria-label="Aumentar quantidade"
                                      className="flex h-6 w-6 items-center justify-center rounded border border-[#d8d8d8] text-xs font-bold hover:bg-neutral-100"
                                    >
                                      +
                                    </button>
                                  </div>

                                  <div className="flex items-center gap-3">
                                    <span className="text-sm font-bold text-[#0EA57A]">
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
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {items.length > 0 && (
                      <div className="border-t border-[#ededed] bg-[#fafafa] px-5 py-4">
                        <div className="flex items-center justify-between text-base font-bold text-[#171717]">
                          <span>Estimativa total</span>
                          <span>{subtotal === 0 ? "Gratuito" : formatCurrency(subtotal)}</span>
                        </div>
                        <p className="mt-1 text-xs text-[#666]">
                          Candidaturas são sempre gratuitas. Soluções corporativas recebem proposta
                          formal da equipe MaZa.
                        </p>
                        <div className="mt-4 flex flex-col gap-2.5">
                          <button
                            type="button"
                            onClick={() => {
                              setIsDrawerOpen(false);
                              router.push("/checkout");
                            }}
                            className="w-full rounded-full bg-brand py-3 text-sm font-bold text-white transition hover:bg-brand-dark"
                          >
                            Finalizar solicitação
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setIsDrawerOpen(false);
                              router.push("/solicitacoes");
                            }}
                            className="w-full rounded-full border border-[#d0d0d0] bg-white py-2.5 text-sm font-semibold text-[#171717] transition hover:bg-neutral-100"
                          >
                            Ver resumo completo
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
