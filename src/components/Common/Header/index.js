import React, { useEffect, useState } from "react";
import Button from "../Button";
import TemporaryDrawer from "./drawer";
import "./styles.css";
import { styled } from '@mui/material/styles';
import { Switch } from "@mui/material";
import { Link } from 'react-router-dom'; // Make sure to import Link if using React Router

function Header() {
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
    // toast.success("Theme Changed!");
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
      boxSizing: 'border-box',
      width: 32,
      height: 32,
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.3s ease',
      '&::before': {
        content: '"☀️"',
        position: 'absolute',
        left: '6px',
        fontSize: '16px',
        transition: 'opacity 0.3s ease-in-out',
        opacity: darkMode ? 0 : 1,
      },
      '&::after': {
        content: '"🌙"',
        position: 'absolute',
        right: '6px',
        fontSize: '16px',
        transition: 'opacity 0.3s ease-in-out',
        opacity: darkMode ? 1 : 0,
      },
    },
    '& .MuiSwitch-track': {
      borderRadius: 34 / 2,
      backgroundColor: '#E9E9EA',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1>
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </h1>
      </Link>
      <div className="links">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
        <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
        <a href="/review">
          <p className="link">Reviews</p>
        </a>
        <a href="/signup">
          <p className="link">Sign Up</p>
        </a>
        <a href="/login">
          <p className="link">Log In</p>
        </a>
        <IOSSwitch
          checked={darkMode}
          onChange={changeMode}
          inputProps={{ 'aria-label': 'theme toggle' }}
        />
      </div>
      <a href="/dashboard">
        <Button text={"dashboard"} />
      </a>
      <div className="drawer-component">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
