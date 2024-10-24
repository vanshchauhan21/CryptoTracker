import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import LanguageSwitcher from "./Common/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "./ComparePage/SelectCoins/index";

function Footer() {
  const { t } = useTranslation(); // Initialize translation
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscription = (e) => {
    e.preventDefault();
    if (email) {
      setMessage(t("subscriptionAdded"));
      setEmail("");
    } else {
      setMessage(t("validEmailPrompt"));
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        {/* Left Section */}
        <div className="left">
          <div className="nav-icon">
            <img src={logo} alt="Logo" className="logo" />
            <p>{t("logoText")}</p>
          </div>
          <div className="about-text">
            <h3>{t("aboutText")}</h3>
          </div>
        </div>

        {/* Right Section */}
        <div className="right">
          <div className="resources-row">
            <div className="resources first">
              <h3>{t("quickLinks")}</h3>
              <ul>
                <li><a href="/">{t("home")}</a></li>
                <li><a href="/compare">{t("compare")}</a></li>
                <li><a href="/watchlist">{t("watchlist")}</a></li>
                <li><a href="/dashboard">{t("dashboard")}</a></li>
                <li><a href="/privacy-policy">{t("privacyPolicy")}</a></li>
                <li><a href="/terms-conditions">{t("termsAndConditions")}</a></li>
                <li><a href="/faq">{t("faq")}</a></li>
              </ul>
            </div>

            <div className="resources second">
              <h3>{t("connectWithUs")}</h3>
              <ul>
                <li><a href="#"><i className="fa-brands fa-instagram fa-xl"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-github fa-xl"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-x-twitter fa-xl"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin fa-xl"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-discord fa-xl"></i></a></li>
              </ul>
            </div>

            <div className="third">
              <h3>{t("newsletterHeading")}</h3>
              <h5 className="subscribe-text">{t("subscribeText")}</h5>
              <form className="search" onSubmit={handleSubscription}>
                <input
                  type="email"
                  placeholder={t("enterEmail")}
                  spellCheck="false"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <button type="submit">
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </form>
              {message && <p className="subscription-message">{message}</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="foot">
        <p>&copy; 2024 {t("logoText")}. {t("copyright")}</p>
        <LanguageSwitcher />
      </div>
    </div>
  );
}

export default Footer;
