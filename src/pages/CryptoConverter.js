import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CryptoConverter.css"; // Import your custom CSS file for styling
import Header from "../components/Common/Header"; // Import Header component

const CryptoConverter = () => {
  const [cryptoAmount, setCryptoAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("bitcoin"); // Use full names for API compatibility
  const [toCurrency, setToCurrency] = useState("usd");
  const [conversionRate, setConversionRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchConversionRate = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${fromCurrency}&vs_currencies=${toCurrency}`
      );
      setConversionRate(response.data[fromCurrency][toCurrency]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching conversion rate:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (conversionRate) {
      setConvertedAmount(cryptoAmount * conversionRate);
    }
  }, [cryptoAmount, conversionRate]);

  useEffect(() => {
    fetchConversionRate();
  }, [fromCurrency, toCurrency]);

  return (
    <div className="crypto-converter-page">
      <Header />
      <div className="crypto-converter-container">
        <h2 className="head">Crypto Converter</h2>
        <div className="converter-box">
          <input
            type="number"
            value={cryptoAmount}
            onChange={(e) => setCryptoAmount(e.target.value)}
            placeholder="Amount"
            className="input-field"
          />

          <select
            className="dropdown"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="bitcoin">Bitcoin (BTC)</option>
            <option value="ethereum">Ethereum (ETH)</option>
            <option value="cardano">Cardano (ADA)</option>
            <option value="binancecoin">Binance Coin (BNB)</option>
            <option value="ripple">Ripple (XRP)</option>
            <option value="polkadot">Polkadot (DOT)</option>
            <option value="litecoin">Litecoin (LTC)</option>
            <option value="solana">Solana (SOL)</option>
          </select>

          <button
            onClick={() => {
              const temp = fromCurrency;
              setFromCurrency(toCurrency);
              setToCurrency(temp);
            }}
            className="swap-button"
          >
            ⇄
          </button>

          <select
            className="dropdown"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="usd">US Dollar (USD)</option>
            <option value="eur">Euro (EUR)</option>
            <option value="gbp">British Pound (GBP)</option>
            <option value="inr">Indian Rupee (INR)</option>
            <option value="jpy">Japanese Yen (JPY)</option>
            <option value="aud">Australian Dollar (AUD)</option>
            <option value="cad">Canadian Dollar (CAD)</option>
            <option value="cny">Chinese Yuan (CNY)</option>
          </select>
        </div>

        <div className="result">
          {loading ? (
            <p>Loading conversion rate...</p>
          ) : (
            <p>
              {cryptoAmount} {fromCurrency.toUpperCase()} is equal to{" "}
              {convertedAmount ? convertedAmount.toFixed(2) : "0.00"}{" "}
              {toCurrency.toUpperCase()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CryptoConverter;
