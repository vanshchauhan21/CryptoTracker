const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Coingecko API Endpoint
const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/simple/price';

app.get('/api/crypto-data', async (req, res) => {
    try {
        const params = {
            ids: 'bitcoin,ethereum',  // Example: Fetch Bitcoin and Ethereum
            vs_currencies: 'usd',
        };

        const response = await axios.get(COINGECKO_API_URL, { params });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
