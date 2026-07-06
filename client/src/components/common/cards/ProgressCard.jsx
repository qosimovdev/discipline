import GlassCard from "@/components/common/GlassCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProgressCard({ progress, completed, total }) {
  const navigate = useNavigate();
  return (
    <GlassCard
      onClick={() => navigate("/tasks")}
      interactive
      hover
      className="space-y-6 h-full"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-lg text-primary font-semibold">Today's Progress</p>

          <h2 className="mt-2 text-5xl font-bold tracking-tight">
            {progress}%
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            {completed} / {total} Tasks Completed
          </p>
        </div>

        <Button
          size="icon"
          variant="secondary"
          className="
            rounded-full
            bg-primary/10
            hover:bg-primary/20
          "
        >
          <ArrowUpRight className="h-5 w-5" />
        </Button>
      </div>

      <Progress value={progress} className="h-3 rounded-full" />
    </GlassCard>
  );
}

export default ProgressCard;
