import { useEffect } from "react";
import useThemeStore from "@/store/themeStore";

function ThemeProvider({ children }) {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return children;
}

export default ThemeProvider;
