import React, { useState } from "react";
import "./defi.css";
import Header from "../components/Common/Header";

function DeFiYieldEstimator() {
  const [protocol, setProtocol] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [annualYield, setAnnualYield] = useState(null);
  const [estimatedYield, setEstimatedYield] = useState(null);

  const calculateYield = () => {
    if (investmentAmount > 0 && annualYield > 0) {
      const yieldAmount = (investmentAmount * annualYield) / 100;
      setEstimatedYield(yieldAmount.toFixed(2));
    } else {
      alert("Please enter valid positive numbers for investment amount and annual yield.");
    }
  };

  return (
    <div>
      <Header />
      <div className="estimator-container">
        <h2>DeFi Yield Estimator</h2>
        <div className="input-group">
          <label>Choose DeFi Protocol:</label>
          <select
            value={protocol}
            onChange={(e) => setProtocol(e.target.value)}
            placeholder="Select protocol"
          >
            <option value="">Select Protocol</option>
            <option value="Aave">Aave</option>
            <option value="Compound">Compound</option>
            <option value="Yearn Finance">Yearn Finance</option>
            <option value="Uniswap">Uniswap</option>
          </select>
        </div>
        <div className="input-group">
          <label>Investment Amount ($):</label>
          <input
            type="number"
            value={investmentAmount}
            onChange={(e) => setInvestmentAmount(e.target.value)}
            placeholder="Enter investment amount"
          />
        </div>
        <div className="input-group">
          <label>Annual Yield (%):</label>
          <input
            type="number"
            value={annualYield}
            onChange={(e) => setAnnualYield(e.target.value)}
            placeholder="Enter annual yield percentage"
          />
        </div>
        <button className="calculate-button" onClick={calculateYield}>
          Calculate Yield
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

export default DeFiYieldEstimator;
