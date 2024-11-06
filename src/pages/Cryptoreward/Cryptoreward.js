import React, { useState } from 'react';
import Header from '../../components/Common/Header';
import CrytpoDataJson from './cryptoRewardsData.json'; // Importing JSON directly
import './CryptoReward.css';

function CryptoReward() {
  const [cryptoRewardsData, setCryptoRewardsData] = useState(CrytpoDataJson); // Directly use the imported JSON data

  if (!cryptoRewardsData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="crypto-rewards-container">
        <h1 className="title">{cryptoRewardsData.intro.title}</h1>
        <p>{cryptoRewardsData.intro.description}</p>

        <div className="Earn-section">
          <h2>How to Earn Crypto Tracker Rewards</h2>
          <ul>
            {cryptoRewardsData.howToEarn.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="Benefit-section">
          <h2>Benefits of Rewards</h2>
          <ul>
            {cryptoRewardsData.benefits.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>

        <div className="Reward-section">
          <h2>How to Redeem Rewards</h2>
          <ol>
            {cryptoRewardsData.howToRedeem.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default CryptoReward;
