// FearAndGreedIndex.js

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import Header from '../../components/Common/Header';
import { Link } from 'react-router-dom'; 

import CustomFearAndGreedIndicator from '../../components/CustomFearAndGreedIndicator';
import './FearAndGreedIndex.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const FearAndGreedIndex = () => {
  const [fearAndGreedData, setFearAndGreedData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeframe, setTimeframe] = useState('365');

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 14
          }
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function(context) {
            return `Index Value: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          font: {
            size: 12
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          font: {
            size: 12
          }
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    }
  };

  useEffect(() => {
    fetchFearAndGreedData();
  }, [timeframe]);

  const fetchFearAndGreedData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.alternative.me/fng/?limit=${timeframe}`);
      const data = response.data.data;
      
      
      setCurrentIndex(parseInt(data[0].value));

      // Prepare chart data
      const chartData = {
        labels: data.reverse().map(item => new Date(item.timestamp * 1000).toLocaleDateString()),
        datasets: [{
          label: 'Fear and Greed Index',
          data: data.map(item => parseInt(item.value)),
          fill: true,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.4,
          pointRadius: 2,
          pointHoverRadius: 6,
          borderWidth: 2
        }]
      };

      setFearAndGreedData(chartData);
    } catch (err) {
      console.error('Error fetching fear and greed data:', err);
      setError('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const getIndexCategory = (value) => {
    if (value >= 0 && value <= 20) return 'Extreme Fear';
    if (value > 20 && value <= 40) return 'Fear';
    if (value > 40 && value <= 60) return 'Neutral';
    if (value > 60 && value <= 80) return 'Greed';
    return 'Extreme Greed';
  };

  const getIndexClass = (value) => {
    if (value >= 0 && value <= 20) return 'extreme-fear';
    if (value > 20 && value <= 40) return 'fear';
    if (value > 40 && value <= 60) return 'neutral';
    if (value > 60 && value <= 80) return 'greed';
    return 'extreme-greed';
  };

  const getIndexColor = (category) => {
    switch(category) {
      case 'extreme-fear': return '#FF4444';
      case 'fear': return '#FF8800';
      case 'neutral': return '#FFBB33';
      case 'greed': return '#00C851';
      case 'extreme-greed': return '#007E33';
      default: return '#000000';
    }
  };

  const timeframeOptions = [
    { value: '7', label: '1W' },
    { value: '30', label: '1M' },
    { value: '90', label: '3M' },
    { value: '365', label: '1Y' }
  ];

  const categoryDescriptions = [
    { category: 'extreme-fear', title: '0-20: Extreme Fear', description: 'Best time to buy?' },
    { category: 'fear', title: '21-40: Fear', description: 'Investors are fearful' },
    { category: 'neutral', title: '41-60: Neutral', description: 'Holding period' },
    { category: 'greed', title: '61-80: Greed', description: 'Investors are optimistic' },
    { category: 'extreme-greed', title: '81-100: Extreme Greed', description: 'Time to be cautious?' }
  ];

  return (
    <>
      <Header />
   
 
      <div className="fear-greed-container">
        <h1>Crypto Fear & Greed Index</h1>
        {/* <Link to="/advanced-fear-greed" className="nav-link">View Advanced Fear and Greed Indicator</Link> */}
        <CustomFearAndGreedIndicator />
        {/* {currentIndex !== null && (
          <div className={`current-index ${getIndexClass(currentIndex)}`}>
            <h2>Current Index: {currentIndex}</h2>
            <p className="index-category">{getIndexCategory(currentIndex)}</p>
          </div>
        )} */}

        <div className="timeframe-selector">
          {timeframeOptions.map(({ value, label }) => (
            <button 
              key={value}
              className={timeframe === value ? 'active' : ''}
              onClick={() => setTimeframe(value)}
            >
              {label}
            </button>
          ))}
        </div>

        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading chart data...</p>
          </div>
        )}
        
        {error && (
          <div className="error-container">
            <p>{error}</p>
            <button onClick={fetchFearAndGreedData}>Try Again</button>
          </div>
        )}

        {!loading && !error && fearAndGreedData && (
          <div className="chart-container">
            <Line data={fearAndGreedData} options={options} />
            
          </div>
        )}

        <div className="index-explanation">
          <h3>Understanding the Fear & Greed Index</h3>
          <div className="index-categories">
            {categoryDescriptions.map(({ category, title, description }) => (
              <div 
                key={category} 
                className={`category ${category}`}
                style={{ backgroundColor: getIndexColor(category) }}
              >
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FearAndGreedIndex;