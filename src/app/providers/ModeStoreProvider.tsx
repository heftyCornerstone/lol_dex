"use client";

import { createModeStore, ModeState, ModeStore } from "@/store";
import { useContext, useRef } from "react";
import { createContext } from "react";
import { useStore } from "zustand";


export function useModeContext<T>(selector: (state: ModeState) => T): T {
  const store = useContext(ModeContext);
  if (!store) throw new Error("Missing ModeContext.Provider in the tree");
  return useStore(store, selector);
}

export const ModeContext = createContext<ModeStore | null>(null);

type ModeProviderProps = {children : React.ReactNode;}
export function ModeProvider({ children }: ModeProviderProps) {
  const storeRef = useRef<ModeStore>();
  if (!storeRef.current) {
    storeRef.current = createModeStore();
  }
  return (
    <ModeContext.Provider value={storeRef.current}>
      {children}
    </ModeContext.Provider>
  );
}
