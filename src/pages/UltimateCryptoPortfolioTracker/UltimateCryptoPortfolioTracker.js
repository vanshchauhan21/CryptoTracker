

import React from 'react';
import './UltimateCryptoPortfolioTracker.css'; 
import Header from '../../components/Common/Header'; 
import PortfolioChart from '../../components/PortfolioChart'; 
import PortfolioSummary from '../../components/PortfolioSummary'; 

const UltimateCryptoPortfolioTracker = () => {
  return (
    <>
    <Header />
    <div className="portfolio-tracker-container">
     
      <div className="portfolio-header">
        <h1>Ultimate Crypto Portfolio Tracker</h1>
        <p>Manage and analyze your cryptocurrency investments with ease.</p>
      </div>
      <div className="portfolio-content">
        <section className="portfolio-section">
          <h2>Your Portfolio Overview</h2>
          <PortfolioSummary /> 
        </section>
        <section className="portfolio-section">
          <h2>Market Trends</h2>
          <p>Stay updated with the latest market trends and data.</p>
          <PortfolioChart /> 
        </section>
        <section className="portfolio-section">
          <h2>Investment Strategies</h2>
          <p>Learn about effective investment strategies for cryptocurrencies.</p>
          <ul>
            <li><strong>Dollar-Cost Averaging:</strong> Invest a fixed amount regularly to reduce the impact of volatility.</li>
            <li><strong>Diversification:</strong> Spread your investments across various cryptocurrencies to minimize risk.</li>
            <li><strong>Research:</strong> Stay informed about market news and trends to make educated decisions.</li>
          </ul>
        </section>
        <section className="portfolio-section">
          <h2>Latest News & Updates</h2>
          <p>Get the latest news in the cryptocurrency market:</p>
          <ul>
            <li><a href="/news/article1">Bitcoin Hits New All-Time High</a></li>
            <li><a href="/news/article2">Ethereum 2.0 Launch Date Announced</a></li>
            <li><a href="/news/article3">Regulatory Changes Affecting Crypto Exchanges</a></li>
          </ul>
        </section>
      </div>
    </div>
    </>
  );
};

export default UltimateCryptoPortfolioTracker;