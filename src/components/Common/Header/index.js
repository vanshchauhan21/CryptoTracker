import React, { useEffect, useState } from "react";
import Button from "../Button";
import TemporaryDrawer from "./drawer";
import "./styles.css";
import { styled } from "@mui/material/styles";
import { Switch } from "@mui/material";
import { Link, NavLink } from "react-router-dom"; // Import NavLink
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation(); 
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    if (darkMode) {
      setLight();
    } else {
      setDark();
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

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
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
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1>
         {t("CryptoTracker")}<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </Link>
      <div className="links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link link" : "link")}>
          {t("Home")}
        </NavLink>
        <NavLink to="/compare" className={({ isActive }) => (isActive ? "active-link link" : "link")}>
          {t("Compare")}
        </NavLink>
        <NavLink to="/watchlist" className={({ isActive }) => (isActive ? "active-link link" : "link")}>
          {t("Watchlist")}
        </NavLink>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <NavLink to="/signup" className={({ isActive }) => (isActive ? "active-link link" : "link")}>
            {t("Sign Up")}
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active-link link" : "link")}>
            {t("Log In")}
          </NavLink>
        </SignedOut>

        <IOSSwitch
          checked={darkMode}
          onChange={changeMode}
          inputProps={{ "aria-label": "theme toggle" }}
        />
      </div>
      <NavLink to="/dashboard">
        <Button text={t("dashboard")} />
      </NavLink>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;