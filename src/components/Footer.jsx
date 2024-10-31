import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import hook for translations
import { ArrowRight, Instagram, Github, Twitter, Linkedin } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/logo.jpg";
import "./ComparePage/SelectCoins/index";
import CryptoConverter from "../pages/CryptoConverter";
import BitcoinRainbowChart from "../pages/BitcoinRainbowChart";
import CryptoProfitCalculator from "../pages/CryptoProfitCalculator";
import GoogleTranslate from "./GoogleTranslate";

const Footer = () => {
  const { t } = useTranslation(); // Destructure translation function
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
              { path: "/#", label: "Impermanent Loss Calculator" },
              { path: "/CryptoConverter", label: "Crypto Convertor" },
              {
                path: "/BitcoinRainbowChart",
                label: "Bit coin Rainbow Chart",
              },
              { path: "/#", label: "24h Cryptocurrency Market" },
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

              { path: "/cookies-policy", label: "Cookie Policy" },

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
              { path: "/#", label: "How to track your DeFi Assets" },
              { path: "/#", label: "Learn about profit/loss Calculator" },
              { path: "/#", label: "Learn about Crypto Tracker Reward" },
              { path: "/#", label: "How to Buy Crypto with Card" },
              { path: "/#", label: "How to Track NFTs on Crypto Tracker" },
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

      {/* .......................2 socail icons and company logo  */}
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
        </div>
      </div>

      <hr></hr>
      {/*...................3 Newsletter Section................. */}
      <div className="footer-section newsletter-section">
        <h3 className="section-title">{t("newsletter")}</h3>
        <p className="newsletter-description">{t("newsletter_description")}</p>
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

      <div
        className="translate relative z-50 flex items-center"
        style={{ marginLeft: "16px", top: "-20px" }}
      >
        <GoogleTranslate />
      </div>
      <div
        className="flex"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "1rem",
          marginBottom: "0.5rem",
          fontSize: "0.9rem",
          color: "#ffffff",
        }}
      >
        <text>© 2024 CryptoTracker. All rights reserved.</text>
      </div>
    </footer>
  );
};

export default Footer;
