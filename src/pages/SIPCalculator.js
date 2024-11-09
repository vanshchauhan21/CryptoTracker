import React, { useState } from "react";
import "./SIPCalculator.css";
import Header from "../components/Common/Header";

const SIPCalculator = () => {
  const [amount, setAmount] = useState("");
  const [rateOfInterest, setRateOfInterest] = useState("");
  const [years, setYears] = useState("");
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateSIP = () => {
    if (amount && rateOfInterest && years) {
      const p = parseFloat(amount); // Monthly investment
      const r = parseFloat(rateOfInterest) / 12 / 100; // Monthly rate of return
      const n = parseInt(years) * 12; // Total number of months
      const x = Math.pow(1 + r, n);
      const sipAmount = p * ((x - 1) / r) * (1 + r); // SIP formula for future value

      setTotalAmount(sipAmount.toFixed(2));
    } else {
      setTotalAmount("Please fill in all the fields");
    }
  };

  return (
    <div>
      <Header />

      <div className="sip-calculator">
        <h2>SIP Calculator</h2>

        <label htmlFor="amount">Monthly Investment Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />

        <label htmlFor="rateOfInterest">Expected Rate of Interest (%)</label>
        <input
          type="number"
          id="rateOfInterest"
          value={rateOfInterest}
          onChange={(e) => setRateOfInterest(e.target.value)}
          placeholder="Enter annual interest rate"
        />

        <label htmlFor="years">Investment Duration (Years)</label>
        <input
          type="number"
          id="years"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          placeholder="Enter duration in years"
        />

        <button onClick={calculateSIP}>Calculate</button>

        {totalAmount !== null && (
          <div className="result">
            <h3>
              Total Value of Investment:{totalAmount}%</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default SIPCalculator;
