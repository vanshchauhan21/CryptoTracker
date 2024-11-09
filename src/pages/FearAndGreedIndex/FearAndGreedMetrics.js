import React from 'react';
import './FearAndGreedMetrics.css';
import { FaChartLine, FaVolumeUp, FaComments, FaPoll, FaDollarSign, FaBalanceScale } from 'react-icons/fa';

const FearAndGreedMetrics = () => {
  const metricsData = [
    {
      title: "Market Volatility",
      icon: <FaChartLine />,
      description: "Market volatility measures the degree of price fluctuations. High volatility indicates fear among investors, while low volatility suggests a more stable market, often associated with greed.",
      example: "For instance, during a market crash, volatility spikes, signaling fear."
    },
    {
      title: "Trading Volume",
      icon: <FaVolumeUp />,
      description: "Trading volume reflects the total number of assets traded. Increased trading volume often signifies heightened interest and can indicate whether investors are feeling greedy or fearful.",
      example: "A surge in trading volume can indicate a strong bullish sentiment."
    },
    {
      title: "Momentum",
      icon: <FaChartLine />,
      description: "Momentum assesses the speed of price movements. Rapid price increases can lead to greed, while sharp declines often trigger fear.",
      example: "If Bitcoin's price rises rapidly, it may lead to a greedy market sentiment."
    },
    {
      title: "Social Media Sentiment",
      icon: <FaComments />,
      description: "Analysis of social media platforms helps gauge public sentiment towards cryptocurrencies, influencing the Fear & Greed Index.",
      example: "Positive tweets about a cryptocurrency can drive up its price."
    },
    {
      title: "Survey Data",
      icon: <FaPoll />,
      description: "Regular surveys of investors provide insights into their feelings about the market, contributing to the index's overall score.",
      example: "Surveys indicating high investor confidence can signal a greedy market."
    },
    {
      title: "Dominance Statistics",
      icon: <FaBalanceScale />,
      description: "The market dominance of major cryptocurrencies like Bitcoin impacts sentiment, as a drop in dominance might indicate fear among investors.",
      example: "If Bitcoin's dominance falls below 40%, it may indicate a shift in market sentiment."
    }
  ];

  return (
    <section className="metrics-section">
      <h2>Unveiling the Metrics Behind the Fear & Greed Index</h2>
      <p>
        The Fear & Greed Index is a powerful tool used to gauge the market sentiment of cryptocurrency investors. Several critical factors drive this index, including:
      </p>
      <div className="metrics-grid">
        {metricsData.map((metric, index) => (
          <div key={index} className="metric-card">
            <div className="metric-icon">{metric.icon}</div>
            <h3>{metric.title}</h3>
            <p>{metric.description}</p>
            <p className="example"><strong>Example:</strong> {metric.example}</p>
          </div>
        ))}
      </div>
      <p>
        Understanding these metrics can help investors make informed decisions based on market sentiment and trends. By keeping an eye on these indicators, you can better anticipate market movements and adjust your strategies accordingly.
      </p>
    </section>
  );
};

export default FearAndGreedMetrics;