import React, { useEffect, useState } from "react";
import "./MarketCard.css";
import LottieSpinner from "../LottieSpinner/LottieSpinner";


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
                <h3 className="card-title">
                  {article.title.split(" ").slice(0, 10).join(" ") + (article.title.split(" ").length > 10 ? "..." : "")}
                </h3>

              </div>

              <div className="Desc-detail">
                <p className="para-article">{article.body.split(" ").slice(0, 15).join(" ") + "..."}</p>

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
   <LottieSpinner/>
      )}
    </div>
  );
};

export default MarketCard;
