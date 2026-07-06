import Dashboard from "@/pages/Dashboard";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<Dashboard />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/tasks" element={<div>Tasks</div>} />
      <Route path="/calendar" element={<div>Calendar</div>} />
      <Route path="/algorithms" element={<div>Algorithms</div>} />
      <Route path="/settings" element={<div>Settings</div>} />
    </Routes>
  );
}

export default AppRouter;
