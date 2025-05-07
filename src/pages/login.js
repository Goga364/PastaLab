"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        password,
      });

      if (res?.error) {
        setError("Invalid password. Please try again.");
      } else {
        // Success: redirect to home (or wherever you like)
        window.location.href = "/";
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1C305E] min-h-screen flex justify-center items-center w-dvw">
      <div className="bg-white p-8 w-full max-w-sm rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-[#1C305E] text-center mb-6">
          Login
        </h1>
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-4 text-[#1C305E] bg-[#F6F6F6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C305E] transition"
            disabled={loading}
          />
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3 bg-[#FBB14A] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FBB14A] transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && (
            <p className="text-red-500 text-sm text-center mt-4">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
}
