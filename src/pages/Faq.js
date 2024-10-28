import React, { useState } from 'react';
import '../index.css'; // Import the CSS file for styling
import Header from '../components/Common/Header';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
      {
          question: "What is a cryptocurrency?",
          answer: "Cryptocurrency is a digital or virtual currency that uses cryptography for security. It operates independently of a central authority and is based on blockchain technology."
      },
      {
          question: "How can I track my cryptocurrency portfolio?",
          answer: "You can track your cryptocurrency portfolio using our tracker tool, which allows you to add your assets and view real-time performance, gains, and losses."
      },
      {
          question: "Is it safe to store cryptocurrencies in online wallets?",
          answer: "While online wallets are convenient, they can be vulnerable to hacking. For better security, consider using hardware wallets or cold storage solutions."
      },
      {
          question: "What is the difference between Bitcoin and altcoins?",
          answer: "Bitcoin is the first and most well-known cryptocurrency, while altcoins refer to any other cryptocurrency besides Bitcoin. Altcoins can have various features and uses."
      },
      {
          question: "How do I buy cryptocurrencies?",
          answer: "You can buy cryptocurrencies through exchanges using fiat currency or other cryptocurrencies. Make sure to choose a reputable exchange."
      },
      {
          question: "What factors influence cryptocurrency prices?",
          answer: "Cryptocurrency prices are influenced by market demand, investor sentiment, regulatory news, technological developments, and broader economic trends."
      },
      {
          question: "Can I trade cryptocurrencies 24/7?",
          answer: "Yes, unlike traditional stock markets, cryptocurrency markets operate 24/7, allowing you to trade at any time."
      },
      {
          question: "What is a blockchain?",
          answer: "A blockchain is a decentralized digital ledger that records all transactions across a network of computers. It ensures transparency and security in cryptocurrency transactions."
      },
  ];


    return (
        <>
        <Header/>
        <div className="faq-container">
            <h1 className='authhead'>Frequently Asked Questions</h1>
            {faqData.map((item, index) => (
                <div className="faq-item" key={index}>
                    <h3 
                        className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        {item.question}
                    </h3>
                    <p 
                        className="faq-answer" 
                        style={{ display: activeIndex === index ? 'block' : 'none' }}
                    >
                        {item.answer}
                    </p>
                </div>
            ))}
        </div>
        </>

    );
};

export default FAQ;
