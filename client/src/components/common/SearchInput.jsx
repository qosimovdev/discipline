import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

function SearchInput({ className, placeholder = "Search...", ...props }) {
  return (
    <div
      className={cn(
        `
        flex
        h-12
        items-center
        gap-3
        rounded-full
        border-glass
        bg-glass
        px-4
        backdrop-blur-2xl
        transition-all
        duration-300
        
      `,
        className,
      )}
    >
      <Search size={18} className="text-muted" />

      <input
        type="text"
        placeholder={placeholder}
        className="
        focus-within:badge-study
        focus-within:ring-2
        focus-within:ring-primary-soft
          input-theme
          w-full
          bg-transparent
          text-sm
          text-primary
          placeholder:text-muted
          outline-none
        "
        {...props}
      />
    </div>
  );
}

export default SearchInput;
