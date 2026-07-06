import CalendarCard from "@/components/common/cards/CalendarCard";
import ProgressCard from "@/components/common/cards/ProgressCard";
import TodayFocusCard from "@/components/common/cards/TodayFocusCard";
import TodayTasksCard from "@/components/common/cards/TodayTasksCard";

function Dashboard() {
  const todayFocus = {
    title: "Finish React Dashboard",
    description: "Complete the dashboard UI and prepare reusable components.",
    time: "2h 30m",
  };

  const tasks = [
    {
      id: 1,
      title: "Two Sum",
      category: "Algorithm",
      time: "09:00 AM",
      completed: false,
    },
    {
      id: 2,
      title: "Merge Sort",
      category: "Algorithm",
      time: "11:00 AM",
      completed: false,
    },
    {
      id: 3,
      title: "React Hooks",
      category: "React",
      time: "03:00 PM",
      completed: true,
    },
    {
      id: 4,
      title: "Workout",
      category: "Health",
      time: "06:00 PM",
      completed: false,
    },
  ];

  const completed = tasks.filter((task) => task.completed).length;
  const progress = Math.round((completed / tasks.length) * 100);

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Good Morning, Ibrohim 👋</h1>

          <p className="mt-2 text-secondary">Stay consistent today.</p>
        </div>
      </div>

      {/* Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-7">
          <ProgressCard
            progress={progress}
            completed={completed}
            total={tasks.length}
            className="w-full"
          />
        </div>

        <div className="col-span-7 md:col-span-5">
          <TodayFocusCard className="w-full" focus={todayFocus} />
        </div>

        <div className="col-span-7">
          <TodayTasksCard tasks={tasks} />
        </div>

        <div className="col-span-7 md:col-span-5">
          <CalendarCard />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
