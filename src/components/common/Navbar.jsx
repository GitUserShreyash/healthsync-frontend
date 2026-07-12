import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
      {/* Search */}
      <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg w-full max-w-sm">
        <FaSearch className="text-slate-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <button className="text-slate-600 hover:text-emerald-600">
          <FaBell size={20} />
        </button>

        <div className="flex items-center gap-2 cursor-pointer">
          <FaUserCircle size={30} className="text-slate-600" />
          <span className="font-medium">Shreyash</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;