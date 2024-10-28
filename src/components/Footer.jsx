import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import hook for translations
import { ArrowRight, Instagram, Github, Twitter, Linkedin } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/logo.jpg";
import "./ComparePage/SelectCoins/index";
import LanguageSwitcher from "./Common/Language Swicher/LanguageSwitcher";

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
      <div className="footer-container">
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

          {/* Main Content Grid */}
          <div className="footer-content">
            {/* Quick Links Section */}
            <div className="footer-section">
              <h3 className="section-title">{t("quick_links")}</h3>
              <ul className="link-list">
                {[
                  { path: "/", label: "home" },
                  { path: "/compare", label: "compare" },
                  { path: "/watchlist", label: "watchlist" },
                  { path: "/dashboard", label: "dashboard" },
                  { path: "/privacy-policy", label: "privacy_policy" },
                  { path: "/terms-conditions", label: "terms_conditions" },
                  { path: "/faq", label: "faq" },
                ].map(({ path, label }) => (
                  <li key={label}>
                    <a href={path}>
                      <ArrowRight size={16} /> {t(label)}
                    </a>
                  </li>
                ))}
              </ul>
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

            {/* Newsletter Section */}
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
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <div className="footer-divider" />
          <LanguageSwitcher />
          <p className="copyright-text">
            © 2024 {t("crypto_tracker")}. {t("all_rights_reserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
