import React, { useState } from "react";
import "./ico.css";
import Header from "../components/Common/Header";

function ICOIDOPerformanceTracker() {
  const [initialPrice, setInitialPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [initialInvestment, setInitialInvestment] = useState("");
  const [percentageChange, setPercentageChange] = useState(null);

  const calculatePerformance = () => {
    if (initialPrice > 0 && currentPrice > 0 && initialInvestment > 0) {
      const gainLoss = ((currentPrice - initialPrice) / initialPrice) * 100;
      const finalValue = (initialInvestment * currentPrice) / initialPrice;
      setPercentageChange({
        gainLoss: gainLoss.toFixed(2),
        finalValue: finalValue.toFixed(2),
      });
    } else {
      alert("Please enter valid positive numbers for all fields.");
    }
  };

  return (
    <div>
      <Header />
      <div className="tracker-container">
        <h2>ICO/IDO Performance Tracker</h2>
        <div className="input-group">
          <label>Initial Price ($):</label>
          <input
            type="number"
            value={initialPrice}
            onChange={(e) => setInitialPrice(e.target.value)}
            placeholder="Enter initial coin price"
          />
        </div>
        <div className="input-group">
          <label>Current Price ($):</label>
          <input
            type="number"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
            placeholder="Enter current coin price"
          />
        </div>
        <div className="input-group">
          <label>Initial Investment ($):</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            placeholder="Enter initial investment amount"
          />
        </div>
        <button
          className="calculate-button"
          onClick={calculatePerformance}
        >
          Calculate Performance
        </button>
        {percentageChange && (
          <div className="result">
            <h3>Performance Summary</h3>
            <p>Percentage Gain/Loss: {percentageChange.gainLoss}%</p>
            <p>Final Investment Value: ${percentageChange.finalValue}</p>
          </div>
        )}
      </div>
      <div className="info-section">
        <h2>Understanding ICOs and IDOs</h2>
        <p>
          An Initial Coin Offering (ICO) is a fundraising mechanism in which new projects sell their underlying crypto tokens in exchange for bitcoin, ether, or other cryptocurrencies. It is often used by startups to bypass the rigorous and regulated capital-raising process required by venture capitalists or banks.
        </p>
        <h3>Key Features of ICOs</h3>
        <ul>
          <li>Token Sale: Investors purchase tokens at a set price.</li>
          <li>Whitepaper: A document that outlines the project’s goals, technology, and use cases.</li>
          <li>Smart Contracts: ICOs typically use smart contracts to manage the sale and distribution of tokens.</li>
        </ul>
        <h3>What is an IDO?</h3>
        <p>
          An Initial DEX Offering (IDO) is a fundraising method where tokens are directly sold to investors on a decentralized exchange (DEX). IDOs provide immediate liquidity for the tokens, allowing investors to trade right after the sale.
        </p>
      </div>
    </div>
  );
}

export default ICOIDOPerformanceTracker;
