import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { OpportunityItem } from "@/data/catalog";
import { formatCurrency } from "@/utils/mask";

const FAVORITES_KEY = "maza:saved-opportunities";
const FAVORITES_EVENT = "maza:saved-opportunities-changed";

function readFavorites(): string[] {
  const saved: unknown = JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? "[]");
  return Array.isArray(saved)
    ? saved.filter((handle): handle is string => typeof handle === "string")
    : [];
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const syncFavorites = () => {
      try {
        setFavorites(readFavorites());
      } catch {
        // Storage indisponível
      }
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === FAVORITES_KEY || event.key === null) syncFavorites();
    };

    syncFavorites();
    window.addEventListener(FAVORITES_EVENT, syncFavorites);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(FAVORITES_EVENT, syncFavorites);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const toggleFavorite = (handle: string) => {
    let current = favorites;
    try {
      current = readFavorites();
    } catch {
      // Mantém seleção em memória
    }
    const next = current.includes(handle)
      ? current.filter((favorite) => favorite !== handle)
      : [...current, handle];
    setFavorites(next);
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event(FAVORITES_EVENT));
    } catch {
      // Ignora bloqueio de storage
    }
  };

  return { favorites, toggleFavorite };
}

const sizes = {
  default: {
    article:
      "relative flex h-full flex-col rounded-card border border-[#efefef] bg-white p-4 font-OpenSans text-[#303030] transition-shadow hover:shadow-homeProductCard sm:p-5 lg:p-6",
    imageLink: "relative block h-[240px] overflow-hidden rounded-xl bg-surface-light sm:h-[260px] lg:h-[320px]",
    rating: "mb-3 mt-4 flex h-4 items-center gap-1.5 text-[11px] lg:mb-4 lg:text-xs",
    badge:
      "bg-[#C8161D] px-2.5 py-1.5 text-center text-xs font-medium text-white lg:flex lg:h-9 lg:items-center lg:justify-center lg:py-0 lg:text-sm",
    title:
      "mb-3 mt-3 text-base font-semibold leading-snug lg:mt-4 lg:min-h-[44px] lg:text-lg lg:leading-[24px]",
    info: "mb-card",
    accentPrice: "text-xl font-bold text-[#0EA57A] lg:text-lg",
    subInfo: "mt-2 text-xs leading-relaxed text-[#666]",
    button:
      "mt-auto flex min-h-[44px] items-center justify-center rounded-md bg-[#131316] px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:text-base",
  },
  compact: {
    article:
      "relative flex h-full flex-col rounded-card border border-[#ededed] bg-white p-3 font-OpenSans text-[#303030] transition-shadow hover:shadow-homeProductCard lg:border-[#efefef] lg:p-4",
    imageLink: "relative block h-[160px] overflow-hidden rounded-xl bg-surface-light sm:h-[200px] lg:h-[240px]",
    rating: "mb-2 mt-3 flex h-4 items-center gap-1.5 text-[11px] lg:mb-3",
    badge:
      "flex min-h-[26px] items-center justify-center bg-[#C8161D] px-2 py-1 text-center text-[11px] font-medium text-white lg:text-xs",
    title: "mb-2.5 mt-2.5 min-h-[40px] text-sm font-semibold leading-5",
    info: "mb-4",
    accentPrice: "text-base font-bold text-[#0EA57A]",
    subInfo: "mt-2 text-[11px] leading-relaxed text-[#666]",
    button:
      "mt-auto flex min-h-[40px] items-center justify-center rounded-md bg-[#131316] px-2 text-center text-xs font-semibold text-white transition hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:text-sm",
  },
} as const;

type Props = {
  item: OpportunityItem;
  isFavorite: boolean;
  onToggleFavorite: (handle: string) => void;
  size?: keyof typeof sizes;
};

export default function OpportunityCard({
  item,
  isFavorite,
  onToggleFavorite,
  size = "default",
}: Props) {
  const classes = sizes[size];
  const href = `/oportunidade/${item.handle}`;

  return (
    <article className={classes.article}>
      <button
        type="button"
        aria-label={`${isFavorite ? "Remover" : "Salvar"} ${item.title} ${
          isFavorite ? "dos" : "nos"
        } favoritos`}
        aria-pressed={isFavorite}
        onClick={() => onToggleFavorite(item.handle)}
        className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#575757] shadow-sm transition hover:bg-neutral-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
      >
        <Heart
          aria-hidden="true"
          strokeWidth={1.6}
          className={`h-5 w-5 ${isFavorite ? "fill-brand text-brand" : "fill-none"}`}
        />
      </button>

      {item.highlightTag && (
        <p className="absolute left-4 top-4 z-10 rounded-md bg-[#18181B] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm">
          {item.highlightTag}
        </p>
      )}

      <Link href={href} aria-label={`Conhecer ${item.title}`} className={classes.imageLink}>
        <Image
          src={item.image}
          alt={`${item.title} — MaZa Empregos`}
          fill
          sizes="(min-width: 1440px) 400px, (min-width: 768px) 30vw, 85vw"
          className="object-cover object-top transition-transform duration-300 hover:scale-[1.03]"
        />
      </Link>

      <div className={classes.rating}>
        <span
          aria-label={`${item.rating.toLocaleString("pt-BR")} de 5 estrelas`}
          className="relative inline-block text-sm leading-none tracking-[1px] text-[#d2d2d2]"
        >
          <span aria-hidden="true">★★★★★</span>
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap text-[#C8161D]"
            style={{ width: `${(item.rating / 5) * 100}%` }}
          >
            ★★★★★
          </span>
        </span>
        <span className="text-[#777]" aria-label={`${item.reviewCount} avaliações`}>
          ({item.reviewCount.toLocaleString("pt-BR")})
        </span>
      </div>

      <p className={classes.badge}>{item.badge}</p>

      <h3 className={classes.title}>
        <Link href={href} className="hover:text-brand">
          {item.title}
        </Link>
      </h3>

      <div className={classes.info}>
        {item.type === "vaga" ? (
          <>
            <p className="mb-1 text-xs font-medium text-[#666]">{item.location}</p>
            <p className={classes.accentPrice}>
              {item.salaryRange ?? "Remuneração compatível com o mercado"}
            </p>
            <p className={classes.subInfo}>
              {item.regime} • Cadastro 100% gratuito para candidatos.
            </p>
          </>
        ) : (
          <>
            <p className="mb-1 text-xs text-[#777]">Investimento a partir de</p>
            <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className={classes.accentPrice}>
                {formatCurrency(item.pricePix ?? 0)}{" "}
                <span className="text-xs font-normal lg:text-sm">à vista / Pix</span>
              </span>
              {item.priceCard && item.pricePix && item.priceCard > item.pricePix && (
                <span className="text-xs text-[#888]">
                  ou {formatCurrency(item.priceCard)} faturado
                </span>
              )}
            </p>
            <p className={classes.subInfo}>{item.sla}.</p>
          </>
        )}
      </div>

      <Link href={href} className={classes.button}>
        {item.type === "vaga" ? "Ver vaga e candidatar-se" : "Solicitar solução"}
        <span className="sr-only"> — {item.title}</span>
      </Link>
    </article>
  );
}
