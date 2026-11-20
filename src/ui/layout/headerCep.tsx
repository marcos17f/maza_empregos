import { Popover } from "@headlessui/react";
import { ChevronDown, MapPin } from "lucide-react";
import React, { FormEvent, useEffect, useState } from "react";
import useSavedCep from "@/utils/hooks/useSavedCep";
import { maskCep } from "@/utils/mask";

type ViaCepResponse = { localidade?: string; uf?: string; erro?: boolean | string };

async function fetchCity(cep: string): Promise<string | null> {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (!response.ok) return null;
    const data: ViaCepResponse = await response.json();
    if (data.erro || !data.localidade) return null;
    return `${data.localidade}/${data.uf}`;
  } catch {
    return null;
  }
}

export default function HeaderCep() {
  const { cep, saveCep } = useSavedCep();
  const [draft, setDraft] = useState("");
  const [place, setPlace] = useState<{ cep: string; city: string | null } | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!cep || place?.cep === cep) return;
    let active = true;
    fetchCity(cep).then((city) => active && setPlace({ cep, city }));
    return () => {
      active = false;
    };
  }, [cep, place?.cep]);

  const label =
    cep && place?.cep === cep && place.city
      ? place.city
      : cep
        ? `CEP ${maskCep(cep)}`
        : "Rio Preto/SP e Região";

  const handleSubmit = async (e: FormEvent, close: () => void) => {
    e.preventDefault();
    const digits = draft.replace(/\D/g, "");
    setLoading(true);
    const city = await fetchCity(digits);
    setLoading(false);
    if (!city) {
      setError("CEP não encontrado");
      return;
    }
    setPlace({ cep: digits, city });
    saveCep(digits);
    setError("");
    close();
  };

  return (
    <Popover className="relative hidden lg:block">
      <Popover.Button className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 font-OpenSans text-xs font-medium text-[#303030] transition hover:bg-neutral-100">
        <MapPin className="h-4 w-4 text-brand" strokeWidth={1.8} aria-hidden="true" />
        {label}
        <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
      </Popover.Button>
      <Popover.Panel className="absolute right-0 z-50 mt-2 w-64 rounded-card border border-[#ededed] bg-white p-4 shadow-lg">
        {({ close }) => (
          <form onSubmit={(e) => handleSubmit(e, close)}>
            <label htmlFor="header-cep" className="mb-1 block text-sm font-semibold text-[#171717]">
              Sua região
            </label>
            <p className="mb-3 text-xs text-[#666]">
              Informe seu CEP para localizar vagas e atendimento na sua cidade.
            </p>
            <input
              id="header-cep"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="Ex: 15015-000"
              value={draft}
              onChange={(e) => {
                setDraft(maskCep(e.target.value));
                setError("");
              }}
              aria-invalid={!!error}
              aria-describedby={error ? "header-cep-error" : undefined}
              className="block w-full rounded-md border border-[#e0e0e0] bg-[#f7f7f7] px-3 py-2 text-sm text-gray-900 focus:border-brand focus:bg-white focus:outline-none"
            />
            {error && (
              <p id="header-cep-error" role="alert" className="mt-2 text-xs text-error">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={draft.length !== 9 || loading}
              className="mt-3 w-full rounded-md bg-brand py-2 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:opacity-50"
            >
              {loading ? "Buscando..." : "Salvar região"}
            </button>
          </form>
        )}
      </Popover.Panel>
    </Popover>
  );
}
