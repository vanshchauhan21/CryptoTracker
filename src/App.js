import CryptoProfitCalculatorInfo from "./components/CryptoProfitCalculatorInfo";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";
import metadata from "./metadata";
//import { Helmet } from "react-helmet";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

// Page Imports
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Watchlist from "./pages/Watchlist";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing/Pricing";
import Contributors from "./pages/Contributors";
import Login from "./pages/Login.js"
//import Blog from "./pages/Blogs/Blog";
import CryptoProfitCalculator from "./pages/CryptoProfitCalculator";
import ProfitReturnCalculator from "./pages/Useful Tools/ProfitReturnCalculator";
//import InvestmentReturnCalculator from "./pages/Useful Tools/Investmentreturncalculator";
import ImpermanentLossCalculator from "./pages/ImpermanentLossCalculator";

import DollarCostAveraging from "./pages/dca.js";
//import DividendCalculator from "./pages/DividendCalculator";
//import GasFreeEstimator from "./pages/gfe.js";
import ProfitLoss from "./pages/ProfitLoss/ProfitLoss";
import Cryptocard from "./pages/CryptoCard/Cryptocard";
import CryptoQuiz from "./pages/CryptoQuiz/CryptoQuiz";
import Footer from "./components/Footer.jsx";
import NFTShowcase from "./pages/NFTShowcase/NFTShowcase";
import { Helmet } from "react-helmet";
import CompoundInterestCalculator from "./pages/CompoundInterestCalculator.js";
//import Cryptofiat from "./pages/Cryptofiat.js";
import MarginCalculator from "./pages/MarginCalculator.js";

import CustomizableCryptoWatchlist from "./pages/ccw.js";
import SIPCalculator from "./pages/SIPCalculator.js";
import DefiCalculator from "./pages/defi.js";
import CompoundStaking from "./pages/cics.js";

import Sitemap from "./pages/Sitemap/Sitemap";
import Methodology from "./pages/Methodology/Methodology";
import Careers from "./pages/Careers";
import Cryptoreward from "./pages/Cryptoreward/Cryptoreward";
import BTCDominance from "./pages/BTCDominance/BTCDominance";
import MarketUpdate from "./pages/MarketUpdate/MarketUpdate.js";
import HelpCenter from "./pages/HelpCenter/HelpCenter.js";
import UltimateCryptoPortfolioTracker from "./pages/UltimateCryptoPortfolioTracker/UltimateCryptoPortfolioTracker";
import WhatsTrending from "./pages/WhatsTrending/WhatsTrending.js";
import DefiAssets from "./pages/DefiAssets/DefiAssets.js";
import CryptoPrices from "./pages/cryptoPrice/cryptoPrice.js";
import Blog from "./pages/Blogs/Blog.js";
import Crypto24HourReport from "./pages/CryptoMarket24h/Crypto24HourReport.js";
import GeminiChat from "./pages/GeminiAIChat/GeminiAIChat.jsx";
import FearAndGreedIndex from "./pages/FearAndGreedIndex/FearAndGreedIndex";
import Earn from "./pages/Earn/Earn";
import BitCoinRainBowCharDetail from "./pages/BitCoinRainBow/BitCoinRainBowCharDetail.js";
import AffiliateProgram from "./pages/AffiliateProgram/AffiliateProgram";
import TrackNFTs from "./pages/TrackNFT/TrackNFTs.js";
import InvestmentReturnCalculator from "./pages/Useful Tools/Investmentreturncalculator.js";
import BreakEvenCalculator from "./pages/BreakEvenCalculator";
import SlippageCalculator from "./pages/SlippageCalculator";
import ROICalculator from "./pages/ROICalculator";

import InterestRateChangeEstimator from "./pages/rce.js";
import ICOIDOPerformanceTracker from "./pages/ico.js";
import CrossChainBridgeFeeOptimizer from "./pages/bfo.js";
import Contact from "./pages/Contactus/Contactus.jsx" 

import BackToTopButton from "./components/BackToTopButton/BackToTopButton.js";
import CosmosWalletTracker from "./pages/CosmosWalletTracker/CosmosWalletTracker.js";
import PortFolio from "./pages/Portfolio/PortFolio.js";

import DividendCalculator from "./pages/DividendCalculator";
import GasFreeEstimator from "./pages/gfe";
import CryptoConverter from "./pages/CryptoConverter";
import Cryptofiat from "./pages/Cryptofiat";
import Learn from "./components/Learn.jsx"
import News from "./components/News.jsx";
//import CompoundInterestCalculator from "./pages/CompoundInterestCalculator";
//import MarginCalculator from "./pages/MarginCalculator";
//import DollarCostAveraging from "./pages/dca";
//import ICOIDOPerformanceTracker from "./pages/ico";
//import InterestRateChangeEstimator from "./pages/rce";
//import CustomizableCryptoWatchlist from "./pages/ccw";
//import CrossChainBridgeFeeOptimizer from "./pages/bfo";

// Components
import ProgressBar from "./components/Common/ProgressBar/ProgressBar";
//import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseDown = () => {
      cursor.style.transform = "scale(1.5)";
    };

    const handleMouseUp = () => {
      cursor.style.transform = "scale(1)";
    };

    document.body.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mousedown", handleMouseDown);
    document.body.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.body.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mousedown", handleMouseDown);
      document.body.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <meta charSet={metadata.charset} />
        <meta name="theme-color" content={metadata.themeColor} />
      </Helmet>
      
      <I18nextProvider i18n={i18n}>
        <div className="App">
          <ProgressBar />
          <div className="cursor" ref={cursorRef} id="cursor" />
          <div className="cursor-pointer" id="cursor-pointer" />
          <ToastContainer />
          
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Routes>
              <Route path="/crypto-profit-calculator-info" element={<CryptoProfitCalculatorInfo />} />
              <Route path="/crypto-profit-calculator" element={<CryptoProfitCalculatorInfo />} />


                <Route path="/" element={<Home />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/Learn" element={<Learn />} />
                <Route path="/News" element={<News />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contributors" element={<Contributors />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/geminiChat" element={<GeminiChat />} />
                <Route path="/contactus" element={<Contact/>} />
                <Route path="/analysis" element={<BTCDominance/>} />
                
                {/* Calculators */}
                <Route path="/calculators">
                  <Route path="crypto-profit-calculator" element={<CryptoProfitCalculator />} />
                  <Route path="profit-return-calculator" element={<ProfitReturnCalculator />} />
                  <Route path="investment-return-calculator" element={<InvestmentReturnCalculator />} />
                  <Route path="impermanent-loss-calculator" element={<ImpermanentLossCalculator />} />
                  <Route path="dividend-calculator" element={<DividendCalculator />} />
                  <Route path="gas-fee-estimator" element={<GasFreeEstimator />} />
                  <Route path="crypto-converter" element={<CryptoConverter />} />
                  <Route path="cryptofiat" element={<Cryptofiat />} />
                  <Route path="compound-interest-calculator" element={<CompoundInterestCalculator />} />
                  <Route path="margin-calculator" element={<MarginCalculator />} />
                  <Route path="dollar-cost-averaging" element={<DollarCostAveraging />} />
                  <Route path="ico-ido-performance-tracker" element={<ICOIDOPerformanceTracker />} />
                  <Route path="interest-rate-change-estimator" element={<InterestRateChangeEstimator />} />
                  <Route path="customizable-watchlist" element={<CustomizableCryptoWatchlist />} />
                  <Route path="cross-chain-bridge-fee-optimizer" element={<CrossChainBridgeFeeOptimizer />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </div>
        <BackToTopButton />
      </I18nextProvider>
    </>
  );
}

export default App;
