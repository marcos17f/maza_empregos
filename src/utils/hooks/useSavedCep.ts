import { useEffect, useState } from "react";

const STORAGE_KEY = "maza:saved-cep";

export default function useSavedCep() {
  const [cep, setCep] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setCep(saved);
    } catch {
      // Storage indisponível
    }
  }, []);

  const saveCep = (nextCep: string) => {
    const digits = nextCep.replace(/\D/g, "").slice(0, 8);
    setCep(digits);
    try {
      localStorage.setItem(STORAGE_KEY, digits);
    } catch {
      // Mantém apenas em memória
    }
  };

  return { cep, saveCep };
}
