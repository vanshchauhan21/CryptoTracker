import { SignIn } from "@clerk/clerk-react";
import React from 'react';

export default function SignInPage() {
  const handleHomeClick = () => {
    window.location.href = '/';
  };

  return (
    <div
    className="login-page"
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
        <span>Don't have an account? </span>
        <a
          href="/signup"
          style={{
            color: "#3a80e9",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "0.7rem",
          }}
        >
          Sign up
        </a>
      </div>
    </div>
    <style>
        {`
          .cl-footerActionText {
            display: none !important;
          }
        `}
      </style>
    </div>
  );
}
