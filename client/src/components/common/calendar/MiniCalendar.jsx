import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

function MiniCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-xl border-0"
    />
  );
}

export default MiniCalendar;
