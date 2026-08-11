import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../../utils/sidebarLinks";

function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed md:sticky
          top-0 left-0
          z-50
          h-screen
          w-64
          bg-white
          border-r
          overflow-y-auto
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          md:flex md:flex-col
        `}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b">
          <h1 className="text-2xl font-bold text-emerald-600">HealthSync</h1>

          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="md:hidden text-slate-600 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all duration-200
                  ${
                    isActive
                      ? "bg-emerald-500 text-white shadow"
                      : "text-slate-600 hover:bg-slate-100"
                  }`
                }
              >
                <Icon size={18} />
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
