import { useState } from "react";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";

function Hero() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <section className="h-full bg-gradient-to-br from-slate-950 via-gray-900 to-zinc-800 flex items-center justify-center px-6 relative overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.15),transparent_60%)]"></div>

      <div className="text-center max-w-4xl relative z-10">

        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          Manage Your Money
          <br />
          With <span className="text-teal-400">SpendStack</span>
        </h1>

        <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Track expenses, analyze spending patterns, and gain complete
          control over your finances with a simple and intuitive expense
          management platform.
        </p>

        <div className="flex justify-center gap-5">

          <button
            onClick={() => setShowSignup(true)}
            className="px-8 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 hover:scale-105 transition duration-300 shadow-lg"
          >
            Sign Up
          </button>

          <button
            onClick={() => setShowLogin(true)}
            className="px-8 py-3 rounded-xl border border-zinc-600 text-white font-semibold hover:bg-white/5 transition duration-300"
          >
            Login
          </button>

        </div>

      </div>

      <SignupModal
        isOpen={showSignup}
        onClose={() => setShowSignup(false)}
        openLogin={() => setShowLogin(true)}
      />

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        openSignup={() => setShowSignup(true)}
      />
    </section>
  );
}

export default Hero;