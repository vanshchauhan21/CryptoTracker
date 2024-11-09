import React from 'react';
import './Earn.css';
import Header from '../../components/Common/Header';
import { motion } from 'framer-motion'; 
import { FaDollarSign, FaCoins, FaChartLine } from 'react-icons/fa'; 

const Earn = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
      <>
        <Header/>
        <motion.div 
            className="earn-container" 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants} 
            transition={{ duration: 0.5 }}
        >
            <h1 className="earn-title">Earn with Crypto</h1>
            <p className="earn-description">
                Discover various ways to earn cryptocurrency, from staking to yield farming. 
                Join us in maximizing your returns!
            </p>
            <div className="earn-methods">
                <motion.div 
                    className="earn-method" 
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.3 }}
                >
                    <FaDollarSign className="earn-icon" />
                    <h2>Staking</h2>
                    <p>Earn rewards by locking your coins in a wallet.</p>
                </motion.div>
                <motion.div 
                    className="earn-method" 
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.3 }}
                >
                    <FaCoins className="earn-icon" />
                    <h2>Yield Farming</h2>
                    <p>Provide liquidity to earn interest on your assets.</p>
                </motion.div>
                <motion.div 
                    className="earn-method" 
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.3 }}
                >
                    <FaChartLine className="earn-icon" />
                    <h2>Crypto Savings</h2>
                    <p>Deposit your crypto to earn interest over time.</p>
                </motion.div>
            </div>
        </motion.div>
        </>
    );
};

export default Earn;