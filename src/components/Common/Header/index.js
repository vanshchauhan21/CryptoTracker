import React, { useEffect, useState } from "react";
import Button from "../Button";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, NavLink } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useTranslation } from "react-i18next";
import logo from "../../../assets/logo.jpg";
import "./styles.css";

function Header() {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    theme === "dark" ? setDark() : setLight();
  }, []);

  const changeMode = () => {
    darkMode ? setLight() : setDark();
    setDarkMode(!darkMode);
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.classList.add("dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    document.documentElement.classList.remove("dark");
  };

  // Optional: keep your IOSSwitch styled component if you want
  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 60,
    height: 36,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transition: "transform 0.3s ease-in-out",
      "&.Mui-checked": {
        transform: "translateX(26px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#65C466",
          opacity: 1,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 32,
      height: 32,
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background-color 0.3s ease",
      "&::before": {
        content: '"☀️"',
        position: "absolute",
        left: "6px",
        fontSize: "16px",
        transition: "opacity 0.3s ease-in-out",
        opacity: darkMode ? 0 : 1,
      },
      "&::after": {
        content: '"🌙"',
        position: "absolute",
        right: "6px",
        fontSize: "16px",
        transition: "opacity 0.3s ease-in-out",
        opacity: darkMode ? 1 : 0,
      },
    },
    "& .MuiSwitch-track": {
      borderRadius: 34 / 2,
      backgroundColor: "#E9E9EA",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  return (
    <div className="header">
      <div className="nav-logo-container">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="nav-logo">
            <img src={logo} alt="logo" className="logo" />
            <h1 className="nav-header">{t("CryptoTracker")}</h1>
          </div>
        </Link>
      </div>
      {/* Desktop Navbar */}
      <div className="links-container">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link link" : "link")}>{t("Home")}</NavLink>
        <NavLink to="/compare" className={({ isActive }) => (isActive ? "active-link link" : "link")}>{t("Compare")}</NavLink>
        <NavLink to="/watchlist" className={({ isActive }) => (isActive ? "active-link link" : "link")}>{t("Watchlist")}</NavLink>
        <NavLink to="/contactus" className={({ isActive }) => (isActive ? "active-link link" : "link")}>{t("Contact")}</NavLink>
        <NavLink to="/learn" className={({ isActive }) => (isActive ? "active-link link" : "link")}>{t("Learn")}</NavLink>
        <NavLink to="/news" className={({ isActive }) => (isActive ? "active-link link" : "link")}>{t("News")}</NavLink>
        <NavLink to="/geminiChat" className={({ isActive }) => (isActive ? "active-link link" : "link")}>{t("Gemini Chat")}</NavLink>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link link" : "link")}>{t("Log In")}</NavLink>
        </SignedOut>
        <IOSSwitch checked={darkMode} onChange={changeMode} inputProps={{ "aria-label": "theme toggle" }} />
        <NavLink to="/dashboard">
          <Button text={"Dashboard"} />
        </NavLink>
      </div>
      {/* Hamburger Icon - only visible on mobile */}
      <IconButton
        onClick={() => setDrawerOpen(true)}
        className="drawer-component"
        aria-label="Open navigation menu"
        aria-controls="mobile-nav-drawer"
        aria-haspopup="true"
        tabIndex={0}
      >
        <MenuRoundedIcon className="menu-icon" />
      </IconButton>
      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        id="mobile-nav-drawer"
        role="navigation"
        aria-label="Mobile navigation menu"
        ModalProps={{ keepMounted: true }}
      >
        <div className="drawer-div" tabIndex={0}>
          <NavLink to="/" className="link hover-effect" onClick={() => setDrawerOpen(false)}>{t("Home")}</NavLink>
          <NavLink to="/compare" className="link hover-effect" onClick={() => setDrawerOpen(false)}>{t("Compare")}</NavLink>
          <NavLink to="/watchlist" className="link hover-effect" onClick={() => setDrawerOpen(false)}>{t("Watchlist")}</NavLink>
          <NavLink to="/contactus" className="link hover-effect" onClick={() => setDrawerOpen(false)}>{t("Contact")}</NavLink>
          <NavLink to="/learn" className="link hover-effect" onClick={() => setDrawerOpen(false)}>{t("Learn")}</NavLink>
          <NavLink to="/news" className="link hover-effect" onClick={() => setDrawerOpen(false)}>{t("News")}</NavLink>
          <NavLink to="/geminiChat" className="link hover-effect" onClick={() => setDrawerOpen(false)}>{t("Gemini Chat")}</NavLink>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <NavLink to="/login" className="link hover-effect" onClick={() => setDrawerOpen(false)}>{t("Log In")}</NavLink>
          </SignedOut>
          <IOSSwitch checked={darkMode} onChange={changeMode} inputProps={{ "aria-label": "theme toggle" }} />
          <NavLink to="/dashboard" className="link hover-effect" onClick={() => setDrawerOpen(false)}>
            <Button text={"Dashboard"} />
          </NavLink>
        </div>
      </Drawer>
    </div>
  );
}

export default Header;