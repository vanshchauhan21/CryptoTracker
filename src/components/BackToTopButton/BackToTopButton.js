import React, { useEffect, useState } from 'react'
import "./BackToTopButton.css"

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToTop = () => {
        console.log("clicked scrolltoTOP");
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };
  
  return (
    <>
        {isVisible && (
            <button id="back-to-top" onClick={scrollToTop}>
                <i className="fa fa-chevron-up" onClick={scrollToTop}></i>
            </button>
        )}
    </>
  )
}

export default BackToTopButton;