import React from 'react';
import './TrackNFTs.css'; // Assuming you are styling with a separate CSS file
import Header from '../../components/Common/Header';
import Feedback from '../../components/Feedback/Feedbacksection';


function TrackNFTs() {
  return (
    <>
      <Header />
      <div className="track-nfts-container">
        <h1 className="title">How to Track NFTs on Crypto Tracker</h1>
        
        <section className="section">
          <h2>What is NFT Tracking?</h2>
          <p>
            NFT (Non-Fungible Token) tracking allows you to monitor the performance, ownership, and value of your digital assets.
            Unlike cryptocurrencies, NFTs are unique digital items representing ownership of assets like artwork, collectibles, and more.
          </p>
        </section>

        <section className="section">
          <h2>How Does NFT Tracking Work?</h2>
          <p>
            The Crypto Tracker app retrieves information about your NFTs from the blockchain, including current value, past sale prices, and historical ownership data.
            This provides a comprehensive view of your NFT investments over time.
          </p>
          <div className="formula">
            <p><strong>Tracked Information Includes:</strong></p>
            <ul>
              <li>Current Market Value</li>
              <li>Ownership History</li>
              <li>Last Purchase Price</li>
              <li>Any Associated Royalties</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Tracking NFTs in the Crypto Tracker App</h2>
          <p>
            Within the Crypto Tracker app, you can view details about your NFTs by navigating to the NFT section. The app allows you to monitor the
            appreciation or depreciation of each NFT, helping you make informed decisions on holding or selling.
          </p>
        </section>

        <section className="section">
          <h2>Why Track Your NFTs?</h2>
          <p>
            Tracking your NFTs helps you understand their market position, allowing you to gauge interest and estimate value changes. 
            This information is valuable in determining the best time to sell, hold, or acquire similar assets.
          </p>
        </section>
      </div>
    <Feedback />

    </>
  );
}

export default TrackNFTs;
