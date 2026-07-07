import GlassCard from "@/components/common/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { ArrowUpRight, Clock3, Sparkles, Target } from "lucide-react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function TodayFocusCard({ focus }) {
  const navigate = useNavigate();

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
        {/* Glow */}
        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative flex h-full flex-col justify-between">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-lg font-semibold text-primary">
                Today's Focus
              </p>

              <Badge
                variant="secondary"
                className="mt-2 bg-primary/10 text-primary border-0"
              >
                {focus.priority}
                <Sparkles className="mr-1 h-3 w-3" />
              </Badge>
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

          {/* Body */}
          <div className="mt-4">
            <h2 className="text-3xl font-bold leading-tight text-primary">
              {focus.title}
            </h2>

            <p className="mt-0 text-sm leading-7 text-muted ">
              {focus.description}
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Clock3 className="h-4 w-4" />
                {focus.time}
              </div>

              <p className="text-xs text-muted">Estimated completion time</p>
            </div>

            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.08,
              }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"
            >
              <Target className="h-7 w-7" />
            </motion.div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default TodayFocusCard;
