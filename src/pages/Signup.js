import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle for confirm password visibility

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get registered emails from localStorage
    const registeredEmail = localStorage.getItem("registeredEmail");

    // Check if the email is already registered
    if (registeredEmail === email) {
      setError("Email is already registered.");
      setSuccess("");
      return;
    }

    // Validate password match and length
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      setSuccess("");
    } else {
      // Save email and password to localStorage if not registered already
      localStorage.setItem("registeredEmail", email);
      localStorage.setItem("registeredPassword", password);

      setError("");
      setSuccess("Signup successful!");
      // Redirect to login after successful signup
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="authhead">Sign Up</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input"
        />

        {/* Password Input with Eye Icon for Toggle */}
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Confirm Password Input with Eye Icon for Toggle */}
        <div className="password-field">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="input"
          />
          <span
            className="eye-icon"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}

        <button type="submit" className="button">
          Sign Up
        </button>
        {/* Login Redirect */}
        <p className="signup-text">
          Already have an account? <a href="/login">LogIn</a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
