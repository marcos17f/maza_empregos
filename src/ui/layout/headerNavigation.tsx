import { Dialog, Disclosure, Popover } from "@headlessui/react";
import {
  Briefcase,
  Building2,
  ChevronDown,
  FileText,
  Headset,
  HelpCircle,
  Menu,
  MessageSquare,
  Sparkles,
  UserRound,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SEGMENTS } from "@/data/catalog";
import { MAZA_CONTACT } from "@/utils/contact";
import MazaLogo from "@/ui/brand/MazaLogo";
import { useProposals } from "@/ui/context/proposalContext";
import HeaderSearch from "./headerSearch";
import FavoritesMenu from "./favoritesMenu";
import HeaderCep from "./headerCep";

const actionClassName =
  "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#4c4c4c] transition-colors hover:bg-neutral-125 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand";

export default function HeaderNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalQuantity, setIsDrawerOpen } = useProposals();

  const vagaSegments = SEGMENTS.filter((s) => s.category === "vagas");

  return (
    <>
      <div className="grid w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 md:gap-3 lg:gap-6">
        <div className="flex min-w-0 items-center gap-1 md:gap-2.5 lg:gap-3">
          <button
            type="button"
            className={`${actionClassName} lg:w-auto lg:gap-2 lg:px-2`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={mobileMenuOpen}
            title="Menu"
          >
            <Menu className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
            <span className="hidden font-OpenSans text-xs font-semibold text-[#303030] lg:inline">
              Menu
            </span>
          </button>
          <HeaderSearch className="hidden w-full max-w-[220px] md:flex lg:max-w-[290px]" />
        </div>

        <Link
          href="/"
          aria-label="MaZa Empregos — Página inicial"
          className="justify-self-center"
        >
          <MazaLogo />
        </Link>

        <div className="flex items-center justify-end gap-1 sm:gap-2 lg:gap-3">
          <HeaderCep />

          <Popover className="relative hidden sm:block">
            <Popover.Button
              aria-label="Acesso ao Portal"
              title="Portal do Candidato e Empresa"
              className={actionClassName}
            >
              <UserRound className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
            </Popover.Button>
            <Popover.Panel className="absolute right-0 z-50 mt-2 w-64 rounded-card border border-[#ededed] bg-white p-4 shadow-lg">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#666]">
                Acesso aos Portais
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={MAZA_CONTACT.candidatePortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-lg bg-brand px-3.5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Portal do Candidato (Grátis)
                </a>
                <Popover.Button
                  as={Link}
                  href="/vagas"
                  className="flex items-center gap-2.5 rounded-lg border border-[#e0e0e0] px-3.5 py-2 text-sm font-medium text-[#171717] transition hover:bg-neutral-100"
                >
                  <Briefcase className="h-4 w-4 text-brand" aria-hidden="true" />
                  Vagas Disponíveis
                </Popover.Button>
                <a
                  href={MAZA_CONTACT.companyPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-lg border border-[#e0e0e0] px-3.5 py-2 text-sm font-medium text-[#171717] transition hover:bg-neutral-100"
                >
                  <Building2 className="h-4 w-4 text-brand" aria-hidden="true" />
                  Área da Empresa (CNPJ)
                </a>
              </div>
            </Popover.Panel>
          </Popover>

          <FavoritesMenu className={actionClassName} />

          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            aria-label={`Abrir solicitações${totalQuantity ? `, ${totalQuantity} itens` : ""}`}
            title="Minhas solicitações"
            className={`${actionClassName} relative`}
          >
            <Briefcase className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
            {totalQuantity > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-white">
                {totalQuantity}
              </span>
            )}
          </button>

          <Link
            href="/contato"
            aria-label="Atendimento"
            title="Atendimento"
            className={actionClassName}
          >
            <Headset className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <Dialog
        as="div"
        className="relative z-40"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-40 bg-black/35" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-[85%] max-w-sm animate-navopen overflow-y-auto bg-white px-6 py-6 shadow-xl">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <MazaLogo />
            </Link>
            <button
              type="button"
              className="rounded-full p-2 text-gray-700 hover:bg-neutral-100"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar Menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 space-y-2 border-t border-[#ededed] pt-5">
            <Disclosure as="div" defaultOpen>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg px-2 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    <span className="flex items-center gap-3">
                      <Briefcase className="h-5 w-5 text-brand" aria-hidden="true" />
                      Vagas Disponíveis
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-1 space-y-1 pl-9">
                    <Link
                      href="/vagas"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-lg px-2 py-2 text-sm font-semibold text-brand hover:bg-gray-50"
                    >
                      Todas as Vagas
                    </Link>
                    {vagaSegments.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/vagas/${item.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            <Link
              href="/servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              <Sparkles className="h-5 w-5 text-brand" aria-hidden="true" />
              Serviços (Recrutamento, Consulting e Testes)
            </Link>

            <Link
              href="/servicos/recrutamento-e-selecao"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              <Users className="h-5 w-5 text-brand" aria-hidden="true" />
              Solicitar Recrutamento
            </Link>

            <a
              href={MAZA_CONTACT.candidatePortal}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-base font-semibold text-[#0EA57A] hover:bg-gray-50"
            >
              <FileText className="h-5 w-5" aria-hidden="true" />
              Cadastrar Currículo (Grátis)
            </a>

            <Link
              href="/como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              <MessageSquare className="h-5 w-5 text-brand" aria-hidden="true" />
              Como Funciona
            </Link>

            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              <HelpCircle className="h-5 w-5 text-brand" aria-hidden="true" />
              Dúvidas Frequentes
            </Link>

            <Link
              href="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              <Headset className="h-5 w-5 text-brand" aria-hidden="true" />
              Contato
            </Link>
          </div>

          <div className="mt-6 space-y-2.5 border-t border-[#ededed] pt-5">
            <a
              href={MAZA_CONTACT.candidatePortal}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Portal do Candidato
            </a>
            <a
              href={MAZA_CONTACT.companyPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-brand py-2.5 text-sm font-semibold text-brand hover:bg-primary-50"
            >
              Área da Empresa (CNPJ)
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
