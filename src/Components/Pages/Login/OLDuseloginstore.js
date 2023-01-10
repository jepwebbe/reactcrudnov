import create from "zustand"

const useLoginStore = create((set) => {
    return {
        loggedIn: false,
        username: "",
        access_token: "",
        setLoggedIn: (loggedIn, username, token) => set((state) => ({
            ...state, loggedIn, username, token
        })),

    }
})