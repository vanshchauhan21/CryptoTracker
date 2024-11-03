import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Header from "../../components/Common/Header";
import "./BitcoinRainbowChart.css";
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

const BitcoinRainbowChart = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [loading, setLoading] = useState(true);

  // Define Rainbow bands
  const rainbowBands = [
    { label: "Bubble", color: "rgba(255, 0, 0, 0.2)" },
    { label: "FOMO", color: "rgba(255, 165, 0, 0.2)" },
    { label: "HODL", color: "rgba(255, 255, 0, 0.2)" },
    { label: "Safe", color: "rgba(0, 255, 0, 0.2)" },
    { label: "Buy", color: "rgba(0, 0, 255, 0.2)" },
    { label: "Fire Sale", color: "rgba(75, 0, 130, 0.2)" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch historical Bitcoin prices from CoinGecko API
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365"
        );
        const data = await response.json();

        // Extract price data and corresponding timestamps
        const prices = data.prices.map(([timestamp, price]) => ({
          time: new Date(timestamp).getFullYear(),
          price,
        }));

        // Prepare data for chart
        const uniqueYears = [...new Set(prices.map(p => p.time))];
        const priceData = uniqueYears.map(year => {
          const priceEntry = prices.find(p => p.time === year);
          return priceEntry ? priceEntry.price : null; // Handle missing data
        });

        const datasets = [
          {
            label: "Bitcoin Price",
            data: priceData,
            borderColor: "#ffa500",
            backgroundColor: "rgba(255,165,0,0.4)",
            fill: false,
            tension: 0.1,
          },
          ...rainbowBands.map((band, index) => ({
            label: band.label,
            data: Array(uniqueYears.length).fill(500 * (index + 1)), // Simulate data for each band level
            borderColor: band.color,
            backgroundColor: band.color,
            fill: true,
          })),
        ];

        setChartData({ labels: uniqueYears, datasets });
      } catch (error) {
        console.error("Error fetching Bitcoin price data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Define the chart options
  const options = {
    responsive: true,
    scales: {
      y: {
        type: "logarithmic",
        ticks: {
          callback: (value) => "$" + value.toLocaleString(),
          min: 100,
          max: 100000,
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
    },
  };

  return (
    <div>
      <Header />
      <div style={{ width: "80%", margin: "auto", paddingTop: "20px" }}>
        <h2 style={{ color: "blue", fontSize: "2.6rem", marginBottom: "30px" }}>
          Bitcoin Rainbow Chart
        </h2>
        {loading ? (
          <p>Loading chart data...</p>
        ) : (
          <Line data={chartData} options={options} />
        )}
      </div>
      {/* ...rest of your component... */}
    </div>
  );
};

export default BitcoinRainbowChart;
