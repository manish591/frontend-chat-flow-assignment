import { create } from "zustand";

type DragAndDropStoreActions = {
  setType: (type: string | null) => void;
}

type DragAndDropStoreState = {
  type: string | null,
  actions: DragAndDropStoreActions
}

const useDragAndDropStore = create<DragAndDropStoreState>((set) => ({
  type: null,
  actions: {
    setType(type) {
      set({
        type
      })
    }
  }
}));

export const useDragAndDropStoreType = () => useDragAndDropStore((state) => state.type);

export const useDragAndDropStoreActions = () => useDragAndDropStore((state) => state.actions);