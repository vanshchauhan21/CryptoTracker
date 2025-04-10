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
        setMarketData(data || null);
      } catch (error) {
        console.error("Error fetching market data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMarketData();
  }, []);

  return (
    <div className="marketData__container gap-4 md:gap-[5rem] flex flex-col-reverse justify-center items-center md:flex-row-reverse p-0 m-0 md:p-[1rem] md:m-[2rem]  rounded-lg md:max-w-[97%] mx-auto">
      <div className="max-w-[100%] md:max-w-[50%] ">
        <div className="headingWrapper">
          <h2 className="title">Real-Time Market Data</h2>
          <p className="description w-[300px] text-center mx-auto md:w-[600px]">
            Stay up-to-date with the latest market trends and asset statistics.
            Get a live view of total market cap, 24-hour trading volumes, and the latest
            Bitcoin dominance data.
          </p>
          {loading ? (
            <p>Loading market data...</p>
          ) : (
            <div className="marketStats text-xs md:text-[1rem] text-center md:text-left p-4 mx-auto">
              <h3>Market Overview</h3>
              <p><strong>Market Cap:</strong> ${marketData.data.total_market_cap.usd.toLocaleString()}</p>
              <p><strong>24h Volume:</strong> ${marketData.data.total_volume.usd.toLocaleString()}</p>
              <p><strong>Bitcoin Dominance:</strong> {marketData.data.market_cap_percentage.btc}%</p>
            </div>
          )}
        </div>

        <div className='w-[80%] md:w-full mx-auto'>
          <StartButton />
        </div>
      </div>

      <div className="marketBanner">
        <img
          alt="Market Banner"
          src="https://static.wixstatic.com/media/3796d3_1981b12f622c415190c4819cfd565b6f~mv2.png/v1/fill/w_900,h_680,al_c,q_90/3796d3_1981b12f622c415190c4819cfd565b6f~mv2.png"
          className="marketBannerImg w-[300px] md:w-[500px] mt-[30px]"
        />
      </div>
    </div>
  );
}

export default RealTimeMarketData;
