import React, { useState } from "react";
import "./CompoundInterestCalculator.css";
import Header from "../components/Common/Header";

function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [compoundingsPerYear, setCompoundingsPerYear] = useState("");
  const [result, setResult] = useState(null);

  const calculateCompoundInterest = () => {
    if (principal > 0 && rate > 0 && time > 0 && compoundingsPerYear > 0) {
      const rateDecimal = rate / 100;
      const compoundInterest =
        principal *
        Math.pow(
          1 + rateDecimal / compoundingsPerYear,
          compoundingsPerYear * time
        );
      setResult(compoundInterest.toFixed(2));
    } else {
      alert("Please enter positive numbers for all fields.");
    }
  };

  return (
    <div>
      <Header />
      <div className="calculator-container">
        <h2>Compound Interest Calculator</h2>
        <div className="input-group">
          <label>Principal ($):</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="Enter principal amount"
          />
        </div>
        <div className="input-group">
          <label>Annual Interest Rate (%):</label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Enter annual rate"
          />
        </div>
        <div className="input-group">
          <label>Time (years):</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter number of years"
          />
        </div>
        <div className="input-group">
          <label>Compoundings Per Year:</label>
          <input
            type="number"
            value={compoundingsPerYear}
            onChange={(e) => setCompoundingsPerYear(e.target.value)}
            placeholder="Enter compoundings per year"
          />
        </div>
        <button
          className="calculate-button"
          onClick={calculateCompoundInterest}
        >
          Calculate
        </button>
        {result !== null && (
          <div className="result">
            <h3>Future Value: ${result}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompoundInterestCalculator;
