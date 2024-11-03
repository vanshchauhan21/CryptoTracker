import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Header from "../../components/Common/Header";
import "./BTCDominance.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

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

function BTCDominance() {
  const [timeframe, setTimeframe] = useState("7");

  // Static data for testing
  const staticData = {
    "7": [
      { date: "2024-01-01", value: 55.6 },
      { date: "2024-01-02", value: 56.2 },
      { date: "2024-01-03", value: 54.8 },
      { date: "2024-01-04", value: 55.4 },
      { date: "2024-01-05", value: 56.7 },
      { date: "2024-01-06", value: 55.9 },
      { date: "2024-01-07", value: 55.6 },
    ],
    "30": [
      { date: "2023-12-08", value: 54.1 },
      { date: "2023-12-15", value: 54.8 },
      { date: "2023-12-22", value: 55.3 },
      { date: "2023-12-29", value: 55.7 },
      { date: "2024-01-07", value: 55.6 },
    ],
  };

  const timeframes = [
    { label: "1W", value: "7" },
    { label: "1M", value: "30" },
    { label: "3M", value: "90" },
    { label: "1Y", value: "365" },
    { label: "ALL", value: "max" },
  ];

  const currentData = staticData[timeframe] || staticData["7"];

  const lowValue = Math.min(...currentData.map(item => item.value));
  const highValue = Math.max(...currentData.map(item => item.value));

  const chartData = {
    labels: currentData.map((item) => item.date),
    datasets: [
      {
        label: "BTC Dominance ",
        data: currentData.map((item) => item.value),
        borderColor: "#F7931A",
        backgroundColor: "rgba(247, 147, 26, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 2,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        callbacks: {
          label: (context) => `${context.parsed.y.toFixed(2)}%`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxTicksLimit: 8,
          color: "#666",
        },
      },
      y: {
        position: "right",
        min: Math.floor(lowValue - 1),
        max: Math.ceil(highValue + 1),
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          callback: (value) => `${value}%`,
          stepSize: 1,
          color: "#666",
        },
      },
    },
  };

  return (
    <>
      <Header />
      <br></br>
      <h1>Bitcoin Dominance Chart</h1>
      <div className="btc-dominance-container">
        <div className="dominance-header">
          <div className="header-left">
           
            <div className="current-stats">
              <span className="current-value">55.6%</span>
              <span className="low-high">
                <span className="low">Low: {lowValue.toFixed(2)}%</span>
                <span className="high">High: {highValue.toFixed(2)}%</span>
              </span>
            </div>
          </div>
          <div className="timeframe-selector">
            {timeframes.map((tf) => (
              <button
                key={tf.value}
                className={`timeframe-button ${timeframe === tf.value ? "active" : ""}`}
                onClick={() => setTimeframe(tf.value)}
              >
                {tf.label}
              </button>
            ))}
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-wrapper" style={{ height: "400px", padding: "20px" }}>
            <Line data={chartData} options={options} />
          </div>
        </div>
      </div>
    </>
  );
}

export default BTCDominance;