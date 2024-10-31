import React, { useState } from "react";
import Header from "../../components/Common/Header"; // Adjust the path if necessary

const ImpermanentLossCalculator = () => {
  const [initialPrice, setInitialPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [impermanentLoss, setImpermanentLoss] = useState(0);

  const calculateImpermanentLoss = () => {
    if (initialPrice <= 0 || finalPrice <= 0) {
      alert("Please enter valid prices.");
      return;
    }
    
    const priceRatioInitial = finalPrice / initialPrice;
    const loss = 2 * (Math.sqrt(priceRatioInitial) - 1) / (Math.sqrt(priceRatioInitial) + 1);
    setImpermanentLoss((loss * 100).toFixed(2)); // Convert to percentage
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto justify-center mt-20 mb-20">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Impermanent Loss Calculator</h2>
        <div className="w-full">
          <label className="block text-gray-600 text-sm font-medium mb-2">Initial Price Ratio (P0)</label>
          <input
            type="number"
            value={initialPrice}
            onChange={(e) => setInitialPrice(e.target.value)}
            className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="w-full">
          <label className="block text-gray-600 text-sm font-medium mb-2">Final Price Ratio (P1)</label>
          <input
            type="number"
            value={finalPrice}
            onChange={(e) => setFinalPrice(e.target.value)}
            className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          onClick={calculateImpermanentLoss}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
        >
          Calculate Impermanent Loss
        </button>
        {impermanentLoss !== 0 && (
          <div className="mt-6 text-lg text-gray-700 font-medium">
            Impermanent Loss: {impermanentLoss}%
          </div>
        )}
      </div>
    </>
  );
};

export default ImpermanentLossCalculator;