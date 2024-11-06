import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Common/Header";
import "./Crypto24HourReport.css";
const Crypto24HourReport = () => {
  const [cryptos, setCryptos] = useState([]);
  const [news, setNews] = useState([]);
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








  useEffect(() => {
    // Fetch NFT market updates
    fetch("https://min-api.cryptocompare.com/data/v2/news/?feeds=cryptocompare,cointelegraph,coindesk&extraParams=YourSite")
      .then(response => response.json())
      .then(data => {
        setNews(data.Data); // Assuming the news data is in 'Data' field
      })
      .catch(error => console.error("Error fetching NFT market updates:", error));
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
  
  
  
  {/* .....................News Section.......... */}
     <div className="new-section">
        <h2>Handpicked News Just For You</h2>


        <div className="news-card-container">
          {news.length > 0 ? (
            news.map((article, index) => (
              <div className="card-frame" key={index}>

                <div className="imag-contain">
                  <img
                    src={article.imageurl}
                    alt={article.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="card-content">
                  <div className="Desc-detail">
                    <p className="card-more">
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        {article.source_info.name} - {new Date(article.published_on * 1000).toLocaleDateString()}
                      </a>
                    </p>
                  </div>

                  <div className="Desc-detail">
                    <h2 className="card-title">{article.title}</h2>
                  </div>

                  <div className="Desc-detail">
                    <p>{article.body}</p>
                  </div>

                  <div className="Desc-detail">
                    <p className="card-more">
                      <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Read more - {article.source_info.name}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading market updates...</p>
          )}
        </div>
      </div>







    </>

  );
};

export default Crypto24HourReport;
