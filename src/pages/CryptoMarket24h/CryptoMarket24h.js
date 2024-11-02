import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Common/Header";
import "./CryptoMarket24h.css"; // Import the CSS file

const CryptoMarketOverview = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        });
        setCryptos(response.data);
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="title">24-Hour Cryptocurrency Market</h2>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price (USD)</th>
              <th>Market Cap</th>
              <th>24h Change</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((crypto, index) => (
              <tr key={crypto.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={crypto.image} alt={crypto.name} className="image" />
                  {crypto.name}
                </td>
                <td>${crypto.current_price.toLocaleString()}</td>
                <td>${crypto.market_cap.toLocaleString()}</td>
                <td className={crypto.price_change_percentage_24h < 0 ? "change-negative" : "change-positive"}>
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoMarketOverview;
