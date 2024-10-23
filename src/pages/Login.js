import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
const LoginPage = () => {
  const navigate = useNavigate();
  
  // Retrieve credentials from localStorage
  const registeredEmail = localStorage.getItem('registeredEmail');
  const registeredPassword = localStorage.getItem('registeredPassword');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate login
    if (email.trim() === registeredEmail && password === registeredPassword) {
      setLoginSuccess(true);
      setError('');
      // Redirect to home page after 2 seconds of successful login
      setTimeout(() => navigate('/'), 2000);
    } else {
      setError('Invalid email or password.');
      setLoginSuccess(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="authhead">Login</h2>

        {/* Email Input */}
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
            type={showPassword ? 'text' : 'password'}
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
            {showPassword ? <FaEyeSlash/> : <FaEye/>}
          </span>
        </div>

        {/* Error and Success Messages */}
        {error && <div className="error">{error}</div>}
        {loginSuccess && <div className="success">Login successful! Redirecting...</div>}

        {/* Submit Button */}
        <button type="submit" className="button">
          Login
        </button>

        {/* Signup Redirect */}
        <p className="signup-text">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
