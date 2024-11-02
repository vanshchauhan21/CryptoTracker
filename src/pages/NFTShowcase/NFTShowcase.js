import React from 'react';
import './NFTShowcase.css';
import Header from '../../components/Common/Header';

function NFTShowcase() {
    return (
    <>
    <Header/>
        <div className="css-cbn7zz">
         <div className='detail-container'>

    
            <h1 aria-label="Buy, sell, and showcase NFTs from leading creators and brands" className="css-1pjy46v">
                <span aria-hidden="true" className="css-lda8c8">Buy, sell, and showcase NFTs</span>
                <span aria-hidden="true" className="css-168iehe">from leading creators and brands</span>
            </h1>
            <div className="css-uof3fk">
                <a className="css-clo48u" href="/nft/drops">
                    <button type="button" className="css-60b4jl">View Drops</button>
                </a>
                <a className="css-ln962v" href="/nft/marketplace">
                    <button type="button" className="css-1y6kbzu">View Marketplace</button>
                </a>
            </div>
            </div>
        </div>
    </>

    );
}

export default NFTShowcase;
