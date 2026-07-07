import GlassCard from "@/components/common/GlassCard";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

import { ArrowUpRight, Flame } from "lucide-react";

import { useNavigate } from "react-router-dom";

import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";

function ProgressCard({ progress, completed, total, streak = 12 }) {
  const navigate = useNavigate();

  const value = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  useMotionValueEvent(value, "change", (latest) => {
    setDisplayValue(Math.round(latest));
  });

  useEffect(() => {
    const controls = animate(value, progress, {
      duration: 1,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [progress]);

  const getStatus = () => {
    if (progress === 100)
      return {
        text: "Amazing! 🎉",
        color: "bg-green-500/10 text-green-600",
      };

    if (progress >= 70)
      return {
        text: "Almost There 🚀",
        color: "bg-blue-500/10 text-blue-600",
      };

    if (progress >= 40)
      return {
        text: "On Track 💪",
        color: "bg-yellow-500/10 text-yellow-600",
      };

    return {
      text: "Getting Started ✨",
      color: "bg-primary/10 text-primary",
    };
  };

  const status = getStatus();

  return (
    <motion.div
      whileHover={{
        y: -4,
        transition: { duration: 0.2 },
      }}
    >
      <GlassCard
        interactive
        hover
        onClick={() => navigate("/tasks")}
        className="relative overflow-hidden h-full p-6"
      >
        {/* Background Glow */}
        <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <div className="relative flex flex-col justify-between h-full gap-8">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-lg font-semibold text-primary">
                Today's Progress
              </p>

              <motion.h2 className="mt-3 text-5xl font-bold tracking-tight text-primary">
                {displayValue}%
              </motion.h2>

              <p className="mt-2 text-sm text-muted">
                {completed} / {total} Tasks Completed
              </p>
            </div>

            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-primary/10 hover:bg-primary/20"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/tasks");
              }}
            >
              <motion.div whileHover={{ rotate: 45 }}>
                <ArrowUpRight className="h-5 w-5" />
              </motion.div>
            </Button>
          </div>

          {/* Progress */}
          <div className="space-y-4">
            <Progress value={progress} className="h-3 rounded-full" />

            <div className="flex items-center justify-between">
              <Badge variant="secondary" className={`border-0 ${status.color}`}>
                {status.text}
              </Badge>

              <div className="flex items-center gap-2 text-sm font-medium text-orange-500">
                <Flame className="h-4 w-4 fill-orange-500" />
                {streak} Day Streak
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default ProgressCard;
