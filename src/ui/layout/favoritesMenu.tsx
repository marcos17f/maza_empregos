import { Popover } from "@headlessui/react";
import { Heart, X } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useFavorites } from "@/ui/home/opportunityCard";
import { getOpportunityByHandle } from "@/data/catalog";

export default function FavoritesMenu({ className }: { className: string }) {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <Popover className="relative hidden sm:block">
      <Popover.Button
        aria-label={`Salvos${
          favorites.length
            ? `, ${favorites.length} ${favorites.length === 1 ? "salvo" : "salvos"}`
            : ""
        }`}
        title="Vagas e serviços salvos"
        className={`${className} relative`}
      >
        <Heart className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
        {favorites.length > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-white">
            {favorites.length}
          </span>
        )}
      </Popover.Button>
      <Popover.Panel className="absolute right-0 z-50 mt-2 w-72 rounded-card border border-[#ededed] bg-white p-4 text-sm text-[#303030] shadow-lg">
        <p className="mb-3 font-semibold text-[#171717]">Oportunidades salvas</p>
        {favorites.length === 0 ? (
          <p className="text-[#666]">
            Nenhum item salvo. Toque no coração de uma vaga ou solução para salvar.
          </p>
        ) : (
          <ul className="space-y-2">
            {favorites.map((handle) => {
              const found = getOpportunityByHandle(handle);
              const name = found?.title ?? handle.replace(/-/g, " ");
              return (
                <li key={handle} className="flex items-center justify-between gap-2">
                  <Popover.Button
                    as={Link}
                    href={`/oportunidade/${handle}`}
                    className="min-w-0 truncate hover:text-brand hover:underline"
                  >
                    {name}
                  </Popover.Button>
                  <button
                    type="button"
                    onClick={() => toggleFavorite(handle)}
                    aria-label={`Remover ${name} dos favoritos`}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#575757] hover:bg-neutral-125"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </Popover.Panel>
    </Popover>
  );
}
