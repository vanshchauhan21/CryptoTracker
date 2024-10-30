import React from "react";
// import { styled } from "@mui/material/styles";
// import { Switch } from "@mui/material";
import "./RefundPolicy.css"
import Header from "../../components/Common/Header";

function RefundPolicy() {
  

  return (
    <>
    <Header/>
    <div className="refund-policy">
      <h1>Refund Policy</h1>
      <p>
        At CryptoTracker, we aim to provide exceptional services and products to
        our users. However, if you are not satisfied with your purchase or
        experience any issues, we offer a 30-day refund policy to ensure your
        peace of mind.
      </p>
      <h2>Eligibility for Refunds</h2>
      <ul>
        <li>The refund request must be made within 30 days of purchase.</li>
        <li>
          The product or service must not have been misused or violated in any
          way.
        </li>
        <li>Refunds are only applicable for unused subscription periods.</li>
      </ul>
      <h2>How to Request a Refund</h2>
      <p>
        To initiate a refund, please contact our support team at{" "}
        <a href="mailto:support@cryptotracker.com">support@cryptotracker.com</a>{" "}
        with the following details:
      </p>
      <ul>
        <li>Your name and email address used for the purchase.</li>
        <li>Order ID or transaction number.</li>
        <li>A brief reason for your refund request.</li>
      </ul>
      <h2>Processing Refunds</h2>
      <p>
        Once we receive your refund request, our team will review it and get
        back to you within 5-7 business days. If your request is approved, the
        refund will be processed, and the amount will be credited to your
        original payment method within 10 business days.
      </p>
      <h2>Non-Refundable Items</h2>
      <p>
        Please note that the following items are not eligible for refunds:
      </p>
      <ul>
        <li>Gift cards or promotional codes.</li>
        <li>One-time event tickets or services already rendered.</li>
        <li>Customized or personalized products.</li>
      </ul>
      <p>
        If you have any further questions, please feel free to reach out to our
        support team for assistance.
      </p>

      
    </div>
    </>

  );
}

export default RefundPolicy;
