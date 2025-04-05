import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleComponents({ priceType, handlePriceTypeChange }) {
  return (

    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={(e) => {
        handlePriceTypeChange(e);
      }}
      sx={{
        margin: 0,
        padding: 0,
        // width: "448px",
        height: "48px",
        borderRadius: "5px",
        color: "#FFFFFF",
        border: "1px solid rgb(0,0,0,0.2)",
      }}
    >
      <ToggleButton
        value="prices"
        sx={{
          border: "1px solid rgba(0,0,0,0.1)",
          backgroundColor: "none !important",
          width: "150px",
          height: "50px",
          margin: 0,
          padding: 0,
          display: "flex",
          color: "rgba(0,0,0,0.6) !important",
          "&.Mui-selected": {
            backgroundColor: "rgba(58, 128, 233, 0.05)",
            color: "#000000 !important"
          },
          "&.Mui-selected:hover": {
            backgroundColor: "rgba(58, 128, 233, 0.2)",
            border:"none"
          },
          "&:hover": {
            backgroundColor: "rgba(128, 128, 128, 0.1)", // Light gray on hover
          },
        }}
      >
        <div style={{width: "99px", height: "22px",fontSize: "14px",fontWeight: "400",textTransform: "none"}}>Prices</div>
      </ToggleButton>
        
      <ToggleButton
        value="market_caps"
        sx={{
          border: "1px solid rgba(0,0,0,0.1)",
          backgroundColor: "none !important",
          width: "150px",
          height: "50px",
          margin: 0,
          padding: 0,
          display: "flex",
          color: "rgba(0,0,0,0.6) !important",
          "&.Mui-selected": {
            backgroundColor: "rgba(58, 128, 233, 0.05)",
            color: "#000000 !important"
          },
          "&.Mui-selected:hover": {
            backgroundColor: "rgba(58, 128, 233, 0.2)",
            border:"none"
          },
          "&:hover": {
            backgroundColor: "rgba(128, 128, 128, 0.1)", // Light gray on hover
          },
        }}
      >
        <div style={{width: "99px", height: "22px",fontSize: "14px",fontWeight: "400",textTransform: "none"}}>Market Cap</div>
      </ToggleButton>

      <ToggleButton
        value="total_volumes"
        sx={{
          border: "1px solid rgba(0,0,0,0.1)",
          backgroundColor: "none !important",
          width: "150px",
          height: "50px",
          margin: 0,
          padding: 0,
          display: "flex",
          color: "rgba(0,0,0,0.6) !important",
          "&.Mui-selected": {
            backgroundColor: "rgba(58, 128, 233, 0.05)",
            color: "#000000 !important"
          },
          "&.Mui-selected:hover": {
            backgroundColor: "rgba(58, 128, 233, 0.2)",
            border:"none"
          },
          "&:hover": {
            backgroundColor: "rgba(128, 128, 128, 0.1)", // Light gray on hover
          },
        }}
      >
        <div style={{width: "99px", height: "22px",fontSize: "14px",fontWeight: "400",textTransform: "none"}}>Total Volume</div>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}