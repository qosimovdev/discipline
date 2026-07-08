import MonthCalendar from "@/components/common/calendar/MonthCalendar";
// import EventList from "@/components/common/calendar/EventList";

function CalendarPage() {
  return (
    <section className="space-y-6">
      <div className="">
        <h1 className="text-4xl font-bold text-primary">Calendar</h1>
        <p className="text-muted mt-2">
          Manage your schedule and upcoming tasks.
        </p>
      </div>

      <div className="">
        <div className="">
          <MonthCalendar />
        </div>

        {/* <div className="lg:col-span-4"><EventList /></div> */}
      </div>
    </section>
  );
}

export default CalendarPage;
