import { cn } from "@/lib/utils";

const variants = {
  glass: `
    bg-[var(--glass-bg)]
    border border-[var(--glass-border)]
    backdrop-blur-2xl
  `,
  solid: `
    bg-[var(--surface)]
    border border-[var(--border)]
  `,
  outline: `
    bg-transparent
    border border-[var(--border)]
  `,
};
const paddings = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};
function GlassCard({
  as: Component = "div",
  children,
  className,
  variant = "glass",
  padding = "md",
  hover = false,
  animated = false,
  onClick,
  interactive = false,
  ...props
}) {
  return (
    <Component
      onClick={onClick}
      className={cn(
        "rounded-[32px]",
        "shadow-[var(--shadow-md)]",
        "transition-all duration-300",
        variants[variant],
        paddings[padding],
        interactive && "cursor-pointer active:scale-[0.98]",
        hover && "hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]",
        animated && "animate-in fade-in zoom-in-95",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default GlassCard;
