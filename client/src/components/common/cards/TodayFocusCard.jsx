import GlassCard from "@/components/common/GlassCard";
import { Clock3, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

function TodayFocusCard({ focus }) {
  const navigate = useNavigate();

  return (
    <GlassCard
      onClick={() => navigate("/tasks")}
      interactive
      hover
      className="flex h-full flex-col justify-between"
    >
      <div>
        <p className="text-lg font-medium text-primary">Today's Focus</p>

        <h2 className="mt-3 text-2xl font-bold text-[var(--text-primary)]">
          {focus.title}
        </h2>

        <p className="mt-3 leading-7 text-[var(--text-secondary)]">
          {focus.description}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
          <Clock3 size={16} />
          <span>{focus.time}</span>
        </div>

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[var(--primary-soft)]
            text-[var(--primary)]
          "
        >
          <Target size={22} />
        </div>
      </div>
    </GlassCard>
  );
}

export default TodayFocusCard;
