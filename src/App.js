import CryptoProfitCalculatorInfo from "./components/CryptoProfitCalculatorInfo";

import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useRef } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

// Page Imports
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import Watchlist from "./pages/Watchlist";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing/Pricing";
import Contributors from "./pages/Contributors";
import Login from "./pages/Login.js";
import Blog from "./pages/Blogs/Blog.js";
import CryptoProfitCalculator from "./pages/CryptoProfitCalculator";
import ProfitReturnCalculator from "./pages/Useful Tools/ProfitReturnCalculator";
import ImpermanentLossCalculator from "./pages/ImpermanentLossCalculator";
import DollarCostAveraging from "./pages/dca.js";
import CompoundInterestCalculator from "./pages/CompoundInterestCalculator.js";
import MarginCalculator from "./pages/MarginCalculator.js";
import Contact from "./pages/Contactus/Contactus.jsx";
import BTCDominance from "./pages/BTCDominance/BTCDominance";
import GeminiChat from "./pages/GeminiAIChat/GeminiAIChat.jsx";
import Learn from "./components/Learn.jsx";
import News from "./components/News.jsx";
import InvestmentReturnCalculator from "./pages/Useful Tools/Investmentreturncalculator.js";
import CryptoConverter from "./pages/CryptoConverter";
import Cryptofiat from "./pages/Cryptofiat";
import DividendCalculator from "./pages/DividendCalculator";
import GasFreeEstimator from "./pages/gfe";
import InterestRateChangeEstimator from "./pages/rce.js";
import ICOIDOPerformanceTracker from "./pages/ico.js";
import CrossChainBridgeFeeOptimizer from "./pages/bfo.js";

// Components
import ProgressBar from "./components/Common/ProgressBar/ProgressBar";
import Footer from "./components/Footer.jsx";  // ✅ Footer is correctly imported
import BackToTopButton from "./components/BackToTopButton/BackToTopButton.js";
import Disclaimer from "./components/Disclaimer/Disclaimer.js";
import Chatbot from "./components/Chatbot-button/Chatbot.js";

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

    try {
      document.body.addEventListener("mousemove", moveCursor);
      document.body.addEventListener("mousedown", handleMouseDown);
      document.body.addEventListener("mouseup", handleMouseUp);
    } catch (error) {
      console.error("Error setting up cursor event listeners:", error);
    }

    return () => {
      try {
        document.body.removeEventListener("mousemove", moveCursor);
        document.body.removeEventListener("mousedown", handleMouseDown);
        document.body.removeEventListener("mouseup", handleMouseUp);
      } catch (error) {
        console.error("Error cleaning up cursor event listeners:", error);
      }
    };
  }, []);

  return (
    <>
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
              <Route path="/crypto-profit-calculator-page" element={<CryptoProfitCalculator />} />

                <Route path="/" element={<Home />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/news" element={<News />} />
                <Route path="/login" element={<Login />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contributors" element={<Contributors />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/geminiChat" element={<GeminiChat />} />
                <Route path="/contactus" element={<Contact />} />
                <Route path="/analysis" element={<BTCDominance />} /> 
                <Route path="/disclaimer" element={<Disclaimer />} /> 

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
                  <Route path="cross-chain-bridge-fee-optimizer" element={<CrossChainBridgeFeeOptimizer />} />
                </Route>
              </Routes>

              {/* ✅ Footer is placed **outside** of <Routes> so it appears on all pages */}
              <Footer />
              {/*chatbot placed such that it appears on all pages */}
              <Chatbot />
            </BrowserRouter>
          </ThemeProvider>
        </div>
        <BackToTopButton />
      </I18nextProvider>
    </>
  );
}

export default App;
