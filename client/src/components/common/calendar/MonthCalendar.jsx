import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import GlassCard from "@/components/common/GlassCard";
import { Button } from "@/components/ui/button";

import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

import { format } from "date-fns";

function MonthCalendar() {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(new Date());

  return (
    <GlassCard className="h-full overflow-hidden p-3 sm:p-4 lg:p-6">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-secondary p-2">
            <CalendarDays className="h-5 w-5 text-primary" />
          </div>

          <div>
            <h2 className="text-lg text-primary font-semibold sm:text-xl">
              Calendar
            </h2>

            <p className="text-sm text-muted">{format(month, "MMMM yyyy")}</p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={() =>
              setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))
            }
          >
            <ChevronLeft className="h-4 w-4 text-primary" />
          </Button>

          <Button
            variant="secondary"
            className="hidden sm:flex"
            onClick={() => {
              setMonth(new Date());
              setDate(new Date());
            }}
          >
            Today
          </Button>

          <Button
            size="icon"
            variant="ghost"
            onClick={() =>
              setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))
            }
          >
            <ChevronRight className="h-4 w-4 text-primary" />
          </Button>
        </div>
      </div>

      {/* Calendar */}

      <motion.div
        key={month.toISOString()}
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.25,
        }}
      >
        <Calendar
          mode="single"
          month={month}
          onMonthChange={setMonth}
          selected={date}
          onSelect={setDate}
          showOutsideDays
          className="w-full rounded-2xl border-0 glass text-primary"
          classNames={{
            months: "w-full",
            month: "w-full space-y-3",
            table: "w-full border-collapse",
            head_row: "flex",
            head_cell: "w-full text-[11px] sm:text-sm font-medium text-muted",
            row: "mt-1 sm:mt-2 flex w-full",
            cell: "relative h-14 w-full text-center p-0",
            day: `
    h-9 w-9
    sm:h-11 sm:w-11
    lg:h-12 lg:w-12
    rounded-xl
    text-xs
    sm:text-sm
    transition-all
    hover:bg-primary/10
  `,
            day_today: "bg-app text-primary font-bold",
            day_selected: "bg-app text-primary",
            day_outside: "text-muted opacity-40",
            day_disabled: "opacity-30",
            nav: "hidden",
          }}
        />
      </motion.div>

      {/* Footer */}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-primary/5 p-4">
        <div>
          <p className="text-sm font-medium text-primary">Selected Date</p>

          <p className="text-sm text-muted">
            {format(date, "EEEE, MMMM d, yyyy")}
          </p>
        </div>

        <Button className="cursor-pointer">Add Event</Button>
      </div>
    </GlassCard>
  );
}

export default MonthCalendar;
