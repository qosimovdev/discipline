import GlassCard from "../GlassCard";
import { TrendingUp } from "lucide-react";

const stats = [
  { day: "Mon", value: 100 },
  { day: "Tue", value: 80 },
  { day: "Wed", value: 35 },
  { day: "Thu", value: 90 },
  { day: "Fri", value: 72 },
  { day: "Sat", value: 100 },
  { day: "Sun", value: 45 },
];

function WeeklyStatsCard() {
  const average = Math.round(
    stats.reduce((sum, item) => sum + item.value, 0) / stats.length,
  );

  return (
    <GlassCard hover className="h-full">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Weekly Progress</h2>
          <p className="text-sm text-secondary">Average {average}% this week</p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <TrendingUp className="h-5 w-5 text-primary" />
        </div>
      </div>

      {/* Chart */}
      <div className="mt-8 flex h-48 items-end justify-between gap-3">
        {stats.map((item) => (
          <div
            key={item.day}
            className="flex flex-1 flex-col items-center gap-3"
          >
            <div
              className="
                w-full
                rounded-full
                bg-gradient-to-t
                from-primary
                to-primary/50
                transition-all
                duration-500
              "
              style={{
                height: `${item.value}%`,
              }}
            />

            <span className="text-xs text-secondary">{item.day}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default WeeklyStatsCard;
