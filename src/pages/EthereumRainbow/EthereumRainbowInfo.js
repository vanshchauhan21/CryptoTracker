
import React, { useState } from 'react';
import './EthereumRainbowInfo.css';

const EthereumRainbowInfo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What is the Ethereum Rainbow Chart?",
      answer: "The Ethereum Rainbow Chart is a visual representation of Ethereum's price history using a logarithmic regression model. It features colored bands that indicate various market sentiment levels, helping traders identify potential buy or sell opportunities based on historical price movements."
    },
    {
      question: "How many bands are in the Ethereum Rainbow Chart?",
      answer: "The Ethereum Rainbow Chart typically consists of 6 to 7 colored bands, each representing different market conditions."
    },
    {
      question: "What does the red band in the Rainbow Chart signify?",
      answer: "The red band at the top represents 'Maximum Bubble Territory', indicating that Ethereum is potentially overvalued and might be in a bubble."
    },
    {
      question: "What does the blue/purple band at the bottom represent?",
      answer: "The blue or purple band at the bottom often signifies a 'Buy' or 'Accumulate' zone, suggesting Ethereum might be undervalued."
    },
    {
      question:"Is the Ethereum Rainbow Chart a reliable predictor of future prices?",
      answer: "While useful for visualizing trends, the Rainbow Chart is based on past performance and should not be considered a definitive predictor of future prices."
    }
  ];

  return (
    <div className="ethereum-rainbow-info">
      <h2>Ethereum Rainbow Chart Information</h2>
      <div className="question-list">
        {questions.map((item, index) => (
          <div key={index} className={`question-item ${activeIndex === index ? 'active' : ''}`}>
            <div className="question" onClick={() => toggleQuestion(index)}>
              {item.question}
            </div>
            <div className="answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EthereumRainbowInfo;