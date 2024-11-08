import React from 'react';
import Lottie from 'react-lottie';
import * as loadingAnimation from './loading-spinner.json';  // Path to your Lottie JSON animation file

const LottieSpinner = () => {
  // Customize animation settings
  const defaultOptions = {
    loop: true,
    autoplay: true, // Start animation immediately
    animationData: loadingAnimation, // Path to the Lottie animation
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="lottie-spinner-container">
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  );
};

export default LottieSpinner;
