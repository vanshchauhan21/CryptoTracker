import React, { useState } from "react";
import Header from "../components/Common/Header";  // Assuming Header component is reusable

const BreakEvenCalculator = () => {
  const [fixedCosts, setFixedCosts] = useState(0);
  const [sellingPrice, setSellingPrice] = useState(0);
  const [variableCost, setVariableCost] = useState(0);
  const [breakEvenPoint, setBreakEvenPoint] = useState(null);

  const handleCalculate = () => {
    if (sellingPrice <= variableCost) {
      alert("Selling price must be greater than the variable cost.");
      return;
    }

    const breakEvenUnits =
      fixedCosts / (sellingPrice - variableCost);
    setBreakEvenPoint(breakEvenUnits.toFixed(2));
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
        <h2 style={styles.header}>Break-Even Calculator</h2>
        <label style={styles.label}>Fixed Costs ($)</label>
        <input
          type="number"
          value={fixedCosts}
          onChange={(e) => setFixedCosts(e.target.value)}
          style={styles.input}
        />
        <label style={styles.label}>Selling Price per Unit ($)</label>
        <input
          type="number"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
          style={styles.input}
        />
        <label style={styles.label}>Variable Cost per Unit ($)</label>
        <input
          type="number"
          value={variableCost}
          onChange={(e) => setVariableCost(e.target.value)}
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
          Calculate Break-Even Point
        </button>
        {breakEvenPoint !== null && (
          <div style={styles.result}>
            Break-Even Point: {breakEvenPoint} units
          </div>
        )}
      </div>
    </div>
  );
};

export default BreakEvenCalculator;
