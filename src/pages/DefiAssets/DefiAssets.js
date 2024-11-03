import React from 'react';
import './DefiAssets.css';
import Header from '../../components/Common/Header';

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
                        <strong>Uniswap (UNI)</strong> - A leading decentralized exchange protocol for trading Ethereum-based tokens.
                    </li>
                    <li>
                        <strong>Aave (AAVE)</strong> - A decentralized lending platform where users can earn interest by lending or borrowing crypto assets.
                    </li>
                    <li>
                        <strong>Chainlink (LINK)</strong> - A decentralized oracle network that enables smart contracts to interact with real-world data.
                    </li>
                    <li>
                        <strong>Maker (MKR)</strong> - A governance token for the MakerDAO and Maker Protocol, responsible for the stability of the DAI stablecoin.
                    </li>
                    <li>
                        <strong>Compound (COMP)</strong> - A decentralized lending platform allowing users to earn interest or borrow against collateral.
                    </li>
                </ul>
            </div>
        </div>
        </>

    );
}

export default DefiAssets;
