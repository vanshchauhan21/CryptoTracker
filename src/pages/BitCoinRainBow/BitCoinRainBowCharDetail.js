import React, { useEffect } from 'react';
import './BitCoinRainBowCharDetail.css';
import Header from '../../components/Common/Header';

function BitCoinRainBowCharDetail() {
  // Scroll to top when component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      <Header />
      <div className="bitcoin-rainbow-chart-container">
        <h1>Bitcoin Rainbow Chart Indicator</h1>
        <p>
          The <strong>Bitcoin Rainbow Chart</strong> is a visual representation
          of Bitcoin's price over time, with different colored bands that represent
          different levels of market sentiment and price predictions. It was created
          to help investors make sense of Bitcoin's volatility and provide some
          guidance on when to buy or sell.
        </p>
        <h2>How to Interpret the Rainbow Chart</h2>
        <p>
          The rainbow chart uses a series of color bands to represent various stages
          of market cycles. The color bands change depending on Bitcoin's price, and
          each color is associated with a specific level of risk:
        </p>
        <ul>
          <li><strong>Red</strong> – Overpriced, indicating a bear market could be approaching.</li>
          <li><strong>Yellow to Green</strong> – Represents a "buy" signal, where Bitcoin is considered undervalued.</li>
          <li><strong>Blue</strong> – Extremely undervalued, and a strong buy signal for investors.</li>
        </ul>
        <p>
          The chart is not an exact science, and it’s important to combine it with
          other technical analysis tools for making informed investment decisions.
        </p>
      </div>
    </>
  );
}

export default BitCoinRainBowCharDetail;
