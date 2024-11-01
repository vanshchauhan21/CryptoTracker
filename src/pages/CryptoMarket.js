// src/components/CryptoMarket.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Common/Header";
import "./CryptoMarket.css"; // Import the CSS file

const CryptoMarket = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCoins(response.data);
      } catch (error) {
        setError("Could not fetch data. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <div className="crypto-market">
        <h2>24h Cryptocurrency Market</h2>
        <table className="crypto-table">
          <thead>
            <tr>
              <th>Coin</th>
              <th>Price (USD)</th>
              <th>24h Change</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr key={coin.id}>
                <td>
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="coin-image"
                  />
                  {coin.name}
                </td>
                <td>${coin.current_price.toFixed(2)}</td>
                <td
                  className={
                    coin.price_change_percentage_24h >= 0
                      ? "positive"
                      : "negative"
                  }
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CryptoMarket;
