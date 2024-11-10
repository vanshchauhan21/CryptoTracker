import React, { useState } from "react";
import "./dca.css";
import Header from "../components/Common/Header";

function DollarCostAveragingCalculator() {
  const [investment, setInvestment] = useState("");
  const [interval, setInterval] = useState("");
  const [price, setPrice] = useState("");
  const [periods, setPeriods] = useState("");
  const [result, setResult] = useState(null);

  const calculateDCA = () => {
    if (investment > 0 && interval > 0 && price > 0 && periods > 0) {
      const totalInvested = investment * periods;
      const totalShares = Array.from({ length: periods }).reduce(
        (shares, _, i) => shares + investment / (price * (1 + (interval / 100) * i)),
        0
      );
      const averagePricePerShare = totalInvested / totalShares;
      setResult({
        totalInvested: totalInvested.toFixed(2),
        totalShares: totalShares.toFixed(4),
        averagePrice: averagePricePerShare.toFixed(2),
      });
    } else {
      alert("Please enter positive numbers for all fields.");
    }
  };

  return (
    <div>
      <Header />
      <div className="calculator-container">
        <h2>Dollar-Cost Averaging (DCA) Calculator</h2>
        <div className="input-group">
          <label>Investment Per Period ($):</label>
          <input
            type="number"
            value={investment}
            onChange={(e) => setInvestment(e.target.value)}
            placeholder="Enter investment amount"
          />
        </div>
        <div className="input-group">
          <label>Interval Price Increase (%):</label>
          <input
            type="number"
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
            placeholder="Enter interval price increase"
          />
        </div>
        <div className="input-group">
          <label>Initial Price ($):</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter initial asset price"
          />
        </div>
        <div className="input-group">
          <label>Number of Periods:</label>
          <input
            type="number"
            value={periods}
            onChange={(e) => setPeriods(e.target.value)}
            placeholder="Enter number of periods"
          />
        </div>
        <button className="calculate-button" onClick={calculateDCA}>
          Calculate
        </button>
        {result && (
          <div className="result">
            <h3>Total Invested: ${result.totalInvested}</h3>
            <h3>Total Shares Acquired: {result.totalShares}</h3>
            <h3>Average Price Per Share: ${result.averagePrice}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default DollarCostAveragingCalculator;
