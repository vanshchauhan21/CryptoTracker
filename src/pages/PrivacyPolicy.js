import React from "react";
import Header from "../components/Common/Header";
import LanguageSwitcher from './LanguageSwitcher'; // Import the LanguageSwitcher
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <div className="privacy-container">
                {/* Language Switcher */}
                <LanguageSwitcher />
                
                <h1>{t("privacy.title")}</h1>
                <p>{t("privacy.introduction")}</p>
                <h2>{t("privacy.informationCollection")}</h2>
                <p>{t("privacy.informationDetails")}</p>
                <h2>{t("privacy.howWeUse")}</h2>
                <p>{t("privacy.howWeUseDetails")}</p>
                <h2>{t("privacy.dataSharing")}</h2>
                <p>{t("privacy.dataSharingDetails")}</p>
                <h2>{t("privacy.userRights")}</h2>
                <p>{t("privacy.userRightsDetails")}</p>
                <h2>{t("privacy.securityMeasures")}</h2>
                <p>{t("privacy.securityDetails")}</p>
                <h2>{t("privacy.changes")}</h2>
                <p>{t("privacy.changesDetails")}</p>
                <h2>{t("privacy.contact")}</h2>
                <p>{t("privacy.contactDetails")}</p>
            </div>
        </>
    );
};

export default PrivacyPolicy;
