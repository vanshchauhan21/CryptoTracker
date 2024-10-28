import React from "react";
import Button from "../../Common/Button";
import "./styles.css";
import gradient from "../../../assets/gradient.png";
import iphone from "../../../assets/iphone.png";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next"; // Import i18n translation hook

function MainComponent() {
  const { t } = useTranslation(); // Use the translation function

  return (
    <div className="main-flex">
      <div className="info-landing">
        <h1 className="heading1">{t("track_crypto")}</h1>
        <motion.h1
          className="heading2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
        >
          {t("real_time")}
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {t("track_crypto_info")}
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >
          <a href="/dashboard">
            <Button text={t("dashboard")} />
          </a>
          <RWebShare
            data={{
              text: t("share_message"),
              url: "https://crypto-dashboard-jan.netlify.app",
              title: t("crypto_tracker"),
            }}
            onClick={() => toast.info(t("app_shared"))}
          >
            <Button text={t("share_app")} outlined={true} />
          </RWebShare>
        </motion.div>
      </div>
      <div className="gradient-div">
        <img src={gradient} alt={t("image_alt")} className="gradient" />
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
  );
}

export default MainComponent;
