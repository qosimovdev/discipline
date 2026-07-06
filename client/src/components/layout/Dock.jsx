import { House, ListTodo, CalendarDays, Code2, Settings } from "lucide-react";
import DockItem from "./DockItem";

const dockItems = [
  {
    name: "Tasks",
    path: "/tasks",
    icon: ListTodo,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: CalendarDays,
  },
  {
    name: "Home",
    path: "/",
    icon: House,
  },
  {
    name: "Algorithms",
    path: "/algorithms",
    icon: Code2,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

function Dock() {
  return (
    <nav
      className="
        fixed
        bottom-6
        left-1/2
        z-50
        -translate-x-1/2
      "
    >
      <div
        className="
          flex
          items-center
          gap-2
          rounded-full
          border
          glass
          p-2
          backdrop-blur-3xl
        "
      >
        {dockItems.map((item) => (
          <DockItem key={item.path} item={item} />
        ))}
      </div>
    </nav>
  );
}

export default Dock;
