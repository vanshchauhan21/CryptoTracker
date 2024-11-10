import React, { useState } from "react";
import "./CompoundInterestCalculator.css";
import Header from "../components/Common/Header";
import MasterTheMath from './CompoundInterestCalculator/MasterTheMath';

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
      <MasterTheMath />
      <div className="educational-info">
        <h2>Understanding Compound Interest</h2>
        <p>
          Compound interest is the interest on a loan or deposit calculated based on both 
          the initial principal and the accumulated interest from previous periods.
        </p>
        <h3>Key Concepts</h3>
        <ul>
          <li><strong>Time Factor:</strong> The longer you leave your money to grow, the more you will benefit from compound interest.</li>
          <li><strong>Interest Rate:</strong> A higher interest rate will lead to more significant growth over time.</li>
          <li><strong>Compounding Frequency:</strong> The more often interest is compounded, the greater the total amount of interest earned.</li>
        </ul>
        
        <h3>Real-World Applications</h3>
        <p>Understanding compound interest is crucial for effective financial planning. It can apply to various scenarios, including:</p>
        <ul>
          <li>Retirement accounts (e.g., 401(k), IRA)</li>
          <li>Savings accounts</li>
          <li>Investment portfolios</li>
        </ul>
      </div>
    </div>
  );
}

export default CompoundInterestCalculator;
