import React, { useState } from "react";
import Header from "../components/Common/Header";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [annualReturnRate, setAnnualReturnRate] = useState(0);
  const [duration, setDuration] = useState(0);
  const [futureValue, setFutureValue] = useState(null);

  const handleCalculate = () => {
    const ratePerMonth = annualReturnRate / 100 / 12;
    const numberOfMonths = duration * 12;
    const futureValue =
      monthlyInvestment *
      (((1 + ratePerMonth) ** numberOfMonths - 1) / ratePerMonth) *
      (1 + ratePerMonth);
    setFutureValue(futureValue.toFixed(2));
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
        <h2 style={styles.header}>SIP Calculator</h2>
        <label style={styles.label}>Monthly Investment ($)</label>
        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) => setMonthlyInvestment(e.target.value)}
          style={styles.input}
        />
        <label style={styles.label}>Annual Return Rate (%)</label>
        <input
          type="number"
          value={annualReturnRate}
          onChange={(e) => setAnnualReturnRate(e.target.value)}
          style={styles.input}
        />
        <label style={styles.label}>Duration (Years)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
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
          Calculate Future Value
        </button>
        {futureValue && (
          <div style={styles.result}>
            Estimated Future Value: ${futureValue}
          </div>
        )}
      </div>
    </div>
  );
};

export default SIPCalculator;
