import { useState } from "react";
import { CheckCircle2, Circle, MoreVertical } from "lucide-react";
import GlassCard from "@/components/common/GlassCard";

function TodayTasksCard({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);

  const toggleTask = (id) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <GlassCard hover>
      <h2 className="mb-5 text-lg font-semibold">Today's Tasks</h2>

      <div className="space-y-2">
        {taskList.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className="flex cursor-pointer items-center rounded-xl px-2 py-2 transition hover:bg-white/10"
          >
            {/* icon */}
            <div className="mr-4">
              {task.completed ? (
                <CheckCircle2 className="text-green-500" size={18} />
              ) : (
                <Circle className="text-sky-500" size={18} />
              )}
            </div>

            {/* title */}
            <p
              className={`w-40 ${
                task.completed && "text-[var(--text-muted)] line-through"
              }`}
            >
              {task.title}
            </p>

            {/* category */}
            <span className="w-28 font-medium text-blue-500">
              {task.category}
            </span>

            {/* time */}
            <span className="ml-auto text-[var(--text-secondary)]">
              {task.time}
            </span>

            {/* menu */}
            <MoreVertical
              size={16}
              className="ml-4 text-[var(--text-secondary)]"
            />
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default TodayTasksCard;
