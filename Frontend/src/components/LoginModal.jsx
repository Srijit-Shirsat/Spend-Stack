import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/auth";

function LoginModal({isOpen, onClose, openSignup,}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("LOGIN BUTTON CLICKED");

    try {
      const data = await login({
        username,
        password,
      });

      console.log("Login successful:", data);

      localStorage.setItem("access_token", data.access_token);

      alert("Login successful!");

      setUsername("");
      setPassword("");

      onClose();
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);

      alert(
        error.response?.data?.detail ||
        "Login failed. Please check your credentials."
      );
    }
  };

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
          Welcome Back
        </h2>

        <p className="text-zinc-400 text-center mb-6">
          Login to continue using SpendStack.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-zinc-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white outline-none focus:border-zinc-500"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-white text-zinc-900 font-semibold hover:bg-zinc-200 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-zinc-400 mt-5">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => {
              onClose();
              openSignup();
            }}
            className="text-white font-medium hover:underline"
          >
            Sign Up
          </button>
        </p>

      </div>
    </div>
  );
}

export default LoginModal;