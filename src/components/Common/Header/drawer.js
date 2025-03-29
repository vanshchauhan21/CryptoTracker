import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import Switch from "@mui/material/Switch";
import { toast } from "react-toastify";
import "./styles.css";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") !== "dark") {
      setDark();
    } else {
      setLight();
    }
    setDarkMode(!darkMode);
    
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <nav className="header">
      <div className="nav-logo-container">
        <h1 className="nav-header">My Website</h1>
      </div>
      <div className="links-container">
        <a href="/" className="link hover-effect">Home</a>
        <a href="/compare" className="link hover-effect">Compare</a>
        <a href="/watchlist" className="link hover-effect">Watchlist</a>
        <a href="/learn" className="link hover-effect">Learn</a>
        <a href="/dashboard" className="link hover-effect">Dashboard</a>
        <a href="/signup" className="link hover-effect">Sign Up</a>
        <a href="/login" className="link hover-effect">Log In</a>
      </div>
      <div className="nav-btn-container">
        <Switch checked={darkMode} onClick={changeMode} />
      </div>
      <IconButton onClick={() => setOpen(true)} className="drawer-component">
        <MenuRoundedIcon className="menu-icon" />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          <a href="/" className="link hover-effect">Home</a>
          <a href="/compare" className="link hover-effect">Compare</a>
          <a href="/watchlist" className="link hover-effect">Watchlist</a>
          <a href="/learn" className="link hover-effect">Learn</a>
          <a href="/dashboard" className="link hover-effect">Dashboard</a>
          <a href="/signup" className="link hover-effect">Sign Up</a>
          <a href="/login" className="link hover-effect">Log In</a>
          <Switch checked={darkMode} onClick={changeMode} />
        </div>
      </Drawer>
    </nav>
  );
}
