import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError("");
      setSuccess("Sign-up successful!");
      // Handle successful sign-up logic here
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#fcf3e3]">
      <div className="w-96 bg-white rounded-2xl p-8 shadow-lg">
        <img
          src="Phupho.png"
          alt="Logo"
          width="160px"
          height="155px"
          className="mx-auto mb-6"
        />
        <h2 className="text-3xl text-[#013d5a] text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              className="w-full py-3 pl-10 pr-4 border-2 border-[#708c69] rounded-full outline-none focus:border-[#bdd3ce] transition"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <i className="fas fa-envelope absolute top-1/2 left-4 transform -translate-y-1/2 text-[#708c69]" />
          </div>
          <div className="relative">
            <input
              type="password"
              className="w-full py-3 pl-10 pr-4 border-2 border-[#708c69] rounded-full outline-none focus:border-[#bdd3ce] transition"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i className="fas fa-lock absolute top-1/2 left-4 transform -translate-y-1/2 text-[#708c69]" />
          </div>
          <div className="relative">
            <input
              type="password"
              className="w-full py-3 pl-10 pr-4 border-2 border-[#708c69] rounded-full outline-none focus:border-[#bdd3ce] transition"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <i className="fas fa-lock absolute top-1/2 left-4 transform -translate-y-1/2 text-[#708c69]" />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-[#bdd3ce] text-[#fcf3e3] rounded-full font-bold text-xl transition hover:shadow-md"
            >
              Sign Up
            </button>
          </div>
        </form>
        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        {success && (
          <div className="text-green-500 text-center mt-4">{success}</div>
        )}
        <div className="mt-6 text-center space-y-2">
          <p>
            Already have an account?{" "}
            <a
              href="login.html"
              className="text-red-500 hover:text-[#013d5a] font-bold transition"
            >
              Log In
            </a>
          </p>
          <p>
            Explore features{" "}
            <a
              href="key-features.html"
              className="text-red-500 hover:text-[#013d5a] font-bold transition"
            >
              Click Here To Start
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;