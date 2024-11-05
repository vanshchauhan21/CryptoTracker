import React from 'react'
import Header from '../../components/Common/Header'
import "./Blog.css"
function Blog() {
    return (
        <>
            <Header />
            <section>
            <h2>What is Cryptocurrency?</h2>
            <p>
                Cryptocurrencies are digital or virtual currencies that use cryptography for security. They operate on decentralized networks, primarily on blockchain technology, which makes them secure and independent from central authorities like banks or governments.
            </p>
            <p>
                The first and most well-known cryptocurrency is <strong>Bitcoin</strong>, created in 2009. Since then, thousands of alternative cryptocurrencies have emerged, including Ethereum, Litecoin, and Ripple. Cryptocurrencies are designed to be secure and, in many cases, anonymous.
            </p>
        </section>
        </>

    )
}

export default Blog
