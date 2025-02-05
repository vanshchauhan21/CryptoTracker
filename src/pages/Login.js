import { SignIn } from "@clerk/clerk-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignInPage() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleHomeClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="login-page">
      {/* Home Button */}
      <div
        className="home-icon"
        onClick={handleHomeClick}
        aria-label="Go to home page"
      >
        <i className="fas fa-home"></i>
      </div>

      {/* Sign-In Form */}
      <div className="signin-container">
        

        <SignIn
          appearance={{
            elements: {
              footerActionLink: { display: "none" },
            }, }}
           />
        
      </div>

      {/* Sign-Up Link */}
      {/* <div className="signup-link-container">
        <Link to="/signup" className="custom-signup-link">
          Don’t have an account? Sign Up Here
        </Link>
      </div> */}

      {/* Styles */}
      <style>
        {`
          .login-page {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f7fafc;
            padding: 1rem;
          }
          .home-icon {
            position: absolute;
            top: 3rem;
            left: 3rem;
            cursor: pointer;
            transition: transform 0.3s ease;
            font-size: 24px;
            color: #333;
          }
          .home-icon:hover {
            transform: scale(1.2);
          }
          .signin-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            max-width: 400px;
          }
          .remember-forgot-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-bottom: 1rem;
          }
          .remember-me-label {
            font-size: 14px;
            color: #333;
          }
          .forgot-password-link {
            color: #3a80e9;
            text-decoration: none;
            font-size: 14px;
          }
          .custom-signup-link {
            color: #3a80e9;
            text-decoration: none;
            font-weight: bold;
            display: block;
            margin-top: 1rem;
          }
          .signup-link-container {
            position: absolute;
            bottom: 5rem;
            text-align: center;
            font-size: 14px;
            color: #333;
          }
        `}
      </style>
    </div>
  );
}
