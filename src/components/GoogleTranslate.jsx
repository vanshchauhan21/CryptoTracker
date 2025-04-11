import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    window.googleTranslateInit = () => {
      if (!window.google?.translate?.TranslateElement) {
        setTimeout(window.googleTranslateInit, 100);
      } else {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages:
              "en,hi,pa,sa,mr,ur,bn,es,ja,ko,zh-CN,es,nl,fr,de,it,ta,te",
            layout:
              window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            defaultLanguage: "en",
            autoDisplay: false,
          },
          "google_element"
        );
      }
      cleanUpGadgetText();
    };

    const loadGoogleTranslateScript = () => {
      if (!document.getElementById("google_translate_script")) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
        script.id = "google_translate_script";
        script.onerror = () =>
          console.error("Error loading Google Translate script");
        document.body.appendChild(script);
      }
    };

    const cleanUpGadgetText = () => {
      const gadgetElement = document.querySelector(".goog-te-gadget");
      if (gadgetElement) {
        const textNodes = gadgetElement.childNodes;
        textNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = ""; // Clear text content
          }
        });
      }
    };
    
    loadGoogleTranslateScript();

    if (window.google && window.google.translate) {
      window.googleTranslateInit();
    }

    return () => {
      // Cleanup logic if necessary
    };
  }, []);

  return (
    <div
      id="google_element"
      className="google-translate-container pl-20 md:pl-0"
    >
      <style jsx>
        {
          #google_element {
            padding-top: 20px; 
          }

          .goog-te-combo {
            display: inline-block;
            background: rgba(255, 255, 255, 0.15); 
            border: 3px solid rgba(255, 255, 255, 0.3); 
            border-radius: 12px; 
            padding: 0.5rem 1rem; 
            font-size: 0.875rem; 
            transition: all 0.3s ease; 
            outline: none;
            color: white; 
            font-weight: 500; 
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); 
          }

          .goog-te-combo:hover {
            box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3); 
          }

          .goog-te-combo:focus {
            color: black; 
          }

          .goog-te-combo option {
            color: black; 
          }

          .goog-logo-link {
            display: none !important;
          }

          .goog-te-gadget {
            color: transparent !important;
          }

          .goog-te-gadget > span > a {
            display: none !important;
          }

          .goog-te-gadget .goog-te-combo {
            color: white; 
          }

          #google_translate_element
            .goog-te-gadget-simple
            .goog-te-menu-value
            span:first-child {
            display: none;
          }

          #google_translate_element
            .goog-te-gadget-simple
            .goog-te-menu-value:before {
            content: "Translate"; 
            color: white; 
          }

          .goog-te-banner-frame {
            display: none !important;
          }

          .goog-te-menu-frame {
            max-height: 400px !important;
            overflow-y: auto !important;
            background: rgba(255, 255, 255, 0.15); 
            border: 1px solid rgba(255, 255, 255, 0 .3); 
            border-radius: 12px ; 
          }

          /* Hide the banner frame */
          .goog-te-banner-frame {
            display: none !important;
          }

          /* Customize the iframe */
          .skiptranslate > iframe {
            height: 0 !important;
            border-style: none;
            box-shadow: none;
          }
          
          body {
            position: relative;
            top: 0 !important;
          }
        `}
      </style>
    </div>
  );
};

export default GoogleTranslate;