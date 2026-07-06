import GlassCard from "../GlassCard";

function WeeklyStatsCard() {
  const days = [65, 80, 35, 90, 72, 100, 45];

  return (
    <GlassCard hover>
      <h2 className="text-lg font-semibold">Weekly Progress</h2>

      <div className="mt-8 flex h-48 items-end justify-between gap-2">
        {days.map((day, index) => (
          <div key={index} className="flex flex-1 flex-col items-center gap-2">
            <div
              className="w-full rounded-full bg-primary transition-all"
              style={{
                height: `${day}%`,
              }}
            />

            <span className="text-xs text-secondary">SMTWTFS"[index]</span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default WeeklyStatsCard;
