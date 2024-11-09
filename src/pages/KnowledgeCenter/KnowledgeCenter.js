import React from 'react';
import './KnowledgeCenter.css';
// import Header from '../../components/Common/Header';

const KnowledgeCenter = () => {
  return (
    <div className="knowledge-center">
      {/* <Header /> */}
      <h1>Margin Calculator Knowledge Center</h1>
      <section>
        <h2>What is Margin?</h2>
        <p>
          Margin refers to the difference between the cost of a product and its selling price. It is a crucial metric for businesses to understand their profitability and pricing strategies.
        </p>
        <p>
          In simple terms, a higher margin means more profit per sale, which is essential for sustaining business operations and growth.
        </p>
      </section>
      <section>
        <h2>Why is Understanding Margin Important?</h2>
        <p>
          Understanding your margin is vital for several reasons:
        </p>
        <ul>
          <li><strong>Informed Pricing Decisions:</strong> Knowing your margin helps you set competitive prices while ensuring profitability.</li>
          <li><strong>Cost Management:</strong> It allows you to analyze and manage your costs effectively, identifying areas where you can reduce expenses.</li>
          <li><strong>Financial Health Assessment:</strong> Regularly monitoring your margin helps assess the overall financial health of your business and make necessary adjustments.</li>
        </ul>
      </section>
      <section>
        <h2>How to Calculate Margin</h2>
        <p>
          The formula for calculating margin is: 
          <strong> Margin (%) = ((Selling Price - Cost Price) / Selling Price) * 100</strong>
        </p>
        <p>
          For example, if you purchased a product for $30 and sell it for $50, your margin would be:
        </p>
        <p>
          <strong>Margin = (($50 - $30) / $50) * 100 = 40%</strong>
        </p>
      </section>
      <section>
        <h2>Strategies to Improve Your Margin</h2>
        <p>Here are some effective strategies to enhance your margin:</p>
        <ul>
          <li>Optimize your supply chain to reduce production costs.</li>
          <li>Implement dynamic pricing strategies to maximize revenue.</li>
          <li>Focus on high-margin products and services.</li>
          <li>Regularly review and adjust your pricing based on market trends.</li>
          <li>Enhance customer experience to drive repeat business and referrals.</li>
        </ul>
      </section>
    </div>
  );
};

export default KnowledgeCenter;