import React, { useState } from "react";
import "./MarginCalculator.css";
import Header from "../components/Common/Header";
// import { Link } from 'react-router-dom';

import KnowledgeCenter from "./CryptoKnowledgeBase/CryptoKnowledgeBase";
function MarginCalculator() {
  const [costPrice, setCostPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [margin, setMargin] = useState(null);

  const calculateMargin = () => {
    if (costPrice > 0 && sellingPrice > 0) {
      const profit = sellingPrice - costPrice;
      const marginPercentage = (profit / sellingPrice) * 100;
      setMargin(marginPercentage.toFixed(2));
    } else {
      alert(
        "Please enter valid positive numbers for cost price and selling price."
      );
    }
  };

  return (
    <>
      <Header />
    <div>
    
      <div className="calculator-container">
        <h2>Margin Calculator</h2>
        <div className="input-group">
          <label>Cost Price ($):</label>
          <input
            type="number"
            value={costPrice}
            onChange={(e) => setCostPrice(e.target.value)}
            placeholder="Enter cost price"
          />
        </div>
        <div className="input-group">
          <label>Selling Price ($):</label>
          <input
            type="number"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            placeholder="Enter selling price"
          />
        </div>
        <button className="calculate-button" onClick={calculateMargin}>
          Calculate Margin
        </button>
        {margin !== null && (
          <div className="result">
            <h3>Margin: {margin}%</h3>
          </div>
        )}
      </div>
    
    </div>
     
    <KnowledgeCenter />
     </>
  );
}

export default MarginCalculator;
