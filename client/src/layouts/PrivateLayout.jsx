import Dock from "@/components/layout/Dock";
import Header from "@/components/layout/Header";
import AppRouter from "@/routes/AppRouter";
import { Outlet } from "react-router-dom";

function PrivateLayout() {
  return (
    <main className="h-screen bg-app overflow-y-auto relative flex flex-col ">
      <Header />

      <main className="flex-1 mx-auto max-w-7xl px-3 md:px-6 pt-28 pb-32">
        <Outlet />
        <AppRouter />
      </main>

      <div>
        <Dock className="" />
      </div>
    </main>
  );
}

export default PrivateLayout;
