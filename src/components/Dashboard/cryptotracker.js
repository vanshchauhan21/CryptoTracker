import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoTracker = () => {
    const [cryptoData, setCryptoData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                const response = await axios.get('/api/crypto-data'); // Calling your backend API
                setCryptoData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchCryptoData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Crypto Prices</h1>
            {cryptoData && (
                <ul>
                    <li>Bitcoin: ${cryptoData.bitcoin.usd}</li>
                    <li>Ethereum: ${cryptoData.ethereum.usd}</li>
                </ul>
            )}
        </div>
    );
};

export default CryptoTracker;
