import React, { useState } from "react";
import "./ImpermanentLossCalculator.css";
import Header from "../components/Common/Header";
import Feedback from '../components/Feedback/Feedbacksection';

const ImpermanentLossCalculator = () => {
  const [initialPriceA, setInitialPriceA] = useState("");
  const [initialPriceB, setInitialPriceB] = useState("");
  const [finalPriceA, setFinalPriceA] = useState("");
  const [finalPriceB, setFinalPriceB] = useState("");
  const [impermanentLoss, setImpermanentLoss] = useState(null);
  const [activeLearnMoreIndex, setActiveLearnMoreIndex] = useState(null);
  const toggleLearnMore = (index) => {
    setActiveLearnMoreIndex(activeLearnMoreIndex === index ? null : index);
  };

  const calculateImpermanentLoss = () => {
    if (!initialPriceA || !initialPriceB || !finalPriceA || !finalPriceB) {
      alert("Please fill in all fields.");
      return;
    }

    const initialRatio = initialPriceA / initialPriceB;
    const finalRatio = finalPriceA / finalPriceB;

    const loss = ((2 * Math.sqrt(finalRatio)) / (finalRatio + 1) - 1) * 100;

    setImpermanentLoss(loss.toFixed(2));
  };
  // Learn More data
  const learnMoreData = [
    {
      title: "What is Impermanent Loss?",
      content: "Impermanent Loss (IL) is a phenomenon that occurs when providing liquidity to a decentralized exchange (DEX). It represents the difference between holding assets versus providing them as liquidity in a pool. The loss is 'impermanent' because it can be recovered if the prices return to their original values."
    },
    {
      title: "How is Impermanent Loss Calculated?",
      content: "Impermanent Loss is calculated by comparing the value of assets if held versus their value when provided as liquidity. The calculation takes into account the price ratio changes between the paired assets. The larger the price divergence between the paired assets, the greater the impermanent loss."
    },
    {
      title: "When Does Impermanent Loss Occur?",
      content: "Impermanent Loss occurs when the price ratio of the paired assets changes from the time you deposit them. For example, if you provide ETH and USDC to a liquidity pool, and ETH's price changes significantly while USDC remains stable, you'll experience impermanent loss."
    },
    {
      title: "How to Minimize Impermanent Loss?",
      content: "There are several strategies to minimize impermanent loss: 1) Provide liquidity to pairs with correlated price movements, 2) Choose pools with high trading fees to offset potential losses, 3) Consider stable coin pairs which have minimal price volatility, 4) Monitor price movements closely and adjust your position when necessary."
    }
  ];


  return (
    <div>
      <Header />
      <div className="calculator">
        <h2>Impermanent Loss Calculator</h2>
        <div>
          <label>Initial Price of Asset A:</label>
          <input
            type="number"
            value={initialPriceA}
            onChange={(e) => setInitialPriceA(e.target.value)}
          />
        </div>
        <div>
          <label>Initial Price of Asset B:</label>
          <input
            type="number"
            value={initialPriceB}
            onChange={(e) => setInitialPriceB(e.target.value)}
          />
        </div>
        <div>
          <label>Final Price of Asset A:</label>
          <input
            type="number"
            value={finalPriceA}
            onChange={(e) => setFinalPriceA(e.target.value)}
          />
        </div>
        <div>
          <label>Final Price of Asset B:</label>
          <input
            type="number"
            value={finalPriceB}
            onChange={(e) => setFinalPriceB(e.target.value)}
          />
        </div>
        <button onClick={calculateImpermanentLoss}>Calculate</button>
        {impermanentLoss !== null && (
          <div>
            <h3 className="result">Impermanent Loss: {impermanentLoss}%</h3>
          </div>
        )}
      </div>

      <div className="learn-more-container">
        <h2 className="learn-more-header">Learn More About Impermanent Loss</h2>
        {learnMoreData.map((item, index) => (
          <div key={index} className="learn-more-item">
            <h3 
              className={`learn-more-title ${activeLearnMoreIndex === index ? 'active' : ''}`} 
              onClick={() => toggleLearnMore(index)}
            >
              {item.title}
              <span className="learn-more-arrow">{activeLearnMoreIndex === index ? '▲' : '▼'}</span>
            </h3>
            <p className={`learn-more-content ${activeLearnMoreIndex === index ? 'active' : ''}`}>
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <Feedback />
      <div className="give-us-star">
        <h2 className="star-title">Give Us a Star!</h2>
        <p className="star-description">
          If you found this calculator helpful, please consider giving us a star on GitHub!
        </p>
        <a
          href="https://github.com/your-repo-url" // Replace with your GitHub repository URL
          target="_blank"
          rel="noopener noreferrer"
          className="star-button"
        >
          ⭐ Give a Star
        </a>
      </div>
    </div>
  );
};

export default ImpermanentLossCalculator;
