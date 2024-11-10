import React, { useState, useEffect } from "react";
import "./gfe.css";
import Header from "../components/Common/Header";

function GasFeeEstimator() {
  const [network, setNetwork] = useState("ethereum");
  const [gasPrice, setGasPrice] = useState(null);  // Gas price in Gwei (or other units depending on the chain)
  const [transactionSize, setTransactionSize] = useState("");  // In bytes
  const [estimatedFee, setEstimatedFee] = useState(null);

  // Function to fetch the current gas price based on the selected network
  const fetchGasPrice = async () => {
    let apiUrl;
    
    if (network === "ethereum") {
      apiUrl = "https://api.etherscan.io/api?module=gastracker&action=gasoracle";
    } else if (network === "binance-smart-chain") {
      apiUrl = "https://api.bscscan.com/api?module=gastracker&action=gasoracle";
    } else if (network === "polygon") {
      apiUrl = "https://api.polygonscan.com/api?module=gastracker&action=gasoracle";
    }
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      let currentGasPrice;
      if (network === "ethereum") {
        currentGasPrice = data.result.ProposeGasPrice;  // For Ethereum, get ProposeGasPrice
      } else if (network === "binance-smart-chain" || network === "polygon") {
        currentGasPrice = data.result.SafeGasPrice;  // For BSC/Polygon, get SafeGasPrice
      }
      
      // Convert to a number to ensure correct math operations
      setGasPrice(Number(currentGasPrice));
    } catch (error) {
      console.error("Error fetching gas price:", error);
    }
  };

  useEffect(() => {
    fetchGasPrice();
  }, [network]);  // Re-fetch whenever network changes

  // Calculate the gas fee (in ETH, BNB, or MATIC)
  const calculateGasFee = (e) => {
    e.preventDefault();
    
    // Ensure gas price and transaction size are valid before calculating
    if (gasPrice && transactionSize && !isNaN(transactionSize)) {
      const fee = (gasPrice * transactionSize) / 1e9;  // Gas fee calculation in ETH/BNB/MATIC
      setEstimatedFee(fee.toFixed(6));  // Display 6 decimal places
    } else {
      setEstimatedFee("Invalid input");  // If there's an error with inputs
    }
  };

  return (
    <div>
      <Header />
      <div className="calculator-container">
        <div className="calculator-card">
          <h2>Gas Fee Estimator</h2>
          <form onSubmit={calculateGasFee}>
            <label>Select Network</label>
            <select onChange={(e) => setNetwork(e.target.value)} value={network}>
              <option value="ethereum">Ethereum</option>
              <option value="binance-smart-chain">Binance Smart Chain</option>
              <option value="polygon">Polygon</option>
            </select>

            <label>Transaction Size (in bytes)</label>
            <input
              type="number"
              value={transactionSize}
              onChange={(e) => setTransactionSize(e.target.value)}
              required
            />
            <button type="submit">Calculate Fee</button>
          </form>
          
          {estimatedFee !== null && (
            <div className="result">
              <h3>Estimated Gas Fee: {estimatedFee} {network === 'ethereum' ? 'ETH' : network === 'binance-smart-chain' ? 'BNB' : 'MATIC'}</h3>
            </div>
          )}
        </div>
      </div>
      <div className="info-section">
          <h2>Understanding Gas Fees</h2>
          <p>
            Gas fees are payments made by users to compensate for the computing energy required to process transactions on the Ethereum blockchain. 
            These fees are essential for ensuring that transactions are prioritized and processed by miners.
          </p>
          <h3>Factors Affecting Gas Fees</h3>
          <ul>
            <li>Network congestion: Higher activity on the network can lead to increased fees.</li>
            <li>Transaction complexity: More complex transactions require more computational resources.</li>
            <li>Gas price: The price per unit of gas you are willing to pay can influence how quickly your transaction is processed.</li>
          </ul>
          <p>
            To minimize gas fees, consider using the network during off-peak hours and optimizing your transactions.
          </p>
        </div>
      </div>
    // </div>
  );
}

export default GasFeeEstimator;
