import { create } from "zustand";

const useForceUpdate = create<{ count: number; forceUpdate: () => void }>(
  (set) => ({
    count: 0,
    forceUpdate: () => set((state) => ({ ...state, count: state.count + 1 })),
  })
);

export default useForceUpdate;
