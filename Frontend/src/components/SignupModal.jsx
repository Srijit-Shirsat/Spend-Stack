function SignupModal({ isOpen, onClose, openLogin }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xl"
        >
          ×
        </button>

        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Join SpendStack
        </h2>

        <p className="text-zinc-400 text-center mb-6">
          Start managing your expenses smarter.
        </p>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-zinc-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-zinc-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-zinc-500"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-white text-zinc-900 font-semibold hover:bg-zinc-200 transition"
          >
            Sign Up
          </button>

          <p className="text-center text-zinc-400 mt-5">
              Already logged in?{" "}
            <button
                  type="button"
                  onClick={() => {
                    onClose();
                    openLogin();
                  }}
                  className="text-white font-medium hover:underline">
                  Login
            </button>
          </p>
        </form>
      </div>

    </div>
  );
}

export default SignupModal;