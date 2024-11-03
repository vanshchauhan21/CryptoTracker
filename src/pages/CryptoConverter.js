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

  const [activeLearnMoreIndex, setActiveLearnMoreIndex] = useState(null);
  const toggleLearnMore = (index) => {
    setActiveLearnMoreIndex(activeLearnMoreIndex === index ? null : index);
  };

   // Learn More data
   const learnMoreData = [
    {
      title: "What is a Cryptocurrency Converter?",
      content: "A cryptocurrency converter is a tool that helps users calculate the value of one cryptocurrency in terms of another cryptocurrency or fiat currency (like USD, EUR, etc.). It uses real-time market rates to provide accurate conversion values, helping traders and investors make informed decisions."
    },
    {
      title: "How accurate are the conversion rates?",
      content: "Our conversion rates are pulled in real-time from reliable cryptocurrency data providers through the CoinGecko API. While we strive for maximum accuracy, cryptocurrency prices can be volatile and may vary slightly across different exchanges. The rates are typically updated every few minutes to ensure accuracy."
    },
    {
      title: "What currencies can I convert between?",
      content: "Our converter supports major cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), Cardano (ADA), Binance Coin (BNB), and others, as well as major fiat currencies including USD, EUR, GBP, JPY, and more. We regularly update our currency options based on market relevance and user demand."
    },
    {
      title: "How often are the rates updated?",
      content: "The conversion rates are updated in real-time through our API integration. However, due to the highly volatile nature of cryptocurrency markets, there might be slight delays of a few seconds to ensure data accuracy and system performance."
    }
  ];

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
      <div className="learn-more-container">
        <h2 className="learn-more-header">Learn More About Crypto Converter</h2>
        {learnMoreData.map((item, index) => (
          <div key={index} className="learn-more-item">
            <h3 
              className={`learn-more-title ${activeLearnMoreIndex === index ? 'active' : ''}`} 
              onClick={() => toggleLearnMore(index)}
            >
              {item.title}
              <span className="learn-more-arrow">{activeLearnMoreIndex === index ? '▲' : '▼'}</span>
            </h3>
            <p className={`learn-more-content ${activeLearnMoreIndex === index ? 'active' : ''}`}>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoConverter;
