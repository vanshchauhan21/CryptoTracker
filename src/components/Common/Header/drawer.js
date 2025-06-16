import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import Switch from "@mui/material/Switch";
import "./styles.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") setDark();
    else setLight();
  }, []);

  const changeMode = () => {
    if (localStorage.getItem("theme") !== "dark") setDark();
    else setLight();
    setDarkMode((prev) => !prev);
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
      <div className="nav-left">
        <img src="/logo192.png" alt="CryptoTracker Logo" className="nav-logo-img" />
        <span className="nav-header">CryptoTracker</span>
      </div>
      <div className="nav-center">
        <div className="links-container">
          <a href="/" className="link hover-effect">Home</a>
          <a href="/compare" className="link hover-effect">Compare</a>
          <a href="/watchlist" className="link hover-effect">Watchlist</a>
          <a href="/contact" className="link hover-effect">Contact</a>
          <a href="/learn" className="link hover-effect">Learn</a>
          <a href="/news" className="link hover-effect">News</a>
          <a href="/geminiChat" className="link hover-effect">Gemini Chat</a>
          <a href="/login" className="link hover-effect">Log In</a>
          <a href="/dashboard" className="link hover-effect"><div className="btn">Dashboard</div></a>
        </div>
      </div>
      <div className="nav-right">
        <Switch checked={darkMode} onClick={changeMode} />
        <IconButton
          onClick={() => setOpen(true)}
          className="drawer-component"
          aria-label="Open navigation menu"
          size="large"
        >
          <MenuRoundedIcon className="menu-icon themed-menu-icon" />
        </IconButton>
      </div>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          className: "themed-drawer"
        }}
      >
        <div className="drawer-div" tabIndex={0}>
          <a href="/" className="link hover-effect" onClick={() => setOpen(false)}>Home</a>
          <a href="/compare" className="link hover-effect" onClick={() => setOpen(false)}>Compare</a>
          <a href="/watchlist" className="link hover-effect" onClick={() => setOpen(false)}>Watchlist</a>
          <a href="/contact" className="link hover-effect" onClick={() => setOpen(false)}>Contact</a>
          <a href="/learn" className="link hover-effect" onClick={() => setOpen(false)}>Learn</a>
          <a href="/news" className="link hover-effect" onClick={() => setOpen(false)}>News</a>
          <a href="/geminiChat" className="link hover-effect" onClick={() => setOpen(false)}>Gemini Chat</a>
          <a href="/login" className="link hover-effect" onClick={() => setOpen(false)}>Log In</a>
          <a href="/dashboard" className="link hover-effect" onClick={() => setOpen(false)}><div className="btn">Dashboard</div></a>
          <Switch checked={darkMode} onClick={changeMode} />
        </div>
      </Drawer>
    </nav>
  );
}