import useThemeStore from "@/stores/themeStore";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

function ThemeToggle() {
  const theme = useThemeStore((state) => state.theme);

  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
      className="rounded-2xl"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}

export default ThemeToggle;
