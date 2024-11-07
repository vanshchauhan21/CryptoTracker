import React, { useState, useEffect, useRef } from "react";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";

function TopButton() {
  // Reference to the button element
  const buttonRef = useRef(null);
  // State to track button visibility
  const [visible, setVisible] = useState(false);

  // Scroll function to determine visibility of the button
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      setVisible(true);  // Show the button
    } else {
      setVisible(false);  // Hide the button
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  // Function to scroll to the top when the button is clicked
  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      ref={buttonRef}
      className="top-btn"
      onClick={handleClick}
      style={{
        display: visible ? "flex" : "none", // Toggle visibility based on scroll position
        position: "fixed", // Fix button at the bottom-right
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        padding: "10px",
        borderRadius: "50%",
        backgroundColor: "#fff", // Optional styling
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      <ExpandLessRoundedIcon />
    </div>
  );
}

export default TopButton;
