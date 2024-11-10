import React, { useState } from "react";
import Header from "../components/Common/Header";  // Assuming Header component is reusable

const ROICalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [finalValue, setFinalValue] = useState(0);
  const [roi, setRoi] = useState(null);

  const handleCalculate = () => {
    if (initialInvestment <= 0) {
      alert("Initial investment must be greater than 0.");
      return;
    }

    const roiValue = ((finalValue - initialInvestment) / initialInvestment) * 100;
    setRoi(roiValue.toFixed(2));
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
        <h2 style={styles.header}>ROI Calculator</h2>
        <label style={styles.label}>Initial Investment ($)</label>
        <input
          type="number"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(e.target.value)}
          style={styles.input}
        />
        <label style={styles.label}>Final Value ($)</label>
        <input
          type="number"
          value={finalValue}
          onChange={(e) => setFinalValue(e.target.value)}
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
          Calculate ROI
        </button>
        {roi !== null && (
          <div style={styles.result}>
            ROI: {roi} %
          </div>
        )}
      </div>
    </div>
  );
};

export default ROICalculator;
