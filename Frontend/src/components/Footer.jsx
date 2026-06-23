function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-950 via-gray-900 to-zinc-800 border-t border-zinc-700 py-3">

      <div className="flex justify-between items-center px-8">

        <p className="text-zinc-400 text-sm">
          © 2026 SpendStack
        </p>

        <div className="flex gap-8">
          <a
            href="#"
            className="text-zinc-400 hover:text-teal-400 text-sm transition"
          >
            About
          </a>

          <a
            href="#"
            className="text-zinc-400 hover:text-teal-400 text-sm transition"
          >
            Contact
          </a>

          <a
            href="#"
            className="text-zinc-400 hover:text-teal-400 text-sm transition"
          >
            Privacy
          </a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;