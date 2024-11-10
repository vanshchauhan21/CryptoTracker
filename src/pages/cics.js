import React, { useState } from "react";
import "./cics.css";
import Header from "../components/Common/Header";

function CompoundInterestCalculator() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState(1);
  const [stakingDuration, setStakingDuration] = useState("");
  const [result, setResult] = useState(null);

  const calculateCompoundInterest = () => {
    if (!initialInvestment || !annualInterestRate || !stakingDuration) {
      alert("Please fill in all fields.");
      return;
    }

    const P = parseFloat(initialInvestment);
    const r = parseFloat(annualInterestRate) / 100;
    const n = parseInt(compoundingFrequency);
    const t = parseFloat(stakingDuration);

    const compoundInterest = P * Math.pow(1 + r / n, n * t);
    const totalInterest = compoundInterest - P;

    setResult({
      totalAmount: compoundInterest.toFixed(2),
      interestEarned: totalInterest.toFixed(2),
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center flex-1 p-6">
        <div className="bg-white dark:bg-black rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-400 text-center">Crypto Staking Compound Interest Calculator</h2>
          <div className="mb-4">
            <label className="block text-gray-600 dark:text-gray-500 mb-2">Initial Investment ($)</label>
            <input
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
              className="w-full p-2 border text-gray-300 dark:bg-gray-950 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 dark:text-gray-500 mb-2">Annual Interest Rate (%)</label>
            <input
              type="number"
              value={annualInterestRate}
              onChange={(e) => setAnnualInterestRate(e.target.value)}
              className="w-full p-2 border text-gray-300 dark:bg-gray-950 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 dark:text-gray-500 mb-2">Compounding Frequency (times per year)</label>
            <input
              type="number"
              value={compoundingFrequency}
              onChange={(e) => setCompoundingFrequency(e.target.value)}
              className="w-full p-2 border text-gray-300 dark:bg-gray-950 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 dark:text-gray-500 mb-2">Staking Duration (years)</label>
            <input
              type="number"
              value={stakingDuration}
              onChange={(e) => setStakingDuration(e.target.value)}
              className="w-full p-2 border text-gray-300 dark:bg-gray-950 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            onClick={calculateCompoundInterest}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
          >
            Calculate
          </button>

          {result && (
            <div className="mt-6 dark:bg-gray-900 p-4 bg-gray-100 rounded-md border border-gray-300">
              <p className="text-lg dark:text-gray-400 font-medium">Total Amount: <span className="text-green-600">${result.totalAmount}</span></p>
              <p className="text-lg dark:text-gray-400 font-medium">Interest Earned: <span className="text-green-600">${result.interestEarned}</span></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompoundInterestCalculator;
