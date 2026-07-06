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
        border
        border-[var(--glass-border)]
        bg-[var(--glass-bg)]
        px-4
        backdrop-blur-2xl
        transition-all
        duration-300

        focus-within:border-[var(--primary)]
        focus-within:ring-2
        focus-within:ring-[var(--primary-soft)]
      `,
        className,
      )}
    >
      <Search size={18} className="text-[var(--text-muted)]" />

      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full
          bg-transparent
          text-sm
          text-[var(--text-primary)]
          placeholder:text-[var(--text-muted)]
          outline-none
        "
        {...props}
      />
    </div>
  );
}

export default SearchInput;
