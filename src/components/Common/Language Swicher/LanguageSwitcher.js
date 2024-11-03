import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'; // Import CSS

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Spanish</button>
      <button onClick={() => changeLanguage('zh')}>Chinese</button>
    </div>
  );
}

export default LanguageSwitcher;
