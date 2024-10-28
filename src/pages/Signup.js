import { SignUp } from "@clerk/clerk-react";
import React from 'react';

export default function SignUpPage() {
  const handleHomeClick = () => {
    window.location.href = '/'; 
  };

  return (
    <div
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
      <SignUp />
    </div>
  );
}