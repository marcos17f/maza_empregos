import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type ProposalItem = {
  id: string;
  handle: string;
  title: string;
  type: "vaga" | "consultoria";
  variantLabel: string;
  quantity: number;
  unitPrice: number;
  image: string;
  notes?: string;
};

type ProposalContextValue = {
  items: ProposalItem[];
  totalQuantity: number;
  subtotal: number;
  addItem: (item: Omit<ProposalItem, "id">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearItems: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
};

const STORAGE_KEY = "maza:proposal-items";

const ProposalContext = createContext<ProposalContextValue | null>(null);

export function ProposalProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ProposalItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // Storage indisponível
    }
  }, []);

  const persist = useCallback((updater: (prev: ProposalItem[]) => ProposalItem[]) => {
    setItems((prev) => {
      const next = updater(prev);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Mantém em memória
      }
      return next;
    });
  }, []);

  const addItem = useCallback(
    (item: Omit<ProposalItem, "id">) => {
      const id = `${item.handle}::${item.variantLabel}`;
      persist((prev) => {
        const existing = prev.find((entry) => entry.id === id);
        if (existing) {
          return prev.map((entry) =>
            entry.id === id ? { ...entry, quantity: entry.quantity + item.quantity } : entry,
          );
        }
        return [...prev, { ...item, id }];
      });
    },
    [persist],
  );

  const removeItem = useCallback(
    (id: string) => {
      persist((prev) => prev.filter((entry) => entry.id !== id));
    },
    [persist],
  );

  const updateQuantity = useCallback(
    (id: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(id);
        return;
      }
      persist((prev) =>
        prev.map((entry) => (entry.id === id ? { ...entry, quantity } : entry)),
      );
    },
    [persist, removeItem],
  );

  const clearItems = useCallback(() => persist(() => []), [persist]);

  const value = useMemo<ProposalContextValue>(() => {
    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
    return {
      items,
      totalQuantity,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearItems,
      isDrawerOpen,
      setIsDrawerOpen,
    };
  }, [items, isDrawerOpen, addItem, removeItem, updateQuantity, clearItems]);

  return <ProposalContext.Provider value={value}>{children}</ProposalContext.Provider>;
}

export function useProposals() {
  const context = useContext(ProposalContext);
  if (!context) {
    throw new Error("useProposals deve ser usado dentro de ProposalProvider");
  }
  return context;
}
