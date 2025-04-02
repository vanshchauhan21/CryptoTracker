import React from "react";
import { MenuItem, Select } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import "./styles.css";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const ITEM_PADDING_BOTTOM = 8;
const ITEM_PADDING_RIGHT = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP + ITEM_PADDING_BOTTOM,
      width: 200,
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
function Selectdays({
  days,
  handleDaysChange,
}) {
  return (
    <div className="select-day">
      <div className="select-flex-3">
        <FormControl sx={{ width: "200px", padding: 0, margin: 0, height: "40px" }}>
            <Select
              value={days}
              onChange={(e) => handleDaysChange(e)}
              MenuProps={MenuProps}
              sx={{
                height: "40px",width: "200px", borderRadius: "10px",margin: 0, padding: "10px",border: "1px solid rgba(0,0,0,0.2)",
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
                    borderColor: "none"
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
        </FormControl>
      </div>
    </div>
  );
}

export default Selectdays;