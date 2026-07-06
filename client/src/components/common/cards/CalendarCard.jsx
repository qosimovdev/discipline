import GlassCard from "@/components/common/GlassCard";
import { CalendarDays } from "lucide-react";

function CalendarCard() {
  const today = new Date();

  return (
    <GlassCard hover className="flex h-full flex-col">
      <div className="flex items-center gap-2">
        <CalendarDays size={20} />
        <h2 className="text-lg font-semibold">Calendar</h2>
      </div>

      <div className="mt-8 flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold">{today.getDate()}</h1>

          <p className="mt-2 text-[var(--text-secondary)]">
            {today.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
            })}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

export default CalendarCard;
