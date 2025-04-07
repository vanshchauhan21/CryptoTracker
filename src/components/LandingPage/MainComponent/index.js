import React, { useEffect } from "react";
import Button from "../../Common/Button";
import "./styles.css";
import gradient from "../../../assets/gradient.png";
import iphone from "../../../assets/iphone.png";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

// import ProFreeSubcription from "../../../pages/Pro-Free-Subscribtion/ProFreeSubcription";

import Marquee from "../../../pages/Marquee/Marquee";
import OurVision from "../../Common/OurVision/OurVision";
import FreeTrial from "../../Common/FreeTrial/FreeTrial";
import InDepthAnalysis from "../../Common/InDepthAnalysis/InDepthAnalysis";
import LoveOurWebsiteCarousel from "../../LoveOurWebsite/LoveOurWebsiteCarousel";
import AnalyzeAssets from "../../../pages/AnalyzeAssets/AnalyzeAssets";
import Marketdata from "../../../pages/Real-timeMarket-data/Marketdata";
import CryptoTrackerManagingTool from "../../CryptoTrackerManagingTool/CryptoTrackerManagingTool";


import Wallet from "../../../assets/Wallet.png";
import Bitcoin from "../../../assets/Bitcoin.png";
import Defi from "../../../assets/Defi.png";

import PortfolioComparison from "../../../pages/AnalyzeAssets/PortfolioComparison";


import SwapWithBestRates from "../../SwapWithBestRates/SwapWithBestRates";
import PlatformStatistics from "../../PlatformStatistics/PlatformStatistics";

import UltimateSecurity from "../../UltimateSecurity/UltimateSecurity";

import ExitStrategy from "../../ExitStrategy/ExitStrategy";



function MainComponent() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);


  const infoData = [
    {
      icon: Wallet,
      title: '300+ Wallets/Exchanges',
      description: 'Track everything wherever you keep it: Binance, Trust Wallet, and others.',
    },
    {
      icon: Defi,
      title: '1,000+ DeFi Protocols',
      description: 'Track and manage all your DeFi on 1000+ protocols and 10+ chains.',
    },
    {
      icon: Bitcoin,
      title: '20,000+ Cryptocurrencies',
      description: 'Research, track, and manage any coin, set custom crypto alerts and more.',
    },
  ];

  return (
    <div className="main-wrapper ">
      <div className="main-flex md:gap-[6rem] h-[800px] md:h-[500px] md:p-[2rem] mx-0 md:mx-8 mb-8  ">
        <div className=" w-[100%]  px-2 mt-36 md:w-auto  md:mt-12 md:max-w-auto" data-aos="fade-up">
          <h1 className="heading1 text-start   text-[10px] md:text-6xl ">Real Time</h1>
          <motion.h1
            className="heading2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75, duration: 1 }}
          >
            Track Crypto
          </motion.h1>
          <motion.p
            className="info-text  lg:text-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Track crypto through a public API in real time. Visit the dashboard
            to do so!
          </motion.p>
          {/* buttons */}
          <motion.div
            className="btn-flex gap-2 md:gap-[4rem] flex-col md:flex-row items-center justify-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.75 }}
          >
            <a href="/dashboard">
              <Button text={"Dashboard"} />
            </a>
            <RWebShare
              data={{
                text: "CryptoDashboard made by Avi Vashishta using React JS.",
                url: "https://crypto-dashboard-jan.netlify.app",
                title: "CryptoTracker",
              }}
              onClick={() => toast.info("App Shared!")}
            >
              <Button text={"Share App"} outlined={true} />
            </RWebShare>
          </motion.div>
        </div>

        <div className="gradient-div" data-aos="fade-left">
          <img src={gradient} alt="some" className="gradient" />
          <motion.img
            src={iphone}
            className="iphone"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </div>

      {/* ...............Marquee................. */}
      <Marquee />
      {/* ...................Our Vision............. */}
      <OurVision />

      {/* .......................Free Trial.............*/}
      <FreeTrial />

      {/* .............In-depth Analysis................... */}
      <InDepthAnalysis />

      {/* ...................Pro Free Subcription...........
      <ProFreeSubcription data-aos="fade-down" /> */}

      {/* ........................why do people love our website.......... */}
      <LoveOurWebsiteCarousel />
      {/* .............................AnalyzeAssets................. */}
      <AnalyzeAssets />
      <PortfolioComparison />
      {/* .............................AnalyzeAssets................. */}
      <Marketdata />

      {/* ................SwapWithBestRates...................... */}
      <SwapWithBestRates />

      {/* .........................Crypto tracker Managing Tool.............. */}
      <CryptoTrackerManagingTool data={infoData} />

      {/* ................................................Platform statistics.............. */}
      <PlatformStatistics />


      {/* ..............................................UltimateSecurity............  */}
      <UltimateSecurity />

      {/* .................................ExitStrategy............. */}
      <ExitStrategy />

    </div>
  );
}

export default MainComponent;
