import { FaBell, FaUserCircle, FaBars } from "react-icons/fa";

function Navbar({ onMenuClick }) {
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
        <button className="text-slate-600 hover:text-emerald-600">
          <FaBell size={20} />
        </button>

        <div className="flex items-center gap-2 cursor-pointer">
          <FaUserCircle size={30} className="text-slate-600" />

          {/* Hide name on very small screens */}
          <span className="font-medium hidden sm:block">Shreyash</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
