import create from "zustand";
export const useFlashMessageStore2 = create((set) => ({
    flashMessages: [],
    flashDuration: 5000,
    setFlashMessage: (flashMessage) =>
        set((state) => ({ 
            flashMessages: [...state.flashMessages, flashMessage] })),
}));
