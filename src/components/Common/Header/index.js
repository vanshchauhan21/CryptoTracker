import React, { useEffect, useState } from "react";
import Button from "../Button";
import TemporaryDrawer from "./drawer";
import "./styles.css";
import { styled } from "@mui/material/styles";
import { Switch } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation(); // Initialize the translation hook
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
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 60,
    height: 36,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transition: 'transform 0.3s ease-in-out',
      '&.Mui-checked': {
        transform: 'translateX(26px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#65C466',
          opacity: 1,
        },
      },
    },
    '& .MuiSwitch-thumb': {
      width: 32,
      height: 32,
      position: 'relative',
      '&::before': {
        content: '"☀️"',
        opacity: darkMode ? 0 : 1,
      },
      '&::after': {
        content: '"🌙"',
        opacity: darkMode ? 1 : 0,
      },
    },
    '& .MuiSwitch-track': {
      borderRadius: 34 / 2,
      backgroundColor: '#E9E9EA',
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1>
          {t("cryptoTracker")}<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </Link>
      <div className="links">
        <Link to="/">
          <p className="link">{t("home")}</p>
        </Link>
        <Link to="/compare">
          <p className="link">{t("compare")}</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">{t("watchlist")}</p>
        </Link>
        <Link to="/signup">
          <p className="link">{t("signUp")}</p>
        </Link>
        <Link to="/login">
          <p className="link">{t("logIn")}</p>
        </Link>
        <IOSSwitch
          checked={darkMode}
          onChange={changeMode}
          inputProps={{ "aria-label": "theme toggle" }}
        />
      </div>
      <Link to="/dashboard">
        <Button text={t("dashboard")} />
      </Link>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
