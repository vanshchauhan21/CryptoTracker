import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import hook for translations
import { ArrowRight, Instagram, Github, Twitter, Linkedin } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/logo.jpg";
import "./ComparePage/SelectCoins/index";
import "./Footer.css";
// import { Link } from 'react-router-dom';
// import Careers from "./pages/Careers";
import GoogleTranslate from "./GoogleTranslate";
import { Link } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import BackToTopButton from "./BackToTopButton/BackToTopButton";
const Footer = () => {
  const { t } = useTranslation(); // Destructure translation function
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [stars, setStars] = useState(0);
  const [visits, setVisits] = useState(0);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscription = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:5000/api/contact/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Email: email }),
        }
      );

      if (response.ok) {
        toast.success("news letter subscribed !");
      } else {
        toast.error("Error subscribing newsletter.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/vanshchauhan21/CryptoTracker"
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching GitHub stars:", error);
      }
    };
    fetchStars();
  }, []);

  useEffect(() => {
    const storedVisits = Number(localStorage.getItem("visitCounter")) || 0;
    setVisits(storedVisits + 1);
  }, []);

  useEffect(() => {
    localStorage.setItem("visitCounter", visits);
  }, [visits]);

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

  return (
    <footer className="footer">
      <Toaster></Toaster>
      {/* .................1 links-section............... */}

    
      <div className="footer-container">

        <div className="footer-section">
          <h3 className="section-title">{t("Explore")}</h3>
          <ul className="link-list">
            {[
              { path: "/", label: "Home" },
              { path: "/aboutus", label: "About Us" },
              { path: "/compare", label: "Compare" },
              { path: "/watchlist", label: "Watchlist" },
              { path: "/dashboard", label: "Dashboard" },
              { path: "/Porfolio", label: "Portfolio" },

              { path: "/blog", label: "Blog" },

              { path: "/earn", label: "Earn" },
              { path: "/ultimate-crypto-portfolio-tracker", label: "Ultimate Crypto Portfolio Tracker" },


              // { path: "/#", label: "Earn" },
              // { path: "/crypto-blog", label: "Blog" },


              // { path: "/earn", label: "Earn" },

              // { path: "/earn", label: "Earn" },

              // { path: "/#", label: "Blog" },

              { path: "/faq", label: "FAQ" },
              { path: "/pricing", label: "Pricing" },
              { path: "/contributors", label: "Contributors" },
              { path: "/crypto-quiz", label: "Cryptocurrency Quiz" },

              { path: "/affiliate-program", label: "Affiliate Program" },

              { path: "Sitemap", label: "Site map" },
              { path: "/cosmos", label: "Cosmos Wallet Tracker"}

            ].map(({ path, label }) => (
              <li key={label}>
                <a href={path}>
                  <ArrowRight size={16} /> {t(label)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* .....................................2...................... */}

        <div className="footer-section">
          <h3 className="section-title">{t("Useful Tools")}</h3>
          <ul className="link-list">
            {[
              {
                path: "/calculators/crypto-profit-calculator",
                label: "Crypto Profit Calculator",
              },
              {
                path: "/calculators/profit-return-calculator",
                label: "Profit Return Calculator",
              },
              {
                path: "/calculators/BreakEvenCalculator",
                label: "BreakEvenCalculator",
              },
              {
                path: "/calculators/investment-return-calculator",
                label: "Investment Return Calculator",
              },
              {
                path: "/calculators/PercentageChangeCalculator",
                label: "PercentageChangeCalculator",
              },
              {
                path: "/calculators/SIPCalculator",
                label: "SIPCalculator",
              },
              {
                path: "/calculators/impermanent-loss-calculator",
                label: "Impermanent Loss Calculator",
              },
              {

                path: "/calculators/dollar-cost-averaging",
                label: "Dollar cost averaging Calculator",

                path: "/calculators/GasFreeEstimator",
                label: " Gas Free Estimator",

              },
              {
                path: "/calculators/crypto-converter",
                label: "Crypto Converter",
              },
              {
                path: "/calculators/DefiCalculator",
                label: "DeFi Yield Estimator",
              },
              {
                path: "/calculators/CompoundInterestCalculator",
                label: "CompoundInterestCalculator",
              },
              {
                path: "/calculators/InterestRateChangeEstimator",
                label: "Interest Rate Change Estimator",
              },
              {
                path: "/calculators/ICOIDOPerformanceTracker ",
                label: "ICO/IDO Performance Tracker",
              },
              {
                path: "/calculators/CrossChainBridgeFeeOptimizer",
                label: "Cross-Chain Bridge Fee Optimizer",
              },
              {
                path: "/calculators/CustomizableCryptoWatchlist",
                label: "Customizable Crypto Watchlist",
              },
              {
                path: "/calculators/MarginCalculator",
                label: "MarginCalculator",
              },
              {
                path: "/charts/bitcoin-rainbow-chart",
                label: "Bitcoin Rainbow Chart",
              },
              {
                path: "/charts/ethereum-rainbow-chart",
                label: "Ethereum Rainbow Chart",
              },
              {
                path: "/market/currency-market-24h",
                label: "24h Cryptocurrency Market",
              },
              {
                path: "/market/btc-dominance",
                label: "Bitcoin Dominance Chart",
              },
              {
                path: "/fear-and-greed",
                label: "Fear and Greed Index",
              },
            ].map(({ path, label }) => (
              <li key={label}>
                <a href={path}>
                  <ArrowRight size={16} /> {t(label)}
                </a>
              </li>
            ))}
          </ul>
        </div>


        {/* .....................................3...................... */}
        <div className="footer-section">
          <h3 className="section-title">{t("Policies")}</h3>
          <ul className="link-list">
            {[
              { path: "/disclaimer", label: "Disclaimer" },
              { path: "/terms-of-Use", label: "Term of use" },
              { path: "/privacy-policy", label: "Privacy Policy" },
              { path: "/code-of-conduct", label: "Code of Conduct" },

              { path: "/cookie-policy", label: "Cookie Policy" },

              { path: "/terms-conditions", label: "terms_conditions" },
              { path: "/faq", label: "faq" },
              { path: "/Feedback", label: "Feedback" },
              { path: "/refund-policy", label: "Refund Policy" },
            ].map(({ path, label }) => (
              <li key={label}>
                <a href={path}>
                  <ArrowRight size={16} /> {t(label)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* .....................................4...................... */}
        <div className="footer-section">
          <h3 className="section-title">{t("News")}</h3>

          <ul className="link-list">
            {[
              { path: "/what's-trending", label: "What's Trending" },
              { path: "/market-update", label: "Market Updates" },
              { path: "/", label: "Product News" },
              { path: "/", label: "Company News" },

              { path: "/crypto-news", label: "Crypto News" },



            ].map(({ path, label }) => (
              <li key={label}>
                <a href={path}>
                  <ArrowRight size={16} /> {t(label)}
                </a>
              </li>
            ))}
          </ul>
        </div>




        {/* .....................................5...................... */}
        <div className="footer-section">
          <h3 className="section-title">{t("Support")}</h3>
          <ul className="link-list">
            {[
              { path: "/help-center", label: "Help Center" },
              { path: "/defi-assets", label: "How to track your DeFi Assets" },
              {
                path: "/profit-loss",
                label: "Learn about profit/loss Calculator",
              },

              {
                path: "/crypto-reward",
                label: "Learn about Crypto Tracker Reward",
              },
              { path: "/cryptocard", label: "How to Buy Crypto with Card" },

              {
                path: "/track-nft",
                label: "How to Track NFTs on Crypto Tracker",
              },
              {
                path: "/Methodology",
                label: "Methodology",
              },
            ].map(({ path, label }) => (
              <li key={label}>
                <a href={path}>
                  <ArrowRight size={16} /> {t(label)}
                </a>
              </li>
            ))}
          </ul>
        </div>



      </div>






      <div className="footer-content-wrapper">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="logo-container">
            <div className="logo">
              <img src={logo} alt={t("image_alt")} className="logo" />
            </div>
            <h2 className="brand-name">{t("crypto_tracker")}</h2>
          </div>
          <p className="brand-description">{t("track_crypto_info")}</p>
          <GoogleTranslate />
        </div>

        {/* Connect Section */}
        <div className="footer-section">
          <h3 className="section-title">{t("connect_with_us")}</h3>
          <div className="social-icons">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Github, label: "Github" },
              { Icon: Twitter, label: "Twitter" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: DiscordIcon, label: "Discord" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                className="social-icon"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* GitHub Stars and Visitor Counter */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                gap: "20px",
                maxWidth: "400px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  color: "#fff",
                  padding: "10px",
                  borderRadius: "8px",
                  width: "100%", // Match parent width (150px)
                  height: "auto",
                  transition: "transform 0.3s, box-shadow 0.3s", // Animation for hover
                  cursor: "pointer", // Change cursor to pointer
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)"; // Scale up on hover
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0, 0, 0, 0.3)"; // Add shadow on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)"; // Scale back down
                  e.currentTarget.style.boxShadow = "none"; // Remove shadow
                }}
              >
                <i className="fab fa-github" style={{ marginRight: "8px" }}></i>
                <a
                  href="https://github.com/vanshchauhan21/CryptoTracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "bold",
                    position: "relative", // Position for animation
                  }}
                >
                  Star Us ⭐
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "0",
                      right: "0",
                      height: "2px",
                      backgroundColor: "#fff",
                      transform: "scaleX(0)",
                      transition: "transform 0.3s ease-in-out", // Animation for underline
                    }}
                  />
                </a>
                <span style={{ marginLeft: "8px", color: "#fff" }}>
                  {stars}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/*...................3 Newsletter Section................. */}
        <div className="footer-section">
          <h3 className="section-title">{t("newsletter")}</h3>
          <p className="newsletter-description">
            {t("newsletter_description")}
          </p>
          <form onSubmit={handleSubscription}>
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder={t("enter_email")}
                className="newsletter-input"
                required
                spellCheck="false"
              />
              <button type="submit" className="submit-button">
                {t("subscribe")} <ArrowRight size={16} />
              </button>
            </div>
            {message && <p className="subscription-message">{message}</p>}
          </form>
        </div>
      </div>

      <hr />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "20px", // Add padding at the top
          paddingBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Stack image and text vertically
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: " rgba(255, 255, 255, 0.15)",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            maxWidth: "200px", // Set maximum width to 200px
            textAlign: "center",
          }}
        >
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=17165260&style=0006&nbdigits=5&type=page&initCount=1000"
            alt="Visit counter"
            style={{ border: "none", marginBottom: "8px" }} // Add margin below image
          />
          <span style={{ fontWeight: "bold", fontSize: "16px", color: "#fff" }}>
            Visitors Count
          </span>
        </div>
      </div>

      <div
        className="flex"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: "0.5rem",
          fontSize: "0.9rem",
          color: "#ffffff",
          paddingBottom: "0.5rem",
        }}
      >
        <span style={{fontSize: '0.7rem'}}>© 2024 CryptoTracker. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;