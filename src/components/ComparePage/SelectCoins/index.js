import { MenuItem, Select } from "@mui/material";
import React from "react";
import SelectDays from "../../CoinPage/SelectDays";
import "./styles.css";
function SelectCoins({
  allCoins,
  crypto1,
  crypto2,
  onCoinChange,
  days,
  handleDaysChange,
}) {
  const style = {
    height: "2.5rem",
    color: "var(--text-color)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--text-color)",
    },
    "& .MuiSvgIcon-root": {
      color:  "var(--text-color)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };

  return (
    <div className="select-coins-div">
      <div className="select-flex">
        <p style={{ color: "var(--text-color)"}}>Compare</p>
        <Select
          value={crypto1}
          onChange={(e) => onCoinChange(e, false)}
          sx={style}
        >
          {allCoins
            .filter((coin) => coin.id !== crypto2)
            .map((coin, i) => (
              <MenuItem value={coin.id} key={i}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
      </div>
      <div className="select-flex">
        <p style={{ color: "var(--text-color)"}}>against</p>
        <Select
          value={crypto2}
          onChange={(e) => onCoinChange(e, true)}
          sx={style}
        >
          {allCoins
            .filter((coin) => coin.id !== crypto1)
            .map((coin, i) => (
              <MenuItem value={coin.id} key={i}>
                {coin.name}
              </MenuItem>
            ))}
        </Select>
      </div>
      <div className="select-flex">
        <p style={{ color: "var(--text-color)"}}>in last</p>
      <SelectDays
        days={days}
        handleDaysChange={handleDaysChange}
        noPTag={true}
      />
      </div>
    </div>
  );
}

export default SelectCoins;
