import { AnimatePresence, motion } from "framer-motion";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onEdit, onDelete }) {
  return (
    <div className="space-y-3">
      <AnimatePresence>
        {tasks.map((task) => (
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
          >
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onEdit={() => onEdit?.(task)}
              onDelete={() => onDelete?.(task)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default TaskList;
