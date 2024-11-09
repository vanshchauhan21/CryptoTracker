import React, { useEffect, useState } from 'react';
import './Marketdata.css';
import StartButton from '../../components/Common/StarButton/StartButton';

function RealTimeMarketData() {
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch market data on component mount
  useEffect(() => {
    async function fetchMarketData() {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/global');
        const data = await response.json();
        setMarketData(data);
      } catch (error) {
        console.error("Error fetching market data:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchMarketData();
  }, []);

  return (
    <div className="marketData__container reverseRow">
      <div className="marketDataDescription">
        <div className="headingWrapper">
          <h2 className="title">Real-Time Market Data</h2>
          <p className="description">
            Stay up-to-date with the latest market trends and asset statistics.
            Get a live view of total market cap, 24-hour trading volumes, and the latest
            Bitcoin dominance data.
          </p>
          {loading ? (
            <p>Loading market data...</p>
          ) : (
            <div className="marketStats">
              <h3>Market Overview:</h3>
              <p><strong>Market Cap:</strong> ${marketData.data.total_market_cap.usd.toLocaleString()}</p>
              <p><strong>24h Volume:</strong> ${marketData.data.total_volume.usd.toLocaleString()}</p>
              <p><strong>Bitcoin Dominance:</strong> {marketData.data.market_cap_percentage.btc}%</p>
            </div>
          )}
        </div>
        
        <StartButton />
      </div>

      <div className="marketBanner">
        <img
          alt="Market Banner"
          src="https://static.wixstatic.com/media/3796d3_1981b12f622c415190c4819cfd565b6f~mv2.png/v1/fill/w_900,h_680,al_c,q_90/3796d3_1981b12f622c415190c4819cfd565b6f~mv2.png"
          className="marketBannerImg"
        />
      </div>
    </div>
  );
}

export default RealTimeMarketData;
