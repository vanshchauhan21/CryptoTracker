// import React, { useState } from 'react';
// import '../index.css'; // Import the CSS file for styling
// import { useTranslation } from 'react-i18next';

// const FAQ = () => {
//     const [activeIndex, setActiveIndex] = useState(null);

//     const toggleFAQ = (index) => {
//         setActiveIndex(activeIndex === index ? null : index);
//     };

//     const { t, i18n } = useTranslation();
//     const languageOptions = [
//         { code: "en", lang: "English" },
//         { code: "fr", lang: "French" },
//         { code: "hi", lang: "Hindi" },
//         { code: "es", lang: "Spanish" },
//         { code: "de", lang: "German" },
//         { code: "ta", lang: "Tamil" },
//         { code: "ru", lang: "Russian" },
//         { code: "ja", lang: "Japanese" },
//         { code: "sa", lang: "Sanskrit" },
//         { code: "it", lang: "Italian" },
//         { code: "ar", lang: "Arabic" },
//         { code: "pt", lang: "Portuguese" },
//         { code: "bn", lang: "Bengali" },
//         { code: "pa", lang: "Punjabi" },
//         { code: "ur", lang: "Urdu" },
//         { code: "ma", lang: "Marathi" },
//     ];

//     const handleLanguageChange = (event) => {
//         i18n.changeLanguage(event.target.value);
//     };

//     const faqData = [
//         {
//             question: t("faq.question1"),
//             answer: t("faq.answer1")
//         },
//         {
//             question: t("faq.question2"),
//             answer: t("faq.answer2")
//         },
//         {
//             question: t("faq.question3"),
//             answer: t("faq.answer3")
//         },
//         {
//             question: t("faq.question4"),
//             answer: t("faq.answer4")
//         },
//         {
//             question: t("faq.question5"),
//             answer: t("faq.answer5")
//         },
//         {
//             question: t("faq.question6"),
//             answer: t("faq.answer6")
//         },
//         {
//             question: t("faq.question7"),
//             answer: t("faq.answer7")
//         },
//         {
//             question: t("faq.question8"),
//             answer: t("faq.answer8")
//         },
//     ];

//     return (
//         <div className="faq-container">
//             {/* Language Dropdown */}
//             <div className="language-selector">
//                 <select className='select' onChange={handleLanguageChange} defaultValue={i18n.language}>
//                     {languageOptions.map((lng) => (
//                         <option className='option' key={lng.code} value={lng.code}>
//                             {lng.lang}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//             <h1 className="authhead">{t("title")}</h1>
//             {faqData.map((item, index) => (
//                 <div className="faq-item" key={index}>
//                     <h3
//                         className={`faq-question ${activeIndex === index ? 'active' : ''}`}
//                         onClick={() => toggleFAQ(index)}
//                     >
//                         {item.question}
//                     </h3>
//                     <p
//                         className="faq-answer"
//                         style={{ display: activeIndex === index ? 'block' : 'none' }}
//                     >
//                         {item.answer}
//                     </p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default FAQ;
import React, { useState } from 'react';
import '../index.css'; // Import the CSS file for styling
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher'; // Import the LanguageSwitcher

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const { t } = useTranslation();

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        { question: t("faq.question1"), answer: t("faq.answer1") },
        { question: t("faq.question2"), answer: t("faq.answer2") },
        { question: t("faq.question3"), answer: t("faq.answer3") },
        { question: t("faq.question4"), answer: t("faq.answer4") },
        { question: t("faq.question5"), answer: t("faq.answer5") },
        { question: t("faq.question6"), answer: t("faq.answer6") },
        { question: t("faq.question7"), answer: t("faq.answer7") },
        { question: t("faq.question8"), answer: t("faq.answer8") },
    ];

    return (
        <div className="faq-container">
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            <h1 className='authhead'>{t("title")}</h1>
            {faqData.map((item, index) => (
                <div className="faq-item" key={index}>
                    <h3 
                        className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        {item.question}
                    </h3>
                    <p 
                        className="faq-answer" 
                        style={{ display: activeIndex === index ? 'block' : 'none' }}
                    >
                        {item.answer}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
