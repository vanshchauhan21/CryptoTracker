import React from 'react';
import './Cryptocard.css'; // Assuming you are styling with a separate CSS file
import Header from '../../components/Common/Header';

function Cryptocard() {
    return (
        <>
            <Header />
            <div className="buy-crypto-container">
                <h1 className="title">How to Buy Crypto with a Card</h1>

                <section className="section">
                    <h2>Overview: Buying Crypto with a Card</h2>
                    <p>
                        Purchasing cryptocurrency with a card is a fast and convenient way to get started with digital assets.
                        Using your debit or credit card, you can buy popular cryptocurrencies instantly and securely.
                    </p>
                </section>

                <section className="section">
                    <h2>How to Buy Crypto with a Card on the App</h2>
                    <p>Follow these steps to buy crypto using your card on the Crypto Tracker app:</p>
                    <ol className="steps-list">
                        <li>Navigate to the "Buy Crypto" section in the app.</li>
                        <li>Select the cryptocurrency you want to purchase, like Bitcoin, Ethereum, or others.</li>
                        <li>Choose your payment method and enter your card details securely.</li>
                        <li>Verify the transaction through the security protocols and confirm your purchase.</li>
                    </ol>
                </section>

                <section className="section">
                    <h2>Benefits of Buying with a Card</h2>
                    <p>Buying with a card offers several benefits:</p>
                    <ul className="benefits-list">
                        <li><strong>Instant Purchases:</strong> Get crypto instantly without waiting for lengthy transfer times.</li>
                        <li><strong>Convenience:</strong> Use your existing card without needing to set up additional accounts.</li>
                        <li><strong>Security:</strong> Transactions are protected by card security measures, adding a layer of safety.</li>
                    </ul>
                </section>

                <section className="section">
                    <h2>Important Considerations</h2>
                    <p>Before buying crypto with a card , keep the following in mind:</p>
                    <ul className="considerations-list">
                        <li><strong>Transaction Fees:</strong> Be aware of potential fees associated with card transactions.</li>
                        <li><strong>Card Limits:</strong> Check your card's spending limits to avoid any issues.</li>
                        <li><strong>Market Volatility:</strong> Cryptocurrency prices can fluctuate rapidly, affecting your purchase.</li>
                    </ul>
                </section>
            </div>
        </>
    );
}

export default Cryptocard;