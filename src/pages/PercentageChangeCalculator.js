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

      <div className="info-section">
        <h2>Understanding Percentage Change</h2>
        <p>
          Percentage change is a way of expressing a change in value as a percentage of the original value. It is commonly used in finance, economics, and statistics to compare the relative change in values over time.
        </p>
        <h3>How is Percentage Change Calculated?</h3>
        <p>
          The formula to calculate percentage change is:
        </p>
        <p>
          <strong>Percentage Change = ((Final Value - Initial Value) / |Initial Value|) × 100</strong>
        </p>
        <p>
          This formula takes the difference between the final and initial values, divides it by the absolute value of the initial value, and then multiplies by 100 to convert it to a percentage.
        </p>
        <h3>Why is Percentage Change Important?</h3>
        <p>
          Understanding percentage change is crucial for analyzing trends and making informed decisions. It allows you to:
        </p>
        <ul>
          <li>Evaluate the performance of investments over time.</li>
          <li>Compare changes across different datasets or time periods.</li>
          <li>Make data-driven decisions in business and finance.</li>
        </ul>
        <h3>Example</h3>
        <p>
          If you bought a stock at $50 and its price rises to $75, the percentage change would be:
        </p>
        <p>
          <strong>Percentage Change = ((75 - 50) / 50) × 100 = 50%</strong>
        </p>
        <p>
          This indicates a 50% increase in the stock price.
        </p>
      </div>
    </div>
  );
};

export default PercentageChangeCalculator;
