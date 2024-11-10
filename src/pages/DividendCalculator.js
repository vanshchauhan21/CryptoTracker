import React, { useState } from "react";
import "./DividendCalculator.css";
import Header from "../components/Common/Header";

function DividendCalculator() {
  const [sharePrice, setSharePrice] = useState("");
  const [annualDividend, setAnnualDividend] = useState("");
  const [numShares, setNumShares] = useState("");
  const [totalDividend, setTotalDividend] = useState(null);

  const calculateDividend = (e) => {
    e.preventDefault();
    if (sharePrice && annualDividend && numShares) {
      const total = (annualDividend / sharePrice) * numShares;
      setTotalDividend(total.toFixed(2));
    }
  };

  return (
    <div>
      <Header />
      <div className="calculator-container">
        <div className="calculator-card">
          <h2>Dividend Calculator</h2>
          <form onSubmit={calculateDividend}>
            <label>Share Price ($)</label>
            <input
              type="number"
              value={sharePrice}
              onChange={(e) => setSharePrice(e.target.value)}
              required
            />
            <label>Annual Dividend ($)</label>
            <input
              type="number"
              value={annualDividend}
              onChange={(e) => setAnnualDividend(e.target.value)}
              required
            />
            <label>Number of Shares</label>
            <input
              type="number"
              value={numShares}
              onChange={(e) => setNumShares(e.target.value)}
              required
            />
            <button type="submit">Calculate Dividend</button>
          </form>
          {totalDividend !== null && (
            <div className="result">
              <h3>Total Dividend: ${totalDividend}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DividendCalculator;
