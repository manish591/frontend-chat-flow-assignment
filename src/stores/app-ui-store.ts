import { create } from "zustand";

type SidebarView = 'settings' | 'nodes';

type AppUIStoreActions = {
  updateSidebarView: (sidebarView: SidebarView) => void
  setSidebarVisibility: (value: boolean) => void
}

type AppUIStoreState = {
  isSidebarVisible: boolean,
  sidebarView: SidebarView;
  actions: AppUIStoreActions;
}

const useAppUIStore = create<AppUIStoreState>((set) => ({
  isSidebarVisible: true,
  sidebarView: 'nodes',
  actions: {
    updateSidebarView(sidebarView) {
      set({
        sidebarView
      })
    },
    setSidebarVisibility(value) {
      set({ isSidebarVisible: value })
    }
  },
}));

export const useAppUISidebarView = () => useAppUIStore((state) => state.sidebarView);

export const useAppUIIsSidebarVisible = () => useAppUIStore((state) => state.isSidebarVisible);

export const useAppUIActions = () => useAppUIStore((state) => state.actions);