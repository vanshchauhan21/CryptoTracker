import { MenuItem, Select } from "@mui/material";
import React from "react";
import "./styles.css";

function SelectDays({ days, handleDaysChange, noPTag }) {
  return (
    <div className="select-days" style={{ marginBottom: noPTag && "0" }}>
      {!noPTag && <p>Price change in </p>}
      <Select
        value={days}
        onChange={(e) => handleDaysChange(e)}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            width: "165px",
            border: "none",
          },
          "& .MuiSvgIcon-root": {
          color: "#000000",
          justifyContent: "right",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "none",
            },
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "#FFFFFF",
              boxShadow: "var(--select-box-shadow)",
              "& .MuiMenuItem-root": {
                color: "var(--black)",
                backgroundColor: "#FFFFFF",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                },
                "&.Mui-selected": {
                    backgroundColor: "rgba(58, 128, 233, 0.1)",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "rgba(58, 128, 233, 0.15)",
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