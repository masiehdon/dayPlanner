import { create } from 'zustand';

const useLayoutStore = create((set) => ({
 showLayout: true,
 setShowLayout: (value) => set({ value }),
}));

export default useLayoutStore;