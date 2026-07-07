import { useNavigate } from "react-router-dom";

import GlassCard from "@/components/common/GlassCard";
import MiniCalendar from "@/components/calendar/MiniCalendar";

function CalendarCard() {
  const navigate = useNavigate();

  return (
    <GlassCard
      hover
      interactive
      onClick={() => navigate("/calendar")}
      className="overflow-hidden"
    >
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Calendar</h2>

        <span className="text-primary text-sm">View →</span>
      </div>

      <MiniCalendar />
    </GlassCard>
  );
}

export default CalendarCard;
