import React, { useState } from "react";
import "./PercentageChangeCalculator.css";
import Header from "../components/Common/Header";

const PercentageChangeCalculator = () => {
  const [initialValue, setInitialValue] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [percentageChange, setPercentageChange] = useState(null);

  const calculatePercentageChange = () => {
    if (initialValue && finalValue) {
      const initial = parseFloat(initialValue);
      const final = parseFloat(finalValue);
      if (!isNaN(initial) && !isNaN(final) && initial !== 0) {
        const change = ((final - initial) / Math.abs(initial)) * 100;
        setPercentageChange(change.toFixed(2));
      } else {
        setPercentageChange("Invalid input");
      }
    } else {
      setPercentageChange("Please enter both values");
    }
  };

  return (
    <div>
      <Header />

      <div className="percentage-calculator">
        <h2>Percentage Change Calculator</h2>
        <label htmlFor="initialValue">Initial Value</label>
        <input
          type="number"
          id="initialValue"
          value={initialValue}
          onChange={(e) => setInitialValue(e.target.value)}
          placeholder="Enter initial value"
        />

        <label htmlFor="finalValue">Final Value</label>
        <input
          type="number"
          id="finalValue"
          value={finalValue}
          onChange={(e) => setFinalValue(e.target.value)}
          placeholder="Enter final value"
        />

        <button onClick={calculatePercentageChange}>Calculate</button>

        {percentageChange !== null && (
          <div className="result">
            <h3>PercentageChange: {percentageChange}%</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default PercentageChangeCalculator;
