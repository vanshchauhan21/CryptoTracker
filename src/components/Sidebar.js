

import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3>Popular Posts</h3>
            <ul>
                <li><a href="/blog/understanding-blockchain">Understanding Blockchain Technology</a></li>
                <li><a href="/blog/rise-of-nfts">The Rise of NFTs</a></li>
                <li><a href="/blog/crypto-market-trends">Crypto Market Trends in 2023</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;