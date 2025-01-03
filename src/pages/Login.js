import { SignIn } from "@clerk/clerk-react";

import Header from  "../components/Common/Header"

import React, { useState } from 'react';

export default function SignInPage() {
  const [rememberMe, setRememberMe] = useState(false); // State for "Remember Me" checkbox

  const handleHomeClick = () => {
    window.location.href = '/';
  };

  return (
    <div
      className="login-page"
      style={{
        display: "flex",
        flexDirection: "column",
    
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f7fafc",
        padding: "1rem",
      }}
    >
      {/* <div
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
      </div> */}
       <Header/>
      <div style={{ position: "relative" }}>
        
        {/* Remember Me and Forgot Password section */}
        <div style={{ marginBottom: "1rem", textAlign: "left", width: "100%", marginLeft: "10px"}}>
  <label style={{ fontSize: "14px", color: "#333", display: "inline-flex", alignItems: "center"}}>
    <input
      type="checkbox"
      checked={rememberMe}
      onChange={(e) => setRememberMe(e.target.checked)}
      style={{ margin: "0", padding: "0" }}
    />
    Remember Me
  </label>

          <a
            href="/forgot-password"
            style={{ display: "block", color: "#3a80e9", textDecoration: "none", fontSize: "14px", marginTop: "-2.0rem", marginLeft: "18rem" }}
          >
            Forgot Password?
          </a>
        </div>

        <SignIn
          appearance={{
            elements: {
              footerActionLink: {
                display: "none",
              },
            },
          }}
        />
        
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
            href="/signup"
            className="custom-signup-link"
          >
            Sign up
          </a>
        </div>
      </div>
      <style>
        {`
          .cl-footerActionText {
            display: !important;
            padding-bottom:10px;
          }
          .cl-footerActionLink {
            display: none !important;
          }
          .custom-signup-link{
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
