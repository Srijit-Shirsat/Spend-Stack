// function Navbar() {
//   return (
//     <nav className="w-full bg-gradient-to-r from-zinc-900 via-neutral-800 to-zinc-700 shadow-lg border-b border-zinc-700">
//       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <div className="w-9 h-9 rounded-lg bg-zinc-600 flex items-center justify-center text-white font-bold">
//             S
//           </div>

//           <h1 className="text-2xl font-bold text-white tracking-wide">
//             Spend<span className="text-zinc-300">Stack</span>
//           </h1>
//         </div>

//         {/* Navigation Links */}
//         <div className="hidden md:flex items-center gap-8">
//           <a
//             href="#"
//             className="text-zinc-300 hover:text-white transition duration-300"
//           >
//             Dashboard
//           </a>

//           <a
//             href="#"
//             className="text-zinc-300 hover:text-white transition duration-300"
//           >
//             Expenses
//           </a>

//           <a
//             href="#"
//             className="text-zinc-300 hover:text-white transition duration-300"
//           >
//             Analytics
//           </a>
//         </div>

//         <div className="flex items-center gap-3">
//           <button className="px-4 py-2 rounded-lg bg-zinc-600 hover:bg-zinc-500 text-white transition duration-300">
//             Profile
//           </button>
//         </div>

//       </div>
//     </nav>
//   );
// }

// export default Navbar

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-zinc-900 via-neutral-800 to-zinc-700 shadow-lg border-b border-zinc-700">
      <div className="h-16 px-8 grid grid-cols-3 items-center">

        {/* Left Section */}
        <div className="flex items-center gap-3 justify-start">
          <div className="w-9 h-9 rounded-lg bg-zinc-600 flex items-center justify-center text-white font-bold">
            S
          </div>

          <h1 className="text-2xl font-bold text-white tracking-wide">
            Spend<span className="text-zinc-300">Stack</span>
          </h1>
        </div>

        {/* Center Section */}
        <div className="flex justify-center items-center gap-10">
          <a
            href="#"
            className="text-zinc-300 hover:text-white transition duration-300"
          >
            Dashboard
          </a>

          <a
            href="#"
            className="text-zinc-300 hover:text-white transition duration-300"
          >
            Expenses
          </a>

          <a
            href="#"
            className="text-zinc-300 hover:text-white transition duration-300"
          >
            Analytics
          </a>

          <a
            href="#"
            className="text-zinc-300 hover:text-white transition duration-300"
          >
            About Us
          </a>
        </div>

        {/* Right Section */}
        <div className="flex justify-end">
          <button className="px-4 py-2 rounded-lg bg-zinc-600 hover:bg-zinc-500 text-white transition duration-300">
            Profile
          </button>
        </div>

      </div>
    </nav>
  );
}