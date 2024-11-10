import React, { useState } from "react";
import Header from "../../components/Common/Header";
import KnowledgeHub from "../KnowledgeHub/KnowledgeHub";
const ProfitReturnCalculator = () => {
  const [investment, setInvestment] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [duration, setDuration] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  const calculateProfit = () => {
    const rate = parseFloat(interestRate) / 100;
    const calculatedAmount = investment * Math.pow(1 + rate, duration);
    setFinalAmount(calculatedAmount.toFixed(2));
  };

  return (<>
  <Header/>
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto justify-center mt-20 mb-20">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Profit Return Calculator</h2>
      <div className="w-full">
        <label className="block text-gray-600 text-sm font-medium mb-2">Initial Investment ($)</label>
        <input
          type="number"
          value={investment}
          onChange={(e) => setInvestment(e.target.value)}
          className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black bg-white"
        />
      </div>
      <div className="w-full">
        <label className="block text-gray-600 text-sm font-medium mb-2">Annual Interest Rate (%)</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black bg-white"
        />
      </div>
      <div className="w-full">
        <label className="block text-gray-600 text-sm font-medium mb-2">Duration (Years)</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black bg-white"
        />
      </div>
      <button
        onClick={calculateProfit}
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
      >
        Calculate Profit
      </button>
      {finalAmount > 0 && (
        <div className="mt-6 text-lg text-gray-700 font-medium">
          Final Return: ${finalAmount}
        </div>
      )}
   
      
    </div>
    <div className="info-section p-6 bg-gray-200 rounded-lg shadow-md max-w-md mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-4">Understanding Crypto Profit Calculation</h2>
        <p className="mb-2">
          The Crypto Profit Calculator allows you to estimate the returns on your investment based on the initial amount, annual interest rate, and duration of the investment.
        </p>
        <h3 className="font-semibold">Key Terms:</h3>
        <ul className="list-disc list-inside mb-2">
          <li><strong>Initial Investment:</strong> The amount of money you initially invest.</li>
          <li><strong>Annual Interest Rate:</strong> The expected rate of return on your investment, expressed as a percentage.</li>
          <li><strong>Duration:</strong> The length of time you plan to hold the investment, typically measured in years.</li>
        </ul>
        <p>
          By entering these values, the calculator will use the formula <strong>A = P(1 + r)^t</strong> to compute the final amount, where:
        </p>
        < p>
          <ul className="list-disc list-inside mb-2">
            <li><strong>A:</strong> The final amount of money after the investment period.</li>
            <li><strong>P:</strong> The principal amount (initial investment).</li>
            <li><strong>r:</strong> The annual interest rate (decimal).</li>
            <li><strong>t:</strong> The time the money is invested for (in years).</li>
          </ul>
        </p>
        <p>
          This tool is designed to help you make informed decisions about your crypto investments by providing a clear understanding of potential returns.
        </p>
      </div>
    <KnowledgeHub />
  </>
  );
};

export default ProfitReturnCalculator;
