import create from 'zustand'

export const useFlashMessageStore = create((set) => ({
    flashMessages: null,
    setFlashMessage: (message) => {
        set((state) => ({
            flashMessages: (state.flashMessages = message),
        }))
    },
    removeFlashMessage: () => {
        set((state) => ({ flashMessages: (state.flashMessages = null) }))
    }
}))