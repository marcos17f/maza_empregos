import HeaderNavigation from "./headerNavigation";
import HeaderSearch from "./headerSearch";
import ProposalSlideOver from "./proposalSlideOver";

export default function Header() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 border-b border-[#ededed] bg-white shadow-sm">
        <nav
          className="mx-auto flex h-16 w-full max-w-page items-center px-gutter md:h-20"
          aria-label="Navegação principal"
        >
          <HeaderNavigation />
        </nav>
        <div className="px-gutter pb-3 md:hidden">
          <HeaderSearch className="flex w-full" />
        </div>
      </header>
      <ProposalSlideOver />
    </>
  );
}
