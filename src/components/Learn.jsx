// src/components/Learn.jsx
import React from "react";
import Header from "./Common/Header";
import './Learn.css'; // Import the CSS file for styling

const Learn = () => {
  return (
    <>
      <Header />
      <div className="learn-container p-6">
        <h1 className="learn-title text-3xl font-bold text-center mb-8">
          Learn Cryptocurrency
        </h1>

        <div className="space-y-8">
          {/* Crypto Trading Basics */}
          <div className="learn-card bg-white shadow-md rounded-lg p-6">
            <h2 className="learn-subtitle text-2xl font-semibold mb-4">
              Crypto Trading Basics
            </h2>
            <p className="learn-description">
              Learn the essentials of cryptocurrency trading, including how to
              start, strategies, and best practices.
            </p>
            <a href="https://medium.com/@beyond_verse/mastering-the-basics-a-beginners-guide-to-crypto-trading-ab5c676f98df" className="learn-link mt-4 block">
              Learn More →
            </a>
          </div>

          {/* Blockchain Fundamentals */}
          <div className="learn-card bg-white shadow-md rounded-lg p-6">
            <h2 className="learn-subtitle text-2xl font-semibold mb-4">
              Blockchain Fundamentals
            </h2>
            <p className="learn-description">
              Understand how blockchain technology works, why it's revolutionary,
              and how it impacts various industries.
            </p>
            <a
              href="https://medium.com/@zhaoyi0113/blockchain-fundamental-concepts-for-beginners-c122bef9b38b"
              className="learn-link mt-4 block"
            >
              Learn More →
            </a>
          </div>

          {/* Market Analysis Techniques */}
          <div className="learn-card bg-white shadow-md rounded-lg p-6">
            <h2 className="learn-subtitle text-2xl font-semibold mb-4">
              Market Analysis Techniques
            </h2>
            <p className="learn-description">
              Explore advanced market analysis techniques to understand trends and
              make informed investment decisions.
            </p>
            <a href="https://callygood.medium.com/the-importance-of-conducting-a-marketing-analysis-44140a9a4619" className="learn-link mt-4 block">
              Learn More →
            </a>
          </div>
          {/* Decentralized Finance */}
          <div className="learn-card bg-white shadow-md rounded-lg p-6">
            <h2 className="learn-subtitle text-2xl font-semibold mb-4">
             Decentralized Finance
            </h2>
            <p className="learn-description">
            Discover the Decentralized Finance ecosystem, including lending platforms, decentralized exchanges, and yield farming.
            </p>
            <a href="https://rajatkumardangi.medium.com/defi-ultimate-guide-to-decentralized-finance-6207f2e12337" className="learn-link mt-4 block">
              Learn More →
            </a>
          </div>
          {/* Mining and Consensus Mechanisms */}
          <div className="learn-card bg-white shadow-md rounded-lg p-6">
            <h2 className="learn-subtitle text-2xl font-semibold mb-4">
            Mining and Consensus Mechanisms
            </h2>
            <p className="learn-description">
            Learn about the process of mining cryptocurrencies and various consensus mechanisms like Proof of Work, Proof of Stake, and others.
            </p>
            <a href="https://medium.com/coinmonks/understanding-consensus-mechanisms-8ddfbbc6b75e" className="learn-link mt-4 block">
              Learn More →
            </a>
          </div>
          {/* NFTs */}
          <div className="learn-card bg-white shadow-md rounded-lg p-6">
            <h2 className="learn-subtitle text-2xl font-semibold mb-4">
            NFTs
            </h2>
            <p className="learn-description">
            Explore the concept of NFTs, their applications in art, gaming, and ownership rights.
            </p>
            <a href="https://medium.com/@bazaa/nfts-101-an-introduction-to-non-fungible-tokens-28e3d595e379" className="learn-link mt-4 block">
              Learn More →
            </a>
          </div>
          {/* Future Trends in Cryptocurrency */}
          <div className="learn-card bg-white shadow-md rounded-lg p-6">
            <h2 className="learn-subtitle text-2xl font-semibold mb-4">
            Future Trends in Cryptocurrency
            </h2>
            <p className="learn-description">
            Stay informed about emerging trends, such as central bank digital currencies (CBDCs), regulatory changes, and technological advancements.
            </p>
            <a href="https://medium.com/@mick.pesser_15490/key-trends-shaping-the-future-of-cryptocurrencies-090a83cb42b0" className="learn-link mt-4 block">
              Learn More →
            </a>
          </div>
          {/* Cross-Border Payments and Remittances */}
          <div className="learn-card bg-white shadow-md rounded-lg p-6">
            <h2 className="learn-subtitle text-2xl font-semibold mb-4">
            Cross-Border Payments and Remittances
            </h2>
            <p className="learn-description">
            Understand how cryptocurrencies can facilitate faster and cheaper cross-border transactions.
            </p>
            <a href="https://medium.com/@FxisAi/cross-border-payments-how-blockchain-is-disrupting-remittances-48ba0334388a" className="learn-link mt-4 block">
              Learn More →
            </a>
          </div>
          {/* Blockchain and IoT Integration */}
          <div className="learn-card bg-white shadow-md rounded-lg p-6">
            <h2 className="learn-subtitle text-2xl font-semibold mb-4">
            Blockchain and IoT Integration
            </h2>
            <p className="learn-description">
            Understand how blockchain can be integrated with the Internet of Things (IoT) for improved security and data management.
            </p>
            <a href="https://chirpiot.medium.com/integration-of-iot-with-blockchain-signals-golden-age-of-digital-transformation-787832adcad3" className="learn-link mt-4 block">
              Learn More →
            </a>
          </div>
          {/*  Impact of Quantum Computing on Blockchain */}
          <div className="learn-card bg-white shadow-md rounded-lg p-6">
            <h2 className="learn-subtitle text-2xl font-semibold mb-4">
            Impact of Quantum Computing on Blockchain
            </h2>
            <p className="learn-description">
            Explore the potential risks and implications of quantum computing for blockchain security and cryptography.
            </p>
            <a href="https://tatianarevoredo.medium.com/mixing-quantum-computing-blockchain-and-ai-9ca1eb93e59d" className="learn-link mt-4 block">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learn;
