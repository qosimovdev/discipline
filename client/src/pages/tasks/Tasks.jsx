import { useMemo, useState } from "react";

import GlassCard from "@/components/common/GlassCard";

import TaskToolbar from "./TaskToolbar";
import TaskFilters from "./TaskFilters";

import TaskList from "@/components/common/tasks/TaskList";
import AddTaskDialog from "./AddTaskDialog";

function Tasks() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Finish Dashboard UI",
      category: "React",
      priority: "High",
      completed: false,
      time: "09:00 AM",
    },
    {
      id: 2,
      title: "Solve Two Sum",
      category: "Algorithm",
      priority: "Medium",
      completed: false,
      time: "11:00 AM",
    },
    {
      id: 3,
      title: "Workout",
      category: "Health",
      priority: "Low",
      completed: true,
      time: "06:00 PM",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      if (!matchesSearch) return false;

      switch (filter) {
        case "completed":
          return task.completed;

        case "active":
          return !task.completed;

        default:
          return true;
      }
    });
  }, [tasks, search, filter]);

  const toggleTask = (id) => {
    setTasks((prev) =>
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

  return (
    <section className="space-y-6">
      {/* Header */}

      <div>
        <h1 className="text-4xl text-primary font-bold">Tasks</h1>

        <p className="mt-2 text-muted-foreground">
          Organize your work and stay consistent.
        </p>
      </div>

      <TaskToolbar
        search={search}
        setSearch={setSearch}
        onAddTask={() => setOpen(true)}
      />
      <AddTaskDialog
        open={open}
        onOpenChange={setOpen}
        onSubmit={(task) => {
          console.log(task);
        }}
      />
      <TaskFilters value={filter} onChange={setFilter} />

      <GlassCard className="p-4">
        <TaskList tasks={filteredTasks} onToggle={toggleTask} />
      </GlassCard>
    </section>
  );
}

export default Tasks;
