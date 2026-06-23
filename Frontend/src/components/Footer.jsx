export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-zinc-900 via-neutral-800 to-zinc-700 border-t border-zinc-700 py-3">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 text-sm">

        <p className="text-zinc-400">
          © 2026 SpendStack
        </p>

        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="text-zinc-400 hover:text-white transition">
            About
          </a>

          <a href="#" className="text-zinc-400 hover:text-white transition">
            Contact
          </a>

          <a href="#" className="text-zinc-400 hover:text-white transition">
            Privacy
          </a>
        </div>

      </div>
    </footer>
  );
}