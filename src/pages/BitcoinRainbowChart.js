import React from "react";
import { Line } from "react-chartjs-2";
import Header from "../components/Common/Header";
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
  // Define the labels for the X-axis
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
  ];

  // Define Rainbow bands
  const rainbowBands = [
    { label: "Bubble", color: "rgba(255, 0, 0, 0.2)" },
    { label: "FOMO", color: "rgba(255, 165, 0, 0.2)" },
    { label: "HODL", color: "rgba(255, 255, 0, 0.2)" },
    { label: "Safe", color: "rgba(0, 255, 0, 0.2)" },
    { label: "Buy", color: "rgba(0, 0, 255, 0.2)" },
    { label: "Fire Sale", color: "rgba(75, 0, 130, 0.2)" },
  ];

  // Define the datasets for the chart
  const datasets = [
    {
      label: "Bitcoin Price",
      data: [200, 500, 2000, 8000, 10000, 20000, 30000, 40000, 60000],
      borderColor: "#ffa500",
      backgroundColor: "rgba(255,165,0,0.4)",
      fill: false,
      tension: 0.1,
    },
    ...rainbowBands.map((band, index) => ({
      label: band.label,
      data: Array(labels.length).fill(500 * (index + 1)), // Simulate data for each band level
      borderColor: band.color,
      backgroundColor: band.color,
      fill: true,
    })),
  ];

  // Define the data object
  const data = {
    labels,
    datasets,
  };

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
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BitcoinRainbowChart;
