import { create } from "zustand";

const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");

    if (saved) return saved;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

const useThemeStore = create((set) => ({
    theme: getInitialTheme(),

    setTheme: (theme) => {
        localStorage.setItem("theme", theme);

        document.documentElement.classList.toggle(
            "dark",
            theme === "dark"
        );

        set({ theme });
    },

    toggleTheme: () =>
        set((state) => {
            const next =
                state.theme === "dark" ? "light" : "dark";

            localStorage.setItem("theme", next);

            document.documentElement.classList.toggle(
                "dark",
                next === "dark"
            );

            return {
                theme: next,
            };
        }),
}));

export default useThemeStore;