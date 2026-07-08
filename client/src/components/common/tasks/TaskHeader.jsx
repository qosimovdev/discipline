import { Badge } from "@/components/ui/badge";

function TaskHeader({ completed, total }) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-semibold text-primary">Today's Tasks</h2>

        <p className="mt-1 text-sm text-muted-foreground">
          {completed} completed • {total - completed} remaining
        </p>
      </div>

      <Badge variant="secondary" className="py-3">
        {total}
      </Badge>
    </div>
  );
}

export default TaskHeader;
