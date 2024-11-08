

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CustomFearAndGreedIndicator.css'; 

const CustomFearAndGreedIndicator = () => {
  const [indexValue, setIndexValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIndexData = async () => {
      try {
        const response = await axios.get('https://api.alternative.me/fng/');
        const data = response.data.data[0]; 
        setIndexValue(data.value);
      } catch (err) {
        console.error('Error fetching Fear and Greed Index data:', err);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchIndexData();
  }, []);

  const getCategory = (value) => {
    if (value >= 0 && value <= 20) return 'Extreme Fear 😱';
    if (value > 20 && value <= 40) return 'Fear 😟';
    if (value > 40 && value <= 60) return 'Neutral 😐';
    if (value > 60 && value <= 80) return 'Greed 😊';
    return 'Extreme Greed 😄';
  };

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="custom-fear-greed-indicator">

      <div className="indicator-value">
        <span className="value">{indexValue}</span>
        <span className="category">{getCategory(indexValue)}</span>
      </div>
      <div className="indicator-bar-container">
        <div className="indicator-bar" style={{ width: `${indexValue}%`, backgroundColor: getBarColor(indexValue) }} />
      </div>
      <div className="last-updated">Last updated: {new Date().toLocaleTimeString()}</div>
    </div>
  );
};

const getBarColor = (value) => {
  if (value <= 20) return '#F02935'; // Red for extreme fear
  if (value <= 40) return '#F07D29'; // Orange for fear
  if (value <= 60) return '#9ACB82'; // Yellow for neutral
  if (value <= 80) return '#34B349'; // Light green for greed
  return '#00FF00'; // Green for extreme greed
};

export default CustomFearAndGreedIndicator;