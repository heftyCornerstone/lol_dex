import { createStore } from "zustand";

export interface ModeState {
  mode: boolean;
  changeMode: () => void;
}

export type ModeStore = ReturnType<typeof createModeStore>;

export const createModeStore = () => {
  return createStore<ModeState>()((set) => ({
    mode: false,
    changeMode: () =>
      set((state) => ({
        mode: !state.mode,
      })),
  }));
};
