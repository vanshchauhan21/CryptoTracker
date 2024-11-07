import React from 'react';
import './Earn.css';
import Header from '../../components/Common/Header';

function Earn() {
  return (
    <>
    <Header/>
    <div className="earn-container">
      <h1>Earn with Crypto</h1>
      <p className="earn-description">
        Explore ways to earn passive income with crypto! Whether you're looking to stake your assets, lend them to earn interest, or participate in rewards programs, there are various ways to increase your holdings.
      </p>

      <section className="earn-section">
        <h2>1. Staking</h2>
        <p>
          Staking allows you to earn rewards by locking up your cryptocurrency to support network operations like validating transactions. Popular coins for staking include Ethereum, Cardano, and Polkadot. Staking yields vary based on the network, but it's a simple way to earn while holding your assets.
        </p>
      </section>

      <section className="earn-section">
        <h2>2. Lending and Borrowing</h2>
        <p>
          Crypto lending platforms let you earn interest by lending your assets to other users. Platforms such as Aave, Compound, and BlockFi offer flexible lending options, and you can earn interest depending on the asset and demand in the market.
        </p>
      </section>

      <section className="earn-section">
        <h2>3. Rewards Programs</h2>
        <p>
          Many platforms offer reward programs where you can earn extra crypto for specific activities, such as referring friends, trading, or learning about new tokens. For example, Coinbase's Earn program allows users to learn about new projects and earn tokens as they go.
        </p>
      </section>

      <section className="earn-section">
        <h2>4. Yield Farming</h2>
        <p>
          Yield farming involves providing liquidity to decentralized finance (DeFi) protocols in exchange for rewards. This is a more advanced way to earn, often with higher potential returns but also higher risks. Platforms like Uniswap and PancakeSwap are popular in the DeFi space.
        </p>
      </section>
    </div>
    </>

  );
}

export default Earn;
