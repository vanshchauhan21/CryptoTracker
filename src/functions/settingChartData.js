import { gettingDate } from "./getDate";
// it is used to format data for charts
// if price2 is exits then we call setchardata to update the states 
export const settingChartData = (setChartData, prices1, prices2) => {
  if (prices2) {
    setChartData({
      labels: prices1?.map((data) => gettingDate(data[0])),
      datasets: [
        {
          label: "Crypto 1",
          data: prices1?.map((data) => data[1].toFixed(2)),
          borderWidth: 1,
          fill: false,
          backgroundColor: "rgba(198, 0, 0, 0.72)",
          tension: 0.25,
          borderColor: "rgb(8,153,129)",
          // (27,161,139) (20,158,136) (47,170,149)
          pointRadius: 0,
          yAxisID: "crypto1",
        },
        {
          label: "Crypto 2",
          data: prices2?.map((data) => data[1].toFixed(2)),
          backgroundColor:"rgba(58, 128, 233,0.8)",
          borderWidth: 1,
          fill: false,
          tension: 0.25,
          borderColor: "rgb(242,54,69)",
          pointRadius: 0,
          yAxisID: "crypto2",
        },
      ],
    });
  } else {
    setChartData({
      labels: prices1?.map((data) => gettingDate(data[0])),
      datasets: [
        {
          data: prices1?.map((data) => data[1].toFixed(2)),
          borderWidth: 1,
          fill: true,
          backgroundColor: "rgba(58, 128, 233,0.1)",
          tension: 0.25,
          borderColor: "rgb(8,153,129)",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ],
    });
  }
};
