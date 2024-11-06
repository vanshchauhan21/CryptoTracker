import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Header from "../../components/Common/Header";
import axios from "axios";
import EthereumRainbowInfo from './EthereumRainbowInfo';
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Tooltip,
  Legend,
  LogarithmicScale,
} from "chart.js";

ChartJS.register(
  LineElement,
  LinearScale,
  LogarithmicScale,
  PointElement,
  CategoryScale,
  Tooltip,
  Legend
);

const EthereumRainbowChart = () => {
  const [ethPrices, setEthPrices] = useState([]);

  // Update the labels array to include 2024
  const labels = [
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
  ];

  const rainbowBands = [
    { label: "Bubble", color: "rgba(255, 0, 0, 0.2)" },
    { label: "FOMO", color: "rgba(255, 165, 0, 0.2)" },
    { label: "HODL", color: "rgba(255, 255, 0, 0.2)" },
    { label: "Safe", color: "rgba(0, 255, 0, 0.2)" },
    { label: "Buy", color: "rgba(0, 0, 255, 0.2)" },
    { label: "Fire Sale", color: "rgba(75, 0, 130, 0.2)" },
  ];

  useEffect(() => {
    const fetchEthereumPrices = async () => {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/ethereum/market_chart", {
          params: {
            vs_currency: "usd",
            days: "365", // Get prices for the last year
            interval: "daily",
          },
        });
        const prices = response.data.prices.map(priceData => priceData[1]); // Get only the price values
        setEthPrices(prices);
      } catch (error) {
        console.error("Error fetching Ethereum prices:", error);
      }
    };

    fetchEthereumPrices();
  }, []);

  const datasets = [
    {
      label: "Ethereum Price",
      data: ethPrices.slice(-labels.length), // Get the latest prices for the labels
      borderColor: "#3c3c3d",
      backgroundColor: "rgba(60, 60, 61, 0.4)",
      fill: false,
      tension: 0.1,
    },
    ...rainbowBands.map((band, index) => ({
      label: band.label,
      data: Array(labels.length).fill(100 * (index + 1)),
      borderColor: band.color,
      backgroundColor: band.color,
      fill: true,
    })),
  ];

  const data = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        type: "logarithmic",
        ticks: {
          callback: (value) => "$" + value.toLocaleString(),
          min: 1,
          max: Math.max(...ethPrices) * 1.1, // Dynamic max value based on fetched prices
        },
      },
      x: {
        grid: { display: false },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.dataset.label}: $${tooltipItem.raw.toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div>
      <Header />
      <div style={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
        <h2 style={{ color: "purple", fontSize: "2.6rem", marginBottom: "30px" }}>
          Ethereum Rainbow Chart
        </h2>
        <Line data={data} options={options} />
        <EthereumRainbowInfo />
      </div>
    </div>
  );
};

export default EthereumRainbowChart;
