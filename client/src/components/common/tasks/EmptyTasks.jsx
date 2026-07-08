import { CheckCircle2 } from "lucide-react";

function EmptyTasks() {
  return (
    <div className="flex h-56 flex-col items-center justify-center rounded-2xl border border-dashed">
      <CheckCircle2 className="mb-4 h-10 w-10 text-primary" />

      <h3 className="font-semibold">You're all caught up!</h3>

      <p className="mt-2 text-center text-sm text-muted-foreground">
        No tasks left for today.
      </p>
    </div>
  );
}

export default EmptyTasks;
