import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../index.css'; // Import the CSS file for styling

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Toggle dropdown
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

    // Handle language change
    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setDropdownOpen(false); // Close dropdown after selection
    };

    // Language options
    const languages = [
        { code: 'en', name: 'English' },
        { code: 'fr', name: 'French' },
        { code: 'hi', name: 'Hindi' },
        { code: 'de', name: 'German' },
        { code: 'es', name: 'Spanish' },
        { code: 'ja', name: 'Japanese' },
        { code: 'sa', name: 'Sanskrit' },
        { code: 'ru', name: 'Russian' },
        { code: 'ta', name: 'Tamil' },
        { code: 'bn', name: 'Bengali' },
        { code: 'pa', name: 'Punjabi' },
        { code: 'ur', name: 'Urdu' },
        { code: 'ma', name: 'Marathi' },
        {code:"ar",name:"Arabi"},
        {code:"pt",name:"Portuguese"},
        {code:"it",name:"Italian"}
    ];

    return (
        <div className="language-dropdown">
            <button onClick={toggleDropdown} className="language-button">
                Select Language
            </button>
            {isDropdownOpen && (
                <div className="dropdown-content">
                    {languages.map(({ code, name }) => (
                        <button key={code} onClick={() => handleLanguageChange(code)}>
                            {name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
