import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  Check,
  Clock3,
  MoreVertical,
  Pencil,
  Trash2,
} from "lucide-react";

import GlassCard from "@/components/common/GlassCard";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function TodayTasksCard({ tasks }) {
  const navigate = useNavigate();

  const [taskList, setTaskList] = useState(tasks);

  const toggleTask = (id) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const completed = taskList.filter((t) => t.completed).length;

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "react":
        return "bg-sky-500/10 text-sky-600 border-sky-500/20";

      case "algorithm":
        return "bg-violet-500/10 text-violet-600 border-violet-500/20";

      case "health":
        return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";

      case "work":
        return "bg-orange-500/10 text-orange-600 border-orange-500/20";

      default:
        return "";
    }
  };

  return (
    <GlassCard className="flex h-full flex-col">
      {/* Header */}

      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-primary">Today's Tasks</h2>

          <p className="mt-1 text-sm text-muted-foreground">
            {completed} completed • {taskList.length - completed} remaining
          </p>
        </div>

        <Badge variant="secondary">{taskList.length}</Badge>
      </div>

      <ScrollArea className="h-[360px] pr-2">
        <div className="space-y-3">
          <AnimatePresence>
            {taskList.map((task) => (
              <motion.div
                key={task.id}
                layout
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 30,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 22,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => toggleTask(task.id)}
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
                  duration-200
                  md:hover:bg-white/5
                  md:hover:border-primary/10
                  md:hover:shadow-md

                  ${task.completed ? "opacity-70" : ""}
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
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    transition-all

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

                <div className="min-w-0 flex-1">
                  <h3
                    className={`
                      truncate
                      font-medium
                      text-primary
                      ${
                        task.completed
                          ? "line-through text-muted-foreground"
                          : ""
                      }
                    `}
                  >
                    {task.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 flex-wrap">
                    <Badge
                      variant="outline"
                      className={getCategoryColor(task.category)}
                    >
                      {task.category}
                    </Badge>

                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock3 className="h-3.5 w-3.5" />
                      {task.time}
                    </div>
                  </div>
                </div>
                {/* Actions */}

                <DropdownMenu>
                  <DropdownMenuTrigger
                    asChild
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="
                        h-8
                        w-8
                        shrink-0
                        
                        opacity-100
                        text-primary
                        cursor-pointer
                        md:opacity-100
                        md:group-hover:opacity-100
                        transition-opacity
                      "
                    >
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="glass w-40 ">
                    <DropdownMenuItem>
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>

                    <DropdownMenuItem className="text-destructive focus:text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty State */}

          {taskList.length === 0 && (
            <div className="flex h-52 flex-col items-center justify-center rounded-2xl border border-dashed">
              <Check className="mb-3 h-8 w-8 text-primary" />

              <h3 className="font-semibold text-primary">
                You're all caught up!
              </h3>

              <p className="mt-1 text-center text-sm text-muted-foreground">
                No tasks left for today.
              </p>
            </div>
          )}
        </div>

        <ScrollBar orientation="vertical" />
      </ScrollArea>

      {/* Footer */}

      <Button
        variant="ghost"
        onClick={() => navigate("/tasks")}
        className="mt-4 w-full justify-between rounded-xl text-primary"
      >
        View All Tasks
        <ArrowRight className="h-4 w-4" />
      </Button>
    </GlassCard>
  );
}

export default TodayTasksCard;
