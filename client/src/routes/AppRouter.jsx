import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import CalendarPage from "@/pages/Calendar";
import Dashboard from "@/pages/Dashboard";
import Tasks from "@/pages/tasks/Tasks";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PrivateLayout from "@/layouts/PrivateLayout";
import GuestRoute from "./GuestRoute";

function AppRouter() {
  return (
    <Routes>
      <Route element={<GuestRoute />}>
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<PrivateLayout />}>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/algorithms" element={<div>Algorithms</div>} />
          <Route path="/settings" element={<div>Settings</div>} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;
