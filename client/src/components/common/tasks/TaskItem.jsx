import {
  //   ArrowRight,
  Check,
  Clock3,
  MoreVertical,
  Pencil,
  Trash2,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function TaskItem({ task, onToggle, onEdit, onDelete }) {
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "react":
        return "bg-sky-500/10 text-sky-500 border-sky-500/20";

      case "algorithm":
        return "bg-violet-500/10 text-violet-500 border-violet-500/20";

      case "health":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";

      default:
        return "";
    }
  };

  return (
    <motion.div
      layout
      whileTap={{ scale: 0.98 }}
      onClick={() => onToggle(task.id)}
      className={`
        group
        flex
        cursor-pointer
        items-center
        gap-3
        rounded-2xl
        border
        border-transparent
        p-3
        transition-all
        hover:border-primary/10
        hover:bg-white/5

        ${task.completed && "opacity-70"}
      `}
    >
      {/* Checkbox */}

      <motion.div
        animate={{
          scale: task.completed ? 1.05 : 1,
        }}
        className={`
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          border-2

          ${
            task.completed
              ? "border-primary bg-primary text-white"
              : "border-border"
          }
        `}
      >
        <AnimatePresence>
          {task.completed && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Check className="h-4 w-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Content */}

      <div className="flex-1 min-w-0">
        <h3
          className={`font-medium truncate text-primary ${
            task.completed && "line-through text-secondary"
          }`}
        >
          {task.title}
        </h3>

        <div className="mt-2 flex flex-wrap justify-between items-center gap-2">
          <Badge variant="outline" className={getCategoryColor(task.category)}>
            {task.category}
          </Badge>

          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock3 className="h-3.5 w-3.5" />
            {task.time}
          </span>
        </div>
      </div>

      {/* Menu */}

      <DropdownMenu>
        <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-xl text-primary"
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={onEdit}>
            <Pencil className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>

          <DropdownMenuItem className="text-destructive" onClick={onDelete}>
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}

export default TaskItem;
