import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Coin from "./pages/Coin";
import Compare from "./pages/Compare";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import Faq from "./pages/Faq";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";
import metadata from "./metadata";
import TermCondition from "./pages/TermCondition";
import Feedback from "./pages/Feedback";
import NotFoundPage from "./components/PageNotFound/PageNotFound";
import GoogleTranslate from "./components/GoogleTranslate";
import CryptoConverter from "./pages/CryptoConverter";
import BitcoinRainbowChart from "./pages/BitCoinRainBow/BitcoinRainbowChart";
import EthereumRainbowChart from "./pages/EthereumRainbow/EthereumRainbowChart";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Contributors from "./pages/Contributors";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/Privacy-Policy/PrivacyPolicy";
import CodeOfConduct from "./pages/CodeOfConduct/CodeOfConduct.js";
import Pricing from "./pages/Pricing/Pricing";
import Learn from "./components/Learn";
import News from "./components/News";
import CryptoProfitCalculator from "./pages/CryptoProfitCalculator";
import Disclaimer from "./pages/Disclaimer/Disclaimer";
import CryptoMarket from "./pages/CryptoMarket";
import CryptoNews from "./pages/CryptoNews/CryptoNews";
import ProgressBar from "./components/Common/ProgressBar/ProgressBar";
import RefundPolicy from "./pages/Refund Policy/RefundPolicy";
import Contactus from "./pages/Contactus/Contactus";
import CookiesPolicy from "./pages/CookiesPolicy";
import Aboutus from "./pages/Aboutus/Aboutus";
import CookiePolicy from "./pages/Cookie-Policy/CookiePolicy";
import ProfitReturnCalculator from "./pages/Useful Tools/ProfitReturnCalculator";
import ImpermanentLossCalculator from "./pages/ImpermanentLossCalculator";
import DividendCalculator  from "./pages/DividendCalculator";
import GasFreeEstimator  from "./pages/gfe.js";
import DividendCalculator from "./pages/DividendCalculator";
import GasFreeEstimator from "./pages/gfe.js";
import DollarCostAveraging from "./pages/dca.js";
import DividendCalculator  from "./pages/DividendCalculator";
import GasFreeEstimator  from "./pages/gfe.js";
import ProfitLoss from "./pages/ProfitLoss/ProfitLoss";
import Cryptocard from "./pages/CryptoCard/Cryptocard";
import CryptoQuiz from "./pages/CryptoQuiz/CryptoQuiz";
import Footer from "./components/Footer.jsx";
import NFTShowcase from "./pages/NFTShowcase/NFTShowcase";
import { Helmet } from "react-helmet";
import CompoundInterestCalculator from "./pages/CompoundInterestCalculator.js";
import Cryptofiat from "./pages/Cryptofiat.js";
import MarginCalculator from "./pages/MarginCalculator.js";

import CustomizableCryptoWatchlist from "./pages/ccw.js";
=======
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

import InterestRateChangeEstimator from "./pages/rce.js";

=======
import ICOIDOPerformanceTracker from "./pages/ico.js";
import CrossChainBridgeFeeOptimizer from "./pages/bfo.js";







import BackToTopButton from "./components/BackToTopButton/BackToTopButton.js";
import PortFolio from "./pages/Portfolio/PortFolio.js";

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
        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.image} />
        {/* Twitter Card */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />
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
                <Route path="/" element={<Home />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contributors" element={<Contributors />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/calculators">
                  <Route
                    path="crypto-profit-calculator"
                    element={<CryptoProfitCalculator />}
                  />
                  <Route
                    path="profit-return-calculator"
                    element={<ProfitReturnCalculator />}
                  />
                  <Route
                    path="investment-return-calculator"
                    element={<InvestmentReturnCalculator />}
                  />
                  <Route
                    path="impermanent-loss-calculator"
                    element={<ImpermanentLossCalculator />}
                  />

                  <Route
                    path="DividendCalculator"
                    element={<DividendCalculator />}
                  />
                  <Route
                    path="GasFreeEstimator"
                    element={<GasFreeEstimator />}
                  />

                  <Route
                    path="dividend-calculator"
                    element={<DividendCalculator />}
                  />

                  <Route
                    path="crypto-converter"
                    element={<CryptoConverter />}
                  />

                  <Route path="Cryptofiat" element={<Cryptofiat />} />
                  <Route
                    path="CompoundInterestCalculator"
                    element={<CompoundInterestCalculator />}
                  />
                  <Route
                    path="MarginCalculator"
                    element={<MarginCalculator />}
                  />
                  <Route path="crypto-profit-calculator" element={<CryptoProfitCalculator />} />
                  <Route path="profit-return-calculator" element={<ProfitReturnCalculator />} />
                  <Route path="SIPCalculator" element={<SIPCalculator />} />
                  <Route path="investment-return-calculator" element={<InvestmentReturnCalculator />} />
                  <Route path="impermanent-loss-calculator" element={<ImpermanentLossCalculator />} />

                  <Route path="dollar-cost-averaging" element={<DollarCostAveraging />} />

     <Route path="DividendCalculator" element={<DividendCalculator />} />
                  <Route path="GasFreeEstimator" element={<GasFreeEstimator />} />

                  <Route path="dividend-calculator" element={<DividendCalculator />} />

                  <Route path="crypto-converter" element={<CryptoConverter />} />


                  <Route path="Cryptofiat" element={<Cryptofiat/>} />
                  <Route path="CompoundInterestCalculator" element={<CompoundInterestCalculator />} />
                  <Route path="MarginCalculator" element={<MarginCalculator />} />
                  <Route path="ICOIDOPerformanceTracker" element={<ICOIDOPerformanceTracker/>} />
                  <Route path="InterestRateChangeEstimator" element={<InterestRateChangeEstimator />} />
                  <Route path="CustomizableCryptoWatchlist" element={<CustomizableCryptoWatchlist />} />
                  <Route path="CrossChainBridgeFeeOptimizer" element={<CrossChainBridgeFeeOptimizer />} />
                </Route>
                  <Route path="InterestRateChangeEstimator" element={<InterestRateChangeEstimator />} />
                <Route
                  path="InterestRateChangeEstimator"
                  element={<InterestRateChangeEstimator />}
                />

                <Route path="cryptofiat" element={<Cryptofiat />} />
                <Route
                  path="compound-interest-calculator"
                  element={<CompoundInterestCalculator />}
                />
                <Route
                  path="margin-calculator"
                  element={<MarginCalculator />}
                />
                <Route path="compound-staking" element={<CompoundStaking />} />


                {/* </Route> */}
                <Route path="/charts">
                  <Route
                    path="bitcoin-rainbow-chart"
                    element={<BitcoinRainbowChart />}
                  />
                  <Route
                    path="bitcoin-rainbow-chart-detail"
                    element={<BitCoinRainBowCharDetail />}
                  />
                  <Route
                    path="ethereum-rainbow-chart"
                    element={<EthereumRainbowChart />}
                  />
                </Route>
                <Route path="/market">
                  <Route
                    path="currency-market-24h"
                    element={<Crypto24HourReport />}
                  />
                  <Route path="btc-dominance" element={<BTCDominance />} />
                </Route>
                <Route path="/coin/:id" element={<Coin />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/news" element={<News />} />
                <Route path="/geminiChat" element={<GeminiChat />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/nft" element={<NFTShowcase />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/about us" element={<Aboutus />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/terms-of-use" element={<TermsOfUse />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/code-of-conduct" element={<CodeOfConduct />} />
                <Route path="/cookies-policy" element={<CookiesPolicy />} />
                <Route path="/terms-conditions" element={<TermCondition />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/what's-trending" element={<WhatsTrending />} />
                <Route path="/market-update" element={<MarketUpdate />} />
                <Route path="/help-center" element={<HelpCenter />} />
                <Route path="/defi-assets" element={<DefiAssets />} />
                <Route path="/profit-loss" element={<ProfitLoss />} />
                <Route path="/crypto-reward" element={<Cryptoreward />} />
                <Route path="/cryptocard" element={<Cryptocard />} />
                <Route path="/track-nft" element={<TrackNFTs />} />
                <Route path="/crypto-news" element={<CryptoNews />} />
                <Route path="/cryptoprice" element={<CryptoPrices />} />
                <Route path="/cryptomarket" element={<CryptoMarket />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                <Route path="/google-translate" element={<GoogleTranslate />} />
                <Route path="/crypto-quiz" element={<CryptoQuiz />} />
                <Route path="/fear-and-greed" element={<FearAndGreedIndex />} />
                <Route
                  path="/affiliate-program"
                  element={<AffiliateProgram />}
                />
                <Route path="/methodology" element={<Methodology />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/methodology" element={<Methodology />} />
                <Route path="/earn" element={<Earn />} />
                <Route path="/careers" element={<Careers />} />
                <Route
                  path="/ultimate-crypto-portfolio-tracker"
                  element={<UltimateCryptoPortfolioTracker />}
                />
                <Route path="/sitemap" element={<Sitemap />} />
                
                <Route path="/Porfolio" element={<PortFolio />} />

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </div>
        <div className="footbelow">
          <Footer />
        </div>
      </I18nextProvider>
    </>
  );
}

export default App;
