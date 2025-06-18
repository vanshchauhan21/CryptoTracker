const nodemailer = require("nodemailer");
async function EmailController(req, resp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "chauhanvansh313@gmail.com",
      pass: "your password",
    },
  });

  const mailOptions = {
    from: req.body.Email,
    to: "chauhanvansh313@gmail.com",
    subject: "CryptoTracker",
    text: `
          Name: ${req.body.Name}
          Email: ${req.body.Email}
          Message: ${req.body.Message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: " + error);
      resp.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      resp.status(200).send("Form data sent successfully");
    }
  });
}

async function NewsLetterEmailController(req, resp) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "chauhanvansh313@gmail.com",
      pass: "your password",
    },
  });

  const mailOptions = {
    from: "chauhanvansh313@gmail.com",
    to: req.body.Email,
    subject: "Welcome to the CryptoTracker Newsletter!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
        <!-- Header Section -->
        <div style="background-color: #4A90E2; padding: 20px; text-align: center; color: white;">
          <img src="cid:logoImage" alt="CryptoTracker Logo" style="width: 100px; margin-bottom: 10px; border-radius: 50%;" />
          <h1 style="font-size: 24px; margin: 0;">Welcome to CryptoTracker!</h1>
        </div>
  
        <!-- Main Content -->
        <div style="padding: 30px; background-color: #f9f9f9;">
          <h2 style="color: #333; font-size: 20px; margin-bottom: 10px;">Hello, Crypto Enthusiast!</h2>
          <p style="font-size: 16px; color: #555; line-height: 1.6; margin: 0 0 20px;">
            Thank you for joining our community at CryptoTracker! We are excited to help you stay on top of the latest cryptocurrency trends and updates.
          </p>
          <p style="font-size: 16px; color: #555; line-height: 1.6; margin: 0 0 20px;">
            Keep an eye on your inbox for upcoming newsletters, market insights, and exclusive updates curated just for you.
          </p>
  
         <div style="text-align: center; margin-top: 20px;">
  <a href="https://cryptotracker.com/" 
     style="display: inline-block; padding: 12px 25px; background-color: #333; color: white; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 5px;">
    Discover More
  </a>
</div>

        </div>
  
        <!-- Footer Section -->
        <div style="background-color: #333; color: #ccc; padding: 20px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">Best Regards, <br> <strong>CryptoTracker Team</strong></p>
          <p style="margin: 0; font-size: 12px; margin-top: 10px;">
            <a href="https://cryptotracker.com/unsubscribe" style="color: #ff6600; text-decoration: none;">Unsubscribe</a> | Follow us on 
            <a href="https://twitter.com/cryptotracker" style="color: #ff6600; text-decoration: none;">Twitter</a> and 
            <a href="https://www.linkedin.com/in/vanshchauhan21/" style="color: #ff6600; text-decoration: none;">LinkedIn</a>
          </p>
        </div>
      </div>
    `,
    attachments: [
      {
        filename: "cryptotracker-logo.png",
        path: "C:/Users/ayush/OneDrive/Desktop/CryptoTracker/backend/controller/logo.png", // Ensure this path is correct
        cid: "logoImage", // Reference this in the HTML img tag
      },
    ],
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: " + error);
      resp.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      resp.status(200).send("Form data sent successfully");
    }
  });
}

module.exports = { EmailController, NewsLetterEmailController };
