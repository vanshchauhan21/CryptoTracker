import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import "./styles.css";

function SelectDays({ days, handleDaysChange, noPTag }) {
  return (
    <div className="select-days" style={{ marginBottom: noPTag && "0" }}>
      {!noPTag && <p>Price change in </p>}
      <Select
        value={days}
        onChange={(e) => handleDaysChange(e)}
        sx={{
          height: "2.5rem",
          color: "var(--text-color)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--text-color)",
          },
          "& .MuiSvgIcon-root": {
          color: "var(--text-color)"
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "var(--black)",
              boxShadow: "var(--select-box-shadow)",
              "& .MuiMenuItem-root": {
                color: "var(--white)",
                backgroundColor: "var(--black)",
                "&:hover": {
                  backgroundColor: "var(--darkgrey)",
                },
                "&.Mui-selected": {
                    backgroundColor: "rgba(58, 128, 233, 0.1)",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "rgba(58, 128, 233, 0.3)",
                },
              },
            },
          },
        }}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}

export default SelectDays;
