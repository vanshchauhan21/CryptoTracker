import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { Line } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto"; // Don't get rid of this

function LineChart({ chartData, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: multiAxis ? true : false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        position: "left",
      },
      ...(multiAxis && { crypto2: { position: "right" } }),
    },
  };
  console.log(chartData);
  return <Line data={chartData} options={options} />;
}

function YourComponent({ title, desc, longDesc, shortDesc, toggle, setToggle, chartData, multiAxis }) {
  // Ensure desc is defined and is a string
  const currentDesc = typeof desc === "string" ? desc : "";

  return (
    <div>
      <style>
        {`
          .frame {
            border: 1px solid var(--black);
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            width: 1782px;
            height: 873px;
          }

          .info-component h1 {
            font-size: 1.2rem;
            margin: 0;
          }

          .info-p a {
            text-decoration: underline;
          }

          .info-p a:hover {
            color: var(--blue) !important;
            transition: all 0.3s;
          }
        `}
      </style>
      <div className="frame">
        <div className="grey-wrapper info-component">
          <h1>{title}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: currentDesc.length >= 300 ? (toggle ? longDesc : shortDesc) : currentDesc,
            }}
            className="info-p"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <LineChart chartData={chartData} multiAxis={multiAxis} /> 
      </div>
    </div>
  );
}

// PropTypes for validating props
YourComponent.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  longDesc: PropTypes.string.isRequired,
  shortDesc: PropTypes.string.isRequired,
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
  chartData: PropTypes.object.isRequired,
  multiAxis: PropTypes.bool.isRequired,
};

// Default props
YourComponent.defaultProps = {
  desc: "", // Set default value for desc
};

export default LineChart;