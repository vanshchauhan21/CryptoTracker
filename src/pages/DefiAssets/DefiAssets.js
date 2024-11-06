import React from 'react';
import './DefiAssets.css';
import Header from '../../components/Common/Header';
import Feedback from '../../components/Feedback/Feedbacksection';


function DefiAssets() {
    return (
        <>
        <Header/>
        <div className="defi-assets">
    <h2>DeFi Asset Tracking</h2>
    <p>Decentralized Finance (DeFi) assets allow you to invest, trade, and earn in a decentralized and permissionless ecosystem. Track your favorite DeFi assets and monitor their performance.</p>
    
    <div className="defi-asset-list">
        <h3>Popular DeFi Assets</h3>
        <ul>
            <li>
                <strong>Uniswap (UNI)</strong> - A leading decentralized exchange protocol for trading Ethereum-based tokens, providing liquidity pools for token swaps without intermediaries.
            </li>
            <li>
                <strong>Aave (AAVE)</strong> - A decentralized lending platform where users can earn interest by lending or borrowing crypto assets. Aave also features flash loans, an innovative form of uncollateralized lending.
            </li>
            <li>
                <strong>Chainlink (LINK)</strong> - A decentralized oracle network that enables smart contracts to interact with real-world data, bridging the gap between blockchain and external data sources for reliable, tamper-proof inputs.
            </li>
            <li>
                <strong>Maker (MKR)</strong> - A governance token for the MakerDAO and Maker Protocol, responsible for the stability of the DAI stablecoin. MKR holders participate in governing the protocol and maintaining DAI’s peg to the US dollar.
            </li>
            <li>
                <strong>Compound (COMP)</strong> - A decentralized lending platform allowing users to earn interest or borrow against collateral. Compound facilitates algorithmic, automated money markets for earning yields on digital assets.
            </li>
            <li>
                <strong>SushiSwap (SUSHI)</strong> - A decentralized exchange and automated market maker built on Ethereum, enabling users to trade tokens and earn yields by staking liquidity in its pools.
            </li>
            <li>
                <strong>Yearn Finance (YFI)</strong> - A decentralized platform that optimizes yield farming strategies for liquidity providers, making it easier to earn interest on DeFi assets.
            </li>
        </ul>
    </div>
</div>
<Feedback />

        </>

    );
}

export default DefiAssets;
