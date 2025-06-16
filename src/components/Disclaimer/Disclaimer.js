import React from "react";
import "./Disclaimer.css";

const Disclaimer = () => {
  return (
    <div className="disclaimer-container">
      <h1>Disclaimer</h1>
      <p>
        The information on CryptoTracker is provided for general informational
        purposes only. It is not financial advice.
      </p>
      <p>
        We do not guarantee the accuracy or reliability of the data. Use it at
        your own risk.
      </p>
      <p>
        Always do your own research before making investment decisions. We are
        not responsible for any losses.
      </p>
      <p>Thanks for using CryptoTracker!</p>
    </div>
  );
};

export default Disclaimer;
