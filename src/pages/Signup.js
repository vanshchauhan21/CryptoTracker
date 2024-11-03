import { SignUp } from "@clerk/clerk-react";
import React, { useState } from 'react';

export default function SignUpPage() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Basic client-side password validation
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else if (!/[A-Z]/.test(newPassword)) {
      setPasswordError("Password must contain at least one uppercase letter.");
    } else if (!/[0-9]/.test(newPassword)) {
      setPasswordError("Password must contain at least one number.");
    } else if (!/[@$!%*?&#]/.test(newPassword)) {
      setPasswordError("Password must contain at least one special character.");
    } else {
      setPasswordError(""); // Clear error if password meets all conditions
    }
  };

  const handleHomeClick = () => {
    window.location.href = '/';
  };

  return (
    <div
      className="signup-page"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f7fafc",
        padding: "1rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "3rem",
          left: "3rem",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
        onClick={handleHomeClick}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <i className="fas fa-home" style={{ fontSize: "24px", color: "#333" }}></i>
      </div>
      <div style={{ position: "relative" }}>
        <SignUp
          appearance={{
            elements: {
              footerActionLink: {
                display: "none",
              },
            },
          }}
          password={password} // Pass password state to SignUp component
          onPasswordChange={handlePasswordChange} // Add event handler for password
        />
        {passwordError && (
          <div style={{ color: "red", fontSize: "14px", marginTop: "10px" }}>
            {passwordError}
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: "5rem",
            width: "100%",
            textAlign: "center",
            fontSize: "14px",
            color: "#333",
          }}
        >
          <a
            href="/login"
            className="custom-signin-link"
          >
            Sign in
          </a>
        </div>
      </div>
      <style>
        {`
          .cl-footerActionText{
            display: !important;
            padding-bottom:10px;
          }
          .cl-footerActionLink {
            display: none !important;
          }
          .custom-signin-link {
            color: #3a80e9;
            text-decoration: none;
            font-weight: bold;
            position: relative;
            top:0.1rem;
            display: block !important;
          }
        `}
      </style>
    </div>
  );
}
