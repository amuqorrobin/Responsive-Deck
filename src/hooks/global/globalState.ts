import { create } from "zustand";

type State = {
  isUrlValid: boolean;
  url: string;
};

type Action = {
  updateIsUrlValid: (isUrlValid: State["isUrlValid"]) => void;
  updateUrl: (url: State["url"]) => void;
};

export const useGetResponsiveDeckState = create<State & Action>((set) => ({
  isUrlValid: false,
  url: "",
  updateIsUrlValid: (isUrlValid) => set({ isUrlValid }),
  updateUrl: (url) => set({ url }),
}));
