import React, { useEffect, useState } from "react";
import "./MarketCard.css";

const MarketCard = () => {
  const [news, setNews] = useState([]);

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
    <div className="card-container">
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
  );
};

export default MarketCard;
