import React, { useState } from 'react';
import './Faq.css';
import Feedback from '../components/Feedback/Feedbacksection'; 
import Header from '../components/Common/Header';
import {  Instagram, Github, Twitter, Linkedin } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";


const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const DiscordIcon = ({ size = 20 }) => (
        <i 
        className="fab fa-discord"
        style={{
            fontSize: size,
            width: size,
            height: size,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        />
    );

    const socialIcons = [
        { Icon: Instagram, label: "Instagram" },
        { Icon: Github, label: "Github" },
        { Icon: Twitter, label: "Twitter" },
        { Icon: Linkedin, label: "LinkedIn" },
        { Icon: DiscordIcon, label: "Discord" },
    ];


    const faqData = [
      {
          question: "What is a cryptocurrency?",
          answer: "Cryptocurrency is a digital or virtual currency that uses cryptography for security. It operates independently of a central authority and is based on blockchain technology."
      },
      {
          question: "How can I track my cryptocurrency portfolio?",
          answer: "You can track your cryptocurrency portfolio using our tracker tool, which allows you to add your assets and view real-time performance, gains, and losses."
      },
      {
          question: "Is it safe to store cryptocurrencies in online wallets?",
          answer: "While online wallets are convenient, they can be vulnerable to hacking. For better security, consider using hardware wallets or cold storage solutions."
      },
      {
          question: "What is the difference between Bitcoin and altcoins?",
          answer: "Bitcoin is the first and most well-known cryptocurrency, while altcoins refer to any other cryptocurrency besides Bitcoin. Altcoins can have various features and uses."
      },
      {
          question: "How do I buy cryptocurrencies?",
          answer: "You can buy cryptocurrencies through exchanges using fiat currency or other cryptocurrencies. Make sure to choose a reputable exchange."
      },
      {
          question: "What factors influence cryptocurrency prices?",
          answer: "Cryptocurrency prices are influenced by market demand, investor sentiment, regulatory news, technological developments, and broader economic trends."
      },
      {
          question: "Can I trade cryptocurrencies 24/7?",
          answer: "Yes, unlike traditional stock markets, cryptocurrency markets operate 24/7, allowing you to trade at any time."
      },
      {
          question: "What is a blockchain?",
          answer: "A blockchain is a decentralized digital ledger that records all transactions across a network of computers. It ensures transparency and security in cryptocurrency transactions."
      },
      {
        question: "What is mining in cryptocurrency?",
        answer: "Mining is the process of validating transactions and adding them to the blockchain. Miners use powerful computers to solve complex mathematical problems, securing the network and earning rewards in cryptocurrency."
},
{
        question: "What is a cryptocurrency exchange?",
        answer: "A cryptocurrency exchange is a platform where users can buy, sell, or trade cryptocurrencies. Exchanges can be centralized or decentralized, each offering various features and security measures."
},
{
        question: "What are cryptocurrency wallets?",
        answer: "Cryptocurrency wallets are digital tools that allow users to store, send, and receive cryptocurrencies. They can be hardware wallets, software wallets, or paper wallets, each offering different levels of security."
},
{
        question: "What is a smart contract?",
        answer: "A smart contract is a self-executing contract with the terms of the agreement directly written into code. They automatically execute when predetermined conditions are met, eliminating the need for intermediaries."
},
{
        question: "What is DeFi (Decentralized Finance)?",
        answer: "DeFi refers to a financial ecosystem built on blockchain technology that allows users to access financial services like lending, borrowing, and trading without traditional intermediaries such as banks."
},
{
        question: "How do I keep my cryptocurrencies safe?",
        answer: "To keep cryptocurrencies safe, use hardware wallets for long-term storage, enable two-factor authentication on exchanges, and be cautious of phishing attacks and scams."
},
{
        question: "What are the tax implications of trading cryptocurrencies?",
        answer: "The tax treatment of cryptocurrency varies by jurisdiction, but generally, profits from trading may be subject to capital gains tax. It's important to keep records of all transactions for tax reporting."
},
{
        question: "What is the difference between a public and a private key?",
        answer: "A public key is a cryptographic code that allows users to receive cryptocurrencies, while a private key is a secret code that enables users to access and manage their funds. Keeping the private key secure is crucial."
},
{
        question: "What is a cryptocurrency fork?",
        answer: "A cryptocurrency fork occurs when a blockchain splits into two separate chains, often due to changes in the protocol. Forks can be soft (backward-compatible) or hard (not backward-compatible)."
},
{
        question: "What are NFTs (Non-Fungible Tokens)?",
        answer: "NFTs are unique digital assets representing ownership of a specific item or content, such as artwork or collectibles, secured on a blockchain. They cannot be exchanged on a one-to-one basis like cryptocurrencies."
},
{
        question: "What are gas fees in cryptocurrency transactions?",
        answer: "Gas fees are transaction fees paid to miners or validators for processing and confirming transactions on a blockchain. They can vary based on network congestion and transaction complexity."
},
{
        question: "What is the role of validators in a blockchain?",
        answer: "Validators are participants in a blockchain network who validate and verify transactions. In proof-of-stake systems, they are chosen to create new blocks and maintain the blockchain's integrity."
},
{
        question: "What is cryptocurrency liquidity?",
        answer: "Liquidity refers to how easily a cryptocurrency can be bought or sold in the market without significantly affecting its price. Higher liquidity typically indicates a more stable market."
},
{
        question: "What is the purpose of a cryptocurrency whitepaper?",
        answer: "A whitepaper is a technical document that outlines a cryptocurrency project's purpose, technology, implementation details, and roadmap. It serves as a guide for potential investors and users."
},
{
        question: "How can I invest in cryptocurrencies?",
        answer: "You can invest in cryptocurrencies by purchasing them on exchanges, participating in ICOs, or investing in cryptocurrency-related funds. It's important to research and understand the risks involved."
},
{
        question: "What is the difference between centralized and decentralized exchanges?",
        answer: "Centralized exchanges are operated by a single entity, providing a user-friendly interface but requiring users to trust the exchange. Decentralized exchanges allow peer-to-peer trading without intermediaries, enhancing privacy and control."
},
{
        question: "How can I recover lost cryptocurrencies?",
        answer: "If you lose access to your cryptocurrency wallet or private key, recovery may be impossible. However, if you have a backup of your seed phrase or wallet file, you can restore access to your funds."
},
{
        question: "What are the environmental concerns related to cryptocurrency mining?",
        answer: "Cryptocurrency mining, especially in proof-of-work systems like Bitcoin, can consume significant energy and contribute to carbon emissions. This has raised concerns about the environmental impact and sustainability of mining practices."
}

  ];


    return (
        <>
        <Header/>
        <div className="faq-container">
            <h1 className='authhead'>Frequently Asked Questions</h1>
            {faqData.map((item, index) => (
                <div className="faq-item" key={index}>
                    <h3
                        className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        {item.question}
                    </h3>
                    <p
                        className="faq-answer"
                        style={{ display: activeIndex === index ? 'block' : 'none' }}
                    >
                        {item.answer}
                    </p>
                </div>
            ))}
        </div>
        <div
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px",
        marginTop: "20px",
        fontSize: "20px",
    }}
>

    <span>Have more questions? Feel free to Connect with us on our social platforms.</span>
</div>
<div className="social-icons-container">
                    {socialIcons.map(({ Icon, label }) => (
                        <div key={label} className="social-icon-wrapper">
                        <a
                            key={label}
                            href="#"
                            className="social-icon"
                            aria-label={label}
                            
                        >
                            <Icon size={20} />
                        </a>
                        </div>
                    ))}
                </div>
                <Feedback />
           
        </>

    );
};

export default FAQ;
