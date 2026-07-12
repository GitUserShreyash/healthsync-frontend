import Sidebar from "../components/common/Sidebar";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="h-screen bg-slate-100 flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Top Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 min-h-0 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
