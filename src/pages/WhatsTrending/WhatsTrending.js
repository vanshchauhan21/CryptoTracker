import React, { useEffect, useState } from 'react';
import './WhatsTrending.css'; // Ensure you have the CSS file for styling
import Header from '../../components/Common/Header';

const WhatsTrending = () => {
    const [news, setNews] = useState([]);
    const apiKey = '2e5817e3c1bdd6791ad94305b8aa421b0d0d260fbcc38ca3113c37a8c19a8446';
    const url = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${apiKey}`;

    useEffect(() => {
        const fetchTrendingNews = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setNews(data.Data); // Assuming 'Data' is the key that holds the news array
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchTrendingNews();
    }, [url]);

    return (
        <>
            <Header />
            <div className="whats-trending">
                <h2>What's Trending</h2>
                <div className='trend-content'>

                    {news.map((item) => (
                        <div key={item.id} className="trending-item">
                            {/* ..........for image showing........ */}
                            <div className='trend-image'>
                                <img src={item.imageurl} alt={item.title} className="trending-image" />
                            </div>
                            {/* .............for detail showing......... */}
                            <div className='details-trend-content'>

                                <h3 className="trending-title">{item.title}</h3>
                                <p className="trending-body">
                                    {item.body.split(" ").slice(0, 20).join(" ") + (item.body.split(" ").length > 20 ? "..." : "")}
                                </p>

                                <p className="trending-published">Published on: {new Date(item.published_on * 1000).toLocaleDateString()}</p>
                            </div>

                        </div>


                    ))}
                </div>

            </div>

        </>
    );
};

export default WhatsTrending;
