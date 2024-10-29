import React from "react";
import Header from "./Common/Header";

const Learn = () => {
  return (
    <>
    <Header/>
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Learn Cryptocurrency
      </h1>

      <div className="space-y-8">
        {/* Crypto Trading Basics */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Crypto Trading Basics
          </h2>
          <p className="text-gray-700">
            Learn the essentials of cryptocurrency trading, including how to
            start, strategies, and best practices.
          </p>
          <a href="/learn/trading-basics" className="text-blue-500 mt-4 block">
            Learn More →
          </a>
        </div>

        {/* Blockchain Fundamentals */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Blockchain Fundamentals
          </h2>
          <p className="text-gray-700">
            Understand how blockchain technology works, why it's revolutionary,
            and how it impacts various industries.
          </p>
          <a
            href="/learn/blockchain-fundamentals"
            className="text-blue-500 mt-4 block"
          >
            Learn More →
          </a>
        </div>

        {/* Market Analysis Techniques */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Market Analysis Techniques
          </h2>
          <p className="text-gray-700">
            Explore advanced market analysis techniques to understand trends and
            make informed investment decisions.
          </p>
          <a href="/learn/market-analysis" className="text-blue-500 mt-4 block">
            Learn More →
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Learn;
