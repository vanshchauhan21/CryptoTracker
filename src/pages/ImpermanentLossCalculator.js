import React, { useState } from "react";
import "./ImpermanentLossCalculator.css";
import Header from "../components/Common/Header";

const ImpermanentLossCalculator = () => {
  const [initialPriceA, setInitialPriceA] = useState("");
  const [initialPriceB, setInitialPriceB] = useState("");
  const [finalPriceA, setFinalPriceA] = useState("");
  const [finalPriceB, setFinalPriceB] = useState("");
  const [impermanentLoss, setImpermanentLoss] = useState(null);

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
    </div>
  );
};

export default ImpermanentLossCalculator;
