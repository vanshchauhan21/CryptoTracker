import React from "react";
import Drawer from "@mui/material/Drawer";
import { Switch } from "@mui/material";
import { useTheme } from "../context/ThemeContext"; // Ensure you have a context for theme
import "./styles.css";

export default function AppDrawer({ open, setOpen }) {
  const { theme, toggleTheme } = useTheme();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <div className="drawer-div themed-drawer">
        <a href="/" className="link">
          Home
        </a>
        <a href="/features" className="link">
          Features
        </a>
        <a href="/about" className="link">
          About
        </a>
        <a href="/contact" className="link">
          Contact
        </a>

        <button className="btn" onClick={() => alert("Button clicked!")}>
          Action
        </button>

        <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "1rem" }}>Dark Mode</span>
          <Switch checked={theme === "dark"} onChange={toggleTheme} />
        </div>
      </div>
    </Drawer>
  );
}
