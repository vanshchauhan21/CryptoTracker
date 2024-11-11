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
      <section className="info-section">
        <h2>What is DeFi?</h2>
        <p>
          Decentralized Finance (DeFi) refers to a financial ecosystem built on blockchain technology that allows users to access financial services like lending, borrowing, and trading without traditional intermediaries such as banks.
        </p>
      </section>

      <section className="info-section">
        <h2>How Does Yield Farming Work?</h2>
        <p>
          Yield farming involves lending your cryptocurrency to others through smart contracts in exchange for interest or rewards. The yield you earn can vary based on the platform, the asset, and market conditions.
        </p>
      </section>

      <section className="info-section">
        <h2>Risks Involved in DeFi Investments</h2>
        <p>
          While DeFi offers high returns, it also comes with risks such as smart contract vulnerabilities, market volatility, and potential loss of funds. Always do your research and consider your risk tolerance before investing.
        </p>
      </section>
    </div>
  );
}

export default DeFiYieldEstimator;
