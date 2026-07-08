import CalendarPage from "@/pages/Calendar";
import Dashboard from "@/pages/Dashboard";
import Tasks from "@/pages/tasks/Tasks";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<Dashboard />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/algorithms" element={<div>Algorithms</div>} />
      <Route path="/settings" element={<div>Settings</div>} />
    </Routes>
  );
}

export default AppRouter;
