import GlassCard from "@/components/common/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CalendarCard() {
  const navigate = useNavigate();
  const today = new Date();

  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <GlassCard
        onClick={() => navigate("/calendar")}
        interactive
        className="relative overflow-hidden h-full p-6"
      >
        <div className="absolute -bottom-14 -right-14 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative flex h-full flex-col justify-between">
          {/* Header */}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />

              <h2 className="text-lg font-semibold text-primary">Calendar</h2>
            </div>

            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-0"
            >
              Today
            </Badge>
          </div>

          {/* Date */}

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              {today.toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </p>

            <motion.h1
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              className="mt-2 text-7xl font-bold text-primary"
            >
              {today.getDate()}
            </motion.h1>

            <p className="mt-2 text-muted-foreground">
              {today.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          {/* Footer */}

          <div className="mt-8 flex items-center justify-between rounded-2xl bg-primary/5 p-3">
            <div>
              <p className="text-xs text-secondary">Next Task</p>

              <div className="mt-1 flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-primary" />

                <span className="text-sm font-medium text-muted">09:00 AM</span>
              </div>
            </div>

            <Button
              size="icon"
              variant="ghost"
              className="rounded-full text-primary"
            >
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default CalendarCard;
