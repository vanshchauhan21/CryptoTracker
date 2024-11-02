import { SignUp } from "@clerk/clerk-react";
import React from 'react';

export default function SignUpPage() {
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
          {/* <span>Already have an account? </span> */}
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
