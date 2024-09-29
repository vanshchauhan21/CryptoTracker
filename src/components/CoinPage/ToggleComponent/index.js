import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

export default function ToggleComponents({ priceType, handlePriceTypeChange }) {
  const [selectedPriceType, setSelectedPriceType] = useState(priceType);

  const handleClick = (newPriceType) => {
    setSelectedPriceType(newPriceType);
    handlePriceTypeChange(newPriceType);
  };

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
        onChange={(e, newPriceType) => {
          if (newPriceType) handleClick(newPriceType);
        }}
        sx={{
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid var(--blue)",
            color: "var(--blue)",
            "&.Mui-selected": {
              backgroundColor: "var(--blue)",
              color: "#fff",
              borderColor: "var(--blue)",
            },
            "&:not(.Mui-selected)": {
              color: "var(--blue)",
            },
          },
        }}
      >
        <ToggleButton value="prices" onClick={() => handleClick("prices")} selected={selectedPriceType === "prices"}>
          Prices
        </ToggleButton>
        <ToggleButton value="market_caps" onClick={() => handleClick("market_caps")} selected={selectedPriceType === "market_caps"}>
          Market Cap
        </ToggleButton>
        <ToggleButton value="total_volumes" onClick={() => handleClick("total_volumes")} selected={selectedPriceType === "total_volumes"}>
          Total Volume
        </ToggleButton>

      </ToggleButtonGroup>
    </div>
  );
}