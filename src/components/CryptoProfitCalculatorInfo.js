import React from 'react';
import './CryptoProfitCalculatorInfo.css';

const CryptoProfitCalculatorInfo = () => {
    return (
        <div className="info-container">
            <h2 className="info-title">Information Hub</h2>
            <p className="info-overview">
                The CryptoProfit Calculator is an essential tool for cryptocurrency investors looking to evaluate their potential profits or losses. By providing key financial inputs, this calculator helps you make informed decisions and optimize your trading strategies effectively.
            </p>
            <h3 className="info-subtitle">How It Works</h3>
            <p className="info-description">
                To utilize the calculator, follow these simple steps:
            </p>
            <ul className="info-steps">
                <li><strong>Initial Investment:</strong> Enter the total amount you invested initially.</li>
                <li><strong>Buy Price:</strong> Input the price at which you purchased the cryptocurrency.</li>
                <li><strong>Current Price:</strong> Provide the current market price of the cryptocurrency.</li>
            </ul>
            <p className="info-final-note">
                After entering your data, click the "Calculate" button to view your profit or loss percentage, as well as the actual dollar amount. This information can guide your future investment decisions.
            </p>
            <h3 className="info-subtitle">Tips for Accurate Calculations</h3>
            <ul className="info-tips">
                <li>Ensure all input values are in the same currency (e.g., USD) for consistency.</li>
                <li>Double-check your buy price and current price to avoid errors.</li>
                <li>Utilize real-time data for the current price to achieve the most accurate results.</li>
                <li>Account for any transaction fees that may impact your overall profit or loss.</li>
            </ul>
        </div>
    );
};

export default CryptoProfitCalculatorInfo;