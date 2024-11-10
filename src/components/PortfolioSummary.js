

import React from 'react';

const PortfolioSummary = () => {
  const totalInvestment = 10000; 
  const currentValue = 12000; 
  const profitLoss = currentValue - totalInvestment;

  return (
    <div>
      <h3>Portfolio Summary</h3>
      <p><strong>Total Investment:</strong> ${totalInvestment.toLocaleString()}</p>
      <p><strong>Current Value:</strong> ${currentValue.toLocaleString()}</p>
      <p><strong>Profit/Loss:</strong> ${profitLoss.toLocaleString()} ({((profitLoss / totalInvestment) * 100).toFixed(2)}%)</p>
    </div>
  );
};

export default PortfolioSummary;