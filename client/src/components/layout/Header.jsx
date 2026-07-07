import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import SearchInput from "../common/SearchInput";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import useThemeStore from "@/store/themeStore";
function Header() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between nav-bg border-b border-default px-6">
      <div className="flex justify-between items-center max-w-7xl">
        <div className="text-primary-color font-bold text-2xl">Discipline</div>
        <nav className="flex items-center gap-4">
          <SearchInput placeholder="Search..." />
          <ul className="flex items-center gap-4">
            <li>
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleTheme}
                className="rounded-2xl text-primary"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{
                      rotate: -90,
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      rotate: 90,
                      opacity: 0,
                      scale: 0.7,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </li>
            <li>
              <NavLink to="/profile" className="text-primary">
                Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
