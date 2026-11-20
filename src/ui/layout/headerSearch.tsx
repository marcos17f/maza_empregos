import { Search } from "lucide-react";
import { useRouter } from "next/router";
import { FormEvent, useId } from "react";

export default function HeaderSearch({ className = "" }: { className?: string }) {
  const router = useRouter();
  const searchId = useId();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = new FormData(event.currentTarget).get("search")?.toString().trim();
    if (query) {
      router.push({ pathname: "/pesquisa", query: { v: query } });
    }
  };

  return (
    <form
      role="search"
      aria-label="Pesquisar vagas ou serviços de RH"
      onSubmit={handleSearch}
      className={`items-center gap-2 rounded-full border border-[#d3d3d3] bg-white px-3 focus-within:border-brand focus-within:ring-1 focus-within:ring-brand ${className}`}
    >
      <button
        type="submit"
        className="flex h-9 shrink-0 items-center text-[#4c4c4c]"
        aria-label="Pesquisar"
      >
        <Search className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
      </button>
      <label htmlFor={searchId} className="sr-only">
        Buscar vagas ou soluções de RH
      </label>
      <input
        id={searchId}
        name="search"
        type="search"
        placeholder="Buscar vaga ou solução de RH..."
        className="h-9 w-full min-w-0 border-0 bg-transparent text-sm text-[#363636] placeholder:text-[#777] focus:outline-none"
      />
    </form>
  );
}
