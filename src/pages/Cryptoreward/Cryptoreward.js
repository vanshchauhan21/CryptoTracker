import React from 'react';
import './Cryptoreward.css';
import Header from '../../components/Common/Header';
import Feedback from '../../components/Feedback/Feedbacksection';

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
          By actively using the Crypto Tracker app, you can accumulate points that can be redeemed for various benefits, such as discounts, exclusive content, and more.
        </p>
        <p>
          This rewards program aims to incentivize user engagement and loyalty, encouraging you to explore the full capabilities of the app while enhancing your trading experience.
        </p>
      </section>

      <section className="section">
        <h2>How to Earn Rewards</h2>
        <p>
          Earning rewards in Crypto Tracker is simple and fun! Here are some effective ways you can accumulate points:
        </p>
        <ul className="earn-list">
          <li><strong>Daily Check-ins:</strong> Earn points just for logging into the app each day. Regular engagement keeps you updated on the latest market trends!</li>
          <li><strong>Tracking Portfolio:</strong> Add and track new assets in your portfolio to gain additional points. The more diverse your portfolio, the more points you earn!</li>
          <li><strong>Completing Challenges:</strong> Participate in app challenges, like achieving a specific portfolio value, to earn bonus points. These challenges are updated frequently, so check back often!</li>
          <li><strong>Referral Program:</strong> Invite friends to join the Crypto Tracker app. For every friend who signs up using your referral link, you both receive bonus points!</li>
          <li><strong>Sharing Insights:</strong> Share your investment strategies and insights through the app. Contributing valuable content to the community rewards you with points.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Benefits of Rewards</h2>
        <p>
          Rewards can be redeemed for various perks within the app. Here are some exciting benefits of earning rewards:
        </p>
        <ul className="benefits-list">
          <li><strong>Discounts on Premium Features:</strong> Use rewards points to unlock premium features at a reduced cost, making advanced tools more accessible.</li>
          <li><strong>Exclusive Content:</strong> Access exclusive educational resources, such as webinars and market analysis, that help you make informed decisions.</li>
          <li><strong>Fee Reductions:</strong> Reduce trading or transaction fees by redeeming your points, maximizing your profits on trades.</li>
          <li><strong>Access to VIP Events:</strong> Earn invitations to exclusive events and webinars hosted by industry experts, where you can network and learn.</li>
          <li><strong>Special Merchandise:</strong> Redeem points for branded merchandise and other physical rewards, showcasing your commitment to the Crypto Tracker community.</li>
        </ul>
      </section>

      <section className="section">
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
      </section>
    </div>
    <Feedback />


    </>
  );
}

export default Cryptoreward;
