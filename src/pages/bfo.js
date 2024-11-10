import React, { useState, useEffect } from "react";
import "./bfo.css";
import Header from "../components/Common/Header";

// Mock API fetch function to simulate fetching bridge fees and routes
const fetchBridgeData = async (fromChain, toChain, amount) => {
  // Replace with a real API call to fetch bridge data
  return {
    fromChain,
    toChain,
    amount,
    fee: (Math.random() * 10).toFixed(2), // Mock fee for demo
    estimatedTime: Math.floor(Math.random() * 30) + " mins", // Mock time
  };
};

function CrossChainBridgeFeeOptimizer() {
  const [fromChain, setFromChain] = useState("");
  const [toChain, setToChain] = useState("");
  const [amount, setAmount] = useState("");
  const [routes, setRoutes] = useState([]);

  const findBestRoute = async () => {
    if (fromChain && toChain && amount) {
      const routeData = await fetchBridgeData(fromChain, toChain, amount);
      setRoutes([...routes, routeData]);
      setFromChain("");
      setToChain("");
      setAmount("");
    } else {
      alert("Please enter all required fields.");
    }
  };

  const removeRoute = (index) => {
    setRoutes(routes.filter((_, idx) => idx !== index));
  };

  return (
    <div>
      <Header />
      <div className="optimizer-container">
        <h2>Cross-Chain Bridge Fee Optimizer</h2>
        <div className="input-group">
          <label>From Chain:</label>
          <input
            type="text"
            value={fromChain}
            onChange={(e) => setFromChain(e.target.value)}
            placeholder="Enter source blockchain (e.g., Ethereum)"
          />
          <label>To Chain:</label>
          <input
            type="text"
            value={toChain}
            onChange={(e) => setToChain(e.target.value)}
            placeholder="Enter target blockchain (e.g., Binance Smart Chain)"
          />
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount to transfer"
          />
          <button className="find-route-button" onClick={findBestRoute}>
            Find Best Route
          </button>
        </div>
        <div className="route-list">
          {routes.length > 0 ? (
            routes.map((route, index) => (
              <div className="route-card" key={index}>
                <h3>{`${route.fromChain} ➔ ${route.toChain}`}</h3>
                <p>Amount: {route.amount}</p>
                <p>Fee: ${route.fee}</p>
                <p>Estimated Time: {route.estimatedTime}</p>
                <button
                  className="remove-route-button"
                  onClick={() => removeRoute(index)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>No routes added. Find a route to begin optimizing.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CrossChainBridgeFeeOptimizer;
