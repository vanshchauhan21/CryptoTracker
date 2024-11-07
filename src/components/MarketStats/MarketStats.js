import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MarketStats.css';

const MarketStats = () => {
    const [marketData, setMarketData] = useState({
        btcDominance: 0,
        totalMarketCap: 0,
        volume24h: 0,
        altcoinShare: 0,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const response = await axios.get('https://api.coingecko.com/api/v3/global');
                const data = response.data.data;

                setMarketData({
                    btcDominance: parseFloat(data.market_cap_percentage.btc).toFixed(2),
                    totalMarketCap: data.total_market_cap.usd,
                    volume24h: data.total_volume.usd,
                    altcoinShare: parseFloat(100 - data.market_cap_percentage.btc).toFixed(2),
                });
                setLoading(false);
            } catch (error) {
                setError("Error fetching market data. Please try again later.");
                setLoading(false);
            }
        };

        fetchMarketData();
    }, []);

    const formatNumber = (num) => {
        return new Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'short' }).format(num);
    };

    return (
        <div className="market-stats">
            {loading ? (
                <p>Loading market data...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>BTC Dominance</h3>
                        <p>{marketData.btcDominance}%</p>
                    </div>
                    <div className="stat-card">
                        <h3>Total Market Cap</h3>
                        <p>${formatNumber(marketData.totalMarketCap)}</p>
                    </div>
                    <div className="stat-card">
                        <h3>24-Hour Volume</h3>
                        <p>${formatNumber(marketData.volume24h)}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Altcoin Market Share</h3>
                        <p>{marketData.altcoinShare}%</p>
                    </div>
                </div>
            )}

            <div className='about-bitcoin'>
                <p>The Bitcoin Dominance Indicator measures Bitcoin’s share of the overall cryptocurrency market. A high BTC dominance often suggests that investors favor Bitcoin over altcoins, typically reflecting stability or risk aversion in the market. A lower dominance can signal increased interest in altcoins, with investors potentially seeking diversification.</p>
            </div>
        </div>
    );
};

export default MarketStats;
