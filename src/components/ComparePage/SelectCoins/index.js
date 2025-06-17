import { MenuItem, Select, Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import React from "react";
import "./styles.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const ITEM_PADDING_BOTTOM = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP + ITEM_PADDING_BOTTOM,
      width: 290,
      borderRadius: "10px",
      // gap: "10px",
    },
    sx: {
      "& .MuiMenuItem-root": {
          color: "var(--black)",
          backgroundColor: "#FFFFFF",
          "&:hover": {
            backgroundColor: "rgb(241, 244, 255)",
          },
          "&.Mui-selected": {
            backgroundColor: "rgb(240,243,253)",
            color: "rgb(112,134,222)",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "none",
          },
      },
    }
  },
};
function SelectCoins({
  allCoins,
  crypto1,
  crypto2,
  onCoinChange,
}) {

  return (
    <div className="select-coins-div">
      <div className="select-flex-1">
        <FormControl sx={{ width: "290px", padding: 0, margin: 0, height: "40px" }}>
            <Select
              className="scroll"
              labelId="demo-name-label"
              id="demo-name"
              value={crypto1}
              onChange={(e) => onCoinChange(e, false)}
              MenuProps={MenuProps}
              sx={{
                height: "40px",width: "290px", borderRadius: "10px",margin: 0, padding: "10px",border: "1px solid rgba(0,0,0,0.2)",
                ".MuiSelect-select": { 
                  height: "40px", 
                  display: "flex", 
                  alignItems: "center" 
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover": {
                  "&& fieldset": {
                    borderColor: "none",
                    // backgroundColor: 
                  },
                },
              }}
            >
            {allCoins
              .filter((coin) => coin.id !== crypto2)
              .map((coin, i) => (
                <MenuItem value={coin.id} key={i}>
                  {coin.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <Typography sx={{padding: 0, fontWeight: "bold",width: 30,display: "flex",height: 40,alignItems: "center",justifyContent: "center",}}> vs </Typography>
      <div className="select-flex-2">
      <FormControl sx={{ width: "290px", padding: 0, margin: 0, height: "40px" }}>
            <Select
              labelId="demo-name-label"
              id="demo-name"
              value={crypto2}
              onChange={(e) => onCoinChange(e, true)}
              MenuProps={MenuProps}
              sx={{
                height: "40px",width: "290px", borderRadius: "10px",margin: 0, padding: "10px",border: "1px solid rgba(0,0,0,0.2)",
                ".MuiSelect-select": { 
                  height: "40px", 
                  display: "flex", 
                  alignItems: "center" 
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover": {
                  "&& fieldset": {
                    borderColor: "none",
                    // backgroundColor: 
                  },
                },
              }}
            >
            {allCoins
              .filter((coin) => coin.id !== crypto1)
              .map((coin, i) => (
                <MenuItem value={coin.id} key={i}>
                  {coin.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default SelectCoins;