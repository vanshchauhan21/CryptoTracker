

import React from 'react';
import './Blog.css';
import Header from '../../components/Common/Header';
import BlogPost from './BlogPost';
import Sidebar from '../../components/Sidebar.js';

const Blog = () => {
    const posts = [
        {
            title: 'Understanding Blockchain Technology',
            content: 'Blockchain is a decentralized ledger technology that enables secure and transparent transactions. It is the backbone of cryptocurrencies and has applications in various sectors beyond finance.',
            // image: 'https://example.com/images/crypto-basics.jpg/600x300',
            date: 'March 10, 2023',
            link: '/blog/understanding-blockchain' ,
       
        },
        {
            title: 'The Rise of NFTs',
            content: 'Non-fungible tokens (NFTs) have taken the digital world by storm, revolutionizing ownership of digital assets. They represent unique items and have opened new avenues for artists and creators.',
            // image: 'https://via.placeholder.com/600x300',
            date: 'March 15, 2023',
            link: '/blog/rise-of-nfts'
        },
        {
            title: 'Crypto Market Trends in 2023',
            content: 'As the cryptocurrency market evolves, understanding the latest trends is crucial for investors. This year, we see a shift towards more regulatory clarity and institutional adoption.',
            // image: 'https://via.placeholder.com/600x300',
            date: 'March 20, 2023',
            link: '/blog/crypto-market-trends'
        },
        {
            title: 'DeFi: The Future of Finance',
            content: 'Decentralized Finance (DeFi) is reshaping how we think about financial services. By removing intermediaries, DeFi platforms offer users greater control over their assets and financial decisions.',
            // image: 'https://via.placeholder.com/600x300',
            date: 'March 25, 2023',
            link: '/blog/defi-future-of-finance'
        },
        {
            title: 'How to Stay Safe in Crypto Trading',
            content: 'With the rise of cryptocurrencies, security has become paramount. Learn essential tips to protect your investments from scams and hacks.',
            // image: 'https://via.placeholder.com/600x300',
            date: 'March 30, 2023',
            link: '/blog/safe-crypto-trading'
        },
        // Add more posts as needed
    ];

    return (
        <>
            <Header />
            <div className="blog-container">
                <h1>Crypto Tracker Blog</h1>
                <div className="blog-posts">
                    {posts.map((post, index) => (
                        <BlogPost key={index} title={post.title} content={post.content}  date={post.date} link={post.link} />
                    ))}
                </div>
                <Sidebar />
            </div>
        </>
    );
};

export default Blog;