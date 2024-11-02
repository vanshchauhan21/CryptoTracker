import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import hook for translations
import { ArrowRight, Instagram, Github, Twitter, Linkedin } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import logo from "../assets/logo.jpg";
import logo from "../../assets/logo.jpg"
import "../ComparePage/SelectCoins/index";
// import CryptoConverter from "../../pages/CryptoConverter";

// import BitcoinRainbowChart from "../../pages/BitCoinRainBow/BitcoinRainbowChart";
// import CryptoProfitCalculator from "../../pages/CryptoProfitCalculator";
import "./Footer.css";
import GoogleTranslate from "../GoogleTranslate";

const Footer = () => {
  const { t } = useTranslation(); // Destructure translation function
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [stars, setStars] = useState(0);
  const [visits, setVisits] = useState(0);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    if (email) {
      setMessage(t("app_shared")); // Use localized message for subscription
      setEmail("");
    } else {
      setMessage(t("please_enter_email")); // Use localized error message
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

      {/* .................1 links-section............... */}
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="section-title">{t("Explore")}</h3>
          <ul className="link-list">
            {[
              { path: "/", label: "Home" },
              { path: "/compare", label: "Compare" },
              { path: "/watchlist", label: "Watchlist" },
              { path: "/dashboard", label: "Dashboard" },
              { path: "/#", label: "Earn" },
              { path: "/#", label: "Blog" },
              { path: "/faq", label: "FAQ" },
              { path: "/pricing", label: "Pricing" },
              { path: "/contributors", label: "Contributors" },
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
                path: "/CryptoProfitCalculator",
                label: "Crypto Profit Calculator",
              },
              {
                path: "/ProfitReturnCalculator",
                label: "Profit Return Calculator",
              },
              {
                path: "/ImpermanentLossCalculator",
                label: "Impermanent Loss Calculator",
              },
              { path: "/CryptoConverter", label: "Crypto Convertor" },
              {
                path: "/BitcoinRainbowChart",
                label: "Bit coint Rainbow Chart",
              },
              { path: "/CryptoMarket", label: "24h Cryptocurrency Market" },
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
              { path: "/#", label: "Term of use" },
              { path: "/privacy-policy", label: "Privacy Policy" },


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
          <h3 className="section-title">{t("Support")}</h3>
          <ul className="link-list">
            {[
              { path: "/#", label: "Help Center" },
              { path: "/defi-assets", label: "How to track your DeFi Assets" },
              { path: "/profit-loss", label: "Learn about profit/loss Calculator" },
              { path: "/#", label: "Learn about Crypto Tracker Reward" },
              { path: "/#", label: "How to Buy Crypto with Card" },
              { path: "/#", label: "How to Track NFTs on Crypto Tracker" },
              { path: "/nft", label: "NFT" },

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




 
  



      {/* .......................2 socail icons and company logo  */ }
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
              <a key={label} href="#" className="social-icon" aria-label={label}>
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
                  backgroundColor: "#d3d3d3", // Light gray background
                  color: "#333",
                  padding: "10px",
                  borderRadius: "8px",
                  width: "100%", // Match parent width (150px)
                  height: "auto",
                }}
              >
                <i className="fab fa-github" style={{ marginRight: "8px" }}></i>
                <a
                  href="https://github.com/vanshchauhan21/CryptoTracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#333",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  Star Us ⭐
                </a>
                <span style={{ marginLeft: "8px" }}>{stars}</span>
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
          paddingTop: "20px",          // Add padding at the top
          paddingBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",      // Stack image and text vertically
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#d3d3d3",
            color: "#333",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            maxWidth: "200px",           // Set maximum width to 200px
            textAlign: "center",
          }}
        >
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=17165260&style=0006&nbdigits=5&type=page&initCount=1000"
            alt="Visit counter"
            style={{ border: "none", marginBottom: "8px" }} // Add margin below image
          />
          <span style={{ fontWeight: "bold", fontSize: "16px" }}>
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
        <span>© 2024 CryptoTracker. All rights reserved.</span>
      </div>
    </footer >
  );
};

export default Footer;
