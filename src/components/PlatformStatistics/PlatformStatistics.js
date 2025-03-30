import React from 'react';
import './PlatformStatistics.css';

const PlatformStatistics = () => {
  const stats = [
    {
      number: "100+",
      title: "Exchanges",
      description: "Track your crypto on Binance, Coinbase and more.",
    },
    {
      number: "200+",
      title: "Wallets",
      description: "Manage assets on Trust Wallet, MetaMask and more.",
    },
    {
      number: "1,000+",
      title: "DeFi Protocols",
      description: "Track and manage all your DeFi protocols and 10+ chains.",
    },
    {
      number: "20,000+",
      title: "Coins",
      description: "Track and manage any coin, set custom alerts and more.",
    },
  ];

  return (
    <div className="platform-statistics-container">
      {stats.map((stat, index) => (
        <div className="platform-statistics-item" key={index}>
          <div className="platform-statistics-header">
            <div className="platform-statistics-inner">
              <span className='platform-statistics-number'>{stat.number}</span> <br />
              <p className="platform-statistics-title">
                <span className="platform-statistics-highlighted">{stat.title}</span>
              </p>
              <p className="platform-statistics-description">{stat.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlatformStatistics;
