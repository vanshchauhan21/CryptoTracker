import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Common/Header";
import "./Crypto24HourReport.css";
const Crypto24HourReport = () => {
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
    <>
      <Header />
      <div className="Crypto-Container">
        <h2>24-Hour Cryptocurrency Report</h2>
        <table>
          <thead>
            <tr>
            <th>Icon</th>
              <th>Name</th>
              <th>Price (USD)</th>
              <th>Market Cap</th>
              <th>24h Price Change (%)</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((crypto) => (
              <tr key={crypto.id}>
                <td>
                  <img
                    src={crypto.image}
                    alt={crypto.name}
                    className="coin-logo"
                  /> </td>
                  <td>{crypto.name}</td>
                  <td>${crypto.current_price.toLocaleString()}</td>
                  <td>${crypto.market_cap.toLocaleString()}</td>
                  <td
                    style={{
                      color: crypto.price_change_percentage_24h > 0 ? "green" : "red",
                    }}
                  >
                    {crypto.price_change_percentage_24h.toFixed(2)}%
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>

  );
};

export default Crypto24HourReport;
