import React, { useState } from "react";
// import "./CryptoProfitCalculator.css"; 
import Header from "../components/Common/Header";

function CryptoProfitCalculator() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [result, setResult] = useState(null);

  const calculateProfitOrLoss = () => {
    if (!initialInvestment || !buyPrice || !currentPrice) {
      alert("Please fill in all fields.");
      return;
    }
    
    const profitOrLoss = ((currentPrice - buyPrice) / buyPrice) * 100;
    const profitOrLossAmount = (initialInvestment * profitOrLoss) / 100;
    setResult({
      percentage: profitOrLoss.toFixed(2),
      amount: profitOrLossAmount.toFixed(2),
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center flex-1 p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Crypto Profit Calculator</h2>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Initial Investment ($)</label>
            <input
              type="number"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Buy Price ($)</label>
            <input
              type="number"
              value={buyPrice}
              onChange={(e) => setBuyPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 mb-2">Current Price ($)</label>
            <input
              type="number"
              value={currentPrice}
              onChange={(e) => setCurrentPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            onClick={calculateProfitOrLoss}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
          >
            Calculate
          </button>

          {result && (
            <div className="mt-6 p-4 bg-gray-100 rounded-md border border-gray-300">
              <p className="text-lg text-gray-800 font-medium">Profit/Loss Percentage: <span className={result.percentage >= 0 ? "text-green-600" : "text-red-600"}>{result.percentage}%</span></p>
              <p className="text-lg text-gray-800 font-medium">Profit/Loss Amount: <span className={result.amount >= 0 ? "text-green-600" : "text-red-600"}>${result.amount}</span></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CryptoProfitCalculator;