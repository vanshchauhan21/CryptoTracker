import Header from "../components/Common/Header";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslation } from 'react-i18next';
function TermCondition() {
    const { t } = useTranslation();
    return (
        <>
        <Header/>
        <LanguageSwitcher/>
        <h1 className="text-color">
            {t("term")}</h1>
        </>
    )
}
export default TermCondition;