import React, { useState } from 'react';
import Header from '../../components/Common/Header';
import Feedback from '../../components/Feedback/Feedbacksection';
import CrytpoDataJson from './cryptoRewardsData.json'; // Importing JSON directly
import './Cryptoreward.css';

function CryptoReward() {
  const [cryptoRewardsData, setCryptoRewardsData] = useState(CrytpoDataJson); // Directly use the imported JSON data

  if (!cryptoRewardsData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="Reward-container">
        <h1 className="title-t">{cryptoRewardsData.intro.title}</h1>
        <p>{cryptoRewardsData.intro.description}</p>

        {/* Earn Rewards Section */}
        <div className="earn-reward">
          <h2>How to Earn Crypto Tracker Rewards</h2>
          <ul>
            {cryptoRewardsData.howToEarn.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>

        {/* Redeem Rewards Section */}
      
        <div className="redeem-reward">
          <h2>How to Redeem Rewards</h2>
          <p>
            To redeem your rewards, follow these simple steps:
          </p>
          <ol>
            <li>Navigate to the <strong>Rewards</strong> section in the app's main menu.</li>
            <li>Browse through the available options to see all the perks you can redeem.</li>
            <li>Select a perk that interests you, such as a discount on a premium feature or exclusive content.</li>
            <li>Follow the prompts to complete the redemption process. Ensure that you have enough points to claim your desired perk.</li>
            <li>Once you’ve redeemed a benefit, the app will notify you of its activation or application to your account. Enjoy your reward!</li>
          </ol>
          <p>
            Be sure to check back regularly, as new rewards and options are added frequently to keep the experience fresh and exciting!
          </p>
        </div>

    

        {/* Benefits Section */}
        <div className="benefit-reward">
          <h2>Benefits of Rewards</h2>
          <ul>
            {cryptoRewardsData.benefits.map((item, index) => (
              <li key={index}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
          {/* Feedback Section */}
          <Feedback />
    </>
  );
}

export default CryptoReward;
