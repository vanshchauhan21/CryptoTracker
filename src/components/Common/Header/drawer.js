import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
// Switch and toast are no longer used
import "./styles.css";


export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  // Dark mode state and functions removed

  // useEffect for theme initialization removed

  // changeMode, setDark, setLight functions removed

  return (
    // The <nav> and other elements like logo, links-container, nav-btn-container are removed.
    // We only keep the IconButton to open the Drawer and the Drawer itself.
    <>
      <IconButton onClick={() => setOpen(true)} className="drawer-component">
        <MenuRoundedIcon className="menu-icon" />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          {/* Links and Switch removed from here */}
        </div>
      </Drawer>
    </>
  );
}
