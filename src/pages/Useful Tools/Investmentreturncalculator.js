import React, { useState } from "react";
import Header from "../../components/Common/Header";
// import { Link } from "react-router-dom"; 

const InvestmentReturnCalculator = () => {
  const [investment, setInvestment] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [duration, setDuration] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  const calculateReturn = () => {
    const rate = parseFloat(interestRate) / 100;
    const calculatedAmount = investment * Math.pow(1 + rate, duration);
    setFinalAmount(calculatedAmount.toFixed(2));
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto justify-center mt-20 mb-20">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Investment Return Calculator</h2>
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
          onClick={calculateReturn}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
        >
          Calculate Return
        </button>
        {finalAmount > 0 && (
          <div className="mt-6 text-lg text-gray-700 font-medium">
            Final Amount: ${finalAmount}
          </div>
        )}
        </div>
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto justify-center mt-10 mb-20">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Expert Insights & Pro Tips</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Start investing early to take advantage of compound interest.</li>
          <li>Consider diversifying your investment portfolio to mitigate risks.</li>
          <li>Regularly review and adjust your investment strategy based on market conditions.</li>
          <li>Stay informed about economic trends that can impact your investments.</li>
          <li>Consult with a financial advisor to tailor your investment strategy to your goals.</li>
        </ul>
      </div>
      
    </>
  );
};

export default InvestmentReturnCalculator;
