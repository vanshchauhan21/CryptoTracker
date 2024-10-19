import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

export default function ToggleComponents({ priceType, handlePriceTypeChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1.5rem",
      }}
    >
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={(e) => {
          handlePriceTypeChange(e);
        }}
        sx={{
          "&.Mui-selected": {
            color: "var(--blue) !important",
          },
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid var(--blue)!important",
            borderColor: "unset",
          },
        }}
      >
        <ToggleButton
          value="prices"
          sx={{
            color: "var(--blue) !important",
            "&.Mui-selected": {
              backgroundColor: "rgba(58, 128, 233, 0.1)",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "rgba(58, 128, 233, 0.2)",
            },
            "&:hover": {
              backgroundColor: "rgba(128, 128, 128, 0.1)", // Light gray on hover
            },
          }}
        > 
          Prices
        </ToggleButton>
        <ToggleButton
          value="market_caps"
          sx={{
            color: "var(--blue) !important",
            "&.Mui-selected": {
              backgroundColor: "rgba(58, 128, 233, 0.1)",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "rgba(58, 128, 233, 0.2)",
            },
            "&:hover": {
              backgroundColor: "rgba(128, 128, 128, 0.1)", // Light gray on hover
            },
          }}
        >
          Market Cap
        </ToggleButton>
        <ToggleButton
          value="total_volumes"
          sx={{
            color: "var(--blue) !important",
            "&.Mui-selected": {
              backgroundColor: "rgba(58, 128, 233, 0.1)",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "rgba(58, 128, 233, 0.2)",
            },
            "&:hover": {
              backgroundColor: "rgba(128, 128, 128, 0.1)", // Light gray on hover
            },
          }}
        >
          Total Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
