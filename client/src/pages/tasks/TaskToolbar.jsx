import { Plus, Search, ArrowUpDown, LayoutGrid, List } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function TaskToolbar({ search, setSearch, onAddTask, view = "list", setView }) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Search */}
      <div className="relative w-full lg:max-w-md">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="
            h-12
            rounded-2xl
            border-border/50
            bg-background/50
            pl-11
            shadow-none
            backdrop-blur-xl
            focus-visible:ring-1
            focus-visible:ring-primary
          "
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Sort */}
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-2xl text-primary"
        >
          <ArrowUpDown className="h-4 w-4" />
        </Button>

        {/* View */}
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-2xl text-primary"
          onClick={() => setView?.(view === "list" ? "grid" : "list")}
        >
          {view === "list" ? (
            <LayoutGrid className="h-4 w-4" />
          ) : (
            <List className="h-4 w-4" />
          )}
        </Button>

        {/* Add */}
        <Button onClick={onAddTask} className="h-12 rounded-2xl px-6">
          <Plus className="mr-2 h-4 w-4" />
          Add Task
        </Button>
      </div>
    </div>
  );
}

export default TaskToolbar;
