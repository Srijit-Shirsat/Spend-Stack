import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="h-screen flex bg-gradient-to-br from-slate-950 via-gray-900 to-zinc-800">

      {/* Sidebar */}
      <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col justify-between">

        <div>

          <div className="p-6 border-b border-zinc-800">
            <h1 className="text-2xl font-bold text-white">
              Spend<span className="text-teal-400">Stack</span>
            </h1>
          </div>

          <nav className="p-4 space-y-2">

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl ${
                  isActive
                    ? "bg-teal-600 text-white"
                    : "text-zinc-300 hover:bg-zinc-800"
                }`
              }
            >
              🏠 Dashboard
            </NavLink>

            <NavLink
              to="/expenses"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl ${
                  isActive
                    ? "bg-teal-600 text-white"
                    : "text-zinc-300 hover:bg-zinc-800"
                }`
              }
            >
              💰 Expenses
            </NavLink>

            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl ${
                  isActive
                    ? "bg-teal-600 text-white"
                    : "text-zinc-300 hover:bg-zinc-800"
                }`
              }
            >
              📊 Analytics
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl ${
                  isActive
                    ? "bg-teal-600 text-white"
                    : "text-zinc-300 hover:bg-zinc-800"
                }`
              }
            >
              ⚙️ Settings
            </NavLink>

          </nav>
        </div>

        <div className="p-4 border-t border-zinc-800">

          <div className="mb-4">
            <p className="text-white font-medium">
              Srijit
            </p>

            <p className="text-zinc-500 text-sm">
              Premium User
            </p>
          </div>

          <button className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white">
            Logout
          </button>

        </div>

      </aside>

      {/* Dynamic Content */}

      <main className="flex-1 overflow-auto p-8">
        <Outlet />
      </main>

    </div>
  );
}

export default DashboardLayout;