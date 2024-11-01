import React from 'react';



import './BuyBitCoin.css'; // Import your CSS file for styling

const BuyBitCoin = () => {
    return (
        <div className="buy-future">

            <div className="buy-future-wrapper">
                <div className="buy-future-text">
                    <div className="heading-container">
                        <div className="heading-content">
                            <h2 className="heading-text-title">Buy Bitcoin, own the future</h2>
                            <p>
                                CoinStats makes it simple and safe to buy, sell, and hold Bitcoin. Own<hr /> Bitcoin in just a few minutes.
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="cs-button cs-primary-button large"
                        title="Track Bitcoin"
                        data-cy="cs-primary-button"
                    >
                        Track Bitcoin
                    </button>
                </div>
                <div className="buy-future-img">
                    <img src="/Bit-Coin.jpg" alt="Bitcoin" />


                </div>

            </div>
        </div>
    );
};

export default BuyBitCoin;
