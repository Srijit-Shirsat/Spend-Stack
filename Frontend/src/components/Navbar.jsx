function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-slate-950 via-gray-900 to-zinc-800 shadow-lg border-b border-zinc-700">
      <div className="h-16 px-8 grid grid-cols-3 items-center">
        
        <div className="flex items-center gap-3 justify-start">
          <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white font-bold">
            S
          </div>

          <h1 className="text-2xl font-bold text-white tracking-wide">
            Spend<span className="text-teal-400">Stack</span>
          </h1>
        </div>

        {/* Center Links */}
        <div className="flex justify-center items-center gap-10">
          <a href="#" className="text-zinc-300 hover:text-teal-400 transition">
            Dashboard
          </a>

          <a href="#" className="text-zinc-300 hover:text-teal-400 transition">
            Expenses
          </a>

          <a href="#" className="text-zinc-300 hover:text-teal-400 transition">
            Analytics
          </a>

          <a href="#" className="text-zinc-300 hover:text-teal-400 transition">
            About Us
          </a>
        </div>

        {/* Right */}
        <div className="flex justify-end">
          <button className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white transition">
            Profile
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;