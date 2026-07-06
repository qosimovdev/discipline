import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function DockItem({ item }) {
  const Icon = item.icon;

  return (
    <NavLink to={item.path}>
      {({ isActive }) => (
        <motion.div
          whileHover={{
            scale: 1.12,
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 20,
          }}
          className={cn(
            `
            relative
            flex
            h-12
            w-12
            cursor-pointer
            items-center
            justify-center
            rounded-full
            transition-all
            duration-100
          `,
            isActive
              ? `
                icon-active
                nav-active
                text-primary
                shadow-lg
              `
              : `
                icon
                hover:bg-white/20
              `,
          )}
        >
          <Icon size={22} strokeWidth={2} />

          {isActive && (
            <motion.span
              layoutId="active-dot"
              className="
                absolute
                -bottom-2
                h-1.5
                w-1.5
                rounded-full
                bg-primary 
              "
            />
          )}
        </motion.div>
      )}
    </NavLink>
  );
}

export default DockItem;
