
import React, { useState } from 'react';
import './BitcoinRainbowInfo.css';
import { useNavigate } from 'react-router-dom';

const BitcoinRainbowInfo = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const handleButtonClick = () => {
    // Programmatically navigate to the "bitcoin-rainbow-chart-detail" route
    navigate('/charts/bitcoin-rainbow-chart-detail');
  };

  const questions = [
    {
      question: "What is the Bitcoin Rainbow Chart?",
      answer: "The Bitcoin Rainbow Chart is a long-term price prediction model for Bitcoin. It uses logarithmic regression and standard deviation bands to create a colorful range of price predictions."
    },
    {
      question: "How does the Bitcoin Rainbow Chart work?",
      answer: "The chart divides the price of Bitcoin into different colored bands, each representing a different market sentiment from 'Fire Sale' to 'Maximum Bubble'. It's based on historical price data and logarithmic growth curves."
    },
    {
      question: "Is the Bitcoin Rainbow Chart accurate?",
      answer: "While the Rainbow Chart has shown some correlation with Bitcoin's price history, it's important to note that it's not a guaranteed predictor of future prices. It should be used as one of many tools for analysis."
    },
    {
      question: "What do the different colors mean?",
      answer: "The colors range from cool (blues and greens) to warm (yellows and reds). Cool colors generally indicate buying opportunities, while warm colors suggest potential selling points."
    },
    {
      question: "How often is the Bitcoin Rainbow Chart updated?",
      answer: "The chart is typically updated daily based on the closing price of Bitcoin. However, its long-term nature means that day-to-day changes are usually minimal."
    }
  ];

  return (
    <div className="bitcoin-rainbow-info">
      <div className='head-btn'>

        <h2>Bitcoin Rainbow Chart Information</h2>
        <button onClick={handleButtonClick}>Read More</button>



      </div>
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

export default BitcoinRainbowInfo;