import { MoonIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import SearchInput from "../common/SearchInput";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between nav-bg border-b border-default px-6">
      <div className="text-primary-color font-bold text-2xl">Discipline</div>
      <nav className="flex items-center gap-4">
        <SearchInput placeholder="Search..." />
        <ul className="flex items-center gap-4">
          <li>
            <NavLink>
              <MoonIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
