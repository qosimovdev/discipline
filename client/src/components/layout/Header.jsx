import { Moon, Sun } from "lucide-react";
import { NavLink } from "react-router-dom";
import SearchInput from "../common/SearchInput";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import useThemeStore from "@/store/themeStore";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
function Header() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <header className="fixed top-1 left-0 right-0 z-50 h-20 border-b border-default nav-bg mx-2">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-4 md:px-4">
        <div className="hidden md:block text-2xl font-bold text-primary-color">
          Discipline
        </div>
        <div className="block md:hidden text-2xl font-bold text-primary-color mr-2">
          DI
        </div>

        <nav className="flex items-center gap-4">
          {/* <SearchInput className="hidden md:flex" placeholder="Search..." /> */}

          <ul className="flex items-center gap-3">
            <li>
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleTheme}
                className="rounded-2xl text-primary"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.25 }}
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
                <Avatar>
                  <AvatarImage src="/avatar.png" />
                  <AvatarFallback>IQ</AvatarFallback>
                </Avatar>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
