import React, { useState } from "react";
import Header from "../components/Common/Header";  

const SlippageCalculator = () => {
  const [expectedPrice, setExpectedPrice] = useState(0);
  const [actualPrice, setActualPrice] = useState(0);
  const [slippage, setSlippage] = useState(null);

  const handleCalculate = () => {
    const slippageValue = expectedPrice - actualPrice;
    setSlippage(slippageValue.toFixed(2));
  };

  // Inline CSS styles for light and dark mode
  const styles = {
    container: {
      backgroundColor: "var(--bg-color, #f8f9fa)",
      color: "var(--text-color, #333)",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "400px",
      margin: "40px auto",
      textAlign: "center",
    },
    header: {
      marginBottom: "20px",
      color: "var(--header-color, #007bff)",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      textAlign: "left",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginBottom: "15px",
      border: "1px solid #ddd",
      borderRadius: "4px",
      backgroundColor: "var(--input-bg-color, #fff)",
      color: "var(--input-text-color, #333)",
    },
    button: {
      width: "100%",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "10px",
      borderRadius: "4px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
    result: {
      marginTop: "15px",
      fontSize: "18px",
      fontWeight: "bold",
      color: "black", // Ensure the result text is black
    },
  };

  return (
    <div>
      <Header />

      <div style={styles.container}>
        <h2 style={styles.header}>Slippage Calculator</h2>
        <label style={styles.label}>Expected Price ($)</label>
        <input
          type="number"
          value={expectedPrice}
          onChange={(e) => setExpectedPrice(e.target.value)}
          style={styles.input}
        />
        <label style={styles.label}>Actual Price ($)</label>
        <input
          type="number"
          value={actualPrice}
          onChange={(e) => setActualPrice(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={handleCalculate}
          style={styles.button}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          Calculate Slippage
        </button>
        {slippage !== null && (
          <div style={styles.result}>
            Slippage: {slippage} $
          </div>
        )}
      </div>
    </div>
  );
};

export default SlippageCalculator;
