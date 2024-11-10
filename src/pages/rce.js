import React, { useState } from "react";
import "./rce.css";
import Header from "../components/Common/Header";

function InterestRateChangeEstimator() {
  const [currentRate, setCurrentRate] = useState("");
  const [rateChange, setRateChange] = useState("");
  const [currentYield, setCurrentYield] = useState("");
  const [estimatedYield, setEstimatedYield] = useState(null);

  const calculateYieldChange = () => {
    if (currentRate > 0 && rateChange !== "" && currentYield > 0) {
      const newRate = currentRate + (currentRate * (rateChange / 100));
      const newYield = currentYield * (newRate / currentRate);
      setEstimatedYield(newYield.toFixed(2));
    } else {
      alert("Please enter valid positive numbers for all fields.");
    }
  };

  return (
    <div>
      <Header />
      <div className="calculator-container">
        <h2>Interest Rate Change Estimator for Stablecoin Yield</h2>
        <div className="input-group">
          <label>Current Interest Rate (%):</label>
          <input
            type="number"
            value={currentRate}
            onChange={(e) => setCurrentRate(e.target.value)}
            placeholder="Enter current interest rate"
          />
        </div>
        <div className="input-group">
          <label>Rate Change (%):</label>
          <input
            type="number"
            value={rateChange}
            onChange={(e) => setRateChange(e.target.value)}
            placeholder="Enter rate change percentage"
          />
        </div>
        <div className="input-group">
          <label>Current Stablecoin Yield ($):</label>
          <input
            type="number"
            value={currentYield}
            onChange={(e) => setCurrentYield(e.target.value)}
            placeholder="Enter current yield"
          />
        </div>
        <button
          className="calculate-button"
          onClick={calculateYieldChange}
        >
          Estimate Yield
        </button>
        {estimatedYield !== null && (
          <div className="result">
            <h3>Estimated Yield: ${estimatedYield}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default InterestRateChangeEstimator;
