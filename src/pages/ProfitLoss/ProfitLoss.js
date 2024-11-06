import React from 'react';
import './ProfitLoss.css'; // Assuming you are styling with a separate CSS file
import Header from '../../components/Common/Header';
import Feedback from '../../components/Feedback/Feedbacksection';


function ProfitLoss() {
  return (
    <>
    <Header/>
    <div className="profit-loss-container">
      <h1 className="title">Portfolio Profit & Loss Overview</h1>
      
      <section className="section">
        <h2>What is Profit and Loss?</h2>
        <p>
          Profit and Loss (P&L) in a portfolio shows the net gain or loss of an asset based on its current value compared to its purchase price.
          This metric helps investors track their performance over time and evaluate their investments' success.
        </p>
      </section>

      <section className="section">
        <h2>How is Profit and Loss Calculated?</h2>
        <p>
          P&L is calculated as:
        </p>
        <div className="formula">
          <p><strong>Profit/Loss = (Current Value - Purchase Value)</strong></p>
          <p>
            For example, if you purchased Bitcoin at $30,000 and its current value is $35,000, your profit is $5,000.
            If the current value drops below the purchase value, it indicates a loss.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Tracking P&L in Crypto Tracker</h2>
        <p>
          In the Crypto Tracker app, you can view your profit or loss for each asset by navigating to your portfolio and selecting an asset.
          The profit/loss section shows how each asset has performed since you purchased it.
        </p>
      </section>

      <section className="section">
        <h2>Why Tracking P&L is Important</h2>
        <p>
          Monitoring P&L helps you make informed decisions about your portfolio. It allows you to determine when it might be best to hold,
          buy more, or sell an asset to maximize your gains or minimize losses.
        </p>
      </section>
    </div>
    <Feedback />

    </>

  );
}

export default ProfitLoss;
