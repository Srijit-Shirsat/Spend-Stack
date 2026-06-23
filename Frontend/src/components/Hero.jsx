import { useState } from "react";

import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";

function Hero() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <section className="h-full bg-gradient-to-br from-zinc-900 via-neutral-800 to-zinc-700 flex items-center justify-center px-6">

      <div className="text-center max-w-4xl relative">

        <div className="absolute inset-0 blur-3xl bg-zinc-500/10 rounded-full"></div>

        <div className="relative z-10">

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Manage Your Money
            <br />
            With
            <span className="text-zinc-300"> SpendStack</span>
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Track expenses, analyze spending patterns, and gain complete
            control over your finances with a simple and intuitive expense
            management platform.
          </p>

          <div className="flex justify-center gap-5">

            <button
              onClick={() => setShowSignup(true)}
              className="px-8 py-3 rounded-xl bg-white text-zinc-900 font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              Sign Up
            </button>

            <button
              onClick={() => setShowLogin(true)}
              className="px-8 py-3 rounded-xl border border-zinc-400 text-white font-semibold hover:bg-zinc-700 transition duration-300"
            >
              Login
            </button>

          </div>

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