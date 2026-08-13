import { FaBell, FaUserCircle, FaBars, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useDashboard from "../../hooks/useDashboard";

function Navbar({ onMenuClick }) {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { dashboard } = useDashboard();
  console.log("Dashboard data in Navbar:", dashboard);
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-16 bg-white border-b px-4 md:px-6 flex items-center justify-between">
      
      {/* Mobile Menu Button */}
      <button
        onClick={onMenuClick}
        className="md:hidden text-slate-600 hover:text-emerald-600"
      >
        <FaBars size={22} />
      </button>

      {/* Right Section */}
      <div className="flex items-center gap-4 md:gap-6 ml-auto">

        {/* Notifications */}
        <button className="text-slate-600 hover:text-emerald-600">
          <FaBell size={20} />
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <FaUserCircle size={30} className="text-slate-600" />

          <span className="font-medium hidden sm:block">
            {dashboard?.appName || "User"}
          </span>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition"
        >
          <FaSignOutAlt size={16} />
          <span className="hidden sm:block">Logout</span>
        </button>

      </div>
    </header>
  );
}

export default Navbar;