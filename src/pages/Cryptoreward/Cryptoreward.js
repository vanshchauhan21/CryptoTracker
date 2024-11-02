import React from 'react';
import './Cryptoreward.css';
import Header from '../../components/Common/Header';

function Cryptoreward() {
  return (
    <>
      <Header />
      <div className="crypto-rewards-container">
        <h1 className="title">Learn About Crypto Tracker Rewards</h1>
        
        <section className="section">
          <h2>What are Crypto Tracker Rewards?</h2>
          <p>
            Crypto Tracker Rewards are a unique program that allows users to earn rewards for their activities within the app.
            By actively using the Crypto Tracker app, you can accumulate points that can be redeemed for various benefits.
          </p>
        </section>

        <section className="section">
          <h2>How to Earn Rewards</h2>
          <p>
            Earning rewards in Crypto Tracker is simple. Here are some ways you can accumulate points:
          </p>
          <ul className="earn-list">
            <li><strong>Daily Check-ins:</strong> Earn points just for logging into the app each day.</li>
            <li><strong>Tracking Portfolio:</strong> Add and track new assets in your portfolio to gain additional points.</li>
            <li><strong>Completing Challenges:</strong> Participate in app challenges, like achieving a specific portfolio value, to earn bonus points.</li>
          </ul>
        </section>

        <section className="section">
          <h2>Benefits of Rewards</h2>
          <p>
            Rewards can be redeemed for various perks within the app. Here are some benefits of earning rewards:
          </p>
          <ul className="benefits-list">
            <li><strong>Discounts on Premium Features:</strong> Use rewards points to unlock premium features at a reduced cost.</li>
            <li><strong>Exclusive Content:</strong> Access exclusive educational resources or insights into market trends.</li>
            <li><strong>Fee Reductions:</strong> Reduce trading or transaction fees by redeeming your points.</li>
          </ul>
        </section>

        <section className="section">
          <h2>How to Redeem Rewards</h2>
          <p>
            To redeem your rewards, go to the rewards section in the app and browse available options. Simply select a perk and follow the instructions to complete the redemption.
            The app will notify you once the benefit is activated or applied to your account.
          </p>
        </section>
      </div>
    </>
  );
}

export default Cryptoreward;
