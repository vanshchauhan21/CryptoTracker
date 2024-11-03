import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineGraph = ({ data }) => {
  // Prepare data for the chart
  const chartData = {
    labels: data.map(price => new Date(price[0]).toLocaleDateString()), // Dates for the x-axis
    datasets: [
      {
        data: data.map(price => price[1]), // Prices for the y-axis
        borderColor: '#8884d8',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
      },
    },
  };

  return (
    <div style={{ width: '200px', height: '60px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineGraph;
