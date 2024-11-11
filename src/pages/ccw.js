import React, { useState, useEffect } from "react";
import "./ccw.css";
import Header from "../components/Common/Header";

// Mock API fetch function for demo purposes
const fetchCryptoData = async (symbol) => {
  // Replace with a real API request in a production environment
  return {
    symbol,
    price: (Math.random() * 1000).toFixed(2),
    rsi: (Math.random() * 100).toFixed(2),
    macd: (Math.random() * 2 - 1).toFixed(2),
  };
};

function CryptoWatchlist() {
  const [cryptos, setCryptos] = useState([]);
  const [symbol, setSymbol] = useState("");
  const [watchlist, setWatchlist] = useState([]);

  const addCrypto = async () => {
    if (symbol) {
      const cryptoData = await fetchCryptoData(symbol.toUpperCase());
      setWatchlist([...watchlist, cryptoData]);
      setSymbol("");
    } else {
      alert("Please enter a cryptocurrency symbol.");
    }
  };

  const removeCrypto = (symbolToRemove) => {
    setWatchlist(watchlist.filter((crypto) => crypto.symbol !== symbolToRemove));
  };

  return (
    <div>
      <Header />
      <div className="watchlist-container">
        <h2>Crypto Watchlist with Prediction Indicators</h2>
        <div className="input-group">
          <label>Crypto Symbol:</label>
          <input
            type="text"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            placeholder="Enter crypto symbol (e.g., BTC)"
          />
          <button className="add-button" onClick={addCrypto}>
            Add to Watchlist
          </button>
        </div>
        <div className="crypto-list">
          {watchlist.length > 0 ? (
            watchlist.map((crypto) => (
              <div className="crypto-card" key={crypto.symbol}>
                <h3>{crypto.symbol}</h3>
                <p>Current Price: ${crypto.price}</p>
                <p>RSI: {crypto.rsi}</p>
                <p>MACD: {crypto.macd}</p>
                <button
                  className="remove-button"
                  onClick={() => removeCrypto(crypto.symbol)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>No cryptos in the watchlist. Add one to begin tracking.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CryptoWatchlist;
