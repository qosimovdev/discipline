import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import GlassCard from "@/components/common/GlassCard";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";
import EmptyTasks from "./EmptyTasks";

function TodayTasksCard({ tasks }) {
  const navigate = useNavigate();

  const [taskList, setTaskList] = useState(tasks);

  const toggleTask = (id) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  };

  const completed = taskList.filter((task) => task.completed).length;

  return (
    <GlassCard className="flex h-full flex-col">
      <TaskHeader completed={completed} total={taskList.length} />

      <ScrollArea className="h-[360px] pr-2">
        <AnimatePresence mode="popLayout">
          {taskList.length ? (
            <TaskList tasks={taskList} onToggle={toggleTask} />
          ) : (
            <EmptyTasks />
          )}
        </AnimatePresence>

        <ScrollBar orientation="vertical" />
      </ScrollArea>

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
