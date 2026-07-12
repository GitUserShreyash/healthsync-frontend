import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../../utils/sidebarLinks";

function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col md:w-64 bg-white border-r md:sticky md:top-0 md:h-screen md:overflow-y-auto">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b">
        <h1 className="text-2xl font-bold text-emerald-600">
          HealthSync
        </h1>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
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
  );
}

export default Sidebar;