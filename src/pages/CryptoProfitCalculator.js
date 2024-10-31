import React, { useState } from "react";
import "./CryptoProfitCalculator.css";
import Header from "../components/Common/Header";

function CryptoProfitCalculator() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [result, setResult] = useState(null);

  const calculateProfitOrLoss = () => {
    const profitOrLoss = ((currentPrice - buyPrice) / buyPrice) * 100;
    const profitOrLossAmount = (initialInvestment * profitOrLoss) / 100;
    setResult({
      percentage: profitOrLoss.toFixed(2),
      amount: profitOrLossAmount.toFixed(2),
    });
  };

  return (
    <div>
      <Header />
      <div className="calculator-container">
        <h2>Crypto Profit Calculator</h2>
        <div className="input-container">
          <label>Initial Investment ($)</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Buy Price ($)</label>
          <input
            type="number"
            value={buyPrice}
            onChange={(e) => setBuyPrice(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Current Price ($)</label>
          <input
            type="number"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
          />
        </div>
        <button onClick={calculateProfitOrLoss}>Calculate</button>

        {result && (
          <div className="result">
            <p>Profit/Loss Percentage: {result.percentage}%</p>
            <p>Profit/Loss Amount: ${result.amount}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CryptoProfitCalculator;
