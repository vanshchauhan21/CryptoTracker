import React, { useState } from 'react';
import './BTCDominanceInfo.css';

const BTCDominanceInfo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What is Bitcoin Dominance?",
      answer: "Bitcoin dominance is the percentage of the total cryptocurrency market capitalization that Bitcoin represents. It indicates Bitcoin's relative size and influence in the entire crypto market."
    },
    {
      question: "How is Bitcoin Dominance Calculated?",
      answer: "Bitcoin dominance is calculated by dividing Bitcoin's market capitalization by the total market capitalization of all cryptocurrencies, then multiplying by 100 to get a percentage."
    },
    {
      question: "Why is Bitcoin Dominance Important?",
      answer: "Bitcoin dominance helps investors understand market trends, investor sentiment, and the relative strength of Bitcoin compared to other cryptocurrencies. It can indicate whether investors are focusing on Bitcoin or exploring alternative cryptocurrencies."
    },
    {
      question: "What Does a High Bitcoin Dominance Mean?",
      answer: "A high Bitcoin dominance suggests that investors are more confident in Bitcoin and are allocating more of their capital to it. It might indicate a more conservative or risk-averse market sentiment."
    },
    {
      question: "What Does a Low Bitcoin Dominance Mean?",
      answer: "A low Bitcoin dominance typically indicates that investors are more interested in alternative cryptocurrencies (altcoins). This could suggest a more speculative or experimental market phase."
    }
  ];

  const keyConcepts = [
    {
      title: "Market Capitalization Dynamics",
      description: "Bitcoin dominance reflects the total value of Bitcoin relative to other cryptocurrencies. As new cryptocurrencies emerge and gain value, Bitcoin's dominance can fluctuate."
    },
    {
      title: "Investor Sentiment Indicator",
      description: "Changes in Bitcoin dominance can provide insights into market psychology. A rising dominance might indicate a 'flight to safety', while a declining dominance could suggest increased interest in alternative cryptocurrencies."
    },
    {
      title: "Altcoin Cycles",
      description: "Historically, periods of low Bitcoin dominance often coincide with 'altcoin seasons', where alternative cryptocurrencies experience significant price appreciation and increased investor attention."
    }
  ];

  const importantDetails = [
    {
      title: "Historical Context",
      description: "In the early days of cryptocurrency, Bitcoin dominated nearly 100% of the market. Over time, the emergence of Ethereum, DeFi tokens, and other cryptocurrencies has reduced Bitcoin's market share."
    },
    {
      title: "Limitations of Bitcoin Dominance",
      description: "While useful, Bitcoin dominance is not a definitive indicator of market health. It should be considered alongside other metrics like trading volume, market trends, and technological developments."
    },
    {
      title: "Factors Influencing Bitcoin Dominance",
      description: "Key factors include market sentiment, regulatory news, technological innovations, macroeconomic conditions, and the performance of alternative cryptocurrencies."
    }
  ];

  return (
    <div className="btc-dominance-info">
      <h2>Bitcoin Dominance: Comprehensive Guide</h2>
      
      {/* FAQ Section */}
      <section className="faq-section">
        <h3>Frequently Asked Questions</h3>
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
      </section>

      {/* Key Concepts Section */}
      <section className="key-concepts-section">
        <h3>Key Concepts</h3>
        <div className="concepts-grid">
          {keyConcepts.map((concept, index) => (
            <div key={index} className="concept-card">
              <h4>{concept.title}</h4>
              <p>{concept.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Important Details Section */}
      <section className="important-details-section">
        <h3>Important Details</h3>
        <div className="details-list">
          {importantDetails.map((detail, index) => (
            <div key={index} className="detail-item">
              <h4>{detail.title}</h4>
              <p>{detail.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BTCDominanceInfo;