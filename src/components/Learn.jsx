// src/components/Learn.jsx
import React from "react";
import Header from "./Common/Header";
import './Learn.css'; // Import the CSS file for styling

const Learn = () => {
  return (
    <>
      <Header />
      <div className="learn-container p-6">
        <h1 className="learn-title text-3xl font-bold text-center mb-8">
          Learn Cryptocurrency
        </h1>

        <div className="space-y-8">
          {/* Crypto Trading Basics */}
          <div className="learn-card bg-white shadow-md rounded-lg p-6">
            <h2 className="learn-subtitle text-2xl font-semibold mb-4">
              Crypto Trading Basics
            </h2>
            <p className="learn-description">
              Learn the essentials of cryptocurrency trading, including how to
              start, strategies, and best practices.
            </p>
            <a href="/learn/trading-basics" className="learn-link mt-4 block">
              Learn More →
            </a>
          </div>

          {/* Blockchain Fundamentals */}
          <div className="learn-card bg-white shadow-md rounded-lg p-6">
            <h2 className="learn-subtitle text-2xl font-semibold mb-4">
              Blockchain Fundamentals
            </h2>
            <p className="learn-description">
              Understand how blockchain technology works, why it's revolutionary,
              and how it impacts various industries.
            </p>
            <a
              href="/learn/blockchain-fundamentals"
              className="learn-link mt-4 block"
            >
              Learn More →
            </a>
          </div>

          {/* Market Analysis Techniques */}
          <div className="learn-card bg-white shadow-md rounded-lg p-6">
            <h2 className="learn-subtitle text-2xl font-semibold mb-4">
              Market Analysis Techniques
            </h2>
            <p className="learn-description">
              Explore advanced market analysis techniques to understand trends and
              make informed investment decisions.
            </p>
            <a href="/learn/market-analysis" className="learn-link mt-4 block">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
