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
import Footer from "./components/Footer";
import TermCondition from "./pages/TermCondition";
import Feedback from "./pages/Feedback";
import NotFoundPage from "./components/PageNotFound/PageNotFound";
import GoogleTranslate from "./components/GoogleTranslate";
import CryptoConverter from "./pages/CryptoConverter";
import BitcoinRainbowChart from "./pages/BitcoinRainbowChart";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Contributors from "./pages/Contributors";

import PrivacyPolicy from "./pages/Privacy-Policy/PrivacyPolicy";
import Pricing from "./pages/Pricing/Pricing";
import Learn from "./components/Learn";
import CryptoProfitCalculator from "./pages/CryptoProfitCalculator";

import Disclaimer from "./pages/Disclaimer/Disclaimer";

import ProgressBar from "./components/Common/ProgressBar/ProgressBar";
import RefundPolicy from "./pages/Refund Policy/RefundPolicy";

import CookiesPolicy from "./pages/CookiesPolicy";

import CookiePolicy from "./pages/Cookie-Policy/CookiePolicy";
import ProfitReturnCalculator from "./pages/Useful Tools/ProfitReturnCalculator";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  // Use useRef to keep track of the cursor element
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current; // Access the cursor DOM element

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

    // Attach event listeners
    document.body.addEventListener("mousemove", moveCursor);
    document.body.addEventListener("mousedown", handleMouseDown);
    document.body.addEventListener("mouseup", handleMouseUp);

    // Cleanup event listeners on component unmount
    return () => {
      document.body.removeEventListener("mousemove", moveCursor);
      document.body.removeEventListener("mousedown", handleMouseDown);
      document.body.removeEventListener("mouseup", handleMouseUp);
    };
  }, []); // Empty dependency array means this runs once on mount

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
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/coin/:id" element={<Coin />} />
                <Route path="/compare" element={<Compare />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/terms-conditions" element={<TermCondition />} />
                <Route path="/Feedback" element={<Feedback />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/cookies-policy" element={<CookiesPolicy />} />
                <Route path="/Contributors" element={<Contributors />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route
                  path="CryptoProfitCalculator"
                  element={<CryptoProfitCalculator />}
                />

                <Route
                  path="/ProfitReturnCalculator"
                  element={<ProfitReturnCalculator />}
                />

                <Route path="CryptoConverter" element={<CryptoConverter />} />

                <Route path="/refund-policy" element={<RefundPolicy />} />

                <Route path="/cookie-policy" element={<CookiePolicy />} />

                <Route path="/GoogleTranslate" element={<GoogleTranslate />} />
                <Route
                  path="BitcoinRainbowChart"
                  element={<BitcoinRainbowChart />}
                />
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
